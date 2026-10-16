#!/usr/bin/env node
/**
 * Cupid 시나리오 수정에 따른 5개 언어 번역 일괄 추가
 * - Day 3 방과후: 다인 무릎 딜레마 + 서연 선택 시 유나 흔적 삭제
 * - Day 5 아침: 유나 신뢰 깨짐 시 소설 사라짐
 */

const fs = require('fs');
const path = require('path');

// ── Day 3 방과후 신규 키 ──
const day3_3 = {
    en: {
        after3_reject_for_seo_3b: {
            name: '{name}',
            text: "*Yuna's book is gone. Volume 1 that always sat there. Volume 2 she promised to lend me. And — the bookmark too. The old bookmark she kept so carefully.*"
        },
        after3_reject_for_seo_3c: {
            name: '{name}',
            text: "*She erased every trace. This wasn't a note left behind — it was a line drawn. For Yuna to write this many words, she must have waited a long time.*"
        },
        after3_dain_dilemma_tell: {
            name: 'Dain',
            text: '...What?'
        },
        after3_dain_dilemma_tell_2: {
            name: '{name}',
            text: "Your knee. You've been rubbing it this whole time. This isn't from twisting it today, is it?"
        },
        after3_dain_dilemma_tell_3: {
            name: '{name}',
            text: "*Dain's expression hardens. The exclamation marks vanish.*"
        },
        after3_dain_dilemma_tell_4: {
            name: 'Dain',
            text: "...Why bring it up if you knew. You know the tournament is next week."
        },
        after3_dain_dilemma_tell_5: {
            name: '{name}',
            text: "Your knee matters more than the tournament."
        },
        after3_dain_dilemma_tell_6: {
            name: 'Dain',
            text: "That's not your call to make!!"
        },
        after3_dain_dilemma_tell_7: {
            name: '{name}',
            text: "*Dain stands up. Her knee creaks. Her hand stops halfway to her shoelaces.*"
        },
        after3_dain_dilemma_tell_8: {
            name: 'Dain',
            text: "...Please. Just this. Don't tell anyone."
        },
        after3_dain_dilemma_final: {
            name: '{name}',
            text: "*Dain's eyes are wet. A Dain without exclamation marks — I've never seen it before.*",
            choices: [
                "Sorry. But I'm telling.",
                "...Okay. I won't say anything."
            ]
        },
        after3_dain_tell_confirm: {
            name: 'Dain',
            text: "...You're the worst."
        },
        after3_dain_tell_confirm_2: {
            name: '{name}',
            text: "*Dain grabs her bag and walks out. She doesn't look back. The gym door slams shut.*"
        },
        after3_dain_tell_confirm_3: {
            name: '{name}',
            text: "*I stand alone in the empty gym. With Sojeong, I regretted keeping silent. This time, I spoke up. — But I don't know if it was right.*"
        },
        after3_dain_tell_retreat: {
            name: '{name}',
            text: "*Dain breathes a sigh of relief. — I picked silence again. The easy way out.*"
        }
    },
    ja: {
        after3_reject_for_seo_3b: {
            name: '{name}',
            text: '*ユナの本がない。いつも置いてあった1巻も。貸してくれると言った2巻も。そして — しおりも消えていた。古いしおり。ユナが大切にしまっていた、あの。*'
        },
        after3_reject_for_seo_3c: {
            name: '{name}',
            text: '*痕跡をぜんぶ消したんだ。メモを残したんじゃなくて — 線を引いたんだ。ユナがこんなに多くの文字を書くということは、それだけ長く待っていたという意味だ。*'
        },
        after3_dain_dilemma_tell: {
            name: 'ダイン',
            text: '...え?'
        },
        after3_dain_dilemma_tell_2: {
            name: '{name}',
            text: '膝。さっきからずっとさすってるじゃん。これ、今日ひねったんじゃないよね?'
        },
        after3_dain_dilemma_tell_3: {
            name: '{name}',
            text: '*ダインの表情がこわばる。ビックリマークが消える。*'
        },
        after3_dain_dilemma_tell_4: {
            name: 'ダイン',
            text: '...知ってるなら何で言うの。来週、大会なの知ってるでしょ。'
        },
        after3_dain_dilemma_tell_5: {
            name: '{name}',
            text: '大会よりお前の膝の方が大事だよ。'
        },
        after3_dain_dilemma_tell_6: {
            name: 'ダイン',
            text: 'それを決めるのはお前じゃない!!'
        },
        after3_dain_dilemma_tell_7: {
            name: '{name}',
            text: '*ダインが立ち上がる。膝がきしむ。靴ひもを結ぼうとした手が止まる。*'
        },
        after3_dain_dilemma_tell_8: {
            name: 'ダイン',
            text: '...お願い。これだけは。誰にも言わないで。'
        },
        after3_dain_dilemma_final: {
            name: '{name}',
            text: '*ダインの目が濡れている。ビックリマークのないダインなんて — 初めて見る。*',
            choices: [
                'ごめん。でも、言うよ。',
                '...わかった。言わない。'
            ]
        },
        after3_dain_tell_confirm: {
            name: 'ダイン',
            text: '...最低。'
        },
        after3_dain_tell_confirm_2: {
            name: '{name}',
            text: '*ダインがカバンを持って出ていく。振り返らない。体育館のドアがバタンと閉まる。*'
        },
        after3_dain_tell_confirm_3: {
            name: '{name}',
            text: '*誰もいない体育館に立っている。ソジョンの時は口を閉ざして後悔した。今回は口を開いた。 — でも、正解だったのか分からない。*'
        },
        after3_dain_tell_retreat: {
            name: '{name}',
            text: '*ダインが安堵のため息をつく。 — また沈黙を選んだ。楽な方を。*'
        }
    },
    es: {
        after3_reject_for_seo_3b: {
            name: '{name}',
            text: '*El libro de Yuna no está. Tampoco el volumen 1 que siempre estaba ahí. Ni el volumen 2 que prometió prestarme. Y — el marcapáginas también se ha ido. Aquel marcapáginas viejo. El que Yuna guardaba con tanto cuidado.*'
        },
        after3_reject_for_seo_3c: {
            name: '{name}',
            text: '*Borró todas las huellas. No dejó una nota — trazó una línea. Que Yuna escriba tantas palabras significa que esperó mucho tiempo.*'
        },
        after3_dain_dilemma_tell: {
            name: 'Dain',
            text: '...¿Qué?'
        },
        after3_dain_dilemma_tell_2: {
            name: '{name}',
            text: 'Tu rodilla. Llevas todo el rato frotándola. Esto no es de habérsela torcido hoy, ¿verdad?'
        },
        after3_dain_dilemma_tell_3: {
            name: '{name}',
            text: '*La expresión de Dain se endurece. Los signos de exclamación desaparecen.*'
        },
        after3_dain_dilemma_tell_4: {
            name: 'Dain',
            text: '...Si lo sabías, ¿por qué lo dices? Sabes que el torneo es la semana que viene.'
        },
        after3_dain_dilemma_tell_5: {
            name: '{name}',
            text: 'Tu rodilla importa más que el torneo.'
        },
        after3_dain_dilemma_tell_6: {
            name: 'Dain',
            text: '¡¡Eso no lo decides tú!!'
        },
        after3_dain_dilemma_tell_7: {
            name: '{name}',
            text: '*Dain se levanta. Su rodilla cruje. Su mano se detiene a medio camino de los cordones.*'
        },
        after3_dain_dilemma_tell_8: {
            name: 'Dain',
            text: '...Por favor. Solo esto. No se lo digas a nadie.'
        },
        after3_dain_dilemma_final: {
            name: '{name}',
            text: '*Los ojos de Dain están húmedos. Una Dain sin signos de exclamación — nunca la había visto.*',
            choices: [
                'Lo siento. Pero voy a decirlo.',
                '...Vale. No diré nada.'
            ]
        },
        after3_dain_tell_confirm: {
            name: 'Dain',
            text: '...Eres lo peor.'
        },
        after3_dain_tell_confirm_2: {
            name: '{name}',
            text: '*Dain coge su mochila y se va. No mira atrás. La puerta del gimnasio se cierra de golpe.*'
        },
        after3_dain_tell_confirm_3: {
            name: '{name}',
            text: '*Estoy solo en el gimnasio vacío. Con Sojeong, me arrepentí de haber callado. Esta vez hablé. — Pero no sé si fue lo correcto.*'
        },
        after3_dain_tell_retreat: {
            name: '{name}',
            text: '*Dain suelta un suspiro de alivio. — He elegido el silencio otra vez. El camino fácil.*'
        }
    },
    fr: {
        after3_reject_for_seo_3b: {
            name: '{name}',
            text: '*Le livre de Yuna n\u2019est plus là. Le tome 1 qui était toujours posé là non plus. Ni le tome 2 qu\u2019elle avait promis de me prêter. Et — le marque-page aussi a disparu. Ce vieux marque-page. Celui que Yuna gardait précieusement.*'
        },
        after3_reject_for_seo_3c: {
            name: '{name}',
            text: '*Elle a effacé toutes les traces. Ce n\u2019était pas un mot laissé — c\u2019était une ligne tracée. Si Yuna a écrit autant de mots, c\u2019est qu\u2019elle a attendu longtemps.*'
        },
        after3_dain_dilemma_tell: {
            name: 'Dain',
            text: '...Quoi ?'
        },
        after3_dain_dilemma_tell_2: {
            name: '{name}',
            text: 'Ton genou. Tu n\u2019arrêtes pas de le frotter. Ce n\u2019est pas de l\u2019avoir tordu aujourd\u2019hui, hein ?'
        },
        after3_dain_dilemma_tell_3: {
            name: '{name}',
            text: '*Le visage de Dain se fige. Les points d\u2019exclamation disparaissent.*'
        },
        after3_dain_dilemma_tell_4: {
            name: 'Dain',
            text: '...Si tu savais, pourquoi tu le dis ? Tu sais que le tournoi est la semaine prochaine.'
        },
        after3_dain_dilemma_tell_5: {
            name: '{name}',
            text: 'Ton genou compte plus que le tournoi.'
        },
        after3_dain_dilemma_tell_6: {
            name: 'Dain',
            text: 'Ce n\u2019est pas à toi de décider !!'
        },
        after3_dain_dilemma_tell_7: {
            name: '{name}',
            text: '*Dain se lève. Son genou craque. Sa main s\u2019arrête à mi-chemin des lacets.*'
        },
        after3_dain_dilemma_tell_8: {
            name: 'Dain',
            text: '...S\u2019il te plaît. Juste ça. Ne dis rien à personne.'
        },
        after3_dain_dilemma_final: {
            name: '{name}',
            text: '*Les yeux de Dain sont humides. Une Dain sans points d\u2019exclamation — je n\u2019en avais jamais vu.*',
            choices: [
                'Désolé. Mais je vais le dire.',
                '...D\u2019accord. Je ne dirai rien.'
            ]
        },
        after3_dain_tell_confirm: {
            name: 'Dain',
            text: '...Tu es le pire.'
        },
        after3_dain_tell_confirm_2: {
            name: '{name}',
            text: '*Dain prend son sac et sort. Sans se retourner. La porte du gymnase claque.*'
        },
        after3_dain_tell_confirm_3: {
            name: '{name}',
            text: '*Je reste seul dans le gymnase vide. Avec Sojeong, j\u2019ai regretté d\u2019avoir gardé le silence. Cette fois, j\u2019ai parlé. — Mais je ne sais pas si c\u2019était juste.*'
        },
        after3_dain_tell_retreat: {
            name: '{name}',
            text: '*Dain pousse un soupir de soulagement. — J\u2019ai encore choisi le silence. La voie facile.*'
        }
    },
    de: {
        after3_reject_for_seo_3b: {
            name: '{name}',
            text: '*Yunas Buch ist weg. Auch Band 1, der immer dort lag. Und Band 2, den sie mir leihen wollte. Und — das Lesezeichen auch. Das alte Lesezeichen. Das, was Yuna so sorgsam aufbewahrte.*'
        },
        after3_reject_for_seo_3c: {
            name: '{name}',
            text: '*Sie hat jede Spur ausgelöscht. Das war kein hinterlassener Zettel — das war eine gezogene Linie. Wenn Yuna so viele Worte schreibt, heißt das, dass sie lange gewartet hat.*'
        },
        after3_dain_dilemma_tell: {
            name: 'Dain',
            text: '...Was?'
        },
        after3_dain_dilemma_tell_2: {
            name: '{name}',
            text: 'Dein Knie. Du reibst es die ganze Zeit. Das ist nicht vom heutigen Umknicken, oder?'
        },
        after3_dain_dilemma_tell_3: {
            name: '{name}',
            text: '*Dains Gesicht erstarrt. Die Ausrufezeichen verschwinden.*'
        },
        after3_dain_dilemma_tell_4: {
            name: 'Dain',
            text: '...Wenn du es wusstest, warum sagst du es. Du weißt, das Turnier ist nächste Woche.'
        },
        after3_dain_dilemma_tell_5: {
            name: '{name}',
            text: 'Dein Knie ist wichtiger als das Turnier.'
        },
        after3_dain_dilemma_tell_6: {
            name: 'Dain',
            text: 'Das entscheidest nicht du!!'
        },
        after3_dain_dilemma_tell_7: {
            name: '{name}',
            text: '*Dain steht auf. Ihr Knie knackt. Ihre Hand stoppt auf halbem Weg zu den Schnürsenkeln.*'
        },
        after3_dain_dilemma_tell_8: {
            name: 'Dain',
            text: '...Bitte. Nur das. Sag es niemandem.'
        },
        after3_dain_dilemma_final: {
            name: '{name}',
            text: '*Dains Augen sind feucht. Eine Dain ohne Ausrufezeichen — habe ich noch nie gesehen.*',
            choices: [
                'Tut mir leid. Aber ich sage es.',
                '...Okay. Ich sage nichts.'
            ]
        },
        after3_dain_tell_confirm: {
            name: 'Dain',
            text: '...Du bist das Schlimmste.'
        },
        after3_dain_tell_confirm_2: {
            name: '{name}',
            text: '*Dain greift ihre Tasche und geht raus. Ohne sich umzudrehen. Die Hallentür knallt zu.*'
        },
        after3_dain_tell_confirm_3: {
            name: '{name}',
            text: '*Ich stehe allein in der leeren Halle. Bei Sojeong habe ich bereut, geschwiegen zu haben. Diesmal habe ich gesprochen. — Aber ich weiß nicht, ob es richtig war.*'
        },
        after3_dain_tell_retreat: {
            name: '{name}',
            text: '*Dain atmet erleichtert auf. — Ich habe wieder das Schweigen gewählt. Den einfachen Weg.*'
        }
    }
};

