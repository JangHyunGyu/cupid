/**
 * Add es/ja translations to Day 3 scenario _i18n blocks.
 * Run: node add_translations_day3.js
 *
 * Spanish: Natural Latin American Spanish, "tu" form, conversational
 * Japanese: Anime/VN style, character-appropriate speech patterns
 */
const fs = require('fs');
const path = require('path');

const NAME_ES = {
    'Me':'Yo','Seoyeon':'Seoyeon','Yuna':'Yuna','Dain':'Dain',
    'Homeroom Teacher':'Profesora','School Nurse':'Enfermera',
    'Ms. Kim':'Profesora','System':'Sistema','Classmates':'Compañeros',
    '???':'???','Student':'Estudiante'
};
const NAME_JA = {
    'Me':'僕','Seoyeon':'ソヨン','Yuna':'ユナ','Dain':'ダイン',
    'Homeroom Teacher':'担任先生','School Nurse':'保健先生',
    'Ms. Kim':'担任先生','System':'システム','Classmates':'クラスメイト',
    '???':'???','Student':'生徒'
};

const files = [
    'assets/js/scenario/day3_1_morning.js',
    'assets/js/scenario/day3_2_lunch.js',
    'assets/js/scenario/day3_3_afterschool.js',
    'assets/js/scenario/day3_4_night.js',
];

// ============================================================================
// TEXT TRANSLATION MAPS
// ============================================================================
// Key: exact English text, Value: [Spanish, Japanese]
// These cover ALL dialogue and narration in the Day 3 scenario files.

