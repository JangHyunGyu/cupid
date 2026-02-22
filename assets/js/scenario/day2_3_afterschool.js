/**
 * ============================================================================
 * CUPID - day2_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day2_3_afterschool.js + en_day2_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[2]) SCENARIO[2] = {};

Object.assign(SCENARIO[2], {
    "day2_afternoon_class": {
        "background": "assets/images/background/room_school.png",
        "bgm": "sunset2.mp3",
        "character": null,
        "sunset": true,
        "next": "day2_after_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*지루한 오후 수업 끝. 창가로 스며드는 붉은 노을이 교실을 감성적으로 물들인다. 이제 자유시간인가...*"
            },
            "en": {
                "name": "Me",
                "text": "*School's finally over. The red sunset filtering through the window paints the classroom in a sentimental glow. Is it free time now...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Por fin terminaron las aburridas clases de la tarde. El atardecer rojo que se filtra por la ventana tiñe el aula con un brillo sentimental. ¿Ya es tiempo libre...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*退屈な午後の授業が終わった。窓から差し込む赤い夕焼けが教室を感傷的に染めている。もう自由時間かな…*"
            }
        }
    },
    "day2_afternoon_nurse_skip": {
        "background": "assets/images/background/nurse_room.jpg",
        "bgm": "sunset2.mp3",
        "character": null,
        "sunset": true,
        "setFlag": "woke_up_in_nurse_room",
        "next": "day2_after_school",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실 침대에서 눈을 뜨니 어느덧 노을이 지고 있다. 수업은 다 빠졌지만, 선생님 옆에서 푹 자고 일어났더니 몸이 가볍다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wake up on the infirmary bed to find the sun setting. I skipped all my classes, but waking up after a long nap next to the teacher makes my body feel light.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Abro los ojos en la cama de la enfermería y ya está atardeciendo. Me salté todas las clases, pero después de dormir bien al lado de la profesora, mi cuerpo se siente ligero.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健室のベッドで目を覚ますと、いつの間にか夕焼けが広がっていた。授業は全部サボったけど、先生のそばでぐっすり寝たおかげで体が軽い。*"
            }
        }
    },
    "day2_after_school": {
        "background": "assets/images/background/school_hallway.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_after_seoyeon"
            },
            {
                "next": "day2_after_yuna",
                "condition": "met_yuna"
            },
            {
                "next": "day2_after_yuna",
                "excludeCondition": "met_yuna"
            },
            {
                "next": "day2_after_dain",
                "condition": "met_dain"
            },
            {
                "next": "day2_after_dain",
                "excludeCondition": "met_dain"
            },
            {
                "next": "day2_after_nurse_stay",
                "condition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_after_nurse",
                "excludeCondition": "woke_up_in_nurse_room"
            },
            {
                "next": "day2_after_teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어제보다 훨씬 익숙해진 복도. 오늘은 어떤 떨림이 나를 기다리고 있을까? 발길 닿는 대로 가보자.*",
                "choices": [
                    "함께 노을을 보고 싶은 서연이를 찾아가 본다.",
                    "유나와 함께 학교의 깊은 비밀 속으로 들어간다.",
                    "비밀스러운 쪽지를 남긴 그녀, 유나를 찾아본다.",
                    "땀방울이 아름다운 다인이의 연습을 도우러 간다.",
                    "활기가 넘치는 체육관, 다인의 목소리를 찾아간다.",
                    "나를 간호해준 선생님과 좀 더 대화를 나눈다.",
                    "은은한 약 냄새가 나는 보건실, 선생님을 보러 간다.",
                    "인자한 담임선생님이 계신 교무실로 발길을 옮긴다."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The hallway feels much more familiar than yesterday. What kind of heart-pounding moments are waiting for me today? Let's go where my heart leads.*",
                "choices": [
                    "Go find Seoyeon to watch the sunset together.",
                    "Dive into the school's deep secrets with Yuna.",
                    "Search for Yuna, the mysterious girl who left the note.",
                    "Go help Dain practice, her sweat beads looking beautiful.",
                    "Head to the lively gym, searching for Dain's voice.",
                    "Talk more with the teacher who took care of me.",
                    "Go to the infirmary, scented with faint medicine, to see the teacher.",
                    "Head to the faculty room to see my kind homeroom teacher."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*El pasillo se siente mucho más familiar que ayer. ¿Qué momentos emocionantes me esperan hoy? Vamos a donde me lleve el corazón.*",
                "choices": [
                    "Ir a buscar a Seoyeon para ver el atardecer juntos.",
                    "Sumergirme en los profundos secretos de la escuela con Yuna.",
                    "Buscar a Yuna, la chica misteriosa que dejó la nota.",
                    "Ir a ayudar a Dain con su práctica, sus gotas de sudor lucen hermosas.",
                    "Ir al animado gimnasio, buscando la voz de Dain.",
                    "Hablar más con la profesora que me cuidó.",
                    "Ir a la enfermería, con su suave olor a medicina, para ver a la profesora.",
                    "Ir a la sala de profesores para ver a mi amable tutora."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*昨日よりずっと見慣れた廊下。今日はどんなドキドキが僕を待っているんだろう？足の向くまま行ってみよう。*",
                "choices": [
                    "一緒に夕焼けを見たいソヨンを探しに行く。",
                    "ユナと一緒に学校の深い秘密の中へ入る。",
                    "謎めいたメモを残した彼女、ユナを探してみる。",
                    "汗が美しいダインの練習を手伝いに行く。",
                    "活気あふれる体育館、ダインの声を探しに行く。",
                    "看病してくれた先生ともう少し話をする。",
                    "ほのかな薬の匂いがする保健室、先生に会いに行く。",
                    "優しい担任先生がいる職員室へ向かう。"
                ]
            }
        }
    },
    "day2_after_nurse_stay": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다시 보건실로 발걸음을 옮겼다. 선생님은 여전히 자리에 앉아 계신다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I headed back to the infirmary. The nurse is still sitting in her seat.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Regresé a la enfermería. La profesora sigue sentada en su lugar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*また保健室に足を運んだ。先生はまだ席に座っている。*"
            }
        }
    },
    "day2_after_seoyeon": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day2_after_seoyeon_work",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*학생회실. 서연이와 함께 서류를 정리하기 시작했다. 전학 온 지 얼마 안 된 나에게 서연이는 친절하게 업무를 가르쳐주었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Student Council Room. I started helping Seoyeon organize documents. She kindly explains the work to me, a newcomer.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sala del Consejo Estudiantil. Empecé a ayudar a Seoyeon a organizar documentos. Ella amablemente me explica el trabajo, siendo yo el nuevo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*生徒会室。ソヨンと一緒に書類の整理を始めた。転校してきたばかりの僕に、ソヨンは親切に仕事を教えてくれた。*"
            }
        }
    },
    "day2_after_seoyeon_work": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day2_after_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 함께 집중해서 서류를 정리하다 보니 창밖이 붉은 노을빛으로 물들어 있다. 학생회실 안에는 우리 둘의 숨소리와 종이 넘기는 소리만 가득하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Lost in work with Seoyeon, the window outside is bathed in crimson sunset light. The room is filled only with our breathing and the sound of paper.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Concentrados con Seoyeon en el trabajo, la ventana está bañada en luz carmesí del atardecer. La sala solo se llena con nuestra respiración y el sonido del papel.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと集中して書類を整理していたら、窓の外が赤い夕焼けに染まっていた。生徒会室には僕たち二人の息遣いと紙をめくる音だけが響いている。*"
            }
        }
    },
    "day2_after_seoyeon_2": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day2_after_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"휴... 드디어 끝났네. {name}, 이렇게까지 도와줘서 정말 고마워. 너 아니었으면 오늘 안에 다 못 끝냈을 거야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Phew... finished at last. {name}, thank you so much for helping this much. I wouldn't have finished this today without you.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Uf... por fin terminamos. {name}, muchas gracias por ayudar tanto. Sin ti no habría terminado hoy.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ふぅ…やっと終わったね。{name}、ここまで手伝ってくれて本当にありがとう。あなたがいなかったら今日中に終わらなかったよ。\""
            }
        }
    },
    "day2_after_seoyeon_3": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_seoyeon_why",
                "stats": {
                    "Seoyeon": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_seoyeon_home",
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 25,
                        "next": "day2_seoyeon_home_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_seoyeon_home"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_seoyeon_home_low"
                    }
                ],
                "stats": {
                    "Seoyeon": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_seoyeon_massage",
                "affinityChar": "Seoyeon",
                "affinityBranches": [
                    {
                        "minAffinity": 25,
                        "next": "day2_seoyeon_massage_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_seoyeon_massage"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_seoyeon_massage_low"
                    }
                ],
                "stats": {
                    "Seoyeon": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이가 기지개를 켜며 살짝 웃는다. 피곤해 보이지만 눈빛은 어느 때보다 맑고 예쁘다.*",
                "choices": [
                    "서연이는 왜 그렇게 매사에 진심이고 열심히야?",
                    "이젠 그만 쉬자. 집까지 내가 꼭 데려다줄게.",
                    "많이 뭉쳤네. 자, 잠깐만 가만히 있어 봐."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon stretches with a soft smile. She looks tired, but her eyes are clearer and more beautiful than ever.*",
                "choices": [
                    "Seoyeon, why are you always so sincere and hardworking?",
                    "Let's rest now. I'll make sure to walk you home.",
                    "Your shoulders look tense. Here, stay still for a second."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon se estira con una suave sonrisa. Se ve cansada, pero sus ojos están más claros y hermosos que nunca.*",
                "choices": [
                    "Seoyeon, ¿por qué siempre eres tan sincera y trabajadora?",
                    "Descansemos ya. Te acompaño a casa sin falta.",
                    "Se ve que tienes los hombros tensos. Ven, quédate quieta un momento."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが伸びをしながらそっと微笑む。疲れているようだけど、瞳はいつもより澄んできれいだ。*",
                "choices": [
                    "ソヨンはどうしていつもそんなに真剣で頑張り屋なの？",
                    "もう休もう。家まで絶対送っていくよ。",
                    "だいぶ凝ってるね。ほら、ちょっとじっとしてて。"
                ]
            }
        }
    },
    "day2_seoyeon_why": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"음... 그냥, 누군가는 해야 할 일이니까. 그리고 내가 최선을 다하면 학교가 조금이라도 좋아지지 않을까 싶어서.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Well... it's just something that needs to be done. And I hope that if I do my best, the school might improve, even if just a little.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Bueno... es algo que alguien tiene que hacer. Y espero que si doy lo mejor de mí, la escuela mejore aunque sea un poco.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うーん…誰かがやらなきゃいけないことだから。それに、私が全力を尽くせば、学校が少しでも良くなるかなって思って。\""
            }
        }
    },
    "day2_seoyeon_home_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"정말...? (서연이가 환하게 웃으며 내 팔을 살며시 잡는다) 사실 {name}이랑 같이 가고 싶었어. 오늘 노을이 정말 예쁘다...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Really...? (Seoyeon smiles brightly and gently takes my arm) Honestly, I wanted to walk with you, {name}. The sunset is so beautiful...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿En serio...? (Seoyeon sonríe radiante y toma suavemente mi brazo) La verdad, quería caminar contigo, {name}. El atardecer es tan hermoso...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"本当に…？（ソヨンが明るく笑って僕の腕をそっと掴む）実は{name}と一緒に帰りたかったの。今日の夕焼け、すごくきれい…\""
            }
        }
    },
    "day2_seoyeon_home": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어...? 데려다준다고? 아... 음, 그래주면 나야 고맙지만...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh...? Walk me home? Ah... well, I'd be very grateful if you did...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¿Eh...? ¿Acompañarme a casa? Ah... bueno, te lo agradecería mucho...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"え…？送ってくれるの？あ…うん、そうしてくれたらありがたいけど…\""
            }
        }
    },
    "day2_seoyeon_home_low": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -8
            }
        },
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아.. 괜찮아, 혼자 갈 수 있어. 오늘 도와줘서 고마웠어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh.. it's okay, I can go alone. Thanks for helping today though.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ah... está bien, puedo ir sola. Gracias por la ayuda de hoy.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ…大丈夫、一人で帰れるよ。今日は手伝ってくれてありがとう。\""
            }
        }
    },
    "day2_seoyeon_massage_high": {
        "character": "assets/images/characters/seyoun_shy2.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"으응... {name}... (서연이가 기분 좋게 눈을 감고 몸을 맡긴다) 정말 시원해... 네 손이 이렇게 따뜻한 줄 몰랐어. 조금만 더...\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Mmm... {name}... (Seoyeon happily closes her eyes and leans into it) That feels so good... I didn't know your hands were so warm. Just a little more...\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Mmm... {name}... (Seoyeon cierra los ojos contenta y se deja llevar) Qué rico... No sabía que tus manos fueran tan cálidas. Un poquito más...\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"うん…{name}…（ソヨンが気持ちよさそうに目を閉じて身を委ねる）すごく気持ちいい…あなたの手がこんなに温かいなんて知らなかった。もう少しだけ…\""
            }
        }
    },
    "day2_seoyeon_massage": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"앗... {name}! 갑자기 이러면... (서연의 몸이 움찔하더니 이내 긴장을 풀고 눈을 감는다) ...시원하다. 고마워.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Ah... {name}! So suddenly... (She flinches for a moment, but soon relaxes and closes her eyes) ...That feels great. Thank you.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ay... ¡{name}! Tan de repente... (Se estremece un momento, pero pronto se relaja y cierra los ojos) ...Qué bien se siente. Gracias.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あっ…{name}！急にそんな…（ソヨンの体がビクッとするけど、すぐに力を抜いて目を閉じる）…気持ちいい。ありがとう。\""
            }
        }
    },
    "day2_seoyeon_massage_low": {
        "character": "assets/images/characters/seyoun_pout.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day2_seoyeon_night_talk",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "*서연이가 황급히 몸을 빼며 불편한 표정을 짓는다* \"갑자기 뭐야... 좀 불편해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "*Seoyeon quickly pulls away, looking uncomfortable* \"What was that...? It's a bit uncomfortable.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "*Seoyeon se aparta rápidamente con expresión incómoda* \"¿Qué fue eso...? Me siento un poco incómoda.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "*ソヨンが慌てて体を引いて、不快そうな表情を浮かべる* \"急に何…ちょっと困る。\""
            }
        }
    },
    "day2_seoyeon_night_talk": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "setFlag": "day2_met_seoyeon_after",
        "next": "day2_seoyeon_dain_encounter",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"{name}... 오늘 정말 고마웠어. 너랑 있으면 힘든 일도 다 잊게 돼. 우리... 내일도 같이 점심 먹을래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"{name}... thank you so much for today. When I'm with you, all my tired thoughts vanish. Should we... have lunch together tomorrow too?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"{name}... muchas gracias por hoy. Cuando estoy contigo, se me olvida todo el cansancio. ¿Almorzamos... juntos mañana también?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"{name}…今日は本当にありがとう。あなたといると、辛いことも全部忘れちゃう。明日も…一緒にお昼食べない？\""
            }
        }
    },
    "day2_seoyeon_dain_encounter": {
        "background": "assets/images/background/student_room.png",
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_seoyeon_dain_met",
                "condition": "day2_met_dain_lunch"
            },
            {
                "next": "day2_seoyeon_dain_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이와 함께 학생회실을 나서는데, 복도에서 누군가와 마주쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we leave the student council room together, we bump into someone in the corridor.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al salir juntos de la sala del consejo estudiantil, nos topamos con alguien en el pasillo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンと一緒に生徒会室を出ると、廊下で誰かとばったり出くわした。*"
            }
        }
    },
    "day2_seoyeon_dain_met": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오? 아까 매점에서 본 애! {name} 아니야! 와, 학생회장이랑 같이 있네?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? You're the one from the snack bar earlier! {name}! Wow, hanging out with the student council president?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Oh? ¡Eres el de la tienda de antes! ¡{name}! Vaya, ¿andas con la presidenta del consejo estudiantil?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あれ？さっき売店で会った子！{name}じゃん！わぁ、生徒会長と一緒にいるの？\""
            }
        }
    },
    "day2_seoyeon_dain_new": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_react",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"어? 너 혹시 전학생? 우와, 학생회장님이랑 벌써 친해진 거야?\""
            },
            "en": {
                "name": "???",
                "text": "\"Huh? Are you the transfer student? Whoa, already friends with the council president?\""
            },
            "es": {
                "name": "???",
                "text": "\"¿Eh? ¿Tú eres el de intercambio? Vaya, ¿ya eres amigo de la presidenta del consejo?\""
            },
            "ja": {
                "name": "???",
                "text": "\"え？もしかして転校生？うわぁ、もう生徒会長と仲良くなったの？\""
            }
        }
    },
    "day2_seoyeon_dain_react": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "day2_seoyeon_dain_choice",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 살짝 당황한 표정을 짓는다) ...정다인 학생? 어, 안녕. 우리 그냥 일 끝났으니까 가려던 참이야.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon looks slightly flustered) ...Dain, right? Hi. We just finished work, so we were heading out.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon se ve un poco nerviosa) ...¿Dain? Hola. Acabamos de terminar el trabajo, así que ya nos íbamos.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンが少し慌てた表情をする）…チョン・ダインさん？あ、こんにちは。私たち仕事が終わったところで、帰ろうとしてたの。\""
            }
        }
    },
    "day2_seoyeon_dain_choice": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "choices": [
            {
                "next": "day2_seoyeon_dain_yes",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    },
                    "Seoyeon": {
                        "affinity": -2
                    }
                }
            },
            {
                "next": "day2_seoyeon_dain_no",
                "stats": {
                    "Seoyeon": {
                        "affinity": 5
                    },
                    "Dain": {
                        "affinity": -2
                    }
                }
            },
            {
                "next": "day2_seoyeon_dain_both",
                "stats": {
                    "Seoyeon": {
                        "affinity": -5
                    },
                    "Dain": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아, 그래? 난 연습 끝나고 가는 길이야! {name}, 다음엔 나랑도 놀아줘~!\"",
                "choices": [
                    "응, 다음에 꼭!",
                    "오늘은 서연이랑 약속이 있어서...",
                    "*애매하게 웃으며* 둘 다 만나면 좋겠는데."
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh, really? I just finished practice! {name}, hang out with me next time too!\"",
                "choices": [
                    "Sure, definitely!",
                    "I have plans with Seoyeon today, so...",
                    "*Smile vaguely* It'd be nice to hang out with both of you."
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Ah, sí? ¡Yo acabo de terminar la práctica! ¡{name}, la próxima sal conmigo también!\"",
                "choices": [
                    "¡Claro, seguro!",
                    "Hoy tengo planes con Seoyeon, así que...",
                    "*Sonrío vagamente* Sería genial salir con las dos."
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あ、そうなの？あたしは練習終わりで帰るところ！{name}、今度はあたしとも遊んでよ～！\"",
                "choices": [
                    "うん、絶対！",
                    "今日はソヨンと約束があるから…",
                    "*曖昧に笑いながら* 二人とも会えたらいいのに。"
                ]
            }
        }
    },
    "day2_seoyeon_dain_yes": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_laugh.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"약속이다! 그럼 내일 보자, {name}!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"It's a promise! See you tomorrow, {name}!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Es una promesa! ¡Nos vemos mañana, {name}!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"約束だよ！じゃあ明日ね、{name}！\""
            }
        }
    },
    "day2_seoyeon_dain_no": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 섭섭하네. 그래도 다음엔 꼭 놀아줘!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Aww, that's disappointing. But promise me next time!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Ay, qué decepción. ¡Pero prométeme que la próxima sí!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えー、残念。でも次は絶対遊んでよね！\""
            }
        }
    },
    "day2_seoyeon_dain_both": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*순간 서연이와 다인이의 표정이 동시에 굳는다. 뭔가 잘못 말한 건가...?*"
            },
            "en": {
                "name": "Me",
                "text": "*Both Seoyeon's and Dain's expressions freeze at the same time. Did I say something wrong...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las expresiones de Seoyeon y Dain se congelan al mismo tiempo. ¿Dije algo malo...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*一瞬、ソヨンとダインの表情が同時に固まった。何かまずいこと言ったかな…？*"
            }
        }
    },
    "day2_seoyeon_dain_both_2": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_pout.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...뭐야, 둘 다? 그게 무슨 말이야?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...What? Both of us? What's that supposed to mean?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¿Qué? ¿Las dos? ¿Qué se supone que significa eso?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…え、二人とも？どういう意味？\""
            }
        }
    },
    "day2_seoyeon_dain_both_3": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_pout.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"(서연이가 차갑게 웃는다) 후훗... {name}은 참 인기가 많구나? 여기저기 다 좋다고 하고 다니는 타입인가 봐.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon smiles coldly) Heh... {name} sure is popular, huh? The type who says yes to everyone, I guess.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"(Seoyeon sonríe fríamente) Je... {name} sí que es popular, ¿no? Supongo que eres del tipo que le dice que sí a todo el mundo.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"（ソヨンが冷たく笑う）ふふっ…{name}って本当に人気者だね？あちこちでいい顔するタイプなのかな。\""
            }
        }
    },
    "day2_seoyeon_dain_both_4": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_both_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이, 학생회장님도. 근데 맞는 말이긴 하네? {name}, 너 그러다 둘 다 놓친다?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh come on, Miss President. But she's got a point though? {name}, you might end up losing both of us like that.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"Ay, señora presidenta. Pero tiene razón, ¿no? {name}, así vas a terminar perdiendo a las dos.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えー、会長もさぁ。でもまあ、確かにそうかも？{name}、そんなんじゃ二人とも逃しちゃうよ？\""
            }
        }
    },
    "day2_seoyeon_dain_both_5": {
        "characters": {
            "left": "assets/images/characters/seyoun_normal.png",
            "right": "assets/images/characters/dain_normal.png"
        },
        "sunset": true,
        "next": "day2_seoyeon_dain_end",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*두 사람이 묘하게 서로를 의식하며 나를 바라본다. 분위기가 싸해졌다...*"
            },
            "en": {
                "name": "Me",
                "text": "*The two of them exchange glances while staring at me. The atmosphere just got really awkward...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las dos intercambian miradas mientras me observan. El ambiente se puso muy incómodo...*"
            },
            "ja": {
                "name": "僕",
                "text": "*二人が微妙にお互いを意識しながら僕を見つめている。空気が気まずくなった…*"
            }
        }
    },
    "day2_seoyeon_dain_end": {
        "sunset": true,
        "branches": [
            {
                "next": "day2_end",
                "condition": "has_number_seyoun"
            },
            {
                "next": "day2_seoyeon_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 손을 흔들며 멀어졌다. 서연이의 표정이 왜인지 살짝 굳어 있는 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain waves and walks away. Seoyeon's expression seems slightly stiff for some reason.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain se despide con la mano y se aleja. La expresión de Seoyeon parece un poco rígida por alguna razón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインが手を振って離れていった。ソヨンの表情がなぜか少し硬くなっている気がする。*"
            }
        }
    },
    "day2_seoyeon_contact_ask": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_seoyeon_contact_success",
                "setFlags": [
                    "has_number_seyoun",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_seoyeon_contact_fail"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아, 맞다! 아직 연락처를 못 물어봤네. 전하고 싶은 말이 계속 생길 것 같아서... 괜찮다면 번호 알려줄래?\"",
                "choices": [
                    "응, 언제든 연락해. 여기 내 번호야.",
                    "미안하지만 번호는 조금 더 친해지면 알려줄게."
                ]
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, right! I haven't asked for your contact info yet. I have a feeling I'll keep wanting to talk to you... Can I have your number?\"",
                "choices": [
                    "Sure, contact me anytime. Here's my number.",
                    "Sorry, I'll give it to you when we're a bit closer."
                ]
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Ah, cierto! Todavía no te pedí tu contacto. Siento que voy a querer hablar contigo seguido... ¿Me das tu número?\"",
                "choices": [
                    "Claro, escríbeme cuando quieras. Aquí está mi número.",
                    "Perdón, te lo daré cuando nos conozcamos un poco más."
                ]
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ、そうだ！まだ連絡先聞いてなかったね。伝えたいことがどんどん出てきそうだから…よかったら番号教えてくれない？\"",
                "choices": [
                    "うん、いつでも連絡して。これが僕の番号だよ。",
                    "ごめん、もう少し仲良くなったら教えるね。"
                ]
            }
        }
    },
    "day2_seoyeon_contact_success": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 5
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"고마워! 그럼 진짜로 나중에 연락할게. 잘 가!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Thank you! I'll definitely message you later. Get home safe!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Gracias! Entonces te escribo después. ¡Cuídate!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ありがとう！じゃあ後で絶対連絡するね。気をつけて帰ってね！\""
            }
        }
    },
    "day2_seoyeon_contact_fail": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": -10
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"아... 응, 알았어! 내가 너무 갑자기 물어봤지? 미안해. 그럼 내일 학교에서 봐!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh... right! I asked too suddenly, didn't I? Sorry. See you at school tomorrow!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Ah... ¡claro! Te lo pregunté muy de repente, ¿verdad? Perdón. ¡Nos vemos mañana en la escuela!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あ…うん、わかった！急に聞いちゃったよね？ごめんね。じゃあ明日学校で会おう！\""
            }
        }
    },
    "day2_after_yuna": {
        "background": "assets/images/background/library_old.png",
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_met",
                "condition": "met_yuna"
            },
            {
                "next": "day2_after_yuna_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*도서관 별관. 낡은 건물 안으로 들어서자 서늘한 공기가 나를 감싼다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Library Annex. As I enter the old building, a cool draft of air surrounds me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Anexo de la biblioteca. Al entrar al viejo edificio, una corriente de aire fresco me envuelve.*"
            },
            "ja": {
                "name": "僕",
                "text": "*図書館別館。古い建物の中に入ると、ひんやりとした空気が僕を包んだ。*"
            }
        }
    },
    "day2_after_yuna_met": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_follow_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_follow_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"왔구나. 자, 나를 따라와. 보여줄 게 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"You're here. Come, follow me. I have something to show you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Viniste. Ven, sígueme. Tengo algo que mostrarte.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"来たんだ。ついてきて。見せたいものがあるから。\""
            }
        }
    },
    "day2_after_yuna_new": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "met_yuna",
        "next": "day2_after_yuna_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"너... 내가 누군지 궁금해서 온 거지? 사실 이 학교에는 아주 깊은 비밀이 있어.\""
            },
            "en": {
                "name": "???",
                "text": "\"You... you came because you're curious about me, right? This school hides a very deep secret.\""
            },
            "es": {
                "name": "???",
                "text": "\"Tú... viniste porque tienes curiosidad sobre mí, ¿verdad? Esta escuela esconde un secreto muy profundo.\""
            },
            "ja": {
                "name": "???",
                "text": "\"あなた…私のことが気になって来たんでしょ？実はこの学校にはとても深い秘密があるの。\""
            }
        }
    },
    "day2_after_yuna_new_name_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_new_name_share",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"난 유나야. 네 이름은 뭐야?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"I'm Yuna. What's your name?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Soy Yuna. ¿Cómo te llamas?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"私はユナ。あなたの名前は？\""
            }
        }
    },
    "day2_after_yuna_new_name_share": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "setFlag": "knows_name_yuna",
        "next": "day2_after_yuna_new_follow",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"내 이름은 {name}(이)야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}だよ。\""
            }
        }
    },
    "day2_after_yuna_new_follow": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_follow_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_follow_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"{name}... 기억해둘게. 자, 나를 따라와. 너한테만 보여줄 게 있으니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"{name}... I'll remember that. Come, follow me. I have something to show only you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"{name}... lo recordaré. Ven, sígueme. Tengo algo que solo a ti te voy a mostrar.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"{name}…覚えておく。ついてきて。あなただけに見せたいものがあるから。\""
            }
        }
    },
    "day2_after_yuna_follow_again": {
        "background": "assets/images/background/school_basement.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_3_pre_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_3_pre_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나를 따라 다시 지하실 창고로 내려갔다. 아까보다 공기가 더 차갑게 느껴진다. 노을빛이 창문을 통해 스며들지만 지하실은 여전히 어두컴컴하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I follow Yuna back down to the basement warehouse. The air feels even colder than before. The sunset glow fades as we descend into the shadows.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sigo a Yuna de vuelta al almacén del sótano. El aire se siente aún más frío que antes. El brillo del atardecer se desvanece mientras descendemos entre las sombras.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナについてまた地下の倉庫に降りた。さっきより空気がさらに冷たく感じる。夕焼けの光は影の中に消えていく。*"
            }
        }
    },
    "day2_after_yuna_follow_new": {
        "background": "assets/images/background/school_basement.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_yuna_3_pre_again",
                "condition": "visited_warehouse_at_lunch"
            },
            {
                "next": "day2_after_yuna_3_pre_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나를 따라 지하실의 먼지 쌓인 창고로 내려갔다. 기묘한 한기가 감도는 곳이다. 창문으로 노을빛이 희미하게 스며든다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I follow Yuna down to a dusty warehouse in the basement. A strange chill hangs in the air. The sunset light barely reaches this deep.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sigo a Yuna hasta un almacén polvoriento en el sótano. Un extraño frío flota en el aire. La luz del atardecer apenas llega hasta aquí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナについて地下のほこりまみれの倉庫に降りた。奇妙な冷気が漂っている。夕焼けの光はこの奥までほとんど届かない。*"
            }
        }
    },
    "day2_after_yuna_3_pre_again": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"아까 봤던 그 문양들... 다시 보니 어때? 노을 질 때 보니까 더 기괴하지 않아?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Those symbols we saw earlier... what do you think now? Don't they look even more eerie in this dim light?\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Esos símbolos que vimos antes... ¿qué piensas ahora? ¿No se ven aún más espeluznantes con esta luz tenue?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"さっき見たあの模様…どう思う？この薄暗い中で見ると、もっと不気味じゃない？\""
            }
        }
    },
    "day2_after_yuna_3_pre_new": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_after_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"봐, {name}. 이 벽에 새겨진 문양들... 내가 추적해온 이 학교의 비밀들과 일치해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Look, {name}. These patterns on the wall... they match the secrets of this school I've been tracking.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Mira, {name}. Estos patrones en la pared... coinciden con los secretos de esta escuela que he estado investigando.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"見て、{name}。この壁に刻まれた模様…私がずっと追ってきたこの学校の秘密と一致するの。\""
            }
        }
    },
    "day2_after_yuna_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_yuna_meaning",
                "stats": {
                    "Yuna": {
                        "affinity": 4
                    }
                }
            },
            {
                "next": "day2_yuna_scary",
                "affinityChar": "Yuna",
                "affinityBranches": [
                    {
                        "minAffinity": 20,
                        "next": "day2_yuna_scary_high"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_yuna_scary"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_yuna_scary_low"
                    }
                ],
                "stats": {
                    "Yuna": {
                        "affinity": 6
                    }
                }
            },
            {
                "next": "day2_yuna_eye",
                "stats": {
                    "Yuna": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 손가락으로 벽의 틈새를 가리킨다. 그곳에는 붉은색으로 기묘한 눈 모양이 그려져 있다.*",
                "choices": [
                    "이게 대체 뭘 의미하는 거야?",
                    "*유나의 손을 잡으며* 무서우니까 이제 나가자.",
                    "이 눈... 꼭 우리를 지켜보고 있는 것 같아."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Yuna points to a crack in the wall. A strange, eye-like symbol is drawn there in reddish ink.*",
                "choices": [
                    "What does this even mean?",
                    "*Taking Yuna's hand* It's scary, let's get out of here.",
                    "This eye... it feels like it's watching us."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna señala una grieta en la pared. Un extraño símbolo con forma de ojo está dibujado ahí con tinta rojiza.*",
                "choices": [
                    "¿Qué significa esto?",
                    "*Tomando la mano de Yuna* Da miedo, salgamos de aquí.",
                    "Este ojo... se siente como si nos estuviera observando."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが壁の隙間を指さす。そこには赤い色で奇妙な目の模様が描かれている。*",
                "choices": [
                    "これは一体どういう意味なんだ？",
                    "*ユナの手を握って* 怖いからもう出よう。",
                    "この目…まるで僕たちを見張っているみたいだ。"
                ]
            }
        }
    },
    "day2_yuna_meaning": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"감시... 아니면 보호. 누구를 위한 것인지는 아직 알 수 없어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Surveillance... or protection. I still don't know who it's for.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Vigilancia... o protección. Todavía no sé para quién es.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"監視…それとも守護。誰のためのものかはまだわからない。\""
            }
        }
    },
    "day2_yuna_scary_high": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 5
            }
        },
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 내 손을 꼭 잡으며 살며시 미소 짓는다.* \"...네 손, 따뜻해. 오랜만에 이런 온기를 느껴보네. 좋아, 나가자. 하지만... 손은 놓지 마.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna holds my hand tightly and smiles softly.* \"...Your hand is warm. It's been a long time since I felt such warmth. Okay, let's go. But... don't let go of my hand.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna aprieta mi mano y sonríe suavemente.* \"...Tu mano es cálida. Hace mucho que no sentía este calor. Está bien, vámonos. Pero... no sueltes mi mano.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが僕の手をぎゅっと握って、そっと微笑む。* \"…あなたの手、温かい。こんな温もりを感じるのは久しぶり。わかった、出よう。でも…手は離さないで。\""
            }
        }
    },
    "day2_yuna_scary": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...손이 따뜻하네. 알았어. 오늘은 이만 돌아가자.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Your hand is warm. Okay. Let's head back for today.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Tu mano es cálida. Está bien. Volvamos por hoy.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…手、温かいね。わかった。今日はもう戻ろう。\""
            }
        }
    },
    "day2_yuna_scary_low": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": -10
            }
        },
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "*유나가 차갑게 손을 뿌리친다.* \"...갑자기 손은 왜 잡아? 무섭다고? 겁쟁이치고는 대담하네. 나가고 싶으면 혼자 나가.\""
            },
            "en": {
                "name": "Yuna",
                "text": "*Yuna coldly pulls her hand away.* \"...Why are you grabbing my hand? Scared? You're quite bold for a coward. Leave alone if you want.\""
            },
            "es": {
                "name": "Yuna",
                "text": "*Yuna retira su mano fríamente.* \"...¿Por qué me tomas la mano? ¿Tienes miedo? Eres bastante atrevido para ser un cobarde. Si quieres irte, vete solo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "*ユナが冷たく手を振り払う。* \"…急に手を握らないで。怖いの？臆病者のくせに大胆だね。出たいなら一人で出て。\""
            }
        }
    },
    "day2_yuna_eye": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day2_yuna_night_talk",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"정답이야. 이 학교는 거대한 감옥이나 실험실일지도 몰라. 그리고 우린 그 안에서 무언가를 시험받고 있는 거고.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"Correct. This school might be a giant prison or a laboratory. And we're being tested within it.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Correcto. Esta escuela podría ser una prisión gigante o un laboratorio. Y nosotros estamos siendo puestos a prueba dentro de ella.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"正解。この学校は巨大な監獄か実験室かもしれない。そして私たちはその中で何かを試されているの。\""
            }
        }
    },
    "day2_yuna_night_talk": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "setFlag": "day2_met_yuna_after",
        "next": "day2_yuna_nurse_encounter",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"이건... 단순한 낙서가 아니야. 이 학교의 설립 목적과 관련이 있어. {name}, 넌 이제 돌이킬 수 없는 길을 선택한 거야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"This isn't just graffiti. It's tied to the very purpose of this school. {name}, you've chosen a path with no turning back.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"Esto no es solo un grafiti. Está ligado al propósito mismo de esta escuela. {name}, has elegido un camino sin retorno.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"これは…ただの落書きじゃない。この学校の設立目的に関わってる。{name}、あなたはもう後戻りできない道を選んだの。\""
            }
        }
    },
    "day2_yuna_nurse_encounter": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_yuna_nurse_met",
                "condition": "met_nurse"
            },
            {
                "next": "day2_yuna_nurse_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나와 함께 창고를 나서는데, 복도에서 누군가와 마주쳤다.*"
            },
            "en": {
                "name": "Me",
                "text": "*As we leave the warehouse with Yuna, we bump into someone in the corridor.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al salir del almacén con Yuna, nos topamos con alguien en el pasillo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナと一緒に倉庫を出ると、廊下で誰かとばったり出くわした。*"
            }
        }
    },
    "day2_yuna_nurse_met": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_react",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}? 이 시간에 여긴 웬일이야? ...그리고 이 학생은...\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh my, {name}? What are you doing here at this hour? ...And who is this student?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Ay, ¿{name}? ¿Qué haces aquí a esta hora? ...¿Y quién es esta estudiante?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}？こんな時間にここで何してるの？…それにこの子は…\""
            }
        }
    },
    "day2_yuna_nurse_new": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "setFlags": [
            "met_nurse",
            "knows_name_nurse"
        ],
        "next": "day2_yuna_nurse_react",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"어머? 학생들이 이 시간에 여긴 웬일이야? 여기는 오래된 창고라 위험한데... 아, 난 보건선생님이야.\""
            },
            "en": {
                "name": "???",
                "text": "\"Hmm? Students at this hour, here? This old warehouse is dangerous... Oh, I'm the school nurse.\""
            },
            "es": {
                "name": "???",
                "text": "\"¿Hmm? ¿Estudiantes a esta hora, aquí? Este viejo almacén es peligroso... Ah, soy la enfermera de la escuela.\""
            },
            "ja": {
                "name": "???",
                "text": "\"あら？こんな時間に生徒がここに？この古い倉庫は危ないのに…あ、私は保健の先生よ。\""
            }
        }
    },
    "day2_yuna_nurse_react": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_choice",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"(유나가 차갑게 말한다) ...그냥 지나가는 길이에요. 신경 쓸 것 없어요.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"(Yuna speaks coldly) ...We were just passing by. Don't mind us.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"(Yuna habla fríamente) ...Solo estábamos de paso. No se preocupe por nosotros.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"（ユナが冷たく言う）…通りかかっただけです。気にしないでください。\""
            }
        }
    },
    "day2_yuna_nurse_choice": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "choices": [
            {
                "next": "day2_yuna_nurse_protect",
                "stats": {
                    "Yuna": {
                        "affinity": 5
                    },
                    "Nurse": {
                        "affinity": -2
                    }
                }
            },
            {
                "next": "day2_yuna_nurse_excuse",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_yuna_nurse_silent",
                "stats": {
                    "Yuna": {
                        "affinity": 2
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"(보건선생님이 유나를 의미심장하게 바라본다) ...그래? 후훗, 조심해서 가렴. 어두운 곳에는 위험한 것들이 숨어 있으니까.\"",
                "choices": [
                    "*유나의 손을 잡고* 네, 조심할게요.",
                    "선생님, 저희 그냥 산책하던 거예요.",
                    "*아무 말 없이 목례만 한다*"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"(The nurse looks at Yuna suspiciously) ...Is that so? Hehe, be careful. Dangerous things hide in dark places.\"",
                "choices": [
                    "*Hold Yuna's hand* Yes, we'll be careful.",
                    "Ma'am, we were just taking a walk.",
                    "*Just bow silently*"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"(La enfermera mira a Yuna con suspicacia) ...¿En serio? Jeje, tengan cuidado. Cosas peligrosas se esconden en lugares oscuros.\"",
                "choices": [
                    "*Tomo la mano de Yuna* Sí, tendremos cuidado.",
                    "Señora, solo estábamos paseando.",
                    "*Solo hago una reverencia en silencio*"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"（保健の先生が意味深にユナを見つめる）…そう？ふふっ、気をつけなさい。暗い場所には危険なものが潜んでいるから。\"",
                "choices": [
                    "*ユナの手を握って* はい、気をつけます。",
                    "先生、僕たちはただ散歩してただけです。",
                    "*何も言わずに会釈だけする*"
                ]
            }
        }
    },
    "day2_yuna_nurse_protect": {
        "characters": {
            "left": "assets/images/characters/yuna_shy.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"(유나가 내 손을 살짝 꼭 쥐다) ...고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"(Yuna squeezes my hand slightly) ...Thanks.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"(Yuna aprieta ligeramente mi mano) ...Gracias.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"（ユナが僕の手をそっとぎゅっと握る）…ありがと。\""
            }
        }
    },
    "day2_yuna_nurse_excuse": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래? 후훗, 다음부터는 좀 더 밝은 곳으로 산책하렴. 선생님이 걱정되니까.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Is that so? Hehe, try walking somewhere brighter next time. I worry, you know.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Sí? Jeje, la próxima paseen por un lugar más iluminado. Me preocupo, ¿saben?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"そう？ふふっ、次はもう少し明るいところを散歩しなさいね。先生、心配するから。\""
            }
        }
    },
    "day2_yuna_nurse_silent": {
        "characters": {
            "left": "assets/images/characters/yuna_normal.png",
            "right": "assets/images/characters/nurse_normal.png"
        },
        "sunset": true,
        "next": "day2_yuna_nurse_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"(보건선생님이 의미심장한 눈빛으로 우리를 바라보다가 지나간다)\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"(The nurse watches us with a suspicious look, then walks away)\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"(La enfermera nos observa con una mirada suspicaz y luego se va)\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"（保健の先生が意味深な目で僕たちを見つめてから、通り過ぎていく）\""
            }
        }
    },
    "day2_yuna_nurse_end": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_end",
                "condition": "has_number_yuna"
            },
            {
                "next": "day2_yuna_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...저 사람, 뭔가 이상해. 단순한 보건선생님이 아닌 것 같아. {name}, 조심해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...That person feels strange. She's not just a normal school nurse. {name}, be careful.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Esa persona se siente extraña. No es una simple enfermera escolar. {name}, ten cuidado.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…あの人、何かおかしい。ただの保健の先生じゃない気がする。{name}、気をつけて。\""
            }
        }
    },
    "day2_yuna_contact_ask": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_yuna_contact_success",
                "setFlags": [
                    "has_number_yuna",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_yuna_contact_fail",
                "stats": {
                    "Yuna": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"비밀을 공유하려면... 연락할 수단은 있어야겠지. 네 번호, 여기에 남겨줘.\"",
                "choices": [
                    "응, 좋아. 너에 대해 모든 걸 알고 싶어.",
                    "미안, 아직은 좀 조심스러워."
                ]
            },
            "en": {
                "name": "Yuna",
                "text": "\"If we're sharing secrets... we need a way to reach each other. Leave your number here.\"",
                "choices": [
                    "Sure. I want to know everything about you.",
                    "Sorry, I'm still a bit cautious."
                ]
            },
            "es": {
                "name": "Yuna",
                "text": "\"Si vamos a compartir secretos... necesitamos una forma de contactarnos. Deja tu número aquí.\"",
                "choices": [
                    "Claro. Quiero saber todo sobre ti.",
                    "Perdón, todavía soy un poco cauteloso."
                ]
            },
            "ja": {
                "name": "ユナ",
                "text": "\"秘密を共有するなら…連絡手段は必要でしょ。ここに番号を残して。\"",
                "choices": [
                    "うん、いいよ。君のこと全部知りたい。",
                    "ごめん、まだちょっと慎重にいきたくて。"
                ]
            }
        }
    },
    "day2_yuna_contact_success": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 8
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...됐어. 이제 우린 연결된 거야. 내가 부르면... 언제든 와줘야 해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Done. Now we're connected. When I call... you must come, no matter what.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Listo. Ahora estamos conectados. Cuando te llame... debes venir, sin importar qué.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…できた。これで私たちは繋がった。私が呼んだら…何があっても来てね。\""
            }
        }
    },
    "day2_yuna_contact_fail": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"...그래. 억지로 강요하진 않아. 하지만 기회는 자주 오지 않는다는 걸 명심해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Fine. I won't force you. But remember, opportunities are rare.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Está bien. No te voy a obligar. Pero recuerda, las oportunidades son escasas.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…そう。無理強いはしない。でもチャンスはそう何度も来ないってこと、覚えておいて。\""
            }
        }
    },
    "day2_after_dain": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_dain_met",
                "condition": "met_dain"
            },
            {
                "next": "day2_after_dain_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*체육관 문을 열자, 활기찬 기합 소리와 함께 배구공 튀기는 소리가 들려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the gym door, the energetic shouts and the sound of volleyballs bouncing greet me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la puerta del gimnasio, me reciben gritos llenos de energía y el sonido de balones de voleibol rebotando.*"
            },
            "ja": {
                "name": "僕",
                "text": "*体育館の扉を開けると、元気な掛け声とバレーボールが弾む音が聞こえてきた。*"
            }
        }
    },
    "day2_after_dain_met": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_after_dain_practice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오! {name}! 마침 잘 왔다. 나 연습하는 것 좀 도와줄래?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh! {name}! Perfect timing. Can you help me with practice?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oh! ¡{name}! Justo a tiempo. ¿Me ayudas con la práctica?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あ！{name}！ちょうどよかった。練習手伝ってくれない？\""
            }
        }
    },
    "day2_after_dain_practice": {
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "next": "day2_after_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이의 스파이크 연습을 도와주다 보니 어느새 온몸이 땀으로 젖었다. 창밖은 어느덧 어둑어둑해졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Helping Dain with her spikes, I'm soon drenched in sweat. Outside, it has already turned dark.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Ayudando a Dain con sus remates, pronto estoy empapado en sudor. Afuera ya oscureció.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインのスパイク練習を手伝っていたら、いつの間にか全身汗だくになっていた。窓の外はもう暗くなっている。*"
            }
        }
    },
    "day2_after_dain_new": {
        "character": "assets/images/characters/dain_sweat.png",
        "sunset": true,
        "setFlag": "met_dain",
        "next": "day2_after_dain_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"하아, 하아... 너 에너지가 넘치는구나! 처음 보는데 호흡이 척척 맞네!\""
            },
            "en": {
                "name": "???",
                "text": "\"Haa, haa... You're so full of energy! We're perfectly in sync for our first time!\""
            },
            "es": {
                "name": "???",
                "text": "\"Jaa, jaa... ¡Tienes mucha energía! ¡Estamos perfectamente sincronizados para ser la primera vez!\""
            },
            "ja": {
                "name": "???",
                "text": "\"はぁ、はぁ…あんたすごいエネルギーだね！初めてなのに息ぴったりじゃん！\""
            }
        }
    },
    "day2_after_dain_new_name_ask": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_after_dain_new_name_share",
        "_i18n": {
            "ko": {
                "name": "???",
                "text": "\"난 2학년 3반 정다인이야! 네 이름은 뭐야?\""
            },
            "en": {
                "name": "???",
                "text": "\"I'm Dain Jung from Class 2-3! What's your name?\""
            },
            "es": {
                "name": "???",
                "text": "\"¡Soy Dain Jung de la clase 2-3! ¿Cómo te llamas?\""
            },
            "ja": {
                "name": "???",
                "text": "\"あたしは2年3組のチョン・ダイン！あんたの名前は？\""
            }
        }
    },
    "day2_after_dain_new_name_share": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "setFlag": "knows_name_dain",
        "next": "day2_after_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"난 {name}(이)고 나도 2학년 3반이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"I'm {name}. I'm in Class 2-3, too.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Soy {name} y también estoy en la clase 2-3.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕は{name}、同じ2年3組だよ。\""
            }
        }
    },
    "day2_after_dain_3": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_dain_praise",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_dain_match",
                "stats": {
                    "Dain": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_dain_food",
                "stats": {
                    "Dain": {
                        "affinity": 10
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 수건으로 땀을 닦으며 나에게 시원한 음료수를 건넨다.*",
                "choices": [
                    "다인이가 토스를 잘 올려줘서 그렇지.",
                    "나중에 정식으로 한판 붙어볼까?",
                    "운동 후에 먹는 떡볶이가 최고지? 그치?"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain wipes her sweat with a towel and hands me a cold drink.*",
                "choices": [
                    "It's because you gave me such great tosses.",
                    "Should we have a real match sometime?",
                    "Tteokbokki after exercise is the best, right?"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain se seca el sudor con una toalla y me pasa una bebida fría.*",
                "choices": [
                    "Es porque tú me diste unos pases geniales.",
                    "¿Jugamos un partido de verdad algún día?",
                    "Tteokbokki después de hacer ejercicio es lo mejor, ¿verdad?"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインがタオルで汗を拭きながら、冷たい飲み物を渡してくれた。*",
                "choices": [
                    "ダインのトスが上手かったからだよ。",
                    "今度ちゃんと一回勝負しない？",
                    "運動の後のトッポッキが最高だよね？"
                ]
            }
        }
    },
    "day2_dain_praise": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_night_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이, 겸손하긴! 아무튼 오늘 덕분에 연습 잘 됐어. 고마워!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Aww, don't be so modest! Anyway, thanks to you, I got some great practice in. Thanks!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Ay, no seas tan modesto! De todas formas, gracias a ti pude practicar muy bien. ¡Gracias!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えー、謙遜しすぎ！とにかく、あんたのおかげでいい練習になったよ。ありがとね！\""
            }
        }
    },
    "day2_dain_match": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day2_dain_bet",
        "next": "day2_dain_night_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오? 자신만만인데? 좋아, 내기 걸고 한판 하는 거다? 지는 사람이 떡볶이 쏘기!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Oh? Confident? Fine, let's make a bet! Loser buys Tteokbokki!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Oh? ¿Tan seguro? ¡Bien, apostemos! ¡El que pierda paga el tteokbokki!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"え？自信あるの？いいよ、賭けようよ！負けた方がトッポッキおごりね！\""
            }
        }
    },
    "day2_dain_food": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_night_talk",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그치! 너 좀 뭘 아는구나? 떡볶이에 튀김까지 곁들이면... 크, 생각만 해도 행복하다!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Whoa! You really get it! Tteokbokki with fried sides... man, just thinking about it makes me happy!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Sí! ¡Tú sí que sabes! Tteokbokki con frituras al lado... uf, solo pensarlo me hace feliz.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"でしょ！あんたわかってるね！トッポッキに天ぷらまでつけたら…くぅ、考えただけで幸せ！\""
            }
        }
    },
    "day2_dain_night_talk": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "setFlag": "day2_met_dain_after",
        "next": "day2_dain_yuna_encounter",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"와! 너 정말 열정적이다. 우리 팀으로 영입하고 싶을 정도야! 오늘 고생했어, {name}! 조심해서 들어가!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Wow! You're really passionate about this. I almost want to recruit you for the team! Great job today, {name}! Get home safe!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Vaya! Eres muy apasionado. ¡Casi quiero reclutarte para el equipo! ¡Buen trabajo hoy, {name}! ¡Cuídate de camino a casa!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"わぁ！あんた本当に熱いね。チームにスカウトしたいくらい！今日はお疲れ、{name}！気をつけて帰ってね！\""
            }
        }
    },
    "day2_dain_yuna_encounter": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_spot",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때, 체육관 창문 너머로 누군가 지나가는 게 보인다. 창백한 피부의 여학생이 조용히 복도를 걷고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Just then, I notice someone passing by the gym window. A pale-skinned girl walks quietly down the corridor.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Justo entonces, noto a alguien pasar por la ventana del gimnasio. Una chica de piel pálida camina silenciosamente por el pasillo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*その時、体育館の窓の向こうを誰かが通り過ぎるのが見えた。色白の女の子が静かに廊下を歩いている。*"
            }
        }
    },
    "day2_dain_yuna_spot": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day2_dain_yuna_choice",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"(다인이가 창밖을 보며 살짝 몸을 떨다) 저, 저 애... 좀 으스스하지 않아? 맨날 혼자 저렇게 돌아다니는데...\""
            },
            "en": {
                "name": "Dain",
                "text": "\"(Dain looks out the window and shivers slightly) That girl... isn't she kind of creepy? She's always wandering around alone like that...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"(Dain mira por la ventana y tiembla un poco) Esa chica... ¿no te da un poco de escalofríos? Siempre anda sola así...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"（ダインが窓の外を見て少し身震いする）あ、あの子…ちょっと不気味じゃない？いつもああやって一人でうろうろしてるんだけど…\""
            }
        }
    },
    "day2_dain_yuna_choice": {
        "character": "assets/images/characters/dain_normal.png",
        "choices": [
            {
                "next": "day2_dain_yuna_know",
                "condition": "met_yuna",
                "stats": {
                    "Dain": {
                        "affinity": 2
                    },
                    "Yuna": {
                        "affinity": 2
                    }
                }
            },
            {
                "next": "day2_dain_yuna_unknown",
                "excludeCondition": "met_yuna",
                "stats": {
                    "Dain": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_dain_yuna_compliment",
                "stats": {
                    "Dain": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인이가 유나를 보며 불안해하는 것 같다.*",
                "choices": [
                    "유나? 아, 그냥 조용한 애야.",
                    "글쎄, 나도 처음 봐.",
                    "다인이 더 밝고 좋아!"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*Dain seems uneasy looking at Yuna.*",
                "choices": [
                    "Yuna? She's just quiet, that's all.",
                    "Dunno, first time seeing her.",
                    "You're way brighter and better, Dain!"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Dain parece inquieta al mirar a Yuna.*",
                "choices": [
                    "¿Yuna? Es solo callada, nada más.",
                    "No sé, es la primera vez que la veo.",
                    "¡Tú eres mucho más alegre y genial, Dain!"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*ダインがユナを見て不安そうにしている。*",
                "choices": [
                    "ユナ？ああ、ただ静かな子だよ。",
                    "さあ、僕も初めて見た。",
                    "ダインの方がずっと明るくていいよ！"
                ]
            }
        }
    },
    "day2_dain_yuna_know": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"어? 알아? 와, {name} 넌 여러 애들이랑 친하구나. 근데 나랑 제일 친한 거지? 그치?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh? You know her? Wow, {name}, you're friends with everyone. But I'm your best friend, right? Right?\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Eh? ¿La conoces? Vaya, {name}, eres amigo de todos. Pero yo soy tu mejor amiga, ¿verdad? ¿Verdad?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"え？知り合いなの？わぁ、{name}っていろんな子と仲良いんだね。でもあたしが一番の友達だよね？ね？\""
            }
        }
    },
    "day2_dain_yuna_unknown": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"그치? 뭔가 분위기가 달라... 아무튼 나랑 있을 땐 저런 생각 하지 말고 나한테만 집중해!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Right? She has this different vibe... Anyway, when you're with me, focus only on me!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Verdad? Tiene una vibra diferente... En fin, cuando estés conmigo, ¡concéntrate solo en mí!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"だよね？なんか雰囲気が違うっていうか…とにかく、あたしといる時はあたしだけに集中してよ！\""
            }
        }
    },
    "day2_dain_yuna_compliment": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day2_dain_yuna_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이, 갑자기 무슨 말이야~! (다인이가 얼굴을 붉히며 어깨를 친다) 아무튼 고마워! 역시 {name}이 최고야!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"H-hey, what's with that all of a sudden?! (Dain blushes and playfully hits my shoulder) But thanks! {name}'s the best!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡O-oye, a qué viene eso de repente?! (Dain se sonroja y me da un golpecito juguetón en el hombro) ¡Pero gracias! ¡{name} es el mejor!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ちょ、急に何言ってんの～！（ダインが顔を赤くして肩をぽんっと叩く）でもありがと！やっぱ{name}が最高！\""
            }
        }
    },
    "day2_dain_yuna_end": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_end",
                "condition": "has_number_dain"
            },
            {
                "next": "day2_dain_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 멀리 사라진다. 다인이는 여전히 신경 쓰이는 듯하지만, 이내 다시 밝은 표정을 짓는다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna disappears into the distance. Dain still seems bothered but quickly returns to her bright expression.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna desaparece a lo lejos. Dain todavía parece molesta pero rápidamente vuelve a su expresión alegre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが遠くに消えていく。ダインはまだ気にしている様子だけど、すぐにまた明るい表情に戻った。*"
            }
        }
    },
    "day2_dain_contact_ask": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_dain_contact_success",
                "setFlags": [
                    "has_number_dain",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_dain_contact_fail",
                "stats": {
                    "Dain": {
                        "affinity": -15
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"아, {name}! 우리 앞으로도 계속 보려면 연락처는 있어야겠지? 여기 번호 찍어!\"",
                "choices": [
                    "응, 당연하지! 여기 내 번호야.",
                    "우리 어차피 내일 학교에서 볼 거잖아?"
                ]
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, {name}! If we're going on food tours, we'll need each other's numbers, right? Punch it in!\"",
                "choices": [
                    "Sure! It'll be fun to explore food places with you.",
                    "Hmm.. maybe next time."
                ]
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye, {name}! Si vamos a hacer tours de comida, necesitamos los números del otro, ¿no? ¡Anótalo!\"",
                "choices": [
                    "¡Claro! Será divertido explorar lugares de comida contigo.",
                    "Hmm... quizás la próxima."
                ]
            },
            "ja": {
                "name": "ダイン",
                "text": "\"あ、{name}！これからも一緒に遊ぶなら連絡先は必要だよね？ほら、番号入れて！\"",
                "choices": [
                    "うん、もちろん！一緒に食べ歩きするの楽しそう。",
                    "うーん…また今度にしようかな。"
                ]
            }
        }
    },
    "day2_dain_contact_success": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 8
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"오케이, 저장 완료! 이제 심심할 때마다 너한테 연락한다? 각오하고 있어!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Contact saved! I'll message you as soon as I find a tasty spot, so be ready!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Contacto guardado! ¡Te escribo apenas encuentre un lugar rico, así que estate listo!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"オッケー、登録完了！暇な時はいつでも連絡するから、覚悟しといてね！！\""
            }
        }
    },
    "day2_dain_contact_fail": {
        "character": "assets/images/characters/dain_pout.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"참 나, 비싸게 구네? 알았어! 내일 체육관 오기만 해봐, 번호 줄 때까지 안 보내줄 거니까!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"What? Playing coy? Fine, fine. I'll work harder until I get your number!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿Qué? ¿Te haces el difícil? Bueno, bueno. ¡Voy a insistir hasta que me des tu número!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えっ、もったいぶるの？わかったよ！番号くれるまで絶対あきらめないからね！\""
            }
        }
    },
    "day2_after_nurse": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_nurse_met",
                "condition": "met_nurse"
            },
            {
                "next": "day2_after_nurse_new"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건실 문을 열자, 은은한 허브 향기와 함께 선생님이 책을 읽고 있는 모습이 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the infirmary door, I see the teacher reading under the gentle scent of herbs.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la puerta de la enfermería, veo a la profesora leyendo entre el suave aroma de hierbas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健室の扉を開けると、ほのかなハーブの香りとともに先生が本を読んでいるのが見えた。*"
            }
        }
    },
    "day2_after_nurse_met": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "affinityChar": "Nurse",
        "affinityBranches": [
            {
                "minAffinity": 20,
                "next": "day2_after_nurse_met_high"
            },
            {
                "minAffinity": 0,
                "next": "day2_after_nurse_met_check"
            },
            {
                "minAffinity": -100,
                "next": "day2_after_nurse_met_low"
            }
        ],
        "next": "day2_after_nurse_met_check",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 또 왔네? 오늘은 어디가 아파서 온 걸까? 아니면... 그냥 내 얼굴 보러 온 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, {name}. Back again? What's the trouble today? Or... did you just come to see me?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Oh, {name}. ¿De nuevo por aquí? ¿Qué te pasa hoy? O... ¿solo viniste a verme?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}。また来たの？今日はどこが悪いのかな？それとも…ただ私に会いに来たの？\""
            }
        }
    },
    "day2_after_nurse_met_high": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 3
            }
        },
        "branches": [
            {
                "next": "day2_after_nurse_invited",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_after_nurse_3"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 내 얼굴을 보며 부드럽게 미소 짓는다.* \"후훗, {name}. 이렇게 자주 오니까 선생님도 은근히 기대가 되네. 어서 들어와.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me and smiles softly.* \"Hehe, {name}. Seeing you so often makes me start to look forward to it. Come on in.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora me mira y sonríe suavemente.* \"Jeje, {name}. Verte tan seguido ya me genera expectativa. Pasa, pasa.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が僕の顔を見て柔らかく微笑む。* \"ふふっ、{name}。こんなに頻繁に来てくれると、先生も楽しみになっちゃうな。さあ、入って。\""
            }
        }
    },
    "day2_after_nurse_met_check": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_nurse_invited",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_after_nurse_3"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, {name}. 방과 후에 보건실이라니... 어디 안 좋은 거야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, {name}. An infirmary visit after school... is something wrong?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Oh, {name}. Una visita a la enfermería después de clases... ¿te pasa algo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、{name}。放課後に保健室なんて…どこか具合でも悪いの？\""
            }
        }
    },
    "day2_after_nurse_met_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "branches": [
            {
                "next": "day2_after_nurse_invited",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_after_nurse_3"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 날 보며 무심하게 말한다.* \"...{name}, 또 왔어? 오늘은 무슨 일이야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me uncertainly.* \"...It's {name}, right? Are you feeling unwell?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora me mira con indiferencia.* \"...{name}, ¿de nuevo? ¿Qué se te ofrece hoy?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が無関心そうに僕を見る。* \"…{name}、また来たの？今日は何の用？\""
            }
        }
    },
    "day2_after_nurse_invited": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, {name}. 오늘 저녁 우리 집에서 보기로 한 거... 잊지 않았지? 벌써부터 보고 싶어서 달려온 거라면 선생님 정말 감동인데?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, {name}. You haven't forgotten our plan to meet at my place this evening, have you? If you're here because you missed me already, I'm truly touched.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, {name}. No olvidaste nuestro plan de vernos en mi casa esta noche, ¿verdad? Si viniste porque ya me extrañabas, estoy realmente conmovida.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふっ、{name}。今夜うちで会う約束…忘れてないでしょ？もう会いたくなって来ちゃったなら、先生すっごく嬉しいんだけど？\""
            }
        }
    },
    "day2_after_nurse_new": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "met_nurse",
        "next": "day2_after_nurse_new_name_ask",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 처음 보는 얼굴이네? 이번에 전학 온 학생이니? 나는 보건선생님이야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, a new face? Are you the transfer student? I'm the school nurse.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Oh, una cara nueva. ¿Eres el estudiante de intercambio? Soy la enfermera de la escuela.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、初めて見る顔ね？今度の転校生かしら？私は保健の先生よ。\""
            }
        }
    },
    "day2_after_nurse_new_name_ask": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_after_nurse_new_name_share",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그러고 보니 이름이 뭐야? 선생님한테만 살짝 알려줄래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"By the way, what's your name? Won't you tell me? Just between us.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Por cierto, ¿cómo te llamas? ¿Me lo dices? Solo entre nosotros.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"そういえば名前は？先生にだけこっそり教えてくれない？\""
            }
        }
    },
    "day2_after_nurse_new_name_share": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "setFlag": "knows_name_nurse",
        "next": "day2_after_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"제 이름은 {name}(이)에요.\""
            },
            "en": {
                "name": "Me",
                "text": "\"My name is {name}.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Me llamo {name}.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"僕の名前は{name}です。\""
            }
        }
    },
    "day2_after_nurse_3": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_nurse_miss",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 15,
                        "next": "day2_nurse_miss"
                    },
                    {
                        "minAffinity": 0,
                        "next": "day2_nurse_miss_normal"
                    },
                    {
                        "minAffinity": -100,
                        "next": "day2_nurse_miss_low"
                    }
                ],
                "stats": {
                    "Nurse": {
                        "affinity": 8
                    }
                }
            },
            {
                "next": "day2_nurse_rest",
                "stats": {
                    "Nurse": {
                        "affinity": 3
                    }
                }
            },
            {
                "next": "day2_nurse_aroma",
                "stats": {
                    "Nurse": {
                        "affinity": 5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 안경을 고쳐 쓰며 나를 빤히 바라본다.*",
                "choices": [
                    "선생님이 보고 싶어서 왔어요.",
                    "그냥 조용히 쉬고 싶어서요.",
                    "이 방에서 나는 향기가 너무 좋아요."
                ]
            },
            "en": {
                "name": "Me",
                "text": "*The teacher adjusts her glasses and stares at me intently.*",
                "choices": [
                    "I came because I missed you.",
                    "I just wanted some quiet rest.",
                    "I love the scent of this room."
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora se ajusta los lentes y me mira fijamente.*",
                "choices": [
                    "Vine porque la extrañaba.",
                    "Solo quería descansar tranquilo.",
                    "Me encanta el aroma de esta sala."
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*先生が眼鏡を直しながら僕をじっと見つめる。*",
                "choices": [
                    "先生に会いたくて来ました。",
                    "ただ静かに休みたくて。",
                    "この部屋の香りがすごく好きなんです。"
                ]
            }
        }
    },
    "day2_nurse_miss": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 솔직해서 좋네. 그렇게 솔직한 우리 전학생에겐 상을 줘야겠지?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, I like how honest you are. I should give such an honest transfer student a reward, shouldn't I?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, me gusta lo sincero que eres. A un estudiante de intercambio tan honesto habría que darle un premio, ¿no?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふっ、素直でいいわね。そんなに正直な転校生にはご褒美をあげなきゃね？\""
            }
        }
    },
    "day2_nurse_miss_normal": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 솔직한 건 좋은데... 선생님한테 그런 말을 하면 오해받을 수 있어, {name}. 그래도 귀엽긴 하네.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, honesty is good... but saying things like that to a teacher can be misunderstood, {name}. Still, you are quite cute.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, la sinceridad está bien... pero decirle cosas así a una profesora puede malinterpretarse, {name}. Aunque sí eres bastante tierno.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふっ、素直なのはいいけど…先生にそういうこと言うと誤解されるわよ、{name}。でもまあ、可愛いから許してあげる。\""
            }
        }
    },
    "day2_nurse_miss_low": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": -8
            }
        },
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 안경 너머로 나를 차갑게 바라본다.* \"...아직 우린 그런 사이가 아닌 것 같은데? 학생, 농담도 적당히 해야지. 오늘은 그냥 쉬다 가렴.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher looks at me coldly over her glasses.* \"...I don't think we're quite on such terms yet? Student, keep your jokes appropriate. Just rest here for today.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora me mira fríamente por encima de sus lentes.* \"...No creo que tengamos tanta confianza todavía, ¿o sí? Estudiante, modera tus bromas. Solo descansa aquí hoy.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が眼鏡越しに冷たく僕を見る。* \"…まだそんな関係じゃないと思うけど？冗談にも程があるわよ。今日はおとなしく休んでいきなさい。\""
            }
        }
    },
    "day2_nurse_rest": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"그래? 그럼 저기 침대에 가서 누워 있어. 내가 방해 안 할게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Is that so? Then go ahead and lie down on that bed. I won't disturb you.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Sí? Entonces ve y acuéstate en esa cama. No te voy a molestar.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"そう？じゃあそこのベッドで横になっていなさい。邪魔しないから。\""
            }
        }
    },
    "day2_nurse_aroma": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 눈썰미가 좋네. 이건 내가 직접 블렌딩한 아로마 오일이야. 마음을 편안하게 해주지.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, you have sharp senses. This is an aroma oil I blended myself. It's meant to put the mind at ease.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Oh, tienes buen olfato. Este es un aceite aromático que preparé yo misma. Está hecho para relajar la mente.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、目がいいわね。これは私が自分でブレンドしたアロマオイルよ。心を落ち着かせてくれるの。\""
            }
        }
    },
    "day2_nurse_night_talk": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_nurse_night_talk_2",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 부드러운 미소를 지으며 내 머리를 쓰다듬는다* \"후훗, 나랑 더 있고 싶어서 온 거구나? 좋아, 오늘은 특별히 조금 더 같이 있어줄게.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher smiles softly and strokes my hair.* \"Hehe, you came because you wanted more time with me, didn't you? Fine, I'll stay with you a bit longer today, just for you.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora sonríe suavemente y me acaricia el cabello.* \"Jeje, viniste porque querías pasar más tiempo conmigo, ¿verdad? Está bien, hoy me quedo un ratito más contigo, solo por ti.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が優しく微笑みながら僕の頭を撫でる* \"ふふっ、もっと一緒にいたくて来たんでしょ？いいわよ、今日は特別にもう少しだけ付き合ってあげる。\""
            }
        }
    },
    "day2_nurse_night_talk_2": {
        "character": "assets/images/characters/nurse_normal.png",
        "background": "assets/images/background/nurse_room.jpg",
        "sunset": true,
        "setFlag": "day2_met_nurse_after",
        "branches": [
            {
                "next": "day2_end",
                "condition": "invited_nurse_home"
            },
            {
                "next": "day2_nurse_contact_already_have_talk",
                "condition": "has_number_nurse"
            },
            {
                "next": "day2_nurse_contact_ask"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님과 함께 보건실에서 도란도란 이야기를 나누다 보니 어느새 밖이 캄캄해졌다. 아쉽지만 다음을 기약하며 학교를 나섰다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Chatting with the teacher in the infirmary, the sunset has deepened into dusk. Regretfully, I leave the school, promising to see her again.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Platicando con la profesora en la enfermería, el atardecer se convirtió en noche. Con pena, me voy de la escuela, prometiendo verla de nuevo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生と保健室でおしゃべりしていたら、いつの間にか外が真っ暗になっていた。名残惜しいけど、また会う約束をして学校を出た。*"
            }
        }
    },
    "day2_nurse_contact_already_have_talk": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_end"
            },
            {
                "next": "nurse_contact_home_fail_after",
                "affinityChar": "Nurse",
                "affinityBranches": [
                    {
                        "minAffinity": 55,
                        "next": "nurse_contact_home_success_after"
                    }
                ]
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}, 우리 이미 번호 교환했었지? 시간 나면 꼭 연락해야 해? 기다릴 테니까.\"",
                "choices": [
                    "네, 그럴게요.",
                    "번호 말고... 오늘 저녁 선생님 집으로 가면 안 돼요?"
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}, we've already exchanged numbers, haven't we? You must contact me if you're bored this evening. I'll be waiting.\"",
                "choices": [
                    "Yes, I will.",
                    "Instead of my number... can I go to your house this evening?"
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"{name}, ya intercambiamos números, ¿verdad? Tienes que escribirme si te aburres esta noche. Estaré esperando.\"",
                "choices": [
                    "Sí, lo haré.",
                    "En vez de un mensaje... ¿puedo ir a tu casa esta noche?"
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"{name}、もう番号交換してたわよね？今夜暇だったら絶対連絡しなさいよ？待ってるから。\"",
                "choices": [
                    "はい、そうします。",
                    "番号じゃなくて…今夜、先生の家に行ってもいいですか？"
                ]
            }
        }
    },
    "nurse_contact_home_success_after": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 8
            }
        },
        "setFlags": [
            "invited_nurse_home"
        ],
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 눈을 크게 뜨더니, 이내 요염한 미소를 지으며 내 귓가에 속삭인다.* \"어머... {name}, 생각보다 훨씬 대담하네? 좋아, 오늘 저녁 우리 집으로 올래? 주소 찍어줄게. 대신... 부모님께는 비밀이야?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher's eyes widen, then she whispers in my ear with a seductive smile.* \"Oh... {name}, you're much bolder than I thought. Fine, want to come to my house this evening? I'll send you the address. But... it's a secret from your parents, okay?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*Los ojos de la profesora se abren de par en par, y luego me susurra al oído con una sonrisa seductora.* \"Oh... {name}, eres mucho más atrevido de lo que pensaba. Está bien, ¿quieres venir a mi casa esta noche? Te mando la dirección. Pero... es secreto de tus padres, ¿de acuerdo?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生が目を大きく見開いて、やがて艶っぽい微笑みを浮かべて僕の耳元でささやく。* \"あら…{name}、思ったよりずっと大胆ね？いいわよ、今夜うちに来る？住所送ってあげる。でも…ご両親には内緒よ？\""
            }
        }
    },
    "nurse_contact_home_fail_after": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "*선생님이 꺄르르 웃음을 터뜨린다.* \"어머나 {name}! 넌 정말 귀엽다. 하지만 우리 집은 아직 좀 이른 것 같네? 나중에 메시지나 해.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "*The teacher bursts into laughter.* \"Oh my, {name}! You're so cute. But my house is a bit too early, isn't it? Just message me later.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "*La profesora suelta una carcajada.* \"¡Ay, {name}! Qué tierno eres. Pero mi casa es un poco prematuro, ¿no crees? Mejor escríbeme después.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "*先生がくすくすと笑い出す。* \"あらまあ{name}！本当に可愛いわね。でもうちに来るのはまだ早いかな？後でメッセージして。\""
            }
        }
    },
    "day2_nurse_contact_ask": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_nurse_contact_success",
                "setFlags": [
                    "has_number_nurse",
                    "has_any_contact"
                ]
            },
            {
                "next": "day2_nurse_contact_fail",
                "stats": {
                    "Nurse": {
                        "affinity": -5
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"{name}, 혹시 모르니까 내 번호 저장해둘래? 아프거나 고민 있으면 언제든 연락해.\"",
                "choices": [
                    "네, 알려주세요!",
                    "아직은 좀 부담스러워요."
                ]
            },
            "en": {
                "name": "School Nurse",
                "text": "\"{name}, why don't you save my number just in case? Contact me anytime you're sick or need someone to talk to.\"",
                "choices": [
                    "Yes, please!",
                    "It's a bit much for now."
                ]
            },
            "es": {
                "name": "Enfermera",
                "text": "\"{name}, ¿por qué no guardas mi número por si acaso? Contáctame cuando estés enfermo o necesites hablar.\"",
                "choices": [
                    "¡Sí, por favor!",
                    "Por ahora me parece un poco apresurado."
                ]
            },
            "ja": {
                "name": "保健先生",
                "text": "\"{name}、念のため私の番号を登録しておいたら？具合が悪い時や悩みがある時はいつでも連絡して。\"",
                "choices": [
                    "はい、お願いします！",
                    "まだちょっと早い気がします。"
                ]
            }
        }
    },
    "day2_nurse_contact_success": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 10
            }
        },
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"후훗, 착하네. 그럼 나중에 연락할게? 잘 가, {name}.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Hehe, good boy. Then I'll message you later. Have a good evening, {name}.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Jeje, buen chico. Entonces te escribo después. Que pases buena noche, {name}.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ふふっ、いい子ね。じゃあ後で連絡するわね？おやすみ、{name}。\""
            }
        }
    },
    "day2_nurse_contact_fail": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"어머, 튕기는 거야? 알았어. 나중에 마음 바뀌면 말해줘. 조심해서 들어가!\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Oh, playing hard to get? Fine. Let me know if you change your mind. Get home safe!\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Oh, ¿haciéndote el difícil? Está bien. Avísame si cambias de opinión. ¡Cuídate de camino a casa!\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"あら、焦らすのね？わかったわ。気が変わったら言ってね。気をつけて帰りなさい！\""
            }
        }
    },
    "day2_after_teacher": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교무실 문을 열자, 텅 빈 사무실 안에서 홀로 스탠드를 켜고 서류를 검토 중인 담임선생님이 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Opening the faculty room door, I see the homeroom teacher working alone under a desk lamp in the empty office.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir la puerta de la sala de profesores, veo a la tutora trabajando sola bajo una lámpara de escritorio en la oficina vacía.*"
            },
            "ja": {
                "name": "僕",
                "text": "*職員室の扉を開けると、がらんとした部屋の中でスタンドライトを点けて一人で書類を見ている担任の先生が見えた。*"
            }
        }
    },
    "day2_after_teacher_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머, {name}? 이 시간에 교무실엔 어쩐 일이야? 아직 하교 안 했니?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, {name}? What brings you here at this hour? Haven't you gone home yet?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Oh, ¿{name}? ¿Qué te trae por aquí a esta hora? ¿Todavía no te fuiste a casa?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あら、{name}？こんな時間に職員室にどうしたの？まだ帰ってなかったの？\""
            }
        }
    },
    "day2_after_teacher_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "choices": [
            {
                "next": "day2_after_teacher_work",
                "stats": {
                    "Teacher": {
                        "affinity": 10
                    }
                }
            },
            {
                "next": "day2_after_teacher_coffee",
                "stats": {
                    "Teacher": {
                        "affinity": 5
                    }
                }
            },
            {
                "next": "day2_after_teacher_worry",
                "stats": {
                    "Teacher": {
                        "affinity": 8
                    }
                }
            }
        ],
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"선생님은 이번 주에 제출할 서류가 좀 많아서... 후훗, 전학 첫 주부터 선생님의 이런 초췌한 모습만 보여주게 되네.\"",
                "choices": [
                    "제가 도와드릴게요. 같이 하면 금방 끝날 거예요!",
                    "선생님 힘내세요! 제가 커피라도 한 잔 타 드릴까요?",
                    "선생님, 너무 무리하시는 거 아니에요? 걱정돼요."
                ]
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"I have quite a few documents to submit this week... Hehe, I'm showing you such a haggard side of me since your first week.\"",
                "choices": [
                    "I'll help you. We'll finish much faster together!",
                    "Hang in there! Should I make you a cup of coffee?",
                    "Teacher, don't overwork yourself. I'm worried."
                ]
            },
            "es": {
                "name": "Profesora",
                "text": "\"Tengo bastantes documentos que entregar esta semana... Jeje, te estoy mostrando mi lado más agotado desde tu primera semana.\"",
                "choices": [
                    "¡Yo le ayudo! ¡Juntos terminamos más rápido!",
                    "¡Ánimo, profesora! ¿Le preparo un café?",
                    "Profesora, no se esfuerce tanto. Me preocupa."
                ]
            },
            "ja": {
                "name": "担任先生",
                "text": "\"今週提出しなきゃいけない書類が結構あって…ふふっ、転校初週からこんなくたびれた姿見せちゃってごめんね。\"",
                "choices": [
                    "僕が手伝います。一緒にやればすぐ終わりますよ！",
                    "先生、頑張ってください！コーヒーでも淹れましょうか？",
                    "先生、無理しすぎじゃないですか？心配です。"
                ]
            }
        }
    },
    "day2_after_teacher_work": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day2_after_teacher_work_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님의 옆자리에 앉아 서류 정리를 돕기 시작했다. 조용한 교무실 안에 종이 넘기는 소리만 규칙적으로 들려온다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I sat next to the teacher and started helping her sort the papers. Only the rhythmic sound of turning pages fills the quiet office.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me senté al lado de la profesora y empecé a ayudarla a ordenar los papeles. Solo el sonido rítmico de las páginas al pasar llena la oficina silenciosa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生の隣の席に座って書類整理を手伝い始めた。静かな職員室に紙をめくる音だけが規則的に響いている。*"
            }
        }
    },
    "day2_after_teacher_work_2": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_branch",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"고마워, {name}. 덕분에 정말 큰 도움이 됐어. 혼자 했으면 많이 고생할 뻔했어.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Thank you, {name}. You've been a huge help. I would've been here much longer if I were alone.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Gracias, {name}. Me ayudaste muchísimo. Si hubiera estado sola, habría tardado mucho más.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"ありがとう、{name}。本当に助かったわ。一人だったらすごく苦労してたと思う。\""
            }
        }
    },
    "day2_after_teacher_branch": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "affinityChar": "Teacher",
        "affinityBranches": [
            {
                "minAffinity": 70,
                "next": "day2_after_teacher_special"
            }
        ],
        "next": "day2_after_teacher_normal",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 나를 가만히 바라보며 생각에 잠긴 듯하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The teacher looks at me quietly, seemingly lost in thought.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora me mira en silencio, como si estuviera perdida en sus pensamientos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が僕をじっと見つめて、何か考え込んでいるようだ。*"
            }
        }
    },
    "day2_after_teacher_special": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_special_2",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "*선생님이 갑자기 내 쪽으로 몸을 기울인다. 은은한 향수 냄새와 함께 그녀의 따뜻한 숨결이 느껴진다.*"
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "*The teacher suddenly leans in toward me. I can feel her warm breath and the faint scent of her perfume.*"
            },
            "es": {
                "name": "Profesora",
                "text": "*La profesora de repente se inclina hacia mí. Puedo sentir su cálido aliento y el suave aroma de su perfume.*"
            },
            "ja": {
                "name": "担任先生",
                "text": "*先生が急に僕の方に身を寄せてくる。ほのかな香水の匂いと温かい息遣いが感じられる。*"
            }
        }
    },
    "day2_after_teacher_special_2": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_special_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"{name}, 넌 참 특별한 학생인 것 같아. 전학 온 지 이틀밖에 안 됐는데... 왜 이렇게 오래 알고 지낸 사이처럼 편안할까?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"{name}, I think you're a truly special student. It's only been two days... why do I feel so comfortable, as if we've known each other for years?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"{name}, creo que eres un estudiante realmente especial. Solo han pasado dos días... ¿por qué me siento tan cómoda, como si nos conociéramos de años?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"{name}、あなたって本当に特別な生徒ね。転校してまだ二日なのに…どうしてこんなに長い付き合いみたいに居心地がいいのかしら？\""
            }
        }
    },
    "day2_after_teacher_special_3": {
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "setFlag": "day2_teacher_date",
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"오늘 도와준 보답으로... 선생님이 집까지 데려다줄게. 차에서 좀 더 이야기할까?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"As a reward for helping today... I'll drive you home. Shall we talk more in the car?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Como recompensa por la ayuda de hoy... te llevo a casa en auto. ¿Seguimos platicando en el camino?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"今日手伝ってくれたお礼に…先生が家まで送ってあげる。車の中でもう少しお話ししましょうか？\""
            }
        }
    },
    "day2_after_teacher_normal": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_end",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"자, 이제 늦었으니까 얼른 들어가 봐. 선생님도 이제 정리하고 퇴근해야겠다. 오늘 정말 고생 많았어!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Well, it's late, so you should head home. I'll finish up and leave, too. You did a great job today!\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Bueno, ya es tarde, así que ve a casa. Yo también termino y me voy. ¡Hiciste un gran trabajo hoy!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"さ、もう遅いから早く帰りなさい。先生も片付けて帰るわ。今日は本当にお疲れ様！\""
            }
        }
    },
    "day2_after_teacher_coffee": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_normal",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"어머, 커피? 후훗, 마음만으로도 고마워. 하지만 학생이 타주는 커피를 마실 순 없지. 대신 선생님이 맛있는 사탕 하나 줄게!\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Oh, coffee? Hehe, thank you for the thought. But I can't have a student prepare it for me. I'll give you a delicious candy instead!\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"¿Oh, café? Jeje, gracias por el gesto. Pero no puedo dejar que un estudiante me lo prepare. ¡En cambio, te doy un dulce rico!\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"あら、コーヒー？ふふっ、気持ちだけでありがたいわ。でも生徒に淹れてもらうわけにはいかないの。代わりに先生から美味しい飴をあげるね！\""
            }
        }
    },
    "day2_after_teacher_worry": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_smile.png",
        "sunset": true,
        "next": "day2_after_teacher_normal",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"걱정해줘서 고마워. 선생님은 괜찮아! 우리 {name}이 이렇게 착해서 선생님은 정말 든든한걸?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"Thank you for worrying about me. I'm okay! I feel so reassured because {name} is such a kind student.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"Gracias por preocuparte por mí. ¡Estoy bien! Me siento muy tranquila porque {name} es un estudiante muy amable.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"心配してくれてありがとう。先生は大丈夫よ！{name}がこんなに優しい子で、先生本当に心強いわ。\""
            }
        }
    }
});
