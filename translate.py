import json, re, sys

# Translation map: English -> (Spanish, Japanese)
T = {
# === day1_1_morning.js texts ===
"*Warm sunlight... Today is my first day at this school. I'm a bit nervous.*":
("*Cálida luz del sol... Hoy es mi primer día en esta escuela. Estoy un poco nervioso.*",
 "*暖かい日差し……今日からこの学校か。少し緊張するな。*"),

"*An unfamiliar uniform, an unfamiliar scenery... But somehow I feel like something good is going to happen.*":
("*Un uniforme desconocido, un paisaje desconocido... Pero de alguna manera siento que algo bueno va a pasar.*",
 "*見慣れない制服、見慣れない景色……でもなぜか、いいことが起きそうな気がする。*"),

"*Alright, let's go. It's a new beginning.*":
("*Bien, vamos. Es un nuevo comienzo.*",
 "*さあ、行こう。新しい始まりだ。*"),

"Transfer student, what's your name?":
("Estudiante transferido, \\u00bfc\\u00f3mo te llamas?",
 "転校生、君の名前は？"),

"\\\"Hello? I haven't seen you before. Are you... {name}, the new transfer student?\\\"":
("\\\"\\u00bfHola? No te hab\\u00eda visto antes. \\u00bfEres... {name}, el nuevo estudiante transferido?\\\"",
 "\\\"こんにちは？見かけない顔だね。もしかして……{name}？\\\""),

"*A girl approaches me with a bright smile. A subtle scent of shampoo tickles my nose.*":
("*Una chica se me acerca con una sonrisa radiante. Un sutil aroma a champ\\u00fa me cosquillea la nariz.*",
 "*にっこり笑いながら話しかけてくる女の子。ほのかなシャンプーの香りが鼻先をかすめる。*"),

"*When our eyes meet, my heart skips a beat. She's so pretty...*":
("*Cuando nuestras miradas se cruzan, mi coraz\\u00f3n da un salto. Es tan bonita...*",
 "*目が合った瞬間、周りの音が遠のくような気がした。彼女の微笑みは朝の日差しよりも眩しかった。*"),

"\\\"I'm Seoyeon, the student council president. The teacher asked me to come greet you. Nice to meet you!\\\"":
("\\\"Soy Seoyeon, la presidenta del consejo estudiantil. La profesora me pidi\\u00f3 que viniera a recibirte. \\u00a1Mucho gusto!\\\"",
 "\\\"生徒会長のソヨンだよ。先生に頼まれてお迎えに来たの。よろしくね！\\\""),

"*Seoyeon's eyes widen, and she bites her lower lip.*":
("*Los ojos de Seoyeon se agrandan y se muerde el labio inferior.*",
 "*ソヨンの目が大きく見開かれ、下唇をぎゅっと噛んだ。*"),

"\\\"Oh... Sorry. I must have been in your way. But guiding you is my job, so... follow me.\\\"":
("\\\"Oh... Lo siento. Deb\\u00ed haberte estorbado. Pero guiarte es mi trabajo, as\\u00ed que... s\\u00edgueme.\\\"",
 "\\\"あ……ごめん。邪魔だったかな。でも案内は私の仕事だから……ついてきて。\\\""),

"*When she smiles brightly, the whole area seems to light up. My tension eases a bit.*":
("*Cuando sonr\\u00ede radiantemente, todo el lugar parece iluminarse. Mi tensi\\u00f3n se alivia un poco.*",
 "*彼女が明るく笑うと、周りまで明るくなる気がする。少し緊張がほぐれた。*"),

"\\\"Hehe, right? It can be a bit confusing at first. I'll be your perfect guide. Come on, follow me!\\\"":
("\\\"Jeje, \\u00bfverdad? Puede ser un poco confuso al principio. Ser\\u00e9 tu gu\\u00eda perfecta. \\u00a1Vamos, s\\u00edgueme!\\\"",
 "\\\"ふふっ、でしょ？最初はちょっと複雑だよね。私が完璧に案内してあげる。さあ、ついてきて！\\\""),

"*Her eyes widen, then she playfully winks at me.*":
("*Sus ojos se agrandan, luego me gui\\u00f1a juguetonamente.*",
 "*彼女が目を丸くして、すぐにいたずらっぽくウインクした。*"),

"\\\"Oh my, flirting on the first day? I'll give you credit for that. So, shall our 'special' transfer student follow me?\\\"":
("\\\"Vaya, \\u00bfcoqueteando el primer d\\u00eda? Te doy cr\\u00e9dito por eso. Entonces, \\u00bfnuestro estudiante transferido 'especial' me sigue?\\\"",
 "\\\"あら、初日からなかなかやるね？ まあ、悪くないけど。じゃあ、'特別な'転校生さん、迷子になる前についてきてね。\\\""),

"*Seoyeon's face instantly turns red. She avoids my gaze and plays with her hair.*":
("*El rostro de Seoyeon se pone rojo instant\\u00e1neamente. Evita mi mirada y juega con su cabello.*",
 "*ソヨンの顔が一瞬で赤く染まる。視線をそらしながら髪をいじっている。*"),

"\\\"Th-that was so sudden... That's cheating. Anyway, transfer students these days... Just follow me!\\\"":
("\\\"E-eso fue tan repentino... Eso es trampa. En fin, los estudiantes transferidos de hoy en d\\u00eda... \\u00a1Solo s\\u00edgueme!\\\"",
 "\\\"……いきなりそんなこと言われたら、どう反応していいかわからないじゃない。*頬に広がる赤みを隠すように、努めて落ち着いた声で言って歩き出した。* 遅れるよ。早くついてきて。\\\""),

"*She tilts her head and leans closer to my face. I can almost feel her breath.*":
("*Ella inclina la cabeza y se acerca a mi rostro. Casi puedo sentir su aliento.*",
 "*彼女が首を傾げて僕の顔に近づいてくる。息遣いが感じられそうなほどに。*"),

"\\\"Hmm? What's wrong? Your face is really red... Did you already fall for me? Hehe.\\\"":
("\\\"\\u00bfHmm? \\u00bfQu\\u00e9 pasa? Tu cara est\\u00e1 muy roja... \\u00bfYa te enamoraste de m\\u00ed? Jeje.\\\"",
 "\\\"ん？どうしたの？顔が真っ赤だけど……まさかもう私に惚れちゃった？ふふっ。\\\""),

"*I follow Seoyeon down the hallway. The lively voices of students can be heard through the windows.*":
("*Sigo a Seoyeon por el pasillo. Las voces animadas de los estudiantes se escuchan por las ventanas.*",
 "*ソヨンの後ろを歩いて廊下を進む。窓の外から生徒たちの元気な声が聞こえる。*"),

"*Seoyeon suddenly stops and turns to me.* \\\"Oh, come to think of it, I said your name first earlier. It's {name}, right? Let me introduce myself properly this time!\\\"":
("*Seoyeon se detiene de repente y se vuelve hacia m\\u00ed.* \\\"Oh, ahora que lo pienso, dije tu nombre primero antes. Es {name}, \\u00bfverdad? \\u00a1D\\u00e9jame presentarme correctamente esta vez!\\\"",
 "*ソヨンが急に立ち止まって振り返る。* \\\"あ、そういえばさっき私が先に名前言っちゃったね。{name}、だよね？改めて正式にご挨拶するね！\\\""),

"\\\"Yeah, that's right. I'm {name}. I was so distracted earlier that I couldn't introduce myself properly. Nice to meet you, Seoyeon.\\\"":
("\\\"S\\u00ed, as\\u00ed es. Soy {name}. Estaba tan distra\\u00eddo antes que no pude presentarme bien. Mucho gusto, Seoyeon.\\\"",
 "\\\"うん、そうだよ。{name}だ。さっきはバタバタしててちゃんと挨拶できなかったね。よろしく、ソヨン。\\\""),

"\\\"{name}... Hehe, that's a nice name! I'll call you {name} from now on. Nice to meet you too, {name}!\\\"":
("\\\"{name}... Jeje, \\u00a1qu\\u00e9 lindo nombre! Te llamar\\u00e9 {name} de ahora en adelante. \\u00a1Mucho gusto tambi\\u00e9n, {name}!\\\"",
 "\\\"{name}……ふふっ、いい名前だね！じゃあこれからは{name}って呼ぶね。よろしくね、{name}！\\\""),

"*I walk down the hallway, watching her from behind.*":
("*Camino por el pasillo, observ\\u00e1ndola desde atr\\u00e1s.*",
 "*彼女の後ろ姿を見ながら廊下を歩く。*"),

"\\\"Oh, come to think of it, we only exchanged names and didn't really talk! If you have any questions, feel free to ask!\\\"":
("\\\"Oh, ahora que lo pienso, \\u00a1solo intercambiamos nombres y no hablamos de verdad! Si tienes alguna pregunta, \\u00a1no dudes en preguntar!\\\"",
 "\\\"あ、そういえば名前だけ交換して、ちゃんとお話してなかったね？ 気になることがあったら何でも聞いてね！\\\""),

"*Before I knew it, chatting with Seoyeon has led us to the school tour. Time flies so fast... It's fun being with her.*":
("*Sin darme cuenta, charlar con Seoyeon nos llev\\u00f3 al recorrido escolar. El tiempo vuela... Es divertido estar con ella.*",
 "*ソヨンとおしゃべりしているうちに、いつの間にか学校案内が始まっていた。時間が経つのが早い……彼女といると楽しいな。*"),

"*Seoyeon's expression doesn't look good. I must have made some mistake during our conversation. She started the school tour with a cold attitude.*":
("*La expresi\\u00f3n de Seoyeon no se ve bien. Debo haber cometido alg\\u00fan error durante nuestra conversaci\\u00f3n. Comenz\\u00f3 el recorrido escolar con una actitud fr\\u00eda.*",
 "*ソヨンの表情が良くない。会話の中で何か失敗したらしい。彼女は冷たい態度で学校案内を始めた。*"),

"*I started walking down the hallway with Seoyeon's guidance. She kindly began explaining various parts of the school.*":
("*Comenc\\u00e9 a caminar por el pasillo con la gu\\u00eda de Seoyeon. Ella amablemente empez\\u00f3 a explicar varias partes de la escuela.*",
 "*ソヨンの案内を受けながら廊下を歩き始めた。彼女は学校のあちこちを親切に説明してくれた。*"),

"*Seoyeon stops as if flustered and stares at me. Her face turns slightly red, but soon she gives a playful smile.*":
("*Seoyeon se detiene como desconcertada y me mira fijamente. Su cara se pone ligeramente roja, pero pronto esboza una sonrisa juguetona.*",
 "*ソヨンが戸惑ったように立ち止まって私をじっと見つめる。顔が少し赤くなるが、すぐにいたずらっぽい笑みを浮かべた。*"),

"\\\"Oh my, {name}, are you the type to judge people by their looks? Hehe, but thank you. A goddess... I'm a bit happy. But don't go too far with the jokes!\\\"":
("\\\"Ay, {name}, \\u00bferes de los que juzgan a las personas por su apariencia? Jeje, pero gracias. Una diosa... Estoy un poco contenta. \\u00a1Pero no te pases con las bromas!\\\"",
 "\\\"あら、{name}は見た目で人を判断するタイプなんだ？ふふっ、でもありがとう。女神だなんて……ちょっと嬉しいかも。でもからかいすぎはダメだよ！\\\""),

"*Seoyeon stops without hiding her displeasure. Her eyes have gone cold.*":
("*Seoyeon se detiene sin ocultar su desagrado. Sus ojos se han vuelto fr\\u00edos.*",
 "*ソヨンが不快感を隠さずに足を止める。彼女の目が冷たく冷えている。*"),

"\\\"Well... I know it's a compliment, but... isn't it a bit much? We just met. Please keep the jokes appropriate.\\\"":
("\\\"Bueno... S\\u00e9 que es un cumplido, pero... \\u00bfno es un poco exagerado? Acabamos de conocernos. Por favor, mant\\u00e9n las bromas apropiadas.\\\"",
 "\\\"うーん……褒め言葉なのはわかるけど……ちょっとやりすぎじゃない？まだ会ったばかりなんだから。冗談はほどほどにしてね。\\\""),

"*Seoyeon stops as if flustered and stares at me. Her eyes turn a bit cold.*":
("*Seoyeon se detiene como desconcertada y me mira fijamente. Sus ojos se vuelven un poco fr\\u00edos.*",
 "*ソヨンが戸惑ったように立ち止まって私をじっと見つめる。彼女の目が少し冷たくなった。*"),

"\\\"Hmm... Well, thanks, but... that kind of talk makes me uncomfortable. We haven't known each other long, right? The joke seems a bit too much.\\\"":
("\\\"Hmm... Bueno, gracias, pero... ese tipo de comentarios me incomodan. No nos conocemos hace mucho, \\u00bfverdad? La broma parece un poco excesiva.\\\"",
 "\\\"うーん……まあ、ありがとうだけど……そういうのはちょっと困るな。まだ知り合ったばかりでしょ？冗談がちょっと過ぎると思う。\\\""),

"*Her eyes sparkle with excitement as she looks at me. There's anticipation that we might share similar interests.*":
("*Sus ojos brillan de emoci\\u00f3n al mirarme. Hay anticipaci\\u00f3n de que podr\\u00edamos compartir intereses similares.*",
 "*彼女がキラキラした目で嬉しそうに私を見ている。似たような趣味を持っているかもしれないという期待が見える。*"),

"\\\"Yeah! I'm in the student council, but I'm also in the gardening club. I love growing flowers. Do you like flowers, {name}? Come visit our greenhouse sometime! I'll give you a special tour.\\\"":
("\\\"\\u00a1S\\u00ed! Estoy en el consejo estudiantil, pero tambi\\u00e9n en el club de jardiner\\u00eda. Me encanta cultivar flores. \\u00bfTe gustan las flores, {name}? \\u00a1Ven a visitar nuestro invernadero alguna vez! Te dar\\u00e9 un recorrido especial.\\\"",
 "\\\"うん！生徒会もやってるけど、実は園芸部にも入ってるんだ。お花を育てるのが好きでね。{name}はお花好き？今度、温室にも遊びに来てね！特別に案内してあげる。\\\""),

"*She nods with a businesslike attitude. There's no emotion on her face.*":
("*Ella asiente con una actitud profesional. No hay emoci\\u00f3n en su rostro.*",
 "*彼女が事務的な態度でうなずく。表情には何の感情も乗っていない。*"),

"\\\"Yeah. I'm in both the student council and gardening club. Is that all you wanted to ask? Then let's continue the tour.\\\"":
("\\\"S\\u00ed. Estoy en el consejo estudiantil y en el club de jardiner\\u00eda. \\u00bfEso es todo lo que quer\\u00edas preguntar? Entonces continuemos el recorrido.\\\"",
 "\\\"うん。生徒会と園芸部を両立してるよ。質問はそれだけ？じゃあ案内を続けるね。\\\""),

"*She looks at me with delight.*":
("*Me mira con alegr\\u00eda.*",
 "*彼女が嬉しそうに私を見ている。*"),

"\\\"Yeah! I'm in the student council, but I'm also in the gardening club. I love growing flowers. Working with soil makes me feel at peace. Come visit our greenhouse sometime!\\\"":
("\\\"\\u00a1S\\u00ed! Estoy en el consejo estudiantil, pero tambi\\u00e9n en el club de jardiner\\u00eda. Me encanta cultivar flores. Trabajar con la tierra me da paz. \\u00a1Ven a visitar nuestro invernadero alguna vez!\\\"",
 "\\\"うん！生徒会もやってるけど、実は園芸部にも入ってるんだ。お花を育てるのが好きでね。土をいじっていると心が落ち着くの。今度、温室にも遊びに来てね！\\\""),

"*Seoyeon blushes with genuine happiness and smiles shyly. Her eyes are full of affection for me.*":
("*Seoyeon se sonroja de genuina felicidad y sonr\\u00ede t\\u00edmidamente. Sus ojos est\\u00e1n llenos de cari\\u00f1o hacia m\\u00ed.*",
 "*ソヨンが本当に嬉しそうに頬を赤らめ、はにかんだ笑顔を見せる。彼女の目には私への好意がいっぱい詰まっている。*"),

"\\\"Really... How do you say such sweet things? I was worried about whether you'd adjust well as a transfer student, but I feel comforted instead. Thank you, {name}. I feel really at ease when I'm with you.\\\"":
("\\\"De verdad... \\u00bfC\\u00f3mo dices cosas tan dulces? Me preocupaba si te adaptar\\u00edas bien como estudiante transferido, pero me siento reconfortada. Gracias, {name}. Me siento muy tranquila cuando estoy contigo.\\\"",
 "\\\"本当に……どうしてそんなに素敵なこと言えるの？転校生のあなたがうまくやれるか心配してたのに、逆に私が癒されちゃった。ありがとう、{name}。あなたといると本当に心が安らぐの。\\\""),

"*She looks at me coldly. The corner of her mouth is slightly twisted as if mocking.*":
("*Me mira fr\\u00edamente. La comisura de su boca est\\u00e1 ligeramente torcida como si se burlara.*",
 "*彼女が冷たい表情で私をちらっと見る。口元がバカにするように少し歪んでいる。*"),

"\\\"You have a smooth way with words. Save the generic compliments. Right now, we're on a school tour, so just follow along.\\\"":
("\\\"Tienes una forma muy suave de hablar. Gu\\u00e1rdate los cumplidos gen\\u00e9ricos. Ahora estamos en un recorrido escolar, as\\u00ed que solo s\\u00edgueme.\\\"",
 "\\\"口だけは達者だね。誰にでも言える褒め言葉はいいから。今は学校案内中だから、後ろについてきて。\\\""),

"*She replies while blushing shyly.*":
("*Ella responde mientras se sonroja t\\u00edmidamente.*",
 "*彼女がはにかみながら頬を赤らめて答える。*"),

"\\\"Really... You have such a nice way with words. Being the student council president, I'm always tense, but when I'm with you, I feel relaxed. I might end up letting my guard down around you... Hehe, just kidding.\\\"":
("\\\"De verdad... Tienes una forma tan bonita de hablar. Siendo presidenta del consejo estudiantil, siempre estoy tensa, pero cuando estoy contigo me siento relajada. Podr\\u00eda terminar bajando la guardia contigo... Jeje, es broma.\\\"",
 "\\\"本当に……言葉がとても上手なんだね。生徒会長って立場だからいつも緊張してるけど、あなたといると何だか気が楽になるの。知らないうちに甘えちゃうかも……ふふっ、冗談だよ。\\\""),

"*She continues her explanation excitedly with sparkling eyes. She seems happy with my every reaction.*":
("*Contin\\u00faa su explicaci\\u00f3n emocionada con ojos brillantes. Parece feliz con cada una de mis reacciones.*",
 "*彼女がキラキラした目で楽しそうに説明を続ける。私の反応一つ一つを喜んでいるようだ。*"),

"\\\"Wow, I'm so touched that you're listening so seriously! {name}, you seem like a really kind and diligent person. It feels rewarding to guide you! If you have any more questions, feel free to ask!\\\"":
("\\\"\\u00a1Vaya, me conmueve que est\\u00e9s escuchando tan en serio! {name}, pareces una persona muy amable y diligente. \\u00a1Se siente gratificante guiarte! Si tienes m\\u00e1s preguntas, \\u00a1no dudes en preguntar!\\\"",
 "\\\"わあ、こんなに真剣に聞いてくれるなんて本当に感動！{name}は本当に優しくて真面目な人だね。案内した甲斐があるよ！もっと気になることがあったらいつでも聞いてね！\\\""),

"*She continues her explanation mechanically. It feels like she's speaking to the air without even looking at me.*":
("*Contin\\u00faa su explicaci\\u00f3n mec\\u00e1nicamente. Parece que habla al aire sin siquiera mirarme.*",
 "*彼女が機械的に説明を続ける。私を見もせず、空に向かって話しているような感じだ。*"),

"\\\"Did you catch all that? Then let's move to the next place. Don't just stand there spacing out, follow me.\\\"":
("\\\"\\u00bfEntendiste todo? Entonces vamos al siguiente lugar. No te quedes ah\\u00ed distra\\u00eddo, s\\u00edgueme.\\\"",
 "\\\"だいたいわかった？じゃあ次の場所に移動するよ。ぼーっとしてないでちゃんとついてきて。\\\""),

"*She continues her explanation excitedly.*":
("*Ella contin\\u00faa su explicaci\\u00f3n emocionada.*",
 "*彼女が楽しそうに説明を続ける。*"),

"\\\"Thank you for listening so well. {name}, you seem like a really diligent person! With that attitude, you'll adjust to school life in no time.\\\"":
("\\\"Gracias por escuchar tan bien. {name}, \\u00a1pareces una persona muy diligente! Con esa actitud, te adaptar\\u00e1s a la vida escolar en poco tiempo.\\\"",
 "\\\"こんなによく聞いてくれてありがとう。{name}、本当に真面目な人だね！そういう姿勢なら学校生活にもすぐ馴染めるよ。\\\""),

"*She suddenly stops and turns to me.*":
("*De repente se detiene y se vuelve hacia m\\u00ed.*",
 "*彼女が急に立ち止まって私を振り返る。*"),

"*Seoyeon, who was walking ahead, suddenly stops and turns to me with cold eyes.*":
("*Seoyeon, que iba caminando adelante, se detiene de repente y se vuelve hacia m\\u00ed con ojos fr\\u00edos.*",
 "*先を歩いていたソヨンが急に立ち止まり、冷たい目で私を振り返る。*"),

"*I can feel the distance in her gaze.*":
("*Puedo sentir la distancia en su mirada.*",
 "*彼女の視線から距離感が感じられる。*"),

"\\\"Acting like that on your first day of transfer will be troublesome. I'd appreciate it if you kept at least basic manners.\\\"":
("\\\"Comportarte as\\u00ed en tu primer d\\u00eda de transferencia ser\\u00e1 problem\\u00e1tico. Agradecer\\u00eda que mantengas al menos los modales b\\u00e1sicos.\\\"",
 "\\\"転校初日からそんな態度じゃ困るよ。最低限の礼儀は守ってほしいんだけど。\\\""),

"*She stares intently into my eyes.*":
("*Me mira fijamente a los ojos.*",
 "*彼女が私の目をじっと見つめる。*"),

"\\\"What kind of clubs are you interested in? The student council always welcomes new talent. If you join... I could personally teach you the work.\\\"":
("\\\"\\u00bfQu\\u00e9 tipo de clubes te interesan? El consejo estudiantil siempre da la bienvenida a nuevos talentos. Si te unes... yo personalmente podr\\u00eda ense\\u00f1arte el trabajo.\\\"",
 "\\\"どんな部活に興味がある？生徒会はいつも新しい人を歓迎してるよ。もし入ってくれたら……私が直接仕事を教えてあげられるんだけど。\\\""),

"*She can't hide her disappointment. Her shoulders seem to droop a little.*":
("*No puede ocultar su decepci\\u00f3n. Sus hombros parecen caer un poco.*",
 "*彼女は失望を隠しきれない。肩が少し落ちたように見える。*"),

"*Seoyeon's face turns red again. She avoids my gaze in embarrassment, but a faint smile spreads across her lips. Her fingertips fidget with her skirt. She shyly taps the floor with her toe.*":
("*El rostro de Seoyeon se pone rojo otra vez. Evita mi mirada avergonzada, pero una leve sonrisa se extiende por sus labios. Juguetea con su falda. T\\u00edmidamente golpea el suelo con la punta del pie.*",
 "*ソヨンの顔がまた赤くなる。恥ずかしそうに視線をそらすが、唇には薄い笑みが広がっている。指先がスカートの裾をいじっている。恥ずかしそうにつま先で床をトントンと叩いている。*"),

"\\\"E-every day? Do you know how much work there is! But if you join... I might be a little happy too. I'll be looking forward to it.\\\"":
("\\\"\\u00bfT-todos los d\\u00edas? \\u00a1\\u00bfSabes cu\\u00e1nto trabajo hay?! Pero si te unes... yo tambi\\u00e9n podr\\u00eda estar un poco contenta. Lo esperar\\u00e9 con ansias.\\\"",
 "\\\"え、毎日って……仕事がどれだけあると思ってるの！でも、入ってくれたら……私もちょっと嬉しいかも。楽しみにしてるね？\\\""),

"*She nods and starts walking ahead again. I feel a bit of regret.*":
("*Ella asiente y empieza a caminar adelante de nuevo. Siento un poco de arrepentimiento.*",
 "*彼女がうなずいてまた先を歩き始める。少し残念な気持ちになる。*"),

"*She stares at me blankly, then bursts into a clear, beautiful laugh. The sound echoes through the hallway like silver bells. Small tears at the corner of her eyes sparkle in the sunlight. She holds her stomach and laughs for a while...*":
("*Me mira fijamente, luego estalla en una risa clara y hermosa. El sonido resuena por el pasillo como campanitas de plata. Peque\\u00f1as l\\u00e1grimas en las comisuras de sus ojos brillan a la luz del sol. Se agarra el est\\u00f3mago y r\\u00ede por un rato...*",
 "*彼女がぽかんと私を見つめた後、澄んだ美しい笑い声を上げる。その笑い声が銀の鈴のように廊下に響く。目尻に浮かんだ小さな涙が日差しにキラキラ光っている。お腹を抱えてしばらく笑っている……*"),

"\\\"Hehe, you're really honest, aren't you? About me... Well, I might tell you depending on how things go from here. Look forward to it!\\\"":
("\\\"Jeje, eres muy honesto, \\u00bfno? Sobre m\\u00ed... Bueno, podr\\u00eda contarte dependiendo de c\\u00f3mo vayan las cosas. \\u00a1Esp\\u00e9ralo con ansias!\\\"",
 "\\\"ふふっ、本当に素直なんだね？私のことは……そうだなあ、これからの付き合い次第で教えてあげるかも。楽しみにしてて！\\\""),

"*When we arrive at the classroom door, Seoyeon gently takes my hand. My heart starts pounding at her soft touch.*":
("*Cuando llegamos a la puerta del sal\\u00f3n, Seoyeon toma suavemente mi mano. Mi coraz\\u00f3n empieza a latir con fuerza por su toque suave.*",
 "*教室のドアの前に着くと、ソヨンがそっと僕の手を取った。彼女の柔らかな感触に心臓がドキドキし始める。*"),

"*Seoyeon lowers her head slightly and whispers in my ear. Her sweet breath tickles me.* \\\"{name}, don't be too nervous. I'll always be by your side. You can do it.\\\"":
("*Seoyeon baja un poco la cabeza y me susurra al o\\u00eddo. Su dulce aliento me hace cosquillas.* \\\"{name}, no est\\u00e9s tan nervioso. Siempre estar\\u00e9 a tu lado. T\\u00fa puedes.\\\"",
 "*ソヨンが少し頭を下げて耳元でささやく。甘い息遣いがくすぐったい。* \\\"{name}、そんなに緊張しないで。私がいつもそばにいるから。大丈夫だよ。\\\""),

"\\\"Here's our classroom. ...This is a secret, but I asked the teacher to move you to the seat next to mine. I wanted to get close to you as soon as possible.\\\"":
("\\\"Aqu\\u00ed est\\u00e1 nuestro sal\\u00f3n. ...Esto es un secreto, pero le ped\\u00ed a la profesora que te moviera al asiento junto al m\\u00edo. Quer\\u00eda acercarme a ti lo antes posible.\\\"",
 "\\\"さあ、ここが私たちの教室だよ。……これは秘密だけど、先生にお願いして私の隣の席に移してもらったの。少しでも早く、あなたと仲良くなりたくて。\\\""),

"*When we arrive at the classroom door, Seoyeon walks ahead of me, keeping her distance. Her back somehow feels cold.*":
("*Cuando llegamos a la puerta del sal\\u00f3n, Seoyeon camina delante de m\\u00ed, manteniendo distancia. Su espalda de alguna manera se siente fr\\u00eda.*",
 "*教室のドアの前に着くと、ソヨンが先に歩いて距離を置く。彼女の後ろ姿がどこか冷たく感じられる。*"),

"*She silently points at the sign next to the door with her chin. Her attitude of not even looking at me makes my heart feel cold.*":
("*Se\\u00f1ala en silencio el letrero junto a la puerta con la barbilla. Su actitud de ni siquiera mirarme me hace sentir fr\\u00edo por dentro.*",
 "*彼女が無言でドアの横の表示を顎で指す。こちらを見ようともしない態度に心の隅が冷える。*"),

"\\\"This is Class 2-3. The teacher is waiting inside. Don't be late on your first day of transfer and get on their bad side. Go on in.\\\"":
("\\\"Esta es la clase 2-3. La profesora est\\u00e1 esperando adentro. No llegues tarde en tu primer d\\u00eda de transferencia. Entra.\\\"",
 "\\\"ここが2年3組だよ。先生が中で待ってるから。転校初日から遅刻して目をつけられないように、早く入って。\\\""),

"*We arrived at the classroom door. The chattering and laughter of students can be heard from inside. Seoyeon lightly pats my shoulder to encourage me.*":
("*Llegamos a la puerta del sal\\u00f3n. Se escuchan las charlas y risas de los estudiantes desde adentro. Seoyeon me da palmaditas en el hombro para animarme.*",
 "*教室のドアの前に着いた。中から生徒たちのざわめきや笑い声が聞こえてくる。ソヨンが軽く肩をポンと叩いて応援してくれる。*"),

"*Where her hand touched feels warm. She looks into my eyes and quietly cheers me on.*":
("*Donde su mano toc\\u00f3 se siente c\\u00e1lido. Me mira a los ojos y me anima en silencio.*",
 "*彼女の手が触れた場所がじんわり温かい。彼女が僕の目を見て小さくファイトと言ってくれる。*"),

"\\\"Here's Class 2-3, where you'll be staying. Don't be nervous. I'm right next to you, so just be yourself. Got it?\\\"":
("\\\"Aqu\\u00ed est\\u00e1 la clase 2-3, donde estar\\u00e1s. No te pongas nervioso. Estoy justo a tu lado, as\\u00ed que s\\u00e9 t\\u00fa mismo. \\u00bfEntendido?\\\"",
 "\\\"さあ、ここがあなたのいる2年3組だよ。緊張しないで。私がすぐ隣にいるから、いつも通りにすればいいよ。わかった？\\\""),

"*As I stand at the podium, dozens of eyes turn to me. Curious gazes, wary gazes... Seoyeon is smiling and watching over me from beside me.*":
("*Al pararme en el podio, decenas de ojos se dirigen a m\\u00ed. Miradas curiosas, miradas cautelosas... Seoyeon est\\u00e1 sonriendo y cuid\\u00e1ndome desde mi lado.*",
 "*教壇の前に立つと、数十もの視線が一斉に僕に突き刺さる。好奇の目、警戒の目……ソヨンは隣で微笑みながら僕を見守っている。*"),

"*As I stand at the podium, dozens of eyes turn to me. Seoyeon is smiling supportively beside me, cheering me on.*":
("*Al pararme en el podio, decenas de ojos se dirigen a m\\u00ed. Seoyeon est\\u00e1 sonriendo con apoyo a mi lado, anim\\u00e1ndome.*",
 "*教壇の前に立つと、数十もの視線が刺さる。ソヨンは隣で頼もしく微笑みながら僕を応援してくれている。*"),

"*As I stand at the podium, dozens of eyes turn to me. Seoyeon is standing a bit away with a cold expression.*":
("*Al pararme en el podio, decenas de ojos se dirigen a m\\u00ed. Seoyeon est\\u00e1 parada un poco lejos con una expresi\\u00f3n fr\\u00eda.*",
 "*教壇の前に立つと、数十もの視線が刺さる。ソヨンは少し離れた場所で冷たい表情で立っている。*"),

"*The atmosphere in the classroom feels heavy. The homeroom teacher taps the podium to get everyone's attention.*":
("*La atm\\u00f3sfera en el sal\\u00f3n se siente pesada. La profesora toca el podio para captar la atenci\\u00f3n de todos.*",
 "*教室の空気が重く感じられる。担任の先生が教壇をトントンと叩いて注目を集める。*"),

"\\\"Well, everyone seems very interested in the new transfer student. You must be nervous, but everyone here is nice, so don't worry too much. Before you introduce yourself, do you have any questions for me?\\\"":
("\\\"Bueno, todos parecen muy interesados en el nuevo estudiante transferido. Debes estar nervioso, pero todos aqu\\u00ed son amables, as\\u00ed que no te preocupes mucho. Antes de que te presentes, \\u00bftienes alguna pregunta para m\\u00ed?\\\"",
 "\\\"さて、みんな転校生にすごく興味があるみたいだね。緊張するだろうけど、みんないい子たちだから心配しないで。自己紹介の前に、先生に聞きたいことある？\\\""),

"*Talking with the teacher helped me relax. She seems to like me, which is a relief. Now it's time to introduce myself to the class.*":
("*Hablar con la profesora me ayud\\u00f3 a relajarme. Parece que le caigo bien, lo cual es un alivio. Ahora es hora de presentarme a la clase.*",
 "*先生と話したおかげでリラックスできた。先生も僕のことを良く思ってくれているみたいでよかった。さあ、みんなの前で自己紹介をする番だ。*"),

"*The teacher's gaze is sharp. It seems I made a bad first impression. I have to introduce myself in this cold atmosphere.*":
("*La mirada de la profesora es aguda. Parece que caus\\u00e9 una mala primera impresi\\u00f3n. Tengo que presentarme en esta atm\\u00f3sfera fr\\u00eda.*",
 "*先生の目つきが鋭い。第一印象でマイナスをくらったみたいだ。この冷たい雰囲気の中で自己紹介を始めなければならない。*"),

"*The conversation with the teacher is over. Now it's time to officially introduce myself to the class. All eyes are on me.*":
("*La conversaci\\u00f3n con la profesora ha terminado. Ahora es hora de presentarme oficialmente a la clase. Todas las miradas est\\u00e1n en m\\u00ed.*",
 "*先生との会話が終わった。いよいよ正式にクラスのみんなに紹介される時が来た。たくさんの視線が僕に集中する。*"),

"\\\"(The teacher looks at me with a satisfied smile.) Oh, {name}... What a lovely name. Now, please say a few words to introduce yourself to the class. Everyone, please welcome them!\\\"":
("\\\"(La profesora me mira con una sonrisa satisfecha.) Oh, {name}... Qu\\u00e9 nombre tan lindo. Ahora, por favor di unas palabras para presentarte a la clase. \\u00a1Todos, denle la bienvenida!\\\"",
 "\\\"（先生が嬉しそうな笑顔で私を見る。）あら、{name}……いい名前ね。さあ、みんなに自己紹介をお願いするわ。みんな、歓迎してあげてね！\\\""),

"\\\"...Alright, {name}. Give a brief introduction to your classmates and take your seat. Everyone, quiet down.\\\"":
("\\\"...Bien, {name}. Da una breve presentaci\\u00f3n a tus compa\\u00f1eros y toma asiento. Todos, silencio.\\\"",
 "\\\"……さあ、{name}。クラスメートに簡単に自己紹介をして席に着きなさい。みんな、静かにして。\\\""),

"\\\"Alright, {name}. Please say a few words to introduce yourself to the class.\\\"":
("\\\"Bien, {name}. Por favor di unas palabras para presentarte a la clase.\\\"",
 "\\\"さあ、{name}。クラスメートに自己紹介をお願いするわね。\\\""),

"\\\"{name}... That's a nice name. Alright everyone, please welcome them.\\\"":
("\\\"{name}... Qu\\u00e9 lindo nombre. Bien, todos, denle la bienvenida.\\\"",
 "\\\"{name}……いい名前だね。さあみんな、歓迎してあげて。\\\""),

"*Cheers erupt from all over the classroom. The boys in the back seats are especially excited. Seoyeon claps with a pleased smile.*":
("*Aplausos estallan por todo el sal\\u00f3n. Los chicos de los asientos traseros est\\u00e1n especialmente emocionados. Seoyeon aplaude con una sonrisa complacida.*",
 "*教室のあちこちから歓声が上がる。特に後ろの席の男子が目を輝かせている。ソヨンも嬉しそうに微笑みながら拍手してくれる。*"),

"*The students are already whispering about recruiting me to their teams.*":
("*Los estudiantes ya est\\u00e1n susurrando sobre reclutarme para sus equipos.*",
 "*生徒たちはもう僕を自分のチームに入れようとひそひそ話している。*"),

"\\\"Oh, you seem athletic! How about a game of volleyball at lunch? Let's see what the transfer student's got!\\\"":
("\\\"\\u00a1Oh, pareces deportista! \\u00bfQu\\u00e9 tal un partido de voleibol en el almuerzo? \\u00a1Veamos qu\\u00e9 tiene el estudiante transferido!\\\"",
 "\\\"おー、運動できそうだね？昼休みにバレー一試合どう？転校生の実力見せてもらおうぜ！\\\""),

"*The students nod and calmly accept me. Some girls whisper while looking at me.*":
("*Los estudiantes asienten y me aceptan con calma. Algunas chicas susurran mientras me miran.*",
 "*生徒たちがうなずいて落ち着いて僕を受け入れる。数人の女子がこそこそ話しながら僕を見ている。*"),

"*Seoyeon seems pleased with my serious demeanor and nods. The classroom atmosphere becomes more calm.*":
("*Seoyeon parece complacida con mi actitud seria y asiente. La atm\\u00f3sfera del sal\\u00f3n se vuelve m\\u00e1s tranquila.*",
 "*ソヨンは僕の真面目な様子が気に入ったのか、うなずいている。教室の雰囲気が一層落ち着いたものになる。*"),

"\\\"Wow, they have a cool vibe... Would it be okay to say hi if we meet in the library?\\\"":
("\\\"Vaya, tiene un aura genial... \\u00bfEstar\\u00eda bien saludarlo si nos encontramos en la biblioteca?\\\"",
 "\\\"わあ、なんか雰囲気あるね……今度図書館で会ったら挨拶してもいいかな？\\\""),

"*The classroom instantly becomes as noisy as a marketplace. Students are already crowding around me.*":
("*El sal\\u00f3n se vuelve instant\\u00e1neamente ruidoso como un mercado. Los estudiantes ya se amontonan a mi alrededor.*",
 "*教室が一瞬で市場みたいに賑やかになる。もう周りに生徒たちが集まってきている。*"),

"*Seoyeon seems a bit flustered but soon bursts out laughing. The students are already busy deciding where to eat.*":
("*Seoyeon parece un poco desconcertada pero pronto estalla en risas. Los estudiantes ya est\\u00e1n ocupados decidiendo d\\u00f3nde comer.*",
 "*ソヨンは少し戸惑った様子だが、すぐに笑い出した。生徒たちはもうメニューを決めるのに忙しい。*"),

"\\\"Wow! {name}, you have such a great personality! Let's eat lunch together today! We'll show you all the good food spots!\\\"":
("\\\"\\u00a1Wow! \\u00a1{name}, tienes una personalidad incre\\u00edble! \\u00a1Almorcemos juntos hoy! \\u00a1Te mostraremos todos los buenos lugares para comer!\\\"",
 "\\\"わあ！{name}って性格めっちゃいいじゃん、今日のお昼は一緒に食べようよ！美味しいところいっぱい教えてあげる！\\\""),

"*A cold silence fills the classroom. The students look a bit taken aback and glance at each other while whispering.*":
("*Un silencio fr\\u00edo llena el sal\\u00f3n. Los estudiantes lucen un poco sorprendidos y se miran entre s\\u00ed mientras susurran.*",
 "*教室に冷たい静寂が流れる。生徒たちが少し戸惑った様子で互いに目配せしながらひそひそ話している。*"),

"*Seoyeon's expression stiffens a bit too. It's as if some kind of wall has formed. The students quiet down while watching me.*":
("*La expresi\\u00f3n de Seoyeon tambi\\u00e9n se endurece un poco. Es como si se hubiera formado alg\\u00fan tipo de muro. Los estudiantes se callan mientras me observan.*",
 "*ソヨンの表情も少し固くなる。なぜか壁ができたような気分だ。生徒たちは僕の様子をうかがいながら静かになる。*"),

"\\\"Wow... That's intense. Must be a total study bug. We should probably not bother them...\\\"":
("\\\"Vaya... Eso es intenso. Debe ser un rat\\u00f3n de biblioteca total. Mejor no lo molestemos...\\\"",
 "\\\"わあ……マジかよ。完全に勉強の虫じゃん。下手に関わらない方がよさそう……\\\""),
}

