#!/usr/bin/env node
/**
 * 네이티브 검토 FIX 적용 (EN/JA/ES/FR/DE/PT)
 * - 6개 언어 병렬 검토에서 받은 FIX 중 명확한 개선만 선별 반영
 * - 주관적 스타일 선호는 제외
 */
const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'assets', 'js', 'i18n');

// file → node → { lang: newText } (부분 업데이트 — 해당 언어만 변경)
const fixes = {
    'day1_1_morning.json': {
        'seoyeon_meet_4': {
            de: "Schülersprecherin. Neulinge sind mein Ding."
        },
        'hallway_6_c': {
            en: "*Half a second. Nothing, probably — but it lingers.*",
            es: "*Una vacilación de medio segundo. Probablemente nada — pero se queda.*"
        }
    },
    'day1_2_lunch.json': {
        'lunch_seo_6_b': {
            en: "*Smiling.* You're suspicious. — It's quiet up here.",
            es: "*sonríe* Suspicaz. — Aquí arriba es tranquilo.",
            de: "*lächelt* Misstrauisch. — Hier oben ist ruhig."
        },
        'lunch_dain_2': {
            en: "Soboro bread and strawberry milk. This combo's never failed me.",
            es: "Pan soboro y leche de fresa. Esa combinación nunca me ha defraudado.",
            fr: "Brioche soboro et lait à la fraise. Ce combo m'a jamais déçue.",
            de: "Streuselbrötchen mit Erdbeermilch. Diese Kombi hat mich noch nie im Stich gelassen.",
            pt: "Soboro com leite de morango. Essa dupla nunca me traiu."
        },
        'lunch_dain_18': {
            es: "Nah, andar conmigo empieza con entrenamiento jaja",
            fr: "Nan, sortir avec moi, faut d'abord passer un test physique !"
        }
    },
    'day1_3_afterschool.json': {
        'after_miss_seoyeon_4': {
            es: "Dejé la azotea abierta y no viniste. — Tienes audacia, transferido."
        },
        'after_hidden_homeroom_3_b': {
            en: "What you said earlier — it won't leave my head."
        },
        'after_homeroom_honest_1': {
            fr: "Être débordé, c'est normal. Rester zen dès le premier jour, ça serait bizarre."
        }
    },
    'day2_2_lunch.json': {
        'lunch2_dain_end_h': {
            es: "*El mismo tono que ayer. Pero sus ojos ya están en la herida.*",
            de: "*Der Ton wie gestern. Aber ihre Augen sind schon auf der Wunde.*"
        },
        'lunch2_dain_end_q': {
            ja: "*丁寧さ。——この一言で全部説明できるのか。*",
            es: "*Cuidado. ¿Esa palabra abarca todo?*"
        }
    },
    'day2_3_afterschool.json': {
        'after2_dain_5': {
            fr: "*C'est toi qui es arrivé tôt. Moi, pas en retard.*",
            de: "*Du bist einfach früher gekommen. Ich war nicht zu spät.*"
        },
        'after2_dain_end_3c': {
            ja: "*「だったんだ」。——過去形なんだ。今は訊かない方がいい。*"
        }
    },
    'day2_4_night.json': {
        'night2_reply_seo_5': {
            de: "*'Diesmal komm wirklich.' — Ein Ton, der Konsequenzen verspricht.*"
        },
        'night2_flashback_9': {
            en: "*With Sojeong, I watched only one person. Loved her, only watched, and missed her falling apart. Thirty-eight drafts, stopped in my notes app. — Watching only one meant risking loss.*",
            ja: "*ソジョンのとき、俺は一人だけを見てた。好きで、見ているだけで、崩れていくのを見逃した。メモ帳で止まった38回。—一人だけを見るって、失うってことだった。*",
            es: "*Con Sojeong, solo miraba a una persona. La quería, solo miraba, y me perdí su derrumbe. Treinta y ocho intentos parados en mis notas. — Mirar solo a una significaba poder perderla.*",
            de: "*Bei Sojeong hab ich nur eine Person angesehen. Mochte sie, sah nur zu, verpasste ihren Zusammenbruch. Achtunddreißig Notizen, alle abgebrochen. — Nur eine zu sehen hieß, sie verlieren zu können.*"
        },
        'night2_flashback_10': {
            en: "*— That's why I'm keeping all three in play. Choose too fast, and I might miss one of them breaking. Insurance. I know it's cowardly. I'm an indecisive piece of shit. But — losing someone while only watching her, I know that much.*",
            ja: "*—だから三人とも可能性を残してる。一人を早く決めすぎたら、別の一人が崩れるときまた見逃すかもしれないから。保険。卑怯なのは分かってる。優柔不断なクソ野郎だ。でも—一人だけ見て失う、ってのは……知ってる。*",
            es: "*— Por eso me dejo opciones con las tres. Si elijo una muy rápido, podría no ver el momento en que otra se cae. Un seguro. Sé que es cobardía. Un indeciso de mierda. Pero — lo que es perder a alguien viendo solo a esa persona, eso sí lo sé.*",
            de: "*— Deshalb hab ich mir bei allen dreien eine Tür offen gehalten. Wähle ich zu schnell, könnte ich übersehen, wie eine andere zerbricht. Absicherung. Ich weiß, es ist feige. Ein unentschlossener Idiot. Aber — jemanden zu verlieren, während man nur sie ansieht, das kenne ich.*",
            pt: "*— Por isso mantenho uma porta aberta com as três. Se escolher rápido demais, posso perder o momento em que outra desmorona. Um seguro. Sei que é covardia. Um indeciso de merda mesmo. Mas — perder alguém olhando só para ela, isso eu conheço.*"
        }
    },
    'day3_1_morning.json': {
        'morning3_seo_gate_4': {
            fr: "On s'en fout d'arriver en retard. Ça vaut mieux que se faire gronder toute seule."
        }
    },
    'day3_2_lunch.json': {
        'lunch3_meal_10': {
            es: "*El último trozo de la tortilla enrollada. 'Compartamos esto', dije. — El aire cayó.*"
        },
        'lunch3_yuna_witness_2': {
            es: "*Ni un gesto. — El silencio mismo corta.*",
            de: "*Keine Regung im Gesicht. — Diese Stille schneidet tiefer.*"
        },
        'lunch3_expose_honest_2': {
            en: "...Not being able to say no. — That's the cruelest thing, {name}.",
            es: "...No poder decir no. — Eso es lo más cruel, {name}.",
            de: "...Einfach nicht nein sagen können. — Das ist das Grausamste, {name}.",
            pt: "...Não conseguir dizer não. — Isso é o mais cruel, {name}."
        }
    },
    'day3_3_afterschool.json': {
        'after3_seo_correct_8': {
            es: "*La conversación fluye natural. La que estaba desplomada, el maquillaje corrido — ya no están aquí. Sin palabras, nos pusimos de acuerdo.*"
        },
        'after3_yuna_decode_trap_6': {
            en: "...Because of people like you. I can't write a single line.",
            ja: "…あんたのせいで。一行も書けない。",
            es: "...Por gente como tú. No puedo escribir ni una palabra.",
            fr: "...À cause de gens comme toi. Je n'arrive pas à écrire une seule ligne.",
            de: "...Wegen Leuten wie dir. Ich bring keine Zeile raus."
        }
    },
    'day3_4_night.json': {
        'night3_cheat_msg_7': {
            de: "*Yuna hat drei Zeilen geschickt. Sie, die sonst nicht mal eine schreibt.*"
        }
    },
    'day4_1_morning.json': {
        'morning4_seo_msg_1_b': {
            de: "*Imperativ. Sogar Verabredungen klingen wie Befehle. — Aber irgendwie witzig.*"
        },
        'hidden_homeroom_d4_5_d': {
            ja: "*また始まった。「教育的関心」で越えようとする線。*"
        }
    },
    'day4_2_lunch.json': {
        'date_seo_pretty_high_4': {
            es: "*'No te hagas ilusiones.' — Pero no para de acomodarse el pelo.*"
        }
    },
    'day4_3_afterschool.json': {
        'confess_seo_4_b': {
            es: "*Mi respiración se vuelve superficial. Igual que en la otra escuela. — Palabras que me tragué entonces.*",
            pt: "*A respiração fica rasa. Como na outra escola. — Palavras que engoli naquela época.*"
        },
        'confess_seo_yes_5': {
            es: "*Se me enredan las palabras. Nunca las preparé — y no puedo parar.*",
            de: "*Die Worte verheddern sich. Nie vorbereitet — und ich kann nicht mehr aufhören.*"
        },
        'confess_yuna_yes_6_b': {
            ja: "*俺の言葉がユナより長くなった日。——初めてだ。*"
        }
    },
    'day4_4_night.json': {
        'wall_seo_9': {
            es: "*Seoyeon sonríe. — No es su soltura de siempre. Una sonrisa que esconde algo.*"
        },
        'wall_seo_14': {
            en: "Every time they praised me, I'd think. — Even this smile is practiced. Did anyone ever really see me?",
            ja: "褒められるたび思ってた。この笑顔だって練習したのか、って。本物の私を見た人、いたのか。",
            es: "Con cada elogio pensaba. — Hasta esta sonrisa es ensayada. ¿Alguien me vio en serio?",
            de: "Bei jedem Kompliment dachte ich. — Auch dieses Lächeln ist einstudiert. Hat mich jemand wirklich gesehen?",
            pt: "A cada elogio eu pensava. — Até esse sorriso é ensaiado. Alguém realmente me viu?"
        },
        'wall_dain_20': {
            en: "Every time someone at school said 'You've got so much energy!' — right here. ...I couldn't breathe.",
            es: "Cada vez que en la escuela me decían '¡Qué energía!' — aquí. ...se me cerraba la respiración.",
            fr: "À chaque fois qu'on me disait « Que tu as de l'énergie ! » — ici. ...je suffoquais.",
            de: "Jedes Mal wenn in der Schule jemand „So viel Energie!“ sagte — hier. ...bekam ich keine Luft mehr.",
            pt: "Cada vez que na escola me diziam 'Que energia!' — aqui. ...ficava faltando ar."
        },
        'wall_dain_newdream_1': {
            es: "*Me quedé a su lado. Los dos callados. — Nunca había estado tanto rato callado al lado de Dain.*",
            de: "*Ich blieb neben ihr. Wir schwiegen beide. — So lange still neben Dain zu sein, ist das erste Mal.*"
        },
        'wall_yuna_12': {
            es: "*Las frases de Yuna son más largas que de costumbre. Mucho más.*"
        }
    },
    'day5_2_lunch.json': {
        'tour_seo_3': {
            es: "Aquella vez dije 'es demasiado' — y casi me regaña."
        },
        'tour_yuna_8': {
            ja: "あのとき言ってたよね。「結末を書いたら終わる」って。"
        },
        'tour_dain_12': {
            de: "Weiß nicht, was sich geändert hat. ...Aber ich sehe mich jetzt auch außerhalb des Platzes.",
            pt: "Sei lá o que mudou. ...Mas agora eu me vejo até fora da quadra."
        }
    },
    'day5_3_afterschool.json': {
        'after5_last_chance_2_g': {
            es: "— Esta vez no te dejo ir. Ahora que volviste."
        },
        'after5_last_chance_2_q': {
            es: "Te esperé. Desde ayer. No, desde anteayer. Pero — no se arregla así nomás.",
            de: "Ich hab gewartet. Seit gestern. Nee, seit vorgestern. Aber — so schnell wird's nicht okay mit mir."
        },
        'after5_confess_react_dain': {
            es: "*Al salir de la escuela.* ¿Oye, en serio?! ...¿De verdad? Esperar, esperé. — Pero sonreír al toque me sentiría barato. Esta vez dímelo hasta el final.",
            pt: "*Saindo da escola.* Ei, sério?! ...Mesmo? Esperar eu esperei. — Mas sorrir ali mesmo seria humilhante. Desta vez fala até o fim."
        }
    }
};

let totalFiles = 0;
let totalFixes = 0;
const missing = [];

for (const file in fixes) {
    for (const nodeId in fixes[file]) {
        const langFixes = fixes[file][nodeId];
        for (const lang in langFixes) {
            const filePath = path.join(i18nPath, lang, file);
            if (!fs.existsSync(filePath)) {
                missing.push(`${lang}/${file}`);
                continue;
            }
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (!data[nodeId]) {
                missing.push(`${lang}/${file}#${nodeId}`);
                continue;
            }
            data[nodeId].text = langFixes[lang];
            fs.writeFileSync(filePath, JSON.stringify(data, null, 4) + '\n', 'utf8');
            totalFixes++;
        }
    }
}

// 파일 단위 통계
const touchedFiles = new Set();
for (const file in fixes) {
    for (const nodeId in fixes[file]) {
        for (const lang in fixes[file][nodeId]) {
            touchedFiles.add(`${lang}/${file}`);
        }
    }
}
totalFiles = touchedFiles.size;

console.log(`\n완료: ${totalFixes}개 FIX 적용, ${totalFiles}개 파일 수정`);
if (missing.length) {
    console.log(`\n누락:\n${missing.map(m => '  ⚠ ' + m).join('\n')}`);
}