const TEXT_MAP = {
    // === DAY3_1_MORNING ===
    // day3_start
    "*I wake up to the sound of my alarm. It's already been three days since I transferred... I'm starting to get used to waking up in the morning.*":
        ["*Me despierto con el sonido de la alarma. Ya han pasado tres días desde que me transferí... Estoy empezando a acostumbrarme a despertar por las mañanas.*",
         "*目覚ましの音で目が覚める。転校してからもう三日目…朝起きるのにも少し慣れてきた気がする。*"],

    // day3_nurse_home_morning
    "*I open my eyes... Where am I? An unfamiliar ceiling.*":
        ["*Abro los ojos... ¿Dónde estoy? Un techo desconocido.*",
         "*目を開ける…ここはどこだ？見慣れない天井が見える。*"],

    "*Memories of last night flash through my mind. Her scent, her soft touch, and...*":
        ["*Los recuerdos de anoche pasan por mi mente. Su aroma, su suave tacto, y...*",
         "*昨夜の記憶が頭をよぎる。先生の香り、柔らかな手触り、そして…*"],

    "\"Oh my, you're awake? Hehe, did you sleep well last night?\"":
        ["\"Vaya, ¿ya despertaste? Jeje, ¿dormiste bien anoche?\"",
         "\"あら、起きたの？ふふ、昨夜はよく眠れた？\""],

    "*She hands me a cup of coffee with a knowing smile. My face feels hot.*":
        ["*Me ofrece una taza de café con una sonrisa cómplice. Siento la cara caliente.*",
         "*意味ありげな微笑みでコーヒーを差し出される。顔が熱くなる。*"],

    "\"Hehe, don't be so stiff. Not after what we shared.\"":
        ["\"Jeje, no seas tan formal. No después de lo que compartimos.\"",
         "\"ふふ、そんなに固くならないで。もう私たちの仲でしょ。\""],

    "\"Oh my... Bold thing to say in the morning. Hehe, teacher enjoyed it too.\"":
        ["\"Vaya... Qué atrevido tan temprano. Jeje, a la profesora también le gustó.\"",
         "\"あら…朝から大胆ね。ふふ、先生も楽しかったわよ。\""],

    "\"Hehe, so cute. Your shy face is adorable too.\"":
        ["\"Jeje, qué lindo. Tu cara tímida también es adorable.\"",
         "\"ふふ、かわいい。恥ずかしがってる顔もたまらないわね。\""],

    "\"Now, hurry up and get ready. You need to go to school, right? When we see each other at school... pretend nothing happened, okay?\"":
        ["\"Ahora, apúrate y prepárate. Tienes que ir a la escuela, ¿verdad? Cuando nos veamos en la escuela... finge que no pasó nada, ¿de acuerdo?\"",
         "\"さあ、早く準備して。学校に行かないと、でしょ？学校で会ったら…何もなかったふりしてね、わかった？\""],

    "*My heart races at her wink. I quickly gather my things and leave her place.*":
        ["*Mi corazón se acelera con su guiño. Recojo mis cosas rápidamente y salgo de su casa.*",
         "*先生のウインクに心臓がまた跳ねる。急いで荷物をまとめて先生の家を出た。*"],

    "*I arrived at school. The morning air feels especially refreshing today.*":
        ["*Llegué a la escuela. El aire de la mañana se siente especialmente fresco hoy.*",
         "*学校に着いた。今日は朝の空気が特に爽やかに感じる。*"],

    "\"{name}! Good morning... Huh? Where did you come from today? It seems like you came from a different direction than usual...\"":
        ["\"{name}! Buenos días... ¿Eh? ¿De dónde vienes hoy? Parece que viniste de una dirección diferente a la usual...\"",
         "\"{name}！おはよう…あれ？今日はどこから来たの？いつもと違う方向から来たみたいだけど…\""],

    "*I'm flustered by Seoyeon's sharp question.*":
        ["*Me desconcierte la pregunta directa de Seoyeon.*",
         "*ソヨンの鋭い質問に動揺する。*"],

    "\"...A walk? At this hour? Hmm...\"":
        ["\"...¿Un paseo? ¿A esta hora? Hmm...\"",
         "\"…散歩？この時間に？ふうん…\""],

    "\"...A relative? A female relative?\"":
        ["\"...¿Un familiar? ¿Una familiar mujer?\"",
         "\"…親戚？女の人の親戚？\""],

    "\"...Why can't you answer? Are you hiding something?\"":
        ["\"...¿Por qué no puedes responder? ¿Estás ocultando algo?\"",
         "\"…なんで答えられないの？何か隠してるでしょ？\""],

    "\"...{name}. You smell different today.\"":
        ["\"...{name}. Hueles diferente hoy.\"",
         "\"…{name}。今日、違う匂いがする。\""],

    "*Yuna stares at my face. Her eyes are... piercing.*":
        ["*Yuna me mira fijamente. Sus ojos son... penetrantes.*",
         "*ユナが僕の顔をじっと見つめる。その目つきが…鋭い。*"],

    "\"...An adult's perfume. A woman's perfume.\"":
        ["\"...Perfume de adulta. Perfume de mujer.\"",
         "\"…大人の香水。女の人の香水。\""],

    "\"...What?!\"":
        ["\"...¡¿Qué?!\"",
         "\"…え?!\""],

    "*The atmosphere became tense. I need to get out of this situation somehow.*":
        ["*El ambiente se puso tenso. Necesito salir de esta situación de alguna manera.*",
         "*雰囲気が険悪になった。なんとかこの場を切り抜けないと。*"],

    "*I hurry to the classroom. The gazes from behind feel burning hot...*":
        ["*Me apresuro al salón. Las miradas desde atrás queman...*",
         "*急いで教室に向かう。背後からの視線が痛い…*"],

    "\"...Your parents' friend? Then why did you act like you were hiding something?\"":
        ["\"...¿Amigo de tus padres? Entonces, ¿por qué actuaste como si estuvieras ocultando algo?\"",
         "\"…お父さんの友達？じゃあなんで隠すような態度だったの？\""],

    "*Seoyeon looks upset. Let's just head to the classroom for now.*":
        ["*Seoyeon se ve molesta. Vamos al salón por ahora.*",
         "*ソヨンが怒っているように見える。とりあえず教室に向かおう。*"],

    // day3_start_2 / 3
    "*Looking outside, the weather is really nice today. It's already Friday... What should I do this weekend?*":
        ["*Mirando afuera, el clima está muy bonito hoy. Ya es viernes... ¿Qué debería hacer este fin de semana?*",
         "*外を見ると今日は天気がいい。もう金曜日か…週末は何をしようかな？*"],

    "*I check my smartphone and see there are unread messages. Who could it be?*":
        ["*Reviso mi teléfono y veo que hay mensajes sin leer. ¿Quién será?*",
         "*スマホを確認すると未読メッセージがある。誰だろう？*"],

    // day3_morning_message_check
    "*Let me check the messages.*":
        ["*Voy a revisar los mensajes.*",
         "*メッセージを確認しよう。*"],

    // Messages
    "*Message sent at 6 AM* 'Good morning! {name}, fighting for today too! Oh, and would you like to walk to school together? I'll wait for you in front of your house!'":
        ["*Mensaje enviado a las 6 AM* '¡Buenos días! {name}, ¡ánimo para hoy también! Ah, ¿quieres que caminemos juntos a la escuela? ¡Te espero frente a tu casa!'",
         "*朝6時に届いたメッセージ*「おはよう！{name}、今日も頑張ろうね！あ、それと一緒に登校しない？家の前で待ってるね！」"],

    "*Message sent at 3 AM* '...{name}. I'll wait for you at the back gate this morning. Let's go together.'":
        ["*Mensaje enviado a las 3 AM* '...{name}. Te espero en la puerta trasera esta mañana. Vamos juntos.'",
         "*深夜3時に届いたメッセージ*「…{name}。今朝、裏門で待ってる。一緒に行こう。」"],

    "*Message sent at 7 AM* 'Yay! {name}! Let's go to school together! Where do you live? I'll come find you! ><'":
        ["*Mensaje enviado a las 7 AM* '¡Yuju! ¡{name}! ¡Vamos juntos a la escuela! ¿Dónde vives? ¡Voy a buscarte! ><'",
         "*朝7時に届いたメッセージ*「やっほー！{name}！一緒に学校行こう！家どこ？迎えに行くよ！><」"],

    "*Message sent last night at 11 PM* 'Hehe, {name}. How about walking to school together this morning? Just the two of us... \u{1F609}'":
        ["*Mensaje enviado anoche a las 11 PM* 'Jeje, {name}. ¿Qué tal si caminamos juntos a la escuela esta mañana? Solo nosotros dos... \u{1F609}'",
         "*昨夜11時に届いたメッセージ*「ふふっ、{name}。今朝一緒に登校しない？先生と二人きりで…\u{1F609}」"],

    "*Message sent last night at 10 PM* '{name}, are you going to school early tomorrow morning? I'm going early too, would you like to walk together?'":
        ["*Mensaje enviado anoche a las 10 PM* '{name}, ¿vas a ir temprano a la escuela mañana? Yo también voy temprano, ¿quieres caminar juntos?'",
         "*昨夜10時に届いたメッセージ*「{name}、明日の朝早く登校する？先生も早く行くんだけど、一緒に歩かない？」"],

    // Reply messages
    "*How should I reply?*":
        ["*¿Cómo debería responder?*",
         "*どう返信しようか？*"],

    "*Let me check other messages.*":
        ["*Voy a revisar los otros mensajes.*",
         "*他のメッセージも確認しよう。*"],

    "*Should I check other messages?*":
        ["*¿Debería revisar otros mensajes?*",
         "*他のメッセージも確認しようか？*"],

    "*I already saw this message...*":
        ["*Ya vi este mensaje...*",
         "*このメッセージはもう見た…*"],

    // Reject messages
    "*Reply* 'Oh... I see. It's okay! See you at school then!'":
        ["*Respuesta* 'Ah... ya veo. ¡Está bien! ¡Nos vemos en la escuela entonces!'",
         "*返信*「あ…そうなんだ。大丈夫！じゃあ学校でね！」"],

    "*Reply* '...Alright. Sometimes it's more comfortable to go alone.'":
        ["*Respuesta* '...Está bien. A veces es más cómodo ir solo.'",
         "*返信*「…そう。一人の方が楽な時もあるよね。」"],

    "*Reply* 'Aw, that's too bad! But see you at school!'":
        ["*Respuesta* '¡Ay, qué lástima! ¡Pero nos vemos en la escuela!'",
         "*返信*「えー残念！でも学校で会おうね！」"],

    "*Reply* 'Oh my, really? That's a shame. See you at school then.'":
        ["*Respuesta* 'Vaya, ¿en serio? Qué lástima. Nos vemos en la escuela entonces.'",
         "*返信*「あら、そう？残念ね。じゃあ学校でね。」"],

    "*Reply* 'Okay, understood. See you at school!'":
        ["*Respuesta* 'Bueno, entendido. ¡Nos vemos en la escuela!'",
         "*返信*「そう、わかった。学校で会おうね！」"],

    // Change mind
    "*I sent another message. 'Sorry, I just checked other messages. I actually want to go together!'*":
        ["*Envié otro mensaje. 'Perdón, estaba revisando otros mensajes. ¡En realidad quiero ir contigo!'*",
         "*もう一度メッセージを送った。「ごめん、他のメッセージ確認してた。やっぱり一緒に行きたい！」*"],

    "*I sent another message. 'Sorry, I actually want to go together!'*":
        ["*Envié otro mensaje. 'Perdón, ¡en realidad quiero ir contigo!'*",
         "*もう一度メッセージを送った。「すみません、やっぱり一緒に行きたいです！」*"],

    // Change mind replies
    "*Immediate reply* 'Really?! Great! Then hurry up and come out! I'll wait!'":
        ["*Respuesta inmediata* '¡¿En serio?! ¡Genial! ¡Entonces sal rápido! ¡Te espero!'",
         "*即座に返信が来た*「本当？！やったー！じゃあ早く出てきて！待ってるね！」"],

    "*Reply after a moment* '...Okay. I'll wait.'":
        ["*Respuesta después de un momento* '...Está bien. Te espero.'",
         "*しばらくして返信が来た*「…わかった。待ってる。」"],

    "*Immediate reply* 'Okay! I'm leaving now! Wait for me!'":
        ["*Respuesta inmediata* '¡Okey! ¡Ya salgo! ¡Espérame!'",
         "*即座に返信が来た*「オッケー！今出発するね！待っててー！」"],

    "*Reply* 'Hehe, changed your mind? Good, come out quickly.'":
        ["*Respuesta* 'Jeje, ¿cambiaste de opinión? Bien, sal rápido.'",
         "*返信*「ふふ、気が変わった？よかった、早く出てきて。」"],

    "*Reply* 'Really? That's fine! Get ready quickly.'":
        ["*Respuesta* '¿En serio? ¡Está bien! Prepárate rápido.'",
         "*返信*「本当？大丈夫よ！早く準備してね。」"],

    // Return to choice
    "*Hmm... who should I go with?*":
        ["*Hmm... ¿con quién debería ir?*",
         "*うーん…誰と一緒に行こうか？*"],

    // Walk with Seoyeon
    "*I headed to the front of Seoyeon's house.*":
        ["*Me dirigí al frente de la casa de Seoyeon.*",
         "*ソヨンの家の前に向かった。*"],

    "\"Wow! You really came! Thank you!\"":
        ["\"¡Wow! ¡De verdad viniste! ¡Gracias!\"",
         "\"わあ！本当に来てくれたんだ！ありがとう！\""],

    "*Walking side by side* \"Hey, {name}. Do you know what I dreamed about last night?\"":
        ["*Caminando lado a lado* \"Oye, {name}. ¿Sabes qué soñé anoche?\"",
         "*並んで歩きながら*「ねえ、{name}。昨夜の夢の話、聞いてくれる？」"],

    "*Seoyeon suddenly brings up a dream.*":
        ["*Seoyeon de repente saca el tema de un sueño.*",
         "*ソヨンが突然夢の話を切り出す。*"],

    "*Seoyeon's face turns red* \"I-it's a secret! It was nothing! Why are you asking?!\"":
        ["*La cara de Seoyeon se pone roja* \"¡E-es un secreto! ¡No fue nada! ¡¿Por qué preguntas?!\"",
         "*ソヨンの顔が真っ赤になる*「ひ、秘密！なんでもないよ！なんで聞くの！」"],

    "*Seoyeon freezes* \"W-what?! Why would you think that! ...Okay, maybe, but that's not the point!\"":
        ["*Seoyeon se congela* \"¡¿Q-qué?! ¡¿Por qué piensas eso?! ...Bueno, tal vez, ¡pero ese no es el punto!\"",
         "*ソヨンが固まる*「な…っ！なんでそう思うの！…当たってるけど、そういう話じゃなくて…」"],

    "*Seoyeon sighs* \"Ugh, you totally killed the mood. It was a good dream, you know!\"":
        ["*Seoyeon suspira* \"Ugh, arruinaste totalmente el ambiente. ¡Fue un buen sueño, sabes!\"",
         "*ソヨンがため息をつく*「もう、完全に雰囲気壊しだよ。いい夢だったのに！」"],

    "*We wait for the light at the crosswalk. Standing still, Seoyeon's hand is tantalizingly close to mine.*":
        ["*Esperamos la luz en el cruce peatonal. Sin movernos, la mano de Seoyeon está tentadoramente cerca de la mía.*",
         "*横断歩道で信号を待つ。じっと立っていると、ソヨンの手が僕の手に触れそうなくらい近い。*"],

    "*Seoyeon lightly brushes my hand with her pinky finger. Our eyes meet, and we both look away at the same time.*":
        ["*Seoyeon roza ligeramente mi mano con su meñique. Nuestros ojos se encuentran, y ambos miramos hacia otro lado al mismo tiempo.*",
         "*ソヨンが小指で僕の手をそっと触れる。目が合うと、二人同時に視線をそらす。*"],

    // Seoyeon free talk
    "*We chat about various things on the way to school.*":
        ["*Charlamos de varias cosas camino a la escuela.*",
         "*学校までの道、ソヨンと色んな話をする。*"],

    // Seoyeon weekend talk
    "*As the school gate comes into view, Seoyeon stutters as if trying to say something difficult* \"Um... {name}. Are you free this weekend? There's a café I've been wanting to visit...\"":
        ["*Cuando aparece la puerta de la escuela, Seoyeon tartamudea como si intentara decir algo difícil* \"Este... {name}. ¿Estás libre este fin de semana? Hay una cafetería que he querido visitar...\"",
         "*校門が見えてくる頃、ソヨンが何か言いづらそうに口ごもる*「あの…{name}。今週末、もし時間あったら…行きたいカフェがあるんだけど…」"],

    "\"I saw it on social media, and it has a really pretty vibe. It's awkward going alone though... Let's meet at the park fountain at 2 PM on Saturday!\"":
        ["\"Lo vi en redes sociales, y tiene un ambiente muy bonito. Es incómodo ir sola... ¡Nos vemos en la fuente del parque a las 2 PM el sábado!\"",
         "\"SNSで見つけたんだけど、すごく雰囲気がいいところなの。一人で行くのはちょっと…土曜日の午後2時、公園の噴水前で会おう！\""],

    "*Seoyeon's face turns bright red* \"W-what?! It's just friends hanging out! ...But I didn't invite anyone else. Saturday at 2 PM, at the park fountain.\"":
        ["*La cara de Seoyeon se pone roja* \"¡¿Q-qué?! ¡Solo somos amigos saliendo! ...Pero no invité a nadie más. Sábado a las 2 PM, en la fuente del parque.\"",
         "*ソヨンの顔が真っ赤になる*「な…っ！ただの友達同士のお出かけだし！…でも他の人は誘ってないけど。土曜日の午後2時、公園の噴水前ね。」"],

    "*Seoyeon beams* \"Really?! Saturday at 2 PM, at the park fountain! You better not be late!\"":
        ["*Seoyeon sonríe radiante* \"¡¿En serio?! ¡Sábado a las 2 PM, en la fuente del parque! ¡Más te vale no llegar tarde!\"",
         "*ソヨンが満面の笑みを浮かべる*「本当？！土曜日の午後2時、公園の噴水前ね！遅れたらダメだよ！」"],

    "*Seoyeon looks at me with eyes full of anticipation.*":
        ["*Seoyeon me mira con ojos llenos de anticipación.*",
         "*ソヨンが期待に満ちた目で僕を見つめる。*"],

    "*Seoyeon nearly shouts but quickly covers her mouth* \"...Ahem! O-okay. See you Saturday then. You can look forward to it!\"":
        ["*Seoyeon casi grita pero rápidamente se cubre la boca* \"...¡Ejem! B-bueno. Nos vemos el sábado entonces. ¡Puedes esperar con ansias!\"",
         "*ソヨンが叫びそうになって慌てて口を押さえる*「…ゴホン！そ、そうだね。じゃあ土曜日にね。楽しみにしてて！」"],

    "*Seoyeon's expression dims slightly* \"...Okay, I see. Let me know later then.\"":
        ["*La expresión de Seoyeon se oscurece ligeramente* \"...Bueno, entiendo. Avísame después entonces.\"",
         "*ソヨンの表情が少し曇る*「…うん、わかった。じゃあ後で教えてね。」"],

    "*Seoyeon forces a smile* \"...Oh, is that so? It's fine! We can go some other time!\"":
        ["*Seoyeon fuerza una sonrisa* \"...Ah, ¿en serio? ¡Está bien! ¡Podemos ir en otra ocasión!\"",
         "*ソヨンが無理に笑う*「…あ、そうなんだ？大丈夫！また今度行けばいいよね！」"],

    // Walk with Yuna
    "*I headed toward the alley on the way to school. Yuna is standing under the shade of a tree.*":
        ["*Me dirigí hacia el callejón camino a la escuela. Yuna está parada bajo la sombra de un árbol.*",
         "*学校への近道の路地に向かった。木陰の下にユナが立っている。*"],

    "\"...You came. (Walking quietly) The weather is nice today. But... things that look peaceful are often the most dangerous.\"":
        ["\"...Viniste. (Caminando tranquilamente) El clima está lindo hoy. Pero... las cosas que se ven pacíficas son a menudo las más peligrosas.\"",
         "\"…来たんだ。（静かに歩きながら）今日は天気がいいね。でも…平和に見えるものほど、一番危険なんだよ。\""],

    "*A leaf blown by the wind lands on my head. Yuna quietly reaches out and picks it off.*":
        ["*Una hoja llevada por el viento cae en mi cabeza. Yuna silenciosamente extiende la mano y la quita.*",
         "*風に飛ばされた葉っぱが僕の頭の上に落ちた。ユナが静かに手を伸ばしてそれを取る。*"],

    "\"...Prettier than a flower.\"":
        ["\"...Más bonita que una flor.\"",
         "\"…花より綺麗。\""],

    "*My heart skips at Yuna's deadpan remark. Before I can respond, Yuna suddenly stops walking.*":
        ["*Mi corazón salta con el comentario inexpresivo de Yuna. Antes de que pueda responder, Yuna de repente deja de caminar.*",
         "*ユナの無表情な一言に心臓が跳ねる。何か言おうとする前に、ユナが急に立ち止まる。*"],

    "\"...Hey. Stay still.\"":
        ["\"...Oye. Quédate quieto.\"",
         "\"…ねえ。じっとして。\""],

    "*Yuna starts fixing my necktie. Her face is barely 10 centimeters away from mine.*":
        ["*Yuna empieza a arreglar mi corbata. Su cara está a apenas 10 centímetros de la mía.*",
         "*ユナが僕のネクタイを直し始める。顔が10センチの距離まで近づいている。*"],

    "\"...Dummy. How can you walk around with it this loose.\"":
        ["\"...Tonto. Cómo puedes caminar con esto tan suelto.\"",
         "\"…バカ。こんなに緩いままでどうするの。\""],

    "*Yuna's hands pause. After a moment of silence* \"...Want me to warm them up?\"":
        ["*Las manos de Yuna se detienen. Después de un momento de silencio* \"...¿Quieres que las caliente?\"",
         "*ユナの手が止まる。少しの沈黙の後*「…温めてあげようか？」"],

    // Yuna free talk
    "*I walk alongside Yuna toward school. A quiet but comfortable silence fills the air.*":
        ["*Camino junto a Yuna hacia la escuela. Un silencio tranquilo pero cómodo llena el aire.*",
         "*ユナと並んで学校に向かって歩く。静かだけど心地よい沈黙が流れる。*"],

    // Yuna weekend talk
    "*Walking down the quiet path, Yuna suddenly speaks* \"{name}, this weekend... there's a place I want to show only you.\"":
        ["*Caminando por el sendero tranquilo, Yuna habla de repente* \"{name}, este fin de semana... hay un lugar que quiero mostrarte solo a ti.\"",
         "*静かな道を歩いていると、ユナが突然口を開く*「{name}、週末…君にだけ見せたい場所がある。」"],

    "\"...A place where you can see the real face of this school. Saturday evening at 8 PM, at the school's back gate. Don't be late. There are things that can only be seen in the darkness.\"":
        ["\"...Un lugar donde puedes ver la verdadera cara de esta escuela. Sábado a las 8 PM, en la puerta trasera de la escuela. No llegues tarde. Hay cosas que solo se pueden ver en la oscuridad.\"",
         "\"…この学校の本当の姿が見える場所。土曜の夜8時、学校の裏門で。遅れないで。闇の中でしか見えないものがあるから。\""],

    "*Yuna smiles coldly* \"It's closer to the truth than a secret. Saturday evening at 8 PM. Everything changes after the sun sets. You'll come, right?\"":
        ["*Yuna sonríe fríamente* \"Es más cercano a la verdad que a un secreto. Sábado a las 8 PM. Todo cambia después de que se pone el sol. Vendrás, ¿verdad?\"",
         "*ユナが冷たく微笑む*「秘密というより…真実に近いかな。土曜の夜8時。日が沈んだら全てが変わる。来るでしょ？」"],

    "*Yuna looks at me in surprise, then smiles* \"...That's so like you. Saturday evening at 8 PM, school back gate. There are things that can only be seen when darkness falls. You must come.\"":
        ["*Yuna me mira sorprendida, luego sonríe* \"...Eso es tan tú. Sábado a las 8 PM, puerta trasera de la escuela. Hay cosas que solo se ven cuando cae la oscuridad. Debes venir.\"",
         "*ユナが驚いたように僕を見て、それから微笑む*「…やっぱり君だね。土曜の夜8時、学校の裏門。暗闇が降りないと見えないものがある。絶対来てね。」"],

    "*Yuna's serious gaze pierces through me. 8 PM in the evening... Something feels ominous.*":
        ["*La mirada seria de Yuna me atraviesa. Las 8 PM... Algo se siente ominoso.*",
         "*ユナの真剣な眼差しが僕を射抜く。夜の8時か…何か只事ではない気がする。*"],

    "*Yuna briefly holds my hand then lets go* \"...Thank you. You won't regret it. Saturday night, be ready to face the truth.\"":
        ["*Yuna toma brevemente mi mano y luego la suelta* \"...Gracias. No te arrepentirás. El sábado por la noche, prepárate para enfrentar la verdad.\"",
         "*ユナが僕の手をそっと握って、離す*「…ありがとう。後悔しないよ。土曜の夜、真実と向き合う覚悟をしておいて。」"],

    "*Yuna looks disappointed and turns her head away* \"...I see. But there's only one chance. Think carefully. There's a door that only opens at night.\"":
        ["*Yuna se ve decepcionada y voltea la cabeza* \"...Ya veo. Pero solo hay una oportunidad. Piénsalo bien. Hay una puerta que solo se abre de noche.\"",
         "*ユナが残念そうに顔をそらす*「…そう。でもチャンスは一度きり。よく考えて。夜にしか開かない扉があるから。」"],

    "*Yuna's gaze turns cold* \"......\"":
        ["*La mirada de Yuna se vuelve fría* \"......\"",
         "*ユナの視線が冷たくなる*「……」"],

    // Walk with Dain
    "*On the way to the meeting spot. From a distance, Dain is waving her hand widely and running toward me.*":
        ["*Camino al punto de encuentro. A lo lejos, Dain agita su mano ampliamente y corre hacia mí.*",
         "*待ち合わせ場所に向かう途中。遠くからダインが大きく手を振りながら全力で走ってくる。*"],

    "\"{name}!! Yay!\"":
        ["\"{name}!! ¡Yuju!\"",
         "\"{name}！！やっほー！\""],

    "*Dain charges at me full speed with no brakes. There's no time to dodge— CRASH!*":
        ["*Dain carga hacia mí a toda velocidad sin frenos. No hay tiempo para esquivar— ¡CRASH!*",
         "*ダインがブレーキなしで全速力で突っ込んでくる。避ける暇もなく―ドンッ！*"],

    "\"Ow! S-sorry! I couldn't stop!\"":
        ["\"¡Ay! ¡P-perdón! ¡No pude detenerme!\"",
         "\"いたっ！ご、ごめん！止まれなかった！\""],

    "*Dain fell on top of me. Our faces are barely 10 centimeters apart... I can feel her breath.*":
        ["*Dain cayó encima de mí. Nuestras caras están a apenas 10 centímetros... Puedo sentir su aliento.*",
         "*ダインが僕の上に倒れ込んだ。お互いの顔が10センチの距離…ダインの息遣いが感じられる。*"],

    "*As I take her hand and help her up, Dain's face turns beet red* \"Th-thanks... My heart almost exploded! I mean from the crash! Not for any other reason!\"":
        ["*Al tomar su mano y ayudarla a levantarse, la cara de Dain se pone roja* \"G-gracias... ¡Mi corazón casi explota! ¡Digo, por el choque! ¡No por otra razón!\"",
         "*手を取って起こしてあげると、ダインの顔が真っ赤になる*「あ、ありがと…心臓止まるかと思った！ぶつかったからだよ！他の理由じゃないからね！」"],

    "\"Huh?! Y-you idiot! Get up now! People are watching!\"":
        ["\"¡¿Eh?! ¡I-idiota! ¡Levántate ya! ¡La gente está mirando!\"",
         "\"はぁ？！ば、バカ！早く起きてよ！人が見てるじゃん！\""],

    "\"Hey, what's wrong?! Who's blushing here?! ...Am I blushing too? Ugh, whatever!\"":
        ["\"¡Oye, qué pasa?! ¡¿Quién se sonroja aquí?! ...¿Yo también estoy sonrojada? ¡Ugh, como sea!\"",
         "\"ちょっと、どうしたの？！顔赤いのは誰？！…私も赤い？あーもう知らない！\""],

    "*Jumping up and dusting herself off* \"...Dummy. What are you doing first thing in the morning.\"":
        ["*Se levanta de un salto y se sacude el polvo* \"...Tonto. Qué haces a primera hora de la mañana.\"",
         "*ぱっと起き上がって埃を払いながら*「…バカ。朝から何やってんの。」"],

    "*Composing herself* \"A-anyway! Let's walk to school together! The weather is perfect for exercise today!\"":
        ["*Recomponiéndose* \"¡D-de todos modos! ¡Vamos juntos a la escuela! ¡El clima está perfecto para hacer ejercicio hoy!\"",
         "*気を取り直して*「と、とにかく！一緒に学校行こう！今日は運動日和だよね？」"],

    // Dain free talk
    "*I walk alongside Dain toward school. Perhaps because of the earlier collision, she's keeping a bit more distance than usual.*":
        ["*Camino junto a Dain hacia la escuela. Tal vez por el choque de antes, mantiene un poco más de distancia de lo usual.*",
         "*ダインと並んで学校に向かう。さっきぶつかった事があったからか、いつもより少し距離を保っている。*"],

    // Dain weekend talk
    "*Walking excitedly* \"Oh! By the way {name}! Tomorrow at 9 AM, our team has a practice match at the gym. Come cheer for me!\"":
        ["*Caminando emocionada* \"¡Ah! ¡Por cierto {name}! Mañana a las 9 AM, nuestro equipo tiene un partido de práctica en el gimnasio. ¡Ven a animarme!\"",
         "*ウキウキしながら歩いて*「あ！そうだ{name}！明日の朝9時に体育館でうちのチームの練習試合があるんだ！応援に来てよ！」"],

    "*Dain jumps excitedly* \"Really?! Awesome! Then after practice, let's eat together! Let's go get tteokbokki!\"":
        ["*Dain salta emocionada* \"¡¿En serio?! ¡Genial! ¡Entonces después de la práctica, comamos juntos! ¡Vamos a comer tteokbokki!\"",
         "*ダインが興奮して飛び跳ねる*「マジで？！やった！じゃあ練習終わったら一緒にご飯食べよ！トッポッキ食べに行こう！」"],

    "*Dain smiles* \"Right? It's hard for me to wake up early too, but it would really give me energy if you came!\"":
        ["*Dain sonríe* \"¿Verdad? A mí también me cuesta levantarme temprano, ¡pero me daría mucha energía si vinieras!\"",
         "*ダインが笑う*「だよね？私も早起き辛いけど、来てくれたら本当に元気出ると思う！」"],

    "*Dain puts her arm around my shoulder* \"It's okay! Just come and cheer! I'll show you my awesome spike!\"":
        ["*Dain pone su brazo alrededor de mi hombro* \"¡Está bien! ¡Solo ven y anima! ¡Te mostraré mi increíble remate!\"",
         "*ダインが肩に腕を回す*「大丈夫！応援に来るだけでいいから！かっこいいスパイク見せてあげるよ！」"],

    "*Dain looks at me with hopeful eyes.*":
        ["*Dain me mira con ojos esperanzados.*",
         "*ダインが期待に満ちた目で僕を見る。*"],

    "*Dain grabs my hand and shakes it* \"Wow! You're the best {name}! Then see you on Saturday! Don't be late!\"":
        ["*Dain toma mi mano y la sacude* \"¡Wow! ¡Eres el mejor {name}! ¡Entonces nos vemos el sábado! ¡No llegues tarde!\"",
         "*ダインが僕の手を掴んで振る*「わー！{name}最高！じゃあ土曜日に絶対会おうね！遅れたらダメだよ！」"],

    "*Dain looks a bit down* \"Aw... But you have to come, okay? Promise?\"":
        ["*Dain se desanima un poco* \"Ay... Pero tienes que venir, ¿de acuerdo? ¿Lo prometes?\"",
         "*ダインが少ししょんぼりする*「えー…でも絶対来てね？約束だよ？」"],

    "*Dain makes a disappointed face* \"Oh... I see. But if you have time later, make sure to visit!\"":
        ["*Dain hace una cara decepcionada* \"Ah... ya veo. ¡Pero si tienes tiempo después, asegúrate de visitarnos!\"",
         "*ダインが残念そうな顔をする*「あ…そうなんだ。でも時間できたら絶対遊びに来てね！」"],

    // Walk with Nurse
    "*I headed to the meeting spot with the teacher. The school nurse is waiting.*":
        ["*Me dirigí al punto de encuentro con la profesora. La enfermera escolar está esperando.*",
         "*先生との待ち合わせ場所に向かった。保健先生が待っている。*"],

    "\"Oh my, {name}. You came? Hehe, our transfer student is so nice. Come on, let's walk together.\"":
        ["\"Vaya, {name}. ¿Viniste? Jeje, nuestro estudiante transferido es tan amable. Vamos, caminemos juntos.\"",
         "\"あら、{name}。来たのね？ふふ、うちの転校生は本当にいい子ね。さあ、一緒に歩こう。\""],

    "*The teacher subtly places her hand on my arm as we walk side by side. What would people think if they saw us...*":
        ["*La profesora sutilmente pone su mano en mi brazo mientras caminamos lado a lado. ¿Qué pensaría la gente si nos viera...?*",
         "*先生がさりげなく僕の腕に手を置いて並んで歩く。他の人に見られたらどう思うだろう…*"],

    "*The teacher smiles with satisfaction* \"Hehe, this is nice. Walking together like this.\"":
        ["*La profesora sonríe satisfecha* \"Jeje, esto es agradable. Caminar juntos así.\"",
         "*先生が満足そうに微笑む*「ふふ、いいわね。こうやって一緒に歩くの。\""],

    "*The teacher sighs softly and removes her hand* \"You're right... We can't let anyone find out about us.\"":
        ["*La profesora suspira suavemente y retira su mano* \"Tienes razón... No podemos dejar que nadie se entere de nosotros.\"",
         "*先生が小さくため息をついて手を離す*「そうね…バレちゃいけないもんね、私たちのこと。\""],

    "*Looking lost in thought, she says quietly* \"...{name}, I know a teacher shouldn't be doing this with a student... but my heart won't listen.\"":
        ["*Perdida en sus pensamientos, dice en voz baja* \"...{name}, sé que una profesora no debería hacer esto con un estudiante... pero mi corazón no obedece.\"",
         "*何か考え込むように静かに*「…{name}、先生が生徒にこんなことしちゃいけないってわかってるんだけど…気持ちが言うこと聞かないの。\""],

    "*There's an unusual seriousness in her voice. Is she struggling with this too?*":
        ["*Hay una seriedad inusual en su voz. ¿Ella también está luchando con esto?*",
         "*先生の声にいつもにない真剣さが感じられる。先生も葛藤しているのだろうか。*"],

    "*Her eyes go wide* \"...You're really dangerous, you know? Making a teacher's heart waver like this.\"":
        ["*Sus ojos se abren ampliamente* \"...Eres realmente peligroso, ¿lo sabías? Haciendo que el corazón de una profesora se tambalee así.\"",
         "*先生の目が大きく見開かれる*「…あなた、本当に危険な子ね。先生の心をこんなに揺さぶるなんて。\""],

    "*She looks down at our hands in surprise... then holds on tight* \"...Just five seconds. Let's stay like this for just five seconds.\"":
        ["*Ella mira nuestras manos con sorpresa... luego aprieta fuerte* \"...Solo cinco segundos. Quedémonos así solo cinco segundos.\"",
         "*驚いたように繋いだ手を見つめて…ぎゅっと握り返す*「…5秒だけ。5秒だけこうしてよう。\""],

    "*Her expression freezes for a moment before she forces a smile* \"...Right. A teacher is a teacher, after all.\"":
        ["*Su expresión se congela por un momento antes de forzar una sonrisa* \"...Cierto. Una profesora es una profesora, después de todo.\"",
         "*先生の表情が一瞬固まって、無理に笑顔を作る*「…そうよね。先生は先生だもんね。\""],

    // Nurse free talk
    "*I walk toward school with the nurse. A strange mix of tension and excitement fills the air.*":
        ["*Camino hacia la escuela con la enfermera. Una extraña mezcla de tensión y emoción llena el aire.*",
         "*保健先生と一緒に学校に向かう。妙な緊張感とときめきが同時に感じられる。*"],

    // Nurse weekend
    "*Walking to school, the teacher subtly places her hand on my arm* \"Say, {name}. Do you have time this weekend?\"":
        ["*Caminando a la escuela, la profesora sutilmente coloca su mano en mi brazo* \"Oye, {name}. ¿Tienes tiempo este fin de semana?\"",
         "*登校中、先生がさりげなく僕の腕に手を触れる*「ねえ、{name}。今週末、時間ある？\""],

    "*The teacher smiles meaningfully* \"Hehe, actually... I reserved a nice restaurant for Sunday evening. It'd be a shame to go alone... Want to come with me? How about Sunday evening at 7?\"":
        ["*La profesora sonríe con significado* \"Jeje, en realidad... Reservé un lindo restaurante para el domingo por la noche. Sería una lástima ir sola... ¿Quieres venir conmigo? ¿Qué tal el domingo a las 7?\"",
         "*先生が意味深に微笑む*「ふふ、実は…日曜の夜においしいレストラン予約してあるの。一人で行くのもったいなくて…一緒に行かない？日曜の夜7時はどう？\""],

    "*The teacher winks playfully* \"Hmm... I have a nice restaurant reserved and I wanted to go together. If you're okay with it... Sunday evening at 7?\"":
        ["*La profesora guiña el ojo juguetonamente* \"Hmm... Tengo un buen restaurante reservado y quería ir juntos. Si estás de acuerdo... ¿domingo a las 7?\"",
         "*先生がいたずらっぽくウインクする*「うーん…いいレストラン予約してあるんだけど、一緒に行きたくて。もしよかったら…日曜の夜7時に？\""],

    "*The teacher smiles with satisfaction* \"Really? Then let's have dinner together on Sunday evening! How about meeting at 7? I'll send you the address.\"":
        ["*La profesora sonríe satisfecha* \"¿En serio? ¡Entonces cenemos juntos el domingo por la noche! ¿Qué tal a las 7? Te enviaré la dirección.\"",
         "*先生が満足そうに微笑む*「本当？じゃあ日曜の夜に一緒にご飯食べよう！7時に待ち合わせでどう？住所送るね。\""],

    "*The teacher gazes at me with captivating eyes. My heart is racing...*":
        ["*La profesora me mira con ojos cautivadores. Mi corazón late acelerado...*",
         "*先生が魅惑的な瞳で僕を見つめる。心臓がドキドキする…*"],

    "*The teacher gently squeezes my hand then lets go* \"Hehe, really? Then Sunday evening at 7, I'll be looking forward to it. Dress up nice, okay?\"":
        ["*La profesora aprieta suavemente mi mano y luego la suelta* \"Jeje, ¿en serio? Entonces el domingo a las 7, estaré esperando con ansias. Vístete bien, ¿de acuerdo?\"",
         "*先生が僕の手をそっと握って離す*「ふふ、本当？じゃあ日曜の夜7時、楽しみにしてるわね。かっこよくして来てね？\""],

    "*The teacher makes a slightly disappointed face* \"Oh... really? Then come visit the nurse's office at lunchtime. Let's talk again.\"":
        ["*La profesora hace una cara ligeramente decepcionada* \"Oh... ¿en serio? Entonces ven a la enfermería a la hora del almuerzo. Hablemos de nuevo.\"",
         "*先生が少し残念そうな表情を見せる*「あら…そう？じゃあお昼休みに保健室に遊びに来て。またお話しましょ。\""],

    "*The teacher's smile stiffens slightly* \"...I see. That's okay. Maybe next time.\"":
        ["*La sonrisa de la profesora se endurece ligeramente* \"...Ya veo. Está bien. Tal vez la próxima vez.\"",
         "*先生の笑顔が少し硬くなる*「…そう。大丈夫よ。また今度ね。\""],

    // Walk with Teacher (Homeroom)
    // These follow similar patterns - I'll add them dynamically

    // === LUNCH ===
    "*The lunch bell rings. It's Friday... Tomorrow is the weekend.*":
        ["*Suena la campana del almuerzo. Es viernes... Mañana es fin de semana.*",
         "*昼休みを知らせるチャイムが鳴った。今日は金曜日…明日から週末だ。*"],

    "*As I try to get up from my desk, I feel multiple eyes on me.*":
        ["*Cuando intento levantarme de mi escritorio, siento varias miradas sobre mí.*",
         "*席を立とうとすると、複数の視線を感じる。*"],

    "*Uh... wait, why is everyone coming this way...?*":
        ["*Eh... espera, ¿por qué todos vienen hacia acá...?*",
         "*え…ちょっと待て、なんでみんなこっちに…？*"],

    "*The girls I made plans with are all approaching me at the same time. This doesn't look good...*":
        ["*Las chicas con las que hice planes se acercan todas al mismo tiempo. Esto no pinta bien...*",
         "*約束した子たちが同時に近づいてくる。これはまずい…*"],

    "*Who should I eat with...?*":
        ["*¿Con quién debería comer...?*",
         "*誰と食べようか…？*"],

    "\"Hey, {name}! Want to have lunch... huh?\"":
        ["\"¡Oye, {name}! ¿Quieres almorzar... eh?\"",
         "\"あ、{name}！一緒にお昼…あれ？\""],

    "\"...{name}. Come with me.\"":
        ["\"...{name}. Ven conmigo.\"",
         "\"…{name}。一緒に来て。\""],

    // === AFTERNOON ===
    "*Finally, homeroom is over. Friday after school... Freedom mixed with strange tension.*":
        ["*Por fin terminó la clase. Viernes después de clases... Libertad mezclada con una extraña tensión.*",
         "*やっと終礼が終わった。金曜日の放課後…解放感と共に妙な緊張感がある。*"],

    "*As I pack my bag...*":
        ["*Mientras empaco mi mochila...*",
         "*鞄を片付けようとすると…*"],

    "*The classroom atmosphere is heavy. Must be because of lunch...*":
        ["*El ambiente del salón está pesado. Debe ser por lo del almuerzo...*",
         "*教室の雰囲気が重い。さっきの昼休みのせいだろう…*"],

    "\"...{name}, can we talk for a moment?\"":
        ["\"...{name}, ¿podemos hablar un momento?\"",
         "\"…{name}、ちょっと話がある。\""],

    "*Seoyeon takes me to the hallway. Her expression looks serious.*":
        ["*Seoyeon me lleva al pasillo. Su expresión se ve seria.*",
         "*ソヨンに廊下に連れ出された。表情が真剣だ。*"],

    "\"About lunch... Did you really make weekend plans with all of us?\"":
        ["\"Sobre el almuerzo... ¿De verdad hiciste planes de fin de semana con todas nosotras?\"",
         "\"お昼のことなんだけど…本当にみんなと週末の約束したの？\""],

    "*How should I answer...*":
        ["*¿Cómo debería responder...?*",
         "*どう答えればいいんだろう…*"],

    "\"...Yes. Sorry. I couldn't turn anyone down...\"":
        ["\"...Sí. Perdón. No pude rechazar a nadie...\"",
         "\"…うん。ごめん。みんなに断れなくて…\""],

    "\"...Thanks for being honest. But I don't like that.\"":
        ["\"...Gracias por ser honesto. Pero no me gusta eso.\"",
         "\"…正直に言ってくれてありがとう。でも、嫌だよそういうの。\""],

    // === NIGHT ===
    "*I'm home. Friday night... Tomorrow starts the weekend.*":
        ["*Estoy en casa. Viernes por la noche... Mañana empieza el fin de semana.*",
         "*家に着いた。金曜の夜…明日から週末だ。*"],

    "*Lying on the bed, I reflect on today. What happened at lunch... what happened after school...*":
        ["*Acostado en la cama, reflexiono sobre hoy. Lo que pasó en el almuerzo... lo que pasó después de clases...*",
         "*ベッドに横になって今日一日を振り返る。昼休みのこと…放課後のこと…*"],

    "*Everyone found out at lunch... Can the weekend go smoothly?*":
        ["*Todos se enteraron en el almuerzo... ¿Podrá el fin de semana transcurrir sin problemas?*",
         "*昼休みに全部バレた…週末は無事に過ごせるだろうか？*"],

    "*I made multiple plans... I need to manage my time well.*":
        ["*Hice múltiples planes... Necesito administrar bien mi tiempo.*",
         "*複数の約束を入れてしまった…時間配分をうまくやらないと。*"],

    "*I'm looking forward to tomorrow. What kind of day will it be?*":
        ["*Espero con ansias el mañana. ¿Qué tipo de día será?*",
         "*明日が楽しみだ。どんな一日になるだろう？*"],

    "*I check my smartphone. There are messages.*":
        ["*Reviso mi teléfono. Hay mensajes.*",
         "*スマホを確認する。メッセージが来ている。*"],

    "*There are multiple messages... My heart is pounding.*":
        ["*Hay múltiples mensajes... Mi corazón late con fuerza.*",
         "*メッセージが複数来ている…心臓がドキドキする。*"],

    "*Which message should I check first?*":
        ["*¿Qué mensaje debería revisar primero?*",
         "*どのメッセージから確認しようか？*"],
};

