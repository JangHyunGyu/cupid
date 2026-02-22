import re

# The problem: translate.py replaced ja blocks with Spanish text instead of Japanese for file 1.
# We need to re-read file 1, find all ja blocks that have Spanish text, and replace with Japanese.

# Full translation map from first translate.py - English -> (Spanish, Japanese)
T = {
"*Warm sunlight... Today is my first day at this school. I'm a bit nervous.*":
("*C\\u00e1lida luz del sol... Hoy es mi primer d\\u00eda en esta escuela. Estoy un poco nervioso.*",
 "*\\u6696\\u304b\\u3044\\u65e5\\u5dee\\u2026\\u2026\\u4eca\\u65e5\\u304b\\u3089\\u3053\\u306e\\u5b66\\u6821\\u304b\\u3002\\u5c11\\u3057\\u7dca\\u5f35\\u3059\\u308b\\u306a\\u3002*"),

"*An unfamiliar uniform, an unfamiliar scenery... But somehow I feel like something good is going to happen.*":
("*Un uniforme desconocido, un paisaje desconocido... Pero de alguna manera siento que algo bueno va a pasar.*",
 "*\\u898b\\u6163\\u308c\\u306a\\u3044\\u5236\\u670d\\u3001\\u898b\\u6163\\u308c\\u306a\\u3044\\u666f\\u8272\\u2026\\u2026\\u3067\\u3082\\u306a\\u305c\\u304b\\u3001\\u3044\\u3044\\u3053\\u3068\\u304c\\u8d77\\u304d\\u305d\\u3046\\u306a\\u6c17\\u304c\\u3059\\u308b\\u3002*"),

"*Alright, let's go. It's a new beginning.*":
("*Bien, vamos. Es un nuevo comienzo.*",
 "*\\u3055\\u3042\\u3001\\u884c\\u3053\\u3046\\u3002\\u65b0\\u3057\\u3044\\u59cb\\u307e\\u308a\\u3060\\u3002*"),
}

# Actually, the approach above won't work because we need ALL translations.
# Let me take a different approach: the ja blocks currently have Spanish text (same as es blocks).
# I'll find each ja block, extract its current Spanish text, look it up in a Spanish->Japanese map,
# and replace it.

# Build Spanish -> Japanese map from the original translate.py T dict
# I need to recreate the full map. Let me just do string replacement.
# For each _i18n block in file1, the ja text = es text (both got Spanish).
# I need to replace each Spanish text in ja blocks with the corresponding Japanese.

