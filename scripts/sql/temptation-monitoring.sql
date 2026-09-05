-- Funnel: only runs with an observed day-four night entry are the denominator.
WITH runs AS (
  SELECT app_id, user_id, run_id,
    MAX(event_type='night_entered') AS night,
    MAX(event_type='offer_entered') AS offer,
    MAX(event_type='offer_choice' AND json_extract(details_json,'$.accepted')=1) AS accepted,
    MAX(event_type='offer_choice' AND json_extract(details_json,'$.accepted')=0) AS declined,
    MAX(event_type='gate_evaluated' AND json_extract(details_json,'$.reason') IN
      ('day4_waited','no_student_route','affinity_guard','no_eligible_rival')) AS blocked,
    MAX(event_type='freetalk_entered' AND scene_id='morning5_counteroffer_group_talk') AS confrontation
  FROM cupid_route_events WHERE is_test=0 AND created_at >= datetime('now','-7 days')
  GROUP BY app_id, user_id, run_id
)
SELECT app_id, COUNT(*) AS observed_night_runs, SUM(offer) AS offer_runs,
  SUM(accepted) AS accepted_runs, SUM(declined) AS declined_runs,
  SUM(confrontation) AS confrontation_runs, SUM(blocked AND NOT offer) AS blocked_before_offer,
  SUM(NOT offer AND NOT blocked) AS unresolved_before_offer
FROM runs WHERE night=1 GROUP BY app_id;

-- Each actual decision, including day-five override conditions.
SELECT scene_id, json_extract(details_json,'$.reason') AS reason, next_scene_id,
  COUNT(*) AS decisions, COUNT(DISTINCT app_id || ':' || user_id || ':' || run_id) AS runs
FROM cupid_route_events
WHERE is_test=0 AND event_type='gate_evaluated' AND created_at >= datetime('now','-7 days')
GROUP BY scene_id, reason, next_scene_id ORDER BY runs DESC;

-- How many rival selections the former zero-affinity rule would have blocked.
SELECT json_extract(details_json,'$.wouldFailFormerZeroGate') AS formerly_blocked,
  COUNT(*) AS decisions, COUNT(DISTINCT app_id || ':' || user_id || ':' || run_id) AS runs
FROM cupid_route_events
WHERE is_test=0 AND event_type='gate_evaluated'
  AND json_extract(details_json,'$.reason')='rival_selected'
  AND created_at >= datetime('now','-7 days')
GROUP BY formerly_blocked;

-- Restored saves / partial observations must be reported separately.
SELECT COUNT(*) AS runs_without_night_observation FROM (
  SELECT app_id,user_id,run_id FROM cupid_route_events
  WHERE is_test=0 AND created_at >= datetime('now','-7 days')
  GROUP BY app_id,user_id,run_id HAVING MAX(event_type='night_entered')=0
);