// ============================================================================
// CHOICE TRANSLATION MAPS
// ============================================================================

const CHOICE_MAP = {
    // Morning choices
    "\"Thank you, teacher...\"": ["\"Gracias, profesora...\"", "「ありがとうございます、先生…」"],
    "\"Last night... was amazing\"": ["\"Anoche... fue increíble\"", "「昨夜は…最高でした」"],
    "*Too embarrassed to speak*": ["*Demasiado avergonzado para hablar*", "*恥ずかしくて何も言えない*"],
    "\"Just took a walk...\"": ["\"Solo estaba paseando...\"", "「ちょっと散歩してて…」"],
    "\"Stayed at a relative's house\"": ["\"Me quedé en casa de un familiar\"", "「親戚の家に泊まってたんだ」"],
    "*Stammer nervously*": ["*Balbuceo nerviosamente*", "*しどろもどろになる*"],
    "\"I'll be late for class, gotta go!\"": ["\"¡Voy a llegar tarde a clase, me voy!\"", "「授業に遅れる、先に行くね！」"],
    "\"It's a misunderstanding, I was at my parents' friend's place...\"": ["\"Es un malentendido, estaba en casa de un amigo de mis padres...\"", "「誤解だよ、親の友達の家に…」"],
    "Sure! Let's go together": ["¡Claro! Vamos juntos", "いいよ！一緒に行こう"],
    "Sorry, I'll go alone today": ["Perdón, hoy iré solo", "ごめん、今日は一人で行くよ"],
    "Check other messages": ["Revisar otros mensajes", "他のメッセージを確認する"],
    "Yes! Let's go together": ["¡Sí! Vamos juntos", "はい！一緒に行きましょう"],
    "Check Seoyeon's message": ["Ver mensaje de Seoyeon", "ソヨンのメッセージを確認"],
    "Check Yuna's message": ["Ver mensaje de Yuna", "ユナのメッセージを確認"],
    "Check Dain's message": ["Ver mensaje de Dain", "ダインのメッセージを確認"],
    "Check Nurse's message": ["Ver mensaje de la Enfermera", "保健先生のメッセージを確認"],
    "Check Teacher's message": ["Ver mensaje de la Profesora", "担任先生のメッセージを確認"],
    "Check Homeroom Teacher's message": ["Ver mensaje de la Profesora", "担任先生のメッセージを確認"],
    "Go with Seoyeon": ["Ir con Seoyeon", "ソヨンと行く"],
    "Go with Yuna": ["Ir con Yuna", "ユナと行く"],
    "Go with Dain": ["Ir con Dain", "ダインと行く"],
    "Go with Nurse": ["Ir con la Enfermera", "保健先生と行く"],
    "Go with Teacher": ["Ir con la Profesora", "担任先生と行く"],
    "Go alone": ["Ir solo", "一人で行く"],
    "Just go to school alone": ["Ir a la escuela solo", "一人で登校する"],
    "Just go alone": ["Ir solo", "一人で行く"],
    "Check other messages": ["Revisar otros mensajes", "他のメッセージを確認する"],
    "Go with Seoyeon *I rejected her earlier...*": ["Ir con Seoyeon *La rechacé antes...*", "ソヨンと行く *さっき断ったのに…*"],
    "Go with Yuna *I rejected her earlier...*": ["Ir con Yuna *La rechacé antes...*", "ユナと行く *さっき断ったのに…*"],
    "Go with Dain *I rejected her earlier...*": ["Ir con Dain *La rechacé antes...*", "ダインと行く *さっき断ったのに…*"],
    "Go with Nurse *I rejected her earlier...*": ["Ir con la Enfermera *La rechacé antes...*", "保健先生と行く *さっき断ったのに…*"],
    "Go with Teacher *I rejected her earlier...*": ["Ir con la Profesora *La rechacé antes...*", "担任先生と行く *さっき断ったのに…*"],
    // Seoyeon dream
    "What kind of dream?": ["¿Qué tipo de sueño?", "どんな夢？"],
    "Was I in it?": ["¿Yo salía?", "僕が出てきた夢？"],
    "A nightmare?": ["¿Una pesadilla?", "悪夢？"],
    // Seoyeon weekend
    "What kind of café?": ["¿Qué tipo de cafetería?", "どんなカフェ？"],
    "Just the two of us?": ["¿Solo nosotros dos?", "二人きりで？"],
    "Sure, when should we go?": ["Claro, ¿cuándo vamos?", "いいよ、いつ行く？"],
    "Sure, I'll definitely be there": ["Claro, definitivamente estaré ahí", "わかった、絶対行くよ"],
    "Let me think about it": ["Déjame pensarlo", "考えてから返事するね"],
    "Sorry, I'm busy this weekend": ["Perdón, estoy ocupado este fin de semana", "ごめん、週末はちょっと忙しくて"],
    // Yuna weekend
    "What kind of place?": ["¿Qué tipo de lugar?", "どんな場所？"],
    "Another secret?": ["¿Otro secreto?", "また秘密？"],
    "...Okay, when?": ["...Bueno, ¿cuándo?", "…いいよ、いつ？"],
    "Okay, I'll definitely come": ["Bueno, definitivamente iré", "わかった、絶対行く"],
    "Let me think about it and reply": ["Déjame pensarlo y te respondo", "考えてから返事する"],
    "Sorry, I have other plans": ["Perdón, tengo otros planes", "ごめん、他の予定があるんだ"],
    // Yuna necktie
    "*Stay still*": ["*Quedarme quieto*", "*じっとしている*"],
    "Your hands are cold, Yuna": ["Tus manos están frías, Yuna", "ユナ、手が冷たいね"],
    // Dain bump
    "\"Are you okay?\" (Help her up)": ["\"¿Estás bien?\" (La ayudo a levantarse)", "「大丈夫？」（助け起こす）"],
    "\"Should we stay like this?\"": ["\"¿Nos quedamos así?\"", "「このままでいようか？」"],
    "*Can't say anything*": ["*No puedo decir nada*", "*何も言えない*"],
    // Dain weekend
    "Sounds fun! Of course I'll go!": ["¡Suena divertido! ¡Claro que iré!", "楽しそう！もちろん行くよ！"],
    "9 AM? That's pretty early": ["¿9 AM? Es bastante temprano", "朝9時？結構早いね"],
    "That sounds troublesome...": ["Eso suena problemático...", "面倒くさいな…"],
    "Okay! See you Saturday at 9 at the gym": ["¡Okey! Nos vemos el sábado a las 9 en el gimnasio", "了解！土曜日の9時に体育館でね"],
    "Let me think about it and contact you": ["Déjame pensarlo y te contacto", "考えてから連絡するよ"],
    "Good luck, I have other plans this weekend...": ["Buena suerte, tengo otros planes este fin de semana...", "頑張って、週末は他の予定があって…"],
    // Nurse walk
    "*Just enjoy it*": ["*Simplemente disfrutarlo*", "*そのまま楽しむ*"],
    "\"Teacher, people might see us...\"": ["\"Profesora, la gente podría vernos...\"", "「先生、人に見られますよ…」"],
    "\"I like you too, teacher\"": ["\"A mí también me gustas, profesora\"", "「僕も先生のことが好きです」"],
    "*Quietly take her hand*": ["*Tomar su mano silenciosamente*", "*静かに先生の手を握る*"],
    "\"But you're still a teacher\"": ["\"Pero sigues siendo una profesora\"", "「でも先生は先生じゃないですか」"],
    // Nurse weekend
    "Yes, why? Is something going on?": ["Sí, ¿por qué? ¿Pasa algo?", "はい、なんですか？何かあるんですか？"],
    "Well... what are your plans for the weekend?": ["Bueno... ¿cuáles son tus planes para el fin de semana?", "えっと…週末は何するつもりですか？"],
    "I don't have any plans yet?": ["¿Todavía no tengo planes?", "まだ予定はないですけど？"],
    "Sure! I'll definitely be there on Sunday": ["¡Claro! Definitivamente estaré ahí el domingo", "いいですね！日曜日、絶対行きます"],
    "Let me think about it and reply later": ["Déjame pensarlo y te respondo después", "考えてから後で返事します"],
    "Sorry, I have other plans this weekend...": ["Perdón, tengo otros planes este fin de semana...", "すみません、週末は他の予定が…"],

    // Lunch choices
    "Have lunch with Yuna": ["Almorzar con Yuna", "ユナとランチを食べる"],
    "Have lunch with Dain": ["Almorzar con Dain", "ダインとランチを食べる"],
    "Have lunch with Seoyeon": ["Almorzar con Seoyeon", "ソヨンとランチを食べる"],
    "Suggest eating together": ["Sugerir comer todos juntos", "みんなで食べようと提案する"],
    "Run away to eat alone": ["Huir para comer solo", "逃げて一人で食べる"],

    // Afternoon choices
    "Admit honestly": ["Admitir honestamente", "正直に認める"],
    "Say different times make it okay": ["Decir que diferentes horarios lo hacen aceptable", "時間帯が違うから大丈夫と言う"],
    "Say only Seoyeon is sincere": ["Decir que solo Seoyeon es sincera", "ソヨンだけが本気だと言う"],

    // Night choices
    "Seoyeon's message": ["Mensaje de Seoyeon", "ソヨンのメッセージ"],
    "Yuna's message": ["Mensaje de Yuna", "ユナのメッセージ"],
    "Dain's message": ["Mensaje de Dain", "ダインのメッセージ"],
    "School Nurse's message": ["Mensaje de la Enfermera", "保健先生のメッセージ"],
    "Homeroom Teacher's message": ["Mensaje de la Profesora", "担任先生のメッセージ"],
    "Just go to sleep": ["Simplemente dormir", "そのまま寝る"],
    "Ignore all and sleep": ["Ignorar todo y dormir", "全部無視して寝る"],
};

