# Scenario Flow: ko_day1_1_morning.js

```mermaid
flowchart TB
    classroom_2_3{CHOICE: classroom_2_3}
    style classroom_2_3 fill:#FFD700,stroke:#333,stroke-width:2px
    hallway_1_3_low{CHOICE: hallway_1_3_low}
    style hallway_1_3_low fill:#FFD700,stroke:#333,stroke-width:2px
    classroom_2_3_low{CHOICE: classroom_2_3_low}
    style classroom_2_3_low fill:#FFD700,stroke:#333,stroke-width:2px
    classroom_2_3_high{CHOICE: classroom_2_3_high}
    style classroom_2_3_high fill:#FFD700,stroke:#333,stroke-width:2px
    hallway_1_3_high{CHOICE: hallway_1_3_high}
    style hallway_1_3_high fill:#FFD700,stroke:#333,stroke-width:2px
    start([START])
    style start fill:#90EE90,stroke:#333,stroke-width:3px
    path_friendly_1_2([END: path_friendly_1_2])
    style path_friendly_1_2 fill:#FFB6C1,stroke:#333,stroke-width:3px
    path_friendly_1([END: path_friendly_1])
    style path_friendly_1 fill:#FFB6C1,stroke:#333,stroke-width:3px
    hallway_1_3{CHOICE: hallway_1_3}
    style hallway_1_3 fill:#FFD700,stroke:#333,stroke-width:2px
    hallway_2_3{CHOICE: hallway_2_3}
    style hallway_2_3 fill:#FFD700,stroke:#333,stroke-width:2px
    intro_3{CHOICE: intro_3}
    style intro_3 fill:#FFD700,stroke:#333,stroke-width:2px

    hallway_1_3_low -->|choice| hallway_talk_club_high
    hallway_2_2 -.-> hallway_2_3
    teacher_free_talk -.-> classroom_2_3_high
    hallway_1_3_high -->|choice| hallway_talk_flatter_high
    start --> start_2
    path_friendly_1_2 --> hallway_1
    intro_2 -.-> intro_3
    hallway_free_talk -.-> hallway_1_3_high
    path_friendly_1 --> path_friendly_1_2
    hallway_1_3 -->|choice| hallway_talk_club_high
    hallway_2_3 -->|choice| path_flirt_2
    intro_3 -->|choice| path_friendly_1
```n
## Statistics

- **Total Nodes:** 97
- **Choice Nodes:** 8
- **Affinity Branches:** 11
- **Input Nodes:** 6

## Dead Ends (No Next Node)

- `hallway_talk_listen_normal_2`
- `classroom_2_3`
- `teacher_name_share_low`
- `hallway_talk_listen_high_2`
- `hallway_talk_trap_high`
- `hallway_talk_trap_normal`
- `class_after_party_3`
- `start_4`
- `hallway_talk_listen_normal`
- `hallway_talk_flatter_low`
- `hallway_talk_club_low`
- `classroom_2_3_low`
- `classroom_2_low`
- `hallway_talk_flatter_high_2`
- `hallway_talk_club_normal`
- `classroom_2_3_high`
- `hallway_talk_club_high_2`
- `hallway_talk_flatter_normal`
- `hallway_name_share`
- `hallway_talk_listen_high`
- `hallway_talk_listen_low`
- `hallway_name_share_2`
- `teacher_name_share_normal`
- `hallway_talk_trap_high_2`
- `teacher_name_share_high`
- `classroom_2_high`
- `classroom_1_2_high`
- `hallway_talk_flatter_high`
- `hallway_talk_club_high`
- `hallway_name_ask`
- `classroom_2_normal`
- `hallway_talk_trap_low`

## Ghost Nodes (Not Referenced)

- `classroom_1_3_high`
- `class_after_active`
- `hallway_talk_flatter_low_2`
- `hallway_talk_listen_normal_2`
- `classroom_2_3`
- `teacher_name_share_low`
- `hallway_talk_listen_high_2`
- `hallway_talk_trap_high`
- `hallway_talk_trap_normal`
- `path_direct_2`
- `hallway_1_3_low`
- `path_normal_2`
- `hallway_talk_club_low_2`
- `hallway_talk_flatter_normal_2`
- `hallway_talk_listen_normal`
- `hallway_talk_flatter_low`
- `intro_1`
- `hallway_talk_club_low`
- `path_rude_2`
- `path_rude_1`
- `hallway_talk_trap_normal_2`
- `classroom_2_3_low`
- `class_after_party`
- `hallway_talk_trap_low_2`
- `classroom_2_low`
- `hallway_talk_flatter_high_2`
- `hallway_talk_club_normal`
- `hallway_talk_club_high_2`
- `class_after_quiet`
- `hallway_talk_flatter_normal`
- `hallway_talk_club_normal_2`
- `hallway_2_low`
- `hallway_1_2`
- `path_blush_1`
- `hallway_name_share`
- `hallway_talk_listen_low_2`
- `hallway_talk_listen_high`
- `hallway_talk_listen_low`
- `classroom_2_2`
- `classroom_1_1_low`
- `class_after_study`
- `hallway_name_share_2`
- `teacher_name_share_normal`
- `hallway_talk_trap_high_2`
- `path_tease_1`
- `teacher_name_share_high`
- `hallway_1_3`
- `classroom_1_1`
- `path_silent_1`
- `classroom_2_normal`
- `hallway_talk_trap_low`

## Legend

- ?윟 **Green (START)** - Entry point
- ?뵶 **Pink (END)** - Exit point / Scene transition
- ?윞 **Yellow (CHOICE)** - Player choice
- ?뵷 **Blue (AFFINITY)** - Affinity-based branch
- ?윢 **Purple (INPUT)** - User input
- ??**Gray** - Regular dialogue node
- **Dotted line** - Scene transition / Simplified connection

---

**Generated:** 2026-01-29 21:43:00  
**Tool:** scenario_visualizer.ps1
