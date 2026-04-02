/**
 * Add es/ja translations to Day 2 scenario _i18n blocks.
 * Run: node add_translations_day2.js
 */
const fs = require('fs');
const path = require('path');

const NAME_ES = {
    'Me':'Yo','Seoyeon':'Seoyeon','Yuna':'Yuna','Dain':'Dain',
    'Homeroom Teacher':'Profesora','School Nurse':'Enfermera',
    'System':'Sistema','Classmate':'Compañero','Math Teacher':'Profesor de matemáticas',
    '???':'???','Student':'Estudiante'
};
const NAME_JA = {
    'Me':'僕','Seoyeon':'ソヨン','Yuna':'ユナ','Dain':'ダイン',
    'Homeroom Teacher':'担任先生','School Nurse':'保健先生',
    'System':'システム','Classmate':'クラスメイト','Math Teacher':'数学先生',
    '???':'???','Student':'生徒'
};

const files = [
    'assets/js/scenario/day2_1_morning.js',
    'assets/js/scenario/day2_2_lunch.js',
    'assets/js/scenario/day2_3_afterschool.js',
    'assets/js/scenario/day2_4_night.js',
];

// === TEXT TRANSLATIONS ===
// Key: English text -> { es: Spanish, ja: Japanese }
const TEXT_TR = {};
function t(en, es, ja) { TEXT_TR[en] = { es, ja }; }

// ============ day2_1_morning ============
// MC morning routine
t("*The moment I open my eyes, the faces I met yesterday flash through my mind. The morning of my second day at the new school \u2014 I woke up before the alarm, probably because of the excitement.*",
  "*En cuanto abro los ojos, los rostros que conocí ayer pasan por mi mente. La mañana de mi segundo día en la nueva escuela... me desperté antes de que sonara la alarma, probablemente por la emoción.*",
  "*目を開けた瞬間、昨日出会った顔が次々と頭をよぎる。転校二日目の朝、ワクワクしてたのか、アラームが鳴る前に目が覚めてしまった。*");
t("*Yesterday feels as sweet as a dream... but the school uniform on my desk reminds me this is reality. I have a feeling something good will happen today too.*",
  "*Lo de ayer se siente dulce como un sueño... pero el uniforme sobre mi escritorio me recuerda que esto es la realidad. Tengo el presentimiento de que hoy también pasará algo bueno.*",
  "*昨日のことが夢みたいに甘く感じるけど...机の上の制服が、ここが現実だと教えてくれる。今日もいいことがありそうな気がする。*");
t("*I pick up the smartphone beside my bed. Maybe someone sent me a message overnight... I check the screen.*",
  "*Tomo el celular que está al lado de mi cama. ¿Tal vez alguien me envió un mensaje durante la noche...? Reviso la pantalla.*",
  "*ベッドの横のスマホを手に取る。もしかして昨夜の間に誰かからメッセージが来てないかな...画面を確認してみる。*");
t("*No messages. Was I hoping for nothing...? But I'll see everyone at school today anyway. I get out of bed, filled with anticipation.*",
  "*No hay mensajes. ¿Me hice ilusiones por nada...? Pero de todos modos los veré a todos en la escuela hoy. Me levanto de la cama, lleno de expectativas.*",
  "*特にメッセージはない。期待しすぎたかな...でも今日学校で直接会えるからいいか。期待を胸にベッドから起き上がる。*");
t("*I wash my face and stand in front of the mirror. I think I look a bit better than yesterday. I change into my uniform and fix my hair.*",
  "*Me lavo la cara y me paro frente al espejo. Creo que me veo un poco mejor que ayer. Me pongo el uniforme y me arreglo el pelo.*",
  "*顔を洗って鏡の前に立つ。昨日よりちょっとマシな顔してる気がする。制服に着替えて髪を整える。*");
t("*My reflection in the uniform looks a little more familiar now. I retie my necktie and straighten my collar.*",
  "*Mi reflejo con el uniforme ya se ve un poco más familiar. Me vuelvo a hacer el nudo de la corbata y me acomodo el cuello.*",
  "*鏡に映る制服姿の自分が、もう少し見慣れてきた。ネクタイの結び目を直して、乱れた襟を正す。*");
t("*I come down to the kitchen and find rice and a fried egg on the table. Mom must have already left for work. Eating alone, but somehow I don't feel lonely today.*",
  "*Bajo a la cocina y encuentro arroz y un huevo frito en la mesa. Mamá ya debe haberse ido a trabajar. Como solo, pero por alguna razón hoy no me siento solo.*",
  "*キッチンに降りると、テーブルの上にご飯と目玉焼きが置いてある。お母さんはもう出勤したみたいだ。一人の朝ごはんだけど、なぜか今日は寂しくない。*");
t("*I scarf down breakfast and grab my bag. Checking the clock, I have plenty of time. I can take a leisurely walk to school.*",
  "*Devoro el desayuno rápidamente y tomo mi mochila. Miro el reloj y tengo bastante tiempo. Puedo ir tranquilamente a la escuela.*",
  "*さっと朝ごはんを食べてカバンを持つ。時計を見ると余裕のある時間だ。のんびり登校できそう。*");
t("*Alright, let's go. I wonder what kind of excitement awaits me today?*",
  "*Bien, vamos. ¿Qué tipo de emoción me esperará hoy?*",
  "*さあ、行こう。今日はどんなドキドキが僕を待ってるんだろう。*");
t("*Stepping outside, the fresh morning air fills my lungs. A softer breeze than yesterday blows by. It smells like spring.*",
  "*Al salir, el aire fresco de la mañana llena mis pulmones. Una brisa más suave que la de ayer me acaricia. Huele a primavera.*",
  "*外に出ると、爽やかな朝の空気が肺を満たす。昨日より柔らかい風が吹いてくる。春の匂いがする。*");
t("*Students in the same uniform walk toward school in small groups. Yesterday it all felt so unfamiliar, but today it somehow feels welcoming.*",
  "*Estudiantes con el mismo uniforme caminan hacia la escuela en grupos pequeños. Ayer todo se sentía tan desconocido, pero hoy de alguna manera se siente acogedor.*",
  "*同じ制服を着た生徒たちが三々五々学校へ向かっている。昨日はただ見慣れない光景だったのに、今日はどこか懐かしく感じる。*");
t("*Across the street, a few students from our school glance my way and whisper. I can hear 'Oh, it's the transfer student!' carried by the wind. Looks like I'm still the hot topic.*",
  "*Al otro lado de la calle, unos estudiantes de nuestra escuela me miran y susurran. Puedo escuchar '¡Oh, es el alumno de intercambio!' llevado por el viento. Parece que sigo siendo el tema del momento.*",
  "*道の向こう側で、うちの学校の生徒が何人かこっちを見てひそひそ話してる。「あ、転校生だ！」って声が風に乗って聞こえてくる。まだ学校のホットニュースみたいだ。*");
t("*Arriving at the school gate, the scenery greets me far more warmly than yesterday. My steps feel light for some reason.*",
  "*Al llegar a la puerta de la escuela, el paisaje me recibe mucho más cálidamente que ayer. Por alguna razón mis pasos se sienten ligeros.*",
  "*校門前に到着すると、昨日よりずっと温かく感じる風景が僕を迎えてくれる。なぜか足取りが軽い。*");
t("*As I'm about to pass through the gate, someone taps me on the shoulder.*",
  "*Cuando estoy a punto de pasar por la puerta, alguien me toca el hombro.*",
  "*校門をくぐろうとした時、誰かが僕の肩を叩いた。*");
t("*I turn around and there stands...*",
  "*Me doy la vuelta y allí está...*",
  "*振り返ると、そこには...*");
t("*Under the large zelkova tree beside the school gate, I spot Yuna standing with an indifferent expression. She closes her book and gazes at me quietly.*",
  "*Bajo el gran árbol junto a la puerta de la escuela, veo a Yuna parada con una expresión indiferente. Cierra su libro y me mira en silencio.*",
  "*校門横の大きなケヤキの木の下に、ユナが無表情で立っているのが見える。彼女は本を閉じて、じっと僕を見つめる。*");

// Yuna morning
t("\"...Hi. Thanks for the message last night. It made the night a little warmer. Later... check the note on your desk.\"",
  "\"...Hola. Gracias por el mensaje de anoche. Hizo que la noche fuera un poco más cálida. Luego... revisa la nota en tu escritorio.\"",
  "\"...おはよう。昨夜のメッセージ...ありがとう。おかげで少し温かい夜だった。あとで...机の上のメモを確認して。\"");
t("\"...Hi. That 'light' of yours is still the same today. Good. Later... check the note on your desk.\"",
  "\"...Hola. Esa 'luz' tuya sigue siendo la misma hoy. Bien. Luego... revisa la nota en tu escritorio.\"",
  "\"...おはよう。今日もその『光』は変わらないね。よかった。あとで...机の上のメモを確認して。\"");

// System empty
t("", "", "");

// Nurse morning
t("\"Oh my, {name}! Good morning. You look extra energetic today, don't you?\"",
  "\"¡Vaya, {name}! Buenos días. Te ves con mucha energía hoy, ¿no?\"",
  "\"あら、{name}！おはよう。今日はいつもより元気そうね？\"");
t("*She walks up to me and straightens my clothes.* \"My dear transfer student, what did you dream about to be glowing like this? I barely got any sleep because I was up thinking about you.\"",
  "*Se acerca a mí y me arregla la ropa.* \"Mi querido estudiante de intercambio, ¿qué soñaste para brillar así? Yo apenas dormí porque me quedé pensando en ti.\"",
  "*先生が近づいてきて服装を整えてくれる。* \"うちの転校生くん、どんな夢を見たらそんなにキラキラしてるの？先生はあなたのことを考えてちょっと寝坊しちゃったのに。\"");
t("*She sighs and turns her head as soon as she sees me.* \"Oh, transfer student... It's hard enough seeing your face this early in the morning. If you don't have any business, please head to class.\"",
  "*Suspira y voltea la cabeza en cuanto me ve.* \"Oh, estudiante de intercambio... Es difícil ver tu cara tan temprano en la mañana. Si no tienes nada que hacer aquí, por favor ve a clase.\"",
  "*先生は僕を見るなりため息をついて視線をそらす。* \"あら、転校生...朝から顔色悪そうね。特に用がなければ教室で休んだほうがいいわよ。\"");
t("*She walks up to me and gives a little wink.*",
  "*Se acerca a mí y me guiña un ojo.*",
  "*先生が近づいてきて、軽くウインクする。*");
t("\"That message you sent last night was really cute. Thanks to you, I fell asleep in a good mood. If you're not feeling well today, come visit the nurse's office anytime.\"",
  "\"El mensaje que me enviaste anoche fue muy lindo. Gracias a ti, me dormí de buen humor. Si no te sientes bien hoy, ven a la enfermería cuando quieras.\"",
  "\"昨夜のメッセージ、本当に可愛かったわ。おかげで先生もいい気分で眠れたの。今日も具合が悪かったらいつでも保健室に来てね。\"");
t("\"You didn't lose sleep thinking about me last night, did you? Hehe, just kidding. If you're not feeling well today, come visit the nurse's office anytime.\"",
  "\"No perdiste el sueño pensando en mí anoche, ¿verdad? Jeje, es broma. Si no te sientes bien hoy, ven a la enfermería cuando quieras.\"",
  "\"昨夜、私のことを考えて眠れなかったんじゃないでしょうね？ふふ、冗談よ。今日も具合が悪かったらいつでも保健室に来てね。\"");
t("\"It's only your second day, but you already look right at home. Don't push yourself too hard, and come hang out at the nurse's office if you need a break.\"",
  "\"Es solo tu segundo día, pero ya pareces estar como en casa. No te esfuerces demasiado, y ven a la enfermería si necesitas un descanso.\"",
  "\"転校二日目なのにもう学校に馴染んでるみたいね。無理しないで、疲れたら保健室に遊びに来てね。\"");

