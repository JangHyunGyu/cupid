/**
 * ============================================================================
 * CUPID - day3_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day3_4_night.js + en_day3_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[3]) SCENARIO[3] = {};

Object.assign(SCENARIO[3], {
    "day3_night_start": {
        "background": "assets/images/background/room_my.png",
        "bgm": "night2.mp3",
        "character": null,
        "night": true,
        "next": "day3_night_reflect",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*집에 도착했다. 금요일 밤... 내일부터 주말이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm home. Friday night... Tomorrow starts the weekend.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Estoy en casa. Viernes por la noche... Mañana empieza el fin de semana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*家に着いた。金曜の夜…明日から週末だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis rentré. Vendredi soir... Demain, c'est le week-end.*"
            }
        }
    },
    "day3_night_reflect": {
        "background": "assets/images/background/room_my.png",
        "night": true,
        "branches": [
            {
                "next": "day3_night_reflect_trouble",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_reflect_tension",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_reflect_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대에 누워 오늘 하루를 되돌아본다. 점심때 일... 방과후에 있었던 일들...*"
            },
            "en": {
                "name": "Me",
                "text": "*Lying on the bed, I reflect on today. What happened at lunch... what happened after school...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Acostado en la cama, reflexiono sobre hoy. Lo que pasó en el almuerzo... lo que pasó después de clases...*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドに横になって今日一日を振り返る。昼休みのこと…放課後のこと…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Allongé sur le lit, je repense à cette journée. Ce qui s'est passé au déjeuner... ce qui s'est passé après les cours...*"
            }
        }
    },
    "day3_night_reflect_trouble": {
        "night": true,
        "next": "day3_night_phone_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*점심때 다 들켜버렸다... 서늘하게 식어버린 공기와 나를 향하던 날 선 시선들이 아직도 생생하다. 주말이 무사히 지나갈 수 있을까?*"
            },
            "en": {
                "name": "Me",
                "text": "*Everyone found out at lunch... Can the weekend go smoothly?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Todos se enteraron en el almuerzo... ¿Podrá el fin de semana transcurrir sin problemas?*"
            },
            "ja": {
                "name": "僕",
                "text": "*昼休みに全部バレた…週末は無事に過ごせるだろうか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Tout le monde a tout découvert au déjeuner... Est-ce que le week-end va bien se passer ?*"
            }
        }
    },
    "day3_night_reflect_tension": {
        "night": true,
        "next": "day3_night_phone_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*여러 약속을 잡아버렸는데... 한 명 한 명의 얼굴이 떠오를 때마다 가슴이 뛰면서도, 동시에 식은땀이 흐른다. 시간 배분을 잘 해야겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I made multiple plans... I need to manage my time well.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hice múltiples planes... Necesito administrar bien mi tiempo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*複数の約束を入れてしまった…時間配分をうまくやらないと。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai pris plusieurs rendez-vous... Il faut que je gère bien mon temps.*"
            }
        }
    },
    "day3_night_reflect_normal": {
        "night": true,
        "next": "day3_night_phone_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일이 기대된다. 어떤 하루가 될까?*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm looking forward to tomorrow. What kind of day will it be?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Espero con ansias el mañana. ¿Qué tipo de día será?*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日が楽しみだ。どんな一日になるだろう？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai hâte d'être à demain. Quelle journée ce sera ?*"
            }
        }
    },
    "day3_night_phone_check": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_multiple_messages",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_single_message",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_night_no_message"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*스마트폰을 확인한다. 메시지가 와 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I check my smartphone. There are messages.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Reviso mi teléfono. Hay mensajes.*"
            },
            "ja": {
                "name": "僕",
                "text": "*スマホを確認する。メッセージが来ている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je vérifie mon smartphone. Il y a des messages.*"
            }
        }
    },
    "day3_night_multiple_messages": {
        "night": true,
        "next": "day3_night_check_messages",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지가 여러 개 와 있다... 심장이 두근거린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*There are multiple messages... My heart is pounding.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hay múltiples mensajes... Mi corazón late con fuerza.*"
            },
            "ja": {
                "name": "僕",
                "text": "*メッセージが複数来ている…心臓がドキドキする。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a plusieurs messages... Mon cœur bat la chamade.*"
            }
        }
    },
    "day3_night_check_messages": {
        "night": true,
        "choices": [
            {
                "next": "day3_night_msg_seoyeon",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_msg_yuna",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_msg_dain",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_msg_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_msg_teacher",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_night_ignore_all"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어떤 메시지부터 확인할까?*",
                "choices": [
                    "서연이의 메시지",
                    "유나의 메시지",
                    "다인이의 메시지",
                    "보건선생님의 메시지",
                    "담임선생님의 메시지",
                    "그냥 자버린다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Which message should I check first?*",
                "choices": [
                    "Seoyeon's message",
                    "Yuna's message",
                    "Dain's message",
                    "School Nurse's message",
                    "Homeroom Teacher's message",
                    "Just go to sleep"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Qué mensaje debería revisar primero?*",
                "choices": [
                    "Mensaje de Seoyeon",
                    "Mensaje de Yuna",
                    "Mensaje de Dain",
                    "Mensaje de la Enfermera",
                    "Mensaje de la Profesora",
                    "Simplemente dormir"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*どのメッセージから確認しようか？*",
                "choices": [
                    "ソヨンのメッセージ",
                    "ユナのメッセージ",
                    "ダインのメッセージ",
                    "保健先生のメッセージ",
                    "担任先生のメッセージ",
                    "そのまま寝る"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Quel message devrais-je lire en premier ?*",
                "choices": [
                    "Le message de Seoyeon",
                    "Le message de Yuna",
                    "Le message de Dain",
                    "Le message de l'Infirmière Scolaire",
                    "Le message du Professeur Principal",
                    "Aller dormir"
                ]
            }
        }
    },
    "day3_night_msg_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_seoyeon_msg",
        "branches": [
            {
                "next": "day3_night_seoyeon_suspicious",
                "condition": "day3_seoyeon_knows_others"
            },
            {
                "next": "day3_night_seoyeon_jealous",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_seoyeon_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*메시지: 밤 10시* '{name}, 아직 안 자지? 내일 정말 기대돼!'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Message: 10 PM* '{name}, are you still awake? I'm so excited for tomorrow!'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Message: 10 PM* '{name}, are you still awake? I'm so excited for tomorrow!'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Message: 10 PM* '{name}, are you still awake? I'm so excited for tomorrow!'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Message : 22h* '{name}, tu es encore réveillé ? J'ai tellement hâte d'être à demain !'"
            }
        }
    },
    "day3_night_seoyeon_suspicious": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_seoyeon_lie",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    }
                },
                "setFlag": "day3_lied_to_seoyeon"
            },
            {
                "next": "day3_night_seoyeon_honest",
                "stats": {
                    "Seoyeon": {
                        "affinity": -8
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_ignore",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*추가 메시지* '근데... 나만 만나는 거 맞지? 다른 약속 없는 거지?'",
                "choices": [
                    "'응, 서연이만 만나!'",
                    "'솔직히 말할게...'",
                    "*읽씹*"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Additional message* 'But... you're only meeting me, right? No other plans?'",
                "choices": [
                    "'Yes, only you!'",
                    "'Let me be honest...'",
                    "*Leave on read*"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Additional message* 'But... you're only meeting me, right? No other plans?'",
                "choices": [
                    "'Yes, only you!'",
                    "'Let me be honest...'",
                    "*Leave on read*"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Additional message* 'But... you're only meeting me, right? No other plans?'",
                "choices": [
                    "'Yes, only you!'",
                    "'Let me be honest...'",
                    "*Leave on read*"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Message supplémentaire* 'Mais... tu ne vois que moi, hein ? Pas d'autres plans ?'",
                "choices": [
                    "'Oui, toi seule !'",
                    "'Laisse-moi être honnête...'",
                    "*Laisser en vu*"
                ]
            }
        }
    },
    "day3_night_seoyeon_lie": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "'진짜? 믿을게! 그럼 내일 봐! 💕'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "'Really? I trust you! See you tomorrow! 💕'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "'Really? I trust you! See you tomorrow! 💕'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "'Really? I trust you! See you tomorrow! 💕'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "'Vraiment ? Je te fais confiance ! À demain ! 💕'"
            }
        }
    },
    "day3_night_seoyeon_honest": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_seoyeon_angry",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "'...뭐? 다른 약속도 있어? 누구랑?'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "'...What? You have other plans? With who?'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "'...What? You have other plans? With who?'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "'...What? You have other plans? With who?'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "'...Quoi ? Tu as d'autres plans ? Avec qui ?'"
            }
        }
    },
    "day3_night_seoyeon_angry": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_seoyeon_angry",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "'...알았어. 주말에 보면 알겠지.'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "'...Fine. We'll see this weekend.'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "'...Fine. We'll see this weekend.'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "'...Fine. We'll see this weekend.'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "'...Très bien. On verra ce week-end.'"
            }
        }
    },
    "day3_night_seoyeon_ignore": {
        "character": "assets/images/characters/seyoun_sad.png",
        "night": true,
        "setFlag": "day3_ignored_seoyeon",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*답장을 하지 않았다. 서연이가 실망할 것 같다...*"
            },
            "en": {
                "name": "Me",
                "text": "*I didn't reply. Seoyeon will probably be disappointed...*"
            },
            "es": {
                "name": "Yo",
                "text": "*I didn't reply. Seoyeon will probably be disappointed...*"
            },
            "ja": {
                "name": "僕",
                "text": "*I didn't reply. Seoyeon will probably be disappointed...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je n'ai pas répondu. Seoyeon sera sûrement déçue...*"
            }
        }
    },
    "day3_night_seoyeon_jealous": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_seoyeon_apologize",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_reassure",
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_ignore",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*추가 메시지* '오늘 점심때 일... 아직도 마음에 걸려. 나한테 솔직하게 말해줘.' *화면 너머로 그녀의 떨리는 목소리가 들리는 것만 같아 가슴이 욱신거린다.*",
                "choices": [
                    "'미안해, 다들 거절 못 해서...'",
                    "'서연이가 제일 중요해'",
                    "*읽씹*"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Additional message* 'About lunch today... it's still bothering me. Please be honest with me.'",
                "choices": [
                    "'Sorry, I couldn't say no to anyone...'",
                    "'You're the most important to me'",
                    "*Leave on read*"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Additional message* 'About lunch today... it's still bothering me. Please be honest with me.'",
                "choices": [
                    "'Sorry, I couldn't say no to anyone...'",
                    "'You're the most important to me'",
                    "*Leave on read*"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "*Additional message* 'About lunch today... it's still bothering me. Please be honest with me.'",
                "choices": [
                    "'Sorry, I couldn't say no to anyone...'",
                    "'You're the most important to me'",
                    "*Leave on read*"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Message supplémentaire* 'À propos du déjeuner aujourd'hui... ça me tracasse encore. S'il te plaît, sois honnête avec moi.'",
                "choices": [
                    "'Désolé, je n'ai pas pu dire non...'",
                    "'Tu es la plus importante pour moi'",
                    "*Laisser en vu*"
                ]
            }
        }
    },
    "day3_night_seoyeon_apologize": {
        "character": "assets/images/characters/seyoun_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "'...솔직한 건 고마워. 하지만 나, 널 다른 애들이랑 공유할 생각 추호도 없어. 넌 내 거잖아, 그치?'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "'...Thanks for being honest. But I don't like sharing with others.'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "'...Thanks for being honest. But I don't like sharing with others.'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "'...Thanks for being honest. But I don't like sharing with others.'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "'...Merci d'être honnête. Mais je n'aime pas partager avec les autres.'"
            }
        }
    },
    "day3_night_seoyeon_reassure": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_seoyeon_expects_priority",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "'...정말? 그 말, 절대 잊지 마. 내일 나 말고 다른 사람한테 웃어주면... 나 진짜 무슨 짓을 할지 몰라.'"
            },
            "en": {
                "name": "Seoyeon",
                "text": "'...Really? I'll remember that. Prove it tomorrow.'"
            },
            "es": {
                "name": "Seoyeon",
                "text": "'...Really? I'll remember that. Prove it tomorrow.'"
            },
            "ja": {
                "name": "ソヨン",
                "text": "'...Really? I'll remember that. Prove it tomorrow.'"
            },
            "fr": {
                "name": "Seoyeon",
                "text": "'...Vraiment ? Je m'en souviendrai. Prouve-le-moi demain.'"
            }
        }
    },
    "day3_night_seoyeon_normal": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_seoyeon_msg",
        "choices": [
            {
                "next": "day3_night_seoyeon_good",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_seoyeon_good",
                "stats": {
                    "Seoyeon": {
                        "affinity": 2
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "'내일 어디로 갈지 정했어? 나한테 맡겨도 돼! 잘 자! 😊'",
                "choices": [
                    "'맡길게! 잘 자!'",
                    "'고마워, 내일 봐!'"
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "'Have you decided where to go tomorrow? You can leave it to me! Good night! 😊'",
                "choices": [
                    "'I'll leave it to you! Good night!'",
                    "'Thanks, see you tomorrow!'"
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "'Have you decided where to go tomorrow? You can leave it to me! Good night! 😊'",
                "choices": [
                    "'I'll leave it to you! Good night!'",
                    "'Thanks, see you tomorrow!'"
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "'Have you decided where to go tomorrow? You can leave it to me! Good night! 😊'",
                "choices": [
                    "'I'll leave it to you! Good night!'",
                    "'Thanks, see you tomorrow!'"
                ]
            },
            "fr": {
                "name": "Seoyeon",
                "text": "'Tu as décidé où aller demain ? Tu peux me laisser faire ! Bonne nuit ! 😊'",
                "choices": [
                    "'Je te fais confiance ! Bonne nuit !'",
                    "'Merci, à demain !'"
                ]
            }
        }
    },
    "day3_night_seoyeon_good": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와의 대화를 마쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Finished chatting with Seoyeon.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Finished chatting with Seoyeon.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Finished chatting with Seoyeon.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Fin de la discussion avec Seoyeon.*"
            }
        }
    },
    "day3_night_msg_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_yuna_msg",
        "branches": [
            {
                "next": "day3_night_yuna_witnessed",
                "condition": "day3_yuna_witnessed_seoyeon"
            },
            {
                "next": "day3_night_yuna_knows",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_yuna_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*메시지: 밤 11시 59분* '...{name}. 내일 밤. 잊으면 안 돼.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Message: 11:59 PM* '...{name}. Tomorrow night. Don't forget.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Message: 11:59 PM* '...{name}. Tomorrow night. Don't forget.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*Message: 11:59 PM* '...{name}. Tomorrow night. Don't forget.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Message : 23h59* '...{name}. Demain soir. N'oublie pas.'"
            }
        }
    },
    "day3_night_yuna_witnessed": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_yuna_warning",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*추가 메시지* '오늘 방과후... 서연이랑 같이 가는 거 봤어.'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Additional message* 'Today after school... I saw you leaving with Seoyeon.'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Additional message* 'Today after school... I saw you leaving with Seoyeon.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*Additional message* 'Today after school... I saw you leaving with Seoyeon.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Message supplémentaire* 'Aujourd'hui après les cours... je t'ai vu partir avec Seoyeon.'"
            }
        }
    },
    "day3_night_yuna_warning": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_yuna_reassure",
                "stats": {
                    "Yuna": {
                        "affinity": 10
                    }
                },
                "setFlag": "day3_lied_to_yuna"
            },
            {
                "next": "day3_night_yuna_excuse",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_yuna_apologize",
                "stats": {
                    "Yuna": {
                        "affinity": -3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'나한테 거짓말하면... 후회할 거야.'",
                "choices": [
                    "'유나가 제일 중요해'",
                    "'서연이랑은 그냥 친구야'",
                    "'...미안'"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "'If you lie to me... you'll regret it.'",
                "choices": [
                    "'You're the most important to me'",
                    "'Seoyeon and I are just friends'",
                    "'...Sorry'"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "'If you lie to me... you'll regret it.'",
                "choices": [
                    "'You're the most important to me'",
                    "'Seoyeon and I are just friends'",
                    "'...Sorry'"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "'If you lie to me... you'll regret it.'",
                "choices": [
                    "'You're the most important to me'",
                    "'Seoyeon and I are just friends'",
                    "'...Sorry'"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "'Si tu me mens... tu le regretteras.'",
                "choices": [
                    "'Tu es la plus importante pour moi'",
                    "'Seoyeon et moi, on est juste amis'",
                    "'...Pardon'"
                ]
            }
        }
    },
    "day3_night_yuna_reassure": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_yuna_threat",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'...정말? 그 말... 믿을게. 하지만 배신하면...'"
            },
            "en": {
                "name": "Yuna",
                "text": "'...Really? I'll believe that. But if you betray me...'"
            },
            "es": {
                "name": "Yuna",
                "text": "'...Really? I'll believe that. But if you betray me...'"
            },
            "ja": {
                "name": "ユナ",
                "text": "'...Really? I'll believe that. But if you betray me...'"
            },
            "fr": {
                "name": "Yuna",
                "text": "'...Vraiment ? Je veux bien te croire. Mais si tu me trahis...'"
            }
        }
    },
    "day3_night_yuna_threat": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_yuna_threatened",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'...도망칠 생각 마. 네가 어딜 가든, 누구랑 있든 다 지켜보고 있을 거니까. 😊' *화면에 뜬 웃는 이모티콘이 등골을 서늘하게 만든다.*"
            },
            "en": {
                "name": "Yuna",
                "text": "'...You know, right? 😊'"
            },
            "es": {
                "name": "Yuna",
                "text": "'...You know, right? 😊'"
            },
            "ja": {
                "name": "ユナ",
                "text": "'...You know, right? 😊'"
            },
            "fr": {
                "name": "Yuna",
                "text": "'...Tu le sais, n'est-ce pas ? 😊'"
            }
        }
    },
    "day3_night_yuna_excuse": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'...그래. 친구. 믿을게.'"
            },
            "en": {
                "name": "Yuna",
                "text": "'...Okay. Friends. I'll believe you.'"
            },
            "es": {
                "name": "Yuna",
                "text": "'...Okay. Friends. I'll believe you.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "'...Okay. Friends. I'll believe you.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "'...D'accord. Des amis. Je te crois.'"
            }
        }
    },
    "day3_night_yuna_apologize": {
        "character": "assets/images/characters/yuna_sad.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_yuna_upset",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'...내일 만나면 얘기해. 도망치면 안 돼.'"
            },
            "en": {
                "name": "Yuna",
                "text": "'...We'll talk when we meet tomorrow. Don't run away.'"
            },
            "es": {
                "name": "Yuna",
                "text": "'...We'll talk when we meet tomorrow. Don't run away.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "'...We'll talk when we meet tomorrow. Don't run away.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "'...On en parlera quand on se verra demain. Ne t'enfuis pas.'"
            }
        }
    },
    "day3_night_yuna_knows": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_yuna_knows_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*추가 메시지* '...너, 다른 애들한테도 약속했지?'"
            },
            "en": {
                "name": "Yuna",
                "text": "*Additional message* '...You made promises with others too, didn't you?'"
            },
            "es": {
                "name": "Yuna",
                "text": "*Additional message* '...You made promises with others too, didn't you?'"
            },
            "ja": {
                "name": "ユナ",
                "text": "*Additional message* '...You made promises with others too, didn't you?'"
            },
            "fr": {
                "name": "Yuna",
                "text": "*Message supplémentaire* '...Tu as aussi fait des promesses à d'autres, n'est-ce pas ?'"
            }
        }
    },
    "day3_night_yuna_knows_2": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_yuna_confident",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'괜찮아. 발버둥 쳐봐야 결국 내 손바닥 안이니까. 얌전히 내일 밤을 기다려.'"
            },
            "en": {
                "name": "Yuna",
                "text": "'It's okay. You'll come to me in the end.'"
            },
            "es": {
                "name": "Yuna",
                "text": "'It's okay. You'll come to me in the end.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "'It's okay. You'll come to me in the end.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "'C'est pas grave. Tu finiras par revenir vers moi.'"
            }
        }
    },
    "day3_night_yuna_normal": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_yuna_msg",
        "choices": [
            {
                "next": "day3_night_yuna_sleep",
                "stats": {
                    "Yuna": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day3_night_yuna_dream",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'...꿈에서 봐.'",
                "choices": [
                    "'응, 잘 자'",
                    "'무슨 꿈?'"
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "'...See you in your dreams.'",
                "choices": [
                    "'Yeah, good night'",
                    "'What kind of dreams?'"
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "'...See you in your dreams.'",
                "choices": [
                    "'Yeah, good night'",
                    "'What kind of dreams?'"
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "'...See you in your dreams.'",
                "choices": [
                    "'Yeah, good night'",
                    "'What kind of dreams?'"
                ]
            },
            "fr": {
                "name": "Yuna",
                "text": "'...À tout à l'heure dans tes rêves.'",
                "choices": [
                    "'Ouais, bonne nuit'",
                    "'Quel genre de rêves ?'"
                ]
            }
        }
    },
    "day3_night_yuna_dream": {
        "character": "assets/images/characters/yuna_smile.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "'...비밀. 내일 밤 알려줄게.'"
            },
            "en": {
                "name": "Yuna",
                "text": "'...Secret. I'll tell you tomorrow night.'"
            },
            "es": {
                "name": "Yuna",
                "text": "'...Secret. I'll tell you tomorrow night.'"
            },
            "ja": {
                "name": "ユナ",
                "text": "'...Secret. I'll tell you tomorrow night.'"
            },
            "fr": {
                "name": "Yuna",
                "text": "'...Secret. Je te le dirai demain soir.'"
            }
        }
    },
    "day3_night_yuna_sleep": {
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와의 대화를 마쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Finished chatting with Yuna.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Finished chatting with Yuna.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Finished chatting with Yuna.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Fin de la discussion avec Yuna.*"
            }
        }
    },
    "day3_night_msg_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_dain_msg",
        "branches": [
            {
                "next": "day3_night_dain_suspicious",
                "condition": "day3_caught_multiple_dates"
            },
            {
                "next": "day3_night_dain_normal"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*메시지: 밤 9시* '야!! 내일 9시 체육관!! 절대 늦지 마!!! 😤'"
            },
            "en": {
                "name": "Dain",
                "text": "*Message: 9 PM* 'Hey!! 9 AM at the gym tomorrow!! Don't be late!!! 😤'"
            },
            "es": {
                "name": "Dain",
                "text": "*Message: 9 PM* 'Hey!! 9 AM at the gym tomorrow!! Don't be late!!! 😤'"
            },
            "ja": {
                "name": "ダイン",
                "text": "*Message: 9 PM* 'Hey!! 9 AM at the gym tomorrow!! Don't be late!!! 😤'"
            },
            "fr": {
                "name": "Dain",
                "text": "*Message : 21h* 'Hé !! 9h au gymnase demain !! Ne sois pas en retard !!! 😤'"
            }
        }
    },
    "day3_night_dain_suspicious": {
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_dain_priority",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                },
                "setFlag": "day3_lied_to_dain"
            },
            {
                "next": "day3_night_dain_honest",
                "stats": {
                    "Dain": {
                        "affinity": -5
                    }
                }
            },
            {
                "next": "day3_night_dain_excuse",
                "stats": {
                    "Dain": {
                        "affinity": 2
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*추가 메시지* '근데... 너 진짜 다른 애들이랑도 약속한 거야? 점심때 들었거든.'",
                "choices": [
                    "'다인이 연습이 제일 중요해!'",
                    "'다른 약속도 있긴 해...'",
                    "'시간대가 달라서 괜찮아'"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "*Additional message* 'But... did you really make plans with others too? I heard at lunch.'",
                "choices": [
                    "'Your practice is most important!'",
                    "'I do have other plans...'",
                    "'The times are different so it's fine'"
                ]
            },
            "es": {
                "name": "Dain",
                "text": "*Additional message* 'But... did you really make plans with others too? I heard at lunch.'",
                "choices": [
                    "'Your practice is most important!'",
                    "'I do have other plans...'",
                    "'The times are different so it's fine'"
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "*Additional message* 'But... did you really make plans with others too? I heard at lunch.'",
                "choices": [
                    "'Your practice is most important!'",
                    "'I do have other plans...'",
                    "'The times are different so it's fine'"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "*Message supplémentaire* 'Mais... tu as vraiment pris des rendez-vous avec d'autres ? J'ai entendu au déjeuner.'",
                "choices": [
                    "'Ton entraînement est le plus important !'",
                    "'J'ai d'autres plans...'",
                    "'Les horaires sont différents alors ça va'"
                ]
            }
        }
    },
    "day3_night_dain_priority": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "day3_dain_expects_priority",
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "'진짜?! 후훗, 그럼 됐어! 내일 멋진 거 보여줄게!' *단순하고 솔직한 다인이의 반응에 안도감이 들면서도, 한편으로는 죄책감이 밀려온다.*"
            },
            "en": {
                "name": "Dain",
                "text": "'Really?! Hehe, then it's fine! I'll show you something cool tomorrow!'"
            },
            "es": {
                "name": "Dain",
                "text": "'Really?! Hehe, then it's fine! I'll show you something cool tomorrow!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "'Really?! Hehe, then it's fine! I'll show you something cool tomorrow!'"
            },
            "fr": {
                "name": "Dain",
                "text": "'Vraiment ?! Héhé, alors c'est bon ! Je te montrerai un truc génial demain !'"
            }
        }
    },
    "day3_night_dain_honest": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "'...그래? 흥, 상관없어! 내가 다른 애들보다 백 배, 천 배는 더 재밌게 해줄 거니까! 내일 보면 알게 될걸?!'"
            },
            "en": {
                "name": "Dain",
                "text": "'...I see? Well, can't help it. But you HAVE to come to my practice!'"
            },
            "es": {
                "name": "Dain",
                "text": "'...I see? Well, can't help it. But you HAVE to come to my practice!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "'...I see? Well, can't help it. But you HAVE to come to my practice!'"
            },
            "fr": {
                "name": "Dain",
                "text": "'...Ah bon ? Bon, tant pis. Mais tu DOIS venir à mon entraînement !'"
            }
        }
    },
    "day3_night_dain_excuse": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "'음... 뭐, 시간 맞으면 괜찮긴 한데. 나한테 집중해줘야 돼!'"
            },
            "en": {
                "name": "Dain",
                "text": "'Hmm... well, if the times work out, I guess it's okay. But focus on me!'"
            },
            "es": {
                "name": "Dain",
                "text": "'Hmm... well, if the times work out, I guess it's okay. But focus on me!'"
            },
            "ja": {
                "name": "ダイン",
                "text": "'Hmm... well, if the times work out, I guess it's okay. But focus on me!'"
            },
            "fr": {
                "name": "Dain",
                "text": "'Hmm... bon, si les horaires s'arrangent, je suppose que ça va. Mais concentre-toi sur moi !'"
            }
        }
    },
    "day3_night_dain_normal": {
        "character": "assets/images/characters/dain_laugh.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_dain_msg",
        "choices": [
            {
                "next": "day3_night_dain_good",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_night_dain_good",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*추가 메시지* '연습 끝나고 떡볶이 먹으러 가자! 내가 쏠게! 🍜'",
                "choices": [
                    "'좋아! 기대할게!'",
                    "'ㅋㅋ 알았어!'"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "*Additional message* 'Let's go get tteokbokki after practice! My treat! 🍜'",
                "choices": [
                    "'Sounds great! Looking forward to it!'",
                    "'lol okay!'"
                ]
            },
            "es": {
                "name": "Dain",
                "text": "*Additional message* 'Let's go get tteokbokki after practice! My treat! 🍜'",
                "choices": [
                    "'Sounds great! Looking forward to it!'",
                    "'lol okay!'"
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "*Additional message* 'Let's go get tteokbokki after practice! My treat! 🍜'",
                "choices": [
                    "'Sounds great! Looking forward to it!'",
                    "'lol okay!'"
                ]
            },
            "fr": {
                "name": "Dain",
                "text": "*Message supplémentaire* 'On va manger des tteokbokki après l'entraînement ! C'est moi qui régale ! 🍜'",
                "choices": [
                    "'Super ! J'ai hâte !'",
                    "'lol d'accord !'"
                ]
            }
        }
    },
    "day3_night_dain_good": {
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와의 대화를 마쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Finished chatting with Dain.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Finished chatting with Dain.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Finished chatting with Dain.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Fin de la discussion avec Dain.*"
            }
        }
    },
    "day3_night_msg_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_nurse_msg",
        "next": "day3_night_nurse_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*메시지: 밤 11시* '우리 귀여운 전학생, 아직 안 잤어? 후훗.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "*Message: 11 PM* 'My cute transfer student, still awake? Hehe.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "*Message: 11 PM* 'My cute transfer student, still awake? Hehe.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "*Message: 11 PM* 'My cute transfer student, still awake? Hehe.'"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Message : 23h* 'Mon mignon petit nouvel élève, encore debout ? Héhé.'"
            }
        }
    },
    "day3_night_nurse_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_nurse_excited",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_night_nurse_curious",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "'일요일 저녁, 잊지 않았지? 선생님 특별한 거 준비해둘게. 😉'",
                "choices": [
                    "'기대할게요!'",
                    "'뭔데요?'"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "'You haven't forgotten Sunday evening, right? I'll prepare something special. 😉'",
                "choices": [
                    "'I'm looking forward to it!'",
                    "'What is it?'"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "'You haven't forgotten Sunday evening, right? I'll prepare something special. 😉'",
                "choices": [
                    "'I'm looking forward to it!'",
                    "'What is it?'"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "'You haven't forgotten Sunday evening, right? I'll prepare something special. 😉'",
                "choices": [
                    "'I'm looking forward to it!'",
                    "'What is it?'"
                ]
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "'Tu n'as pas oublié dimanche soir, n'est-ce pas ? Je vais préparer quelque chose de spécial. 😉'",
                "choices": [
                    "'J'ai hâte !'",
                    "'C'est quoi ?'"
                ]
            }
        }
    },
    "day3_night_nurse_excited": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "'기대해도 좋아. 그럼 푹 자고 일요일에 보자, {name}. 💋'"
            },
            "en": {
                "name": "School Nurse",
                "text": "'You can look forward to it. Sleep well and see you Sunday, {name}. 💋'"
            },
            "es": {
                "name": "Enfermera",
                "text": "'You can look forward to it. Sleep well and see you Sunday, {name}. 💋'"
            },
            "ja": {
                "name": "保健先生",
                "text": "'You can look forward to it. Sleep well and see you Sunday, {name}. 💋'"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "'Tu peux t'y attendre. Dors bien et à dimanche, {name}. 💋'"
            }
        }
    },
    "day3_night_nurse_curious": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "'비밀~ 일요일에 알게 될 거야. 기대해도 좋아.'"
            },
            "en": {
                "name": "School Nurse",
                "text": "'It's a secret. You'll find out on Sunday. Look forward to it.'"
            },
            "es": {
                "name": "Enfermera",
                "text": "'It's a secret. You'll find out on Sunday. Look forward to it.'"
            },
            "ja": {
                "name": "保健先生",
                "text": "'It's a secret. You'll find out on Sunday. Look forward to it.'"
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "'C'est un secret. Tu le découvriras dimanche. Sois impatient.'"
            }
        }
    },
    "day3_night_msg_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "setFlag": "checked_teacher_msg",
        "next": "day3_night_teacher_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*메시지: 밤 10시* '{name}, 일요일 박물관 약속 잊지 않았지?'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*Message: 10 PM* '{name}, you haven't forgotten about the museum on Sunday, have you?'"
            },
            "es": {
                "name": "Profesora",
                "text": "*Message: 10 PM* '{name}, you haven't forgotten about the museum on Sunday, have you?'"
            },
            "ja": {
                "name": "担任先生",
                "text": "*Message: 10 PM* '{name}, you haven't forgotten about the museum on Sunday, have you?'"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Message : 22h* '{name}, tu n'as pas oublié le musée dimanche, n'est-ce pas ?'"
            }
        }
    },
    "day3_night_teacher_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "choices": [
            {
                "next": "day3_night_teacher_good",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day3_night_teacher_good",
                "stats": {
                    "Teacher": {
                        "affinity": 3
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "'선생님도 오랜만에 나들이라 기대되네. 일요일 오후 2시, 박물관 정문에서 보자.'",
                "choices": [
                    "'네, 기대돼요!'",
                    "'안녕히 주무세요!'"
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "'I'm excited since it's been a while since I had an outing. Sunday at 2 PM, museum entrance.'",
                "choices": [
                    "'Yes, I'm excited!'",
                    "'Good night!'"
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "'I'm excited since it's been a while since I had an outing. Sunday at 2 PM, museum entrance.'",
                "choices": [
                    "'Yes, I'm excited!'",
                    "'Good night!'"
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "'I'm excited since it's been a while since I had an outing. Sunday at 2 PM, museum entrance.'",
                "choices": [
                    "'Yes, I'm excited!'",
                    "'Good night!'"
                ]
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "'Je suis enthousiaste, ça faisait longtemps que je n'étais pas sortie. Dimanche à 14h, entrée du musée.'",
                "choices": [
                    "'Oui, j'ai hâte !'",
                    "'Bonne nuit !'"
                ]
            }
        }
    },
    "day3_night_teacher_good": {
        "character": "assets/images/characters/teacher_smile.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_back_to_messages",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "'그래, 푹 자고 일요일에 보자. 잘 자렴.'"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "'Alright, sleep well and see you Sunday. Good night.'"
            },
            "es": {
                "name": "Profesora",
                "text": "'Alright, sleep well and see you Sunday. Good night.'"
            },
            "ja": {
                "name": "担任先生",
                "text": "'Alright, sleep well and see you Sunday. Good night.'"
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "'D'accord, dors bien et à dimanche. Bonne nuit.'"
            }
        }
    },
    "day3_night_back_to_messages": {
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day3_night_msg_seoyeon",
                "condition": "day3_seoyeon_date_confirmed",
                "excludeCondition": "checked_seoyeon_msg"
            },
            {
                "next": "day3_night_msg_yuna",
                "condition": "day3_yuna_date_confirmed",
                "excludeCondition": "checked_yuna_msg"
            },
            {
                "next": "day3_night_msg_dain",
                "condition": "day3_dain_date_confirmed",
                "excludeCondition": "checked_dain_msg"
            },
            {
                "next": "day3_night_msg_nurse",
                "condition": "day3_nurse_date_confirmed",
                "excludeCondition": "checked_nurse_msg"
            },
            {
                "next": "day3_night_msg_teacher",
                "condition": "day3_teacher_date_confirmed",
                "excludeCondition": "checked_teacher_msg"
            },
            {
                "next": "day3_night_sleep"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다른 메시지도 확인할까?*",
                "choices": [
                    "서연이의 메시지",
                    "유나의 메시지",
                    "다인이의 메시지",
                    "보건선생님의 메시지",
                    "담임선생님의 메시지",
                    "이제 잔다"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Should I check other messages?*",
                "choices": [
                    "Seoyeon's message",
                    "Yuna's message",
                    "Dain's message",
                    "School Nurse's message",
                    "Homeroom Teacher's message",
                    "Go to sleep"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿Debería revisar otros mensajes?*",
                "choices": [
                    "Mensaje de Seoyeon",
                    "Mensaje de Yuna",
                    "Mensaje de Dain",
                    "Mensaje de la Enfermera",
                    "Mensaje de la Profesora",
                    "Go to sleep"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*他のメッセージも確認しようか？*",
                "choices": [
                    "ソヨンのメッセージ",
                    "ユナのメッセージ",
                    "ダインのメッセージ",
                    "保健先生のメッセージ",
                    "担任先生のメッセージ",
                    "Go to sleep"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Devrais-je consulter d'autres messages ?*",
                "choices": [
                    "Le message de Seoyeon",
                    "Le message de Yuna",
                    "Le message de Dain",
                    "Le message de l'Infirmière Scolaire",
                    "Le message du Professeur Principal",
                    "Aller dormir"
                ]
            }
        }
    },
    "day3_night_single_message": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_seoyeon_normal",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_yuna_normal",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_dain_normal",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_msg_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_msg_teacher",
                "condition": "day3_teacher_date_confirmed"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지가 왔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's a message.*"
            },
            "es": {
                "name": "Yo",
                "text": "*There's a message.*"
            },
            "ja": {
                "name": "僕",
                "text": "*There's a message.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il y a un message.*"
            }
        }
    },
    "day3_night_no_message": {
        "night": true,
        "next": "day3_night_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*특별한 메시지는 없다. 주말에 뭘 할까...*"
            },
            "en": {
                "name": "Me",
                "text": "*No special messages. What should I do this weekend...*"
            },
            "es": {
                "name": "Yo",
                "text": "*No special messages. What should I do this weekend...*"
            },
            "ja": {
                "name": "僕",
                "text": "*No special messages. What should I do this weekend...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pas de messages particuliers. Qu'est-ce que je vais faire ce week-end...*"
            }
        }
    },
    "day3_night_ignore_all": {
        "night": true,
        "setFlag": "day3_ignored_all_messages",
        "stats": {
            "Seoyeon": {
                "affinity": -3
            },
            "Yuna": {
                "affinity": -3
            },
            "Dain": {
                "affinity": -3
            }
        },
        "next": "day3_night_sleep",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*메시지를 확인하지 않고 그냥 자기로 했다. 내일 아침에 봐야지...*"
            },
            "en": {
                "name": "Me",
                "text": "*I decided to just sleep without checking messages. I'll read them tomorrow morning...*"
            },
            "es": {
                "name": "Yo",
                "text": "*I decided to just sleep without checking messages. I'll read them tomorrow morning...*"
            },
            "ja": {
                "name": "僕",
                "text": "*I decided to just sleep without checking messages. I'll read them tomorrow morning...*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai décidé de dormir sans consulter les messages. Je les lirai demain matin...*"
            }
        }
    },
    "day3_night_sleep": {
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day3_night_phone_seoyeon",
                "condition": "day3_walked_with_seoyeon"
            },
            {
                "next": "day3_night_phone_yuna",
                "condition": "day3_walked_with_yuna"
            },
            {
                "next": "day3_night_phone_dain",
                "condition": "day3_walked_with_dain"
            },
            {
                "next": "day3_night_phone_nurse",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day3_night_phone_teacher",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day3_night_sleep_2"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈이 감기려는 순간… 스마트폰이 울린다. 전화다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Just as my eyes are closing... my phone rings. A call.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Just as my eyes are closing... my phone rings. A call.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Just as my eyes are closing... my phone rings. A call.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors que mes yeux se ferment... mon téléphone sonne. Un appel.*"
            }
        }
    },
    "day3_night_phone_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_seoyeon_freetalk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*전화를 받으니 서연이의 목소리가 들린다* \"…{name}야? 잘 시간인 거 알아. 근데… 목소리가 듣고 싶었어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*I answer the phone to hear Seoyeon's voice* \"...{name}? I know it's time to sleep. But... I wanted to hear your voice.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*I answer the phone to hear Seoyeon's voice* \"...{name}? I know it's time to sleep. But... I wanted to hear your voice.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*I answer the phone to hear Seoyeon's voice* \"...{name}? I know it's time to sleep. But... I wanted to hear your voice.\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "*Je décroche et j'entends la voix de Seoyeon* \"...{name} ? Je sais qu'il est l'heure de dormir. Mais... je voulais entendre ta voix.\""
            }
        }
    },
    "day3_night_phone_seoyeon_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/seyoun_shy.png",
        "maxTurns": 3,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 심야 전화를 한다. 어두운 방에서 듣는 서연이의 목소리가 평소보다 부드럽다.*",
                "context": "심야 전화. 서연이가 잘 시간에 '목소리가 듣고 싶었어'라며 전화함. 달콤한 심야 통화. 서연이가 잘다가 갑자기 전화한 것."
            },
            "en": {
                "name": "Me",
                "text": "*Having a late-night call with Seoyeon. Her voice sounds softer than usual in the dark room.*",
                "context": "Late-night phone call. Seoyeon called saying 'I wanted to hear your voice.' A sweet late-night conversation. Seoyeon suddenly called before bed."
            },
            "es": {
                "name": "Yo",
                "text": "*Having a late-night call with Seoyeon. Her voice sounds softer than usual in the dark room.*",
                "context": "Llamada nocturna. Seoyeon llamó diciendo 'Quería escuchar tu voz.' Una dulce conversación nocturna."
            },
            "ja": {
                "name": "僕",
                "text": "*Having a late-night call with Seoyeon. Her voice sounds softer than usual in the dark room.*",
                "context": "深夜の電話。ソヨンが「声が聞きたかった」と電話してきた。甘い深夜の通話。ソヨンが寝る前に急に電話してきた。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un appel nocturne avec Seoyeon. Sa voix semble plus douce que d'habitude dans la chambre obscure.*",
                "context": "Appel nocturne. Seoyeon a appelé en disant 'Je voulais entendre ta voix.' Une douce conversation nocturne. Seoyeon a appelé soudainement avant de dormir."
            }
        }
    },
    "day3_night_phone_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_yuna_freetalk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*전화를 받으니 유나의 목소리가 들린다* \"…잘 시간인 거 알아. 근데… 잠이 안 와.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*I answer the phone to hear Yuna's voice* \"...I know it's time to sleep. But... I can't fall asleep.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*I answer the phone to hear Yuna's voice* \"...I know it's time to sleep. But... I can't fall asleep.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*I answer the phone to hear Yuna's voice* \"...I know it's time to sleep. But... I can't fall asleep.\""
            },
            "fr": {
                "name": "Yuna",
                "text": "*Je décroche et j'entends la voix de Yuna* \"...Je sais qu'il est l'heure de dormir. Mais... je n'arrive pas à m'endormir.\""
            }
        }
    },
    "day3_night_phone_yuna_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/yuna_normal.png",
        "maxTurns": 2,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 심야 전화를 한다. 유나의 작은 숨소리가 귀에 닿는다.*",
                "context": "심야 전화. 유나가 '잠이 안 와'라며 전화함. 조용하고 친밀한 심야 통화. 유나의 작은 숨소리가 가까이 들릴 듯한 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Having a late-night call with Yuna. Her quiet breathing reaches my ear.*",
                "context": "Late-night phone call. Yuna called saying 'I can't fall asleep.' A quiet and intimate late-night conversation. Her soft breathing feels close."
            },
            "es": {
                "name": "Yo",
                "text": "*Having a late-night call with Yuna. Her quiet breathing reaches my ear.*",
                "context": "Llamada nocturna. Yuna llamó diciendo 'No puedo dormir.' Una conversación nocturna tranquila e íntima."
            },
            "ja": {
                "name": "僕",
                "text": "*Having a late-night call with Yuna. Her quiet breathing reaches my ear.*",
                "context": "深夜の電話。ユナが「眠れない」と電話してきた。静かで親密な深夜の通話。ユナの小さな息遣いが近くに聞こえるような雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un appel nocturne avec Yuna. Sa respiration silencieuse parvient à mon oreille.*",
                "context": "Appel nocturne. Yuna a appelé en disant 'Je n'arrive pas à m'endormir.' Une conversation nocturne calme et intime. Sa respiration douce semble toute proche."
            }
        }
    },
    "day3_night_phone_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_dain_freetalk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "*전화를 받으니 다인이의 목소리가 들린다* \"…야, 잘 시간인 거 알아. 근데 내일 생각하니까 잠이 안 와!\""
            },
            "en": {
                "name": "Dain",
                "text": "*I answer the phone to hear Dain's voice* \"...Hey, I know it's late. But thinking about tomorrow, I can't sleep!\""
            },
            "es": {
                "name": "Dain",
                "text": "*I answer the phone to hear Dain's voice* \"...Hey, I know it's late. But thinking about tomorrow, I can't sleep!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "*I answer the phone to hear Dain's voice* \"...Hey, I know it's late. But thinking about tomorrow, I can't sleep!\""
            },
            "fr": {
                "name": "Dain",
                "text": "*Je décroche et j'entends la voix de Dain* \"...Hé, je sais qu'il est tard. Mais en pensant à demain, je n'arrive pas à dormir !\""
            }
        }
    },
    "day3_night_phone_dain_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/dain_normal.png",
        "maxTurns": 3,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이와 심야 전화를 한다. 평소의 에너지 대신 조용한 다인이의 목소리가 새롭다.*",
                "context": "심야 전화. 다인이가 '내일 생각하니까 잠이 안 와'라며 전화함. 평소와 달리 조용한 다인이. 심야의 부드러운 분위기."
            },
            "en": {
                "name": "Me",
                "text": "*Having a late-night call with Dain. Instead of her usual energy, her quiet voice feels new.*",
                "context": "Late-night phone call. Dain called saying 'Thinking about tomorrow, I can't sleep!' Unusually quiet Dain. A soft late-night atmosphere."
            },
            "es": {
                "name": "Yo",
                "text": "*Having a late-night call with Dain. Instead of her usual energy, her quiet voice feels new.*",
                "context": "Llamada nocturna. Dain llamó diciendo '¡Pensando en mañana, no puedo dormir!' Dain inusualmente tranquila. Un ambiente nocturno suave."
            },
            "ja": {
                "name": "僕",
                "text": "*Having a late-night call with Dain. Instead of her usual energy, her quiet voice feels new.*",
                "context": "深夜の電話。ダインが「明日のこと考えたら眠れなくて」と電話してきた。いつもと違って静かなダイン。柔らかい深夜の雰囲気。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un appel nocturne avec Dain. Au lieu de son énergie habituelle, sa voix calme est une découverte.*",
                "context": "Appel nocturne. Dain a appelé en disant 'En pensant à demain, je n'arrive pas à dormir !' Dain inhabituellement calme. Une atmosphère nocturne douce."
            }
        }
    },
    "day3_night_phone_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_nurse_freetalk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*전화를 받으니 선생님 목소리가 들린다* \"…{name}? 아직 안 자? 선생님도 잠이 안 와서.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*I answer the phone to hear the nurse's voice* \"...{name}? Still awake? I couldn't sleep either.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*I answer the phone to hear the nurse's voice* \"...{name}? Still awake? I couldn't sleep either.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*I answer the phone to hear the nurse's voice* \"...{name}? Still awake? I couldn't sleep either.\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "*Je décroche et j'entends la voix de l'infirmière* \"...{name} ? Encore debout ? Moi non plus, je n'arrivais pas à dormir.\""
            }
        }
    },
    "day3_night_phone_nurse_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/nurse_normal.png",
        "maxTurns": 2,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님과 심야 전화를 한다. 선생님의 나직한 목소리가 귀에 닿는다.*",
                "context": "심야 전화. 보건선생님이 '잠이 안 와서' 전화함. 선생님의 나직한 목소리. 금지된 사랑의 심야 통화."
            },
            "en": {
                "name": "Me",
                "text": "*Having a late-night call with the school nurse. Her low voice reaches my ear.*",
                "context": "Late-night phone call. The school nurse called saying 'I couldn't sleep.' Her low, gentle voice. A forbidden love's late-night call."
            },
            "es": {
                "name": "Yo",
                "text": "*Having a late-night call with the school nurse. Her low voice reaches my ear.*",
                "context": "Llamada nocturna. La enfermera llamó diciendo 'No podía dormir.' Su voz baja y suave. La llamada nocturna de un amor prohibido."
            },
            "ja": {
                "name": "僕",
                "text": "*Having a late-night call with the school nurse. Her low voice reaches my ear.*",
                "context": "深夜の電話。保健先生が「眠れなくて」と電話してきた。先生の低く優しい声。禁断の恋の深夜通話。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un appel nocturne avec l'infirmière scolaire. Sa voix grave parvient à mon oreille.*",
                "context": "Appel nocturne. L'infirmière scolaire a appelé en disant 'Je n'arrivais pas à dormir.' Sa voix grave et douce. L'appel nocturne d'un amour interdit."
            }
        }
    },
    "day3_night_phone_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_teacher_freetalk",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*전화를 받으니 선생님 목소리가 들린다* \"…{name}? 아직 안 자? 선생님이 잘 시간인 거 알면서도…\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*I answer the phone to hear the teacher's voice* \"...{name}? Still awake? I know it's bedtime, but...\""
            },
            "es": {
                "name": "Profesora",
                "text": "*I answer the phone to hear the teacher's voice* \"...{name}? Still awake? I know it's bedtime, but...\""
            },
            "ja": {
                "name": "担任先生",
                "text": "*I answer the phone to hear the teacher's voice* \"...{name}? Still awake? I know it's bedtime, but...\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "*Je décroche et j'entends la voix du professeur* \"...{name} ? Encore debout ? Je sais qu'il est l'heure de dormir, mais...\""
            }
        }
    },
    "day3_night_phone_teacher_freetalk": {
        "type": "free_talk",
        "character": "assets/images/characters/teacher_normal.png",
        "maxTurns": 2,
        "silhouette": true,
        "night": true,
        "next": "day3_night_phone_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*담임선생님과 심야 전화를 한다. 선생님의 조용한 목소리가 가까이 들린다.*",
                "context": "심야 전화. 담임선생님이 '잘 시간인 거 알면서도' 전화함. 선생님의 조용한 목소리. 금지된 사랑의 심야 통화."
            },
            "en": {
                "name": "Me",
                "text": "*Having a late-night call with the homeroom teacher. Her quiet voice sounds close.*",
                "context": "Late-night phone call. The homeroom teacher called saying 'I know it's bedtime, but...' Her quiet voice. A forbidden love's late-night call."
            },
            "es": {
                "name": "Yo",
                "text": "*Having a late-night call with the homeroom teacher. Her quiet voice sounds close.*",
                "context": "Llamada nocturna. La profesora llamó diciendo 'Sé que es hora de dormir, pero...' Su voz tranquila. La llamada nocturna de un amor prohibido."
            },
            "ja": {
                "name": "僕",
                "text": "*Having a late-night call with the homeroom teacher. Her quiet voice sounds close.*",
                "context": "深夜の電話。担任先生が「寝る時間なのはわかってるんだけど…」と電話してきた。先生の静かな声。禁断の恋の深夜通話。"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un appel nocturne avec le professeur principal. Sa voix douce semble toute proche.*",
                "context": "Appel nocturne. Le professeur principal a appelé en disant 'Je sais qu'il est l'heure de dormir, mais...' Sa voix douce. L'appel nocturne d'un amour interdit."
            }
        }
    },
    "day3_night_phone_end": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day3_night_sleep_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전화를 끊고 스마트폰을 내려놓았다. 귀에 남은 목소리의 여운이… 심장을 뛴다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hang up and put down my phone. The lingering echo of her voice... makes my heart race.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I hang up and put down my phone. The lingering echo of her voice... makes my heart race.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I hang up and put down my phone. The lingering echo of her voice... makes my heart race.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je raccroche et pose mon téléphone. L'écho persistant de sa voix... fait battre mon cœur.*"
            }
        }
    },
    "day3_night_sleep_2": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day3_night_sleep_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈이 감긴다. 내일은 토요일… 어떤 하루가 될까.*"
            },
            "en": {
                "name": "Me",
                "text": "*My eyes are closing. Tomorrow is Saturday... What kind of day will it be.*"
            },
            "es": {
                "name": "Yo",
                "text": "*My eyes are closing. Tomorrow is Saturday... What kind of day will it be.*"
            },
            "ja": {
                "name": "僕",
                "text": "*My eyes are closing. Tomorrow is Saturday... What kind of day will it be.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mes yeux se ferment. Demain, c'est samedi... Quelle journée ce sera.*"
            }
        }
    },
    "day3_night_sleep_final": {
        "character": null,
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_peaceful"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*여러 약속들이 머릿속을 맴돈다. 모두를 만족시킬 수 있을까...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Multiple plans swirl through my mind. Can I satisfy everyone...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Multiple plans swirl through my mind. Can I satisfy everyone...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*Multiple plans swirl through my mind. Can I satisfy everyone...?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Plusieurs rendez-vous tourbillonnent dans ma tête. Est-ce que je peux satisfaire tout le monde... ?*"
            }
        }
    },
    "day3_night_nightmare": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare_voice1",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_voice2",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_voice3",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_choice"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…꿈을 꾼다. 어두운 공간에서 목소리가 들린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I dream. Voices echo from a dark space.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...I dream. Voices echo from a dark space.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...I dream. Voices echo from a dark space.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Je rêve. Des voix résonnent dans un espace sombre.*"
            }
        }
    },
    "day3_night_nightmare_voice1": {
        "character": "assets/images/characters/seyoun_sad.png",
        "silhouette": true,
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare_voice2",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_voice3",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_choice"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*서연이의 목소리가 울려퍼진다* \"…나만 볼 거지? 약속했잖아. 새끼손가락 걸었잖아…\""
            },
            "en": {
                "name": "???",
                "text": "*Seoyeon's voice echoes* \"...You'll only see me, right? You promised. We pinky swore...\""
            },
            "es": {
                "name": "???",
                "text": "*Seoyeon's voice echoes* \"...You'll only see me, right? You promised. We pinky swore...\""
            },
            "ja": {
                "name": "???",
                "text": "*Seoyeon's voice echoes* \"...You'll only see me, right? You promised. We pinky swore...\""
            },
            "fr": {
                "name": "???",
                "text": "*La voix de Seoyeon résonne* \"...Tu ne verras que moi, hein ? Tu as promis. On s'est fait une promesse du petit doigt...\""
            }
        }
    },
    "day3_night_nightmare_voice2": {
        "character": "assets/images/characters/yuna_normal.png",
        "silhouette": true,
        "night": true,
        "branches": [
            {
                "next": "day3_night_nightmare_voice3",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_choice"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*유나의 목소리가 차갑게 속삭인다* \"…배신하면 후회할 거라고 했지? 기억하지?\""
            },
            "en": {
                "name": "???",
                "text": "*Yuna's voice whispers coldly* \"...I said you'd regret it if you betray me, remember?\""
            },
            "es": {
                "name": "???",
                "text": "*Yuna's voice whispers coldly* \"...I said you'd regret it if you betray me, remember?\""
            },
            "ja": {
                "name": "???",
                "text": "*Yuna's voice whispers coldly* \"...I said you'd regret it if you betray me, remember?\""
            },
            "fr": {
                "name": "???",
                "text": "*La voix de Yuna murmure froidement* \"...Je t'ai dit que tu le regretterais si tu me trahissais, tu te souviens ?\""
            }
        }
    },
    "day3_night_nightmare_voice3": {
        "character": "assets/images/characters/dain_sad.png",
        "silhouette": true,
        "night": true,
        "next": "day3_night_nightmare_choice",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "*다인이의 목소리가 떨린다* \"…바보! 온다고! 바람 맞추는 거 아니라면서…\""
            },
            "en": {
                "name": "???",
                "text": "*Dain's voice trembles* \"...Idiot! You said you'd come! You said you wouldn't stand me up...\""
            },
            "es": {
                "name": "???",
                "text": "*Dain's voice trembles* \"...Idiot! You said you'd come! You said you wouldn't stand me up...\""
            },
            "ja": {
                "name": "???",
                "text": "*Dain's voice trembles* \"...Idiot! You said you'd come! You said you wouldn't stand me up...\""
            },
            "fr": {
                "name": "???",
                "text": "*La voix de Dain tremble* \"...Idiot ! Tu avais dit que tu viendrais ! Tu avais dit que tu ne me poserais pas un lapin...\""
            }
        }
    },
    "day3_night_nightmare_choice": {
        "character": null,
        "night": true,
        "choices": [
            {
                "next": "day3_night_nightmare_end",
                "condition": "day3_seoyeon_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_end",
                "condition": "day3_yuna_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_end",
                "condition": "day3_dain_date_confirmed"
            },
            {
                "next": "day3_night_nightmare_end"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어두운 공간에서 손이 뻗어져 나온다. 누구의 손을 잡을 것인가…*",
                "choices": [
                    "*서연이의 손을 잡는다*",
                    "*유나의 손을 잡는다*",
                    "*다인이의 손을 잡는다*",
                    "*아무도 잡지 않는다*"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Hands reach out from the darkness. Whose hand will I take...*",
                "choices": [
                    "*Take Seoyeon's hand*",
                    "*Take Yuna's hand*",
                    "*Take Dain's hand*",
                    "*Don't take anyone's hand*"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Hands reach out from the darkness. Whose hand will I take...*",
                "choices": [
                    "*Take Seoyeon's hand*",
                    "*Take Yuna's hand*",
                    "*Take Dain's hand*",
                    "*Don't take anyone's hand*"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*Hands reach out from the darkness. Whose hand will I take...*",
                "choices": [
                    "*Take Seoyeon's hand*",
                    "*Take Yuna's hand*",
                    "*Take Dain's hand*",
                    "*Don't take anyone's hand*"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Des mains se tendent depuis les ténèbres. La main de qui vais-je saisir...*",
                "choices": [
                    "*Prendre la main de Seoyeon*",
                    "*Prendre la main de Yuna*",
                    "*Prendre la main de Dain*",
                    "*Ne prendre la main de personne*"
                ]
            }
        }
    },
    "day3_night_nightmare_end": {
        "character": null,
        "night": true,
        "next": "day3_night_nightmare_wake",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*손을 뻗었지만… 잡힌 것은 없었다. 모두가 사라지고, 남은 것은 어둠과 후회뿐이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I reached out, but... there was nothing to hold. Everyone vanished, leaving only darkness and regret.*"
            },
            "es": {
                "name": "Yo",
                "text": "*I reached out, but... there was nothing to hold. Everyone vanished, leaving only darkness and regret.*"
            },
            "ja": {
                "name": "僕",
                "text": "*I reached out, but... there was nothing to hold. Everyone vanished, leaving only darkness and regret.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai tendu la main, mais... il n'y avait rien à saisir. Tout le monde a disparu, ne laissant que les ténèbres et le regret.*"
            }
        }
    },
    "day3_night_nightmare_wake": {
        "character": null,
        "night": true,
        "fade": true,
        "next": "day3_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…온몸이 땀에 젖어 있다. 심장이 미친 듯이 뛴다. 꿈이었다. 하지만… 내일은 어떻게 될까?*"
            },
            "en": {
                "name": "Me",
                "text": "*...I snap awake. My heart is pounding like crazy. It was a dream. But... what will tomorrow bring?*"
            },
            "es": {
                "name": "Yo",
                "text": "*...I snap awake. My heart is pounding like crazy. It was a dream. But... what will tomorrow bring?*"
            },
            "ja": {
                "name": "僕",
                "text": "*...I snap awake. My heart is pounding like crazy. It was a dream. But... what will tomorrow bring?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Je me réveille en sursaut. Mon cœur bat comme un fou. C'était un rêve. Mais... que nous réserve demain ?*"
            }
        }
    },
    "day3_night_peaceful": {
        "night": true,
        "branches": [
            {
                "next": "day3_night_loyalty_seoyeon",
                "condition": "day3_seoyeon_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_yuna",
                "condition": "day3_yuna_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_dain",
                "condition": "day3_dain_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_nurse",
                "condition": "day3_nurse_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_night_loyalty_teacher",
                "condition": "day3_teacher_date_confirmed",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day3_final_scene"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*편안한 밤이다. 내일이 기대된다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A peaceful night. I'm looking forward to tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A peaceful night. I'm looking forward to tomorrow.*"
            },
            "ja": {
                "name": "僕",
                "text": "*A peaceful night. I'm looking forward to tomorrow.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une nuit paisible. J'ai hâte d'être à demain.*"
            }
        }
    },
    "day3_night_loyalty_seoyeon": {
        "night": true,
        "stats": {
            "Seoyeon": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…서연이만 생각하면 자연스레 웃음이 나온다. 내일은 서연이와 둘이만의 시간이다. 후회 없이 진심을 전해야지.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Just thinking about Seoyeon makes me smile. Tomorrow is our time together. I'll make sure to tell her how I truly feel.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Just thinking about Seoyeon makes me smile. Tomorrow is our time together. I'll make sure to tell her how I truly feel.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...Just thinking about Seoyeon makes me smile. Tomorrow is our time together. I'll make sure to tell her how I truly feel.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Rien que de penser à Seoyeon, je souris. Demain, c'est notre moment à nous. Je m'assurerai de lui dire ce que je ressens vraiment.*"
            }
        }
    },
    "day3_night_loyalty_yuna": {
        "night": true,
        "stats": {
            "Yuna": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…유나만 생각하면 심장이 뛴다. 내일 밤, 유나와 둘이만의 시간. 유나의 진짜 모습을 볼 수 있을까.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Just thinking about Yuna makes my heart race. Tomorrow night, just the two of us. Will I finally see the real Yuna?*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Just thinking about Yuna makes my heart race. Tomorrow night, just the two of us. Will I finally see the real Yuna?*"
            },
            "ja": {
                "name": "僕",
                "text": "*...Just thinking about Yuna makes my heart race. Tomorrow night, just the two of us. Will I finally see the real Yuna?*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Rien que de penser à Yuna, mon cœur s'emballe. Demain soir, rien que nous deux. Est-ce que je verrai enfin la vraie Yuna ?*"
            }
        }
    },
    "day3_night_loyalty_dain": {
        "night": true,
        "stats": {
            "Dain": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…다인이의 웃음을 떠올리면 나도 웃게 된다. 내일 연습을 보러 가면 다인이가 얼마나 기뻐할까.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Thinking of Dain's smile makes me smile too. I wonder how happy she'll be when I show up to watch her practice tomorrow.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Thinking of Dain's smile makes me smile too. I wonder how happy she'll be when I show up to watch her practice tomorrow.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...Thinking of Dain's smile makes me smile too. I wonder how happy she'll be when I show up to watch her practice tomorrow.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Penser au sourire de Dain me fait sourire aussi. Je me demande à quel point elle sera contente quand je viendrai la voir s'entraîner demain.*"
            }
        }
    },
    "day3_night_loyalty_nurse": {
        "night": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…보건선생님의 얼굴이 떠오른다. 금지된 사랑이지만… 이 감정을 숨길 수 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...The school nurse's face comes to mind. It's a forbidden relationship, but... I can't hide these feelings.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...The school nurse's face comes to mind. It's a forbidden relationship, but... I can't hide these feelings.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...The school nurse's face comes to mind. It's a forbidden relationship, but... I can't hide these feelings.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Le visage de l'infirmière scolaire me revient en tête. C'est une relation interdite, mais... je ne peux pas cacher ces sentiments.*"
            }
        }
    },
    "day3_night_loyalty_teacher": {
        "night": true,
        "stats": {
            "Teacher": {
                "affinity": 10
            }
        },
        "setFlag": "day3_loyalty_bonus",
        "fade": true,
        "next": "day3_final_scene",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…담임선생님의 웃는 얼굴이 떠오른다. 선생님과 학생이지만… 내 맘은 진짜니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*...The homeroom teacher's smile comes to mind. We're teacher and student, but... my feelings are real.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...The homeroom teacher's smile comes to mind. We're teacher and student, but... my feelings are real.*"
            },
            "ja": {
                "name": "僕",
                "text": "*...The homeroom teacher's smile comes to mind. We're teacher and student, but... my feelings are real.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Le sourire du professeur principal me revient en tête. On est professeur et élève, mais... mes sentiments sont sincères.*"
            }
        }
    },
    "day3_final_scene": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "changeDay": 4,
        "next": "day4_start",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*금요일 밤이 깊어간다... 내일은 드디어 토요일이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Friday night deepens... Tomorrow is finally Saturday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Friday night deepens... Tomorrow is finally Saturday.*"
            },
            "ja": {
                "name": "僕",
                "text": "*Friday night deepens... Tomorrow is finally Saturday.*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La nuit de vendredi s'approfondit... Demain, c'est enfin samedi.*"
            }
        }
    }
});