// ── Day 5 아침 신규 키 ──
const day5_1 = {
    en: {
        morning5_yuna_story_gone: {
            name: '{name}',
            text: '*Only the pinholes remain on the bulletin board. Where the story should have been. — She took it down. Or maybe she never put it up at all.*'
        },
        morning5_yuna_story_gone_2: {
            name: '{name}',
            text: '*The empty seat in the library, the missing bookmark, and now a story that was never posted. — Yuna is erasing every trace. The silence I left on Day 3 has reached this far.*'
        }
    },
    ja: {
        morning5_yuna_story_gone: {
            name: '{name}',
            text: '*掲示板にはピンの跡だけが残っている。小説が貼られていたはずの場所。 — はがしたんだ。いや、最初から貼らなかったのかもしれない。*'
        },
        morning5_yuna_story_gone_2: {
            name: '{name}',
            text: '*図書館の空席、消えたしおり、そして貼られなかった小説。 — ユナは痕跡を全部消している。Day 3に俺が残した空白がここまで届いた。*'
        }
    },
    es: {
        morning5_yuna_story_gone: {
            name: '{name}',
            text: '*En el tablón solo quedan las marcas de las chinchetas. Donde debería estar el relato. — Lo quitó. O tal vez nunca lo colgó.*'
        },
        morning5_yuna_story_gone_2: {
            name: '{name}',
            text: '*El asiento vacío en la biblioteca, el marcapáginas perdido, y ahora un relato que nunca llegó al tablón. — Yuna está borrando cada huella. El silencio que dejé el Día 3 ha llegado hasta aquí.*'
        }
    },
    fr: {
        morning5_yuna_story_gone: {
            name: '{name}',
            text: '*Sur le panneau, il ne reste que les trous des punaises. Là où la nouvelle aurait dû être. — Elle l\u2019a retirée. Ou peut-être qu\u2019elle ne l\u2019a jamais affichée.*'
        },
        morning5_yuna_story_gone_2: {
            name: '{name}',
            text: '*La place vide à la bibliothèque, le marque-page disparu, et maintenant une nouvelle jamais affichée. — Yuna efface chaque trace. Le silence que j\u2019ai laissé au Jour 3 est arrivé jusqu\u2019ici.*'
        }
    },
    de: {
        morning5_yuna_story_gone: {
            name: '{name}',
            text: '*Am Brett bleiben nur die Pinnadellöcher. Wo die Kurzgeschichte hätte hängen sollen. — Sie hat sie abgenommen. Oder vielleicht hat sie sie nie aufgehängt.*'
        },
        morning5_yuna_story_gone_2: {
            name: '{name}',
            text: '*Der leere Platz in der Bibliothek, das verschwundene Lesezeichen, und nun eine nie aufgehängte Geschichte. — Yuna löscht jede Spur. Die Stille, die ich an Tag 3 hinterlassen habe, ist bis hierher gekommen.*'
        }
    }
};