// Seoyeon morning
t("\"Hi, {name}! Did you sleep well? You're here early again today!\"",
  "\"¡Hola, {name}! ¿Dormiste bien? ¡Hoy también llegaste temprano!\"",
  "\"おはよう、{name}！よく眠れた？今日も早いね！\"");
t("*Seoyeon was lingering by the school gate, and the moment she spots me, she beams and runs over.* \"{name}! I was waiting for you! I couldn't sleep a wink because I was wondering if you slept well last night!\"",
  "*Seoyeon estaba merodeando por la puerta de la escuela, y en cuanto me ve, sonríe radiante y corre hacia mí.* \"¡{name}! ¡Te estaba esperando! ¡No pude dormir nada porque me preguntaba si habías dormido bien anoche!\"",
  "*ソヨンが校門の前でうろうろしていて、僕を見つけた瞬間、安心したように明るく笑って駆け寄ってくる。* \"あっ、{name}！早く来たね！実は...今日もちゃんと登校できるかなって、ちょっと気になってたんだ。\"");
t("*Seoyeon's expression hardens as soon as she spots me, and she turns her head away.* \"...Oh, you're here? At least you're not late. Well, take care.\"",
  "*La expresión de Seoyeon se endurece en cuanto me ve, y voltea la cabeza.* \"...Ah, ¿ya llegaste? Al menos no llegas tarde. Bueno, cuídate.\"",
  "*ソヨンは僕を見つけるなり表情を固くして、顔をそむける。* \"...あ、来たの？遅刻しなくてよかったね。私は先に行くから。\"");
t("*Seoyeon meets my eyes and smiles softly.*",
  "*Seoyeon me mira a los ojos y sonríe suavemente.*",
  "*ソヨンは僕と目を合わせて、そっと微笑む。*");
t("\"Thank you so much for the message yesterday! I think I slept well because of it. Let's do our best today too!\"",
  "\"¡Muchas gracias por el mensaje de ayer! Creo que dormí bien gracias a eso. ¡Demos lo mejor de nosotros hoy también!\"",
  "\"昨日のメッセージ、本当にありがとう！おかげでぐっすり眠れた気がする。今日も頑張ろうね！\"");
t("\"Did you get home okay yesterday? After we exchanged numbers, I must have debated a hundred times whether to text you... but I held back because I didn't want to bother you.\"",
  "\"¿Llegaste bien a casa ayer? Después de intercambiar números, debí haberme debatido cien veces si enviarte un mensaje... pero me contuve porque no quería molestarte.\"",
  "\"昨日ちゃんと帰れた？連絡先交換してから、メッセージ送ろうかどうか何百回も迷ったんだけど...迷惑かなと思って我慢しちゃった。\"");
t("\"Did you get home okay yesterday? I was really worried since it was your first day, but seeing you today puts me at ease. Let's do our best today too!\"",
  "\"¿Llegaste bien a casa ayer? Estaba muy preocupada ya que era tu primer día, pero verte hoy me tranquiliza. ¡Demos lo mejor hoy también!\"",
  "\"昨日ちゃんと帰れた？初日だったから心配してたんだけど、今日会えて安心した。今日も頑張ろうね！\"");
t("\"Really? Then starting today, we share everything, even the little things, deal? Come on, let's head to class together!\"",
  "\"¿En serio? ¡Entonces desde hoy compartimos todo, hasta las cosas pequeñas, trato hecho? ¡Vamos, caminemos juntos al salón!\"",
  "\"本当？じゃあ今日からは些細なことでも全部共有しようね！さあ、一緒に教室に行こう！\"");
t("\"Right? Your first day at a new school must have been exhausting. Come on, let's have another great day!\"",
  "\"¿Verdad? Tu primer día en una nueva escuela debió ser agotador. ¡Vamos, que hoy sea otro gran día!\"",
  "\"だよね？新しい学校の初日は疲れたでしょ。さあ、今日もいい一日にしよう！\"");

// Dain morning
t("\"Hey, {name}! Good morning! You're here early today!\"",
  "\"¡Hey, {name}! ¡Buenos días! ¡Hoy llegaste temprano!\"",
  "\"おっす、{name}！おはよ！今日早いじゃん！\"");
t("*Dain cheerfully bumps my shoulder.*",
  "*Dain me da un golpecito en el hombro alegremente.*",
  "*ダインが元気よく僕の肩をぶつけてくる。*");
t("\"Got your message yesterday! You're surprisingly sweet, you know that? Thanks to you, I slept great. Let's make today awesome too!\"",
  "\"¡Recibí tu mensaje ayer! Eres sorprendentemente dulce, ¿lo sabías? Gracias a ti dormí genial. ¡Hagamos que hoy también sea increíble!\"",
  "\"昨日のメッセージもらったよ！意外と優しいとこあるんだね？おかげでぐっすり眠れた。今日も最高の一日にしようね！\"");
t("\"Thanks to the tteokbokki yesterday, I'm in top shape today! Same for you, right?\"",
  "\"¡Gracias al tteokbokki de ayer, hoy estoy en plena forma! ¿Tú también, verdad?\"",
  "\"昨日のトッポッキのおかげで今日は絶好調！{name}もでしょ？\"");
t("\"Did you get home okay yesterday? It was your first day, so I hope you got to explore the school a bit! Let's make today awesome too!\"",
  "\"¿Llegaste bien a casa ayer? Era tu primer día, ¡espero que hayas explorado la escuela un poco! ¡Hagamos que hoy sea increíble también!\"",
  "\"昨日ちゃんと帰れた？初日だったから、少しは学校を楽しめたかな！今日も最高の一日にしよう！\"");
t("\"Haha! I guess my energy is a bit over the top, huh? Alright, come to the gym at lunch today too! I'll be waiting!\"",
  "\"¡Jaja! Supongo que mi energía es un poco excesiva, ¿no? ¡Bueno, ven al gimnasio a la hora del almuerzo hoy también! ¡Te estaré esperando!\"",
  "\"あはは！やっぱ私のテンション高すぎ？よし、今日も昼休みに体育館に来てよね！待ってるから！\"");
t("\"Oh come on, don't be a wimp! Stamina is everything when you're adjusting to school life! Now let's get to class!\"",
  "\"¡Vamos, no seas débil! ¡La resistencia lo es todo cuando te estás adaptando a la vida escolar! ¡Ahora vamos a clase!\"",
  "\"もう、弱気にならないの！体力は学校生活の基本だよ！さ、教室行こ！\"");

// Teacher morning
t("\"Oh, isn't that {name}? Only your second day and you're already fitting right in. It's nice to see you here early.\"",
  "\"Oh, ¿no es {name}? Solo es tu segundo día y ya te estás adaptando perfecto. Me alegra verte temprano.\"",
  "\"あら、{name}じゃない？まだ二日目なのにもうすっかり馴染んでるわね。早く来てくれて嬉しいわ。\"");
t("\"We still have some time before class starts. Is there anything you'd like to ask me?\"",
  "\"Todavía tenemos tiempo antes de que empiecen las clases. ¿Hay algo que quieras preguntarme?\"",
  "\"授業が始まるまでまだ時間があるわね。何か聞きたいことはある？\"");

// MC classroom arrival variants
t("*I had a nice chat with the teacher on the way to class. She said I looked like I was in a great mood this morning and asked for my phone number for the emergency contact list.*",
  "*Tuve una agradable charla con la profesora camino al salón. Dijo que me veía de muy buen humor esta mañana y me pidió mi número de teléfono para la lista de contactos de emergencia.*",
  "*教室への道中、先生と楽しくおしゃべりした。今朝はとてもいい表情してるねと言われて、緊急連絡先として電話番号を聞かれた。*");
t("*The teacher's expression hardened. I must have been too rude this early in the morning. She sighed and asked me to provide my phone number for the emergency contact list.*",
  "*La expresión de la profesora se endureció. Debo haber sido demasiado grosero tan temprano en la mañana. Suspiró y me pidió que le diera mi número de teléfono para la lista de contactos de emergencia.*",
  "*先生の表情が硬くなった。朝からちょっと失礼すぎたかもしれない。先生はため息をつきながら、緊急連絡先として電話番号を教えるように言った。*");
t("*I chatted with the teacher about various things on the walk to class. She said she needed my phone number for the emergency contact list.*",
  "*Conversé con la profesora sobre varias cosas camino al salón. Dijo que necesitaba mi número de teléfono para la lista de contactos de emergencia.*",
  "*教室まで先生と色々話をした。緊急連絡先として電話番号が必要だと言われた。*");

// Teacher phone number
t("\"{name}, thanks for the number! Hehe, I used the emergency contact list as an excuse, but... truth is, I wanted to get closer to you too. If school life gets tough, don't hesitate to reach out. I'll always be on your side.\"",
  "\"{name}, ¡gracias por el número! Jeje, usé la lista de contactos de emergencia como excusa, pero... la verdad es que yo también quería acercarme más a ti. Si la vida escolar se pone difícil, no dudes en contactarme. Siempre estaré de tu lado.\"",
  "\"{name}、番号ありがとう！ふふ、緊急連絡先を口実にしちゃったけど...本当は、私ももっと仲良くなりたかったの。学校生活で辛いことがあったら、遠慮なく連絡してね。いつでも味方だから。\"");
t("\"...Alright, thank you. I'll only use your contact info for official purposes, so don't worry. Now hurry up and get to class before you're late.\"",
  "\"...Está bien, gracias. Solo usaré tu contacto para asuntos oficiales, así que no te preocupes. Ahora apúrate y ve a clase antes de que llegues tarde.\"",
  "\"...わかったわ、ありがとう。連絡先は公式な目的だけに使うから、心配しないで。さあ、遅刻する前に教室に行きなさい。\"");
t("\"Thank you. I'll reach out if anything comes up. Now, let's head to class.\"",
  "\"Gracias. Te contactaré si surge algo. Ahora, vamos a clase.\"",
  "\"ありがとう。何かあったら連絡するわね。さあ、教室に行きましょう。\"");
t("\"Alright, we're here. Let's have another great day.\"",
  "\"Bien, llegamos. Que tengamos otro gran día.\"",
  "\"さあ、着いたわよ。今日もいい一日にしましょう。\"");

// Classroom arrival scenes
t("*Walking into the classroom alongside the teacher, all eyes turn to us. Walking in with the homeroom teacher definitely drew some attention.*",
  "*Al entrar al salón junto a la profesora, todas las miradas se vuelven hacia nosotros. Entrar con la profesora definitivamente atrajo atención.*",
  "*先生と一緒に教室に入ると、全員の視線がこちらに向く。担任の先生と一緒に入るのは、やっぱり注目を集めたみたいだ。*");
t("\"Hey, transfer student! Good morning! Whoa, you came with the homeroom teacher? Getting special treatment already?\"",
  "\"¡Hey, chico nuevo! ¡Buenos días! ¡Guau, viniste con la profesora? ¿Ya estás recibiendo trato especial?\"",
  "\"おー、転校生！おはよう！うわ、担任の先生と一緒に来たの？もう特別待遇じゃん？\"");
t("*A few students snicker with playful looks. At least there's no malice behind it.*",
  "*Algunos estudiantes se ríen con miradas juguetonas. Al menos no hay mala intención detrás.*",
  "*数人の生徒がいたずらっぽい目でクスクス笑う。少なくとも悪意はなさそうだ。*");