ES_TO_JA = {
"*C\\u00e1lida luz del sol... Hoy es mi primer d\\u00eda en esta escuela. Estoy un poco nervioso.*":
"*暖かい日差し……今日からこの学校か。少し緊張するな。*",

"*Un uniforme desconocido, un paisaje desconocido... Pero de alguna manera siento que algo bueno va a pasar.*":
"*見慣れない制服、見慣れない景色……でもなぜか、いいことが起きそうな気がする。*",

"*Bien, vamos. Es un nuevo comienzo.*":
"*さあ、行こう。新しい始まりだ。*",

"Estudiante transferido, \\u00bfc\\u00f3mo te llamas?":
"転校生、君の名前は？",

"\\\"\\u00bfHola? No te hab\\u00eda visto antes. \\u00bfEres... {name}, el nuevo estudiante transferido?\\\"":
"\\\"こんにちは？見かけない顔だね。もしかして……{name}？\\\"",

"*Una chica se me acerca con una sonrisa radiante. Un sutil aroma a champ\\u00fa me cosquillea la nariz.*":
"*にっこり笑いながら話しかけてくる女の子。ほのかなシャンプーの香りが鼻先をかすめる。*",

"*Cuando nuestras miradas se cruzan, mi coraz\\u00f3n da un salto. Es tan bonita...*":
"*目が合った瞬間、周りの音が遠のくような気がした。彼女の微笑みは朝の日差しよりも眩しかった。*",

"\\\"Soy Seoyeon, la presidenta del consejo estudiantil. La profesora me pidi\\u00f3 que viniera a recibirte. \\u00a1Mucho gusto!\\\"":
"\\\"生徒会長のソヨンだよ。先生に頼まれてお迎えに来たの。よろしくね！\\\"",

"*Los ojos de Seoyeon se agrandan y se muerde el labio inferior.*":
"*ソヨンの目が大きく見開かれ、下唇をぎゅっと噛んだ。*",

"\\\"Oh... Lo siento. Deb\\u00ed haberte estorbado. Pero guiarte es mi trabajo, as\\u00ed que... s\\u00edgueme.\\\"":
"\\\"あ……ごめん。邪魔だったかな。でも案内は私の仕事だから……ついてきて。\\\"",

"*Cuando sonr\\u00ede radiantemente, todo el lugar parece iluminarse. Mi tensi\\u00f3n se alivia un poco.*":
"*彼女が明るく笑うと、周りまで明るくなる気がする。少し緊張がほぐれた。*",

"\\\"Jeje, \\u00bfverdad? Puede ser un poco confuso al principio. Ser\\u00e9 tu gu\\u00eda perfecta. \\u00a1Vamos, s\\u00edgueme!\\\"":
"\\\"ふふっ、でしょ？最初はちょっと複雑だよね。私が完璧に案内してあげる。さあ、ついてきて！\\\"",

"*Sus ojos se agrandan, luego me gui\\u00f1a juguetonamente.*":
"*彼女が目を丸くして、すぐにいたずらっぽくウインクした。*",

"\\\"Vaya, \\u00bfcoqueteando el primer d\\u00eda? Te doy cr\\u00e9dito por eso. Entonces, \\u00bfnuestro estudiante transferido 'especial' me sigue?\\\"":
"\\\"あら、初日からなかなかやるね？ まあ、悪くないけど。じゃあ、'特別な'転校生さん、迷子になる前についてきてね。\\\"",

"*El rostro de Seoyeon se pone rojo instant\\u00e1neamente. Evita mi mirada y juega con su cabello.*":
"*ソヨンの顔が一瞬で赤く染まる。視線をそらしながら髪をいじっている。*",

"\\\"E-eso fue tan repentino... Eso es trampa. En fin, los estudiantes transferidos de hoy en d\\u00eda... \\u00a1Solo s\\u00edgueme!\\\"":
"\\\"……いきなりそんなこと言われたら、どう反応していいかわからないじゃない。*頬に広がる赤みを隠すように、努めて落ち着いた声で言って歩き出した。* 遅れるよ。早くついてきて。\\\"",

"*Ella inclina la cabeza y se acerca a mi rostro. Casi puedo sentir su aliento.*":
"*彼女が首を傾げて僕の顔に近づいてくる。息遣いが感じられそうなほどに。*",

"\\\"\\u00bfHmm? \\u00bfQu\\u00e9 pasa? Tu cara est\\u00e1 muy roja... \\u00bfYa te enamoraste de m\\u00ed? Jeje.\\\"":
"\\\"ん？どうしたの？顔が真っ赤だけど……まさかもう私に惚れちゃった？ふふっ。\\\"",

"*Sigo a Seoyeon por el pasillo. Las voces animadas de los estudiantes se escuchan por las ventanas.*":
"*ソヨンの後ろを歩いて廊下を進む。窓の外から生徒たちの元気な声が聞こえる。*",

"*Seoyeon se detiene de repente y se vuelve hacia m\\u00ed.* \\\"Oh, ahora que lo pienso, dije tu nombre primero antes. Es {name}, \\u00bfverdad? \\u00a1D\\u00e9jame presentarme correctamente esta vez!\\\"":
"*ソヨンが急に立ち止まって振り返る。* \\\"あ、そういえばさっき私が先に名前言っちゃったね。{name}、だよね？改めて正式にご挨拶するね！\\\"",

"\\\"S\\u00ed, as\\u00ed es. Soy {name}. Estaba tan distra\\u00eddo antes que no pude presentarme bien. Mucho gusto, Seoyeon.\\\"":
"\\\"うん、そうだよ。{name}だ。さっきはバタバタしててちゃんと挨拶できなかったね。よろしく、ソヨン。\\\"",

"\\\"{name}... Jeje, \\u00a1qu\\u00e9 lindo nombre! Te llamar\\u00e9 {name} de ahora en adelante. \\u00a1Mucho gusto tambi\\u00e9n, {name}!\\\"":
"\\\"{name}……ふふっ、いい名前だね！じゃあこれからは{name}って呼ぶね。よろしくね、{name}！\\\"",

"*Camino por el pasillo, observ\\u00e1ndola desde atr\\u00e1s.*":
"*彼女の後ろ姿を見ながら廊下を歩く。*",

"\\\"Oh, ahora que lo pienso, \\u00a1solo intercambiamos nombres y no hablamos de verdad! Si tienes alguna pregunta, \\u00a1no dudes en preguntar!\\\"":
"\\\"あ、そういえば名前だけ交換して、ちゃんとお話してなかったね？ 気になることがあったら何でも聞いてね！\\\"",

"*Sin darme cuenta, charlar con Seoyeon nos llev\\u00f3 al recorrido escolar. El tiempo vuela... Es divertido estar con ella.*":
"*ソヨンとおしゃべりしているうちに、いつの間にか学校案内が始まっていた。時間が経つのが早い……彼女といると楽しいな。*",

"*La expresi\\u00f3n de Seoyeon no se ve bien. Debo haber cometido alg\\u00fan error durante nuestra conversaci\\u00f3n. Comenz\\u00f3 el recorrido escolar con una actitud fr\\u00eda.*":
"*ソヨンの表情が良くない。会話の中で何か失敗したらしい。彼女は冷たい態度で学校案内を始めた。*",

"*Comenc\\u00e9 a caminar por el pasillo con la gu\\u00eda de Seoyeon. Ella amablemente empez\\u00f3 a explicar varias partes de la escuela.*":
"*ソヨンの案内を受けながら廊下を歩き始めた。彼女は学校のあちこちを親切に説明してくれた。*",

"*Seoyeon se detiene como desconcertada y me mira fijamente. Su cara se pone ligeramente roja, pero pronto esboza una sonrisa juguetona.*":
"*ソヨンが戸惑ったように立ち止まって私をじっと見つめる。顔が少し赤くなるが、すぐにいたずらっぽい笑みを浮かべた。*",

"\\\"Ay, {name}, \\u00bferes de los que juzgan a las personas por su apariencia? Jeje, pero gracias. Una diosa... Estoy un poco contenta. \\u00a1Pero no te pases con las bromas!\\\"":
"\\\"あら、{name}は見た目で人を判断するタイプなんだ？ふふっ、でもありがとう。女神だなんて……ちょっと嬉しいかも。でもからかいすぎはダメだよ！\\\"",

"*Seoyeon se detiene sin ocultar su desagrado. Sus ojos se han vuelto fr\\u00edos.*":
"*ソヨンが不快感を隠さずに足を止める。彼女の目が冷たく冷えている。*",

"\\\"Bueno... S\\u00e9 que es un cumplido, pero... \\u00bfno es un poco exagerado? Acabamos de conocernos. Por favor, mant\\u00e9n las bromas apropiadas.\\\"":
"\\\"うーん……褒め言葉なのはわかるけど……ちょっとやりすぎじゃない？まだ会ったばかりなんだから。冗談はほどほどにしてね。\\\"",

"*Seoyeon se detiene como desconcertada y me mira fijamente. Sus ojos se vuelven un poco fr\\u00edos.*":
"*ソヨンが戸惑ったように立ち止まって私をじっと見つめる。彼女の目が少し冷たくなった。*",

"\\\"Hmm... Bueno, gracias, pero... ese tipo de comentarios me incomodan. No nos conocemos hace mucho, \\u00bfverdad? La broma parece un poco excesiva.\\\"":
"\\\"うーん……まあ、ありがとうだけど……そういうのはちょっと困るな。まだ知り合ったばかりでしょ？冗談がちょっと過ぎると思う。\\\"",

"*Sus ojos brillan de emoci\\u00f3n al mirarme. Hay anticipaci\\u00f3n de que podr\\u00edamos compartir intereses similares.*":
"*彼女がキラキラした目で嬉しそうに私を見ている。似たような趣味を持っているかもしれないという期待が見える。*",

"\\\"\\u00a1S\\u00ed! Estoy en el consejo estudiantil, pero tambi\\u00e9n en el club de jardiner\\u00eda. Me encanta cultivar flores. \\u00bfTe gustan las flores, {name}? \\u00a1Ven a visitar nuestro invernadero alguna vez! Te dar\\u00e9 un recorrido especial.\\\"":
"\\\"うん！生徒会もやってるけど、実は園芸部にも入ってるんだ。お花を育てるのが好きでね。{name}はお花好き？今度、温室にも遊びに来てね！特別に案内してあげる。\\\"",

"*Ella asiente con una actitud profesional. No hay emoci\\u00f3n en su rostro.*":
"*彼女が事務的な態度でうなずく。表情には何の感情も乗っていない。*",

"\\\"S\\u00ed. Estoy en el consejo estudiantil y en el club de jardiner\\u00eda. \\u00bfEso es todo lo que quer\\u00edas preguntar? Entonces continuemos el recorrido.\\\"":
"\\\"うん。生徒会と園芸部を両立してるよ。質問はそれだけ？じゃあ案内を続けるね。\\\"",

"*Me mira con alegr\\u00eda.*":
"*彼女が嬉しそうに私を見ている。*",

"\\\"\\u00a1S\\u00ed! Estoy en el consejo estudiantil, pero tambi\\u00e9n en el club de jardiner\\u00eda. Me encanta cultivar flores. Trabajar con la tierra me da paz. \\u00a1Ven a visitar nuestro invernadero alguna vez!\\\"":
"\\\"うん！生徒会もやってるけど、実は園芸部にも入ってるんだ。お花を育てるのが好きでね。土をいじっていると心が落ち着くの。今度、温室にも遊びに来てね！\\\"",

"*Seoyeon se sonroja de genuina felicidad y sonr\\u00ede t\\u00edmidamente. Sus ojos est\\u00e1n llenos de cari\\u00f1o hacia m\\u00ed.*":
"*ソヨンが本当に嬉しそうに頬を赤らめ、はにかんだ笑顔を見せる。彼女の目には私への好意がいっぱい詰まっている。*",

"\\\"De verdad... \\u00bfC\\u00f3mo dices cosas tan dulces? Me preocupaba si te adaptar\\u00edas bien como estudiante transferido, pero me siento reconfortada. Gracias, {name}. Me siento muy tranquila cuando estoy contigo.\\\"":
"\\\"本当に……どうしてそんなに素敵なこと言えるの？転校生のあなたがうまくやれるか心配してたのに、逆に私が癒されちゃった。ありがとう、{name}。あなたといると本当に心が安らぐの。\\\"",

"*Me mira fr\\u00edamente. La comisura de su boca est\\u00e1 ligeramente torcida como si se burlara.*":
"*彼女が冷たい表情で私をちらっと見る。口元がバカにするように少し歪んでいる。*",

"\\\"Tienes una forma muy suave de hablar. Gu\\u00e1rdate los cumplidos gen\\u00e9ricos. Ahora estamos en un recorrido escolar, as\\u00ed que solo s\\u00edgueme.\\\"":
"\\\"口だけは達者だね。誰にでも言える褒め言葉はいいから。今は学校案内中だから、後ろについてきて。\\\"",

"*Ella responde mientras se sonroja t\\u00edmidamente.*":
"*彼女がはにかみながら頬を赤らめて答える。*",

"\\\"De verdad... Tienes una forma tan bonita de hablar. Siendo presidenta del consejo estudiantil, siempre estoy tensa, pero cuando estoy contigo me siento relajada. Podr\\u00eda terminar bajando la guardia contigo... Jeje, es broma.\\\"":
"\\\"本当に……言葉がとても上手なんだね。生徒会長って立場だからいつも緊張してるけど、あなたといると何だか気が楽になるの。知らないうちに甘えちゃうかも……ふふっ、冗談だよ。\\\"",

"*Contin\\u00faa su explicaci\\u00f3n emocionada con ojos brillantes. Parece feliz con cada una de mis reacciones.*":
"*彼女がキラキラした目で楽しそうに説明を続ける。私の反応一つ一つを喜んでいるようだ。*",

"\\\"\\u00a1Vaya, me conmueve que est\\u00e9s escuchando tan en serio! {name}, pareces una persona muy amable y diligente. \\u00a1Se siente gratificante guiarte! Si tienes m\\u00e1s preguntas, \\u00a1no dudes en preguntar!\\\"":
"\\\"わあ、こんなに真剣に聞いてくれるなんて本当に感動！{name}は本当に優しくて真面目な人だね。案内した甲斐があるよ！もっと気になることがあったらいつでも聞いてね！\\\"",

"*Contin\\u00faa su explicaci\\u00f3n mec\\u00e1nicamente. Parece que habla al aire sin siquiera mirarme.*":
"*彼女が機械的に説明を続ける。私を見もせず、空に向かって話しているような感じだ。*",

"\\\"\\u00bfEntendiste todo? Entonces vamos al siguiente lugar. No te quedes ah\\u00ed distra\\u00eddo, s\\u00edgueme.\\\"":
"\\\"だいたいわかった？じゃあ次の場所に移動するよ。ぼーっとしてないでちゃんとついてきて。\\\"",

"*Ella contin\\u00faa su explicaci\\u00f3n emocionada.*":
"*彼女が楽しそうに説明を続ける。*",

"\\\"Gracias por escuchar tan bien. {name}, \\u00a1pareces una persona muy diligente! Con esa actitud, te adaptar\\u00e1s a la vida escolar en poco tiempo.\\\"":
"\\\"こんなによく聞いてくれてありがとう。{name}、本当に真面目な人だね！そういう姿勢なら学校生活にもすぐ馴染めるよ。\\\"",

"*De repente se detiene y se vuelve hacia m\\u00ed.*":
"*彼女が急に立ち止まって私を振り返る。*",

"*Seoyeon, que iba caminando adelante, se detiene de repente y se vuelve hacia m\\u00ed con ojos fr\\u00edos.*":
"*先を歩いていたソヨンが急に立ち止まり、冷たい目で私を振り返る。*",

"*Puedo sentir la distancia en su mirada.*":
"*彼女の視線から距離感が感じられる。*",

"\\\"Comportarte as\\u00ed en tu primer d\\u00eda de transferencia ser\\u00e1 problem\\u00e1tico. Agradecer\\u00eda que mantengas al menos los modales b\\u00e1sicos.\\\"":
"\\\"転校初日からそんな態度じゃ困るよ。最低限の礼儀は守ってほしいんだけど。\\\"",

"*Me mira fijamente a los ojos.*":
"*彼女が私の目をじっと見つめる。*",

"\\\"\\u00bfQu\\u00e9 tipo de clubes te interesan? El consejo estudiantil siempre da la bienvenida a nuevos talentos. Si te unes... yo personalmente podr\\u00eda ense\\u00f1arte el trabajo.\\\"":
"\\\"どんな部活に興味がある？生徒会はいつも新しい人を歓迎してるよ。もし入ってくれたら……私が直接仕事を教えてあげられるんだけど。\\\"",

"*No puede ocultar su decepci\\u00f3n. Sus hombros parecen caer un poco.*":
"*彼女は失望を隠しきれない。肩が少し落ちたように見える。*",

"*El rostro de Seoyeon se pone rojo otra vez. Evita mi mirada avergonzada, pero una leve sonrisa se extiende por sus labios. Juguetea con su falda. T\\u00edmidamente golpea el suelo con la punta del pie.*":
"*ソヨンの顔がまた赤くなる。恥ずかしそうに視線をそらすが、唇には薄い笑みが広がっている。指先がスカートの裾をいじっている。恥ずかしそうにつま先で床をトントンと叩いている。*",

"\\\"\\u00bfT-todos los d\\u00edas? \\u00a1\\u00bfSabes cu\\u00e1nto trabajo hay?! Pero si te unes... yo tambi\\u00e9n podr\\u00eda estar un poco contenta. Lo esperar\\u00e9 con ansias.\\\"":
"\\\"え、毎日って……仕事がどれだけあると思ってるの！でも、入ってくれたら……私もちょっと嬉しいかも。楽しみにしてるね？\\\"",

"*Ella asiente y empieza a caminar adelante de nuevo. Siento un poco de arrepentimiento.*":
"*彼女がうなずいてまた先を歩き始める。少し残念な気持ちになる。*",

"*Me mira fijamente, luego estalla en una risa clara y hermosa. El sonido resuena por el pasillo como campanitas de plata. Peque\\u00f1as l\\u00e1grimas en las comisuras de sus ojos brillan a la luz del sol. Se agarra el est\\u00f3mago y r\\u00ede por un rato...*":
"*彼女がぽかんと私を見つめた後、澄んだ美しい笑い声を上げる。その笑い声が銀の鈴のように廊下に響く。目尻に浮かんだ小さな涙が日差しにキラキラ光っている。お腹を抱えてしばらく笑っている……*",

"\\\"Jeje, eres muy honesto, \\u00bfno? Sobre m\\u00ed... Bueno, podr\\u00eda contarte dependiendo de c\\u00f3mo vayan las cosas. \\u00a1Esp\\u00e9ralo con ansias!\\\"":
"\\\"ふふっ、本当に素直なんだね？私のことは……そうだなあ、これからの付き合い次第で教えてあげるかも。楽しみにしてて！\\\"",

"*Cuando llegamos a la puerta del sal\\u00f3n, Seoyeon toma suavemente mi mano. Mi coraz\\u00f3n empieza a latir con fuerza por su toque suave.*":
"*教室のドアの前に着くと、ソヨンがそっと僕の手を取った。彼女の柔らかな感触に心臓がドキドキし始める。*",

"*Seoyeon baja un poco la cabeza y me susurra al o\\u00eddo. Su dulce aliento me hace cosquillas.* \\\"{name}, no est\\u00e9s tan nervioso. Siempre estar\\u00e9 a tu lado. T\\u00fa puedes.\\\"":
"*ソヨンが少し頭を下げて耳元でささやく。甘い息遣いがくすぐったい。* \\\"{name}、そんなに緊張しないで。私がいつもそばにいるから。大丈夫だよ。\\\"",

"\\\"Aqu\\u00ed est\\u00e1 nuestro sal\\u00f3n. ...Esto es un secreto, pero le ped\\u00ed a la profesora que te moviera al asiento junto al m\\u00edo. Quer\\u00eda acercarme a ti lo antes posible.\\\"":
"\\\"さあ、ここが私たちの教室だよ。……これは秘密だけど、先生にお願いして私の隣の席に移してもらったの。少しでも早く、あなたと仲良くなりたくて。\\\"",

"*Cuando llegamos a la puerta del sal\\u00f3n, Seoyeon camina delante de m\\u00ed, manteniendo distancia. Su espalda de alguna manera se siente fr\\u00eda.*":
"*教室のドアの前に着くと、ソヨンが先に歩いて距離を置く。彼女の後ろ姿がどこか冷たく感じられる。*",

"*Se\\u00f1ala en silencio el letrero junto a la puerta con la barbilla. Su actitud de ni siquiera mirarme me hace sentir fr\\u00edo por dentro.*":
"*彼女が無言でドアの横の表示を顎で指す。こちらを見ようともしない態度に心の隅が冷える。*",

"\\\"Esta es la clase 2-3. La profesora est\\u00e1 esperando adentro. No llegues tarde en tu primer d\\u00eda de transferencia. Entra.\\\"":
"\\\"ここが2年3組だよ。先生が中で待ってるから。転校初日から遅刻して目をつけられないように、早く入って。\\\"",

"*Llegamos a la puerta del sal\\u00f3n. Se escuchan las charlas y risas de los estudiantes desde adentro. Seoyeon me da palmaditas en el hombro para animarme.*":
"*教室のドアの前に着いた。中から生徒たちのざわめきや笑い声が聞こえてくる。ソヨンが軽く肩をポンと叩いて応援してくれる。*",

"*Donde su mano toc\\u00f3 se siente c\\u00e1lido. Me mira a los ojos y me anima en silencio.*":
"*彼女の手が触れた場所がじんわり温かい。彼女が僕の目を見て小さくファイトと言ってくれる。*",

"\\\"Aqu\\u00ed est\\u00e1 la clase 2-3, donde estar\\u00e1s. No te pongas nervioso. Estoy justo a tu lado, as\\u00ed que s\\u00e9 t\\u00fa mismo. \\u00bfEntendido?\\\"":
"\\\"さあ、ここがあなたのいる2年3組だよ。緊張しないで。私がすぐ隣にいるから、いつも通りにすればいいよ。わかった？\\\"",

"*Al pararme en el podio, decenas de ojos se dirigen a m\\u00ed. Miradas curiosas, miradas cautelosas... Seoyeon est\\u00e1 sonriendo y cuid\\u00e1ndome desde mi lado.*":
"*教壇の前に立つと、数十もの視線が一斉に僕に突き刺さる。好奇の目、警戒の目……ソヨンは隣で微笑みながら僕を見守っている。*",

"*Al pararme en el podio, decenas de ojos se dirigen a m\\u00ed. Seoyeon est\\u00e1 sonriendo con apoyo a mi lado, anim\\u00e1ndome.*":
"*教壇の前に立つと、数十もの視線が刺さる。ソヨンは隣で頼もしく微笑みながら僕を応援してくれている。*",

"*Al pararme en el podio, decenas de ojos se dirigen a m\\u00ed. Seoyeon est\\u00e1 parada un poco lejos con una expresi\\u00f3n fr\\u00eda.*":
"*教壇の前に立つと、数十もの視線が刺さる。ソヨンは少し離れた場所で冷たい表情で立っている。*",

"*La atm\\u00f3sfera en el sal\\u00f3n se siente pesada. La profesora toca el podio para captar la atenci\\u00f3n de todos.*":
"*教室の空気が重く感じられる。担任の先生が教壇をトントンと叩いて注目を集める。*",

"\\\"Bueno, todos parecen muy interesados en el nuevo estudiante transferido. Debes estar nervioso, pero todos aqu\\u00ed son amables, as\\u00ed que no te preocupes mucho. Antes de que te presentes, \\u00bftienes alguna pregunta para m\\u00ed?\\\"":
"\\\"さて、みんな転校生にすごく興味があるみたいだね。緊張するだろうけど、みんないい子たちだから心配しないで。自己紹介の前に、先生に聞きたいことある？\\\"",

"*Hablar con la profesora me ayud\\u00f3 a relajarme. Parece que le caigo bien, lo cual es un alivio. Ahora es hora de presentarme a la clase.*":
"*先生と話したおかげでリラックスできた。先生も僕のことを良く思ってくれているみたいでよかった。さあ、みんなの前で自己紹介をする番だ。*",

"*La mirada de la profesora es aguda. Parece que caus\\u00e9 una mala primera impresi\\u00f3n. Tengo que presentarme en esta atm\\u00f3sfera fr\\u00eda.*":
"*先生の目つきが鋭い。第一印象でマイナスをくらったみたいだ。この冷たい雰囲気の中で自己紹介を始めなければならない。*",

"*La conversaci\\u00f3n con la profesora ha terminado. Ahora es hora de presentarme oficialmente a la clase. Todas las miradas est\\u00e1n en m\\u00ed.*":
"*先生との会話が終わった。いよいよ正式にクラスのみんなに紹介される時が来た。たくさんの視線が僕に集中する。*",

"\\\"(La profesora me mira con una sonrisa satisfecha.) Oh, {name}... Qu\\u00e9 nombre tan lindo. Ahora, por favor di unas palabras para presentarte a la clase. \\u00a1Todos, denle la bienvenida!\\\"":
"\\\"（先生が嬉しそうな笑顔で私を見る。）あら、{name}……いい名前ね。さあ、みんなに自己紹介をお願いするわ。みんな、歓迎してあげてね！\\\"",

"\\\"...Bien, {name}. Da una breve presentaci\\u00f3n a tus compa\\u00f1eros y toma asiento. Todos, silencio.\\\"":
"\\\"……さあ、{name}。クラスメートに簡単に自己紹介をして席に着きなさい。みんな、静かにして。\\\"",

"\\\"Bien, {name}. Por favor di unas palabras para presentarte a la clase.\\\"":
"\\\"さあ、{name}。クラスメートに自己紹介をお願いするわね。\\\"",

"\\\"{name}... Qu\\u00e9 lindo nombre. Bien, todos, denle la bienvenida.\\\"":
"\\\"{name}……いい名前だね。さあみんな、歓迎してあげて。\\\"",

"*Aplausos estallan por todo el sal\\u00f3n. Los chicos de los asientos traseros est\\u00e1n especialmente emocionados. Seoyeon aplaude con una sonrisa complacida.*":
"*教室のあちこちから歓声が上がる。特に後ろの席の男子が目を輝かせている。ソヨンも嬉しそうに微笑みながら拍手してくれる。*",

"*Los estudiantes ya est\\u00e1n susurrando sobre reclutarme para sus equipos.*":
"*生徒たちはもう僕を自分のチームに入れようとひそひそ話している。*",

"\\\"\\u00a1Oh, pareces deportista! \\u00bfQu\\u00e9 tal un partido de voleibol en el almuerzo? \\u00a1Veamos qu\\u00e9 tiene el estudiante transferido!\\\"":
"\\\"おー、運動できそうだね？昼休みにバレー一試合どう？転校生の実力見せてもらおうぜ！\\\"",

"*Los estudiantes asienten y me aceptan con calma. Algunas chicas susurran mientras me miran.*":
"*生徒たちがうなずいて落ち着いて僕を受け入れる。数人の女子がこそこそ話しながら僕を見ている。*",

"*Seoyeon parece complacida con mi actitud seria y asiente. La atm\\u00f3sfera del sal\\u00f3n se vuelve m\\u00e1s tranquila.*":
"*ソヨンは僕の真面目な様子が気に入ったのか、うなずいている。教室の雰囲気が一層落ち着いたものになる。*",

"\\\"Vaya, tiene un aura genial... \\u00bfEstar\\u00eda bien saludarlo si nos encontramos en la biblioteca?\\\"":
"\\\"わあ、なんか雰囲気あるね……今度図書館で会ったら挨拶してもいいかな？\\\"",

"*El sal\\u00f3n se vuelve instant\\u00e1neamente ruidoso como un mercado. Los estudiantes ya se amontonan a mi alrededor.*":
"*教室が一瞬で市場みたいに賑やかになる。もう周りに生徒たちが集まってきている。*",

"*Seoyeon parece un poco desconcertada pero pronto estalla en risas. Los estudiantes ya est\\u00e1n ocupados decidiendo d\\u00f3nde comer.*":
"*ソヨンは少し戸惑った様子だが、すぐに笑い出した。生徒たちはもうメニューを決めるのに忙しい。*",

"\\\"\\u00a1Wow! \\u00a1{name}, tienes una personalidad incre\\u00edble! \\u00a1Almorcemos juntos hoy! \\u00a1Te mostraremos todos los buenos lugares para comer!\\\"":
"\\\"わあ！{name}って性格めっちゃいいじゃん、今日のお昼は一緒に食べようよ！美味しいところいっぱい教えてあげる！\\\"",

"*Un silencio fr\\u00edo llena el sal\\u00f3n. Los estudiantes lucen un poco sorprendidos y se miran entre s\\u00ed mientras susurran.*":
"*教室に冷たい静寂が流れる。生徒たちが少し戸惑った様子で互いに目配せしながらひそひそ話している。*",

"*La expresi\\u00f3n de Seoyeon tambi\\u00e9n se endurece un poco. Es como si se hubiera formado alg\\u00fan tipo de muro. Los estudiantes se callan mientras me observan.*":
"*ソヨンの表情も少し固くなる。なぜか壁ができたような気分だ。生徒たちは僕の様子をうかがいながら静かになる。*",

"\\\"Vaya... Eso es intenso. Debe ser un rat\\u00f3n de biblioteca total. Mejor no lo molestemos...\\\"":
"\\\"わあ……マジかよ。完全に勉強の虫じゃん。下手に関わらない方がよさそう……\\\"",
}

def fix_ja_blocks(filepath, es_to_ja):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    count = 0
    for es_text, ja_text in es_to_ja.items():
        pos = 0
        while True:
            idx = content.find('"ja": {', pos)
            if idx == -1:
                break
            brace = 0
            end = idx + 6
            for k in range(idx + 6, len(content)):
                if content[k] == '{': brace += 1
                if content[k] == '}':
                    if brace == 0: end = k + 1; break
                    brace -= 1
            block = content[idx:end]
            target = '"text": "' + es_text + '"'
            if target in block:
                new_block = block.replace(target, '"text": "' + ja_text + '"', 1)
                content = content[:idx] + new_block + content[end:]
                count += 1
            pos = idx + 7

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return count

f1 = 'C:/workspace/cupid/assets/js/scenario/day1_1_morning.js'
c = fix_ja_blocks(f1, ES_TO_JA)
print(f"Fixed {c} ja blocks in file 1")