// ── 적용 ──
const langs = ['en', 'ja', 'es', 'fr', 'de'];
let totalAdded = 0;

for (const lang of langs) {
    // day3_3
    const path3 = path.join(__dirname, 'assets/js/i18n', lang, 'day3_3_afterschool.json');
    const data3 = JSON.parse(fs.readFileSync(path3, 'utf-8'));
    let added3 = 0;
    for (const [k, v] of Object.entries(day3_3[lang])) {
        if (!data3[k]) {
            data3[k] = v;
            added3++;
            totalAdded++;
        }
    }
    fs.writeFileSync(path3, JSON.stringify(data3, null, 2) + '\n', 'utf-8');
    console.log(`✅ ${lang}/day3_3_afterschool.json — +${added3}`);

    // day5_1
    const path5 = path.join(__dirname, 'assets/js/i18n', lang, 'day5_1_morning.json');
    const data5 = JSON.parse(fs.readFileSync(path5, 'utf-8'));
    let added5 = 0;
    for (const [k, v] of Object.entries(day5_1[lang])) {
        if (!data5[k]) {
            data5[k] = v;
            added5++;
            totalAdded++;
        }
    }
    fs.writeFileSync(path5, JSON.stringify(data5, null, 2) + '\n', 'utf-8');
    console.log(`✅ ${lang}/day5_1_morning.json — +${added5}`);
}

console.log(`\n총 ${totalAdded}개 번역 추가 완료`);