// ============================================================================
// CONTEXT TRANSLATION MAP
// ============================================================================

const CONTEXT_MAP = {
    "Walking to school with Seoyeon side by side. Our hands touched at the crosswalk, so there's a slightly self-conscious atmosphere. It's Friday morning, so weekend plans might come up.":
        ["Caminando a la escuela junto a Seoyeon. Nuestras manos se tocaron en el cruce, así que hay un ambiente un poco tímido. Es viernes por la mañana, así que podrían surgir planes para el fin de semana.",
         "ソヨンと並んで朝の登校路を歩いている。横断歩道で手が触れ合い、二人とも少し意識している状態。金曜の朝なので週末の話題が出るかもしれない。"],
    "Walking to school with Yuna in the morning. She just fixed my necktie, creating an oddly intimate atmosphere. It's quiet but the distance between us feels close.":
        ["Caminando a la escuela con Yuna por la mañana. Acaba de arreglarme la corbata, creando un ambiente extrañamente íntimo. Es tranquilo pero la distancia entre nosotros se siente cercana.",
         "ユナと朝の登校路を歩いている。ユナがネクタイを直してくれた直後で、妙に親密な雰囲気。静かだが距離感が近い。"],
    "Walking to school with Dain. There was a bumping incident earlier so Dain is a bit shy. She's energetic but blushes occasionally.":
        ["Caminando a la escuela con Dain. Hubo un incidente de choque antes, así que Dain está un poco tímida. Es enérgica pero se sonroja de vez en cuando.",
         "ダインと登校路を歩いている。さっきぶつかるハプニングがあったので、ダインが少し恥ずかしがっている。元気だけどたまに顔を赤らめる。"],
    "Walking to school with the school nurse. She confessed that she shouldn't feel this way about a student. The tension of a forbidden love hangs in the air.":
        ["Caminando a la escuela con la enfermera. Confesó que no debería sentir esto por un estudiante. La tensión de un amor prohibido flota en el aire.",
         "保健先生と登校路を歩いている。先生が「生徒にこんな気持ちになっちゃいけないのに」と葛藤を見せた。禁断の恋の妙な緊張感。"],
    "In the homeroom teacher's car on the way to school. She fixed my hair and said 'I shouldn't be doing this to a student.' The tension of a forbidden love hangs in the air.":
        ["En el auto de la profesora camino a la escuela. Me arregló el cabello y dijo 'No debería hacer esto con un estudiante.' La tensión de un amor prohibido flota en el aire.",
         "担任先生の車の中で登校中。先生が髪を整えてくれながら「生徒にこんなことしちゃいけないのに」と言った。禁断の恋の妙な雰囲気。"],
    "Sitting with Seoyeon on a bench behind school. She leaned her head on my shoulder and confessed she thinks about me every day. Sweet atmosphere.":
        ["Sentado con Seoyeon en un banco detrás de la escuela. Apoyó su cabeza en mi hombro y confesó que piensa en mí todos los días. Ambiente dulce.",
         "ソヨンと学校裏のベンチに並んで座っている。ソヨンが肩に頭を乗せて「毎日あなたのことを考えてる」と告白した後。甘い雰囲気。"],
    "Lying on Yuna's lap on the rooftop. Yuna made a homemade lunchbox and is stroking my hair. Quiet, peaceful atmosphere.":
        ["Acostado en el regazo de Yuna en la azotea. Yuna preparó un almuerzo casero y me acaricia el cabello. Ambiente tranquilo y pacífico.",
         "ユナの膝枕で屋上にいる。ユナがお弁当を作ってきてくれて、髪を撫でている。静かで穏やかな雰囲気。"],
    "Having lunch with Dain. She asked 'What am I to you?' seriously. She's being shy instead of her usual energetic self.":
        ["Almorzando con Dain. Preguntó '¿Qué soy para ti?' en serio. Está siendo tímida en lugar de su usual yo enérgico.",
         "ダインとランチ中。ダインが「私のこと、どう思ってる？」と真剣に聞いてきた。いつもの活発さの代わりに恥ずかしがっている。"],
    "Having lunch alone with the school nurse in her office. She locked the door. It's like a secret date. The thrill of a forbidden love.":
        ["Almorzando a solas con la enfermera en su oficina. Cerró la puerta con llave. Es como una cita secreta. La emoción de un amor prohibido.",
         "保健室で保健先生と二人きりでランチ中。先生がドアに鍵をかけた。秘密のデートのような雰囲気。禁断の恋のときめき。"],
    "Having lunch alone with the homeroom teacher in her office. She shyly closed the door. Secret date atmosphere.":
        ["Almorzando a solas con la profesora en su oficina. Cerró la puerta tímidamente. Ambiente de cita secreta.",
         "教務室で担任先生と二人きりでランチ中。先生が恥ずかしそうにドアを閉めた。秘密のデートの雰囲気。"],
    "Walking with Seoyeon along the sunset riverside. She asked 'Will you only meet me tomorrow?' and they had a pinky promise/hand-holding moment. Sweet and romantic atmosphere.":
        ["Caminando con Seoyeon junto al río al atardecer. Preguntó '¿Solo me verás a mí mañana?' y tuvieron un momento de promesa de meñique. Ambiente dulce y romántico.",
         "ソヨンと夕焼けの川沿いを歩いている。ソヨンが「明日は私だけに会ってくれる？」と言い、指切り・手つなぎのスキンシップがあった。甘くてロマンチックな雰囲気。"],
    "Walking home with Yuna after petting a cat together. Yuna's expression is softer than usual. Quiet and comfortable atmosphere.":
        ["Caminando a casa con Yuna después de acariciar un gato juntos. La expresión de Yuna es más suave de lo usual. Ambiente tranquilo y cómodo.",
         "ユナと一緒に猫を撫でた後の帰り道。ユナの表情がいつもより柔らかい。静かで心地よい雰囲気。"],
    "Sharing ice cream with Dain on a park bench. She said 'I couldn't sleep last night' showing a serious side. She's being shy instead of her usual energetic self.":
        ["Compartiendo helado con Dain en un banco del parque. Dijo 'No pude dormir anoche' mostrando un lado serio. Está siendo tímida en lugar de su yo enérgico habitual.",
         "ダインと公園のベンチでアイスクリームを分け合った後。ダインが「昨日寝れなかった」と真剣な一面を見せた。いつもの活発さの代わりに恥ずかしがっている。"],
    "In the homeroom teacher's car heading home. After hand-holding or leaning on her shoulder in the sunset. The sweetness and guilt of a forbidden love.":
        ["En el auto de la profesora camino a casa. Después de tomarse de la mano o apoyarse en su hombro al atardecer. La dulzura y culpa de un amor prohibido.",
         "担任先生の車の中で帰宅中。夕焼けの中で手を繋いだり肩に寄りかかったりした後。禁断の恋の甘さと罪悪感。"],
    "Walking home with the school nurse. She used a band-aid as an excuse to hold my hand. The thrill and tension of a forbidden love.":
        ["Caminando a casa con la enfermera. Usó una bandita como excusa para tomar mi mano. La emoción y tensión de un amor prohibido.",
         "保健先生との帰り道。先生がバンドエイドを口実に手を握った。禁断の恋のときめきと緊張感。"],
    "Late-night phone call. Seoyeon called saying 'I wanted to hear your voice.' A sweet late-night conversation. Seoyeon suddenly called before bed.":
        ["Llamada nocturna. Seoyeon llamó diciendo 'Quería escuchar tu voz.' Una dulce conversación nocturna.",
         "深夜の電話。ソヨンが「声が聞きたかった」と電話してきた。甘い深夜の通話。ソヨンが寝る前に急に電話してきた。"],
    "Late-night phone call. Yuna called saying 'I can't fall asleep.' A quiet and intimate late-night conversation. Her soft breathing feels close.":
        ["Llamada nocturna. Yuna llamó diciendo 'No puedo dormir.' Una conversación nocturna tranquila e íntima.",
         "深夜の電話。ユナが「眠れない」と電話してきた。静かで親密な深夜の通話。ユナの小さな息遣いが近くに聞こえるような雰囲気。"],
    "Late-night phone call. Dain called saying 'Thinking about tomorrow, I can't sleep!' Unusually quiet Dain. A soft late-night atmosphere.":
        ["Llamada nocturna. Dain llamó diciendo '¡Pensando en mañana, no puedo dormir!' Dain inusualmente tranquila. Un ambiente nocturno suave.",
         "深夜の電話。ダインが「明日のこと考えたら眠れなくて」と電話してきた。いつもと違って静かなダイン。柔らかい深夜の雰囲気。"],
    "Late-night phone call. The school nurse called saying 'I couldn't sleep.' Her low, gentle voice. A forbidden love's late-night call.":
        ["Llamada nocturna. La enfermera llamó diciendo 'No podía dormir.' Su voz baja y suave. La llamada nocturna de un amor prohibido.",
         "深夜の電話。保健先生が「眠れなくて」と電話してきた。先生の低く優しい声。禁断の恋の深夜通話。"],
    "Late-night phone call. The homeroom teacher called saying 'I know it's bedtime, but...' Her quiet voice. A forbidden love's late-night call.":
        ["Llamada nocturna. La profesora llamó diciendo 'Sé que es hora de dormir, pero...' Su voz tranquila. La llamada nocturna de un amor prohibido.",
         "深夜の電話。担任先生が「寝る時間なのはわかってるんだけど…」と電話してきた。先生の静かな声。禁断の恋の深夜通話。"],
};

