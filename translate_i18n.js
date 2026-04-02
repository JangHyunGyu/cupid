const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'assets', 'js', 'i18n');

const updates = {
    "day2_2_lunch.json": {
        "lunch2_dain_end_ins4_first": {
            "en": "*I open the door to the nurse's office. An unfamiliar scent of antiseptic tickles my nose.*",
            "ja": "*保健室のドアを開ける。見慣れない消毒薬の匂いが鼻をかすめる。*",
            "es": "*Abro la puerta de la enfermería. Un olor desconocido a antiséptico me hace cosquillas en la nariz.*",
            "fr": "*J'ouvre la porte de l'infirmerie. Une odeur inconnue d'antiseptique me chatouille le nez.*",
            "de": "*Ich öffne die Tür zum Krankenzimmer. Ein ungewohnter Geruch nach Antiseptikum kitzelt mir in der Nase.*"
        },
        "lunch2_dain_end_ins5_first": {
            "en": "*Inside the nurse's office. Documents are piled on the desk, and the nurse is sitting in her chair.*",
            "ja": "*保健室の中。机の上に書類が積まれ、保健室の先生が椅子に座っている。*",
            "es": "*Dentro de la enfermería. Hay documentos apilados en el escritorio y la enfermera está sentada en su silla.*",
            "fr": "*À l'intérieur de l'infirmerie. Des documents sont empilés sur le bureau, et l'infirmière est assise sur sa chaise.*",
            "de": "*Im Krankenzimmer. Dokumente stapeln sich auf dem Schreibtisch, und die Krankenschwester sitzt auf ihrem Stuhl.*"
        },
        "lunch2_dain_end_ins7_first": {
            "en": "...Oh? You're the one from earlier. What brings you here during lunch?",
            "ja": "…あれ？さっきの。昼休みになんの用？",
            "es": "...¿Oh? Eres el de antes. ¿Qué te trae por aquí durante el almuerzo?",
            "fr": "...Oh ? Tu es celui de tout à l'heure. Qu'est-ce qui t'amène ici pendant le déjeuner ?",
            "de": "...Oh? Du bist der von vorhin. Was führt dich während der Mittagspause hierher?"
        },
        "lunch2_dain_end_ins8_first": {
            "en": "You look better than you did this morning. That's a relief.",
            "ja": "朝よりは顔色がいいみたいね。よかった。",
            "es": "Te ves mejor que esta mañana. Es un alivio.",
            "fr": "Tu as meilleure mine que ce matin. C'est un soulagement.",
            "de": "Du siehst besser aus als heute Morgen. Das ist beruhigend."
        }
    },
    "day2_3_afterschool.json": {
        "after2_dain_end_first": {
            "en": "*Her eyes curve into half-moons. — This is how she looks when she's genuinely having fun.*",
            "ja": "*目が半月型になっている。—この人は本当に楽しい時、こんな顔をするんだな。*",
            "es": "*Sus ojos se curvan en medias lunas. — Así es como se ve cuando realmente se divierte.*",
            "fr": "*Ses yeux se rident en demi-lunes. — C'est comme ça qu'elle est quand elle s'amuse vraiment.*",
            "de": "*Ihre Augen biegen sich zu Halbmonden. — So sieht sie aus, wenn sie wirklich Spaß hat.*"
        }
    },
    "day3_3_afterschool.json": {
        "after3_dain_end_check": {
            "en": "*Dain lightly punches my shoulder.*",
            "ja": "*ダインが軽く肩をパンチしてくる。*",
            "es": "*Dain me golpea suavemente en el hombro.*",
            "fr": "*Dain me donne un léger coup de poing sur l'épaule.*",
            "de": "*Dain schlägt mir leicht auf die Schulter.*"
        },
        "after3_dain_end_first": {
            "en": "*Dain lightly punches my shoulder. — She seems embarrassed.*",
            "ja": "*ダインが軽く肩をパンチしてくる。—照れ隠しみたいだ。*",
            "es": "*Dain me golpea suavemente en el hombro. — Parece avergonzada.*",
            "fr": "*Dain me donne un léger coup de poing sur l'épaule. — Elle a l'air gênée.*",
            "de": "*Dain schlägt mir leicht auf die Schulter. — Sie scheint verlegen zu sein.*"
        }
    },
    "day5_4_night.json": {
        "hidden_true_nurse_7_ins": {
            "en": "*The nurse reaches out and touches the band-aid on the back of my hand. The same band-aid she put on this morning.*",
            "ja": "*保健室の先生が手を伸ばして、私の手の甲の絆創膏に触れる。今朝貼ってくれた絆創膏だ。*",
            "es": "*La enfermera extiende la mano y toca la tirita en el dorso de mi mano. La misma tirita que me puso esta mañana.*",
            "fr": "*L'infirmière tend la main et touche le pansement sur le dos de ma main. Le même pansement qu'elle a mis ce matin.*",
            "de": "*Die Krankenschwester streckt die Hand aus und berührt das Pflaster auf meinem Handrücken. Dasselbe Pflaster, das sie heute Morgen aufgeklebt hat.*"
        }
    }
};

const langs = ['en', 'ja', 'es', 'fr', 'de'];

for (const file in updates) {
    for (const lang of langs) {
        const filePath = path.join(i18nPath, lang, file);
        if (fs.existsSync(filePath)) {
            let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            let modified = false;

            for (const key in updates[file]) {
                if (data[key]) {
                    data[key].text = updates[file][key][lang];
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
                console.log(`Updated ${file} in ${lang}`);
            }
        }
    }
}