t("*The student next to me nudges my elbow.* \"Dude, what's the deal with you and the homeroom teacher? Walking to school together first thing in the morning?\"",
  "*El estudiante a mi lado me codea.* \"Oye, ¿qué onda entre tú y la profesora? ¿Caminando juntos a la escuela a primera hora de la mañana?\"",
  "*隣の席の生徒が僕の肘をつつく。* \"なあ、お前と担任ってどういう関係？朝から一緒に登校って。\"");
t("\"It's nothing, we just happened to run into each other at the school gate and walked in together.\"",
  "\"No es nada, solo nos encontramos por casualidad en la puerta de la escuela y entramos juntos.\"",
  "\"何でもないよ、たまたま校門で会って一緒に入っただけ。\"");
t("*I brush it off and take my seat. Walking in with the teacher was a bit embarrassing, but... it didn't feel bad. I start unpacking my bag to get my textbooks out when... something catches my eye.*",
  "*Lo dejo pasar y me siento en mi lugar. Entrar con la profesora fue un poco vergonzoso, pero... no se sintió mal. Empiezo a sacar mis libros de la mochila cuando... algo me llama la atención.*",
  "*さらっと流して席に着く。先生と一緒に入ったのはちょっと恥ずかしかったけど...悪い気はしなかった。カバンから教科書を出し始めると...何かが目に留まる。*");

t("\"Here we are! Let's have another great day, {name}!\"",
  "\"¡Llegamos! ¡Que hoy sea otro gran día, {name}!\"",
  "\"着いたよ！今日もいい一日にしようね、{name}！\"");
t("*Walking into the classroom side by side with Seoyeon, all eyes turn to us immediately. With Seoyeon standing so naturally beside me, we probably look pretty close.*",
  "*Al entrar al salón junto a Seoyeon, todas las miradas se dirigen hacia nosotros de inmediato. Con Seoyeon parada tan naturalmente a mi lado, probablemente parecemos muy cercanos.*",
  "*ソヨンと並んで教室に入ると、すぐに全員の視線が集まる。ソヨンが自然に隣にいるから、かなり仲良く見えるんだろうな。*");
t("\"Hey, transfer student! Good morning! You came with Seoyeon? You two are totally besties already!\"",
  "\"¡Hey, chico nuevo! ¡Buenos días! ¿Viniste con Seoyeon? ¡Ya son súper amigos!\"",
  "\"おー、転校生！おはよう！ソヨンと一緒に来たの？もう完全に仲良しじゃん！\"");
t("*The students glance between Seoyeon and me with knowing smiles. Seoyeon casually heads to her seat like it's no big deal.*",
  "*Los estudiantes nos miran a Seoyeon y a mí con sonrisas cómplices. Seoyeon se dirige a su asiento como si nada.*",
  "*生徒たちがニヤニヤしながらソヨンと僕を交互に見る。ソヨンは何でもないように自分の席に向かう。*");
t("*The girl in the front row turns around and whispers,* \"Hey, you're already walking to school with Seoyeon? Are you two dating?\"",
  "*La chica de la primera fila se voltea y susurra,* \"Oye, ¿ya estás caminando a la escuela con Seoyeon? ¿Están saliendo?\"",
  "*前の席の女子が振り返ってひそひそ声で言う。* \"ねえ、もうソヨンと一緒に登校してるの？付き合ってるの？\"");
t("\"No, we just happened to meet at the school gate and walked in together. I'm just grateful that Seoyeon's been looking out for me.\"",
  "\"No, solo nos encontramos en la puerta de la escuela y entramos juntos. Solo estoy agradecido de que Seoyeon me haya estado cuidando.\"",
  "\"いや、たまたま校門で会って一緒に入っただけだよ。ソヨンが色々面倒見てくれてありがたいなって。\"");
t("*I brush it off and take my seat. Seoyeon gives me a little wave from her desk. It puts me in a good mood as I start unpacking my bag to get my textbooks out when... something catches my eye.*",
  "*Lo dejo pasar y me siento. Seoyeon me saluda con la mano desde su escritorio. Me pone de buen humor mientras empiezo a sacar mis libros cuando... algo me llama la atención.*",
  "*さらっと流して席に着く。ソヨンが自分の席から小さく手を振ってくれる。いい気分で教科書を出し始めると...何かが目に留まる。*");

t("\"We're here! Let's crush it today, {name}!\"",
  "\"¡Llegamos! ¡Vamos a darlo todo hoy, {name}!\"",
  "\"着いた！今日もバリバリやろうぜ、{name}！\"");
t("*Dain bursts through the classroom door with her usual energy, and the whole room seems to brighten up. Her energy is truly contagious.*",
  "*Dain irrumpe por la puerta del salón con su energía habitual, y todo el salón parece iluminarse. Su energía es verdaderamente contagiosa.*",
  "*ダインがいつもの勢いで教室のドアを開けると、教室全体が明るくなったみたいだ。彼女のエネルギーは本当に伝染する。*");
t("\"Hey, transfer student! Good morning! You came with Dain? Already best friends, huh?\"",
  "\"¡Hey, chico nuevo! ¡Buenos días! ¿Viniste con Dain? ¿Ya son mejores amigos?\"",
  "\"おー、転校生！おはよう！ダインと一緒に来たの？もう親友じゃん！\"");
t("\"Of course! {name}'s one of us now! Alright, {name}! See you at lunch!\"",
  "\"¡Claro! ¡{name} ya es uno de los nuestros! ¡Bien, {name}! ¡Nos vemos en el almuerzo!\"",
  "\"当然でしょ！{name}はもう仲間だからね！じゃあ{name}、お昼にね！\"");
t("*The girl in the front row turns around with a giggle.* \"Once Dain gets a hold of you, there's no escape! Watch out if your stamina can't keep up!\"",
  "*La chica de la primera fila se voltea con una risita.* \"¡Una vez que Dain te atrapa, no hay escapatoria! ¡Cuidado si tu resistencia no da la talla!\"",
  "*前の席の女子がクスクス笑いながら振り返る。* \"ダインに捕まったら逃げられないよ！体力ないと大変だからね！\"");
t("\"Oh, haha... I think I'll need to work on my fitness to keep up with Dain's energy.\"",
  "\"Oh, jaja... Creo que necesitaré mejorar mi condición física para seguirle el ritmo a Dain.\"",
  "\"あはは...ダインのエネルギーについていくには体力つけないとな。\"");
t("*I brush it off and take my seat. Dain gives me a thumbs up from her desk. Feeling energized, I start unpacking my bag to get my textbooks out when... something catches my eye.*",
  "*Lo dejo pasar y me siento. Dain me hace un pulgar arriba desde su escritorio. Con ánimo, empiezo a sacar mis libros cuando... algo me llama la atención.*",
  "*さらっと流して席に着く。ダインが自分の席からグッとサムズアップしてくれる。元気をもらいながら教科書を出し始めると...何かが目に留まる。*");

// Nurse path
t("*I part ways with the school nurse and head toward the classroom. Her perfume still seems to linger at the tip of my nose.*",
  "*Me despido de la enfermera y me dirijo al salón. Su perfume todavía parece persistir en mi nariz.*",
  "*保健の先生と別れて教室に向かう。彼女の香水がまだ鼻先に残っている気がする。*");
t("*Opening the classroom door, a much softer atmosphere than yesterday wraps around me. Even the students' gazes carry a hint of friendliness.*",
  "*Al abrir la puerta del salón, una atmósfera mucho más suave que la de ayer me envuelve. Incluso las miradas de los estudiantes tienen un toque de amabilidad.*",
  "*教室のドアを開けると、昨日よりずっと柔らかい空気が僕を包む。生徒たちの視線にも親しみが感じられる。*");
t("\"Hey, transfer student! Good morning! Wait, did you just come from the nurse's office? Are you feeling sick?\"",
  "\"¡Hey, chico nuevo! ¡Buenos días! Espera, ¿vienes de la enfermería? ¿Te sientes mal?\"",
  "\"おー、転校生！おはよう！あれ、保健室から来たの？具合でも悪いの？\"");
t("\"No, I'm fine. I just bumped into the school nurse on the way in.\"",
  "\"No, estoy bien. Solo me encontré con la enfermera de camino aquí.\"",
  "\"いや、大丈夫。登校途中に保健の先生にたまたま会っただけ。\"");
t("*The girl in the front row turns around and says,* \"I saw you chatting with the school nurse earlier. You two looked pretty close. A regular visitor to the nurse's office already?\"",
  "*La chica de la primera fila se voltea y dice,* \"Te vi hablando con la enfermera antes. Se veían bastante cercanos. ¿Ya eres visitante frecuente de la enfermería?\"",
  "*前の席の女子が振り返って言う。* \"さっき保健の先生と話してるの見たよ。結構仲良さそうだったね。もう保健室の常連？\"");
t("\"No, she was just checking on me since I'm the new transfer student. She even went out of her way to make sure I was doing okay...\"",
  "\"No, solo estaba revisando cómo estaba ya que soy el nuevo estudiante de intercambio. Incluso se tomó la molestia de asegurarse de que estuviera bien...\"",
  "\"いや、転校生だから気にかけてくれただけだよ。わざわざ様子を見に来てくれて...\"");
t("*I brush it off and take my seat. The nurse's warm smile keeps lingering in my mind. I start unpacking my bag to get my textbooks out when... something catches my eye.*",
  "*Lo dejo pasar y me siento. La cálida sonrisa de la enfermera sigue en mi mente. Empiezo a sacar mis libros cuando... algo me llama la atención.*",
  "*さらっと流して席に着く。保健の先生の温かい笑顔が頭から離れない。教科書を出し始めると...何かが目に留まる。*");

// Yuna path
t("*I part ways with Yuna, pass through the school gate, and head to the classroom. Her words keep echoing in my head. 'Check the note on your desk'... What could it mean?*",
  "*Me despido de Yuna, cruzo la puerta de la escuela y me dirijo al salón. Sus palabras siguen resonando en mi cabeza. 'Revisa la nota en tu escritorio'... ¿Qué significará?*",
  "*ユナと別れて、校門をくぐり教室へ向かう。彼女の言葉が頭の中でこだまし続ける。「机のメモを確認して」...どういう意味だろう。*");
t("*Opening the classroom door, I step into the familiar bustle. But I can't fully focus with Yuna's words weighing on my mind.*",
  "*Abro la puerta del salón y entro al bullicio familiar. Pero no puedo concentrarme del todo con las palabras de Yuna pesando en mi mente.*",
  "*教室のドアを開けて、馴染みの喧騒に足を踏み入れる。でもユナの言葉が気になって、完全には集中できない。*");
t("\"Hey, transfer student! Good morning! You look like you've got something on your mind. Everything okay?\"",
  "\"¡Hey, chico nuevo! ¡Buenos días! Parece que tienes algo en mente. ¿Está todo bien?\"",
  "\"おー、転校生！おはよう！何か考え事してるみたいだけど、大丈夫？\"");
t("\"Oh... it's nothing, really.\"",
  "\"Oh... no es nada, de verdad.\"",
  "\"あ...いや、何でもないよ。\"");
t("*The girl in the front row turns around and says,* \"I saw you talking to some girl at the gate earlier... Is she from another class? She looked kind of mysterious.\"",
  "*La chica de la primera fila se voltea y dice,* \"Te vi hablando con una chica en la puerta antes... ¿Es de otra clase? Se veía algo misteriosa.\"",
  "*前の席の女子が振り返って言う。* \"さっき校門で女の子と話してるの見たよ...他のクラスの子？なんか不思議な雰囲気の子だったね。\"");
t("\"Oh... she's just another student here. I don't really know her well yet.\"",
  "\"Oh... es solo otra estudiante de aquí. No la conozco muy bien todavía.\"",
  "\"あぁ...ここの生徒だよ。まだよく知らないけど。\"");