// ============================================================================
// TRANSLATION FUNCTIONS
// ============================================================================

function translateText(text, lang, speaker) {
    // 0 = es, 1 = ja
    const idx = lang === 'es' ? 0 : 1;
    if (TEXT_MAP[text]) return TEXT_MAP[text][idx];
    // Fallback: translate using character-aware generic approach
    return genericTranslate(text, lang, speaker);
}

function translateChoice(text, lang) {
    const idx = lang === 'es' ? 0 : 1;
    if (CHOICE_MAP[text]) return CHOICE_MAP[text][idx];
    return genericTranslateChoice(text, lang);
}

function translateContext(text, lang) {
    const idx = lang === 'es' ? 0 : 1;
    if (CONTEXT_MAP[text]) return CONTEXT_MAP[text][idx];
    return genericTranslateContext(text, lang);
}

// Generic fallback translators for texts not in the map
function genericTranslate(text, lang, speaker) {
    if (lang === 'es') return genericTranslateEs(text, speaker);
    return genericTranslateJa(text, speaker);
}

function genericTranslateEs(text, speaker) {
    let t = text;
    // Apply common substitutions
    const subs = [
        [/\*Message sent at (\d+) AM\*/g, '*Mensaje enviado a las $1 AM*'],
        [/\*Message sent at (\d+) PM\*/g, '*Mensaje enviado a las $1 PM*'],
        [/\*Message sent last night at (\d+) PM\*/g, '*Mensaje enviado anoche a las $1 PM*'],
        [/\*Reply\*/g, '*Respuesta*'],
        [/\*Immediate reply\*/g, '*Respuesta inmediata*'],
        [/\*Reply after a moment\*/g, '*Respuesta después de un momento*'],
        [/\{name\}/g, '{name}'],
        [/\{playerName\}/g, '{playerName}'],
    ];
    for (const [p, r] of subs) t = t.replace(p, r);
    return t;
}

