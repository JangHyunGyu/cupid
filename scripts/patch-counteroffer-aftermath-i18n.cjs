'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const langs = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];

const N = {
    ko: { n: '{name}', seo: '서연', yuna: '유나', dain: '다인', teacher: '담임선생님', nurse: '보건선생님' },
    en: { n: '{name}', seo: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', teacher: 'Homeroom Teacher', nurse: 'School Nurse' },
    ja: { n: '{name}', seo: 'ソヨン', yuna: 'ユナ', dain: 'ダイン', teacher: '担任の先生', nurse: '保健室の先生' },
    es: { n: '{name}', seo: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', teacher: 'Profesora', nurse: 'Enfermera' },
    fr: { n: '{name}', seo: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', teacher: 'Professeure principale', nurse: 'Infirmière' },
    de: { n: '{name}', seo: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', teacher: 'Klassenlehrerin', nurse: 'Schulkrankenschwester' },
    pt: { n: '{name}', seo: 'Seoyeon', yuna: 'Yuna', dain: 'Dain', teacher: 'Professora', nurse: 'Enfermeira' }
};

function row(name, text) {
    return { name, text };
}

const files = {
    day5_1_morning: {},
    day5_2_lunch: {},
    day5_3_afterschool: {},
    day5_4_night: {}
};

function put(file, id, byLang) {
    files[file][id] = byLang;
}

function empty(file, id) {
    const blank = {};
    for (const lang of langs) blank[lang] = {};
    put(file, id, blank);
}

empty('day5_1_morning', 'morning5_after_counteroffer_hidden_check');
empty('day5_1_morning', 'hidden_nurse_d5_after_co_check');
empty('day5_2_lunch', 'tour_co_branch');
empty('day5_3_afterschool', 'after5_co_abandoned_branch');
empty('day5_3_afterschool', 'after5_co_tempter_branch');
empty('day5_4_night', 'ending_counteroffer_bitter');

put('day5_1_morning', 'morning5_after_counteroffer', {
    ko: row(N.ko.n, '*조회 종이 한 장이 교탁에서 미끄러진다. 집어 드는 손은 없다. 행사 안내 방송이 먼저 나온다.*'),
    en: row(N.en.n, '*A morning notice slides off the desk. No one picks it up. The event announcement comes first.*'),
    ja: row(N.ja.n, '*朝礼の紙が一枚、教卓から滑り落ちる。拾う手はない。行事の放送が先に流れる。*'),
    es: row(N.es.n, '*Un aviso se resbala del escritorio. Nadie lo recoge. El anuncio del evento suena antes.*'),
    fr: row(N.fr.n, '*Une feuille d’appel glisse du bureau. Personne ne la ramasse. L’annonce de la fête passe d’abord.*'),
    de: row(N.de.n, '*Ein Zettel rutscht vom Pult. Niemand hebt ihn auf. Die Ansage zur Veranstaltung kommt zuerst.*'),
    pt: row(N.pt.n, '*Um aviso escorrega da mesa. Ninguém o apanha. O anúncio do evento soa primeiro.*')
});

put('day5_2_lunch', 'tour_co_event_1', {
    ko: row(N.ko.n, '*점심 종은 울렸는데 줄은 짧다. 도시락 뚜껑을 열었다 닫는 소리가 복도에 남는다.*'),
    en: row(N.en.n, '*The lunch bell rings, but the line is short. Lids open and close in the hallway.*'),
    ja: row(N.ja.n, '*昼のチャイムは鳴ったのに列は短い。弁当の蓋を開けて閉じる音が廊下に残る。*'),
    es: row(N.es.n, '*Suena el timbre del almuerzo, pero la fila es corta. En el pasillo se oyen tapas que se abren y se cierran.*'),
    fr: row(N.fr.n, '*La sonnerie du déjeuner retentit, mais la file est courte. Dans le couloir, des couvercles s’ouvrent et se referment.*'),
    de: row(N.de.n, '*Die Mittagsglocke geht, die Schlange bleibt kurz. Im Flur klappen Deckel auf und zu.*'),
    pt: row(N.pt.n, '*O sinal do almoço toca, mas a fila é curta. Tampas abrem e fecham no corredor.*')
});
put('day5_2_lunch', 'tour_co_event_2', {
    ko: row(N.ko.n, '*행사 조끼가 의자 등받이에 걸쳐 있다. 누가 입었는지는 묻지 않는다.*'),
    en: row(N.en.n, '*A staff vest hangs on a chair. No one asks who wore it.*'),
    ja: row(N.ja.n, '*行事用のベストが椅子の背に掛かっている。誰が着たかは聞かない。*'),
    es: row(N.es.n, '*Un chaleco del evento cuelga de una silla. Nadie pregunta quién lo llevó.*'),
    fr: row(N.fr.n, '*Un gilet de staff est posé sur un dossier. Personne ne demande qui l’a porté.*'),
    de: row(N.de.n, '*Eine Helferweste hängt über einer Stuhllehne. Niemand fragt, wer sie anhatte.*'),
    pt: row(N.pt.n, '*Um colete do evento está no encosto da cadeira. Ninguém pergunta quem o vestiu.*')
});
put('day5_2_lunch', 'tour_co_seo_1', {
    ko: row(N.ko.n, '*옥상 문은 열려 있다. 서연은 난간 대신 문틀에 기대 있다.*'),
    en: row(N.en.n, '*The rooftop door is open. Seoyeon leans on the frame, not the rail.*'),
    ja: row(N.ja.n, '*屋上の扉は開いている。ソヨンは手すりではなく、枠に寄りかかっている。*'),
    es: row(N.es.n, '*La puerta de la azotea está abierta. Seoyeon se apoya en el marco, no en la baranda.*'),
    fr: row(N.fr.n, '*La porte du toit est ouverte. Seoyeon s’appuie sur le chambranle, pas sur la rambarde.*'),
    de: row(N.de.n, '*Die Dachtür steht offen. Seoyeon lehnt am Rahmen, nicht am Geländer.*'),
    pt: row(N.pt.n, '*A porta do terraço está aberta. A Seoyeon encosta-se à ombreira, não ao parapeito.*')
});
put('day5_2_lunch', 'tour_co_seo_2', {
    ko: row(N.ko.seo, '열쇠는 반납했어. 오늘은 여기까지만.'),
    en: row(N.en.seo, 'I turned the key in. This is as far as today goes.'),
    ja: row(N.ja.seo, '鍵は返した。今日はここまで。'),
    es: row(N.es.seo, 'Ya devolví la llave. Por hoy, hasta aquí.'),
    fr: row(N.fr.seo, 'J’ai rendu la clé. Pour aujourd’hui, ça s’arrête là.'),
    de: row(N.de.seo, 'Den Schlüssel habe ich abgegeben. Mehr wird heute nicht.'),
    pt: row(N.pt.seo, 'Já entreguei a chave. Por hoje, fica por aqui.')
});
put('day5_2_lunch', 'tour_co_seo_3', {
    ko: row(N.ko.n, '*클립보드 모서리가 문틀에 부딪힌다. 서연은 고치지 않는다.*'),
    en: row(N.en.n, '*The clipboard knocks the doorframe. She leaves it.*'),
    ja: row(N.ja.n, '*クリップボードの角が枠に当たる。ソヨンは直さない。*'),
    es: row(N.es.n, '*La esquina del portapapeles golpea el marco. No lo acomoda.*'),
    fr: row(N.fr.n, '*Le coin du presse-papiers cogne le chambranle. Elle n’y touche pas.*'),
    de: row(N.de.n, '*Die Klemmbrettkante stößt gegen den Rahmen. Sie richtet sie nicht.*'),
    pt: row(N.pt.n, '*O canto da prancheta bate na ombreira. Ela não endireita.*')
});
put('day5_2_lunch', 'tour_co_yuna_1', {
    ko: row(N.ko.n, '*별관 소파. 유나는 책 대신 가방 끈을 감는다.*'),
    en: row(N.en.n, '*The annex sofa. Yuna winds a bag strap instead of opening a book.*'),
    ja: row(N.ja.n, '*別館のソファ。ユナは本の代わりに、バッグの紐を巻いている。*'),
    es: row(N.es.n, '*El sofá del anexo. Yuna enrolla la correa del bolso en vez de abrir un libro.*'),
    fr: row(N.fr.n, '*Le canapé de l’annexe. Yuna enroule la sangle du sac au lieu d’ouvrir un livre.*'),
    de: row(N.de.n, '*Das Sofa im Anbau. Yuna wickelt einen Taschenriemen, statt ein Buch aufzuschlagen.*'),
    pt: row(N.pt.n, '*O sofá do anexo. A Yuna enrola a alça da mala em vez de abrir um livro.*')
});
put('day5_2_lunch', 'tour_co_yuna_2', {
    ko: row(N.ko.yuna, '결말은 안 보여 줄래. 오늘은.'),
    en: row(N.en.yuna, 'I am not showing the ending. Not today.'),
    ja: row(N.ja.yuna, '結末は見せない。今日は。'),
    es: row(N.es.yuna, 'No voy a enseñarte el final. Hoy no.'),
    fr: row(N.fr.yuna, 'Je ne montrerai pas la fin. Pas aujourd’hui.'),
    de: row(N.de.yuna, 'Das Ende zeige ich nicht. Heute nicht.'),
    pt: row(N.pt.yuna, 'Não mostro o final. Hoje não.')
});
put('day5_2_lunch', 'tour_co_yuna_3', {
    ko: row(N.ko.n, '*창틈 빛이 빈 자리까지 온다. 유나는 그쪽으로 앉지 않는다.*'),
    en: row(N.en.n, '*Light from the window reaches the empty seat. Yuna does not sit there.*'),
    ja: row(N.ja.n, '*窓の光が空いた席まで届く。ユナはそちらに座らない。*'),
    es: row(N.es.n, '*La luz de la ventana llega al asiento vacío. Yuna no se sienta ahí.*'),
    fr: row(N.fr.n, '*La lumière de la fenêtre atteint la place vide. Yuna ne s’y assoit pas.*'),
    de: row(N.de.n, '*Licht vom Fenster reicht bis zum leeren Platz. Yuna setzt sich nicht dorthin.*'),
    pt: row(N.pt.n, '*A luz da janela chega ao lugar vazio. A Yuna não se senta ali.*')
});
put('day5_2_lunch', 'tour_co_dain_1', {
    ko: row(N.ko.n, '*체육관 불은 켜져 있다. 공은 보관함 안에 있다.*'),
    en: row(N.en.n, '*The gym lights are on. The ball stays in the bin.*'),
    ja: row(N.ja.n, '*体育館の明かりはついている。ボールは棚の中だ。*'),
    es: row(N.es.n, '*Las luces del gimnasio están encendidas. El balón sigue en el cajón.*'),
    fr: row(N.fr.n, '*Les lumières du gymnase sont allumées. Le ballon reste dans le coffre.*'),
    de: row(N.de.n, '*Im Gym ist Licht. Der Ball bleibt in der Kiste.*'),
    pt: row(N.pt.n, '*As luzes do pavilhão estão acesas. A bola fica no caixote.*')
});
put('day5_2_lunch', 'tour_co_dain_2', {
    ko: row(N.ko.dain, '가위바위보는 내일. 오늘은 그냥 서 있을게.'),
    en: row(N.en.dain, 'Rock-paper-scissors can wait. I am just standing today.'),
    ja: row(N.ja.dain, 'じゃんけんは明日。今日は立ってるだけ。'),
    es: row(N.es.dain, 'Piedra, papel o tijera, mañana. Hoy me quedo de pie.'),
    fr: row(N.fr.dain, 'Pierre-feuille-ciseaux, demain. Aujourd’hui je reste debout.'),
    de: row(N.de.dain, 'Schnick-schnack-schnuck morgen. Heute stehe ich nur.'),
    pt: row(N.pt.dain, 'Pedra, papel, tesoura fica para amanhã. Hoje fico só de pé.')
});
put('day5_2_lunch', 'tour_co_dain_3', {
    ko: row(N.ko.n, '*다인이 손목 보호대 끝을 한 번 잡아당겼다가 놓는다.*'),
    en: row(N.en.n, '*Dain tugs the wrist wrap once and lets it go.*'),
    ja: row(N.ja.n, '*ダインがリストバンドの端を一度引っ張って、放す。*'),
    es: row(N.es.n, '*Dain tira una vez de la muñequera y la suelta.*'),
    fr: row(N.fr.n, '*Dain tire une fois sur le bandeau de poignet, puis le lâche.*'),
    de: row(N.de.n, '*Dain zieht einmal am Handgelenkband und lässt los.*'),
    pt: row(N.pt.n, '*A Dain puxa a fita do pulso uma vez e larga.*')
});

put('day5_3_afterschool', 'after5_co_start', {
    ko: row(N.ko.n, '*행사가 끝난다. 복도에 남은 사람은 아침과 같은 얼굴들이다.*'),
    en: row(N.en.n, '*The event winds down. The faces left in the hallway are the same ones from this morning.*'),
    ja: row(N.ja.n, '*行事が終わる。廊下に残っているのは、朝と同じ顔だ。*'),
    es: row(N.es.n, '*El evento se acaba. En el pasillo quedan las mismas caras de esta mañana.*'),
    fr: row(N.fr.n, '*La fête se termine. Dans le couloir, ce sont les mêmes visages que ce matin.*'),
    de: row(N.de.n, '*Die Veranstaltung endet. Im Flur stehen dieselben Gesichter wie heute Morgen.*'),
    pt: row(N.pt.n, '*O evento acaba. No corredor ficam as mesmas caras da manhã.*')
});
put('day5_3_afterschool', 'after5_co_seo_1', {
    ko: row(N.ko.seo, '*안경을 올렸다가 내린다.* 일정표는 다 돌렸어.'),
    en: row(N.en.seo, '*She pushes her glasses up, then down.* I already handed out the schedule.'),
    ja: row(N.ja.seo, '*眼鏡を上げて、下ろす。* 時間割は配り終わった。'),
    es: row(N.es.seo, '*Se sube las gafas y las baja.* Ya repartí el horario.'),
    fr: row(N.fr.seo, '*Elle relève ses lunettes, puis les redescend.* J’ai déjà fait passer le planning.'),
    de: row(N.de.seo, '*Sie schiebt die Brille hoch und wieder runter.* Den Plan habe ich schon verteilt.'),
    pt: row(N.pt.seo, '*Sobe os óculos e torna a baixá-los.* Já entreguei o horário.')
});
put('day5_3_afterschool', 'after5_co_seo_2', {
    ko: row(N.ko.seo, '오늘은 더 말할 자리 없어. 가.'),
    en: row(N.en.seo, 'There is no room left to talk today. Go.'),
    ja: row(N.ja.seo, '今日は、これ以上話す場所がない。行って。'),
    es: row(N.es.seo, 'Hoy no queda sitio para hablar más. Vete.'),
    fr: row(N.fr.seo, 'Aujourd’hui, il n’y a plus de place pour parler. Va.'),
    de: row(N.de.seo, 'Heute ist kein Platz mehr zum Reden. Geh.'),
    pt: row(N.pt.seo, 'Hoje não há sítio para falar mais. Vai.')
});
put('day5_3_afterschool', 'after5_co_yuna_1', {
    ko: row(N.ko.yuna, '*책갈피를 가방에 넣는다.* 게시판은 비워 뒀어.'),
    en: row(N.en.yuna, '*She puts the bookmark in her bag.* I left the board empty.'),
    ja: row(N.ja.yuna, '*しおりをバッグに入れる。* 掲示板は空けておいた。'),
    es: row(N.es.yuna, '*Mete el marcapáginas en el bolso.* Dejé el tablón vacío.'),
    fr: row(N.fr.yuna, '*Elle range le signet dans son sac.* J’ai laissé le panneau vide.'),
    de: row(N.de.yuna, '*Sie steckt das Lesezeichen in die Tasche.* Das Brett habe ich leer gelassen.'),
    pt: row(N.pt.yuna, '*Mete o marcador na mala.* Deixei o quadro vazio.')
});
put('day5_3_afterschool', 'after5_co_yuna_2', {
    ko: row(N.ko.yuna, '따라오지 마. 오늘은.'),
    en: row(N.en.yuna, 'Do not follow me. Not today.'),
    ja: row(N.ja.yuna, 'ついてこないで。今日は。'),
    es: row(N.es.yuna, 'No me sigas. Hoy no.'),
    fr: row(N.fr.yuna, 'Ne me suis pas. Pas aujourd’hui.'),
    de: row(N.de.yuna, 'Komm nicht hinterher. Heute nicht.'),
    pt: row(N.pt.yuna, 'Não me sigas. Hoje não.')
});
put('day5_3_afterschool', 'after5_co_dain_1', {
    ko: row(N.ko.dain, '*공을 보관함에 밀어 넣는다.* 파트너는 지웠어.'),
    en: row(N.en.dain, '*She shoves the ball into the bin.* I took your name off the partner list.'),
    ja: row(N.ja.dain, '*ボールを棚に押し込む。* ペアの名前、消した。'),
    es: row(N.es.dain, '*Mete el balón en el cajón.* Borré tu nombre de pareja.'),
    fr: row(N.fr.dain, '*Elle pousse le ballon dans le coffre.* J’ai rayé ton nom de partenaire.'),
    de: row(N.de.dain, '*Sie schiebt den Ball in die Kiste.* Den Partner habe ich gestrichen.'),
    pt: row(N.pt.dain, '*Empurra a bola para o caixote.* Risquei o teu nome de par.')
});
put('day5_3_afterschool', 'after5_co_dain_2', {
    ko: row(N.ko.dain, '잘 가. 지금 웃기는 좀 그래.'),
    en: row(N.en.dain, 'See you. Laughing right now is a bit much.'),
    ja: row(N.ja.dain, 'じゃあな。今笑うのは、ちょっと無理。'),
    es: row(N.es.dain, 'Que te vaya bien. Reír ahora se me hace raro.'),
    fr: row(N.fr.dain, 'Va. Là, rire, c’est un peu trop.'),
    de: row(N.de.dain, 'Tschüss. Lachen ist gerade schwierig.'),
    pt: row(N.pt.dain, 'Vai. Rir agora é demais.')
});
put('day5_3_afterschool', 'after5_co_teacher_1', {
    ko: row(N.ko.teacher, '*출석부를 덮는다.* 행사는 다른 선생님이 맡으셨다.'),
    en: row(N.en.teacher, '*She closes the attendance book.* Another teacher has the event.'),
    ja: row(N.ja.teacher, '*出席簿を閉じる。* 行事は、別の先生が見ている。'),
    es: row(N.es.teacher, '*Cierra la lista.* Otro profesor se encarga del evento.'),
    fr: row(N.fr.teacher, '*Elle referme le registre.* Un autre professeur s’occupe de la fête.'),
    de: row(N.de.teacher, '*Sie klappt das Klassenbuch zu.* Die Veranstaltung übernimmt eine andere Lehrkraft.'),
    pt: row(N.pt.teacher, '*Fecha o livro de presenças.* Outro professor ficou com o evento.')
});
put('day5_3_afterschool', 'after5_co_teacher_2', {
    ko: row(N.ko.teacher, '오늘은 교무실로 오지 마.'),
    en: row(N.en.teacher, 'Do not come to the staff room today.'),
    ja: row(N.ja.teacher, '今日は職員室に来ないで。'),
    es: row(N.es.teacher, 'Hoy no vengas a la sala de profesores.'),
    fr: row(N.fr.teacher, 'Ne viens pas en salle des professeurs aujourd’hui.'),
    de: row(N.de.teacher, 'Komm heute nicht ins Lehrerzimmer.'),
    pt: row(N.pt.teacher, 'Hoje não venhas à sala dos professores.')
});
put('day5_3_afterschool', 'after5_co_nurse_1', {
    ko: row(N.ko.nurse, '*진료 기록을 서랍에 넣는다.* 상담은 여기까지야.'),
    en: row(N.en.nurse, '*She puts the chart in a drawer.* That is all for counseling.'),
    ja: row(N.ja.nurse, '*診療記録を引き出しに入れる。* 相談はここまで。'),
    es: row(N.es.nurse, '*Mete la ficha en el cajón.* La orientación se acaba aquí.'),
    fr: row(N.fr.nurse, '*Elle range le dossier dans un tiroir.* L’entretien s’arrête là.'),
    de: row(N.de.nurse, '*Sie legt die Kartei in die Schublade.* Die Beratung ist hier zu Ende.'),
    pt: row(N.pt.nurse, '*Mete o registo na gaveta.* A conversa fica por aqui.')
});
put('day5_3_afterschool', 'after5_co_nurse_2', {
    ko: row(N.ko.nurse, '아프면 다른 선생님한테 가. 오늘은 내가 아니야.'),
    en: row(N.en.nurse, 'If you are hurt, go to someone else. Not me today.'),
    ja: row(N.ja.nurse, '具合が悪ければ、別の先生のところへ。今日は私じゃない。'),
    es: row(N.es.nurse, 'Si te encuentras mal, ve con otro profesor. Hoy no soy yo.'),
    fr: row(N.fr.nurse, 'Si tu as mal, va voir quelqu’un d’autre. Pas moi aujourd’hui.'),
    de: row(N.de.nurse, 'Wenn dir etwas fehlt, geh zu jemand anderem. Heute nicht zu mir.'),
    pt: row(N.pt.nurse, 'Se estiveres mal, vai ter com outro professor. Hoje não sou eu.')
});
put('day5_3_afterschool', 'after5_co_tempter_seo_1', {
    ko: row(N.ko.seo, '*옥상 열쇠고리를 주머니에 넣는다.* 어제 일은 내가 먼저였어.'),
    en: row(N.en.seo, '*She pockets the rooftop keychain.* I went first yesterday.'),
    ja: row(N.ja.seo, '*屋上のキーホルダーをポケットに入れる。* 昨日のことは、私からだった。'),
    es: row(N.es.seo, '*Se guarda el llavero de la azotea.* Ayer empecé yo.'),
    fr: row(N.fr.seo, '*Elle glisse le porte-clés du toit dans sa poche.* Hier, c’est moi qui ai commencé.'),
    de: row(N.de.seo, '*Sie steckt den Dach-Anhänger ein.* Gestern war ich zuerst dran.'),
    pt: row(N.pt.seo, '*Mete o porta-chaves do terraço no bolso.* Ontem fui eu a começar.')
});
put('day5_3_afterschool', 'after5_co_tempter_seo_2', {
    ko: row(N.ko.seo, '그래도 오늘은 붙잡지 않을게.'),
    en: row(N.en.seo, 'I still will not hold you here today.'),
    ja: row(N.ja.seo, 'それでも今日は、引き止めない。'),
    es: row(N.es.seo, 'Aun así, hoy no te voy a retener.'),
    fr: row(N.fr.seo, 'Même comme ça, je ne te retiendrai pas aujourd’hui.'),
    de: row(N.de.seo, 'Trotzdem halte ich dich heute nicht fest.'),
    pt: row(N.pt.seo, 'Mesmo assim, hoje não te seguro.')
});
put('day5_3_afterschool', 'after5_co_tempter_yuna_1', {
    ko: row(N.ko.yuna, '*별관 사진이 잠금화면에 남아 있다.* 내가 불렀어.'),
    en: row(N.en.yuna, '*The annex photo is still on her lock screen.* I called you.'),
    ja: row(N.ja.yuna, '*別館の写真がロック画面に残っている。* 呼んだのは私。'),
    es: row(N.es.yuna, '*La foto del anexo sigue en la pantalla de bloqueo.* Te llamé yo.'),
    fr: row(N.fr.yuna, '*La photo de l’annexe est encore sur l’écran de verrouillage.* C’est moi qui t’ai appelé.'),
    de: row(N.de.yuna, '*Das Foto vom Anbau steht noch auf dem Sperrbildschirm.* Ich habe dich gerufen.'),
    pt: row(N.pt.yuna, '*A foto do anexo ainda está no ecrã de bloqueio.* Fui eu que te chamei.')
});
put('day5_3_afterschool', 'after5_co_tempter_yuna_2', {
    ko: row(N.ko.yuna, '지금은 따라가지 마. 그걸로 돼.'),
    en: row(N.en.yuna, 'Do not come with me now. That is enough.'),
    ja: row(N.ja.yuna, '今はついてこないで。それでいい。'),
    es: row(N.es.yuna, 'Ahora no me acompañes. Con eso basta.'),
    fr: row(N.fr.yuna, 'Ne me suis pas maintenant. Ça suffit.'),
    de: row(N.de.yuna, 'Komm jetzt nicht mit. Das reicht.'),
    pt: row(N.pt.yuna, 'Agora não venhas comigo. Chega.')
});
put('day5_3_afterschool', 'after5_co_tempter_dain_1', {
    ko: row(N.ko.dain, '*무릎 테이프를 한 번 눌러 붙인다.* 어제 남으라고 한 건 나야.'),
    en: row(N.en.dain, '*She presses the tape on her knee.* I was the one who told you to stay yesterday.'),
    ja: row(N.ja.dain, '*膝のテープを一度押さえつける。* 昨日、残れって言ったの、私。'),
    es: row(N.es.dain, '*Presiona la cinta de la rodilla.* Quien te pidió que te quedaras ayer fui yo.'),
    fr: row(N.fr.dain, '*Elle appuie sur le sparadrap du genou.* C’est moi qui t’ai demandé de rester hier.'),
    de: row(N.de.dain, '*Sie drückt das Tape am Knie fest.* Ich habe gestern gesagt, du sollst bleiben.'),
    pt: row(N.pt.dain, '*Carrega na fita do joelho.* Fui eu que ontem te pedi para ficares.')
});
put('day5_3_afterschool', 'after5_co_tempter_dain_2', {
    ko: row(N.ko.dain, '오늘은 먼저 안 부를게.'),
    en: row(N.en.dain, 'I will not call first today.'),
    ja: row(N.ja.dain, '今日は先に呼ばない。'),
    es: row(N.es.dain, 'Hoy no te llamo yo primero.'),
    fr: row(N.fr.dain, 'Aujourd’hui, je n’appellerai pas la première.'),
    de: row(N.de.dain, 'Heute rufe ich nicht zuerst.'),
    pt: row(N.pt.dain, 'Hoje não chamo primeiro.')
});

put('day5_4_night', 'co_bitter_seo_1', {
    ko: row(N.ko.n, '*한 달쯤 지나 카페. 서연은 컵받침을 맞추지 않는다.*'),
    en: row(N.en.n, '*About a month later, a cafe. Seoyeon does not square the coaster.*'),
    ja: row(N.ja.n, '*一か月ほどあと、カフェ。ソヨンはコースターを揃えない。*'),
    es: row(N.es.n, '*Un mes después, en un café. Seoyeon no alinea el posavasos.*'),
    fr: row(N.fr.n, '*Un mois plus tard, un café. Seoyeon n’aligne pas le dessous de verre.*'),
    de: row(N.de.n, '*Etwa einen Monat später, ein Café. Seoyeon rückt den Untersetzer nicht zurecht.*'),
    pt: row(N.pt.n, '*Cerca de um mês depois, num café. A Seoyeon não endireita o descanso.*')
});
put('day5_4_night', 'co_bitter_seo_2', {
    ko: row(N.ko.seo, '그날 알림, 아직도 남아 있어. 지웠는데도.'),
    en: row(N.en.seo, 'That notification is still there. Even after I deleted it.'),
    ja: row(N.ja.seo, 'あの日の通知、まだ残ってる。消したのに。'),
    es: row(N.es.seo, 'Aviso de aquel día. Sigue ahí, aunque lo borré.'),
    fr: row(N.fr.seo, 'Cette notification-là. Elle est encore là, même après l’avoir effacée.'),
    de: row(N.de.seo, 'Die Nachricht von dem Tag. Sie ist noch da, obwohl ich sie gelöscht habe.'),
    pt: row(N.pt.seo, 'O aviso daquele dia. Continua lá, mesmo depois de o apagar.')
});
put('day5_4_night', 'co_bitter_seo_3', {
    ko: row(N.ko.n, '*서연은 일어선 뒤 가방끈만 고쳐 잡는다. 우산은 각자다.*'),
    en: row(N.en.n, '*She stands and only fixes her bag strap. Each of you has your own umbrella.*'),
    ja: row(N.ja.n, '*ソヨンは立ち上がり、バッグの紐だけ直す。傘は別々だ。*'),
    es: row(N.es.n, '*Se levanta y solo acomoda la correa del bolso. Cada uno tiene su paraguas.*'),
    fr: row(N.fr.n, '*Elle se lève et ne fait que remettre la sangle du sac. Chacun a son parapluie.*'),
    de: row(N.de.n, '*Sie steht auf und richtet nur den Taschenriemen. Jeder hat seinen eigenen Schirm.*'),
    pt: row(N.pt.n, '*Levanta-se e só endireita a alça da mala. Cada um tem o seu guarda-chuva.*')
});
put('day5_4_night', 'co_bitter_yuna_1', {
    ko: row(N.ko.n, '*헌책방 앞에서 유나가 먼저 와 있다. 책은 안 들고 있다.*'),
    en: row(N.en.n, '*Yuna is already at the used bookstore. She is not holding a book.*'),
    ja: row(N.ja.n, '*古本屋の前に、ユナが先にいる。本は持っていない。*'),
    es: row(N.es.n, '*Yuna ya está delante de la librería de viejo. No lleva ningún libro.*'),
    fr: row(N.fr.n, '*Yuna est déjà devant la librairie d’occasion. Elle n’a pas de livre.*'),
    de: row(N.de.n, '*Yuna steht schon vor dem Antiquariat. Sie hat kein Buch dabei.*'),
    pt: row(N.pt.n, '*A Yuna já está à porta da livraria usada. Não traz livro nenhum.*')
});
put('day5_4_night', 'co_bitter_yuna_2', {
    ko: row(N.ko.yuna, '별관은 안 가. 그날 이후로.'),
    en: row(N.en.yuna, 'I do not go to the annex. Not since that day.'),
    ja: row(N.ja.yuna, '別館には行かない。あの日から。'),
    es: row(N.es.yuna, 'No voy al anexo. Desde aquel día.'),
    fr: row(N.fr.yuna, 'Je ne vais plus à l’annexe. Plus depuis ce jour-là.'),
    de: row(N.de.yuna, 'Ich geh nicht mehr in den Anbau. Nicht seit dem Tag.'),
    pt: row(N.pt.yuna, 'Não vou ao anexo. Desde aquele dia.')
});
put('day5_4_night', 'co_bitter_yuna_3', {
    ko: row(N.ko.n, '*유나는 고개만 끄덕이고 반대편 골목으로 들어간다.*'),
    en: row(N.en.n, '*Yuna only nods and turns into the alley across the street.*'),
    ja: row(N.ja.n, '*ユナはうなずくだけで、向かいの路地に入る。*'),
    es: row(N.es.n, '*Yuna solo asiente y se mete en el callejón de enfrente.*'),
    fr: row(N.fr.n, '*Yuna se contente d’un signe de tête et s’engage dans la ruelle d’en face.*'),
    de: row(N.de.n, '*Yuna nickt nur und biegt in die Gasse gegenüber ein.*'),
    pt: row(N.pt.n, '*A Yuna só acena e entra no beco do outro lado.*')
});
put('day5_4_night', 'co_bitter_dain_1', {
    ko: row(N.ko.n, '*체육관 바깥. 다인은 공을 들고 있지 않다.*'),
    en: row(N.en.n, '*Outside the gym. Dain is not holding a ball.*'),
    ja: row(N.ja.n, '*体育館の外。ダインはボールを持っていない。*'),
    es: row(N.es.n, '*Fuera del gimnasio. Dain no lleva ningún balón.*'),
    fr: row(N.fr.n, '*Devant le gymnase. Dain n’a pas de ballon.*'),
    de: row(N.de.n, '*Vor der Halle. Dain hat keinen Ball in der Hand.*'),
    pt: row(N.pt.n, '*Fora do pavilhão. A Dain não traz bola.*')
});
put('day5_4_night', 'co_bitter_dain_2', {
    ko: row(N.ko.dain, '그날 파트너, 내가 지운 거 맞지.'),
    en: row(N.en.dain, 'That partner slot. I was the one who crossed it out.'),
    ja: row(N.ja.dain, 'あの日のペア、消したの私だよね。'),
    es: row(N.es.dain, 'La pareja de aquel día. La borré yo, ¿no?'),
    fr: row(N.fr.dain, 'Le binôme de ce jour-là. C’est moi qui l’ai rayé.'),
    de: row(N.de.dain, 'Der Partner von dem Tag. Den habe ich gestrichen.'),
    pt: row(N.pt.dain, 'O par daquele dia. Fui eu que o risquei.')
});
put('day5_4_night', 'co_bitter_dain_3', {
    ko: row(N.ko.n, '*다인이 어깨를 치고 지나간다. 이번엔 주먹이 아니다.*'),
    en: row(N.en.n, '*Dain knocks your shoulder on the way past. It is not a fist bump.*'),
    ja: row(N.ja.n, '*ダインが肩を当てて通り過ぎる。今度は拳じゃない。*'),
    es: row(N.es.n, '*Dain te roza el hombro al pasar. Esta vez no es un puño.*'),
    fr: row(N.fr.n, '*Dain te heurte l’épaule en passant. Ce n’est pas un coup de poing amical.*'),
    de: row(N.de.n, '*Dain streift deine Schulter im Vorbeigehen. Diesmal ist es keine Faust.*'),
    pt: row(N.pt.n, '*A Dain esbarra-te no ombro ao passar. Desta vez não é o punho.*')
});
put('day5_4_night', 'co_bitter_teacher_1', {
    ko: row(N.ko.n, '*졸업 후 복도. 담임은 원고 봉투 없이 서 있다.*'),
    en: row(N.en.n, '*A hallway after graduation. The teacher stands without a manuscript envelope.*'),
    ja: row(N.ja.n, '*卒業後の廊下。先生は原稿の封筒を持っていない。*'),
    es: row(N.es.n, '*Un pasillo después de la graduación. La profesora está sin el sobre del manuscrito.*'),
    fr: row(N.fr.n, '*Un couloir après le diplôme. La professeure se tient là, sans enveloppe de manuscrit.*'),
    de: row(N.de.n, '*Ein Flur nach dem Abschluss. Die Lehrerin steht ohne Manuskriptumschlag da.*'),
    pt: row(N.pt.n, '*Um corredor depois da formatura. A professora está sem o envelope do manuscrito.*')
});
put('day5_4_night', 'co_bitter_teacher_2', {
    ko: row(N.ko.teacher, '그날 화면, 아직도 생각나. 합평 얘기는 여기까지 하자.'),
    en: row(N.en.teacher, 'I still remember that screen. Let us leave the critique talk here.'),
    ja: row(N.ja.teacher, 'あの日の画面、まだ思い出す。合評の話は、ここまでにしよう。'),
    es: row(N.es.teacher, 'Sigo viendo aquella pantalla. Dejemos aquí lo de la crítica.'),
    fr: row(N.fr.teacher, 'Cet écran-là, je m’en souviens encore. Arrêtons là, pour la lecture critique.'),
    de: row(N.de.teacher, 'An den Bildschirm von dem Tag denke ich noch. Die Besprechung lassen wir hier.'),
    pt: row(N.pt.teacher, 'Ainda me lembro daquele ecrã. A conversa da crítica fica por aqui.')
});
put('day5_4_night', 'co_bitter_teacher_3', {
    ko: row(N.ko.n, '*출석부 대신 서류 뭉치가 팔 안에 있다. 담임은 교무실 쪽으로 먼저 걷는다.*'),
    en: row(N.en.n, '*A stack of papers sits in her arm instead of the roll book. She walks toward the staff room first.*'),
    ja: row(N.ja.n, '*出席簿の代わりに、書類の束が腕にある。先生は職員室の方へ先に歩く。*'),
    es: row(N.es.n, '*Lleva un fajo de papeles en vez de la lista. Camina primero hacia la sala de profesores.*'),
    fr: row(N.fr.n, '*Un paquet de papiers a remplacé le registre. Elle part la première vers la salle des professeurs.*'),
    de: row(N.de.n, '*Statt des Klassenbuchs trägt sie einen Stoß Papier. Sie geht zuerst Richtung Lehrerzimmer.*'),
    pt: row(N.pt.n, '*Em vez do livro de presenças, leva um maço de papéis. Anda primeiro para a sala dos professores.*')
});
put('day5_4_night', 'co_bitter_nurse_1', {
    ko: row(N.ko.n, '*보건실 앞. 문은 열려 있고 안은 비어 있다.*'),
    en: row(N.en.n, '*Outside the nurse’s office. The door is open. The room is empty.*'),
    ja: row(N.ja.n, '*保健室の前。扉は開いていて、中は空いている。*'),
    es: row(N.es.n, '*Delante de la enfermería. La puerta está abierta y dentro no hay nadie.*'),
    fr: row(N.fr.n, '*Devant l’infirmerie. La porte est ouverte, la pièce est vide.*'),
    de: row(N.de.n, '*Vor dem Krankenzimmer. Die Tür steht offen, drinnen ist niemand.*'),
    pt: row(N.pt.n, '*À porta da enfermaria. A porta está aberta e lá dentro não está ninguém.*')
});
put('day5_4_night', 'co_bitter_nurse_2', {
    ko: row(N.ko.nurse, '차트는 넘겼어. 그날 일은 기록에 안 남겼고.'),
    en: row(N.en.nurse, 'I passed the chart on. That day is not in the record.'),
    ja: row(N.ja.nurse, 'カルテは回した。あの日のことは、記録に残してない。'),
    es: row(N.es.nurse, 'Pasé la ficha. Aquel día no quedó en el registro.'),
    fr: row(N.fr.nurse, 'J’ai transmis le dossier. Cette journée-là n’est pas dans le registre.'),
    de: row(N.de.nurse, 'Die Kartei habe ich weitergegeben. Der Tag steht nicht in der Akte.'),
    pt: row(N.pt.nurse, 'Passei o processo. Aquele dia não ficou no registo.')
});
put('day5_4_night', 'co_bitter_nurse_3', {
    ko: row(N.ko.n, '*안내 카드 대신 빈 컵이 창가에 있다. 보건선생님은 복도 끝에서 손을 내리지 않는다.*'),
    en: row(N.en.n, '*An empty cup sits on the sill instead of a card. At the end of the hall she does not raise a hand.*'),
    ja: row(N.ja.n, '*案内カードの代わりに、空のコップが窓辺にある。保健室の先生は廊下の先で、手を上げない。*'),
    es: row(N.es.n, '*En el alféizar hay un vaso vacío en vez de una tarjeta. Al fondo del pasillo no levanta la mano.*'),
    fr: row(N.fr.n, '*Un verre vide a remplacé la carte, sur le rebord. Au bout du couloir, elle ne lève pas la main.*'),
    de: row(N.de.n, '*Statt einer Karte steht eine leere Tasse auf der Fensterbank. Am Ende des Flurs hebt sie die Hand nicht.*'),
    pt: row(N.pt.n, '*Em vez do cartão, há um copo vazio no parapeito. Ao fundo do corredor, ela não levanta a mão.*')
});

const dateI18n = {
    ja: {
        date_choice_perfect_seo: { name: 'ソヨン', text: '残りは明日でいいって言った。その前に、今日はどこ行く。', choices: ['屋上。', 'カフェ。'] },
        date_perfect_seo_roof_1: { name: '{name}', text: '*植木の土はまだ濡れている。ソヨンがジョウロを置く。*' },
        date_perfect_seo_roof_2: { name: 'ソヨン', text: '空きは、あなたが選んで。私はもう決めた。' },
        date_perfect_seo_roof_3: { name: '{name}', text: '*扉が開いたまま、風が入る。ソヨンは予定表を折らない。*' },
        date_perfect_seo_cafe_1: { name: '{name}', text: '*窓際。コースターを揃えてから、ソヨンが口を開く。*' },
        date_perfect_seo_cafe_2: { name: 'ソヨン', text: '来週もここ。時間だけ、あなたが決めて。' },
        date_perfect_seo_cafe_3: { name: '{name}', text: '*レシートの裏に数字がある。電話番号じゃない。次に水をやる日だ。*' },
        date_choice_perfect_yuna: { name: 'ユナ', text: '外にも席ある。選ぶ？', choices: ['古本屋。', '屋上。'] },
        date_perfect_yuna_book_1: { name: '{name}', text: '*書架のあいだ。ユナが背表紙だけなぞって、止まる。*' },
        date_perfect_yuna_book_2: { name: '男', text: '……ユナ？ ここに来るとは思わなかった。' },
        date_perfect_yuna_book_3: { name: 'イ・ジュンホ', text: '昔の話だ。言わなくていいと思って。……邪魔した。' },
        date_perfect_yuna_book_4: { name: 'ユナ', text: '*指がしおりに残っている。* 今は{name}といる。それでいい。' },
        date_perfect_yuna_roof_1: { name: '{name}', text: '*秘密の屋上。イヤホンが一本、渡ってくる。*' },
        date_perfect_yuna_roof_2: { name: 'ユナ', text: '三曲目。今度は最初から。' },
        date_perfect_yuna_roof_3: { name: '{name}', text: '*曲が終わっても、ユナはイヤホンを外さない。手が少し近い。*' },
        date_choice_perfect_dain: { name: 'ダイン', text: '今日はコートに上がらなくていい。行きたいところは、あるけど。', choices: ['体育館。', '実況席。'] },
        date_perfect_dain_gym_1: { name: '{name}', text: '*ボールは持っている。ジャンプはない。ダインが先にベンチに座る。*' },
        date_perfect_dain_gym_2: { name: 'ダイン', text: '五分だけ。本当に五分。……十分になっても起こすなよ。' },
        date_perfect_dain_gym_3: { name: '{name}', text: '*ダインの右膝がベンチの外に出ている。体重は左にある。*' },
        date_perfect_dain_booth_1: { name: '{name}', text: '*ヘッドセットが大きい。ダインはスイッチに触れて、切ったままにする。*' },
        date_perfect_dain_booth_2: { name: 'ダイン', text: '言葉で試合を追うの、思ったより息が切れる。でも平気。' },
        date_perfect_dain_booth_3: { name: '{name}', text: '*スコアボードの明かりは消えている。ダインはまだ席にいる。*' },
        date_choice_perfect_teacher: { name: '担任の先生', text: '肩書きなしで歩ける方がある。選ぶなら、どうぞ。', choices: ['カフェ。', '展示。'] },
        date_perfect_teacher_cafe_1: { name: '{name}', text: '*窓の外を見てから、カップを回す。教卓はない。*' },
        date_perfect_teacher_cafe_2: { name: '担任の先生', text: '来週も会うかは、あなたが言って。席は空けてある。' },
        date_perfect_teacher_cafe_3: { name: '{name}', text: '*レシートの下にメモ。時間は空欄で、場所だけ書いてある。*' },
        date_perfect_teacher_museum_1: { name: '{name}', text: '*解説の前では止まらない。横だけ合わせる。*' },
        date_perfect_teacher_museum_2: { name: '担任の先生', text: '説明はあなたが読めばいい。私は隣にいる。' },
        date_perfect_teacher_museum_3: { name: '{name}', text: '*出口の前でバッグの紐を直してくれる。言葉はない。*' },
        date_choice_perfect_nurse: { name: '保健室の先生', text: '記録のない時間が残ってる。家？ 外？', choices: ['家。', '公園。'] },
        date_perfect_nurse_home_1: { name: '{name}', text: '*週末の午前。白衣は掛かっていて、コップだけが二つ。*' },
        date_perfect_nurse_home_2: { name: '保健室の先生', text: '今日はカルテ、開けない。座って。' },
        date_perfect_nurse_home_3: { name: '{name}', text: '*窓が少し開いている。秒針だけが聞こえる。*' },
        date_perfect_nurse_park_1: { name: '{name}', text: '*病院側の道は飛ばした。ベンチが先だった。*' },
        date_perfect_nurse_park_2: { name: '保健室の先生', text: '冗談は家に置いてきた。今はこれでいい。' },
        date_perfect_nurse_park_3: { name: '{name}', text: '*肩に重みが一度乗って、そのまま残る。*' },
        date_choice_true_seo: { name: 'ソヨン', text: '出る前に。短く。', choices: ['カフェ。', '屋上。'] },
        date_true_seo_1: { name: 'ソヨン', text: 'カップはあなたが動かして。私は受け皿だけ揃える。' },
        date_true_seo_2: { name: '{name}', text: '*窓の外をバスが通る。ソヨンは時計を見ない。*' },
        date_true_seo_alt_1: { name: 'ソヨン', text: '水だけやって降りよう。長くいたら見つかる。' },
        date_true_seo_alt_2: { name: '{name}', text: '*植木が一つ空いている。次に買ってこい、という意味だ。*' },
        date_choice_true_yuna: { name: 'ユナ', text: '外か、上か。', choices: ['古本屋。', '屋上。'] },
        date_true_yuna_book_1: { name: 'イ・ジュンホ', text: '……久しぶり。ここで会うとは。' },
        date_true_yuna_book_2: { name: 'ユナ', text: '*{name}の袖を一度つかんで、放す。* 行く。' },
        date_true_yuna_roof_1: { name: 'ユナ', text: '黙って聞いてていい。曲は短い。' },
        date_true_yuna_roof_2: { name: '{name}', text: '*風がイヤホンの線を揺らす。ユナは手すりから降りない。*' },
        date_choice_true_dain: { name: 'ダイン', text: 'ちょっとくっついてて。どこが楽？', choices: ['ベンチ。', '実況席。'] },
        date_true_dain_1: { name: 'ダイン', text: 'ジャンプはしない。座ってるだけ。' },
        date_true_dain_2: { name: '{name}', text: '*ボールが足元まで転がって止まる。ダインは拾わない。*' },
        date_true_dain_alt_1: { name: 'ダイン', text: 'スイッチはいじるだけ。ついてない。' },
        date_true_dain_alt_2: { name: '{name}', text: '*ヘッドセットがテーブルの上で裏返っている。*' },
        date_choice_true_teacher: { name: '担任の先生', text: '授業は終わった。残りはこっち。', choices: ['テーブル。', '展示。'] },
        date_true_teacher_1: { name: '担任の先生', text: '来週はあなたが決めて。私は、最初から断らない。' },
        date_true_teacher_2: { name: '{name}', text: '*コーヒーが冷めるまで、時計を見ない。*' },
        date_true_teacher_alt_1: { name: '担任の先生', text: '説明はパス。隣にいて。' },
        date_true_teacher_alt_2: { name: '{name}', text: '*出口の明かりの下で、バッグの紐が直される。*' },
        date_choice_true_nurse: { name: '保健室の先生', text: 'カルテなしで、どこ行く。', choices: ['家。', 'ベンチ。'] },
        date_true_nurse_1: { name: '保健室の先生', text: '水、つぐよ。薬じゃない。' },
        date_true_nurse_2: { name: '{name}', text: '*シンクの水音が一度して、止まる。*' },
        date_true_nurse_alt_1: { name: '保健室の先生', text: '病院の方は飛ばそう。' },
        date_true_nurse_alt_2: { name: '{name}', text: '*ベンチの剥げた塗りの上に、手が乗る。*' }
    }
};

// es/fr/de/pt afterstory — native copy
dateI18n.es = {
    date_choice_perfect_seo: { name: 'Seoyeon', text: 'Dije que lo demás podía esperar a mañana. Antes, ¿adónde vamos hoy?', choices: ['A la azotea.', 'Al café.'] },
    date_perfect_seo_roof_1: { name: '{name}', text: '*La tierra de la maceta sigue húmeda. Seoyeon deja la regadera.*' },
    date_perfect_seo_roof_2: { name: 'Seoyeon', text: 'El hueco lo eliges tú. Yo ya elegí el mío.' },
    date_perfect_seo_roof_3: { name: '{name}', text: '*El viento entra por la puerta abierta. No dobla el horario.*' },
    date_perfect_seo_cafe_1: { name: '{name}', text: '*Junto a la ventana. Acomoda el posavasos y después habla.*' },
    date_perfect_seo_cafe_2: { name: 'Seoyeon', text: 'La semana que viene, aquí. La hora la pones tú.' },
    date_perfect_seo_cafe_3: { name: '{name}', text: '*Un número al dorso del ticket. No es un teléfono. El próximo día de riego.*' },
    date_choice_perfect_yuna: { name: 'Yuna', text: 'Fuera también hay sitio. Elige.', choices: ['La librería de viejo.', 'La azotea.'] },
    date_perfect_yuna_book_1: { name: '{name}', text: '*Entre las estanterías. Yuna se detiene en un lomo.*' },
    date_perfect_yuna_book_2: { name: 'Hombre', text: '...¿Yuna? No sabía que todavía venías.' },
    date_perfect_yuna_book_3: { name: 'Lee Junho', text: 'Fue hace tiempo. Pensé que no hacía falta decir nada. ...Molesté.' },
    date_perfect_yuna_book_4: { name: 'Yuna', text: '*El dedo se queda en el marcapáginas.* Ahora estoy con {name}. Con eso basta.' },
    date_perfect_yuna_roof_1: { name: '{name}', text: '*La azotea secreta. Cruza un auricular.*' },
    date_perfect_yuna_roof_2: { name: 'Yuna', text: 'La tercera pista. Esta vez desde el principio.' },
    date_perfect_yuna_roof_3: { name: '{name}', text: '*La canción acaba. No se quita el auricular. La mano está más cerca.*' },
    date_choice_perfect_dain: { name: 'Dain', text: 'Hoy no hace falta subir a la pista. Sitios a los que ir, sí tengo.', choices: ['El gimnasio.', 'La cabina.'] },
    date_perfect_dain_gym_1: { name: '{name}', text: '*Lleva un balón. No salta. Se sienta primero en el banco.*' },
    date_perfect_dain_gym_2: { name: 'Dain', text: 'Cinco minutos. De verdad cinco. ...Si se van a diez, no me despiertes.' },
    date_perfect_dain_gym_3: { name: '{name}', text: '*La rodilla derecha se sale del banco. El peso está a la izquierda.*' },
    date_perfect_dain_booth_1: { name: '{name}', text: '*Los auriculares son enormes. Toca el interruptor y lo deja apagado.*' },
    date_perfect_dain_booth_2: { name: 'Dain', text: 'Seguir un partido con palabras cansa más de lo que pensaba. Pero estoy bien.' },
    date_perfect_dain_booth_3: { name: '{name}', text: '*El marcador está apagado. Sigue en la silla.*' },
    date_choice_perfect_teacher: { name: 'Profesora', text: 'Hay un lado donde se puede caminar sin cargo. Elige.', choices: ['El café.', 'La exposición.'] },
    date_perfect_teacher_cafe_1: { name: '{name}', text: '*Mira por la ventana y gira la taza. Aquí no hay pupitre.*' },
    date_perfect_teacher_cafe_2: { name: 'Profesora', text: 'Si nos vemos la semana que viene, lo dices tú. El hueco ya está libre.' },
    date_perfect_teacher_cafe_3: { name: '{name}', text: '*Una nota bajo el ticket. La hora está en blanco. Solo el sitio.*' },
    date_perfect_teacher_museum_1: { name: '{name}', text: '*No se para ante las cartelas. Solo iguala el paso.*' },
    date_perfect_teacher_museum_2: { name: 'Profesora', text: 'Las cartelas las puedes leer tú. Yo me quedo al lado.' },
    date_perfect_teacher_museum_3: { name: '{name}', text: '*En la salida te acomoda la correa. Sin discurso.*' },
    date_choice_perfect_nurse: { name: 'Enfermera', text: 'Queda un rato sin ficha. ¿Casa o fuera?', choices: ['Casa.', 'El parque.'] },
    date_perfect_nurse_home_1: { name: '{name}', text: '*Mañana de fin de semana. La bata está colgada. Hay dos vasos.*' },
    date_perfect_nurse_home_2: { name: 'Enfermera', text: 'Hoy no abro ficha. Siéntate.' },
    date_perfect_nurse_home_3: { name: '{name}', text: '*La ventana está entornada. Solo se oye el segundero.*' },
    date_perfect_nurse_park_1: { name: '{name}', text: '*Os saltasteis la calle del hospital. Primero el banco.*' },
    date_perfect_nurse_park_2: { name: 'Enfermera', text: 'Las bromas las dejé en casa. Con esto basta.' },
    date_perfect_nurse_park_3: { name: '{name}', text: '*Un peso se posa en el hombro y se queda.*' },
    date_choice_true_seo: { name: 'Seoyeon', text: 'Antes de salir. Corto.', choices: ['Café.', 'Azotea.'] },
    date_true_seo_1: { name: 'Seoyeon', text: 'Tú mueves las tazas. Yo solo alineo los posavasos.' },
    date_true_seo_2: { name: '{name}', text: '*Un autobús pasa por la ventana. No mira el reloj.*' },
    date_true_seo_alt_1: { name: 'Seoyeon', text: 'Les echo agua y bajamos. Si nos quedamos, nos ven.' },
    date_true_seo_alt_2: { name: '{name}', text: '*Hay una maceta vacía. Quiere decir que traigas una después.*' },
    date_choice_true_yuna: { name: 'Yuna', text: 'Fuera, o arriba.', choices: ['Librería.', 'Azotea.'] },
    date_true_yuna_book_1: { name: 'Lee Junho', text: '...Hacía tiempo. No pensaba verte aquí.' },
    date_true_yuna_book_2: { name: 'Yuna', text: '*Coge la manga de {name} un segundo y la suelta.* Nos vamos.' },
    date_true_yuna_roof_1: { name: 'Yuna', text: 'Puedes escuchar sin hablar. El tema es corto.' },
    date_true_yuna_roof_2: { name: '{name}', text: '*El viento mueve el cable. No baja de la baranda.*' },
    date_choice_true_dain: { name: 'Dain', text: 'Quédate cerca un minuto. ¿Dónde te viene mejor?', choices: ['El banco.', 'La cabina.'] },
    date_true_dain_1: { name: 'Dain', text: 'No salto. Solo me siento.' },
    date_true_dain_2: { name: '{name}', text: '*El balón rueda hasta el pie y se para. No lo recoge.*' },
    date_true_dain_alt_1: { name: 'Dain', text: 'Solo toco el interruptor. No está encendido.' },
    date_true_dain_alt_2: { name: '{name}', text: '*Los auriculares están boca abajo en la mesa.*' },
    date_choice_true_teacher: { name: 'Profesora', text: 'La clase se acabó. Lo que queda es esto.', choices: ['Una mesa.', 'La exposición.'] },
    date_true_teacher_1: { name: 'Profesora', text: 'La semana que viene la pones tú. Yo no voy a empezar por no.' },
    date_true_teacher_2: { name: '{name}', text: '*El café se enfría. Ninguno mira la hora.*' },
    date_true_teacher_alt_1: { name: 'Profesora', text: 'Pasa de las cartelas. Quédate al lado.' },
    date_true_teacher_alt_2: { name: '{name}', text: '*Bajo la luz de la salida, te acomodan la correa.*' },
    date_choice_true_nurse: { name: 'Enfermera', text: 'Sin ficha. ¿Adónde?', choices: ['Casa.', 'Un banco.'] },
    date_true_nurse_1: { name: 'Enfermera', text: 'Te sirvo agua. No es medicina.' },
    date_true_nurse_2: { name: '{name}', text: '*El grifo corre un momento y se corta.*' },
    date_true_nurse_alt_1: { name: 'Enfermera', text: 'Saltémonos el lado del hospital.' },
    date_true_nurse_alt_2: { name: '{name}', text: '*Una mano se posa en la pintura descascarillada del banco.*' }
};

dateI18n.fr = {
    date_choice_perfect_seo: { name: 'Seoyeon', text: 'J’ai dit que le reste pouvait attendre demain. Avant ça, on va où aujourd’hui.', choices: ['Le toit.', 'Le café.'] },
    date_perfect_seo_roof_1: { name: '{name}', text: '*La terre du pot est encore mouillée. Seoyeon pose l’arrosoir.*' },
    date_perfect_seo_roof_2: { name: 'Seoyeon', text: 'La place vide, c’est toi qui choisis. J’ai déjà pris la mienne.' },
    date_perfect_seo_roof_3: { name: '{name}', text: '*Le vent entre par la porte ouverte. Elle ne plie pas le planning.*' },
    date_perfect_seo_cafe_1: { name: '{name}', text: '*Près de la fenêtre. Elle aligne le dessous de verre, puis parle.*' },
    date_perfect_seo_cafe_2: { name: 'Seoyeon', text: 'La semaine prochaine, ici. L’heure, c’est toi.' },
    date_perfect_seo_cafe_3: { name: '{name}', text: '*Un chiffre au dos du ticket. Pas un numéro. Le prochain jour d’arrosage.*' },
    date_choice_perfect_yuna: { name: 'Yuna', text: 'Il y a aussi des places dehors. Choisis.', choices: ['La librairie d’occasion.', 'Le toit.'] },
    date_perfect_yuna_book_1: { name: '{name}', text: '*Entre les rayons. Yuna s’arrête sur un dos.*' },
    date_perfect_yuna_book_2: { name: 'Homme', text: '…Yuna ? Je ne savais pas que tu venais encore ici.' },
    date_perfect_yuna_book_3: { name: 'Lee Junho', text: 'C’est vieux. Je pensais que je n’avais rien à dire. …Je dérange.' },
    date_perfect_yuna_book_4: { name: 'Yuna', text: '*Son doigt reste dans le signet.* Je suis avec {name} maintenant. Ça suffit.' },
    date_perfect_yuna_roof_1: { name: '{name}', text: '*Le toit secret. Un écouteur traverse l’espace.*' },
    date_perfect_yuna_roof_2: { name: 'Yuna', text: 'Le troisième morceau. Depuis le début, cette fois.' },
    date_perfect_yuna_roof_3: { name: '{name}', text: '*Le morceau s’arrête. Elle n’enlève pas l’écouteur. Sa main est plus près.*' },
    date_choice_perfect_dain: { name: 'Dain', text: 'Pas besoin de monter sur le terrain aujourd’hui. J’ai quand même des endroits.', choices: ['Le gymnase.', 'La cabine.'] },
    date_perfect_dain_gym_1: { name: '{name}', text: '*Elle a un ballon. Elle ne saute pas. Elle prend le banc la première.*' },
    date_perfect_dain_gym_2: { name: 'Dain', text: 'Cinq minutes. Vraiment cinq. …Si ça fait dix, ne me réveille pas.' },
    date_perfect_dain_gym_3: { name: '{name}', text: '*Son genou droit dépasse du banc. Le poids est à gauche.*' },
    date_perfect_dain_booth_1: { name: '{name}', text: '*Le casque est énorme. Elle touche l’interrupteur et le laisse éteint.*' },
    date_perfect_dain_booth_2: { name: 'Dain', text: 'Suivre un match avec des mots, ça coupe plus le souffle que je croyais. Mais ça va.' },
    date_perfect_dain_booth_3: { name: '{name}', text: '*Le tableau des scores est éteint. Elle est encore assise.*' },
    date_choice_perfect_teacher: { name: 'Professeure principale', text: 'Il y a un côté où on peut marcher sans titre. Choisis.', choices: ['Le café.', 'L’exposition.'] },
    date_perfect_teacher_cafe_1: { name: '{name}', text: '*Elle regarde dehors, puis tourne la tasse. Pas de bureau ici.*' },
    date_perfect_teacher_cafe_2: { name: 'Professeure principale', text: 'Si on se voit la semaine prochaine, c’est toi qui le dis. J’ai déjà laissé le créneau.' },
    date_perfect_teacher_cafe_3: { name: '{name}', text: '*Un mot sous le ticket. L’heure est vide. Il n’y a que le lieu.*' },
    date_perfect_teacher_museum_1: { name: '{name}', text: '*Elle ne s’arrête pas aux cartels. Elle aligne seulement le pas.*' },
    date_perfect_teacher_museum_2: { name: 'Professeure principale', text: 'Tu peux lire les cartels. Moi, je reste à côté.' },
    date_perfect_teacher_museum_3: { name: '{name}', text: '*À la sortie, elle remet une sangle. Sans discours.*' },
    date_choice_perfect_nurse: { name: 'Infirmière', text: 'Il reste un moment sans dossier. Maison ou dehors.', choices: ['La maison.', 'Le parc.'] },
    date_perfect_nurse_home_1: { name: '{name}', text: '*Un matin de week-end. La blouse est au crochet. Deux verres.*' },
    date_perfect_nurse_home_2: { name: 'Infirmière', text: 'Je n’ouvre pas de dossier aujourd’hui. Assieds-toi.' },
    date_perfect_nurse_home_3: { name: '{name}', text: '*La fenêtre est entrouverte. On n’entend que la trotteuse.*' },
    date_perfect_nurse_park_1: { name: '{name}', text: '*Vous avez sauté la rue de l’hôpital. Le banc d’abord.*' },
    date_perfect_nurse_park_2: { name: 'Infirmière', text: 'J’ai laissé les blagues à la maison. Ça suffit.' },
    date_perfect_nurse_park_3: { name: '{name}', text: '*Un poids se pose sur une épaule et reste.*' },
    date_choice_true_seo: { name: 'Seoyeon', text: 'Avant de sortir. Court.', choices: ['Café.', 'Toit.'] },
    date_true_seo_1: { name: 'Seoyeon', text: 'Tu déplaces les tasses. Moi, je n’aligne que les dessous de verre.' },
    date_true_seo_2: { name: '{name}', text: '*Un bus passe derrière la vitre. Elle ne regarde pas l’heure.*' },
    date_true_seo_alt_1: { name: 'Seoyeon', text: 'On arrose et on descend. Si on reste, on nous voit.' },
    date_true_seo_alt_2: { name: '{name}', text: '*Un pot est vide. Ça veut dire d’en ramener un plus tard.*' },
    date_choice_true_yuna: { name: 'Yuna', text: 'Dehors, ou en haut.', choices: ['Librairie.', 'Toit.'] },
    date_true_yuna_book_1: { name: 'Lee Junho', text: '…Ça fait longtemps. Je ne pensais pas te voir ici.' },
    date_true_yuna_book_2: { name: 'Yuna', text: '*Elle attrape la manche de {name} une seconde, puis lâche.* On y va.' },
    date_true_yuna_roof_1: { name: 'Yuna', text: 'Tu peux écouter sans parler. Le morceau est court.' },
    date_true_yuna_roof_2: { name: '{name}', text: '*Le vent bouge le fil. Elle ne descend pas de la rambarde.*' },
    date_choice_true_dain: { name: 'Dain', text: 'Reste près une minute. C’est plus simple où ?', choices: ['Le banc.', 'La cabine.'] },
    date_true_dain_1: { name: 'Dain', text: 'Je ne saute pas. Je m’assieds, c’est tout.' },
    date_true_dain_2: { name: '{name}', text: '*Le ballon roule jusqu’au pied et s’arrête. Elle ne le ramasse pas.*' },
    date_true_dain_alt_1: { name: 'Dain', text: 'Je touche juste l’interrupteur. Ce n’est pas allumé.' },
    date_true_dain_alt_2: { name: '{name}', text: '*Le casque est à l’envers sur la table.*' },
    date_choice_true_teacher: { name: 'Professeure principale', text: 'Le cours est fini. Ce qui reste, c’est ce côté.', choices: ['Une table.', 'L’exposition.'] },
    date_true_teacher_1: { name: 'Professeure principale', text: 'La semaine prochaine, c’est toi qui décides. Je ne commencerai pas par non.' },
    date_true_teacher_2: { name: '{name}', text: '*Le café refroidit. Personne ne regarde l’heure.*' },
    date_true_teacher_alt_1: { name: 'Professeure principale', text: 'Passe les cartels. Reste à côté.' },
    date_true_teacher_alt_2: { name: '{name}', text: '*Sous la lumière de la sortie, une sangle est remise.*' },
    date_choice_true_nurse: { name: 'Infirmière', text: 'Sans dossier. Où.', choices: ['La maison.', 'Un banc.'] },
    date_true_nurse_1: { name: 'Infirmière', text: 'Je te sers de l’eau. Ce n’est pas un médicament.' },
    date_true_nurse_2: { name: '{name}', text: '*Le robinet coule une fois, puis s’arrête.*' },
    date_true_nurse_alt_1: { name: 'Infirmière', text: 'On saute le côté hôpital.' },
    date_true_nurse_alt_2: { name: '{name}', text: '*Une main se pose sur la peinture écaillée du banc.*' }
};

dateI18n.de = {
    date_choice_perfect_seo: { name: 'Seoyeon', text: 'Ich habe gesagt, der Rest kann bis morgen warten. Wohin gehen wir vorher heute.', choices: ['Aufs Dach.', 'Ins Café.'] },
    date_perfect_seo_roof_1: { name: '{name}', text: '*Die Erde im Topf ist noch nass. Seoyeon stellt die Gießkanne ab.*' },
    date_perfect_seo_roof_2: { name: 'Seoyeon', text: 'Den leeren Platz suchst du aus. Meinen habe ich schon.' },
    date_perfect_seo_roof_3: { name: '{name}', text: '*Wind kommt durch die offene Tür. Den Plan faltet sie nicht.*' },
    date_perfect_seo_cafe_1: { name: '{name}', text: '*Am Fenster. Erst der Untersetzer, dann spricht sie.*' },
    date_perfect_seo_cafe_2: { name: 'Seoyeon', text: 'Nächste Woche wieder hier. Die Uhrzeit bestimmst du.' },
    date_perfect_seo_cafe_3: { name: '{name}', text: '*Eine Zahl auf der Quittungsrückseite. Keine Telefonnummer. Der nächste Gießtag.*' },
    date_choice_perfect_yuna: { name: 'Yuna', text: 'Draußen gibt es auch Plätze. Such aus.', choices: ['Antiquariat.', 'Dach.'] },
    date_perfect_yuna_book_1: { name: '{name}', text: '*Zwischen den Regalen. Yuna bleibt an einem Rücken stehen.*' },
    date_perfect_yuna_book_2: { name: 'Mann', text: '...Yuna? Ich wusste nicht, dass du noch herkommst.' },
    date_perfect_yuna_book_3: { name: 'Lee Junho', text: 'Ist lange her. Ich dachte, ich muss nichts sagen. ...Störe.' },
    date_perfect_yuna_book_4: { name: 'Yuna', text: '*Der Finger bleibt im Lesezeichen.* Ich bin jetzt bei {name}. Das reicht.' },
    date_perfect_yuna_roof_1: { name: '{name}', text: '*Das geheime Dach. Ein Ohrhörer kommt rüber.*' },
    date_perfect_yuna_roof_2: { name: 'Yuna', text: 'Das dritte Stück. Diesmal von vorn.' },
    date_perfect_yuna_roof_3: { name: '{name}', text: '*Das Stück ist zu Ende. Sie nimmt den Hörer nicht raus. Die Hand ist näher.*' },
    date_choice_perfect_dain: { name: 'Dain', text: 'Heute muss ich nicht auf den Platz. Orte, wo ich hinwill, hab ich trotzdem.', choices: ['Die Halle.', 'Die Kabine.'] },
    date_perfect_dain_gym_1: { name: '{name}', text: '*Sie hat einen Ball. Sie springt nicht. Sie nimmt zuerst die Bank.*' },
    date_perfect_dain_gym_2: { name: 'Dain', text: 'Fünf Minuten. Echt fünf. ...Wenn daraus zehn werden, weck mich nicht.' },
    date_perfect_dain_gym_3: { name: '{name}', text: '*Das rechte Knie hängt von der Bank. Das Gewicht liegt links.*' },
    date_perfect_dain_booth_1: { name: '{name}', text: '*Das Headset ist riesig. Sie tippt den Schalter und lässt ihn aus.*' },
    date_perfect_dain_booth_2: { name: 'Dain', text: 'Ein Spiel mit Worten mitzugehen, nimmt mehr Luft, als ich dachte. Ist trotzdem okay.' },
    date_perfect_dain_booth_3: { name: '{name}', text: '*Die Anzeigetafel ist dunkel. Sie sitzt noch.*' },
    date_choice_perfect_teacher: { name: 'Klassenlehrerin', text: 'Es gibt eine Seite, auf der man ohne Titel laufen kann. Such aus.', choices: ['Café.', 'Ausstellung.'] },
    date_perfect_teacher_cafe_1: { name: '{name}', text: '*Sie schaut hinaus und dreht die Tasse. Kein Pult hier.*' },
    date_perfect_teacher_cafe_2: { name: 'Klassenlehrerin', text: 'Ob wir uns nächste Woche sehen, sagst du. Den Slot habe ich schon freigelassen.' },
    date_perfect_teacher_cafe_3: { name: '{name}', text: '*Ein Zettel unter der Quittung. Die Zeit ist leer. Nur der Ort steht da.*' },
    date_perfect_teacher_museum_1: { name: '{name}', text: '*Sie bleibt nicht an den Schildern stehen. Sie hält nur Schritt.*' },
    date_perfect_teacher_museum_2: { name: 'Klassenlehrerin', text: 'Die Schilder kannst du lesen. Ich bleibe daneben.' },
    date_perfect_teacher_museum_3: { name: '{name}', text: '*Am Ausgang richtet sie einen Riemen. Ohne Vortrag.*' },
    date_choice_perfect_nurse: { name: 'Schulkrankenschwester', text: 'Es bleibt Zeit ohne Akte. Zuhause oder draußen.', choices: ['Zuhause.', 'Park.'] },
    date_perfect_nurse_home_1: { name: '{name}', text: '*Samstagvormittag. Der Kittel hängt. Zwei Gläser.*' },
    date_perfect_nurse_home_2: { name: 'Schulkrankenschwester', text: 'Heute mache ich keine Akte auf. Setz dich.' },
    date_perfect_nurse_home_3: { name: '{name}', text: '*Das Fenster steht einen Spalt. Man hört nur den Sekundenzeiger.*' },
    date_perfect_nurse_park_1: { name: '{name}', text: '*Die Straße zur Klinik habt ihr ausgelassen. Zuerst die Bank.*' },
    date_perfect_nurse_park_2: { name: 'Schulkrankenschwester', text: 'Die Sprüche hab ich zu Hause gelassen. Das reicht.' },
    date_perfect_nurse_park_3: { name: '{name}', text: '*Gewicht legt sich auf eine Schulter und bleibt.*' },
    date_choice_true_seo: { name: 'Seoyeon', text: 'Bevor wir gehen. Kurz.', choices: ['Café.', 'Dach.'] },
    date_true_seo_1: { name: 'Seoyeon', text: 'Die Tassen schiebst du. Ich richte nur die Untersetzer.' },
    date_true_seo_2: { name: '{name}', text: '*Ein Bus fährt am Fenster vorbei. Sie schaut nicht auf die Uhr.*' },
    date_true_seo_alt_1: { name: 'Seoyeon', text: 'Nur gießen und runter. Bleiben wir länger, sieht uns jemand.' },
    date_true_seo_alt_2: { name: '{name}', text: '*Ein Topf ist leer. Das heißt, später einen mitbringen.*' },
    date_choice_true_yuna: { name: 'Yuna', text: 'Raus, oder hoch.', choices: ['Buchladen.', 'Dach.'] },
    date_true_yuna_book_1: { name: 'Lee Junho', text: '...Ist her. Hab nicht gedacht, dass ich dich hier treffe.' },
    date_true_yuna_book_2: { name: 'Yuna', text: '*Sie fasst {name}s Ärmel einmal und lässt los.* Wir gehen.' },
    date_true_yuna_roof_1: { name: 'Yuna', text: 'Du kannst ohne Reden zuhören. Das Stück ist kurz.' },
    date_true_yuna_roof_2: { name: '{name}', text: '*Wind bewegt das Kabel. Sie kommt nicht vom Geländer runter.*' },
    date_choice_true_dain: { name: 'Dain', text: 'Bleib eine Minute nah. Wo ist es leichter.', choices: ['Die Bank.', 'Die Kabine.'] },
    date_true_dain_1: { name: 'Dain', text: 'Kein Sprung. Ich sitze nur.' },
    date_true_dain_2: { name: '{name}', text: '*Der Ball rollt an den Fuß und bleibt. Sie hebt ihn nicht auf.*' },
    date_true_dain_alt_1: { name: 'Dain', text: 'Ich fass den Schalter nur an. Er ist nicht an.' },
    date_true_dain_alt_2: { name: '{name}', text: '*Das Headset liegt umgekehrt auf dem Tisch.*' },
    date_choice_true_teacher: { name: 'Klassenlehrerin', text: 'Der Unterricht ist vorbei. Was bleibt, ist diese Seite.', choices: ['Ein Tisch.', 'Die Ausstellung.'] },
    date_true_teacher_1: { name: 'Klassenlehrerin', text: 'Nächste Woche bestimmst du. Ich fange nicht mit Nein an.' },
    date_true_teacher_2: { name: '{name}', text: '*Der Kaffee kühlt ab. Keiner schaut auf die Uhr.*' },
    date_true_teacher_alt_1: { name: 'Klassenlehrerin', text: 'Die Schilder lass. Bleib daneben.' },
    date_true_teacher_alt_2: { name: '{name}', text: '*Unter dem Ausgangslicht wird ein Riemen gerichtet.*' },
    date_choice_true_nurse: { name: 'Schulkrankenschwester', text: 'Ohne Akte. Wohin.', choices: ['Zuhause.', 'Eine Bank.'] },
    date_true_nurse_1: { name: 'Schulkrankenschwester', text: 'Ich schenk Wasser ein. Das ist keine Medizin.' },
    date_true_nurse_2: { name: '{name}', text: '*Der Hahn läuft einmal und hört auf.*' },
    date_true_nurse_alt_1: { name: 'Schulkrankenschwester', text: 'Die Klinikseite lassen wir aus.' },
    date_true_nurse_alt_2: { name: '{name}', text: '*Eine Hand legt sich auf die abgeplatzte Farbe der Bank.*' }
};

dateI18n.pt = {
    date_choice_perfect_seo: { name: 'Seoyeon', text: 'Disse que o resto podia ficar para amanhã. Antes disso, para onde vamos hoje.', choices: ['O terraço.', 'O café.'] },
    date_perfect_seo_roof_1: { name: '{name}', text: '*A terra do vaso ainda está molhada. A Seoyeon pousa o regador.*' },
    date_perfect_seo_roof_2: { name: 'Seoyeon', text: 'O sítio vazio escolhes tu. O meu já escolhi.' },
    date_perfect_seo_roof_3: { name: '{name}', text: '*O vento entra pela porta aberta. Ela não dobra o horário.*' },
    date_perfect_seo_cafe_1: { name: '{name}', text: '*À janela. Endireita o descanso e só depois fala.*' },
    date_perfect_seo_cafe_2: { name: 'Seoyeon', text: 'Na próxima semana, aqui. A hora decides tu.' },
    date_perfect_seo_cafe_3: { name: '{name}', text: '*Um número no verso do talão. Não é telefone. O próximo dia de regar.*' },
    date_choice_perfect_yuna: { name: 'Yuna', text: 'Lá fora também há lugar. Escolhe.', choices: ['A livraria usada.', 'O terraço.'] },
    date_perfect_yuna_book_1: { name: '{name}', text: '*Entre as prateleiras. A Yuna pára numa lombada.*' },
    date_perfect_yuna_book_2: { name: 'Homem', text: '...Yuna? Não sabia que ainda vinhas aqui.' },
    date_perfect_yuna_book_3: { name: 'Lee Junho', text: 'Foi há muito tempo. Achei que não precisava de dizer nada. ...Estorvei.' },
    date_perfect_yuna_book_4: { name: 'Yuna', text: '*O dedo fica no marcador.* Agora estou com o {name}. Chega.' },
    date_perfect_yuna_roof_1: { name: '{name}', text: '*O terraço secreto. Um auricular atravessa o espaço.*' },
    date_perfect_yuna_roof_2: { name: 'Yuna', text: 'A terceira faixa. Desta vez desde o princípio.' },
    date_perfect_yuna_roof_3: { name: '{name}', text: '*A música acaba. Ela não tira o auricular. A mão está mais perto.*' },
    date_choice_perfect_dain: { name: 'Dain', text: 'Hoje não preciso de subir ao campo. Sítios para ir, tenho.', choices: ['O pavilhão.', 'A cabine.'] },
    date_perfect_dain_gym_1: { name: '{name}', text: '*Tem uma bola. Não salta. Senta-se primeiro no banco.*' },
    date_perfect_dain_gym_2: { name: 'Dain', text: 'Cinco minutos. Cinco a sério. ...Se forem dez, não me acordes.' },
    date_perfect_dain_gym_3: { name: '{name}', text: '*O joelho direito sai do banco. O peso está à esquerda.*' },
    date_perfect_dain_booth_1: { name: '{name}', text: '*Os auscultadores são enormes. Toca no interruptor e deixa-o desligado.*' },
    date_perfect_dain_booth_2: { name: 'Dain', text: 'Seguir um jogo com palavras cansa mais do que eu pensava. Mas está bem.' },
    date_perfect_dain_booth_3: { name: '{name}', text: '*O marcador está apagado. Ela ainda está no sítio.*' },
    date_choice_perfect_teacher: { name: 'Professora', text: 'Há um lado onde se pode andar sem cargo. Escolhe.', choices: ['O café.', 'A exposição.'] },
    date_perfect_teacher_cafe_1: { name: '{name}', text: '*Olha pela janela e roda a chávena. Não há secretária aqui.*' },
    date_perfect_teacher_cafe_2: { name: 'Professora', text: 'Se nos virmos na próxima semana, dizes tu. O horário já está livre.' },
    date_perfect_teacher_cafe_3: { name: '{name}', text: '*Um recado debaixo do talão. A hora está em branco. Só o sítio.*' },
    date_perfect_teacher_museum_1: { name: '{name}', text: '*Não pára nas legendas. Só acompanha o passo.*' },
    date_perfect_teacher_museum_2: { name: 'Professora', text: 'As legendas podes lê-las tu. Eu fico ao lado.' },
    date_perfect_teacher_museum_3: { name: '{name}', text: '*Na saída endireita uma alça. Sem discurso.*' },
    date_choice_perfect_nurse: { name: 'Enfermeira', text: 'Sobrou tempo sem ficha. Casa ou rua.', choices: ['Casa.', 'O parque.'] },
    date_perfect_nurse_home_1: { name: '{name}', text: '*Manhã de fim de semana. A bata está no gancho. Dois copos.*' },
    date_perfect_nurse_home_2: { name: 'Enfermeira', text: 'Hoje não abro ficha. Senta-te.' },
    date_perfect_nurse_home_3: { name: '{name}', text: '*A janela está entreaberta. Só se ouve o ponteiro dos segundos.*' },
    date_perfect_nurse_park_1: { name: '{name}', text: '*Saltaram a rua do hospital. Primeiro o banco.*' },
    date_perfect_nurse_park_2: { name: 'Enfermeira', text: 'As piadas deixei-as em casa. Isto chega.' },
    date_perfect_nurse_park_3: { name: '{name}', text: '*Um peso pousa no ombro e fica.*' },
    date_choice_true_seo: { name: 'Seoyeon', text: 'Antes de sairmos. Curto.', choices: ['Café.', 'Terraço.'] },
    date_true_seo_1: { name: 'Seoyeon', text: 'As chávenas moves tu. Eu só endireito os descansos.' },
    date_true_seo_2: { name: '{name}', text: '*Um autocarro passa na janela. Ela não olha para o relógio.*' },
    date_true_seo_alt_1: { name: 'Seoyeon', text: 'Regamos e descemos. Se ficarmos, vêem-nos.' },
    date_true_seo_alt_2: { name: '{name}', text: '*Há um vaso vazio. Quer dizer para trazeres um mais tarde.*' },
    date_choice_true_yuna: { name: 'Yuna', text: 'Fora, ou acima.', choices: ['Livraria.', 'Terraço.'] },
    date_true_yuna_book_1: { name: 'Lee Junho', text: '...Já lá vai tempo. Não esperava ver-te aqui.' },
    date_true_yuna_book_2: { name: 'Yuna', text: '*Agarra a manga do {name} uma vez e larga.* Vamos.' },
    date_true_yuna_roof_1: { name: 'Yuna', text: 'Podes ouvir sem falar. A faixa é curta.' },
    date_true_yuna_roof_2: { name: '{name}', text: '*O vento mexe no fio. Ela não desce do parapeito.*' },
    date_choice_true_dain: { name: 'Dain', text: 'Fica perto um minuto. Onde é mais fácil.', choices: ['O banco.', 'A cabine.'] },
    date_true_dain_1: { name: 'Dain', text: 'Não salto. Só me sento.' },
    date_true_dain_2: { name: '{name}', text: '*A bola rola até ao pé e pára. Ela não a apanha.*' },
    date_true_dain_alt_1: { name: 'Dain', text: 'Só toco no interruptor. Não está ligado.' },
    date_true_dain_alt_2: { name: '{name}', text: '*Os auscultadores estão virados ao contrário na mesa.*' },
    date_choice_true_teacher: { name: 'Professora', text: 'A aula acabou. O que resta é deste lado.', choices: ['Uma mesa.', 'A exposição.'] },
    date_true_teacher_1: { name: 'Professora', text: 'A próxima semana decides tu. Eu não começo por não.' },
    date_true_teacher_2: { name: '{name}', text: '*O café arrefece. Ninguém olha para as horas.*' },
    date_true_teacher_alt_1: { name: 'Professora', text: 'Passa as legendas. Fica ao lado.' },
    date_true_teacher_alt_2: { name: '{name}', text: '*Debaixo da luz da saída, uma alça é endireitada.*' },
    date_choice_true_nurse: { name: 'Enfermeira', text: 'Sem ficha. Para onde.', choices: ['Casa.', 'Um banco.'] },
    date_true_nurse_1: { name: 'Enfermeira', text: 'Deito água. Não é remédio.' },
    date_true_nurse_2: { name: '{name}', text: '*A torneira corre uma vez e pára.*' },
    date_true_nurse_alt_1: { name: 'Enfermeira', text: 'Vamos saltar o lado do hospital.' },
    date_true_nurse_alt_2: { name: '{name}', text: '*Uma mão pousa na tinta descascada do banco.*' }
};

for (const [file, nodes] of Object.entries(files)) {
    for (const lang of langs) {
        const fp = path.join(root, 'assets/js/i18n', lang, `${file}.json`);
        const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
        for (const [id, byLang] of Object.entries(nodes)) {
            data[id] = byLang[lang] || {};
        }
        if (file === 'day5_4_night' && dateI18n[lang]) {
            Object.assign(data, dateI18n[lang]);
        }
        fs.writeFileSync(fp, JSON.stringify(data, null, 4) + '\n');
    }
    console.log('patched i18n', file);
}

console.log('counteroffer aftermath i18n done');