t("*I brush it off and take my seat. I can't stop thinking about the 'note' Yuna mentioned. I start unpacking my bag to get my textbooks out when... something catches my eye.*",
  "*Lo dejo pasar y me siento. No puedo dejar de pensar en la 'nota' que mencionó Yuna. Empiezo a sacar mis libros cuando... algo me llama la atención.*",
  "*さらっと流して席に着く。ユナが言った「メモ」のことが気になって仕方ない。教科書を出し始めると...何かが目に留まる。*");

// Default classroom
t("\"Hey, transfer student! Good morning! Did you settle in okay yesterday? Our class is pretty chill, right?\"",
  "\"¡Hey, chico nuevo! ¡Buenos días! ¿Te adaptaste bien ayer? Nuestro salón es bastante relajado, ¿verdad?\"",
  "\"おー、転校生！おはよう！昨日うまく馴染めた？うちのクラス、結構いい感じでしょ？\"");
t("*A few classmates greet me casually. Yesterday they looked at me with pure curiosity, but today their smiles are relaxed.*",
  "*Algunos compañeros me saludan casualmente. Ayer me miraban con pura curiosidad, pero hoy sus sonrisas son relajadas.*",
  "*何人かのクラスメイトが気軽に声をかけてくれる。昨日は好奇心いっぱいの目で見てたのに、今日はリラックスした笑顔だ。*");
t("*The girl in the front row turns around and says,* \"Only your second day and you've already settled in? That's impressive!\"",
  "*La chica de la primera fila se voltea y dice,* \"¿Solo tu segundo día y ya te adaptaste? ¡Eso es impresionante!\"",
  "*前の席の女子が振り返って言う。* \"まだ二日目なのにもう馴染んでるの？すごいね！\"");
t("\"Oh, haha... Everyone's been so nice, it was easy to adjust.\"",
  "\"Oh, jaja... Todos han sido tan amables que fue fácil adaptarse.\"",
  "\"あはは...みんな優しくしてくれるから、すぐ慣れちゃったよ。\"");
t("*I give a vague answer and sit down. Opening my bag to take out my textbooks... something feels off.*",
  "*Doy una respuesta vaga y me siento. Abro mi mochila para sacar los libros... algo se siente extraño.*",
  "*曖昧に答えて席に着く。カバンを開けて教科書を出そうとすると...何か違和感がある。*");

// Note discovery
t("*As I'm settling in at my desk, I notice a small note tucked in the corner.*",
  "*Mientras me acomodo en mi escritorio, noto una pequeña nota escondida en la esquina.*",
  "*席に着いて落ち着こうとすると、隅に小さなメモが挟まっているのに気づく。*");
t("*I carefully unfold the note. The handwriting is neat yet somehow cold.*",
  "*Desdoblo la nota con cuidado. La letra es prolija pero de alguna manera fría.*",
  "*慎重にメモを開く。字は綺麗だけど、どこか冷たい。*");
t("\"'Come to the courtyard behind the library annex at lunch. I have something to tell you.' - Yuna\"",
  "\"'Ven al patio detrás del anexo de la biblioteca a la hora del almuerzo. Tengo algo que decirte.' - Yuna\"",
  "\"『昼休みに図書館別棟の裏庭に来て。話したいことがある。』- ユナ\"");
t("*Yuna...? I read the note again. 'The courtyard behind the library annex'... that's a secluded spot at school. Summoning me with a note like this \u2014 it feels like something out of a movie.*",
  "*¿Yuna...? Leo la nota de nuevo. 'El patio detrás del anexo de la biblioteca'... es un lugar apartado de la escuela. Citarme con una nota así, se siente como algo sacado de una película.*",
  "*ユナ...？もう一度メモを読む。「図書館別棟の裏庭」...学校の中でも人目につかない場所だ。こんなメモで呼び出すなんて、まるで映画みたいだ。*");
t("*What could she possibly want to say that she'd leave a note like this? If I had her number, I could just ask her directly... but a note \u2014 that somehow makes it more thrilling.*",
  "*¿Qué querrá decir que dejaría una nota así? Si tuviera su número, podría preguntarle directamente... pero una nota, eso de alguna manera lo hace más emocionante.*",
  "*わざわざメモを残すなんて、何を話したいんだろう？番号を知ってれば直接聞けるのに...でもメモっていうのが、逆にドキドキする。*");
t("*Is there anyone who might know about Yuna? I discreetly glance around. But I don't think I should mention the note to just anyone.*",
  "*¿Habrá alguien que sepa sobre Yuna? Miro discretamente alrededor. Pero no creo que deba mencionar la nota a cualquiera.*",
  "*ユナのことを知ってる人はいるかな？さりげなく周りを見回す。でもメモのことを誰にでも言うのはまずそうだ。*");
t("*I carefully fold the note and slip it into my pocket. I can't wait for lunch already... or maybe 'nervous' is more accurate.*",
  "*Doblo la nota con cuidado y la guardo en mi bolsillo. Ya no puedo esperar al almuerzo... o quizás 'nervioso' es más preciso.*",
  "*メモを丁寧に折ってポケットにしまう。もう昼休みが待ちきれない...いや、「緊張する」の方が正確かも。*");
t("*I casually ask the person sitting next to me.*",
  "*Le pregunto casualmente a la persona sentada a mi lado.*",
  "*さりげなく隣の席の人に聞いてみる。*");
t("\"Hey, do you know anything about someone named Yuna? I think she's in a different class...\"",
  "\"Oye, ¿sabes algo sobre alguien llamada Yuna? Creo que está en otra clase...\"",
  "\"ねえ、ユナっていう人知ってる？他のクラスだと思うんだけど...\"");
t("\"Hey... do you know anyone named Yuna?\"",
  "\"Oye... ¿conoces a alguien que se llame Yuna?\"",
  "\"なあ...ユナって人知ってる？\"");
t("\"Yuna? Hmm... she's not in our class. Maybe another class? Or an upperclassman?\"",
  "\"¿Yuna? Hmm... no está en nuestra clase. ¿Quizás en otra clase? ¿O una estudiante de grado superior?\"",
  "\"ユナ？うーん...うちのクラスにはいないなぁ。他のクラスかな？先輩とか？\"");
t("*As expected, nobody knows. Just the name 'Yuna' isn't enough to go on. I'll just have to go there myself at lunch.*",
  "*Como esperaba, nadie sabe. Solo el nombre 'Yuna' no es suficiente. Tendré que ir yo mismo a la hora del almuerzo.*",
  "*やっぱり誰も知らない。「ユナ」って名前だけじゃ手がかりにならない。昼休みに自分で行くしかないか。*");

// Homeroom
t("\"Alright, everyone take your seats. Homeroom is starting.\"",
  "\"Bien, todos a sus asientos. Empieza la tutoría.\"",
  "\"はい、皆さん席について。ホームルーム始めるわよ。\"");
t("*The teacher opens the attendance book and starts calling names one by one.* \"...{name}? Transfer student, you're here, right?\"",
  "*La profesora abre el libro de asistencia y comienza a pasar lista.* \"...¿{name}? Estudiante de intercambio, ¿estás aquí, verdad?\"",
  "*先生が出席簿を開いて、一人ずつ名前を呼んでいく。* \"...{name}？転校生、いるわよね？\"");
t("\"Yes, I'm here.\"",
  "\"Sí, estoy aquí.\"",
  "\"はい、います。\"");
t("\"Good. It's only your second day, but you look brighter than yesterday. Seems like you're adjusting well.\"",
  "\"Bien. Es solo tu segundo día, pero te ves más animado que ayer. Parece que te estás adaptando bien.\"",
  "\"よかった。まだ二日目なのに、昨日より明るい顔してるわね。うまく馴染めてるみたい。\"");
t("\"One announcement. There will be a school festival planning meeting this Friday, so anyone interested should stay after school.\"",
  "\"Un anuncio. Habrá una reunión de planificación del festival escolar este viernes, así que quien esté interesado que se quede después de clases.\"",
  "\"お知らせが一つ。今週の金曜日に文化祭の企画会議があるから、興味がある人は放課後残ってね。\"");
t("*A school festival... I just transferred and there's already a festival coming up. I'm getting more and more excited about this school.*",
  "*Un festival escolar... Acabo de transferirme y ya hay un festival en camino. Cada vez me emociona más esta escuela.*",
  "*文化祭か...転校したばかりなのにもう文化祭があるんだ。この学校がますます楽しみになってきた。*");
t("\"Teacher, question! Will there be a class talent show at the festival?\"",
  "\"¡Profesora, pregunta! ¿Habrá un show de talentos por clase en el festival?\"",
  "\"先生、質問！文化祭でクラスの出し物ありますか？\"");
t("\"Well, nothing's decided yet, but... if our class enters, we'd obviously win first place, right?\"",
  "\"Bueno, aún no se ha decidido nada, pero... si nuestra clase participa, obviamente ganaríamos el primer lugar, ¿verdad?\"",
  "\"まだ何も決まってないけど...うちのクラスが出たら、当然一位よね？\"");
t("*The classroom fills with chuckles. The teacher actually has a pretty good sense of humor.*",
  "*El salón se llena de risas. La profesora tiene bastante buen sentido del humor.*",
  "*教室がクスクスと笑いに包まれる。先生、意外とユーモアのセンスあるな。*");

// During class thoughts
t("*Throughout the entire class, Yuna's note won't leave my mind. What on earth does she want to tell me?*",
  "*Durante toda la clase, la nota de Yuna no sale de mi mente. ¿Qué diablos querrá decirme?*",
  "*授業中ずっと、ユナのメモが頭から離れない。一体何を話したいんだろう。*");
t("*Yuna, who I exchanged messages with last night... She has my number, so why leave a note? The thought that this is so very her makes me chuckle.*",
  "*Yuna, con quien intercambié mensajes anoche... Tiene mi número, entonces ¿por qué dejar una nota? Pensar que esto es muy típico de ella me hace reír.*",
  "*昨夜メッセージを交換したユナ...僕の番号を知ってるのに、なんでメモなんだろう？でもそれがいかにも彼女らしくて、思わず笑ってしまう。*");
t("*Yuna, who I met yesterday... Did she really leave this note for me? A secret... I can't help but wonder what it could be.*",
  "*Yuna, a quien conocí ayer... ¿Realmente me dejó esta nota? Un secreto... No puedo evitar preguntarme qué será.*",
  "*昨日会ったユナ...本当に僕にこのメモを残したのかな？秘密って...何なんだろう、気になって仕方ない。*");
t("*Yuna...? That's a name I didn't hear yesterday. Who is she, and why would she leave a note like this for me?*",
  "*¿Yuna...? Ese es un nombre que no escuché ayer. ¿Quién es y por qué me dejaría una nota así?*",
  "*ユナ...？昨日は聞かなかった名前だ。誰なんだろう、なんで僕にこんなメモを？*");
t("*The math formulas on the blackboard aren't registering at all. The words 'courtyard behind the library annex' just keep echoing in my head.*",
  "*Las fórmulas matemáticas del pizarrón no me entran para nada. Las palabras 'patio detrás del anexo de la biblioteca' siguen resonando en mi cabeza.*",
  "*黒板の数式が全然頭に入ってこない。「図書館別棟の裏庭」という言葉がずっと頭の中でこだましている。*");
t("\"Alright, who wants to try this problem? ...Transfer student, how about you?\"",
  "\"Bien, ¿quién quiere intentar este problema? ...Estudiante de intercambio, ¿qué tal tú?\"",
  "\"さあ、この問題を解いてみたい人は？...転校生、やってみないか？\"");
t("*Oh no, I was completely zoned out. I hastily look at the blackboard, but the formulas won't register at all.*",
  "*Oh no, estaba completamente distraído. Miro apresuradamente el pizarrón, pero las fórmulas no me entran para nada.*",
  "*しまった、完全にボーッとしてた。慌てて黒板を見るけど、数式が全然頭に入ってこない。*");
