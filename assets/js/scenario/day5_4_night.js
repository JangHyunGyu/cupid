/**
 * ============================================================================
 * CUPID - day5_4_night (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_day5_4_night.js + en_day5_4_night.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[5]) SCENARIO[5] = {};

Object.assign(SCENARIO[5], {
    "day5_ending_true": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_true_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así, mi historia como estudiante transferido llega a su fin.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして、僕の転校物語は幕を閉じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et ainsi, mon histoire d'élève transféré touche à sa fin.*"
            }
        }
    },
    "day5_ending_true_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_true_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*새로운 학교에서 만난 단 한 사람.*"
            },
            "en": {
                "name": "Me",
                "text": "*That one person I met at my new school.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Esa única persona que conocí en mi nueva escuela.*"
            },
            "ja": {
                "name": "僕",
                "text": "*新しい学校で出会ったたった一人の人。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Cette seule personne que j'ai rencontrée dans ma nouvelle école.*"
            }
        }
    },
    "day5_ending_true_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*처음 만난 그 순간부터, 지금 이 순간까지— 한 번도 흔들린 적 없었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*From the very first moment we met, until this very moment— my heart never once wavered.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Desde el primer momento en que nos conocimos, hasta este instante— mi corazón nunca vaciló ni una vez.*"
            },
            "ja": {
                "name": "僕",
                "text": "*初めて出会ったあの瞬間から、今この瞬間まで—一度も気持ちが揺れたことはなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Du tout premier instant de notre rencontre jusqu'à cet instant précis — mon cœur n'a jamais vacillé.*"
            }
        }
    },
    "day5_ending_true_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기억나. 처음 눈이 마주쳤던 그 순간. 시간이 멈춘 것 같았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I remember it. That moment our eyes first met in the hallway. It felt like time had stopped.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo recuerdo. Ese momento en que nuestras miradas se cruzaron por primera vez en el pasillo. Sentí como si el tiempo se hubiera detenido.*"
            },
            "ja": {
                "name": "僕",
                "text": "*覚えている。廊下で初めて目が合ったあの瞬間。時間が止まったみたいだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je m'en souviens. Ce moment où nos regards se sont croisés pour la première fois dans le couloir. On aurait dit que le temps s'était arrêté.*"
            }
        }
    },
    "day5_ending_true_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그때는 몰랐다. 그 짧은 눈빛 하나가, 내 인생의 방향을 바꿔놓을 줄은.*"
            },
            "en": {
                "name": "Me",
                "text": "*I didn't know back then. That one brief glance would change the course of my entire life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No lo sabía en ese entonces. Que esa breve mirada cambiaría el rumbo de toda mi vida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*あの時は知らなかった。あの短い眼差し一つが、僕の人生の方向を変えてしまうなんて。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je ne le savais pas à l'époque. Qu'un seul bref regard allait changer le cours de toute ma vie.*"
            }
        }
    },
    "day5_ending_true_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*사랑에 빠진 순간은 정확히 알 수 없다. 다만— 어느 날 문득, 그 사람 없는 내일이 상상되지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I can't pinpoint the exact moment I fell in love. I just— one day, I couldn't imagine a tomorrow without them.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No puedo señalar el momento exacto en que me enamoré. Solo— un día, no pude imaginar un mañana sin esa persona.*"
            },
            "ja": {
                "name": "僕",
                "text": "*恋に落ちた瞬間は正確には分からない。ただ—ある日ふと、あの人のいない明日が想像できなくなっていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je ne peux pas identifier le moment exact où je suis tombé amoureux. C'est juste qu'un jour, je ne pouvais plus imaginer un lendemain sans elle.*"
            }
        }
    },
    "day5_ending_true_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*아직도 입술에 남아있는 온기처럼, 이 감정은 영원히 사라지지 않을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Like warmth that still lingers on my lips, this feeling will never fade.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Como la calidez que aún permanece en mis labios, este sentimiento nunca se desvanecerá.*"
            },
            "ja": {
                "name": "僕",
                "text": "*まだ唇に残る温もりのように、この感情は永遠に消えないだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Comme une chaleur qui persiste encore sur mes lèvres, ce sentiment ne s'effacera jamais.*"
            }
        }
    },
    "day5_ending_true_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누구는 이런 감정에도 유통기한이 있다고 말하겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Some would say even feelings like this have an expiration date.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Algunos dirían que incluso sentimientos como este tienen fecha de vencimiento.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こんな感情にも消費期限があると言う人もいるだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Certains diraient que même des sentiments comme ceux-ci ont une date d'expiration.*"
            }
        }
    },
    "day5_ending_true_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 나는 안다. 이건 식는 게 아니라, 스며드는 거라는 걸.*"
            },
            "en": {
                "name": "Me",
                "text": "*But I know the truth. This isn't something that cools— it's something that seeps deeper.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero yo conozco la verdad. Esto no es algo que se enfría— es algo que se filtra más profundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも僕は知っている。これは冷めるものじゃない、染み込んでいくものだって。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais je connais la vérité. Ce n'est pas quelque chose qui se refroidit — c'est quelque chose qui s'enracine plus profondément.*"
            }
        }
    },
    "day5_ending_true_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일도, 모레도, 일 년 뒤에도— 이 사람 곁에서 벗어날 수 없는 내가 보인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow, the day after, even a year from now I can see myself unable to escape from this person.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mañana, pasado mañana, incluso dentro de un año— me veo incapaz de escapar de esta persona.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日も、明後日も、一年後も—この人のそばから離れられない僕が見える。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Demain, après-demain, même dans un an, je me vois incapable d'échapper à cette personne.*"
            }
        }
    },
    "day5_ending_true_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*약속하자. 어떤 계절이 와도, 넌 영원히 내 곁에 묶여 있을 거라고.*"
            },
            "en": {
                "name": "Me",
                "text": "*Let's make a promise. No matter what season comes, you will be tied to my side forever.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Hagamos una promesa. No importa qué estación llegue, estarás atada a mi lado para siempre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*約束しよう。どんな季節が来ても、君は永遠に僕のそばに縛られているんだって。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Faisons une promesse. Quelle que soit la saison, tu seras liée à moi pour toujours.*"
            }
        }
    },
    "day5_ending_true_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_true_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가를 온전히 사랑한다는 건— 세상의 모든 불확실함 속에서, 단 하나의 집착을 품는 일이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*To love someone completely is to hold one single obsession amid all the uncertainty in the world.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Amar a alguien por completo es aferrarse a una sola obsesión en medio de toda la incertidumbre del mundo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰かを完全に愛するということは—世界のすべての不確かさの中で、たった一つの執着を抱くことだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Aimer quelqu'un complètement, c'est entretenir une seule obsession au milieu de toute l'incertitude du monde.*"
            }
        }
    },
    "day5_ending_true_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── TRUE LOVE END ───"
            },
            "en": {
                "name": "System",
                "text": "─── TRUE LOVE END ───"
            },
            "es": {
                "name": "Sistema",
                "text": "─── TRUE LOVE END ───"
            },
            "ja": {
                "name": "システム",
                "text": "─── TRUE LOVE END ───"
            },
            "fr": {
                "name": "Système",
                "text": "─── FIN : AMOUR VÉRITABLE ───"
            }
        }
    },
    "day5_ending_good": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_good_route",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así, mi historia como estudiante transferido llega a su fin.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして、僕の転校物語は幕を閉じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et ainsi, mon histoire d'élève transféré touche à sa fin.*"
            }
        }
    },
    "day5_ending_good_route": {
        "night": true,
        "branches": [
            {
                "next": "day5_ending_good_faithful_2",
                "condition": "day5_confessed"
            },
            {
                "next": "day5_ending_good_2"
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
    "day5_ending_good_faithful_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_good_faithful_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*용기를 내기까지 오래 걸렸다. 하지만 기다린 만큼, 이 마음은 확실하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*It took me a long time to find the courage. But because I waited, this feeling is certain.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Me tomó mucho tiempo reunir el valor. Pero porque esperé, este sentimiento es seguro.*"
            },
            "ja": {
                "name": "僕",
                "text": "*勇気を出すまで長くかかった。でも待った分だけ、この気持ちは確かだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il m'a fallu longtemps pour trouver le courage. Mais parce que j'ai attendu, ce sentiment est certain.*"
            }
        }
    },
    "day5_ending_good_faithful_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_faithful_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*처음부터 마음은 하나였다. 다만 전하는 데 시간이 걸렸을 뿐.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart was set from the beginning. It just took time to put it into words.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón estaba decidido desde el principio. Solo me tomó tiempo ponerlo en palabras.*"
            },
            "ja": {
                "name": "僕",
                "text": "*最初から気持ちは一つだった。ただ伝えるのに時間がかかっただけ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon cœur était décidé depuis le début. Il a juste fallu du temps pour le mettre en mots.*"
            }
        }
    },
    "day5_ending_good_faithful_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_faithful_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*망설인 건 상대의 마음이 두려웠기 때문이다. 거절당할까 봐, 이 관계가 깨질까 봐.*"
            },
            "en": {
                "name": "Me",
                "text": "*I hesitated because I was afraid of the answer. Afraid of rejection, afraid of ruining what we had.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Dudé porque tenía miedo de la respuesta. Miedo al rechazo, miedo de arruinar lo que teníamos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*迷ったのは相手の気持ちが怖かったからだ。拒絶されること、この関係が壊れることが。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai hésité parce que j'avais peur de la réponse. Peur du rejet, peur de gâcher ce qu'on avait.*"
            }
        }
    },
    "day5_ending_good_faithful_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 결국 말했다. 그리고 그 대답은— 기다린 보람이 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But I finally said it. And the answer— was worth the wait.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero al final lo dije. Y la respuesta— valió la pena esperar.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも結局言った。そしてその答えは——待った甲斐があった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais je l'ai finalement dit. Et la réponse — valait l'attente.*"
            }
        }
    },
    "day5_ending_good_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_good_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음이 흔들리기도 했고, 실수도 했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*My heart swayed at times, and I made mistakes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mi corazón vaciló a veces, y cometí errores.*"
            },
            "ja": {
                "name": "僕",
                "text": "*心が揺れたこともあったし、間違いも犯した。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mon cœur a parfois vacillé, et j'ai fait des erreurs.*"
            }
        }
    },
    "day5_ending_good_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 결국— 진짜 마음이 향하는 곳을 찾았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But in the end— I found where my true feelings belonged.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero al final— encontré a dónde pertenecían mis verdaderos sentimientos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも結局——本当の気持ちが向かう場所を見つけた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais au final — j'ai trouvé où appartenaient mes vrais sentiments.*"
            }
        }
    },
    "day5_ending_good_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*돌이켜보면, 다른 사람의 마음에 무심했던 적도 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Looking back, there were times I was careless with someone else's heart.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mirando atrás, hubo veces en que fui descuidado con el corazón de alguien más.*"
            },
            "ja": {
                "name": "僕",
                "text": "*振り返れば、他の人の気持ちに無頓着だったこともあった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Avec le recul, il y a eu des moments où j'ai été négligent avec le cœur de quelqu'un d'autre.*"
            }
        }
    },
    "day5_ending_good_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가에게는 희망을 줬다가 거둬들인 셈이 되었을지도 모른다. 그게 미안하다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I may have given someone hope only to take it away. I'm sorry for that.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Quizás le di esperanza a alguien solo para quitársela. Lo siento por eso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰かに希望を与えておいて取り上げる結果になったかもしれない。それは申し訳なく思う。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai peut-être donné de l'espoir à quelqu'un pour ensuite le reprendre. J'en suis désolé.*"
            }
        }
    },
    "day5_ending_good_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 그 흔들림이 있었기에, 진짜 마음이 뭔지 알게 됐다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But it was because of that wavering that I came to understand what true feelings really are.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero fue gracias a esa vacilación que llegué a entender lo que son los verdaderos sentimientos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でもその揺らぎがあったからこそ、本当の気持ちが何なのか分かったんだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais c'est grâce à ces hésitations que j'ai compris ce que sont les vrais sentiments.*"
            }
        }
    },
    "day5_ending_good_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*완벽하지 않아도 괜찮다. 이게 우리의 시작이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*It doesn't have to be perfect. Because this is our beginning.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No tiene que ser perfecto. Porque este es nuestro comienzo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*完璧じゃなくてもいい。これが僕たちの始まりだから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce n'est pas obligé d'être parfait. Parce que c'est notre commencement.*"
            }
        }
    },
    "day5_ending_good_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*길을 잃었던 게 아니었다. 널 내 것으로 만들기 위한 과정이었을 뿐.*"
            },
            "en": {
                "name": "Me",
                "text": "*I wasn't lost. It was just a process to make you mine.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No estaba perdido. Solo fue un proceso para hacerte mía.*"
            },
            "ja": {
                "name": "僕",
                "text": "*道に迷っていたわけじゃない。君を僕のものにするための過程だっただけだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je n'étais pas perdu. C'était juste le chemin pour te faire mienne.*"
            }
        }
    },
    "day5_ending_good_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*망설임이 없었다면, 지금 이 지독한 소유욕도 없었을 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*If there had been no hesitation, there would be no such terrible possessiveness now.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Si no hubiera habido vacilación, no existiría esta terrible posesividad ahora.*"
            },
            "ja": {
                "name": "僕",
                "text": "*迷いがなかったなら、今のこのひどい独占欲もなかっただろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*S'il n'y avait pas eu d'hésitation, il n'y aurait pas cette terrible possessivité maintenant.*"
            }
        }
    },
    "day5_ending_good_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*불완전한 사랑도 사랑이다. 아니, 어쩌면 망가졌기에 더 완벽한 건지도 모른다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Imperfect love is still love. No perhaps it's more perfect because it's broken.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El amor imperfecto sigue siendo amor. No, quizás es más perfecto precisamente porque está roto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*不完全な愛も愛だ。いや、壊れているからこそより完璧なのかもしれない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un amour imparfait reste de l'amour. Non, il est peut-être plus parfait justement parce qu'il est brisé.*"
            }
        }
    },
    "day5_ending_good_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*앞으로도 실수하겠지. 부딪히겠지. 하지만 이 사람과 함께라면, 차라리 같이 파멸하는 것도 나쁘지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'll make mistakes again. We'll clash. But with this person, falling into ruin together wouldn't be so bad.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Volveré a equivocarme. Chocaremos. Pero con esta persona, caer juntos en la ruina no estaría tan mal.*"
            },
            "ja": {
                "name": "僕",
                "text": "*これからも間違えるだろう。ぶつかるだろう。でもこの人と一緒なら、いっそ共に破滅するのも悪くない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je referai des erreurs. On se disputera. Mais avec cette personne, sombrer ensemble ne serait pas si grave.*"
            }
        }
    },
    "day5_ending_good_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_good_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래서 괜찮다. 이 집착은, 오래 걸린 만큼 절대 풀리지 않을 테니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*So it's okay. This obsession took a long time to form that's exactly why it will never be undone.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Así que está bien. Esta obsesión tardó mucho en formarse, y por eso mismo nunca se deshará.*"
            },
            "ja": {
                "name": "僕",
                "text": "*だから大丈夫だ。この執着は、長くかかった分だけ絶対にほどけないから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Alors ça va. Cette obsession a mis longtemps à se former, c'est exactement pour ça qu'elle ne se défera jamais.*"
            }
        }
    },
    "day5_ending_good_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── GOOD END ───"
            },
            "en": {
                "name": "System",
                "text": "─── GOOD END ───"
            },
            "es": {
                "name": "Sistema",
                "text": "─── GOOD END ───"
            },
            "ja": {
                "name": "システム",
                "text": "─── GOOD END ───"
            },
            "fr": {
                "name": "Système",
                "text": "─── BONNE FIN ───"
            }
        }
    },
    "day5_ending_mayhem": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_mayhem_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는… 끝난 건가?*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story… is it really over?*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así, mi historia como estudiante transferido... ¿realmente terminó?*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして、僕の転校物語は…終わったのか？*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et ainsi, mon histoire d'élève transféré... est-elle vraiment terminée ?*"
            }
        }
    },
    "day5_ending_mayhem_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_mayhem_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하나의 별만 바라보기엔, 밤하늘이 너무 아름다웠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The night sky was too beautiful to gaze at just one star.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El cielo nocturno era demasiado hermoso para mirar una sola estrella.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一つの星だけを見つめるには、夜空はあまりに美しかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le ciel nocturne était trop beau pour ne contempler qu'une seule étoile.*"
            }
        }
    },
    "day5_ending_mayhem_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*…라고 변명해봐야 쫓기는 건 변하지 않겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*…not that excuses like that will stop them from chasing me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*…no es que excusas así vayan a evitar que me persigan.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…と言い訳したところで、追われる現実は変わらないだろうけど。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...non pas que des excuses comme ça les empêcheront de me pourchasser.*"
            }
        }
    },
    "day5_ending_mayhem_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어느 날은 교실 뒤에서 동시에 세 개의 도시락이 나왔다. 그날, 나는 진심으로 큰일이라고 생각했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*One day, three lunch boxes appeared behind the classroom at the same time. That day, I genuinely thought I was done for.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Un día, tres loncheras aparecieron detrás del salón al mismo tiempo. Ese día, genuinamente pensé que estaba acabado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*ある日、教室の裏で同時に三つの弁当が出てきた。あの日、僕は心の底からヤバいと思った。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un jour, trois bentôs sont apparus derrière la salle de classe en même temps. Ce jour-là, j'ai vraiment cru que c'en était fini de moi.*"
            }
        }
    },
    "day5_ending_mayhem_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*(\"어제 쟤랑 같이 있었지?\" 서연이의 가위질 소리, 유나의 서늘한 눈빛, 다인이의 으르렁거리는 목소리... 매일매일이 생존 게임이다.)*"
            },
            "en": {
                "name": "Me",
                "text": "(\"Is she your girlfriend?\" \"No, I am!\" \"What are you talking about, it's me!\" …The hallway became a battlefield that day.)"
            },
            "es": {
                "name": "Yo",
                "text": "(\"¿Ella es tu novia?\" \"¡No, soy yo!\" \"¿De qué hablan? ¡Soy yo!\" …El pasillo se convirtió en un campo de batalla ese día.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「あの子が彼女？」「違う、私だよ！」「何言ってるの、私でしょ！」…あの日、廊下は戦場になった。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(\"C'est ta copine ?\" \"Non, c'est moi !\" \"N'importe quoi, c'est moi !\" ...Le couloir est devenu un champ de bataille ce jour-là.)"
            }
        }
    },
    "day5_ending_mayhem_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*나는 그 틈을 타 몰래 옥상으로 도망쳤다. 인생에서 그렇게 빨리 달려본 건 처음이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I took the chance to sneak away to the rooftop. I'd never run that fast in my entire life.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Aproveché la oportunidad para escapar a la azotea. Nunca había corrido tan rápido en toda mi vida.*"
            },
            "ja": {
                "name": "僕",
                "text": "*僕はその隙にこっそり屋上へ逃げた。人生であんなに速く走ったのは初めてだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'en ai profité pour filer en douce sur le toit. Je n'avais jamais couru aussi vite de toute ma vie.*"
            }
        }
    },
    "day5_ending_mayhem_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누구 하나를 선택하는 순간, 남은 이들의 집착이 나를 갈기갈기 찢어놓을지도 모른다. 도망칠 곳은, 애초에 없었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*…But someone was already waiting for me on the rooftop. There really was no escape.*"
            },
            "es": {
                "name": "Yo",
                "text": "*…Pero alguien ya me estaba esperando en la azotea. Realmente no había escapatoria.*"
            },
            "ja": {
                "name": "僕",
                "text": "*…でも屋上にはもう誰かが待っていた。本当に逃げ場はなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*...Mais quelqu'un m'attendait déjà sur le toit. Il n'y avait vraiment aucune échappatoire.*"
            }
        }
    },
    "day5_ending_mayhem_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어쩌면 욕심일지도 모른다. 모두를 소중히 여기고 싶다는 마음은. 하지만 이미 늦었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Maybe it's selfish. Wanting to cherish everyone. But it's already too late.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Quizás sea egoísta. Querer valorar a todas. Pero ya es demasiado tarde.*"
            },
            "ja": {
                "name": "僕",
                "text": "*欲張りかもしれない。みんなを大切にしたいなんて。でももう遅い。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*C'est peut-être égoïste. Vouloir chérir tout le monde. Mais il est déjà trop tard.*"
            }
        }
    },
    "day5_ending_mayhem_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀들의 집착은 이미 나를 옭아매고 있다. 누구 하나를 선택하는 순간, 나는 파멸할 것이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Their obsession is already suffocating me. The moment I choose one, I will be ruined.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Su obsesión ya me está asfixiando. En el momento en que elija a una, estaré arruinado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*彼女たちの執着はもう僕を締め付けている。誰か一人を選んだ瞬間、僕は破滅するだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Leur obsession m'étouffe déjà. Le moment où j'en choisirai une, je serai perdu.*"
            }
        }
    },
    "day5_ending_mayhem_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이런 지옥 같은 매일이… 솔직히 나쁘지 않다. 내일은 또 어떤 핏빛 수라장이 펼쳐질까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Honestly, this hellish daily life... isn't so bad. I wonder what chaos tomorrow will bring.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Honestamente, esta vida diaria infernal... no está tan mal. Me pregunto qué caos traerá mañana.*"
            },
            "ja": {
                "name": "僕",
                "text": "*正直、この地獄のような毎日は…悪くない。明日はまたどんな修羅場が待っているだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Honnêtement, ce quotidien infernal... c'est pas si mal. Je me demande quel chaos demain m'apportera.*"
            }
        }
    },
    "day5_ending_mayhem_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*다시 태어나도 같은 선택을 할 거냐고? …대답은 안 하겠다. 근데 이 웃음은 진짜다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Would I make the same choices if I were born again? …I won't answer that. But this smile is real.*"
            },
            "es": {
                "name": "Yo",
                "text": "*¿Tomaría las mismas decisiones si volviera a nacer? …No voy a responder eso. Pero esta sonrisa es real.*"
            },
            "ja": {
                "name": "僕",
                "text": "*生まれ変わっても同じ選択をするかって？…答えない。でもこの笑みは本物だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ferais-je les mêmes choix si je renaissais ? ...Je ne répondrai pas. Mais ce sourire est sincère.*"
            }
        }
    },
    "day5_ending_mayhem_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_mayhem_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*결론은 없다. 근데 뭐… 이 소란스러운 매일이 나의 이야기다.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's no conclusion. But well… this chaotic everyday life is my story.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No hay conclusión. Pero bueno… esta caótica vida cotidiana es mi historia.*"
            },
            "ja": {
                "name": "僕",
                "text": "*結論はない。でもまあ…この騒がしい毎日が僕の物語だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Il n'y a pas de conclusion. Mais bon... ce quotidien chaotique, c'est mon histoire.*"
            }
        }
    },
    "day5_ending_mayhem_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── MAYHEM END ───"
            },
            "en": {
                "name": "System",
                "text": "─── MAYHEM END ───"
            },
            "es": {
                "name": "Sistema",
                "text": "─── MAYHEM END ───"
            },
            "ja": {
                "name": "システム",
                "text": "─── MAYHEM END ───"
            },
            "fr": {
                "name": "Système",
                "text": "─── FIN : CHAOS ───"
            }
        }
    },
    "day5_ending_harem": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_harem_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는— 끝나지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story— hasn't ended.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así, mi historia como estudiante transferido— no ha terminado.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして、僕の転校物語は——終わらなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et ainsi, mon histoire d'élève transféré — n'est pas terminée.*"
            }
        }
    },
    "day5_ending_harem_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_harem_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*여러 명의 연인. 말도 안 되는 현실이 눈앞에 펼쳐졌다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Multiple lovers. An impossible reality unfolded before my eyes.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Múltiples amantes. Una realidad imposible se desplegó ante mis ojos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*複数の恋人。あり得ない現実が目の前に広がった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Plusieurs amours. Une réalité impossible s'est déployée devant mes yeux.*"
            }
        }
    },
    "day5_ending_harem_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*매일이 전쟁이다. 누구한테 제일 잘하느냐를 두고 날마다 전투가 벌어진다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Every day is a war. Battles break out daily over who gets treated the best.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Cada día es una guerra. Las batallas estallan diariamente por quién recibe el mejor trato.*"
            },
            "ja": {
                "name": "僕",
                "text": "*毎日が戦争だ。誰が一番大切にされるかを巡って日々バトルが繰り広げられる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Chaque jour est une guerre. Des batailles éclatent quotidiennement pour savoir qui sera le mieux traitée.*"
            }
        }
    },
    "day5_ending_harem_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*월요일엔 같이 등교하는 순서, 화요일엔 도시락, 수요일엔 귀가길… 한 주의 스케줄은 외교 전쟁이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Mondays: who walks me to school. Tuesdays: whose lunch I eat. Wednesdays: who walks me home... My weekly schedule is a diplomatic nightmare.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lunes: quién me acompaña a la escuela. Martes: de quién como el almuerzo. Miércoles: quién me acompaña a casa... Mi horario semanal es una pesadilla diplomática.*"
            },
            "ja": {
                "name": "僕",
                "text": "*月曜は一緒に登校する順番、火曜は弁当、水曜は帰り道…一週間のスケジュールは外交戦争だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Lundi : qui m'accompagne à l'école. Mardi : le déjeuner de qui je mange. Mercredi : qui me raccompagne... Mon planning hebdomadaire est un cauchemar diplomatique.*"
            }
        }
    },
    "day5_ending_harem_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그녀들은 서로를 맹렬히 견제하면서도, 나를 온전히 독점할 수 없다면 차라리 공유하겠다는 기묘하고도 위험한 타협을 이뤘다.*"
            },
            "en": {
                "name": "Me",
                "text": "*One of them watches over me with a quiet smile, another confidently links her arm with mine, and the last one secretly holds my hand from behind.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Una de ellas me vigila con una sonrisa tranquila, otra enlaza su brazo con el mío con confianza, y la última me toma la mano en secreto por detrás.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一人は静かな微笑みで僕を見守り、もう一人は堂々と腕を組み、最後の一人はこっそり後ろから手を握る。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*L'une me surveille avec un sourire discret, l'autre passe son bras sous le mien avec assurance, et la dernière me tient secrètement la main par derrière.*"
            }
        }
    },
    "day5_ending_harem_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*각자의 매력이 너무 다르다. 그래서 비교할 수가 없고, 그래서 포기할 수도 없다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Each of their charms is so different. That's why I can't compare them, and that's why I can't give any of them up.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El encanto de cada una es tan diferente. Por eso no puedo compararlas, y por eso no puedo renunciar a ninguna.*"
            },
            "ja": {
                "name": "僕",
                "text": "*それぞれの魅力があまりに違う。だから比べようがないし、だから誰も諦められない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Chacune de leurs charmes est si différent. C'est pour ça que je ne peux pas les comparer, et c'est pour ça que je ne peux renoncer à aucune d'elles.*"
            }
        }
    },
    "day5_ending_harem_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*하지만 이상하게도… 모두가 웃고 있다. 나를 완전히 소유했다는 듯이.*"
            },
            "en": {
                "name": "Me",
                "text": "*But oddly enough, all of them are smiling. As if they completely own me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero curiosamente, todas están sonriendo. Como si me poseyeran por completo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でも不思議なことに…みんな笑っている。まるで僕を完全に所有しているかのように。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais étrangement, elles sourient toutes. Comme si elles me possédaient entièrement.*"
            }
        }
    },
    "day5_ending_harem_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*욕심이라 불러도 좋다. 이 지독한 집착의 굴레에서 벗어날 수 없다면.*"
            },
            "en": {
                "name": "Me",
                "text": "*Call it greed if you want. If I can't escape from this terrible cycle of obsession.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Llámenlo avaricia si quieren. Si no puedo escapar de este terrible ciclo de obsesión.*"
            },
            "ja": {
                "name": "僕",
                "text": "*欲張りと呼んでもいい。この恐ろしい執着の連鎖から逃れられないのなら。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Appelez ça de l'avidité si vous voulez. Si je ne peux pas échapper à ce terrible cycle d'obsession.*"
            }
        }
    },
    "day5_ending_harem_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*후회는 없다. 아니, 후회할 틈조차 주지 않는다. 그녀들은 나를 철저히 감시하고 있으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*No regrets. No, they don't even give me time to regret. They are watching my every move.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Sin arrepentimientos. No, ni siquiera me dan tiempo para arrepentirme. Están vigilando cada uno de mis movimientos.*"
            },
            "ja": {
                "name": "僕",
                "text": "*後悔はない。いや、後悔する暇すら与えてくれない。彼女たちは僕の一挙一動を監視しているから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pas de regrets. Non, elles ne me laissent même pas le temps de regretter. Elles surveillent chacun de mes mouvements.*"
            }
        }
    },
    "day5_ending_harem_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*물론, 이 균형이 언제 깨질지는 아무도 모른다. 누군가 선을 넘는 순간, 피바람이 불겠지.*"
            },
            "en": {
                "name": "Me",
                "text": "*Of course, no one knows when this balance will break. The moment someone crosses the line, a bloodbath will begin.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Por supuesto, nadie sabe cuándo se romperá este equilibrio. En el momento en que alguien cruce la línea, comenzará un baño de sangre.*"
            },
            "ja": {
                "name": "僕",
                "text": "*もちろん、この均衡がいつ崩れるかは誰にも分からない。誰かが一線を越えた瞬間、血の嵐が吹き荒れるだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Bien sûr, personne ne sait quand cet équilibre se brisera. Le moment où quelqu'un franchira la ligne, un bain de sang commencera.*"
            }
        }
    },
    "day5_ending_harem_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*달콤한 지옥. 이 배덕감과 아찔한 쾌락 속에서, 나는 영원히 빠져나갈 수 없을 것이다. 아니, 빠져나가고 싶지 않다.*"
            },
            "en": {
                "name": "Me",
                "text": "*But the fact that I even enjoy the tension— maybe I'm already past the point of no return.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Pero el hecho de que incluso disfrute la tensión— quizás ya pasé el punto de no retorno.*"
            },
            "ja": {
                "name": "僕",
                "text": "*でもその緊張感すら楽しんでいるという事実——もう戻れないところまで来てしまったのかもしれない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Mais le fait que j'apprécie même la tension — peut-être que j'ai déjà dépassé le point de non-retour.*"
            }
        }
    },
    "day5_ending_harem_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_harem_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*내일도 감시당하겠지. 모레는 더 옥죄어오겠지. 하지만— 이 핏빛 날들을, 나는 받아들인다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Tomorrow I'll be watched again. The day after, they'll tighten their grip even more. But these bloody days, I accept them.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Mañana me vigilarán de nuevo. Pasado mañana, apretarán su agarre aún más. Pero estos días sangrientos, los acepto.*"
            },
            "ja": {
                "name": "僕",
                "text": "*明日もまた監視されるだろう。明後日はもっと締め付けてくるだろう。でも——この血みどろの日々を、僕は受け入れる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Demain je serai encore surveillé. Après-demain, elles resserreront leur emprise encore plus. Mais ces jours sanglants, je les accepte.*"
            }
        }
    },
    "day5_ending_harem_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── HAREM END ───"
            },
            "en": {
                "name": "System",
                "text": "─── HAREM END ───"
            },
            "es": {
                "name": "Sistema",
                "text": "─── HAREM END ───"
            },
            "ja": {
                "name": "システム",
                "text": "─── HAREM END ───"
            },
            "fr": {
                "name": "Système",
                "text": "─── FIN : HAREM ───"
            }
        }
    },
    "day5_ending_friend": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_friend_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así, mi historia como estudiante transferido llega a su fin.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして、僕の転校物語は幕を閉じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et ainsi, mon histoire d'élève transféré touche à sa fin.*"
            }
        }
    },
    "day5_ending_friend_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_friend_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*마음을 전하지 못했다. 아니, 전하지 않았다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I couldn't say what I felt. No— I chose not to.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No pude decir lo que sentía. No— elegí no hacerlo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*気持ちを伝えられなかった。いや、伝えなかった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je n'ai pas pu dire ce que je ressentais. Non — j'ai choisi de ne pas le dire.*"
            }
        }
    },
    "day5_ending_friend_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(\"친구\"라는 말 뒤에 숨긴 감정이, 가끔 밤에 떠오를지도 모른다.)"
            },
            "en": {
                "name": "Me",
                "text": "(The feelings I hid behind the word \"friend\" might surface on some quiet nights.)"
            },
            "es": {
                "name": "Yo",
                "text": "(Los sentimientos que escondí detrás de la palabra \"amigo\" quizás afloren en algunas noches silenciosas.)"
            },
            "ja": {
                "name": "僕",
                "text": "(「友達」という言葉の裏に隠した感情が、時々夜に浮かんでくるかもしれない。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Les sentiments que j'ai cachés derrière le mot « ami » resurgiront peut-être certaines nuits silencieuses.)"
            }
        }
    },
    "day5_ending_friend_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*기억난다. 그날 옥상에서, 바람에 날린 머리카락을 넘기던 그 손끝.*"
            },
            "en": {
                "name": "Me",
                "text": "*I remember. That day on the rooftop, the way the wind swept their hair, and the fingertips that brushed it aside.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo recuerdo. Ese día en la azotea, la forma en que el viento movía su cabello, y las puntas de los dedos que lo apartaban.*"
            },
            "ja": {
                "name": "僕",
                "text": "*覚えている。あの日屋上で、風に吹かれた髪を払うその指先を。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je me souviens. Ce jour-là sur le toit, la façon dont le vent balayait ses cheveux, et les doigts qui les écartaient.*"
            }
        }
    },
    "day5_ending_friend_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "(그때 \"좋아해\"라고 말했더라면, 지금 이 밤은 달랐을까.)"
            },
            "en": {
                "name": "Me",
                "text": "(If I had said \"I like you\" back then, would tonight be any different?)"
            },
            "es": {
                "name": "Yo",
                "text": "(Si hubiera dicho \"me gustas\" en ese momento, ¿esta noche sería diferente?)"
            },
            "ja": {
                "name": "僕",
                "text": "(あの時「好きだ」と言っていたら、今夜は違っていただろうか。)"
            },
            "fr": {
                "name": "Moi",
                "text": "(Si j'avais dit « Je t'aime bien » à ce moment-là, est-ce que ce soir serait différent ?)"
            }
        }
    },
    "day5_ending_friend_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*말하지 못한 감정은 사라지는 게 아니다. 마음 깊은 곳에서 조용히 빛나고 있을 뿐.*"
            },
            "en": {
                "name": "Me",
                "text": "*Unspoken feelings don't disappear. They simply glow quietly, deep within the heart.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Los sentimientos no expresados no desaparecen. Simplemente brillan en silencio, en lo profundo del corazón.*"
            },
            "ja": {
                "name": "僕",
                "text": "*言えなかった感情は消えるわけじゃない。心の奥深くで静かに光っているだけだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les sentiments non exprimés ne disparaissent pas. Ils luisent simplement en silence, au fond du cœur.*"
            }
        }
    },
    "day5_ending_friend_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*때로는 가장 가까운 거리가, 가장 먼 거리이기도 하다. '친구'라는 이름의 거리.*"
            },
            "en": {
                "name": "Me",
                "text": "(Sometimes the closest distance is also the farthest. The distance called \"friends.\")"
            },
            "es": {
                "name": "Yo",
                "text": "(A veces la distancia más cercana es también la más lejana. La distancia llamada \"amigos\".)"
            },
            "ja": {
                "name": "僕",
                "text": "*時に最も近い距離が、最も遠い距離でもある。「友達」という名の距離。*"
            },
            "fr": {
                "name": "Moi",
                "text": "(Parfois la plus courte distance est aussi la plus longue. La distance qu'on appelle « amis ».)"
            }
        }
    },
    "day5_ending_friend_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래도 나쁘지만은 않다. 옆에서 웃는 모습을 볼 수 있으니까. 언젠가 그 미소를 부숴버릴 날을 기다리며.*"
            },
            "en": {
                "name": "Me",
                "text": "*Still, it's not all bad. I can see their smile right beside me. Waiting for the day I can shatter that smile.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Aun así, no está tan mal. Puedo ver su sonrisa justo a mi lado. Esperando el día en que pueda destrozar esa sonrisa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*それでも悪くはない。隣で笑う姿を見られるから。いつかその笑顔を壊せる日を待ちながら。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pourtant, ce n'est pas si mal. Je peux voir son sourire juste à côté de moi. En attendant le jour où je pourrai briser ce sourire.*"
            }
        }
    },
    "day5_ending_friend_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어쩌면 이건 비겁함이 아니라, 조용한 사냥인지도 모른다. 먹잇감을 품은 채 곁에 머무르는 일.*"
            },
            "en": {
                "name": "Me",
                "text": "*Maybe this isn't cowardice, but a quiet hunt. Staying by their side while holding my prey.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Quizás esto no es cobardía, sino una cacería silenciosa. Permanecer a su lado mientras sostengo a mi presa.*"
            },
            "ja": {
                "name": "僕",
                "text": "*もしかしたらこれは臆病なんかじゃなく、静かな狩りなのかもしれない。獲物を抱えたまま、そばに居続けること。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Peut-être que ce n'est pas de la lâcheté, mais une chasse silencieuse. Rester à ses côtés tout en gardant ma proie.*"
            }
        }
    },
    "day5_ending_friend_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그래도… 후회하지 않아. 널 완전히 내 것으로 만들 수 있는 기회가, 언젠가 올 테니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Still I don't regret it. Someday, the chance to make you completely mine will come.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Aun así... no me arrepiento. Algún día, la oportunidad de hacerte completamente mía llegará.*"
            },
            "ja": {
                "name": "僕",
                "text": "*それでも…後悔してない。君を完全に僕のものにできるチャンスが、いつか来るから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pourtant je ne regrette pas. Un jour, l'occasion de te faire entièrement mienne viendra.*"
            }
        }
    },
    "day5_ending_friend_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*입끝을 맴돌다 끝내 삼켜버린 말들은 결코 사라지지 않고, 내 안에서 조용히 나이테를 새겨갈 것이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Someday— when the day comes that I can speak this heart, I won't hesitate.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Algún día— cuando llegue el día en que pueda expresar este corazón, no dudaré.*"
            },
            "ja": {
                "name": "僕",
                "text": "*いつか——この気持ちを伝えられる日が来たら、僕は迷わない。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Un jour — quand viendra le moment de parler avec ce cœur, je n'hésiterai pas.*"
            }
        }
    },
    "day5_ending_friend_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_friend_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*어떤 이야기는 끝맺지 않아서 더 오래 남는다. 이 계절이, 그렇게 기억될 거다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Some stories linger longer precisely because they're left unfinished. This season will be remembered that way.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Algunas historias perduran más precisamente porque quedan sin terminar. Esta temporada será recordada así.*"
            },
            "ja": {
                "name": "僕",
                "text": "*終わらないからこそ長く残る物語もある。この季節は、そうやって記憶されるだろう。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Certaines histoires perdurent plus longtemps justement parce qu'elles restent inachevées. Cette saison sera remémorée ainsi.*"
            }
        }
    },
    "day5_ending_friend_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── FRIEND END ───"
            },
            "en": {
                "name": "System",
                "text": "─── FRIEND END ───"
            },
            "es": {
                "name": "Sistema",
                "text": "─── FRIEND END ───"
            },
            "ja": {
                "name": "システム",
                "text": "─── FRIEND END ───"
            },
            "fr": {
                "name": "Système",
                "text": "─── FIN : AMI ───"
            }
        }
    },
    "day5_ending_alone": {
        "background": null,
        "character": null,
        "night": true,
        "bgm": null,
        "fade": true,
        "next": "day5_ending_alone_2",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*그렇게, 나의 전학 이야기는 막을 내린다.*"
            },
            "en": {
                "name": "Me",
                "text": "*And so, my transfer student story comes to an end.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Y así, mi historia como estudiante transferido llega a su fin.*"
            },
            "ja": {
                "name": "僕",
                "text": "*こうして、僕の転校物語は幕を閉じる。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Et ainsi, mon histoire d'élève transféré touche à sa fin.*"
            }
        }
    },
    "day5_ending_alone_2": {
        "night": true,
        "fade": true,
        "bgm": "ending.mp3",
        "next": "day5_ending_alone_3",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*특별한 누군가는 생기지 않았다. 하지만 이 학교에서 보낸 시간은 소중했다.*"
            },
            "en": {
                "name": "Me",
                "text": "*No one special came along. But the time I spent at this school was precious.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No apareció nadie especial. Pero el tiempo que pasé en esta escuela fue valioso.*"
            },
            "ja": {
                "name": "僕",
                "text": "*特別な誰かはできなかった。でもこの学校で過ごした時間は大切だった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Personne de spécial n'est apparu. Mais le temps passé dans cette école était précieux.*"
            }
        }
    },
    "day5_ending_alone_3": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_4",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*전학 오기 전, 아무것도 할 수 없었던 나와는 달라졌으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*I'm different now from who I was before I transferred— back when I felt like I couldn't do anything.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Soy diferente ahora de quien era antes de transferirme— cuando sentía que no podía hacer nada.*"
            },
            "ja": {
                "name": "僕",
                "text": "*転校する前の、何もできなかった僕とは変わったから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Je suis différent maintenant de celui que j'étais avant mon transfert — quand j'avais l'impression de ne rien pouvoir faire.*"
            }
        }
    },
    "day5_ending_alone_4": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_5",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*이 학교에서 배운 건 연애가 아니었다. 나 자신과 마주하는 법이었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*What I learned at this school wasn't about romance. It was about facing myself.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Lo que aprendí en esta escuela no fue sobre romance. Fue sobre enfrentarme a mí mismo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*この学校で学んだのは恋愛じゃなかった。自分自身と向き合うことだった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Ce que j'ai appris dans cette école, ce n'était pas l'amour. C'était me confronter à moi-même.*"
            }
        }
    },
    "day5_ending_alone_5": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_6",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*교실의 웃음소리, 쉬는 시간의 잡담, 체육 시간의 햇살— 그 모든 평범한 것들이 의미 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The laughter in the classroom, the chatter between classes, the sunlight during P.E.— all those ordinary things mattered.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Las risas en el salón, las charlas entre clases, la luz del sol durante educación física— todas esas cosas ordinarias importaban.*"
            },
            "ja": {
                "name": "僕",
                "text": "*教室の笑い声、休み時間の雑談、体育の時間の日差し——そのすべての平凡なものに意味があった。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Les rires dans la salle de classe, les bavardages entre les cours, le soleil pendant le sport — toutes ces choses ordinaires comptaient.*"
            }
        }
    },
    "day5_ending_alone_6": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_7",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*고독은 벌이 아니다. 자기 자신과 마주하는 시간이다.*"
            },
            "en": {
                "name": "Me",
                "text": "*Solitude is not a punishment. It's time spent face to face with yourself.*"
            },
            "es": {
                "name": "Yo",
                "text": "*La soledad no es un castigo. Es tiempo dedicado a estar cara a cara contigo mismo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*孤独は罰じゃない。自分自身と向き合う時間だ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*La solitude n'est pas une punition. C'est du temps passé face à soi-même.*"
            }
        }
    },
    "day5_ending_alone_7": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_8",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가를 사랑하기 전에, 먼저 나 자신을 이해해야 한다는 걸 배웠다.*"
            },
            "en": {
                "name": "Me",
                "text": "*I learned that before you can love someone else, you must first understand yourself.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Aprendí que antes de poder amar a alguien más, primero debes entenderte a ti mismo.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰かを愛する前に、まず自分自身を理解しなければならないということを学んだ。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*J'ai appris qu'avant de pouvoir aimer quelqu'un d'autre, il faut d'abord se comprendre soi-même.*"
            }
        }
    },
    "day5_ending_alone_8": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_9",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자라서 외로운 게 아니다. 혼자이기에 비로소 들리는 것들이 있다. 그녀들의 발소리, 숨소리, 나를 지켜보는 시선들.*"
            },
            "en": {
                "name": "Me",
                "text": "*Being alone doesn't mean being lonely. There are things you can only hear when you're on your own. Their footsteps, their breathing, the eyes watching me.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Estar solo no significa estar solitario. Hay cosas que solo puedes escuchar cuando estás por tu cuenta. Sus pasos, su respiración, los ojos que me observan.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一人だから寂しいわけじゃない。一人だからこそ聞こえるものがある。彼女たちの足音、息遣い、僕を見つめる視線。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Être seul ne veut pas dire être solitaire. Il y a des choses qu'on n'entend que quand on est seul. Leurs pas, leur souffle, les yeux qui me regardent.*"
            }
        }
    },
    "day5_ending_alone_9": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_10",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*바람 소리, 발걸음 소리, 내 심장 소리. 그 고요한 리듬 속에서 나는 서서히 미쳐가고 있었다.*"
            },
            "en": {
                "name": "Me",
                "text": "*The sound of the wind, my footsteps, my own heartbeat. Within that quiet rhythm, I was slowly going mad.*"
            },
            "es": {
                "name": "Yo",
                "text": "*El sonido del viento, mis pasos, los latidos de mi propio corazón. Dentro de ese ritmo silencioso, lentamente me estaba volviendo loco.*"
            },
            "ja": {
                "name": "僕",
                "text": "*風の音、足音、自分の心臓の音。その静かなリズムの中で、僕は少しずつ狂っていた。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Le bruit du vent, mes pas, mes propres battements de cœur. Dans ce rythme silencieux, je sombre doucement dans la folie.*"
            }
        }
    },
    "day5_ending_alone_10": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_11",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*누군가에게 닿지 못했다 해도, 이 시간들이 결코 무의미해지는 것은 아니다. 나는 분명 어제보다 더 깊은 어둠 속으로 가라앉고 있으니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Even if I couldn't reach anyone, these times are never meaningless. Because I am definitely sinking into a deeper darkness than yesterday.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Aunque no pude alcanzar a nadie, estos momentos nunca carecen de sentido. Porque definitivamente me estoy hundiendo en una oscuridad más profunda que ayer.*"
            },
            "ja": {
                "name": "僕",
                "text": "*誰にも届かなかったとしても、この時間は決して無意味にはならない。僕は確かに昨日より深い闇の中へ沈んでいるから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Même si je n'ai pu atteindre personne, ces moments ne sont jamais vains. Car je sombre assurément dans une obscurité plus profonde qu'hier.*"
            }
        }
    },
    "day5_ending_alone_11": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_12",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*서두르지 않아도 된다. 나만의 속도로, 나만의 길을 걸으면 되니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*There's no need to rush. I can walk at my own pace, on my own path.*"
            },
            "es": {
                "name": "Yo",
                "text": "*No hay necesidad de apresurarse. Puedo caminar a mi propio ritmo, por mi propio camino.*"
            },
            "ja": {
                "name": "僕",
                "text": "*急がなくてもいい。自分のペースで、自分の道を歩けばいいから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Pas besoin de se presser. Je peux marcher à mon rythme, sur mon propre chemin.*"
            }
        }
    },
    "day5_ending_alone_12": {
        "night": true,
        "fade": true,
        "next": "day5_ending_alone_13",
        "_i18n": {
            "ko": {
                "name": "나",
                "text": "*혼자 걷는 밤길도 나쁘지 않다. 별이 유난히 밝은 건, 어둠 덕분이니까.*"
            },
            "en": {
                "name": "Me",
                "text": "*Walking alone on a night road isn't so bad. The stars shine brightest, after all, because of the darkness.*"
            },
            "es": {
                "name": "Yo",
                "text": "*Caminar solo por un camino nocturno no está tan mal. Las estrellas brillan más, después de todo, gracias a la oscuridad.*"
            },
            "ja": {
                "name": "僕",
                "text": "*一人で歩く夜道も悪くない。星がひときわ明るいのは、闇のおかげだから。*"
            },
            "fr": {
                "name": "Moi",
                "text": "*Marcher seul sur une route nocturne, ce n'est pas si mal. Les étoiles brillent le plus fort, après tout, grâce à l'obscurité.*"
            }
        }
    },
    "day5_ending_alone_13": {
        "night": true,
        "fade": true,
        "next": "day5_credits",
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "─── ALONE END ───"
            },
            "en": {
                "name": "System",
                "text": "─── ALONE END ───"
            },
            "es": {
                "name": "Sistema",
                "text": "─── ALONE END ───"
            },
            "ja": {
                "name": "システム",
                "text": "─── ALONE END ───"
            },
            "fr": {
                "name": "Système",
                "text": "─── FIN : SOLITAIRE ───"
            }
        }
    },
    "day5_credits": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "type": "credits",
        "next": "day5_ending_restart",
        "_i18n": {
            "ko": {
                "name": "",
                "text": ""
            },
            "en": {
                "name": "",
                "text": ""
            },
            "es": {
                "name": "",
                "text": ""
            },
            "ja": {
                "name": "",
                "text": ""
            },
            "fr": {
                "name": "",
                "text": ""
            }
        }
    },
    "day5_ending_restart": {
        "background": null,
        "character": null,
        "night": true,
        "fade": true,
        "choices": [
            {
                "next": "index.html"
            }
        ],
        "_i18n": {
            "ko": {
                "name": "시스템",
                "text": "",
                "choices": [
                    "처음부터 다시 시작하기"
                ]
            },
            "en": {
                "name": "System",
                "text": "",
                "choices": [
                    "Start Over from the Beginning"
                ]
            },
            "es": {
                "name": "Sistema",
                "text": "",
                "choices": [
                    "Empezar de nuevo desde el principio"
                ]
            },
            "ja": {
                "name": "システム",
                "text": "",
                "choices": [
                    "最初からやり直す"
                ]
            },
            "fr": {
                "name": "Système",
                "text": "",
                "choices": [
                    "Recommencer depuis le Début"
                ]
            }
        }
    }
});
