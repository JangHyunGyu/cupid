(function () {
  "use strict";

  if (window.__gaEngagementTrackerInstalled) {
    return;
  }
  window.__gaEngagementTrackerInstalled = true;

  var HEARTBEAT_MS = 15000;
  var MIN_FLUSH_MS = 1000;
  var activeSince = 0;
  var pendingMs = 0;
  var totalVisibleMs = 0;
  var sequence = 0;
  var isFocused = typeof document.hasFocus === "function" ? document.hasFocus() : true;
  var heartbeatTimer = null;

  function now() {
    return Date.now();
  }

  function isVisible() {
    return !document.visibilityState || document.visibilityState === "visible";
  }

  function isActive() {
    return isVisible() && isFocused;
  }

  function startActive(timestamp) {
    if (!activeSince) {
      activeSince = timestamp || now();
    }
  }

  function collectActive(timestamp) {
    if (!activeSince) {
      return;
    }
    var current = timestamp || now();
    var delta = Math.max(0, current - activeSince);
    activeSince = current;
    pendingMs += delta;
    totalVisibleMs += delta;
  }

  function stopActive(timestamp) {
    collectActive(timestamp);
    activeSince = 0;
  }

  function sendEngagement(reason, force) {
    var current = now();
    if (isActive()) {
      collectActive(current);
    }
    var duration = Math.round(pendingMs);
    if (duration <= 0 || (!force && duration < MIN_FLUSH_MS)) {
      return;
    }
    if (typeof window.gtag !== "function") {
      return;
    }
    pendingMs = 0;
    sequence += 1;
    try {
      window.gtag("event", "accurate_engagement_time", {
        engagement_time_msec: duration,
        visible_time_msec: duration,
        visible_time_total_msec: Math.round(totalVisibleMs),
        engagement_sequence: sequence,
        engagement_reason: reason || "heartbeat",
        transport_type: "beacon"
      });
    } catch (error) {
      pendingMs += duration;
      sequence -= 1;
    }
  }

  function refreshActiveState() {
    if (isActive()) {
      startActive();
      return;
    }
    stopActive();
    sendEngagement(isVisible() ? "blur" : "hidden", true);
  }

  function onHeartbeat() {
    if (isActive()) {
      sendEngagement("heartbeat", false);
    } else {
      refreshActiveState();
    }
  }

  function startHeartbeat() {
    if (!heartbeatTimer) {
      heartbeatTimer = setInterval(onHeartbeat, HEARTBEAT_MS);
    }
  }

  function stopHeartbeat() {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  }

  function onFocus() {
    isFocused = true;
    refreshActiveState();
  }

  function onBlur() {
    isFocused = false;
    refreshActiveState();
  }

  function onPageHide(event) {
    stopActive();
    sendEngagement("pagehide", true);
    if (!event || !event.persisted) {
      stopHeartbeat();
    }
  }

  function onBeforeUnload() {
    stopActive();
    sendEngagement("beforeunload", true);
    stopHeartbeat();
  }

  function onPageShow() {
    isFocused = typeof document.hasFocus === "function" ? document.hasFocus() : true;
    startHeartbeat();
    refreshActiveState();
  }

  function onFreeze() {
    stopActive();
    sendEngagement("freeze", true);
    stopHeartbeat();
  }

  startHeartbeat();

  window.addEventListener("focus", onFocus, true);
  window.addEventListener("blur", onBlur, true);
  document.addEventListener("visibilitychange", refreshActiveState, true);
  window.addEventListener("pagehide", onPageHide, true);
  window.addEventListener("beforeunload", onBeforeUnload, true);
  window.addEventListener("pageshow", onPageShow, true);

  if (typeof document.addEventListener === "function") {
    document.addEventListener("freeze", onFreeze, true);
  }

  refreshActiveState();
})();