t("*Standing at the blackboard, I fumble through the formula. Luckily, it's something I previewed yesterday, so it vaguely comes back to me.*",
  "*De pie frente al pizarrón, lucho con la fórmula. Por suerte, es algo que repasé ayer, así que vagamente me viene a la memoria.*",
  "*黒板の前に立って、数式に苦戦する。幸い、昨日予習した内容だから、なんとなく思い出せた。*");
t("\"Oh, not bad, transfer student! That's correct. Well done \u2014 go back to your seat.\"",
  "\"Oh, no está mal, chico nuevo. Es correcto. Bien hecho, vuelve a tu asiento.\"",
  "\"おっ、なかなかやるな転校生！正解だ。よくできた、席に戻っていいぞ。\"");
t("\"I'm sorry, I haven't quite caught up with the material yet...\"",
  "\"Lo siento, todavía no me he puesto al día con el material...\"",
  "\"すみません、まだ授業についていけてなくて...\"");
t("\"That's alright, you just transferred. Try to preview the material next time.\"",
  "\"Está bien, acabas de transferirte. Intenta repasar el material la próxima vez.\"",
  "\"大丈夫だ、転校したばかりだからな。次は予習してきなさい。\"");
t("*The class moves on, one way or another. I can't help being distracted by the note, but class is class.*",
  "*La clase continúa, de una forma u otra. No puedo evitar distraerme con la nota, pero la clase es la clase.*",
  "*授業はどうにかこうにか進んでいく。メモのことが気になって仕方ないけど、授業は授業だ。*");
t("*Without a break, the second period starts \u2014 Korean language class. The teacher tells us to take out the handout from yesterday.*",
  "*Sin descanso, comienza la segunda hora: clase de lengua coreana. El profesor nos dice que saquemos el material de ayer.*",
  "*休む間もなく二時間目が始まる。国語の授業だ。先生が昨日のプリントを出すように言う。*");
t("*Rummaging through the handouts, my fingertips brush against the note in my pocket. My heart skips a beat.*",
  "*Revolviendo los apuntes, mis dedos rozan la nota en mi bolsillo. Mi corazón da un vuelco.*",
  "*プリントを探していると、ポケットの中のメモに指先が触れる。ドキッとする。*");
t("*There are still two hours until lunch. Why is time crawling so slowly...*",
  "*Todavía faltan dos horas para el almuerzo. ¿Por qué el tiempo pasa tan lento...?*",
  "*昼休みまであと二時間。なんでこんなに時間が経つのが遅いんだ...*");
t("*Third period, English class. The teacher's pronunciation reaches my ears, but my mind is consumed with thoughts of lunchtime.*",
  "*Tercera hora, clase de inglés. La pronunciación del profesor llega a mis oídos, pero mi mente está consumida con pensamientos del almuerzo.*",
  "*三時間目、英語の授業。先生の発音が耳に届くけど、頭の中は昼休みのことでいっぱいだ。*");
t("*The courtyard behind the library annex... I've never even been there. Why would Yuna pick such a secluded place?*",
  "*El patio detrás del anexo de la biblioteca... Ni siquiera he ido ahí. ¿Por qué Yuna elegiría un lugar tan apartado?*",
  "*図書館別棟の裏庭...行ったこともない場所だ。なんでユナはそんな人目につかないところを選んだんだろう。*");
t("*It's not dangerous or anything, right...? No, it's just a note from a fellow student. But still, my heart is pounding.*",
  "*No es peligroso ni nada, ¿verdad...? No, es solo una nota de una compañera. Pero aun así, mi corazón late con fuerza.*",
  "*危険じゃないよな...？いや、ただの生徒からのメモだ。でもやっぱり、胸がドキドキする。*");
t("*I sneak a glance at the clock. 11:40... twenty minutes until lunch. Come on, time, move faster.*",
  "*Echo un vistazo disimulado al reloj. 11:40... veinte minutos para el almuerzo. Vamos, tiempo, muévete más rápido.*",
  "*こっそり時計を見る。11時40分...昼休みまであと20分。早く時間よ進め。*");
t("- The bell rings -",
  "- Suena la campana -",
  "- チャイムが鳴る -");
t("*The lunch bell finally rings! The classroom instantly erupts into commotion. Students rush out toward the cafeteria.*",
  "*¡Por fin suena la campana del almuerzo! El salón estalla en alboroto al instante. Los estudiantes salen corriendo hacia la cafetería.*",
  "*ついに昼休みのチャイムが鳴った！教室が一瞬で騒がしくなる。生徒たちが食堂に向かって駆け出す。*");
t("*I hurriedly pack my textbooks into my bag. I check the note in my pocket one more time. 'The courtyard behind the library annex'... Alright, let's go.*",
  "*Guardo apresuradamente mis libros en la mochila. Reviso la nota en mi bolsillo una vez más. 'El patio detrás del anexo de la biblioteca'... Bien, vamos.*",
  "*急いで教科書をカバンにしまう。ポケットのメモをもう一度確認する。「図書館別棟の裏庭」...よし、行こう。*");
t("*It's lunch time. Who should I spend it with...*",
  "*Es hora del almuerzo. ¿Con quién debería pasarlo...?*",
  "*昼休みだ。誰と過ごそうかな...*");
t("*The bell rings! Finally, lunch break. The classroom is buzzing with energy, and my heart starts to race.*",
  "*¡Suena la campana! Por fin, hora del almuerzo. El salón vibra con energía y mi corazón empieza a acelerarse.*",
  "*チャイムが鳴った！やっと昼休みだ。教室は活気に満ちていて、僕の心臓も少しずつ速く鳴り始める。*");

// This is getting very large. Let me continue with the remaining unique texts.
// I'll use a more compact approach - continuing all translations...

// ============ Lunch scenes ============
t("*I open the faculty room door. My teacher, who was about to eat, smiles warmly when she sees me.*",
  "*Abro la puerta de la sala de profesores. Mi profesora, que estaba a punto de comer, sonríe cálidamente al verme.*",
  "*職員室のドアを開ける。食事をしようとしていた先生が、僕を見て温かく微笑む。*");
t("\"Oh, {name}! Did you have a good lunch? I was just about to start mine.\"",
  "\"¡Oh, {name}! ¿Almorzaste bien? Yo estaba a punto de empezar el mío.\"",
  "\"あら、{name}！お昼はちゃんと食べた？先生はちょうど食べようとしてたところよ。\"");
t("\"Did you come all this way just to eat with me? Hehe, just kidding.\"",
  "\"¿Viniste hasta aquí solo para comer conmigo? Jeje, es broma.\"",
  "\"もしかして先生と一緒にお昼食べたくて来たの？ふふ、冗談よ。\"");
t("\"My, my... you're a bold student, aren't you? Fine, I'll share some. Here, say 'Ahh'.\"",
  "\"Vaya, vaya... eres un estudiante atrevido, ¿no? Está bien, compartiré un poco. Ven, di 'Aaa'.\"",
  "\"あらまあ...大胆な生徒ね？いいわ、先生のお弁当のおかず分けてあげる。はい、あーんして。\"");
t("\"Hehe, my mother is quite the cook. I'd love to let you taste her cooking properly sometime.\"",
  "\"Jeje, mi madre cocina muy bien. Me encantaría dejarte probar su comida como se debe algún día.\"",
  "\"ふふ、うちのお母さん、料理上手なの。いつか{name}にもちゃんと味わってもらいたいな。\"");
t("\"Is that so? Well, thank you for stopping by. Have a great lunch break!\"",
  "\"¿Ah sí? Bueno, gracias por pasar. ¡Que disfrutes el descanso del almuerzo!\"",
  "\"そう？でもこうして寄ってくれてありがとう。残りの昼休み楽しんでね！\"");
t("*After a brief but sweet chat, I head back. Her gentle smile stays with me.*",
  "*Después de una breve pero dulce charla, vuelvo. Su amable sonrisa se queda conmigo.*",
  "*短いけど温かい会話の後、戻ることにする。先生の優しい笑顔が心に残る。*");

// Seoyeon lunch
t("*I open the student council room. Seoyeon, eating her lunch, blinks in surprise and then beams.*",
  "*Abro la puerta del consejo estudiantil. Seoyeon, que estaba almorzando, parpadea sorprendida y luego sonríe radiante.*",
  "*生徒会室のドアを開ける。お昼を食べていたソヨンが、驚いて目を丸くした後、ぱっと明るい顔になる。*");
t("\"{name}! I was just hoping you'd come. Sit here. I made some extra sandwiches today.\"",
  "\"¡{name}! Justo esperaba que vinieras. Siéntate aquí. Hoy hice unos sándwiches de más.\"",
  "\"{name}！ちょうど来てくれないかなって思ってたの。ここに座って。今日はサンドイッチ多めに作ってきたんだ。\"");
t("\"Really? I was worried they might not be to your taste. Eat up!\"",
  "\"¿De verdad? Me preocupaba que no fueran de tu gusto. ¡Come!\"",
  "\"本当？口に合うかなって心配してたんだけど。いっぱい食べてね！\"");
t("\"I'm okay. Seeing you enjoy the food makes all the fatigue disappear. Truly.\"",
  "\"Estoy bien. Verte disfrutar la comida hace que todo el cansancio desaparezca. De verdad.\"",
  "\"大丈夫だよ。{name}が美味しそうに食べてくれるの見てると、疲れが全部吹き飛ぶの。本当に。\"");
t("\"Ah... T-thank you. I must have been eating too greedily... (She blushes slightly)\"",
  "\"Ah... G-gracias. Debo haber estado comiendo con mucha gula... (Se sonroja un poco)\"",
  "\"あ...あ、ありがとう。がっついて食べちゃってたかな...(少し顔を赤くする)\"");
t("*Just then, someone passing by the student council room window waves at us.*",
  "*Justo en ese momento, alguien que pasa por la ventana del consejo estudiantil nos saluda con la mano.*",
  "*その時、生徒会室の窓の前を通りかかった誰かが手を振ってくる。*");
t("\"Oh? {name}! Hey! See you later!\"",
  "\"¿Oh? ¡{name}! ¡Hey! ¡Nos vemos luego!\"",
  "\"あれ？{name}！やっほー！また後でね！\"");
t("\"Huh? Who's that? A boy in the student council room... Anyway, hi!\"",
  "\"¿Eh? ¿Quién es ese? Un chico en la sala del consejo estudiantil... ¡De todos modos, hola!\"",
  "\"ん？あの子誰？生徒会室に男子が...まあいいや、やっほー！\"");
t("*When I look at Seoyeon, she has a subtle expression different from before.*",
  "*Cuando miro a Seoyeon, tiene una expresión sutil diferente a la de antes.*",
  "*ソヨンを見ると、さっきとは微妙に違う表情をしている。*");
t("\"...That's Dain from the volleyball club. {name}, are you close with her?\"",
  "\"...Esa es Dain del club de voleibol. {name}, ¿eres cercano a ella?\"",
  "\"...あの子、バレー部のダインだよ。{name}、あの子と仲良いの？\"");
t("*I wonder how to answer Seoyeon's question.*",
  "*Me pregunto cómo responder a la pregunta de Seoyeon.*",
  "*ソヨンの質問にどう答えようか悩む。*");
t("\"(Dain Jung... I'll remember that.) No, first time seeing her. Why?\"",
  "\"(Dain Jung... Lo recordaré.) No, es la primera vez que la veo. ¿Por qué?\"",
  "\"(ダイン...覚えておこう。) いや、初めて見たよ。なんで？\"");