# Now process both files
import re

def replace_texts_in_file(filepath, translations):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    count = 0
    for en_text, (es_text, ja_text) in translations.items():
        # Replace in es blocks
        old_es = '"es": {\n                "name"'
        # We need a more targeted approach - find es blocks with this exact text and replace
        # Pattern: inside "es": { ... "text": "ENGLISH" ... }

        # Simple string replacement for text values in es blocks
        es_search = en_text
        ja_search = en_text

        # Find all occurrences in es blocks
        es_pattern = '"es": {'
        pos = 0
        new_content = content
        offset = 0

        # For each es block, replace the text
        while True:
            idx = new_content.find('"es": {', pos)
            if idx == -1:
                break
            # Find the closing } of this es block
            brace = 0
            end = idx + 6
            for k in range(idx + 6, len(new_content)):
                if new_content[k] == '{':
                    brace += 1
                if new_content[k] == '}':
                    if brace == 0:
                        end = k + 1
                        break
                    brace -= 1

            block = new_content[idx:end]
            if '"text": "' + en_text + '"' in block:
                new_block = block.replace('"text": "' + en_text + '"', '"text": "' + es_text + '"')
                new_content = new_content[:idx] + new_block + new_content[end:]
                count += 1

            pos = idx + len('"es": {')

        # Same for ja blocks
        pos = 0
        while True:
            idx = new_content.find('"ja": {', pos)
            if idx == -1:
                break
            brace = 0
            end = idx + 6
            for k in range(idx + 6, len(new_content)):
                if new_content[k] == '{':
                    brace += 1
                if new_content[k] == '}':
                    if brace == 0:
                        end = k + 1
                        break
                    brace -= 1

            block = new_content[idx:end]
            if '"text": "' + en_text + '"' in block:
                new_block = block.replace('"text": "' + en_text + '"', '"text": "' + ja_text + '"')
                new_content = new_content[:idx] + new_block + new_content[end:]
                count += 1

            pos = idx + len('"ja": {')

        content = new_content

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return count

f1 = 'C:/workspace/cupid/assets/js/scenario/day1_1_morning.js'
f2 = 'C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js'

c1 = replace_texts_in_file(f1, T)
c2 = replace_texts_in_file(f2, T)
print(f"Replaced {c1} texts in file 1, {c2} texts in file 2")
