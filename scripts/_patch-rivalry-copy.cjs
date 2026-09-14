'use strict';

const fs = require('fs');
const path = require('path');

const day4 = {
    ja: {
        seoyeon: '落ち着いた口調で胸の上の手を覆ったまま確かめる。相手が離さなければその手をさらに導く。別の約束に取られるのが怖くて手を離さない。大声で要求したり別人になったりしない。その接触を否定しない。',
        yuna: '言葉は短くする。先に近づいて服を押しのける。また一人になるのが怖くて、他の子に取られる前にさらに寄り添う。その接触を否定しない。',
        dain: '冗談みたいに正直に手をユニフォームの中へ入れる。反応があればもっと露骨に進む。別の約束に取られたくない気持ちは隠さない。痛む膝は無視しない。その接触を否定しない。'
    },
    es: {
        seoyeon: 'Conserva la voz serena con la mano sobre su pecho. Si no la apartan, guía esa mano más. No suelta la mano porque teme perderlo ante la otra promesa. No grites exigencias ni te vuelvas otra persona. No niegues ese contacto.',
        yuna: 'Habla poco. Se acerca primero y aparta la ropa. Se pega más porque teme quedarse sola otra vez, que se lo lleve la otra. No niegues ese contacto.',
        dain: 'Mete la mano en el uniforme como una broma clara y, si responden, sigue más directo. No esconde que odia perderlo ante la otra promesa. No ignores la rodilla si duele. No niegues ese contacto.'
    },
    fr: {
        seoyeon: 'Garde sa voix calme, la main sur sa poitrine. S’ils ne la retirent pas, guide cette main plus loin. Elle ne lâche pas, de peur de le perdre au profit de l’autre promesse. Ne crie pas d’ordres et ne deviens pas quelqu’un d’autre. Ne nie pas ce contact.',
        yuna: 'Parle peu. S’approche d’abord et écarte les vêtements. Elle se colle davantage de peur de se retrouver seule, de le perdre à l’autre. Ne nie pas ce contact.',
        dain: 'Glisse la main dans le maillot comme une plaisanterie franche et, s’ils répondent, va plus loin. Elle ne cache pas qu’elle refuse de le perdre au profit de l’autre promesse. N’ignore pas un genou qui fait mal. Ne nie pas ce contact.'
    },
    de: {
        seoyeon: 'Bewahre die ruhige Stimme über der Hand auf ihrer Brust. Wird sie nicht weggezogen, führe sie weiter. Sie lässt nicht los, weil sie Angst hat, ihn an das andere Versprechen zu verlieren. Schreie keine Forderungen und werde nicht jemand anders. Leugne diesen Kontakt nicht.',
        yuna: 'Halte die Sätze kurz. Tritt zuerst näher und schiebt die Kleidung beiseite. Sie klammert fester, weil sie Angst hat, wieder allein zu sein, ihn an die andere zu verlieren. Leugne diesen Kontakt nicht.',
        dain: 'Steck die Hand wie einen ehrlichen Scherz ins Trikot und geh weiter, wenn er reagiert. Sie versteckt nicht, dass sie ihn nicht an das andere Versprechen verlieren will. Ignoriere kein schmerzendes Knie. Leugne diesen Kontakt nicht.'
    },
    pt: {
        seoyeon: 'Mantenha a voz calma com a mão no peito. Se não tirarem, guia essa mão mais. Ela não solta porque tem medo de perdê-lo para a outra promessa. Não grite pedidos nem vire outra pessoa. Não negue esse contato.',
        yuna: 'Fale pouco. Chegue primeiro e afaste a roupa. Ela se cola mais porque tem medo de ficar sozinha de novo, de perdê-lo para a outra. Não negue esse contato.',
        dain: 'Enfia a mão na camisa como uma brincadeira direta e, se responderem, vai mais longe. Ela não esconde que odeia perdê-lo para a outra promessa. Não ignore o joelho se doer. Não negue esse contato.'
    }
};

const day5 = {
    ja: {
        from: '二人は互いに反論や返答をしてもよいが、主人公を外して二人だけで結論を出さない。',
        to: '二人の仲は良くない。互いに味方したり慰めたり、片方が主人公だけを問い詰める構図にしない。一途に向き合われていた側は誘惑した側にも、先に奪っただろうと直接詰め寄る。誘惑した側は謝りつつも譲らず、気勢で対抗する。主人公を外して二人だけで仲直りしたり結論を出したりしない。'
    },
    es: {
        from: 'Pueden contradecirse o responderse, pero no excluyen al protagonista ni deciden la relación entre ellas.',
        to: 'No se llevan bien. No se cubren, no se consuelan ni forman un frente que solo interroga al protagonista. La persona traicionada también le echa en cara a quien lo tentó: tú lo quitaste primero. Quien lo tentó admite la culpa pero no cede ni se pone de su lado. No dejan al protagonista fuera para arreglarlo entre ellas.'
    },
    fr: {
        from: 'Elles peuvent se répondre ou se contredire, mais n’écartent pas le protagoniste et ne tranchent pas la relation entre elles.',
        to: 'Elles ne s’entendent pas. Elles ne se soutiennent pas, ne se consolent pas et ne forment pas un front qui n’interroge que le protagoniste. La personne trahie s’en prend aussi à celle qui l’a tenté : tu l’as pris le premier. Celle qui l’a tenté admet la faute mais ne cède pas et ne devient pas son alliée. Elles n’écartent pas le protagoniste pour régler ça entre elles.'
    },
    de: {
        from: 'Sie dürfen einander widersprechen oder antworten, entscheiden die Beziehung aber nicht ohne den Protagonisten unter sich.',
        to: 'Sie stehen sich nicht gut. Sie halten nicht zusammen, trösten sich nicht und bilden keine Front, die nur den Protagonisten verhört. Die betrogene Seite stellt auch die Verführerin: Du hast ihn zuerst genommen. Die Verführerin gibt Schuld zu, knickt aber nicht ein und wird nicht zur Verbündeten. Sie lassen den Protagonisten nicht außen vor, um es unter sich zu klären.'
    },
    pt: {
        from: 'Podem se contradizer ou se responder, mas não deixam o protagonista de fora nem decidem a relação entre elas.',
        to: 'Elas não estão bem uma com a outra. Não se defendem, não se consolam nem viram um time que só cobra o protagonista. Quem foi traída também encara quem tentou: você tirou ele primeiro. Quem tentou admite a culpa, mas não cede nem vira aliada. Não deixam o protagonista de fora para acertar entre elas.'
    }
};

for (const lang of Object.keys(day4)) {
    const file = path.join(__dirname, '..', 'assets/js/i18n', lang, 'day4_4_night.json');
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const who of Object.keys(day4[lang])) {
        data[`day4_temptation_${who}_freetalk`].personality = day4[lang][who];
    }
    fs.writeFileSync(file, `${JSON.stringify(data, null, 4)}\n`);
}

for (const lang of Object.keys(day5)) {
    const file = path.join(__dirname, '..', 'assets/js/i18n', lang, 'day5_1_morning.json');
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const scene = data.morning5_counteroffer_group_talk;
    if (!scene.personality.includes(day5[lang].from)) {
        console.warn('day5 anchor miss', lang, scene.personality.slice(-200));
    } else {
        scene.personality = scene.personality.replace(day5[lang].from, day5[lang].to);
    }
    fs.writeFileSync(file, `${JSON.stringify(data, null, 4)}\n`);
    console.log('updated', lang);
}