t("\"Oh, nothing. Just curious. (Seoyeon smiles with relief) ...Let's keep eating!\"",
  "\"Oh, nada. Solo curiosidad. (Seoyeon sonríe aliviada) ...¡Sigamos comiendo!\"",
  "\"ああ、何でもない。ちょっと気になっただけ。(ソヨンはほっとしたように微笑む) ...食べ続けよう！\"");
t("\"...I see. (Seoyeon looks out the window for a moment, then smiles) It's good to have many friends. I should... try harder too.\"",
  "\"...Ya veo. (Seoyeon mira por la ventana un momento, luego sonríe) Es bueno tener muchos amigos. Yo debería... esforzarme más también.\"",
  "\"...そうなんだ。(ソヨンは一瞬窓の外を見てから微笑む) 友達が多いのはいいことだよね。私も...もっと頑張らなきゃ。\"");
t("\"(Seoyeon's expression brightens slightly) ...Really? Hehe, hearing that makes me happy. Thanks, {name}.\"",
  "\"(La expresión de Seoyeon se ilumina un poco) ...¿De verdad? Jeje, escuchar eso me hace feliz. Gracias, {name}.\"",
  "\"(ソヨンの表情が少し明るくなる) ...本当？えへへ、そう言ってもらえると嬉しい。ありがとう、{name}。\"");
t("\"J-jealous?! No way! I was just... curious! (Seoyeon turns her head away, blushing)\"",
  "\"¿¡C-celosa?! ¡Para nada! Solo tenía... ¡curiosidad! (Seoyeon voltea la cabeza, sonrojada)\"",
  "\"や、やきもち？！まさか！ただ...気になっただけ！(ソヨンは顔を赤くして横を向く)\"");
t("*After a lovely lunch with her, I return. The taste of her sandwiches is still lingering sweet.*",
  "*Después de un encantador almuerzo con ella, vuelvo. El sabor de sus sándwiches aún perdura dulcemente.*",
  "*彼女との素敵なランチの後、教室に戻る。サンドイッチの味がまだ甘く残っている。*");

// I need to continue but the file is getting very large. Let me write the rest more compactly.
// Since there are 467 texts, I'll handle remaining ones by writing them all into the map.

// Yuna library scenes
t("*Inside the old library. In the quiet, dust-filled space, Yuna stands like part of the scenery.*",
  "*Dentro de la vieja biblioteca. En el espacio silencioso y polvoriento, Yuna está de pie como si fuera parte del escenario.*",
  "*古い図書館の中。静かで埃っぽい空間に、ユナはまるで風景の一部のように立っている。*");
t("\"...You came. I didn't think you'd actually show up for a note.\"",
  "\"...Viniste. No pensé que realmente vendrías por una nota.\"",
  "\"...来たんだ。メモだけで本当に来るとは思わなかった。\"");
t("*She gazes at me with an unreadable expression.*",
  "*Me mira fijamente con una expresión indescifrable.*",
  "*読めない表情で僕を見つめる。*");
t("\"...Do you have questions for me? Or do you want to know more about this school?\"",
  "\"...¿Tienes preguntas para mí? ¿O quieres saber más sobre esta escuela?\"",
  "\"...私に聞きたいことがある？それとも、この学校についてもっと知りたい？\"");
t("*Yuna's expression softens as she looks at me.*",
  "*La expresión de Yuna se suaviza mientras me mira.*",
  "*ユナの表情が僕を見ながら少し柔らかくなる。*");
t("*Yuna gazes at me with cold, disappointed eyes.*",
  "*Yuna me mira con ojos fríos y decepcionados.*",
  "*ユナは冷たく失望した目で僕を見つめる。*");
t("*Yuna says she feels at ease talking to me. She mentions the 'secret' and says there's something she only wants to show me.*",
  "*Yuna dice que se siente cómoda hablando conmigo. Menciona el 'secreto' y dice que hay algo que solo quiere mostrarme a mí.*",
  "*ユナは僕と話していると落ち着くと言う。「秘密」について触れて、僕だけに見せたいものがあると言う。*");
t("*Yuna's gaze is icy. She says I might not handle the truth, but tells me to follow her anyway since we promised.*",
  "*La mirada de Yuna es gélida. Dice que tal vez no pueda manejar la verdad, pero me dice que la siga de todos modos ya que lo prometimos.*",
  "*ユナの視線は氷のように冷たい。僕には真実を受け止められないかもしれないと言うが、約束したからついて来いと言う。*");
t("*Yuna says she feels a strange pull toward me. She mentions a deep secret in this school and wants to show me.*",
  "*Yuna dice que siente una extraña atracción hacia mí. Menciona un secreto profundo en esta escuela y quiere mostrármelo.*",
  "*ユナは僕に不思議と引き寄せられると言う。この学校の深い秘密について触れて、見せたいと言う。*");
t("*Yuna's eyes are cold. She says I don't look like I can handle the truth, but tells me to follow her since I'm here.*",
  "*Los ojos de Yuna son fríos. Dice que no parezco capaz de manejar la verdad, pero me dice que la siga ya que estoy aquí.*",
  "*ユナの目は冷たい。真実を受け止められそうにないと言うが、来たからにはついて来いと言う。*");
t("*Yuna looks at me and begins to speak.*",
  "*Yuna me mira y comienza a hablar.*",
  "*ユナが僕を見て、話し始める。*");
t("*Yuna mentions the secret she told me yesterday and says she has something to show me.*",
  "*Yuna menciona el secreto que me contó ayer y dice que tiene algo que mostrarme.*",
  "*ユナは昨日話してくれた秘密のことに触れて、見せたいものがあると言う。*");
t("*Yuna says I must be curious about her. She offers to show me a deep secret of the school.*",
  "*Yuna dice que debo tener curiosidad sobre ella. Se ofrece a mostrarme un secreto profundo de la escuela.*",
  "*ユナは僕が彼女のことを気になっているはずだと言う。学校の深い秘密を見せてくれると言う。*");
t("*She bows her head shyly.* \"...By the way, what's your name? I felt drawn to you enough to share this secret. I want to know you.\"",
  "*Baja la cabeza tímidamente.* \"...Por cierto, ¿cómo te llamas? Me sentí lo suficientemente atraída hacia ti como para compartir este secreto. Quiero conocerte.\"",
  "*恥ずかしそうに頭を下げる。* \"...ところで、名前は？この秘密を共有したくなるくらい、あなたに惹かれたの。あなたのことが知りたい。\"");
t("\"My name is {name}.\"",
  "\"Me llamo {name}.\"",
  "\"僕は{name}。\"");
t("*She asks coldly.* \"...I should probably know your name before we go further. What is it?\"",
  "*Pregunta fríamente.* \"...Probablemente debería saber tu nombre antes de continuar. ¿Cómo te llamas?\"",
  "*冷たく聞いてくる。* \"...先に進む前に名前くらい知っておくべきかしら。何ていうの？\"");
t("\"...I forgot to ask your name. I only wrote mine on the note.\"",
  "\"...Olvidé preguntarte tu nombre. Solo escribí el mío en la nota.\"",
  "\"...名前を聞き忘れてた。メモには自分の名前しか書かなかったから。\"");

// Since this file is becoming extremely large, let me write the REMAINING translations
// as a second pass. I'll handle all the rest now.

// Yuna deeper scenes
t("*Yuna gently interlocks her fingers with mine. I can feel her heart through her warm hand.*",
  "*Yuna entrelaza suavemente sus dedos con los míos. Puedo sentir su corazón a través de su cálida mano.*",
  "*ユナがそっと僕の指に自分の指を絡める。温かい手から彼女の鼓動が伝わってくる。*");
t("\"I think... you're the one who can share this burden with me. {name}, will you follow me? The world ahead is different from what you know.\"",
  "\"Creo que... tú eres quien puede compartir esta carga conmigo. {name}, ¿me seguirás? El mundo que viene es diferente de lo que conoces.\"",
  "\"きっと...あなたは私と一緒にこの重荷を背負える人。{name}、ついてきてくれる？この先の世界は、あなたが知ってるものとは違うから。\"");
t("*Yuna grabs my sleeve and pulls me forward.*",
  "*Yuna agarra mi manga y me jala hacia adelante.*",
  "*ユナが僕の袖を掴んで引っ張る。*");
t("\"Just watch. Not like you'll understand, but you're here already. Don't get in my way.\"",
  "\"Solo mira. No es como si fueras a entender, pero ya estás aquí. No estorbes.\"",
  "\"見てるだけでいい。どうせ理解できないだろうけど、もう来ちゃったんだから。邪魔しないで。\"");
t("*Yuna leads me toward the old warehouse. Her cold touch makes me shiver.*",
  "*Yuna me guía hacia el viejo almacén. Su tacto frío me hace estremecer.*",
  "*ユナが古い倉庫へと案内する。冷たい彼女の手に、ゾクッとする。*");
t("\"Inside are records the school has hidden for a long time. Once you see them... everything will change.\"",
  "\"Adentro hay registros que la escuela ha escondido por mucho tiempo. Una vez que los veas... todo cambiará.\"",
  "\"中には学校が長い間隠してきた記録がある。見たら...全部変わるよ。\"");
t("\"Curious? Honestly... I'm not sure. But since the day you transferred, I had a feeling you'd be the one. Funny, right?\"",
  "\"¿Curioso? Honestamente... no estoy segura. Pero desde el día que te transferiste, tuve el presentimiento de que serías tú. Gracioso, ¿no?\"",
  "\"気になる？正直...私もよくわからない。でもあなたが転校してきた日から、この人だって予感がしたの。おかしいよね？\"");
t("\"What's it to you? Just watch or leave. No need to poke your nose into my business.\"",
  "\"¿A ti qué te importa? Solo mira o vete. No necesitas meter la nariz en mis asuntos.\"",
  "\"あなたに関係ある？見るか帰るかのどっちか。余計な首突っ込まないで。\"");
t("\"Thank you, {name}. With you, I'm not afraid. Shall we?\"",
  "\"Gracias, {name}. Contigo, no tengo miedo. ¿Vamos?\"",
  "\"ありがとう、{name}。あなたがいれば、怖くない。行こうか？\"");
t("\"You really want to see? Don't regret it. I won't help you if you start crying.\"",
  "\"¿De verdad quieres ver? No te arrepientas. No te ayudaré si empiezas a llorar.\"",
  "\"本当に見たいの？後悔しないでよ。泣いても助けないから。\"");
t("\"...I see. You must be scared. I understand. Tell me if you change your mind later.\"",
  "\"...Ya veo. Debes tener miedo. Entiendo. Dime si cambias de opinión después.\"",
  "\"...そう。怖いんだね。わかる。気が変わったら言って。\"");
t("\"I knew it. You're a coward. Don't show your face again.\"",
  "\"Lo sabía. Eres un cobarde. No vuelvas a aparecer frente a mí.\"",
  "\"やっぱり。臆病者。もう顔を見せないで。\"");
t("\"You came just to talk to me...? Hehe, you really say sweet things. Fine, stay with me a little longer then.\"",
  "\"¿Viniste solo para hablar conmigo...? Jeje, realmente dices cosas dulces. Está bien, quédate conmigo un poco más entonces.\"",
  "\"私と話すためだけに来たの...？ふふ、本当に甘いこと言うね。じゃあ、もう少しそばにいて。\"");
t("\"To talk? Pathetic. Don't waste my time and get lost.\"",
  "\"¿Para hablar? Patético. No pierdas mi tiempo y lárgate.\"",
  "\"話す？くだらない。時間の無駄だから帰って。\"");
t("\"...Is that so? You're a strange one. Most people are afraid. Fine, let's just stay like this for today.\"",
  "\"...¿En serio? Eres un tipo raro. La mayoría de la gente tiene miedo. Está bien, quedémonos así por hoy.\"",
  "\"...そう。変わった人。普通の人は怖がるのに。いいよ、今日はこのままでいよう。\"");
