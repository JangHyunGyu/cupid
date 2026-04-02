const fs = require('fs');
const langs = ['en', 'ja', 'es', 'fr', 'de'];

function readJSON(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }
function writeJSON(p, d) { fs.writeFileSync(p, JSON.stringify(d, null, 4).replace(/\n/g, '\r\n') + '\r\n'); }

const translations = {
    'day2_4_night': {
        remove: ['night2_flashback_6_ins', 'night2_flashback_6_ins2'],
        changes: {
            'night2_msg_dain_general': {
                en: "Hey~ let's go to the store tomorrow! Still bummed we couldn't go today!",
                ja: 'ねえ〜明日売店行こうよ！今日行けなかったの、まだ悔しい！',
                es: '¡Oye~ vamos a la tienda mañana! ¡Todavía me da rabia no haber ido hoy!',
                fr: "Hé~ on va à la boutique demain ! Je suis encore dégoûtée qu'on n'y soit pas allés aujourd'hui !",
                de: 'Hey~ lass uns morgen zum Laden gehen! Ich bin immer noch sauer, dass wir heute nicht konnten!'
            },
            'night2_msg_dain_general_merge': {
                en: 'Want to come to the rooftop at lunch? The breeze will be nice',
                ja: 'お昼に屋上来る？風が気持ちいいよ',
                es: '¿Quieres subir a la azotea a la hora del almuerzo? Hará buena brisa',
                fr: 'Tu veux monter sur le toit à midi ? Il y aura une bonne brise',
                de: 'Willst du mittags aufs Dach kommen? Der Wind wird schön sein'
            },
            'night2_msg_seo_general_alt': {
                en: "I'll leave the rooftop open tomorrow. Come if you have time",
                ja: '明日屋上開けとくね。時間あったら来て',
                es: 'Mañana dejaré la azotea abierta. Ven si tienes tiempo',
                fr: "Je laisserai le toit ouvert demain. Viens si tu as le temps",
                de: 'Ich lass morgen das Dach offen. Komm, wenn du Zeit hast'
            },
            'night2_msg_yuna_general': {
                en: '...are you coming to the annex tomorrow?',
                ja: '…明日、別館来る？',
                es: '...¿vendrás al anexo mañana?',
                fr: "...tu viendras à l'annexe demain ?",
                de: '...kommst du morgen zum Nebengebäude?'
            },
            'night2_reply_seo_4': {
                en: "I'll leave the rooftop open at lunch. Actually come this time",
                ja: 'お昼に屋上開けとくね。今度は本当に来て',
                es: 'Dejaré la azotea abierta a la hora del almuerzo. Esta vez ven de verdad',
                fr: 'Je laisserai le toit ouvert à midi. Cette fois, viens pour de vrai',
                de: 'Ich lass das Dach mittags offen. Komm diesmal wirklich'
            }
        }
    },
    'day2_3_afterschool': {
        remove: ['after2_yuna_1_ins2', 'after2_yuna_2_ins2', 'after2_yuna_8b_ins2']
    },
    'day2_1_morning': {
        changes: {
            'hidden_homeroom_d2_choice1_a': {
                en: "*pausing briefly* ...Mystery novels. Not the whodunit kind — the ones that trace the motive.",
                ja: '*少し間を置いて* …推理小説。犯人当てじゃなくて——動機を追う方。',
                es: '*haciendo una breve pausa* ...Novelas de misterio. No las de quién lo hizo, sino las que rastrean el motivo.',
                fr: '*marquant une pause* ...Des romans policiers. Pas ceux qui cherchent le coupable — ceux qui traquent le mobile.',
                de: "*kurz innehaltend* ...Kriminalromane. Nicht die Whodunits — die, die dem Motiv nachgehen."
            },
            'hidden_homeroom_d2_choice1_b': {
                en: "*smiling slightly* Yeah? ...That's a nice hobby.",
                ja: '*少し笑って* そう？ …いい趣味だね。',
                es: '*sonriendo ligeramente* ¿Sí? ...Buen pasatiempo.',
                fr: "*souriant légèrement* Ah oui ? ...C'est un bon loisir.",
                de: '*leicht lächelnd* Ja? ...Schönes Hobby.'
            },
            'hidden_homeroom_d2_choice2_b': {
                en: "*waving hand dismissively* Come on, stop that. It's embarrassing. ...Go on, get going.",
                ja: '*手を振って* よしよし、やめて。恥ずかしいから。…ほら、行って。',
                es: '*agitando la mano* Ya, ya, para. Qué vergüenza. ...Anda, vete.',
                fr: "*faisant un geste de la main* Allez, arrête. C'est gênant. ...Allez, file.",
                de: '*abwinkend* Schon gut, schon gut, hör auf. Peinlich. ...Los, ab mit dir.'
            }
        }
    },
    'day2_2_lunch': {
        changes: {
            'lunch2_dain_c3_1': {
                en: "W-what, don't laugh! *breaks soboro bread in half and shoves one piece over* ...Here, just eat this.",
                ja: '何よ、笑うな！ *ソボロパンを半分に割って片方を差し出し* …これでも食べなさいよ。',
                es: '¡Q-qué, no te rías! *parte el pan soboro por la mitad y empuja un trozo* ...Toma, come esto.',
                fr: 'Q-quoi, ris pas ! *casse le pain soboro en deux et en pousse un morceau* ...Tiens, mange ça.',
                de: 'W-was, lach nicht! *bricht das Soboro-Brot in zwei Hälften und schiebt ein Stück rüber* ...Hier, iss das.'
            }
        },
        add: {
            'lunch2_dain_end_nurse_short1': {
                en: { name: 'School Nurse', text: "There, all done. Try not to get hurt next time." },
                ja: { name: '保健の先生', text: 'はい、できた。今度はケガしないで来てね。' },
                es: { name: 'Enfermera', text: 'Listo. La próxima vez, intenta no lastimarte.' },
                fr: { name: 'Infirmière', text: "Voilà, c'est fait. La prochaine fois, essaie de ne pas te blesser." },
                de: { name: 'Schulkrankenschwester', text: 'So, fertig. Versuch nächstes Mal, dich nicht zu verletzen.' }
            },
            'lunch2_dain_end_nurse_short2': {
                en: { name: '{name}', text: "*Got the bandage and left the nurse's office. — It felt more comfortable than it looked from outside.*" },
                ja: { name: '{name}', text: '*絆創膏を貼ってもらって保健室を出た。——外から見るより、ずっと居心地のいい場所だった。*' },
                es: { name: '{name}', text: '*Me puse la venda y salí de la enfermería. — Era más acogedor de lo que parecía desde fuera.*' },
                fr: { name: '{name}', text: "*J'ai mis le pansement et quitté l'infirmerie. — C'était plus accueillant que ça en avait l'air de l'extérieur.*" },
                de: { name: '{name}', text: '*Pflaster drauf und raus aus dem Krankenzimmer. — Es war gemütlicher, als es von außen aussah.*' }
            },
            'lunch2_dain_end_nurse_short3': {
                en: { name: '{name}', text: '*I could probably come back after school.*' },
                ja: { name: '{name}', text: '*放課後にまた来てもいいかもしれない。*' },
                es: { name: '{name}', text: '*Quizás pueda volver después de clases.*' },
                fr: { name: '{name}', text: "*Je pourrais peut-être revenir après les cours.*" },
                de: { name: '{name}', text: '*Vielleicht kann ich nach der Schule nochmal vorbeikommen.*' }
            }
        }
    },
    'day3_2_lunch': {
        changes: {
            'lunch3_expose_honest_4_ins': {
                en: "*Seoyeon's expression changes. — Still calm, but there's an edge to it now.*",
                ja: '*ソヨンの表情が変わる。——落ち着きはそのままだけど、どこか鋭さがある。*',
                es: '*La expresión de Seoyeon cambia. — Sigue tranquila, pero ahora hay algo afilado en ella.*',
                fr: "*L'expression de Seoyeon change. — Toujours calme, mais avec quelque chose de tranchant maintenant.*",
                de: '*Seoyeons Ausdruck verändert sich. — Immer noch ruhig, aber jetzt liegt etwas Scharfes darin.*'
            },
            'lunch3_expose_excuse_4': {
                en: "*Dain turns her head away. She hasn't touched her soboro bread.*",
                ja: '*ダインが顔を背ける。ソボロパンに一口も手をつけていない。*',
                es: '*Dain gira la cabeza. No ha tocado su pan soboro.*',
                fr: "*Dain détourne la tête. Elle n'a pas touché à son pain soboro.*",
                de: '*Dain dreht den Kopf weg. Sie hat ihr Soboro-Brot nicht angerührt.*'
            }
        }
    },
    'day1_2_lunch': {
        changes: {
            'lunch_dain_1_aff_high': {
                en: "Hey!! Over here!! *slaps the seat* Your intro was hilarious lol sit with me!",
                ja: 'やっ！！こっちこっち！！ *席をバンと叩いて* さっきの自己紹介マジ面白かったｗｗ一緒に食べよ！',
                es: '¡¡Ey!! ¡¡Aquí aquí!! *golpea el asiento* ¡Tu presentación fue buenísima jaja siéntate conmigo!',
                fr: 'Hé !! Par ici !! *tape sur la chaise* Ton intro était trop drôle mdr mange avec moi !',
                de: 'Hey!! Hier hier!! *klopft auf den Platz* Deine Vorstellung war echt witzig lol setz dich zu mir!'
            }
        }
    },
    'day3_3_afterschool': {
        changes: {
            'after3_reject_for_dain_2': {
                en: "...I have some things to do today. I'll head out first.",
                ja: '…今日はちょっとやることがあって。先に行くね。',
                es: '...Hoy tengo cosas que hacer. Me adelanto.',
                fr: "...J'ai des trucs à faire aujourd'hui. Je pars devant.",
                de: '...Ich hab heute noch was zu erledigen. Ich geh schon mal vor.'
            }
        }
    },
    'day1_3_afterschool': {
        changes: {
            'after_nurse_enter_12_ins2': {
                en: "*I look at the bandage on my hand. — That was a strange nurse's office. The good kind of strange.*",
                ja: '*手の甲の絆創膏を見る。——変な保健室だった。悪くない種類の変さ。*',
                es: '*Miro la venda en mi mano. — Qué enfermería tan rara. El tipo bueno de rareza.*',
                fr: "*Je regarde le pansement sur ma main. — Une drôle d'infirmerie. Le bon genre de drôle.*",
                de: '*Ich schaue auf das Pflaster an meiner Hand. — Ein seltsames Krankenzimmer. Die gute Art von seltsam.*'
            }
        }
    },
    'day4_3_afterschool': {
        add: {
            'confess_dain_no_4_nurse_skip': {
                en: { name: '{name}', text: "*I had my last consultation at the nurse's office this morning. — Her glistening eyes are still stuck in my head.*" },
                ja: { name: '{name}', text: '*今朝、保健室で最後の相談をした。——先生の潤んだ目がまだ頭から離れない。*' },
                es: { name: '{name}', text: '*Esta mañana tuve mi última consulta en la enfermería. — Sus ojos brillantes aún no se me van de la cabeza.*' },
                fr: { name: '{name}', text: "*J'ai eu ma dernière consultation à l'infirmerie ce matin. — Ses yeux brillants sont encore gravés dans ma tête.*" },
                de: { name: '{name}', text: '*Heute Morgen hatte ich meine letzte Beratung im Krankenzimmer. — Ihre feuchten Augen gehen mir nicht aus dem Kopf.*' }
            }
        }
    }
};

let total = 0;
for (const [file, config] of Object.entries(translations)) {
    for (const lang of langs) {
        const path = `assets/js/i18n/${lang}/${file}.json`;
        if (!fs.existsSync(path)) { console.log(`  SKIP: ${path}`); continue; }

        let data = readJSON(path);
        let count = 0;

        if (config.remove) {
            for (const id of config.remove) {
                if (data[id]) { delete data[id]; count++; }
            }
        }

        if (config.changes) {
            for (const [id, texts] of Object.entries(config.changes)) {
                if (data[id] && texts[lang]) {
                    data[id].text = texts[lang];
                    if (id === 'lunch3_expose_honest_4_ins') {
                        data[id].name = '{name}';
                    }
                    count++;
                }
            }
        }

        if (config.add) {
            for (const [id, texts] of Object.entries(config.add)) {
                if (texts[lang]) {
                    data[id] = texts[lang];
                    count++;
                }
            }
        }

        if (count > 0) {
            writeJSON(path, data);
            total += count;
            console.log(`  ${lang}/${file}.json: ${count} changes`);
        }
    }
}

console.log(`\nTotal i18n changes across 5 languages: ${total}`);
console.log('Done!');
