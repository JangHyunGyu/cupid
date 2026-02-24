/**
 * ============================================================================
 * CUPID - day5_3_afterschool (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_3_afterschool.js + en_day5_3_afterschool.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_afternoon_start": {
        "background": "assets/images/background/top_school.png",
        "bgm": "sunset1.mp3",
        "sunset": true,
        "next": "day5_afternoon_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느새 오후가 되었다. 옥상에서 보는 하늘이 주황빛으로 물들기 시작한다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Before I knew it, afternoon arrived. The sky seen from the rooftop is beginning to turn orange.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sin darme cuenta, llegó la tarde. El cielo visto desde la azotea empieza a teñirse de naranja.*"
            },
            "ja": {
                "name": "僕",
                "text": "*いつの間にか午後になっていた。屋上から見る空がオレンジ色に染まり始める。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sans m'en rendre compte, l'après-midi est arrivé. Le ciel vu depuis le toit commence à virer à l'orange.*"
            }
        }
    },
    "day5_afternoon_branch": {
        "background": "assets/images/background/top_school.png",
        "branches": [
            {
                "next": "day5_true_love_start",
                "condition": "day4_confession_accepted",
                "excludeCondition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_good_start",
                "condition": "day4_confession_accepted"
            },
            {
                "next": "day5_mayhem_start",
                "condition": "day3_has_multiple_dates"
            },
            {
                "next": "day5_friend_start",
                "condition": "day4_waited"
            },
            {
                "next": "day5_alone_start"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_true_love_start": {
        "sunset": true,
        "setFlag": "ending_true_love",
        "next": "day5_true_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양 아래, 연인과 나란히 서 있다. 이 순간이 영원히 멈췄으면 좋겠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing side by side under the sunset. I wish this moment could last forever.*"
            },
            "es": {
                "name": "Yo",
                "text": "*De pie, uno al lado del otro, bajo el atardecer. Desearía que este momento durara para siempre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夕焼けの下、恋人と並んで立っている。この瞬間が永遠に止まればいいのに。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Côte à côte sous le coucher de soleil. J'aimerais que cet instant dure éternellement.*"
            }
        }
    },
    "day5_true_talk_1": {
        "sunset": true,
        "next": "day5_true_talk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"있잖아… 전학 오기 전에는 새 학교가 두려웠어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"You know... Before I transferred here, I was scared of the new school.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Sabes... Antes de transferirme aquí, me daba miedo la nueva escuela.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"あのさ…転校する前は、新しい学校が怖かったんだ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Tu sais... Avant mon transfert ici, j'avais peur de la nouvelle école.\""
            }
        }
    },
    "day5_true_talk_2": {
        "sunset": true,
        "next": "day5_true_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"근데 지금은… 전학 온 게 내 인생에서 가장 잘한 일인 것 같아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"But now... I think transferring here was the best decision of my life.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Pero ahora... creo que transferirme aquí fue la mejor decisión de mi vida.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"でも今は…転校してきたのが、人生で一番正しい選択だったと思う。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Mais maintenant... je pense que venir ici a été la meilleure décision de ma vie.\""
            }
        }
    },
    "day5_true_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_true_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_true_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_true_dain",
                "character": "Dain"
            },
            {
                "next": "day5_true_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_true_teacher",
                "character": "Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_true_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"나도… 네가 전학 와줘서 정말 다행이야. 앞으로도 쭉… 같이 있자.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Me too... I'm so glad you transferred here. Let's stay together... always.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Yo también... me alegra mucho que te hayas transferido aquí. Quedémonos juntos... siempre.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"私も…転校してきてくれて、本当によかった。これからもずっと…一緒にいよう。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Moi aussi... je suis tellement contente que tu aies été transféré ici. Restons ensemble... pour toujours.\""
            }
        }
    },
    "day5_true_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…나는 혼자인 게 편하다고 생각했어. 근데 네가 와서… 달라졌어. 고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I thought being alone was easier. But since you came... everything changed. Thank you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Pensaba que estar sola era más fácil. Pero desde que llegaste... todo cambió. Gracias.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…一人の方が楽だと思ってた。でも君が来て…変わった。ありがとう。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Je pensais qu'être seule était plus simple. Mais depuis que tu es arrivé... tout a changé. Merci.\""
            }
        }
    },
    "day5_true_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"네가 와서 매일매일이 더 즐거워졌어!! 앞으로도… 계속 응원해줄 거지?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Every day became more fun since you came!! You'll keep cheering me on... right?!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Cada día se volvió más divertido desde que llegaste!! Vas a seguir apoyándome... ¿¡verdad!?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"君が来てから毎日がもっと楽しくなったよ！！これからも…ずっと応援してくれるよね？！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Chaque jour est devenu plus amusant depuis ton arrivée !! Tu continueras à m'encourager... hein ?!\""
            }
        }
    },
    "day5_true_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"우리 관계는 쉽지 않겠지만… 너라면 괜찮아. 함께라면 어떤 어려움도 넘을 수 있을 거야.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"Our relationship won't be easy... But if it's with you, it's okay. Together, we can overcome anything.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Nuestra relación no será fácil... Pero si es contigo, está bien. Juntos podemos superar cualquier cosa.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"私たちの関係は簡単じゃないだろうけど…あなたとなら大丈夫。一緒なら、どんな困難も乗り越えられるから。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Notre relation ne sera pas facile... Mais si c'est avec toi, ça va. Ensemble, on peut tout surmonter.\""
            }
        }
    },
    "day5_true_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "next": "day5_true_kiss_buildup",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…솔직히 학생한테 이런 감정 가지면 안 되는 건데. 근데 어쩌겠어, 진짜인걸. …앞으로 잘해봐, 우리.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Honestly, a teacher shouldn't feel this way about a student. But what can I do, it's real. ...Let's make this work, us.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Honestamente, una profesora no debería sentir esto por un estudiante. Pero qué puedo hacer, es real. ...Hagamos que funcione, nosotros.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…正直、生徒にこんな気持ち抱いちゃダメなんだけど。でもしょうがないでしょ、本物なんだから。…これからうまくやろうね、私たち。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Honnêtement, une professeure ne devrait pas ressentir ça pour un élève. Mais qu'est-ce que j'y peux, c'est réel. ...Faisons en sorte que ça marche, nous deux.\""
            }
        }
    },
    "day5_true_kiss_buildup": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람이 분다. 석양빛에 물든 그 사람의 얼굴이, 유독 가까이 느껴진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The wind blows. Their face, bathed in the sunset glow, feels unusually close.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El viento sopla. Su rostro, bañado por la luz del atardecer, se siente inusualmente cerca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*風が吹く。夕焼けに染まったあの人の顔が、やけに近く感じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le vent souffle. Son visage, baigné par la lueur du coucher de soleil, semble inhabituellement proche.*"
            }
        }
    },
    "day5_true_kiss_2": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서로의 눈을 바라본다. 말은 필요 없었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We look into each other's eyes. No words are needed.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos miramos a los ojos. No hacen falta palabras.*"
            },
            "ja": {
                "name": "僕",
                "text": "*お互いの目を見つめる。言葉は必要なかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On se regarde dans les yeux. Pas besoin de mots.*"
            }
        }
    },
    "day5_true_kiss_3": {
        "character": null,
        "sunset": true,
        "next": "day5_true_kiss_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*자연스럽게… 얼굴이 가까워진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Naturally... our faces draw closer.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Naturalmente... nuestros rostros se acercan.*"
            },
            "ja": {
                "name": "僕",
                "text": "*自然と…顔が近づいていく。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Naturellement... nos visages se rapprochent.*"
            }
        }
    },
    "day5_true_kiss_4": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…눈을 감았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...I closed my eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Cerré los ojos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…目を閉じた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...J'ai fermé les yeux.*"
            }
        }
    },
    "day5_true_kiss_5": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부드러운 온기가 느껴졌다. 시간이 멈춘 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A soft warmth. Time seemed to stop.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una suave calidez. El tiempo pareció detenerse.*"
            },
            "ja": {
                "name": "僕",
                "text": "*柔らかな温もりを感じた。時間が止まったみたいだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une douce chaleur. Le temps a semblé s'arrêter.*"
            }
        }
    },
    "day5_true_kiss_6": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_true_kiss_after",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*……*"
            },
            "en": {
                "name": "Me",
                "text": "*......*"
            },
            "es": {
                "name": "Yo",
                "text": "*……*"
            },
            "ja": {
                "name": "僕",
                "text": "*……*"
            },
            "fr": {
                "name": "Moi",
                "text": "*......*"
            }
        }
    },
    "day5_true_kiss_after": {
        "character": null,
        "sunset": true,
        "next": "day5_true_evening_branch",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 떴을 때, 석양빛 속에서 그 사람이 웃고 있었다. 세상에서 가장 아름다운 미소였다.*"
            },
            "en": {
                "name": "Me",
                "text": "*When I opened my eyes, they were smiling in the sunset light. The most beautiful smile in the world.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando abrí los ojos, estaba sonriendo bajo la luz del atardecer. La sonrisa más hermosa del mundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けたとき、夕焼けの光の中であの人が笑っていた。世界で一番美しい笑顔だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand j'ai ouvert les yeux, elle souriait dans la lumière du couchant. Le plus beau sourire du monde.*"
            }
        }
    },
    "day5_true_evening_branch": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_bed_seoyeon_1",
                "character": "Seoyeon"
            },
            {
                "next": "day5_bed_yuna_1",
                "character": "Yuna"
            },
            {
                "next": "day5_bed_dain_1",
                "character": "Dain"
            },
            {
                "next": "day5_bed_nurse_1",
                "character": "Nurse"
            },
            {
                "next": "day5_bed_teacher_1",
                "character": "Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_bed_seoyeon_1": {
        "night": true,
        "next": "day5_bed_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 집까지 바래다주려 했는데… 서연이 내 소매를 잡았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. I was going to walk her home... but Seoyeon grabbed my sleeve.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El sol se puso. Iba a acompañarla a casa... pero Seoyeon me agarró la manga.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日が沈んだ。家まで送ろうとしたけど…ソヨンが僕の袖を掴んだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le soleil s'est couché. J'allais la raccompagner... mais Seoyeon a attrapé ma manche.*"
            }
        }
    },
    "day5_bed_seoyeon_2": {
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "next": "day5_bed_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…저기, 우리 집 부모님 오늘 안 계시거든. 잠깐만… 들어올래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Um, my parents aren't home today. Just for a bit... do you want to come in?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Oye, mis padres no están en casa hoy. Solo un momento... ¿quieres pasar?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…あの、今日うちの両親いないの。ちょっとだけ…入ってくる？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Euh, mes parents ne sont pas là aujourd'hui. Juste un moment... tu veux entrer ?\""
            }
        }
    },
    "day5_bed_seoyeon_3": {
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*조용한 주택가. 서연이 현관문을 열었다. 넓은 거실을 지나 2층 서연의 방으로 올라갔다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A quiet residential street. Seoyeon opened the front door. Past the spacious living room, up to her room on the second floor.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una calle residencial tranquila. Seoyeon abrió la puerta principal. Pasamos la amplia sala y subimos a su habitación en el segundo piso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*静かな住宅街。ソヨンが玄関のドアを開けた。広いリビングを通り過ぎ、2階のソヨンの部屋へ上がった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une rue résidentielle calme. Seoyeon a ouvert la porte d'entrée. Au-delà du vaste salon, jusqu'à sa chambre au deuxième étage.*"
            }
        }
    },
    "day5_bed_seoyeon_4": {
        "character": "assets/images/characters/seyoun_shy.png",
        "background": "assets/images/background/seyoun_room.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_4b",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*깔끔하게 정돈된 방. 책장 가득 꽂힌 책들, 책상 위 학생회 서류. 은은한 간접 조명. 서연의 향기가 방 안 가득했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A neatly organized room. A bookshelf full of books, student council papers on the desk. Soft ambient lighting. The room was filled with Seoyeon's scent.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una habitación perfectamente ordenada. Un estante lleno de libros, documentos del consejo estudiantil sobre el escritorio. Iluminación ambiental suave. La habitación estaba llena del aroma de Seoyeon.*"
            },
            "ja": {
                "name": "僕",
                "text": "*きれいに整頓された部屋。本棚いっぱいの本、机の上の生徒会の書類。柔らかな間接照明。ソヨンの香りが部屋中に満ちていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une chambre bien rangée. Une étagère pleine de livres, des documents du conseil des élèves sur le bureau. Un éclairage tamisé. La chambre était imprégnée du parfum de Seoyeon.*"
            }
        }
    },
    "day5_bed_seoyeon_4b": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_5",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…부모님 방은 1층이라 괜찮아. 아, 아니 그게 아니라… 그냥, 이리 와서 앉아.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...My parents' room is on the first floor, so it's fine. Oh, no that's not what I meant... Just, come sit here.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...La habitación de mis padres está en el primer piso, así que está bien. Ah, no, no quise decir eso... Solo, ven y siéntate aquí.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…両親の部屋は1階だから大丈夫。あ、いやそういう意味じゃなくて…とにかく、こっちに来て座って。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...La chambre de mes parents est au rez-de-chaussée, donc c'est bon. Oh, non c'est pas ce que je voulais dire... Viens, assieds-toi ici.\""
            }
        }
    },
    "day5_bed_seoyeon_5": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나란히 침대 가에 앉았다. 서연의 손이 떨리고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat side by side on the edge of the bed. Seoyeon's hands were trembling.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos sentamos uno al lado del otro en el borde de la cama. Las manos de Seoyeon temblaban.*"
            },
            "ja": {
                "name": "僕",
                "text": "*並んでベッドの端に座った。ソヨンの手が震えていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On s'est assis côte à côte au bord du lit. Les mains de Seoyeon tremblaient.*"
            }
        }
    },
    "day5_bed_seoyeon_6": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_seoyeon_7",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…항상 완벽해야 했어. 학생회장이니까. 근데 너한테는… 그냥 나이고 싶어.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I always had to be perfect. Because I'm the student council president. But with you... I just want to be me.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Siempre tenía que ser perfecta. Porque soy la presidenta del consejo estudiantil. Pero contigo... solo quiero ser yo misma.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…いつも完璧でいなきゃいけなかった。生徒会長だから。でもあなたの前では…ただの私でいたいの。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...J'ai toujours dû être parfaite. Parce que je suis la présidente du conseil des élèves. Mais avec toi... je veux juste être moi-même.\""
            }
        }
    },
    "day5_bed_seoyeon_7": {
        "background": "assets/images/background/seyoun_room.png",
        "character": "assets/images/characters/seyoun_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_seoyeon_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연이 내 어깨에 머리를 기댔다. 심장이 터질 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon rested her head on my shoulder. My heart felt like it would burst.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon apoyó su cabeza en mi hombro. Sentí que mi corazón iba a explotar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨンが僕の肩に頭を預けた。心臓が破裂しそうだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon a posé sa tête sur mon épaule. Mon cœur semblait sur le point d'éclater.*"
            }
        }
    },
    "day5_bed_yuna_1": {
        "night": true,
        "next": "day5_bed_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 돌아가려 했는데… 유나가 내 손을 잡았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. I was about to leave... but Yuna held my hand.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El sol se puso. Estaba por irme... pero Yuna me tomó de la mano.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日が沈んだ。帰ろうとしたけど…ユナが僕の手を握った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le soleil s'est couché. J'allais partir... mais Yuna m'a pris la main.*"
            }
        }
    },
    "day5_bed_yuna_2": {
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "next": "day5_bed_yuna_3",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…아직 안 돼. 보여줄 곳이 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Not yet. There's a place I want to show you.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Todavía no. Hay un lugar que quiero mostrarte.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…まだダメ。見せたい場所があるの。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Pas encore. Il y a un endroit que je veux te montrer.\""
            }
        }
    },
    "day5_bed_yuna_3": {
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 이끈 곳은 도서관 별관 꼭대기, 아무도 모르는 다락방이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna led me to the top of the library annex, a secret attic that no one knows about.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna me llevó a lo alto del anexo de la biblioteca, un ático secreto que nadie conoce.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが連れて行ったのは図書館別館の最上階、誰も知らない屋根裏部屋だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna m'a mené au sommet de l'annexe de la bibliothèque, un grenier secret que personne ne connaît.*"
            }
        }
    },
    "day5_bed_yuna_4": {
        "character": "assets/images/characters/yuna_shy.png",
        "background": "assets/images/background/yuna_hideout.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*낡은 소파, 담요 한 장, 작은 창문으로 별이 보였다. 유나만의 비밀 공간.*"
            },
            "en": {
                "name": "Me",
                "text": "*An old sofa, a single blanket, and stars visible through a small window. Yuna's secret space.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un sofá viejo, una manta, y estrellas visibles a través de una ventana pequeña. El espacio secreto de Yuna.*"
            },
            "ja": {
                "name": "僕",
                "text": "*古いソファ、毛布一枚、小さな窓から星が見えた。ユナだけの秘密の空間。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un vieux canapé, une couverture, et des étoiles visibles par une petite fenêtre. L'espace secret de Yuna.*"
            }
        }
    },
    "day5_bed_yuna_5": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_6",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…여기는 나만 알아. 이제 너도 알게 됐지만.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Only I know about this place. Well, now you do too.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Solo yo conozco este lugar. Bueno, ahora tú también.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…ここは私しか知らない。まあ、もう君も知っちゃったけど。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Il n'y a que moi qui connais cet endroit. Enfin, maintenant toi aussi.\""
            }
        }
    },
    "day5_bed_yuna_6": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_yuna_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*유나가 담요를 펼쳤다. 좁은 소파에 나란히 앉으니 어깨가 닿았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Yuna spread out the blanket. Sitting side by side on the narrow sofa, our shoulders touched.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna extendió la manta. Sentados uno al lado del otro en el sofá estrecho, nuestros hombros se tocaron.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ユナが毛布を広げた。狭いソファに並んで座ると、肩が触れ合った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna a étalé la couverture. Assis côte à côte sur l'étroit canapé, nos épaules se touchaient.*"
            }
        }
    },
    "day5_bed_yuna_7": {
        "background": "assets/images/background/yuna_hideout.png",
        "character": "assets/images/characters/yuna_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_yuna_1",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…가지 마. 오늘은… 여기 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Don't go. Tonight... stay here.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...No te vayas. Esta noche... quédate aquí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…行かないで。今日は…ここにいて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Ne pars pas. Ce soir... reste ici.\""
            }
        }
    },
    "day5_bed_dain_1": {
        "night": true,
        "next": "day5_bed_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 다인이 체육관 열쇠를 흔들며 웃었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. Dain waved a key around with a grin.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El sol se puso. Dain agitó una llave con una sonrisa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日が沈んだ。ダインが体育館の鍵を振りながら笑った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le soleil s'est couché. Dain a agité une clé avec un grand sourire.*"
            }
        }
    },
    "day5_bed_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "next": "day5_bed_dain_3",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...여기, 나만의 비밀 장소야. 같이 별 볼래?\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey, I've got the key to the gym storage! Let's look at stars and talk!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Oye, tengo la llave del almacén del gimnasio! ¡Vamos a ver las estrellas y hablar!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ねえ、体育館の倉庫の鍵持ってるの！一緒に星を見ながら話そうよ！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé, j'ai la clé du local du gymnase ! Allons regarder les étoiles et discuter !\""
            }
        }
    },
    "day5_bed_dain_3": {
        "character": "assets/images/characters/dain_laugh.png",
        "background": "assets/images/background/gym.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아무도 없는 밤의 체육관. 다인이 매트를 깔고 천장의 채광창을 열었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The gym at night, empty. Dain laid out mats and opened the skylight in the ceiling.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El gimnasio de noche, vacío. Dain extendió las colchonetas y abrió la claraboya del techo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰もいない夜の体育館。ダインがマットを敷いて天井の天窓を開けた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le gymnase la nuit, vide. Dain a disposé des tapis et ouvert le velux au plafond.*"
            }
        }
    },
    "day5_bed_dain_4": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_laugh.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*매트 위에 나란히 누워 별을 올려다봤다. 다인의 숨소리가 가까이 들렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We lay side by side on the mats, looking up at the stars. I could hear Dain breathing close by.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos acostamos uno al lado del otro sobre las colchonetas, mirando las estrellas. Podía escuchar la respiración de Dain muy cerca.*"
            },
            "ja": {
                "name": "僕",
                "text": "*マットの上に並んで横になり、星を見上げた。ダインの息遣いがすぐ近くに聞こえた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On est allongés côte à côte sur les tapis, à regarder les étoiles. J'entendais Dain respirer tout près.*"
            }
        }
    },
    "day5_bed_dain_5": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_6",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…야, 나 지금 심장이 엄청 뛰어. 손 여기 대봐.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Hey, my heart is beating so fast right now. Put your hand here.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Oye, mi corazón está latiendo muy rápido ahora mismo. Pon tu mano aquí.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…ねえ、今すっごく心臓バクバクしてるの。ここに手を当ててみて。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...Hé, mon cœur bat tellement vite là. Pose ta main ici.\""
            }
        }
    },
    "day5_bed_dain_6": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_dain_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다인의 손이 내 손을 자기 가슴 위에 올려놓았다. 정말로… 빠르게 뛰고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Dain placed my hand over her chest. It really was... beating fast.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain puso mi mano sobre su pecho. De verdad... estaba latiendo rápido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ダインの手が僕の手を自分の胸の上に置いた。本当に…速く鳴っていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain a posé ma main sur sa poitrine. C'est vrai que... ça battait vite.*"
            }
        }
    },
    "day5_bed_dain_7": {
        "background": "assets/images/background/gym.png",
        "character": "assets/images/characters/dain_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_dain_1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…바보, 왜 그렇게 봐. 부끄럽잖아…\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Dummy, why are you looking at me like that? It's embarrassing...\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Tonto, ¿por qué me miras así? Es vergonzoso...\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…バカ、なんでそんな風に見るの。恥ずかしいじゃん…\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...Idiot, pourquoi tu me regardes comme ça ? C'est gênant...\""
            }
        }
    },
    "day5_bed_nurse_1": {
        "night": true,
        "next": "day5_bed_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 보건선생님이 의미심장하게 웃었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. The school nurse smiled meaningfully.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El sol se puso. La enfermera sonrió con significado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日が沈んだ。保健の先生が意味深に笑った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le soleil s'est couché. L'infirmière scolaire a souri d'un air entendu.*"
            }
        }
    },
    "day5_bed_nurse_2": {
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "next": "day5_bed_nurse_3",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…학교에 아직 아무도 없을 텐데. 잠깐 보건실에 들르지 않을래?\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...There should be no one at school yet. Want to stop by the infirmary?\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...No debería haber nadie en la escuela todavía. ¿Quieres pasar por la enfermería?\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…学校にはまだ誰もいないはずよ。ちょっと保健室に寄っていかない？\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"...Il ne devrait y avoir personne à l'école. Tu veux passer à l'infirmerie ?\""
            }
        }
    },
    "day5_bed_nurse_3": {
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*철컥. 보건실 문이 잠기는 소리가 들렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Click. I heard the infirmary door lock.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Clic. Escuché el cerrojo de la puerta de la enfermería.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カチャ。保健室のドアが閉まる音が聞こえた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Clic. J'ai entendu le verrou de la porte de l'infirmerie.*"
            }
        }
    },
    "day5_bed_nurse_4": {
        "character": "assets/images/characters/nurse_shy.png",
        "background": "assets/images/background/nurse_room.jpg",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*커튼이 쳐진 침대 칸. 소독약 대신, 은은한 향수 냄새가 났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The curtained bed area. Instead of disinfectant, a faint perfume scent lingered.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El área de la cama con cortinas. En lugar de desinfectante, un suave aroma a perfume persistía.*"
            },
            "ja": {
                "name": "僕",
                "text": "*カーテンで仕切られたベッドスペース。消毒液の代わりに、ほのかな香水の香りがした。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'espace du lit derrière le rideau. Au lieu du désinfectant, un léger parfum flottait dans l'air.*"
            }
        }
    },
    "day5_bed_nurse_5": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_6",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"여기서는… '선생님'이 아니야. 그냥 한 사람의 여자.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"In here... I'm not 'Teacher.' Just a woman.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Aquí dentro... no soy 'profesora'. Solo una mujer.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"ここでは…『先生』じゃないの。ただの一人の女。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Ici... je ne suis pas « Madame ». Juste une femme.\""
            }
        }
    },
    "day5_bed_nurse_6": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_nurse_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*침대 가에 나란히 앉았다. 선생님의 손이 내 손 위에 올려졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We sat side by side on the edge of the bed. Her hand rested on top of mine.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Nos sentamos uno al lado del otro en el borde de la cama. Su mano descansó sobre la mía.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ベッドの端に並んで座った。先生の手が僕の手の上に置かれた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On s'est assis côte à côte au bord du lit. Sa main s'est posée sur la mienne.*"
            }
        }
    },
    "day5_bed_nurse_7": {
        "background": "assets/images/background/nurse_room.jpg",
        "character": "assets/images/characters/nurse_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_nurse_1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…오늘만은 학생도, 선생님도 아니야. 그냥… 우리.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Just for today, no student, no teacher. Just... us.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Solo por hoy, ni estudiante, ni profesora. Solo... nosotros.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…今日だけは生徒も、先生もなし。ただの…私たち。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"...Juste pour aujourd'hui, pas d'élève, pas de professeure. Juste... nous.\""
            }
        }
    },
    "day5_bed_teacher_1": {
        "night": true,
        "next": "day5_bed_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*해가 졌다. 선생님이 차 키를 꺼내 흔들었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sun has set. The teacher took out her car keys and jingled them.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El sol se puso. La profesora sacó sus llaves del auto y las agitó.*"
            },
            "ja": {
                "name": "僕",
                "text": "*日が沈んだ。先生が車の鍵を取り出して振った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le soleil s'est couché. La professeure a sorti ses clés de voiture et les a fait tinter.*"
            }
        }
    },
    "day5_bed_teacher_2": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "next": "day5_bed_teacher_3",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…태워다줄게. 늦었으니까.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...I'll give you a ride. It's late.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Te llevo. Ya es tarde.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…送ってあげる。遅くなったから。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Je te ramène en voiture. Il est tard.\""
            }
        }
    },
    "day5_bed_teacher_3": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*차가 멈춘 곳은… 내 집이 아니었다. 선생님의 오피스텔 앞이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The car stopped... not at my house. It was in front of the teacher's apartment.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El auto se detuvo... no en mi casa. Estaba frente al departamento de la profesora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*車が止まった場所は…僕の家じゃなかった。先生のマンションの前だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La voiture s'est arrêtée... pas devant chez moi. C'était devant l'appartement de la professeure.*"
            }
        }
    },
    "day5_bed_teacher_4": {
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_5",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…커피 한 잔만. 마시고 보내줄게. 아마.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Just one cup of coffee. I'll send you home after. Probably.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Solo una taza de café. Te mando a casa después. Probablemente.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…コーヒー一杯だけ。飲んだら帰してあげる。たぶん。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Juste un café. Je te ramènerai après. Probablement.\""
            }
        }
    },
    "day5_bed_teacher_5": {
        "character": "assets/images/characters/teacher_shy.png",
        "background": "assets/images/background/teacher_room.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*작지만 깔끔한 오피스텔. 채점 안 된 시험지가 쌓인 책상. 소파에 나란히 앉았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*A small but tidy apartment. Ungraded exam papers piled on the desk. We sat side by side on the sofa.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un departamento pequeño pero ordenado. Exámenes sin calificar apilados en el escritorio. Nos sentamos uno al lado del otro en el sofá.*"
            },
            "ja": {
                "name": "僕",
                "text": "*小さいけど綺麗なマンション。採点されていない試験用紙が積まれた机。ソファに並んで座った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un petit appartement bien rangé. Des copies non corrigées empilées sur le bureau. On s'est assis côte à côte sur le canapé.*"
            }
        }
    },
    "day5_bed_teacher_6": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_bed_teacher_7",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하, 나 진짜 교사 자격 없다. 학생을 집에 데려오다니.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Hah, I really am unfit to be a teacher. Bringing a student home...\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Ja, realmente no merezco ser profesora. Traer a un estudiante a casa...\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…はぁ、私ほんと教師失格だわ。生徒を家に連れ込むなんて。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Hah, je suis vraiment pas faite pour être prof. Ramener un élève chez moi...\""
            }
        }
    },
    "day5_bed_teacher_7": {
        "background": "assets/images/background/teacher_room.png",
        "character": "assets/images/characters/teacher_shy.png",
        "night": true,
        "fade": true,
        "next": "day5_true_morning_teacher_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*선생님이 머리끈을 풀며 힘없이 웃었다. 커피는… 결국 식었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The teacher let down her hair and smiled wearily. The coffee... ended up going cold.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La profesora se soltó el cabello y sonrió con cansancio. El café... terminó enfriándose.*"
            },
            "ja": {
                "name": "僕",
                "text": "*先生が髪ゴムを外して力なく笑った。コーヒーは…結局冷めてしまった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La professeure a détaché ses cheveux et souri d'un air las. Le café... a fini par refroidir.*"
            }
        }
    },
    "day5_true_morning_seoyeon_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서로의 체온이 얽힌 채, 말없이 거리가 사라졌던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*서로의 체온이 얽힌 채, 말없이 거리가 사라졌던 밤이 지났다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Con nuestro calor entrelazado, pasó la noche en la que la distancia desapareció en silencio.*"
            },
            "ja": {
                "name": "僕",
                "text": "*互いの体温が絡み合ったまま、無言で距離が消えていったあの夜が過ぎた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Nos chaleurs mêlées, la nuit où la distance entre nous a silencieusement disparu s'est écoulée.*"
            }
        }
    },
    "day5_true_morning_seoyeon_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_seoyeon_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자, 창틈으로 스며드는 아침 햇살 속에서 나를 가만히 바라보고 있는 서연이 보였다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 뜨자, 창틈으로 스며드는 아침 햇살 속에서 나를 가만히 바라보고 있는 서연이 보였다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir los ojos, vi a Seoyeon mirándome en silencio bajo la luz de la mañana que se filtraba por la ventana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けると、窓の隙間から差し込む朝日の中で、じっと僕を見つめているソヨンが見えた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant les yeux, j'ai vu Seoyeon qui me regardait doucement dans la lumière du matin filtrant par la fenêtre.*"
            }
        }
    },
    "day5_true_morning_seoyeon_3": {
        "background": null,
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day5_true_morning_seoyeon_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…일찍 깼네. 좀 더 자도 되는데.\""
            },
            "en": {
                "name": "서연",
                "text": "\"…일찍 깼네. 좀 더 자도 되는데.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Te despertaste temprano. Puedes dormir un poco más.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…早く起きたね。もうちょっと寝ててもいいのに。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Tu t'es réveillé tôt. Tu peux dormir encore un peu.\""
            }
        }
    },
    "day5_true_morning_seoyeon_4": {
        "background": null,
        "character": "assets/images/characters/seyoun_shy.png",
        "fade": true,
        "next": "day5_true_morning_seoyeon_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈이 마주치자 서연의 뺨이 옅게 달아올랐다. 평소의 완벽한 학생회장이 아닌, 오직 나만의 서연이었다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈이 마주치자 서연의 뺨이 옅게 달아올랐다. 평소의 완벽한 학생회장이 아닌, 오직 나만의 서연이었다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando nuestras miradas se cruzaron, las mejillas de Seoyeon se sonrojaron levemente. No era la presidenta perfecta de siempre, sino solo mi Seoyeon.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目が合うとソヨンの頬がほんのり赤くなった。いつもの完璧な生徒会長ではなく、僕だけのソヨンだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quand nos regards se sont croisés, les joues de Seoyeon se sont légèrement empourprées. Ce n'était pas la parfaite présidente du conseil des élèves, mais ma Seoyeon à moi seul.*"
            }
        }
    },
    "day5_true_morning_seoyeon_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*맞잡은 두 손 사이로 전해지는 온기 속에서, 우리의 평범한 일상이 비로소 기적이 되는 순간을 마주하고 있었다.*"
            },
            "en": {
                "name": "나",
                "text": "*맞잡은 두 손 사이로 전해지는 온기 속에서, 우리의 평범한 일상이 비로소 기적이 되는 순간을 마주하고 있었다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En la calidez transmitida entre nuestras manos entrelazadas, estábamos frente al momento en que nuestra vida cotidiana se convertía en un milagro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*握り合った両手の間に伝わる温もりの中で、僕たちの平凡な日常がようやく奇跡になる瞬間を迎えていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dans la chaleur transmise par nos mains enlacées, nous vivions l'instant où notre quotidien ordinaire devenait enfin un miracle.*"
            }
        }
    },
    "day5_true_morning_yuna_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_yuna_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*좁은 다락방 소파 위, 서로의 숨결만이 고요하게 섞여들던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*좁은 다락방 소파 위, 서로의 숨결만이 고요하게 섞여들던 밤이 지났다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sobre el sofá del pequeño ático, pasó la noche en la que solo nuestras respiraciones se mezclaban en silencio.*"
            },
            "ja": {
                "name": "僕",
                "text": "*狭い屋根裏部屋のソファの上、お互いの吐息だけが静かに混じり合っていたあの夜が過ぎた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sur l'étroit canapé du grenier, la nuit où seuls nos souffles se mêlaient en silence s'est écoulée.*"
            }
        }
    },
    "day5_true_morning_yuna_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_yuna_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨려는데, 내 팔을 단단히 끌어안고 있는 작은 온기가 느껴졌다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 뜨려는데, 내 팔을 단단히 끌어안고 있는 작은 온기가 느껴졌다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cuando intenté abrir los ojos, sentí una pequeña calidez aferrada firmemente a mi brazo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けようとしたら、僕の腕をしっかり抱きしめている小さな温もりを感じた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'allais ouvrir les yeux quand j'ai senti une petite chaleur serrer fermement mon bras.*"
            }
        }
    },
    "day5_true_morning_yuna_3": {
        "background": null,
        "character": "assets/images/characters/yuna_shy.png",
        "fade": true,
        "next": "day5_true_morning_yuna_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…어딜 가려고. 오늘은 하루 종일 내 옆에 있어.\""
            },
            "en": {
                "name": "유나",
                "text": "\"…어딜 가려고. 오늘은 하루 종일 내 옆에 있어.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿A dónde vas? Hoy te quedas a mi lado todo el día.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…どこ行くの。今日は一日中私のそばにいて。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Où tu comptes aller. Aujourd'hui, tu restes à côté de moi toute la journée.\""
            }
        }
    },
    "day5_true_morning_yuna_4": {
        "background": null,
        "character": "assets/images/characters/yuna_shy.png",
        "fade": true,
        "next": "day5_true_morning_yuna_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*잠결에 웅얼거리며 내 품으로 더 파고드는 유나. 그 서늘했던 아이가 내게만 보여주는 무방비한 모습이었다.*"
            },
            "en": {
                "name": "나",
                "text": "*잠결에 웅얼거리며 내 품으로 더 파고드는 유나. 그 서늘했던 아이가 내게만 보여주는 무방비한 모습이었다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Yuna murmuraba entre sueños mientras se acurrucaba más contra mí. Era la versión indefensa que esa chica fría solo me mostraba a mí.*"
            },
            "ja": {
                "name": "僕",
                "text": "*寝ぼけてつぶやきながら僕の胸にもっと潜り込むユナ。あのクールな子が僕にだけ見せる無防備な姿だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Yuna marmonnait dans son sommeil en se blottissant davantage contre moi. Cette fille si distante qui ne montrait qu'à moi seul sa vulnérabilité.*"
            }
        }
    },
    "day5_true_morning_yuna_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 고요하고 완벽한 세계에서, 나는 그녀의 온전한 안식처가 되기로 다짐했다.*"
            },
            "en": {
                "name": "나",
                "text": "*이 고요하고 완벽한 세계에서, 나는 그녀의 온전한 안식처가 되기로 다짐했다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*En este mundo silencioso y perfecto, decidí ser su refugio completo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この静かで完璧な世界で、僕は彼女の完全な安らぎの場所になると誓った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dans ce monde calme et parfait, j'ai juré de devenir son refuge absolu.*"
            }
        }
    },
    "day5_true_morning_dain_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_dain_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*별빛이 쏟아지던 체육관 매트 위, 서로의 심장 소리가 하나처럼 겹쳐지던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*별빛이 쏟아지던 체육관 매트 위, 서로의 심장 소리가 하나처럼 겹쳐지던 밤이 지났다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sobre las colchonetas del gimnasio bañadas de estrellas, pasó la noche en la que nuestros latidos se fusionaron como uno solo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*星が降り注ぐ体育館のマットの上、お互いの心臓の音が一つのように重なり合っていたあの夜が過ぎた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Sur les tapis du gymnase baignés d'étoiles, la nuit où nos battements de cœur se sont fondus en un seul s'est écoulée.*"
            }
        }
    },
    "day5_true_morning_dain_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_dain_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아침 햇살에 눈을 뜨자, 내 배 위로 턱 하니 다리를 걸치고 자는 다인이가 보였다.*"
            },
            "en": {
                "name": "나",
                "text": "*아침 햇살에 눈을 뜨자, 내 배 위로 턱 하니 다리를 걸치고 자는 다인이가 보였다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir los ojos con la luz de la mañana, vi a Dain durmiendo con su pierna despreocupadamente sobre mi estómago.*"
            },
            "ja": {
                "name": "僕",
                "text": "*朝日で目を開けると、僕のお腹の上にひょいと足を乗せて寝ているダインが見えた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant les yeux dans la lumière du matin, j'ai vu Dain endormie, sa jambe posée négligemment sur mon ventre.*"
            }
        }
    },
    "day5_true_morning_dain_3": {
        "background": null,
        "character": "assets/images/characters/dain_laugh.png",
        "fade": true,
        "next": "day5_true_morning_dain_4",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"...으음, 좋은 아침. 눈 뜨자마자 네가 보이니까... 기분 되게 이상하다.\""
            },
            "en": {
                "name": "다인",
                "text": "\"...으음, 좋은 아침. 눈 뜨자마자 네가 보이니까... 기분 되게 이상하다.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...Mmm, buenos días. Verte apenas abro los ojos... se siente muy raro.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"...んー、おはよ。目を開けたらすぐ君がいるって…すっごく不思議な気分。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...Hmm, bonjour. Te voir dès que j'ouvre les yeux... ça fait tout bizarre.\""
            }
        }
    },
    "day5_true_morning_dain_4": {
        "background": null,
        "character": "assets/images/characters/dain_laugh.png",
        "fade": true,
        "next": "day5_true_morning_dain_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 비비며 해맑게 웃는 다인이. 어젯밤의 부끄러움은 온데간데없이, 평소의 밝은 에너지 그대로였다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 비비며 해맑게 웃는 다인이. 어젯밤의 부끄러움은 온데간데없이, 평소의 밝은 에너지 그대로였다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dain frotándose los ojos y sonriendo radiante. La vergüenza de anoche había desaparecido por completo, era su energía brillante de siempre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目をこすりながら無邪気に笑うダイン。昨夜の恥ずかしさはどこへやら、いつもの明るいエネルギーそのままだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Dain se frottait les yeux avec un sourire radieux. La timidité d'hier soir avait disparu, retrouvant son énergie lumineuse habituelle.*"
            }
        }
    },
    "day5_true_morning_dain_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 눈부신 미소를 매일 아침 볼 수 있다면, 내 남은 생은 분명 지루할 틈이 없을 것이다.*"
            },
            "en": {
                "name": "나",
                "text": "*이 눈부신 미소를 매일 아침 볼 수 있다면, 내 남은 생은 분명 지루할 틈이 없을 것이다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Si pudiera ver esta sonrisa deslumbrante cada mañana, el resto de mi vida seguramente nunca sería aburrido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この眩しい笑顔を毎朝見られるなら、僕の残りの人生は退屈する暇なんてないだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Si je pouvais voir ce sourire éblouissant chaque matin, le reste de ma vie ne connaîtrait certainement aucun ennui.*"
            }
        }
    },
    "day5_true_morning_nurse_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_nurse_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*은은한 향수 냄새와 함께, 어른의 여유로움에 완전히 이끌렸던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*은은한 향수 냄새와 함께, 어른의 여유로움에 완전히 이끌렸던 밤이 지났다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Con un suave aroma a perfume, pasó la noche en la que fui completamente cautivado por la serenidad de una mujer adulta.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ほのかな香水の匂いとともに、大人の余裕に完全に引き込まれたあの夜が過ぎた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Avec un délicat parfum, la nuit où j'ai été totalement envoûté par sa grâce d'adulte s'est écoulée.*"
            }
        }
    },
    "day5_true_morning_nurse_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_nurse_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*눈을 뜨자, 턱을 괸 채 내 얼굴을 가만히 내려다보고 있는 선생님과 시선이 마주쳤다.*"
            },
            "en": {
                "name": "나",
                "text": "*눈을 뜨자, 턱을 괸 채 내 얼굴을 가만히 내려다보고 있는 선생님과 시선이 마주쳤다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Al abrir los ojos, mi mirada se cruzó con la de la enfermera, que me observaba en silencio con la barbilla apoyada en su mano.*"
            },
            "ja": {
                "name": "僕",
                "text": "*目を開けると、頬杖をつきながらじっと僕の顔を見下ろしている先生と目が合った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*En ouvrant les yeux, j'ai croisé le regard de l'infirmière qui me contemplait, le menton appuyé sur sa main.*"
            }
        }
    },
    "day5_true_morning_nurse_3": {
        "background": null,
        "character": "assets/images/characters/nurse_shy.png",
        "fade": true,
        "next": "day5_true_morning_nurse_4",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"잘 잤어? 우리 학생, 자는 모습도 꽤 귀엽네.\""
            },
            "en": {
                "name": "보건선생님",
                "text": "\"잘 잤어? 우리 학생, 자는 모습도 꽤 귀엽네.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"¿Dormiste bien? Mi querido estudiante, te ves bastante lindo cuando duermes.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"よく眠れた？うちの生徒さん、寝顔もなかなか可愛いわね。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Tu as bien dormi ? Mon élève, tu es plutôt mignon quand tu dors.\""
            }
        }
    },
    "day5_true_morning_nurse_4": {
        "background": null,
        "character": "assets/images/characters/nurse_shy.png",
        "fade": true,
        "next": "day5_true_morning_nurse_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내 뺨을 부드럽게 쓸어내리는 손길. 장난기 어린 미소 뒤에 숨겨진 깊은 애정이 느껴졌다.*"
            },
            "en": {
                "name": "나",
                "text": "*내 뺨을 부드럽게 쓸어내리는 손길. 장난기 어린 미소 뒤에 숨겨진 깊은 애정이 느껴졌다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una mano que acariciaba suavemente mi mejilla. Detrás de su sonrisa juguetona, podía sentir un profundo afecto oculto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*僕の頬を優しくなでる手。いたずらっぽい笑みの奥に隠された深い愛情が伝わってきた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Une main qui caressait doucement ma joue. Derrière son sourire espiègle, je sentais une profonde affection.*"
            }
        }
    },
    "day5_true_morning_nurse_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*더 이상 선생님과 학생이 아닌, 온전한 두 사람으로서 맞이하는 첫 아침이었다.*"
            },
            "en": {
                "name": "나",
                "text": "*더 이상 선생님과 학생이 아닌, 온전한 두 사람으로서 맞이하는 첫 아침이었다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Era la primera mañana que recibíamos como dos personas completas, ya no como profesora y estudiante.*"
            },
            "ja": {
                "name": "僕",
                "text": "*もう先生と生徒ではない、二人の人間として迎える初めての朝だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce n'était plus une professeure et un élève, mais le premier matin vécu comme deux personnes à part entière.*"
            }
        }
    },
    "day5_true_morning_teacher_1": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "next": "day5_true_morning_teacher_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어설프고 서툴렀지만, 그래서 더 진심이 닿았던 밤이 지났다.*"
            },
            "en": {
                "name": "나",
                "text": "*어설프고 서툴렀지만, 그래서 더 진심이 닿았던 밤이 지났다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Fue torpe e inexperto, pero precisamente por eso, fue una noche donde la sinceridad se sintió más profunda.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ぎこちなくて不器用だったけど、だからこそもっと気持ちが伝わったあの夜が過ぎた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Maladroite et hésitante, la nuit où notre sincérité n'en fut que plus profonde s'est écoulée.*"
            }
        }
    },
    "day5_true_morning_teacher_2": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_true_morning_teacher_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*부스럭거리는 소리에 눈을 뜨니, 선생님이 까치발을 들고 몰래 침대에서 빠져나가려 하고 있었다.*"
            },
            "en": {
                "name": "나",
                "text": "*부스럭거리는 소리에 눈을 뜨니, 선생님이 까치발을 들고 몰래 침대에서 빠져나가려 하고 있었다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un ruido suave me despertó, y vi a la profesora de puntillas intentando escabullirse de la cama sin que me diera cuenta.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ガサゴソという音で目を開けると、先生がつま先立ちでこっそりベッドから抜け出そうとしていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Réveillé par un bruissement, j'ai vu la professeure sur la pointe des pieds, essayant de sortir discrètement du lit.*"
            }
        }
    },
    "day5_true_morning_teacher_3": {
        "background": null,
        "character": "assets/images/characters/teacher_shy.png",
        "fade": true,
        "next": "day5_true_morning_teacher_4",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"...깼어? 몰래 커피라도 타놓으려고 했는데... 들켜버렸네.\""
            },
            "en": {
                "name": "담임선생님",
                "text": "\"...깼어? 몰래 커피라도 타놓으려고 했는데... 들켜버렸네.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...¿Te despertaste? Iba a preparar café a escondidas... me descubriste.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…起きた？こっそりコーヒー入れようと思ってたんだけど…バレちゃったね。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Tu es réveillé ? J'essayais de préparer un café en douce... mais tu m'as grillée.\""
            }
        }
    },
    "day5_true_morning_teacher_4": {
        "background": null,
        "character": "assets/images/characters/teacher_shy.png",
        "fade": true,
        "next": "day5_true_morning_teacher_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*얼굴이 새빨개진 채 어쩔 줄 몰라 하는 선생님의 손을 잡아당겨 다시 품에 안았다.*"
            },
            "en": {
                "name": "나",
                "text": "*얼굴이 새빨개진 채 어쩔 줄 몰라 하는 선생님의 손을 잡아당겨 다시 품에 안았다.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tomé la mano de la profesora, que estaba completamente sonrojada y sin saber qué hacer, y la abracé de nuevo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*真っ赤になってうろたえている先生の手を引っ張って、もう一度抱きしめた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai attiré vers moi la main de la professeure, rouge pivoine et ne sachant plus où se mettre, et l'ai reprise dans mes bras.*"
            }
        }
    },
    "day5_true_morning_teacher_5": {
        "background": null,
        "character": null,
        "fade": true,
        "next": "day5_ending_true",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"5분만… 이러고 있자.\" 엄격한 선생님의 가면이 벗겨진, 이 사랑스러운 사람을 평생 지켜주고 싶어졌다.)"
            },
            "en": {
                "name": "나",
                "text": "(\"5분만… 이러고 있자.\" 엄격한 선생님의 가면이 벗겨진, 이 사랑스러운 사람을 평생 지켜주고 싶어졌다.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"Solo 5 minutos más... quedémonos así.\" Quise proteger por siempre a esta persona adorable que dejó caer la máscara de profesora estricta.)"
            },
            "ja": {
                "name": "僕",
                "text": "(\"あと5分だけ…このままでいよう。\" 厳格な先生の仮面が外れた、この愛おしい人を一生守りたくなった。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"Juste cinq minutes... restons comme ça.\" Le masque de la professeure stricte avait disparu, et j'ai voulu protéger cette personne adorable pour toujours.)"
            }
        }
    },
    "day5_good_start": {
        "sunset": true,
        "setFlag": "ending_good",
        "next": "day5_good_talk_1",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양 아래, 연인과 나란히 서 있다. 여러 일이 있었지만… 결국 이 사람 곁에 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Standing side by side under the sunset. There were complications along the way... but in the end, I'm here with this person.*"
            },
            "es": {
                "name": "Yo",
                "text": "*De pie, uno al lado del otro, bajo el atardecer. Hubo complicaciones en el camino... pero al final, estoy aquí con esta persona.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夕焼けの下、恋人と並んで立っている。いろいろあったけど…結局この人のそばにいる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Côte à côte sous le coucher de soleil. Il y a eu des complications en chemin... mais au final, je suis ici avec cette personne.*"
            }
        }
    },
    "day5_good_talk_1": {
        "sunset": true,
        "next": "day5_good_talk_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…솔직히 말할게. 나 처음엔 마음이 흔들렸어. 좋은 사람들이 많아서.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I'll be honest. At first, my heart wavered. There were so many wonderful people around.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...Seré honesto. Al principio, mi corazón dudó. Había tantas personas maravillosas alrededor.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…正直に言うよ。最初は気持ちが揺れたんだ。いい人たちがたくさんいたから。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"...Je vais être honnête. Au début, mon cœur a hésité. Il y avait tellement de personnes merveilleuses autour de moi.\""
            }
        }
    },
    "day5_good_talk_2": {
        "sunset": true,
        "next": "day5_good_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"근데 결국… 내 마음이 향하는 건 너뿐이었어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"But in the end... the only one my heart points to is you.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"Pero al final... la única persona a la que apunta mi corazón eres tú.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"でも結局…僕の心が向かうのは君だけだった。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Mais au final... la seule personne vers qui mon cœur se tourne, c'est toi.\""
            }
        }
    },
    "day5_good_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_good_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_good_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_good_dain",
                "character": "Dain"
            },
            {
                "next": "day5_good_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_good_teacher",
                "character": "Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_good_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…알고 있었어. 네가 다른 애들한테도 잘해주는 거. 근데 괜찮아. 결국 내 곁에 있으니까.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I knew. That you were being nice to other girls too. But it's okay. You're by my side in the end.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Lo sabía. Que eras amable con las otras chicas también. Pero está bien. Al final estás a mi lado.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…知ってたよ。他の子にも優しくしてたこと。でも大丈夫。結局私のそばにいるから。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Je savais. Que tu étais gentil avec d'autres filles aussi. Mais c'est pas grave. Tu es à mes côtés au final.\""
            }
        }
    },
    "day5_good_yuna": {
        "character": "assets/images/characters/yuna_smile.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…흔들렸다는 거 알아. 근데 결국 나한테 온 거잖아. …그것만으로 됐어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...I know you wavered. But you came to me in the end. ...That's enough.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Sé que dudaste. Pero al final viniste a mí. ...Con eso basta.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…揺れてたの、知ってる。でも結局私のところに来たじゃん。…それだけでいい。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Je sais que tu as hésité. Mais tu es venu vers moi au final. ...Ça me suffit.\""
            }
        }
    },
    "day5_good_dain": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"에이~ 나는 처음부터 알았어! 네가 결국 나한테 올 줄!! ...다행이다.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Pfft, I knew from the start! That you'd come to me in the end!! Hehe!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡Ja, lo supe desde el principio! ¡¡Que al final vendrías a mí!! ¡¡Jeje!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"えー、最初から分かってたよ！結局私のところに来るって！！…よかった。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Pfff, je le savais depuis le début ! Que tu viendrais vers moi au final !! Héhé !\""
            }
        }
    },
    "day5_good_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"학생들한테 인기 많은 건 알고 있었어. 후후… 근데 지금 이 순간만큼은 나만 봐.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"I knew you were popular with the students. Hehe... But right now, just look at me.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"Sabía que eras popular entre las estudiantes. Jeje... Pero ahora mismo, solo mírame a mí.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"生徒に人気あるのは知ってたよ。ふふ…でも今この瞬間だけは私だけを見て。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"Je savais que tu avais du succès auprès des élèves. Héhé... Mais là, regarde-moi seulement.\""
            }
        }
    },
    "day5_good_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…바람둥이. 근데 나한테 온 거면 됐어. 앞으로는 나만 봐. 알겠지?\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Player. But since you came to me, that's enough. From now on, eyes on me only. Got it?\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Mujeriego. Pero ya que viniste a mí, es suficiente. De ahora en adelante, solo mírame a mí. ¿Entendido?\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…浮気者。でも私のところに来たならいいわ。これからは私だけ見て。分かった？\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Coureur. Mais puisque tu es venu vers moi, ça suffit. Désormais, tu ne regardes que moi. Compris ?\""
            }
        }
    },
    "day5_good_final": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_good",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*맞잡은 두 손 사이로 전해지는 묵직한 온기가, 그동안의 모든 엇갈림과 망설임을 조용히 덮어주고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*We held hands side by side, watching the sunset. It wasn't perfect... but this is our beginning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tomados de la mano, mirando el atardecer. No fue perfecto... pero este es nuestro comienzo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*手を繋いで並んで夕日を見ていた。完璧じゃなかったけど…これが僕たちの始まりだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*On s'est tenu la main côte à côte, regardant le coucher de soleil. Ce n'était pas parfait... mais c'est notre commencement.*"
            }
        }
    },
    "day5_mayhem_start": {
        "sunset": true,
        "next": "day5_mayhem_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옥상에 올라왔는데… 어라?*"
            },
            "en": {
                "name": "Me",
                "text": "*I came up to the rooftop... Wait, huh?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Subí a la azotea... Espera, ¿eh?*"
            },
            "ja": {
                "name": "僕",
                "text": "*屋上に上がってきたけど…あれ？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis monté sur le toit... Attends, quoi ?*"
            }
        }
    },
    "day5_mayhem_2": {
        "character": null,
        "sunset": true,
        "next": "day5_mayhem_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*왜… 왜 다들 여기 있는 거야?!*"
            },
            "en": {
                "name": "Me",
                "text": "*Why... why is everyone here?!*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Por qué... por qué están todas aquí?!*"
            },
            "ja": {
                "name": "僕",
                "text": "*なんで…なんでみんなここにいるんだ？！*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pourquoi... pourquoi tout le monde est là ?!*"
            }
        }
    },
    "day5_mayhem_3": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"어머, {name}(이)야! 나도 방금 옥상에 오려던 참이었어~\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Oh, {name}! I was just about to come up to the rooftop too!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡Oh, {name}! ¡Yo también estaba a punto de subir a la azotea!\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"あら、{name}！私もちょうど屋上に来ようとしてたの～\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Oh, {name} ! J'allais justement monter sur le toit aussi !\""
            }
        }
    },
    "day5_mayhem_4": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…왜 또 서연이가 여기 있어.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Why is Seoyeon here again.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Por qué Seoyeon está aquí otra vez?\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…なんでまたソヨンがいるの。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Pourquoi Seoyeon est encore là.\""
            }
        }
    },
    "day5_mayhem_5": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_5b",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 나도 왔어!! 엇, 다들 왜 여기 있어?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! I'm here too!! Wait, why is everyone here?!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Oigan!! ¡¡Yo también vine!! Esperen, ¿¡por qué están todas aquí!?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ねえ！！私も来たよ！！あれ、みんななんでここにいるの？！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé !! Moi aussi je suis là !! Attends, pourquoi tout le monde est là ?!\""
            }
        }
    },
    "day5_mayhem_5b": {
        "sunset": true,
        "branches": [
            {
                "next": "day5_mayhem_teacher_watch",
                "condition": "day3_teacher_date_confirmed"
            },
            {
                "next": "day5_mayhem_nurse_watch",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day5_mayhem_6"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_mayhem_teacher_watch": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_mayhem_nurse_check",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*저 멀리서 담임선생님이 이쪽을 바라보고 계신다. 표정이 복잡해 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*In the distance, the homeroom teacher is watching us. Her expression looks complicated.*"
            },
            "es": {
                "name": "Yo",
                "text": "*A lo lejos, la profesora nos está observando. Su expresión parece complicada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*遠くから担任の先生がこちらを見ている。表情が複雑そうだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Au loin, le professeur principal nous observe. Son expression a l'air compliquée.*"
            }
        }
    },
    "day5_mayhem_nurse_check": {
        "sunset": true,
        "branches": [
            {
                "next": "day5_mayhem_nurse_watch",
                "condition": "day3_nurse_date_confirmed"
            },
            {
                "next": "day5_mayhem_6"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_mayhem_nurse_watch": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_mayhem_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*보건선생님도 창문 너머로 이 상황을 지켜보고 있다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The school nurse is also watching the situation through a window.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La enfermera también está observando la situación a través de una ventana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*保健の先生も窓越しにこの状況を見守っている。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'infirmière scolaire observe aussi la situation depuis une fenêtre.*"
            }
        }
    },
    "day5_mayhem_6": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이건… 수라장이 될 것 같은 예감이…*"
            },
            "en": {
                "name": "Me",
                "text": "*I have a feeling... this is going to be absolute chaos...*"
            },
            "es": {
                "name": "Yo",
                "text": "*Tengo el presentimiento... de que esto va a ser un caos total...*"
            },
            "ja": {
                "name": "僕",
                "text": "*これは…修羅場になりそうな予感が…*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai le pressentiment... que ça va être le chaos total...*"
            }
        }
    },
    "day5_mayhem_7": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_8",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"그나저나 {name}(아/야), 이번 주말에 나랑 약속했던 거 기억하지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"By the way {name}, you remember our plans for this weekend, right?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"Por cierto {name}, recuerdas nuestros planes para este fin de semana, ¿verdad?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ところで{name}、今週末の約束覚えてるよね？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Au fait {name}, tu te souviens de nos projets pour ce week-end, hein ?\""
            }
        }
    },
    "day5_mayhem_8": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_9",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…뭐? 나랑도 약속했는데.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...What? You made plans with me too.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...¿Qué? También hiciste planes conmigo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…は？私とも約束したんだけど。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Quoi ? Tu avais aussi fait des projets avec moi.\""
            }
        }
    },
    "day5_mayhem_9": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_10",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"엥?! 야! 나한테도 시간 된다고 했잖아!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Huh?! Hey! You told me you were free too!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¿¡Eh!? ¡¡Oye!! ¡¡A mí también me dijiste que estabas libre!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"え？！ちょっと！私にも暇だって言ったじゃん！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hein ?! Hé ! Tu m'avais dit que t'étais libre aussi !!\""
            }
        }
    },
    "day5_mayhem_10": {
        "character": null,
        "sunset": true,
        "next": "day5_mayhem_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*모두의 시선이 동시에 나를 향한다. …끝났다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Everyone's eyes turn toward me simultaneously. ...I'm done for.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las miradas de todas se dirigen hacia mí al mismo tiempo. ...Estoy perdido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*全員の視線が同時に僕に向く。…終わった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Tous les regards se tournent vers moi en même temps. ...Je suis fichu.*"
            }
        }
    },
    "day5_mayhem_11": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_12",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…{name}. 설명 좀 해줄래?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...{name}. Care to explain?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...{name}. ¿Nos puedes explicar?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…{name}。説明してくれる？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...{name}. Tu veux bien t'expliquer ?\""
            }
        }
    },
    "day5_mayhem_12": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "choices": [
            {
                "next": "day5_mayhem_honest"
            },
            {
                "next": "day5_mayhem_confess"
            },
            {
                "next": "day5_mayhem_run"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뭐라고 해야 하지?!*",
                "choices": [
                    "\"다, 다들 좋아하면 안 되나…?\"",
                    "\"진심으로 말할게.\"",
                    "\"(전력으로 도망친다)\""
                ]
            },
            "en": {
                "name": "Me",
                "text": "*What do I say?!*",
                "choices": [
                    "\"C-can't I like all of you...?\"",
                    "\"Let me speak from the heart.\"",
                    "\"(Run for it!!)\""
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*¿¡Qué digo!?*",
                "choices": [
                    "\"¿N-no puedo quererlas a todas...?\"",
                    "\"Déjenme hablar con el corazón.\"",
                    "\"(¡¡Huir!!)\""
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*なんて言えば?！*",
                "choices": [
                    "\"み、みんなのこと好きじゃダメ…？\"",
                    "\"本心を話させて。\"",
                    "\"（全力で逃げる！！）\""
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*Qu'est-ce que je dis ?!*",
                "choices": [
                    "\"J-je peux pas toutes vous aimer... ?\"",
                    "\"Laissez-moi parler avec le cœur.\"",
                    "\"(La fuite !!)\""
                ]
            }
        }
    },
    "day5_mayhem_honest": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_honest_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"사, 사실… 다들 너무 좋은 사람들이라 고르지 못하겠어서…\""
            },
            "en": {
                "name": "Me",
                "text": "\"A-actually... you're all such wonderful people that I couldn't choose...\""
            },
            "es": {
                "name": "Yo",
                "text": "\"E-en realidad... todas son personas tan maravillosas que no pude elegir...\""
            },
            "ja": {
                "name": "僕",
                "text": "\"じ、実は…みんなすごくいい人たちで選べなくて…\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"E-en fait... vous êtes toutes des personnes si merveilleuses que je n'arrivais pas à choisir...\""
            }
        }
    },
    "day5_mayhem_honest_2": {
        "sunset": true,
        "next": "day5_mayhem_honest_3",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "*침묵이 흐른다.*"
            },
            "en": {
                "name": "System",
                "text": "*Silence fills the air.*"
            },
            "es": {
                "name": "Sistema",
                "text": "*El silencio llena el ambiente.*"
            },
            "ja": {
                "name": "システム",
                "text": "*沈黙が流れる。*"
            },
            "fr": {
                "name": "Système",
                "text": "*Le silence envahit l'air.*"
            }
        }
    },
    "day5_mayhem_honest_3": {
        "character": "assets/images/characters/seyoun_sad.png",
        "sunset": true,
        "next": "day5_mayhem_honest_4",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"……하.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"......Hah.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"......Ja.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"……はぁ。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"......Hah.\""
            }
        }
    },
    "day5_mayhem_honest_4": {
        "character": "assets/images/characters/yuna_sad.png",
        "sunset": true,
        "next": "day5_mayhem_honest_5",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…최악이야.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The worst.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Lo peor.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…最低。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Le pire.\""
            }
        }
    },
    "day5_mayhem_honest_5": {
        "character": "assets/images/characters/dain_sad.png",
        "sunset": true,
        "next": "day5_mayhem_final",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"너 진짜… 진짜 나빠!!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"You really... you're really the worst!!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"De verdad... ¡¡¡eres realmente lo peor!!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ほんとに…ほんっとに最低！！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Tu es vraiment... tu es vraiment le pire !!!\""
            }
        }
    },
    "day5_mayhem_run": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*뒤도 돌아보지 않고 옥상 문을 향해 달린다!!*"
            },
            "en": {
                "name": "Me",
                "text": "*I sprint toward the rooftop door without looking back!!*"
            },
            "es": {
                "name": "Yo",
                "text": "*¡¡Corro hacia la puerta de la azotea sin mirar atrás!!*"
            },
            "ja": {
                "name": "僕",
                "text": "*振り返らずに屋上のドアに向かって走る！！*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je fonce vers la porte du toit sans me retourner !!*"
            }
        }
    },
    "day5_mayhem_run_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_3",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"잠깐, {name}!! 어딜 가는 거야?!\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"Wait, {name}!! Where are you going?!\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"¡¡Espera, {name}!! ¿¡A dónde vas!?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"ちょっと、{name}！！どこ行くの？！\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"Attends, {name} !! Où tu vas ?!\""
            }
        }
    },
    "day5_mayhem_run_3": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_run_4",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…도망치면 더 나쁜 거 알지?\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Running makes it even worse, you know.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Huir lo hace peor, lo sabes.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…逃げたらもっとひどいことになるよ。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Fuir, ça empire les choses, tu sais.\""
            }
        }
    },
    "day5_mayhem_run_4": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_run_5",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야 기다려!! 나 달리기 1등이야!! 도망 못 가!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey wait!! I won first place in the dash!! You can't escape!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Oye espera!! ¡¡Gané el primer lugar en la carrera!! ¡¡No puedes escapar!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ちょっと待って！！私短距離走1位だよ！！逃げられないからね！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé attends !! J'ai gagné le sprint !! Tu peux pas m'échapper !!\""
            }
        }
    },
    "day5_mayhem_run_5": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*계단을 뛰어내려가는 나를 모두가 쫓아온다. 왜 다들 이렇게 빠른 거야?!*"
            },
            "en": {
                "name": "Me",
                "text": "*Everyone chases me down the stairs. Why is everyone so fast?!*"
            },
            "es": {
                "name": "Yo",
                "text": "*Todas me persiguen escaleras abajo. ¿¡Por qué son todas tan rápidas!?*"
            },
            "ja": {
                "name": "僕",
                "text": "*階段を駆け下りる僕をみんなが追いかけてくる。なんでみんなこんなに速いんだ？！*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Tout le monde me poursuit dans les escaliers. Pourquoi elles sont toutes si rapides ?!*"
            }
        }
    },
    "day5_mayhem_confess": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…장난이 아니야. 나는 진심으로, 여기 있는 모두를 좋아해.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I'm not joking. I sincerely like every single one of you here.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...No estoy bromeando. Sinceramente me gusta cada una de ustedes.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…冗談じゃないよ。僕は本気で、ここにいるみんなのことが好きなんだ。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"...Je ne plaisante pas. J'aime sincèrement chacune d'entre vous ici.\""
            }
        }
    },
    "day5_mayhem_confess_2": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"못 고르겠는 게 아니라, 고르고 싶지 않아. 한 사람을 택하면 나머지를 잃잖아.\""
            },
            "en": {
                "name": "Me",
                "text": "\"It's not that I can't choose— I don't want to choose. If I pick one, I lose the others.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"No es que no pueda elegir— no quiero elegir. Si elijo a una, pierdo a las demás.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"選べないんじゃなくて、選びたくないんだ。一人を選んだら残りを失うじゃないか。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"Ce n'est pas que je ne peux pas choisir — je ne veux pas choisir. Si j'en choisis une, je perds les autres.\""
            }
        }
    },
    "day5_mayhem_confess_3": {
        "sunset": true,
        "next": "day5_mayhem_confess_seoyeon",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "*긴 침묵이 흐른다.*"
            },
            "en": {
                "name": "System",
                "text": "*A long silence follows.*"
            },
            "es": {
                "name": "Sistema",
                "text": "*Un largo silencio sigue.*"
            },
            "ja": {
                "name": "システム",
                "text": "*長い沈黙が流れる。*"
            },
            "fr": {
                "name": "Système",
                "text": "*Un long silence suit.*"
            }
        }
    },
    "day5_mayhem_confess_seoyeon": {
        "character": "assets/images/characters/seyoun_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_yuna",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…하. 너 진짜 대단하다. 보통 이런 말 하면 뺨 맞는 거 알지?\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Hah. You've really got nerve. You know you'd normally get slapped for saying that, right?\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Ja. Realmente tienes agallas. Sabes que normalmente te darían una bofetada por decir eso, ¿verdad?\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…はぁ。あなたほんと度胸あるわね。普通そんなこと言ったらビンタされるって知ってる？\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Hah. Tu as vraiment du culot. Tu sais que normalement tu te prendrais une gifle pour ça, hein ?\""
            }
        }
    },
    "day5_mayhem_confess_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_dain",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…최악이야. 근데… 솔직한 건 인정해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...The worst. But... I'll admit you're honest.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Lo peor. Pero... admito que eres honesto.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…最低。でも…正直なのは認める。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Le pire. Mais... j'admets que tu es honnête.\""
            }
        }
    },
    "day5_mayhem_confess_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_silence",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"야!! 그게 말이 돼?! …근데 왜 싫지가 않지?!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Hey!! That doesn't even make sense!! ...But why don't I hate it?!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Oye!! ¡¡Eso ni siquiera tiene sentido!! ...¿¡Pero por qué no lo odio!?\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"ちょっと！！それおかしいでしょ！！…でもなんで嫌じゃないの？！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Hé !! Ça n'a même pas de sens !! ...Mais pourquoi ça ne me déplaît pas ?!\""
            }
        }
    },
    "day5_mayhem_confess_silence": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_seoyeon_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*모두가 서로 눈치를 본다. 기묘한 침묵이 흐른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*They all exchange glances. A strange silence hangs in the air.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Todas se miran entre sí. Un extraño silencio flota en el aire.*"
            },
            "ja": {
                "name": "僕",
                "text": "*みんながお互いの様子をうかがう。奇妙な沈黙が漂う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Elles échangent toutes des regards. Un étrange silence flotte dans l'air.*"
            }
        }
    },
    "day5_mayhem_confess_seoyeon_2": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_yuna_2",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…조건이 있어. 나한테 제일 잘해야 해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...I have one condition. You have to treat me the best.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Tengo una condición. Tienes que tratarme mejor que a todas.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…条件がある。私を一番大事にして。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...J'ai une condition. Tu dois me traiter le mieux.\""
            }
        }
    },
    "day5_mayhem_confess_yuna_2": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_mayhem_confess_dain_2",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…나한테 제일 잘해.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Treat me the best.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Trátame mejor a mí.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…私を一番大事にして。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Traite-moi le mieux.\""
            }
        }
    },
    "day5_mayhem_confess_dain_2": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_react",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"나한테!! 제일!! 잘해!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"Treat!! Me!! The best!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"¡¡Trátame!! ¡¡A mí!! ¡¡Mejor!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"私を！！一番！！大事にして！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"Traite !! Moi !! Le mieux !!\""
            }
        }
    },
    "day5_mayhem_confess_react": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "next": "day5_mayhem_confess_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…모두가 동시에 나를 노려본다. 눈빛이 무섭다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...They all glare at me at once. Their eyes are terrifying.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Todas me fulminan con la mirada al mismo tiempo. Sus ojos dan miedo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…全員が同時に僕をにらむ。目が怖い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Elles me fusillent toutes du regard en même temps. Leurs yeux sont terrifiants.*"
            }
        }
    },
    "day5_mayhem_confess_final": {
        "character": "assets/images/characters/dain_laugh.png",
        "sunset": true,
        "fade": true,
        "setFlag": "ending_harem",
        "next": "day5_ending_harem",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…이건 어떻게 보면 지옥의 시작일지도 모른다. 하지만 이 순간만큼은— 세상에서 가장 행복한 남자다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...This might be the beginning of hell. But in this moment— I'm the happiest man in the world.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Esto podría ser el comienzo del infierno. Pero en este momento— soy el hombre más feliz del mundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…これは地獄の始まりかもしれない。でもこの瞬間だけは—世界で一番幸せな男だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...C'est peut-être le début de l'enfer. Mais en cet instant — je suis l'homme le plus heureux du monde.*"
            }
        }
    },
    "day5_mayhem_final": {
        "sunset": true,
        "character": null,
        "next": "day5_mayhem_final_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양이 진다. 평화로운 일요일 오후가… 이렇게 끝나는 건가.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sunset fades. Is this how a peaceful Sunday afternoon ends...?*"
            },
            "es": {
                "name": "Yo",
                "text": "*El atardecer se desvanece. ¿Así termina una tranquila tarde de domingo...?*"
            },
            "ja": {
                "name": "僕",
                "text": "*夕焼けが沈む。穏やかな日曜の午後が…こうやって終わるのか。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le coucher de soleil s'estompe. C'est comme ça qu'un paisible dimanche après-midi se termine... ?*"
            }
        }
    },
    "day5_mayhem_final_2": {
        "character": null,
        "sunset": true,
        "fade": true,
        "setFlag": "ending_mayhem",
        "next": "day5_ending_mayhem",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…근데 나쁘지 않은 기분은 뭐지? 이런 소란스러운 일상도… 나름 행복한 것 같다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...But why don't I feel so bad? This chaotic everyday life... is kind of its own happiness.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...Pero ¿por qué no me siento tan mal? Esta vida cotidiana caótica... tiene su propia felicidad.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…でもなんで悪い気分じゃないんだろう？このドタバタな日常も…それはそれで幸せかもしれない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Mais pourquoi est-ce que je ne me sens pas si mal ? Ce quotidien chaotique... c'est en quelque sorte son propre bonheur.*"
            }
        }
    },
    "day5_friend_start": {
        "sunset": true,
        "next": "day5_friend_choice",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*석양이 옥상을 물들인다. 옆에 있는 그 사람의 얼굴을 바라본다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sunset paints the rooftop. I look at the face of the person beside me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El atardecer pinta la azotea. Miro el rostro de la persona a mi lado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*夕焼けが屋上を染める。隣にいるあの人の顔を見つめる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le coucher de soleil peint le toit. Je regarde le visage de la personne à côté de moi.*"
            }
        }
    },
    "day5_friend_choice": {
        "sunset": true,
        "choices": [
            {
                "next": "day5_friend_confess",
                "setFlag": "day5_confessed"
            },
            {
                "next": "day5_friend_stay"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음을 전할 마지막 기회다… 어떻게 할까?*",
                "choices": [
                    "\"할 말이 있어…\" (고백한다)",
                    "\"…좋은 친구여서 다행이야.\" (친구로 남는다)"
                ]
            },
            "en": {
                "name": "Me",
                "text": "*This is my last chance to tell them how I feel... What should I do?*",
                "choices": [
                    "\"I need to tell you something...\" (Confess)",
                    "\"...I'm glad we're good friends.\" (Stay friends)"
                ]
            },
            "es": {
                "name": "Yo",
                "text": "*Esta es mi última oportunidad de decirle lo que siento... ¿Qué debo hacer?*",
                "choices": [
                    "\"Necesito decirte algo...\" (Confesarse)",
                    "\"...Me alegra que seamos buenos amigos.\" (Seguir como amigos)"
                ]
            },
            "ja": {
                "name": "僕",
                "text": "*気持ちを伝える最後のチャンスだ…どうしよう？*",
                "choices": [
                    "\"話したいことがあるんだ…\"（告白する）",
                    "\"…いい友達でよかった。\"（友達のままでいる）"
                ]
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est ma dernière chance de lui dire ce que je ressens... Que dois-je faire ?*",
                "choices": [
                    "\"Il faut que je te dise quelque chose...\" (Se déclarer)",
                    "\"...Je suis content qu'on soit de bons amis.\" (Rester amis)"
                ]
            }
        }
    },
    "day5_friend_confess": {
        "sunset": true,
        "next": "day5_friend_confess_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"사실… 너를 좋아해. 어제부터 계속 말하려고 했는데, 이제야 용기가 났어.\""
            },
            "en": {
                "name": "Me",
                "text": "\"The truth is... I like you. I've been trying to say it since yesterday, and I finally found the courage.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"La verdad es que... me gustas. He intentado decírtelo desde ayer, y finalmente encontré el valor.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"実は…君が好きなんだ。昨日からずっと言おうとしてて、やっと勇気が出た。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"En vérité... je t'aime bien. J'essaye de te le dire depuis hier, et j'ai enfin trouvé le courage.\""
            }
        }
    },
    "day5_friend_confess_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_late_accept_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_late_accept_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_late_accept_dain",
                "character": "Dain"
            },
            {
                "next": "day5_late_accept_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_late_accept_teacher",
                "character": "Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_late_accept_seoyeon": {
        "character": "assets/images/characters/seyoun_shy.png",
        "sunset": true,
        "stats": {
            "Seoyeon": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…바보. 기다렸잖아, 계속. 나도… 좋아해.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Dummy. I've been waiting this whole time. I... like you too.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...Tonto. He estado esperando todo este tiempo. Yo... también me gustas.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…バカ。ずっと待ってたんだよ。私も…好き。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Idiot. J'attendais depuis tout ce temps. Moi aussi... je t'aime bien.\""
            }
        }
    },
    "day5_late_accept_yuna": {
        "character": "assets/images/characters/yuna_shy.png",
        "sunset": true,
        "stats": {
            "Yuna": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"……늦었어. 진짜 늦었다고. …근데 괜찮아. 나도 같은 마음이니까.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...You're late. Really late. ...But it's okay. I feel the same way.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Llegaste tarde. Muy tarde. ...Pero está bien. Siento lo mismo.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…遅い。ほんと遅い。…でもいい。私も同じ気持ちだから。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Tu es en retard. Vraiment en retard. ...Mais c'est pas grave. Je ressens la même chose.\""
            }
        }
    },
    "day5_late_accept_dain": {
        "character": "assets/images/characters/dain_shy.png",
        "sunset": true,
        "stats": {
            "Dain": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…!! 드디어!! 나 어제부터 얼마나 기다렸는지 알아?! 나도 좋아해, 바보야!!\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...!! Finally!! Do you know how long I've been waiting since yesterday?! I like you too, dummy!!\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¡¡Por fin!! ¿¡Sabes cuánto he esperado desde ayer!? ¡¡Tú también me gustas, tonto!!\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…！！やっと！！昨日からどれだけ待ったか分かる？！私も好きだよ、バカ！！\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...!! Enfin !! Tu sais depuis combien de temps j'attends depuis hier ?! Moi aussi je t'aime bien, idiot !!\""
            }
        }
    },
    "day5_late_accept_nurse": {
        "character": "assets/images/characters/nurse_shy.png",
        "sunset": true,
        "stats": {
            "Nurse": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…드디어 말해주는 거야? 나도… 같은 마음이야. 오래전부터.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...You're finally saying it? Me too... I've felt the same way. For a long time.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...¿Por fin lo dices? Yo también... siento lo mismo. Desde hace mucho tiempo.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…やっと言ってくれるの？私も…同じ気持ちよ。ずっと前から。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"...Tu le dis enfin ? Moi aussi... je ressens la même chose. Depuis longtemps.\""
            }
        }
    },
    "day5_late_accept_teacher": {
        "character": "assets/images/characters/teacher_shy.png",
        "sunset": true,
        "stats": {
            "Teacher": {
                "affinity": 15
            }
        },
        "setFlag": "ending_good",
        "next": "day5_late_accept_transition1",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…하, 진짜. 어제 말하지 그랬어. 나 어제 밤새 고민했거든. …나도 좋아해, 이 바보야.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Geez, seriously. Why didn't you say so yesterday. I was up all night thinking about it. ...I like you too, dummy.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Ay, en serio. ¿Por qué no lo dijiste ayer? Estuve toda la noche pensando en ello. ...Tú también me gustas, tonto.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…はぁ、もう。なんで昨日言わなかったの。昨日の夜ずっと悩んでたんだから。…私も好きだよ、このバカ。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Pfff, sérieux. Pourquoi tu l'as pas dit hier. J'ai passé la nuit à y penser. ...Moi aussi je t'aime bien, idiot.\""
            }
        }
    },
    "day5_late_accept_transition1": {
        "sunset": true,
        "next": "day5_late_accept_transition2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*한참을 서로 바라보다, 웃음이 터진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*After staring at each other for a while, we burst into laughter.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Después de mirarnos por un rato, nos echamos a reír.*"
            },
            "ja": {
                "name": "僕",
                "text": "*しばらく見つめ合った後、思わず笑い出した。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Après s'être fixés un moment, on a éclaté de rire.*"
            }
        }
    },
    "day5_late_accept_transition2": {
        "sunset": true,
        "next": "day5_good_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이렇게 간단한 건데, 왜 그렇게 오래 걸렸을까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Something so simple... why did it take so long?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Algo tan simple... ¿por qué tardó tanto?*"
            },
            "ja": {
                "name": "僕",
                "text": "*こんな簡単なことなのに、なんであんなに時間がかかったんだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Quelque chose de si simple... pourquoi ça a pris si longtemps ?*"
            }
        }
    },
    "day5_friend_stay": {
        "sunset": true,
        "setFlag": "ending_friend",
        "next": "day5_friend_response",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "\"…이 학교에 와서 너 같은 친구를 만난 게 정말 다행이야.\""
            },
            "en": {
                "name": "Me",
                "text": "\"...I'm really glad I met someone like you at this school.\""
            },
            "es": {
                "name": "Yo",
                "text": "\"...Realmente me alegra haber conocido a alguien como tú en esta escuela.\""
            },
            "ja": {
                "name": "僕",
                "text": "\"…この学校に来て、君みたいな人に出会えて本当によかった。\""
            },
            "fr": {
                "name": "Moi",
                "text": "\"...Je suis vraiment content d'avoir rencontré quelqu'un comme toi dans cette école.\""
            }
        }
    },
    "day5_friend_response": {
        "selectByHighestAffinity": true,
        "branches": [
            {
                "next": "day5_friend_seoyeon",
                "character": "Seoyeon"
            },
            {
                "next": "day5_friend_yuna",
                "character": "Yuna"
            },
            {
                "next": "day5_friend_dain",
                "character": "Dain"
            },
            {
                "next": "day5_friend_nurse",
                "character": "Nurse"
            },
            {
                "next": "day5_friend_teacher",
                "character": "Teacher"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": ""
            },
            "en": {
                "name": "System",
                "text": ""
            },
            "es": {
                "name": "Sistema",
                "text": ""
            },
            "ja": {
                "name": "システム",
                "text": ""
            },
            "fr": {
                "name": "Système",
                "text": ""
            }
        }
    },
    "day5_friend_seoyeon": {
        "character": "assets/images/characters/seyoun_laugh.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "서연",
                "text": "\"…응, 나도! 앞으로도 좋은 친구로 지내자. …친구.\""
            },
            "en": {
                "name": "Seoyeon",
                "text": "\"...Yeah, me too! Let's stay good friends. ...Friends.\""
            },
            "es": {
                "name": "Seoyeon",
                "text": "\"...¡Sí, yo también! Sigamos siendo buenos amigos. ...Amigos.\""
            },
            "ja": {
                "name": "ソヨン",
                "text": "\"…うん、私も！これからもいい友達でいようね。…友達。\""
            },
            "fr": {
                "name": "Seoyeon",
                "text": "\"...Oui, moi aussi ! Restons bons amis. ...Amis.\""
            }
        }
    },
    "day5_friend_yuna": {
        "character": "assets/images/characters/yuna_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "유나",
                "text": "\"…그래. 친구. …고마워.\""
            },
            "en": {
                "name": "Yuna",
                "text": "\"...Right. Friends. ...Thanks.\""
            },
            "es": {
                "name": "Yuna",
                "text": "\"...Sí. Amigos. ...Gracias.\""
            },
            "ja": {
                "name": "ユナ",
                "text": "\"…そう。友達。…ありがとう。\""
            },
            "fr": {
                "name": "Yuna",
                "text": "\"...Oui. Amis. ...Merci.\""
            }
        }
    },
    "day5_friend_dain": {
        "character": "assets/images/characters/dain_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "다인",
                "text": "\"…응! 너는 최고의 친구야! …최고의… 친구.\""
            },
            "en": {
                "name": "Dain",
                "text": "\"...Yeah! You're the best friend ever! ...The best... friend.\""
            },
            "es": {
                "name": "Dain",
                "text": "\"...¡¡Sí!! ¡¡Eres el mejor amigo de todos!! ...El mejor... amigo.\""
            },
            "ja": {
                "name": "ダイン",
                "text": "\"…うん！最高の友達だよ！…最高の…友達。\""
            },
            "fr": {
                "name": "Dain",
                "text": "\"...Oui ! Tu es le meilleur ami du monde ! ...Le meilleur... ami.\""
            }
        }
    },
    "day5_friend_nurse": {
        "character": "assets/images/characters/nurse_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "보건선생님",
                "text": "\"…그래. 좋은 학생이야, 너는. …좋은 학생.\""
            },
            "en": {
                "name": "School Nurse",
                "text": "\"...Right. You're a good student. ...A good student.\""
            },
            "es": {
                "name": "Enfermera",
                "text": "\"...Sí. Eres un buen estudiante. ...Un buen estudiante.\""
            },
            "ja": {
                "name": "保健先生",
                "text": "\"…そうね。いい生徒よ、あなたは。…いい生徒。\""
            },
            "fr": {
                "name": "Infirmière Scolaire",
                "text": "\"...C'est ça. Tu es un bon élève. ...Un bon élève.\""
            }
        }
    },
    "day5_friend_teacher": {
        "character": "assets/images/characters/teacher_normal.png",
        "sunset": true,
        "next": "day5_friend_bitter",
        "_i18n": {
            "ko": {
                "name": "담임선생님",
                "text": "\"…그래, 뭐. 교사와 학생이니까 당연한 건데. …당연한 거지.\""
            },
            "en": {
                "name": "Homeroom Teacher",
                "text": "\"...Yeah, well. Teacher and student, so of course it's natural. ...Of course.\""
            },
            "es": {
                "name": "Profesora",
                "text": "\"...Sí, bueno. Profesora y estudiante, es lo natural. ...Lo natural.\""
            },
            "ja": {
                "name": "担任先生",
                "text": "\"…そうね、まあ。教師と生徒だから当然よね。…当然。\""
            },
            "fr": {
                "name": "Professeur Principal",
                "text": "\"...Oui, enfin. Professeure et élève, c'est normal. ...Bien sûr.\""
            }
        }
    },
    "day5_friend_bitter": {
        "sunset": true,
        "character": null,
        "next": "day5_friend_final",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…왠지 그 사람의 미소가 조금 쓸쓸해 보였다. 내 마음 한쪽도 아렸다.*"
            },
            "en": {
                "name": "Me",
                "text": "*...Somehow, their smile looked a little sad. A corner of my heart ached too.*"
            },
            "es": {
                "name": "Yo",
                "text": "*...De alguna manera, su sonrisa parecía un poco triste. Un rincón de mi corazón también dolía.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…なぜかあの人の笑顔が少し寂しそうに見えた。僕の心の片隅もチクリと痛んだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Bizarrement, son sourire avait l'air un peu triste. Un coin de mon cœur me faisait mal aussi.*"
            }
        }
    },
    "day5_friend_final": {
        "character": null,
        "sunset": true,
        "fade": true,
        "next": "day5_ending_friend",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이게 맞는 선택이었을까? …모르겠다. 하지만 이것도 하나의 결말이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Was this the right choice? ...I don't know. But this too is an ending.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Fue la elección correcta? ...No lo sé. Pero esto también es un final.*"
            },
            "ja": {
                "name": "僕",
                "text": "*これが正しい選択だったのか？…分からない。でもこれも一つの結末だから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Était-ce le bon choix ? ...Je ne sais pas. Mais c'est aussi une fin.*"
            }
        }
    },
    "day5_alone_start": {
        "sunset": true,
        "setFlag": "ending_alone",
        "next": "day5_alone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*옥상에서 혼자 석양을 본다. 이 학교에서 보낸 시간이 스쳐 지나간다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I watch the sunset alone on the rooftop. Memories of my time at this school flash by.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Veo el atardecer solo en la azotea. Los recuerdos de mi tiempo en esta escuela pasan ante mis ojos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*屋上で一人、夕焼けを見る。この学校で過ごした時間が頭をよぎる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je regarde le coucher de soleil seul sur le toit. Les souvenirs de mon passage dans cette école défilent.*"
            }
        }
    },
    "day5_alone_2": {
        "sunset": true,
        "next": "day5_alone_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서연, 유나, 다인, 선생님들… 좋은 사람들이 많았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Seoyeon, Yuna, Dain, the teachers... There were so many wonderful people.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Seoyeon, Yuna, Dain, las profesoras... Había tantas personas maravillosas.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ソヨン、ユナ、ダイン、先生たち…いい人たちがたくさんいた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Seoyeon, Yuna, Dain, les professeurs... Il y avait tellement de personnes merveilleuses.*"
            }
        }
    },
    "day5_alone_3": {
        "sunset": true,
        "next": "day5_alone_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그중 누군가에게 마음을 전했어야 했을까? …아마도.*"
            },
            "en": {
                "name": "Me",
                "text": "*Should I have told one of them how I felt? ...Probably.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Debería haberle dicho a alguna lo que sentía? ...Probablemente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰かに気持ちを伝えるべきだったのかな？…たぶん。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Aurais-je dû dire à l'une d'elles ce que je ressentais ? ...Probablement.*"
            }
        }
    },
    "day5_alone_4": {
        "sunset": true,
        "next": "day5_alone_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 후회하진 않아. 이곳에서 보낸 시간 자체가 소중하니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*But I don't regret it. The time I spent here is precious in itself.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero no me arrepiento. El tiempo que pasé aquí es valioso en sí mismo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも後悔はしていない。ここで過ごした時間そのものが大切だから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais je ne regrette pas. Le temps passé ici est précieux en soi.*"
            }
        }
    },
    "day5_alone_5": {
        "sunset": true,
        "next": "day5_alone_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자지만 외롭지 않다. 전학 오기 전의 나와는 확실히 달라졌어.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm alone, but I'm not lonely. I've definitely changed from who I was before I transferred.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Estoy solo, pero no me siento solo. Definitivamente he cambiado de quien era antes de transferirme.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一人だけど寂しくはない。転校する前の僕とは確実に変わった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis seul, mais pas solitaire. J'ai définitivement changé par rapport à celui que j'étais avant mon transfert.*"
            }
        }
    },
    "day5_alone_6": {
        "sunset": true,
        "fade": true,
        "next": "day5_ending_alone",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일부터 다시 시작이다. 이번엔… 좀 더 용기를 내보자.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow is a fresh start. This time... I'll be a little braver.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mañana es un nuevo comienzo. Esta vez... seré un poco más valiente.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日からまた始まりだ。今度は…もう少し勇気を出してみよう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Demain est un nouveau départ. Cette fois... je serai un peu plus courageux.*"
            }
        }
    }
});