t("*I head back. Her mysterious words haunt me, making it hard to focus on class.*",
  "*Vuelvo. Sus misteriosas palabras me persiguen, haciendo difícil concentrarme en clase.*",
  "*戻ることにする。彼女の謎めいた言葉が頭から離れず、授業に集中できそうにない。*");

// Due to file size, I'll continue writing the REST of the translations in a second file
// and merge them. For now, let me handle the remaining scenes...

// This script is getting very large. Let me use the FALLBACK approach:
// For any text NOT in TEXT_TR, we use the English text as-is (which the structural
// script already handles). Then I'll create targeted edits for the files after.

// === CHOICE TRANSLATIONS ===
const CHOICE_TR = {};
function c(en, es, ja) { CHOICE_TR[en] = { es, ja }; }

c("Turn around.", "Darse la vuelta.", "振り返る。");
c("I was waiting for your message too! Go ahead and send one now.", "¡Yo también estaba esperando tu mensaje! ¡Envíame uno ahora!", "僕もメッセージ待ってたよ！今からでも送ってよ！");
c("Oh, I see. Honestly, I was so tired I fell asleep the moment I lay down.", "Ah, ya veo. Honestamente, estaba tan cansado que me dormí apenas me acosté.", "あ、そうだったんだ。正直、疲れてて横になった瞬間寝ちゃったんだよね。");
c("Yeah! I slept well thanks to you, Dain.", "¡Sí! Dormí bien gracias a ti, Dain.", "うん！ダインのおかげでぐっすり眠れたよ。");
c("I'm a bit tired actually... Dain, you really have amazing stamina.", "La verdad estoy un poco cansado... Dain, realmente tienes una resistencia increíble.", "実はちょっと疲れてて...ダイン、本当に体力すごいよね。");
c("Sure, here's my number.", "Claro, aquí está mi número.", "もちろん、これが僕の番号です。");
c("I'll stop by the teacher's office later to give it to you.", "Pasaré por la sala de profesores luego para dártelo.", "あとで職員室に寄って渡しますね。");
c("Check the note.", "Revisar la nota.", "メモを確認する。");
c("Boldly walk up and give it a shot.", "Acercarse con confianza e intentarlo.", "思い切って近づいてみる。");
c("Honestly say I don't know.", "Decir honestamente que no sé.", "正直にわからないと言う。");
c("Go to see Seoyeon and her radiant smile.", "Ir a ver a Seoyeon y su sonrisa radiante.", "華やかな笑顔が浮かぶソヨンのところへ行く。");
c("Head to the library annex backyard as promised.", "Ir al patio del anexo de la biblioteca como lo prometimos.", "ユナとの約束通り、図書館別棟の裏庭へ向かう。");
c("Find out who left that mysterious note.", "Averiguar quién dejó esa nota misteriosa.", "謎のメモを残したユナを確かめに行く。");
c("Go to the gym to see Dain.", "Ir al gimnasio a ver a Dain.", "活気あふれる体育館のダインを確かめに行く。");
c("Follow the lively sounds from the gymnasium.", "Seguir los sonidos animados del gimnasio.", "賑やかな体育館の方へ足を運ぶ。");
c("I need some rest. Heading to the nurse's office.", "Necesito descansar. Voy a la enfermería.", "ちょっと休憩が必要みたいだ。保健室に行こう。");
c("Go to the faculty room to see the teacher.", "Ir a la sala de profesores a ver a la profesora.", "優しい担任の先生がいる職員室へ向かう。");
c("Actually, yes. Can I sit next to you?", "La verdad, sí. ¿Puedo sentarme a tu lado?", "はい、先生と一緒に食べたくて来ました。隣に座ってもいいですか？");
c("Your lunch looks so good, I couldn't resist.", "Tu almuerzo se ve tan rico que no pude resistirme.", "先生のお弁当、遠くから見てもすごく美味しそうで。");
c("I was just passing by and thought of you.", "Solo pasaba por aquí y pensé en ti.", "いえ、ただ通りかかって先生のことが浮かんだので。");
c("They look amazing! You're a natural, Seoyeon.", "¡Se ven increíbles! Eres una natural, Seoyeon.", "すごく上手！ソヨン、才能あるね。");
c("Aren't you tired from all the work? Don't overdo it.", "¿No estás cansada de tanto trabajo? No te esfuerces demasiado.", "たくさん仕事して疲れてない？無理しないでね。");
c("You've got a crumb... hold still. *Wipe it off*", "Tienes una miga... no te muevas. *Se la quita*", "パンくずついてるよ...じっとして。*拭き取る*");
c("Yeah, we met yesterday. She's bright and fun.", "Sí, nos conocimos ayer. Es alegre y divertida.", "うん、昨日知り合ったよ。明るくて楽しい子だよ。");
c("Just acquaintances. You're more important to me, Seoyeon.", "Solo conocidos. Tú eres más importante para mí, Seoyeon.", "ただの知り合いだよ。僕にはソヨンの方が大事。");
c("Why? Are you jealous?", "¿Por qué? ¿Estás celosa?", "なんで？やきもち？");
c("What is it? I'm curious.", "¿Qué es? Tengo curiosidad.", "何？気になる。");
c("I'm more interested in talking to you.", "Me interesa más hablar contigo.", "君と話す方が興味あるよ。");
c("Show me. I can handle it.", "Muéstrame. Puedo manejarlo.", "見せて。大丈夫だから。");
c("I'm not interested in secrets. I'll pass.", "No me interesan los secretos. Paso.", "秘密には興味ない。遠慮するよ。");
c("Are you the Yuna from the note? What secret?", "¿Eres la Yuna de la nota? ¿Qué secreto?", "メモのユナ？秘密って何？");
c("I just came because of the note. Who are you?", "Solo vine por la nota. ¿Quién eres?", "メモがあったから来ただけ。君は誰？");
c("What's the secret? Show me.", "¿Cuál es el secreto? Muéstrame.", "秘密って何？見せて。");
c("I'm leaving. This feels weird.", "Me voy. Esto se siente raro.", "帰るよ。なんか変な感じがする。");
c("What is it? I want to see.", "¿Qué es? Quiero ver.", "何？見たい。");
c("I just wanted to talk to you.", "Solo quería hablar contigo.", "君と話したかっただけ。");
c("I'll be with you. Let's see it together.", "Estaré contigo. Veámoslo juntos.", "一緒にいるよ。一緒に見よう。");
c("I'm sorry, I can't handle this yet.", "Lo siento, todavía no puedo con esto.", "ごめん、まだ受け止められない。");
c("Show me. What is it?", "Muéstrame. ¿Qué es?", "見せて。何なの？");
c("I'm out. This is too dangerous.", "Me voy. Esto es demasiado peligroso.", "僕は降りる。危険すぎる。");
c("Can I see them too?", "¿Puedo verlos también?", "僕も見ていい？");
c("Is it safe? Maybe we should leave it.", "¿Es seguro? Tal vez deberíamos dejarlo.", "安全かな？やめておいた方がいいかも。");
c("Why are you doing this, Yuna?", "¿Por qué haces esto, Yuna?", "なんでこんなことしてるの、ユナ？");
c("Sure, Seoyeon! I'll definitely come by later.", "¡Claro, Seoyeon! Definitivamente pasaré luego.", "もちろん、ソヨン！あとで絶対行くよ。");
c("I've got plans with Dain today... Maybe next time!", "Tengo planes con Dain hoy... ¡Quizás la próxima!", "今日はダインと約束があって...次はきっと！");
c("*Smile vaguely* Would be nice to hang with both of you.", "*Sonreír vagamente* Sería genial pasar tiempo con las dos.", "*曖昧に笑う* 二人と遊べたらいいな。");
c("I'll buy yours too, Dain. What do you want?", "Yo compro el tuyo también, Dain. ¿Qué quieres?", "ダインの分も買うよ。何がいい？");
c("It's really crowded... Should we just go to the rooftop?", "Está muy lleno... ¿Vamos a la azotea?", "すごく混んでる...屋上に行かない？");
c("Dain, there's the last pizza bread! Let me grab it first!", "¡Dain, es el último pan de pizza! ¡Déjame agarrarlo primero!", "ダイン、最後のピザパンだ！先に取らせて！");
c("I have a headache.", "Me duele la cabeza.", "頭が痛いです。");
c("I just want to rest.", "Solo quiero descansar.", "ただ休みたいだけです。");
c("Is this how you seduce students, Teacher?", "¿Así es como seduces a los estudiantes, profesora?", "こうやって生徒を誘惑するんですか、先生？");
c("Could you feed it to me, Teacher?", "¿Podrías dármelo en la boca, profesora?", "先生、あーんしてもらえますか？");
c("Thank you. *Takes the medicine*", "Gracias. *Toma la medicina*", "ありがとうございます。*薬を受け取る*");
c("Next", "Siguiente", "次へ");
c("Yes, I will.", "Sí, lo haré.", "はい、そうします。");
c("Instead of just a call... can I come to your house tonight?", "En vez de solo una llamada... ¿puedo ir a tu casa esta noche?", "電話だけじゃなくて...今夜、先生の家に行ってもいいですか？");
c("Yes, I want to know.", "Sí, quiero saber.", "はい、知りたいです。");
c("Instead of just a number... can I come to your house?", "En vez de solo un número... ¿puedo ir a tu casa?", "番号だけじゃなくて...先生の家に行ってもいいですか？");
c("Ah, I'm okay.", "Ah, estoy bien.", "あ、大丈夫です。");
c("Go find Seoyeon to watch the sunset together.", "Ir a buscar a Seoyeon para ver el atardecer juntos.", "一緒に夕日を見たいソヨンを探しに行く。");
c("Dive into the school's deep secrets with Yuna.", "Adentrarse en los secretos profundos de la escuela con Yuna.", "ユナと一緒に学校の深い秘密の中へ。");
c("Search for Yuna, the mysterious girl who left the note.", "Buscar a Yuna, la chica misteriosa que dejó la nota.", "謎のメモを残したユナを探しに行く。");
c("Go help Dain practice, her sweat beads looking beautiful.", "Ir a ayudar a Dain a practicar, sus gotas de sudor lucen hermosas.", "汗の雫が美しいダインの練習を手伝いに行く。");
c("Head to the lively gym, searching for Dain's voice.", "Ir al animado gimnasio, buscando la voz de Dain.", "活気あふれる体育館、ダインの声を探しに行く。");
c("Talk more with the teacher who took care of me.", "Hablar más con la profesora que me cuidó.", "看病してくれた先生ともっと話をする。");
c("Go to the infirmary, scented with faint medicine, to see the teacher.", "Ir a la enfermería, con aroma a medicinas, a ver a la profesora.", "ほんのり薬の匂いがする保健室へ、先生に会いに行く。");
c("Head to the faculty room to see my kind homeroom teacher.", "Ir a la sala de profesores a ver a mi amable profesora.", "優しい担任の先生がいる職員室へ向かう。");
c("Seoyeon, why are you always so sincere and hardworking?", "Seoyeon, ¿por qué siempre eres tan sincera y trabajadora?", "ソヨンはどうしていつもそんなに真面目で頑張り屋なの？");
c("Let's rest now. I'll make sure to walk you home.", "Descansemos ya. Me aseguraré de acompañarte a casa.", "もう休もう。必ず家まで送るよ。");
c("Your shoulders look tense. Here, stay still for a second.", "Tus hombros se ven tensos. Quédate quieta un momento.", "肩が凝ってるみたいだね。ほら、ちょっとじっとして。");
c("Sure, definitely!", "¡Claro, por supuesto!", "もちろん！絶対！");
c("I have plans with Seoyeon today, so...", "Tengo planes con Seoyeon hoy, así que...", "今日はソヨンと予定があるから...。");
c("*Smile vaguely* It'd be nice to hang out with both of you.", "*Sonreír vagamente* Sería genial pasar tiempo con las dos.", "*曖昧に笑う* 二人と遊べたらいいな。");
c("Sure, contact me anytime. Here's my number.", "Claro, contáctame cuando quieras. Aquí está mi número.", "もちろん、いつでも連絡して。これが僕の番号。");
c("Sorry, I'll give it to you when we're a bit closer.", "Lo siento, te lo daré cuando nos conozcamos un poco más.", "ごめん、もう少し仲良くなってから教えるよ。");
c("What does this even mean?", "¿Qué significa esto?", "これ、一体どういう意味？");
c("*Taking Yuna's hand* It's scary, let's get out of here.", "*Tomando la mano de Yuna* Da miedo, salgamos de aquí.", "*ユナの手を取る* 怖い、ここから出よう。");
c("This eye... it feels like it's watching us.", "Este ojo... se siente como si nos estuviera observando.", "この目...僕たちを見ているような気がする。");
c("*Hold Yuna's hand* Yes, we'll be careful.", "*Tomar la mano de Yuna* Sí, tendremos cuidado.", "*ユナの手を握る* うん、気をつけるよ。");
c("Ma'am, we were just taking a walk.", "Señora, solo estábamos dando un paseo.", "先生、僕たちはただ散歩してただけです。");
c("*Just bow silently*", "*Solo inclinarse en silencio*", "*黙ってお辞儀する*");
c("Sure. I want to know everything about you.", "Claro. Quiero saberlo todo sobre ti.", "もちろん。君のこと全部知りたい。");
c("Sorry, I'm still a bit cautious.", "Lo siento, todavía soy un poco cauteloso.", "ごめん、まだちょっと警戒してるんだ。");
c("It's because you gave me such great tosses.", "Es porque me diste unos pases increíbles.", "ダインのトスが上手かったからだよ。");
c("Should we have a real match sometime?", "¿Deberíamos tener un partido de verdad algún día?", "今度ちゃんと試合してみない？");
c("Tteokbokki after exercise is the best, right?", "El tteokbokki después del ejercicio es lo mejor, ¿verdad?", "運動の後のトッポッキは最高だよね？");
c("Yuna? She's just quiet, that's all.", "¿Yuna? Solo es callada, eso es todo.", "ユナ？ただ静かな子ってだけだよ。");
c("Dunno, first time seeing her.", "No sé, es la primera vez que la veo.", "知らない、初めて見た。");
c("You're way brighter and better, Dain!", "¡Tú eres mucho más brillante y mejor, Dain!", "ダインの方がずっと明るくて素敵だよ！");
c("Sure! It'll be fun to explore food places with you.", "¡Claro! Será divertido explorar lugares de comida contigo.", "もちろん！ダインと食べ歩き、楽しそう！");
c("Hmm.. maybe next time.", "Hmm... quizás la próxima vez.", "うーん...また今度ね。");
c("I came because I missed you.", "Vine porque te extrañaba.", "先生に会いたくて来ました。");
c("I just wanted some quiet rest.", "Solo quería descansar tranquilamente.", "静かに休みたかっただけです。");
c("I love the scent of this room.", "Me encanta el aroma de esta habitación.", "この部屋の香り、好きです。");
c("Instead of my number... can I go to your house this evening?", "En vez de mi número... ¿puedo ir a tu casa esta noche?", "番号の代わりに...今夜、先生の家に行ってもいいですか？");
c("Yes, please!", "¡Sí, por favor!", "はい、お願いします！");
c("It's a bit much for now.", "Es un poco mucho por ahora.", "今はちょっと...。");
c("I'll help you. We'll finish much faster together!", "Te ayudaré. ¡Terminaremos mucho más rápido juntos!", "手伝いますよ。二人なら早く終わります！");
c("Hang in there! Should I make you a cup of coffee?", "¡Ánimo! ¿Te preparo una taza de café?", "頑張ってください！コーヒー淹れましょうか？");
c("Teacher, don't overwork yourself. I'm worried.", "Profesora, no te sobrecargues. Me preocupo.", "先生、無理しないでください。心配です。");
c("Send a message to Seoyeon.", "Enviar un mensaje a Seoyeon.", "ソヨンにメッセージを送る。");
c("Send a message to Yuna.", "Enviar un mensaje a Yuna.", "ユナにメッセージを送る。");
c("Send a message to Dain.", "Enviar un mensaje a Dain.", "ダインにメッセージを送る。");
c("Send a message to the School Nurse.", "Enviar un mensaje a la enfermera.", "保健の先生にメッセージを送る。");
c("Send a message to the Homeroom Teacher.", "Enviar un mensaje a la profesora.", "担任の先生にメッセージを送る。");
c("Head to the School Nurse's place.", "Ir a la casa de la enfermera.", "保健の先生の家へ向かう。");
c("Check affinity", "Ver afinidad", "好感度を確認する");
c("Stop messaging and go to sleep.", "Dejar de enviar mensajes y dormir.", "メッセージをやめて寝る。");
c("Stay a little longer.", "Quedarme un poco más.", "もう少しいる。");
c("It's late, I should head back.", "Es tarde, debería irme.", "もう遅い、帰らなきゃ。");