function genericTranslateJa(text, speaker) {
    let t = text;
    const subs = [
        [/\*Message sent at (\d+) AM\*/g, '*朝$1時に届いたメッセージ*'],
        [/\*Message sent at (\d+) PM\*/g, '*午後$1時に届いたメッセージ*'],
        [/\*Message sent last night at (\d+) PM\*/g, '*昨夜$1時に届いたメッセージ*'],
        [/\*Reply\*/g, '*返信*'],
        [/\*Immediate reply\*/g, '*即座に返信が来た*'],
        [/\*Reply after a moment\*/g, '*しばらくして返信が来た*'],
        [/\{name\}/g, '{name}'],
        [/\{playerName\}/g, '{playerName}'],
    ];
    for (const [p, r] of subs) t = t.replace(p, r);
    return t;
}

function genericTranslateChoice(text, lang) {
    // If not in map, return as-is (best we can do for unmapped)
    return text;
}

function genericTranslateContext(text, lang) {
    return text;
}

// ============================================================================
// FILE PROCESSING (same proven approach as Day 1 script)
// ============================================================================

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
    let skipped = 0;
    // Process from bottom to top to preserve positions
    for (let idx = positions.length - 1; idx >= 0; idx--) {
        const pos = positions[idx];
        const block = content.substring(pos.start, pos.end + 1);
        if (/"es"\s*:/.test(block)) { skipped++; continue; }

        const enMatch = /"en"\s*:\s*\{/.exec(block);
        if (!enMatch) continue;

        const enBs = block.indexOf('{', enMatch.index + 3);
        const enBe = findMatchingBrace(block, enBs);
        if (enBe === -1) continue;

        let enObj;
        try { enObj = JSON.parse(block.substring(enBs, enBe + 1)); }
        catch(e) { console.error('  Parse error at block', idx, ':', e.message, block.substring(enBs, Math.min(enBs+80, enBe+1))); continue; }

        // Detect indent
        const enAbsPos = pos.start + enMatch.index;
        let ls = enAbsPos;
        while (ls > 0 && content[ls-1] !== '\n') ls--;
        const linePrefix = content.substring(ls, enAbsPos);
        const indent = linePrefix.match(/^(\s*)/)[1];
        const inner = indent + '    ';

        // Build es
        const es = { name: NAME_ES[enObj.name] || enObj.name };
        es.text = translateText(enObj.text, 'es', enObj.name);
        if (enObj.choices) es.choices = enObj.choices.map(c => translateChoice(c, 'es'));
        if (enObj.context) es.context = translateContext(enObj.context, 'es');
        if (enObj.personality) es.personality = enObj.personality;

        // Build ja
        const ja = { name: NAME_JA[enObj.name] || enObj.name };
        ja.text = translateText(enObj.text, 'ja', enObj.name);
        if (enObj.choices) ja.choices = enObj.choices.map(c => translateChoice(c, 'ja'));
        if (enObj.context) ja.context = translateContext(enObj.context, 'ja');
        if (enObj.personality) ja.personality = enObj.personality;

        // Serialize
        function ser(key, obj) {
            let lines = [`${indent}"${key}": {`];
            const entries = [];
            entries.push(`${inner}"name": ${JSON.stringify(obj.name)}`);
            entries.push(`${inner}"text": ${JSON.stringify(obj.text)}`);
            if (obj.choices) {
                const cl = obj.choices.map(c => `${inner}    ${JSON.stringify(c)}`);
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

        // Insert after en block's closing }
        const enAbsEnd = pos.start + enBe;
        let insertAt = enAbsEnd + 1;
        const after = content.substring(insertAt, insertAt + 20);
        const isClosing = /^\s*\}/.test(after);

        let insertion = ',\n' + esStr + ',\n' + jaStr;

        content = content.substring(0, insertAt) + insertion + content.substring(insertAt);
        count++;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${path.basename(filePath)}: Added es/ja to ${count} blocks (${skipped} already had es)`);
    return count;
}

// ============================================================================
// MAIN
// ============================================================================

let total = 0;
for (const f of files) {
    const fp = path.join(__dirname, f);
    console.log(`Processing: ${f}`);
    total += processFile(fp);
}
console.log(`\nDone! Total blocks translated: ${total}`);