// New branches for lunch
t("*I open the door to the nurse's office. An unfamiliar scent of antiseptic tickles my nose.*", "*Abro la puerta de la enfermería. Un olor desconocido a antiséptico me hace cosquillas en la nariz.*", "*保健室のドアを開ける。見慣れない消毒薬の匂いが鼻をかすめる。*");
t("*Inside the nurse's office. Documents are piled on the desk, and the nurse is sitting in her chair.*", "*Dentro de la enfermería. Hay documentos apilados en el escritorio y la enfermera está sentada en su silla.*", "*保健室の中。机の上に書類が積まれ、保健室の先生が椅子に座っている。*");
t("...Oh? You're the one from earlier. What brings you here during lunch?", "...¿Oh? Eres el de antes. ¿Qué te trae por aquí durante el almuerzo?", "…あれ？さっきの。昼休みになんの用？");
t("You look better than you did this morning. That's a relief.", "Te ves mejor que esta mañana. Es un alivio.", "朝よりは顔色がいいみたいね。よかった。");

// New branches for afterschool
t("*Her eyes curve into half-moons. — This is how she looks when she's genuinely having fun.*", "*Sus ojos se curvan en medias lunas. — Así es como se ve cuando realmente se divierte.*", "*目が半月型になっている。—この人は本当に楽しい時、こんな顔をするんだな。*");

// ======== PROCESSING LOGIC ========
function findMatchingBrace(text, startIdx) {
    let depth = 0, inStr = false, esc = false;
    for (let i = startIdx; i < text.length; i++) {
        const ch = text[i];
        if (esc) { esc = false; continue; }
        if (ch === '\\' && inStr) { esc = true; continue; }
        if (ch === '"') { inStr = !inStr; continue; }
        if (!inStr) {
            if (ch === '{') depth++;
            else if (ch === '}') { depth--; if (depth === 0) return i; }
        }
    }
    return -1;
}

function getTranslatedText(enText, lang) {
    if (TEXT_TR[enText] && TEXT_TR[enText][lang]) {
        return TEXT_TR[enText][lang];
    }
    return enText; // fallback to English
}

function getTranslatedChoice(enChoice, lang) {
    if (CHOICE_TR[enChoice] && CHOICE_TR[enChoice][lang]) {
        return CHOICE_TR[enChoice][lang];
    }
    return enChoice; // fallback to English
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const re = /"_i18n":\s*\{/g;
    const positions = [];
    let m;
    while ((m = re.exec(content)) !== null) {
        const bs = content.indexOf('{', m.index + '"_i18n"'.length);
        const be = findMatchingBrace(content, bs);
        if (be !== -1) positions.push({ start: bs, end: be });
    }

    let count = 0;
    let esCount = 0, jaCount = 0;
    for (let idx = positions.length - 1; idx >= 0; idx--) {
        const pos = positions[idx];
        const block = content.substring(pos.start, pos.end + 1);
        if (/"es"\s*:/.test(block)) continue;

        const enMatch = /"en"\s*:\s*\{/.exec(block);
        if (!enMatch) continue;

        const enBs = block.indexOf('{', enMatch.index + 3);
        const enBe = findMatchingBrace(block, enBs);
        if (enBe === -1) continue;

        let enObj;
        try { enObj = JSON.parse(block.substring(enBs, enBe + 1)); }
        catch(e) {
            // try fixing trailing commas
            try {
                let fixed = block.substring(enBs, enBe + 1).replace(/,(\s*[}\]])/g, '$1');
                enObj = JSON.parse(fixed);
            } catch(e2) {
                console.error('Parse error:', e2.message, block.substring(enBs, enBs+100));
                continue;
            }
        }

        // Detect indent
        const enAbsPos = pos.start + enMatch.index;
        let ls = enAbsPos;
        while (ls > 0 && content[ls-1] !== '\n') ls--;
        const linePrefix = content.substring(ls, enAbsPos);
        const indent = linePrefix.match(/^(\s*)/)[1];
        const inner = indent + '    ';

        // Build es
        const esName = NAME_ES[enObj.name] || enObj.name;
        const esText = getTranslatedText(enObj.text, 'es');
        const es = { name: esName, text: esText };
        if (enObj.choices) es.choices = enObj.choices.map(ch => getTranslatedChoice(ch, 'es'));
        if (enObj.context) es.context = enObj.context;
        if (enObj.personality) es.personality = enObj.personality;

        // Build ja
        const jaName = NAME_JA[enObj.name] || enObj.name;
        const jaText = getTranslatedText(enObj.text, 'ja');
        const ja = { name: jaName, text: jaText };
        if (enObj.choices) ja.choices = enObj.choices.map(ch => getTranslatedChoice(ch, 'ja'));
        if (enObj.context) ja.context = enObj.context;
        if (enObj.personality) ja.personality = enObj.personality;

        // Track if we used real translations
        if (esText !== enObj.text || enObj.text === '') esCount++;
        if (jaText !== enObj.text || enObj.text === '') jaCount++;

        // Serialize
        function ser(key, obj) {
            let lines = [`${indent}"${key}": {`];
            const entries = [];
            entries.push(`${inner}"name": ${JSON.stringify(obj.name)}`);
            entries.push(`${inner}"text": ${JSON.stringify(obj.text)}`);
            if (obj.choices) {
                const cl = obj.choices.map(cc => `${inner}    ${JSON.stringify(cc)}`);
                entries.push(`${inner}"choices": [\n${cl.join(',\n')}\n${inner}]`);
            }
            if (obj.context) entries.push(`${inner}"context": ${JSON.stringify(obj.context)}`);
            if (obj.personality) entries.push(`${inner}"personality": ${JSON.stringify(obj.personality)}`);
            lines.push(entries.join(',\n'));
            lines.push(`${indent}}`);
            return lines.join('\n');
        }

        const esStr = ser('es', es);
        const jaStr = ser('ja', ja);

        // Insert after en block
        const enAbsEnd = pos.start + enBe;
        let insertAt = enAbsEnd + 1;
        const insertion = `,\n${esStr},\n${jaStr}`;

        content = content.substring(0, insertAt) + insertion + content.substring(insertAt);
        count++;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${path.basename(filePath)}: Added es/ja to ${count} blocks (ES translated: ${esCount}, JA translated: ${jaCount})`);
}

for (const f of files) processFile(f);
console.log('Done!');
console.log(`Translation map has ${Object.keys(TEXT_TR).length} text entries and ${Object.keys(CHOICE_TR).length} choice entries`);
