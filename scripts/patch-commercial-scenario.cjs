'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const locales = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];

const copy = {
    ko: {
        sojeong: [
            ['{name}', "*휴대폰 메모 앱을 연다. '소정에게'로 시작하는 빈 초안이 서른아홉 개다.*"],
            ['{name}', '*마흔 번째 초안은 쓰지 않는다. 가장 짧은 문장을 골라 그대로 보낸다.*'],
            ['{name}', '그때 네 책상과 낙서를 보고도 선생님께 말하지 않았어. 모른 척한 것도 내 선택이었어. 미안해. 답장은 안 해도 돼.'],
            ['{name}', '*전송 표시가 뜬다. 읽음 표시는 기다리지 않고 대화방을 닫는다.*'],
            ['{name}', "*지금 담임에게도 메시지를 보낸다. '전학 오기 전 학교에서 제가 모른 척한 일에 대해 상담받고 싶습니다.' 축제 안내 방송이 울릴 때까지 전송한 두 문장을 지우지 않는다.*"]
        ],
        seo: [
            ['하은', '회장님, 방송부 리허설이랑 부스 안전 점검이 겹쳤어요. 제가 방송실로 갈까요?'],
            ['{name}', "*서연의 손이 클립보드로 갔다가 멈춘다. 펜 끝으로 '방송' 칸을 두 번 두드린다.*"],
            ['서연', '방송실은 네가 맡아 줘. 끝나면 결과만 알려 줘.'],
            ['하은', '네. 대신 중간에 확인하러 오시면 안 돼요.'],
            ['서연', '*하은이 뛰어간다. 서연은 한 번도 뒤돌아보지 않는다.* 맞아. 하나쯤 내 손을 안 거쳐도 안 무너지겠지.']
        ],
        yuna: [
            ['{name}', '*별관 복도로 나오자 전시판 앞에 후배 둘이 서 있다. 유나가 익명으로 붙인 단편을 읽고 다음 이야기가 있느냐고 묻는다.*'],
            ['{name}', '*유나는 종이 모서리에 손을 댄다. 떼어 내려던 손이 제목 아래에서 멈춘다.*'],
            ['유나', '다음 편은 아직 없어. 대신 이건 내가 썼어.'],
            ['{name}', "*유나가 주머니에서 펜을 꺼내 제목 밑에 이름을 쓴다. '최유나'. 글자가 조금 기울었다.*"],
            ['유나', '*전시판에서 몸을 돌려 별관 안으로 돌아간다.* 결말은 먼저 너한테 보여 줄 거니까.']
        ],
        dain: [
            ['{name}', '*코치에게 전화가 온다. 다인은 체육대회 시범 경기에 뛸 수 있느냐는 말을 끝까지 듣는다.*'],
            ['다인', '저 안 뛸게요. 엄마한테도 오늘 말했어요. 대신 중계석 비어 있으면 제가 할게요.'],
            ['{name}', '*잠시 뒤 다인이 중계석 마이크를 두드린다. 코트가 한눈에 내려다보인다.*'],
            ['다인', '자, 서브 들어갑니다! 방금 건 라인 안쪽! 항의는 경기 끝나고 받겠습니다!'],
            ['다인', '*마이크를 끄고 체육관으로 내려가며 숨을 고른다.* 뛰지 않아도 할 말은 있네. 생각보다 많아.']
        ],
        traps: ['누구나 그럴 때 있어. 너무 신경 쓰지 마.', '역시 무리였네. 대회는 포기하고 오늘은 쉬어.', '7년이나 쓰셨으면 거의 완성본이겠네요. 굳이 표시할 건 없을 것 같아요.'],
        continuity: "재활이 끝난 척했어. 다시 아프기 시작한 것도 아무한테도 말 안 했고. 부모님한테도. '다인이가 안 뛰면 다인이가 아니지!' 그 말을 듣고 싶지 않았거든.",
        setup: [
            '*밤 10시 약속에 맞춰 공원으로 가는 길. 불 꺼진 체육관 비상문 앞에 다인이 무릎 테이프를 만지며 서 있다.*',
            "*공원으로 가는 길, 유나에게서 '별관 불은 아직 켜져 있어'라는 메시지와 빈 의자 두 개를 찍은 사진이 온다.*",
            '*밤 10시, 다인이 기다리는 체육관으로 가던 길. 도서관 별관 창문 한 칸에만 불이 남아 있다.*',
            '*다인이 기다리는 체육관으로 향하는데 서연이 옥상 계단 앞에 서 있다. 웃고 있지만 손끝이 교복 소매를 구긴다.*',
            '*유나와 만나기로 한 학교 후문으로 가던 길. 교문 앞 가로등 아래 서연이 혼자 서 있다.*',
            '*유나가 기다리는 학교 후문으로 가던 길. 불 꺼진 체육관 비상문 앞에 다인이 무릎 테이프를 만지며 서 있다.*'
        ],
        loyal: ['공원으로 가서 서연과의 약속을 지킨다', '서연에게 답장하고 공원으로 간다', '다인에게 답장하고 체육관으로 간다', '다인에게 답장하고 체육관으로 간다', '유나에게 답장하고 학교 후문으로 간다', '유나에게 답장하고 학교 후문으로 간다'],
        caught: [
            "*아침 교실. 서연 앞에 휴대폰을 내려놓는 순간 화면이 켜진다. 다인에게서 온 알림에 '어제 체육관에서 약속한 거, 잊지 마'가 그대로 뜬다. 서연의 시선이 화면에 멎는다.* 어제 공원에는 오지 않고 체육관에 간 거야?",
            "*다인이 책상 옆에 서 있을 때 휴대폰이 울린다. 서연의 알림에 '어젯밤 옥상에서 잡았던 손, 아직 기억나'가 뜬다. 다인의 웃음이 그대로 멎는다.* 내가 기다리는 동안 옥상에 간 거야?",
            "*다인이 건너편 의자를 당기는 순간 유나의 알림이 화면을 밝힌다. '어제 별관에 남아 줘서 고마워.' 다인의 손이 의자 등받이에서 멎는다.* 내 메시지는 읽어 놓고 별관으로 간 거야?"
        ],
        replacements: [["'너도 도착했어?'", "'공원 벤치에 있어.'"], ["'집 도착!'", "'체육관 뒷문 열어놨어.'"], ["'잘 들어갔냐?'", "'체육관 뒷문 열어놨어.'"]]
    },
    en: {
        sojeong: [
            ['{name}', "*I open the notes app. Thirty-nine blank drafts begin with 'To Sojeong.'*"],
            ['{name}', '*I do not write a fortieth. I choose the shortest draft and send it as it is.*'],
            ['{name}', "I saw what they did to your desk and the writing on it, but I never told a teacher. Looking away was my choice too. I'm sorry. You don't have to reply."],
            ['{name}', '*The message sends. I close the chat without waiting for a read receipt.*'],
            ['{name}', "*I message my current homeroom teacher too: 'I need to talk about something I chose to ignore at my old school.' I leave both messages on the screen until the festival announcement begins.*"]
        ],
        seo: [
            ['Haeun', 'President, the broadcast rehearsal overlaps with the booth safety check. Should I take the broadcast room?'],
            ['{name}', "*Seoyeon's hand moves toward the clipboard, then stops. She taps the box marked 'Broadcast' twice with her pen.*"],
            ['Seoyeon', 'Take the broadcast room. Just send me the result when you finish.'],
            ['Haeun', "All right. But you can't come check on me halfway through."],
            ['Seoyeon', "*Haeun runs off. Seoyeon does not look back once.* Right. One thing can pass through someone else's hands without the festival collapsing."]
        ],
        yuna: [
            ['{name}', "*When we step into the annex hallway, two younger students are at the display board. They are reading Yuna's anonymous story and asking whether there is more.*"],
            ['{name}', '*Yuna touches one corner of the page. The hand that meant to tear it down stops beneath the title.*'],
            ['Yuna', "There isn't a next part yet. But I wrote this."],
            ['{name}', "*Yuna takes a pen from her pocket and writes beneath the title: 'Choi Yuna.' The letters lean slightly.*"],
            ['Yuna', '*She turns from the display and walks back into the annex.* You still get to see the ending first.']
        ],
        dain: [
            ['{name}', '*The coach calls. Dain listens all the way through the question of whether she can play in the sports-day exhibition match.*'],
            ['Dain', "I won't play. I told Mom today too. But if the commentary booth is empty, I'll take it."],
            ['{name}', '*A little later, Dain taps the microphone in the booth. The entire court lies below us.*'],
            ['Dain', "Here comes the serve! That one was inside the line! Complaints accepted after the match!"],
            ['Dain', '*She switches off the microphone and catches her breath as we head down to the gym.* Turns out I still have things to say when I am not playing. A lot of them.']
        ],
        traps: ["Everyone has days like this. Don't take it so hard.", 'I knew you were pushing it. Drop the tournament and rest today.', "After seven years, it must be almost finished. I probably don't need to mark anything."],
        continuity: "I pretended rehab was over. I never told anyone when it started hurting again. Not even my parents. I didn't want to hear, 'Dain isn't Dain if she isn't playing!'",
        setup: [
            '*On the way to meet Seoyeon at the park at ten, I find Dain outside the dark gym, touching the tape on her knee.*',
            "*On the way to the park, Yuna sends a message: 'The annex lights are still on.' A photo follows, showing two empty chairs.*",
            '*At ten, on the way to the gym where Dain is waiting, I notice a single lit window in the library annex.*',
            '*On the way to the gym where Dain is waiting, I find Seoyeon by the rooftop stairs. She is smiling, but her fingers crush the cuff of her uniform.*',
            '*On the way to the school back gate where Yuna asked to meet, I find Seoyeon alone beneath the lamp by the front gate.*',
            '*On the way to the school back gate where Yuna is waiting, I find Dain outside the dark gym, touching the tape on her knee.*'
        ],
        loyal: ['Keep the promise and go to Seoyeon at the park', 'Reply to Seoyeon and continue to the park', 'Reply to Dain and continue to the gym', 'Reply to Dain and continue to the gym', 'Reply to Yuna and continue to the school back gate', 'Reply to Yuna and continue to the school back gate'],
        caught: [
            "*Morning in the classroom. The moment I set my phone down in front of Seoyeon, the screen lights up. A notification from Dain reads, 'Don't forget what we promised in the gym last night.' Seoyeon's gaze stops on the screen.* You skipped the park and went to the gym?",
            "*My phone buzzes while Dain is standing beside the desk. A notification from Seoyeon reads, 'I still remember the hand I held on the rooftop last night.' Dain's smile stops cold.* You went to the rooftop while I was waiting?",
            "*As Dain pulls out the chair across from me, a notification from Yuna lights up the screen. 'Thank you for staying with me in the annex last night.' Dain's hand freezes on the chair back.* You read my message and went to the annex?"
        ],
        replacements: [["'Did you make it home too?'", "'I'm on the park bench.'"], ["'Made it home!'", "'Gym back door is open.'"], ["'I'm home!'", "'Gym back door is open.'"], ["'You get home okay?'", "'Gym back door is open.'"]]
    },
    ja: {
        sojeong: [
            ['{name}', '*スマホのメモを開く。「ソジョンへ」で始まる空の下書きが三十九件ある。*'],
            ['{name}', '*四十件目は書かない。一番短い下書きを選び、そのまま送る。*'],
            ['{name}', 'あのとき、君の机と落書きを見たのに先生へ言わなかった。見て見ぬふりをしたのも僕の選択だった。ごめん。返事はしなくていい。'],
            ['{name}', '*送信済みの表示が出る。既読を待たずに画面を閉じる。*'],
            ['{name}', '*今の担任にも送る。「前の学校で、見て見ぬふりをしたことについて相談したいです」。文化祭の放送が始まるまで、送った二つの文を消さずに見つめる。*']
        ],
        seo: [
            ['ハウン', '会長、放送部のリハーサルと模擬店の安全点検が重なりました。私が放送室へ行きましょうか？'],
            ['{name}', '*ソヨンの手がクリップボードへ伸び、途中で止まる。ペン先で「放送」の欄を二度たたく。*'],
            ['ソヨン', '放送室は任せる。終わったら結果だけ教えて。'],
            ['ハウン', 'はい。その代わり、途中で確認に来ないでくださいね。'],
            ['ソヨン', '*ハウンが走っていく。ソヨンは一度も振り返らない。* そうだね。一つくらい私の手を通らなくても、全部は崩れない。']
        ],
        yuna: [
            ['{name}', '*別館の廊下へ出ると、掲示板の前に下級生が二人いる。ユナが匿名で貼った短編を読み、続きはあるのかと尋ねている。*'],
            ['{name}', '*ユナは紙の端に触れる。剥がそうとした手が、題名の下で止まる。*'],
            ['ユナ', '続きはまだない。でも、これは私が書いた。'],
            ['{name}', '*ユナはポケットからペンを出し、題名の下に「チェ・ユナ」と書く。文字が少し傾いている。*'],
            ['ユナ', '*掲示板に背を向け、別館の中へ戻る。* 結末は先に君に見せるから。']
        ],
        dain: [
            ['{name}', '*コーチから電話が来る。体育祭のエキシビションに出られるかという話を、ダインは最後まで聞く。*'],
            ['ダイン', '出ません。お母さんにも今日話しました。でも実況席が空いてるなら、私がやります。'],
            ['{name}', '*少しして、ダインが放送席のマイクを軽くたたく。コート全体が見渡せる。*'],
            ['ダイン', 'さあ、サーブです！　今のはラインの内側！　抗議は試合のあとで受け付けます！'],
            ['ダイン', '*マイクを切り、体育館へ下りながら息を整える。* プレーしなくても、言いたいことはあるんだ。思ったよりずっと。']
        ],
        traps: ['誰にだってそういう日はあるよ。あまり気にするな。', 'やっぱり無理してたんだ。大会は諦めて、今日は休めよ。', '七年も書いたなら、ほとんど完成ですよね。わざわざ印をつける必要もなさそうです。'],
        continuity: 'リハビリは終わったふりをした。また痛み始めたことも誰にも言わなかった。親にも。「ダインがプレーしなきゃダインじゃない！」って、聞きたくなかったから。',
        setup: [
            '*夜10時、ソヨンと会う公園へ向かう途中。明かりの消えた体育館の非常口で、ダインが膝のテープに触れている。*',
            '*公園へ向かう途中、ユナから「別館の灯りはまだ点いてる」とメッセージが来る。続けて、空の椅子が二脚並んだ写真が届く。*',
            '*夜10時、ダインが待つ体育館へ向かう途中。図書館別館の窓が一つだけ明るい。*',
            '*ダインが待つ体育館へ向かう途中、ソヨンが屋上階段の前に立っている。笑っているのに、指先は制服の袖を握りつぶしている。*',
            '*ユナと会う約束をした学校の裏門へ向かう途中、正門の街灯の下にソヨンが一人で立っている。*',
            '*ユナが待つ学校の裏門へ向かう途中。明かりの消えた体育館の非常口で、ダインが膝のテープに触れている。*'
        ],
        loyal: ['公園へ行き、ソヨンとの約束を守る', 'ソヨンに返信して公園へ向かう', 'ダインに返信して体育館へ向かう', 'ダインに返信して体育館へ向かう', 'ユナに返信して学校の裏門へ向かう', 'ユナに返信して学校の裏門へ向かう'],
        caught: [
            '*朝の教室。ソヨンの前にスマホを置いた瞬間、画面が点く。ダインからの通知には「昨日、体育館で約束したこと忘れないで」と表示されている。ソヨンの視線が画面で止まる。* 昨日、公園には来ないで体育館に行ったの？',
            '*ダインが机の横に立ったとき、スマホが震える。ソヨンからの通知には「昨夜、屋上で握った手をまだ覚えてる」とある。ダインの笑顔がそのまま止まる。* 私が待ってる間に屋上へ行ったの？',
            '*ダインが向かいの椅子を引いた瞬間、ユナからの通知が画面を照らす。「昨日、別館に残ってくれてありがとう」。ダインの手が背もたれの上で止まる。* 私のメッセージを読んで、別館へ行ったの？'
        ],
        replacements: [['『そっちも着いた？』', '『公園のベンチにいる』'], ['『家着いた！』', '『体育館の裏口、開けてある』'], ['『家に着いた！』', '『体育館の裏口、開けてある』'], ['『ちゃんと帰れた？』', '『体育館の裏口、開けてある』']]
    },
    es: {
        sojeong: [
            ['{name}', '*Abro la aplicación de notas. Hay treinta y nueve borradores vacíos que empiezan por «Para Sojeong».*'],
            ['{name}', '*No escribo un cuadragésimo. Elijo el más corto y lo envío tal cual.*'],
            ['{name}', 'Vi tu pupitre y lo que habían escrito en él, pero no se lo dije a ningún profesor. Mirar hacia otro lado también fue decisión mía. Lo siento. No tienes que responder.'],
            ['{name}', '*El mensaje se envía. Cierro el chat sin esperar a que aparezca como leído.*'],
            ['{name}', '*También escribo a mi tutor actual: «Quiero hablar de algo que decidí ignorar en mi antigua escuela». Dejo los dos mensajes en pantalla hasta que comienza el anuncio del festival.*']
        ],
        seo: [
            ['Haeun', 'Presidenta, el ensayo de la radio coincide con la revisión de seguridad de los puestos. ¿Me encargo yo de la cabina?'],
            ['{name}', '*La mano de Seoyeon va hacia la carpeta y se detiene. Golpea dos veces con el bolígrafo la casilla «Radio».*'],
            ['Seoyeon', 'Encárgate de la cabina. Cuando termines, mándame solo el resultado.'],
            ['Haeun', 'De acuerdo. Pero no puede venir a comprobarlo a mitad.'],
            ['Seoyeon', '*Haeun sale corriendo. Seoyeon no mira atrás ni una vez.* Es verdad. Una cosa puede pasar por otras manos sin que el festival se derrumbe.']
        ],
        yuna: [
            ['{name}', '*Al salir al pasillo del anexo, vemos a dos estudiantes menores ante el tablón. Leen el relato anónimo de Yuna y preguntan si tiene continuación.*'],
            ['{name}', '*Yuna toca una esquina de la hoja. La mano que iba a arrancarla se detiene bajo el título.*'],
            ['Yuna', 'Todavía no hay segunda parte. Pero esto lo escribí yo.'],
            ['{name}', '*Yuna saca un bolígrafo del bolsillo y escribe bajo el título: «Choi Yuna». Las letras quedan un poco inclinadas.*'],
            ['Yuna', '*Se aparta del tablón y vuelve a entrar en el anexo.* El final te lo enseñaré primero a ti.']
        ],
        dain: [
            ['{name}', '*Llama el entrenador. Dain escucha hasta el final la pregunta de si puede jugar el partido de exhibición del día deportivo.*'],
            ['Dain', 'No voy a jugar. Hoy también se lo dije a mamá. Pero si la cabina de comentaristas está libre, me encargo yo.'],
            ['{name}', '*Poco después, Dain da unos golpecitos al micrófono de la cabina. Desde allí se ve toda la cancha.*'],
            ['Dain', '¡Ahí va el saque! ¡Esa cayó dentro de la línea! ¡Las protestas, después del partido!'],
            ['Dain', '*Apaga el micrófono y recupera el aliento mientras bajamos al gimnasio.* Aunque no juegue, todavía tengo cosas que decir. Más de las que creía.']
        ],
        traps: ['A todo el mundo le pasa alguna vez. No le des tanta importancia.', 'Sabía que te estabas forzando. Renuncia al torneo y descansa hoy.', 'Después de siete años, ya estará casi terminado. No creo que haga falta marcar nada.'],
        continuity: 'Fingí que la rehabilitación había terminado. Tampoco le dije a nadie que había vuelto a dolerme. Ni siquiera a mis padres. No quería oír: «¡Dain no es Dain si no juega!».',
        setup: [
            '*De camino al parque para encontrarme con Seoyeon a las diez, veo a Dain ante la salida de emergencia del gimnasio oscuro, tocándose la cinta de la rodilla.*',
            '*De camino al parque, Yuna escribe: «Las luces del anexo siguen encendidas». Después llega una foto de dos sillas vacías.*',
            '*A las diez, de camino al gimnasio donde espera Dain, veo una única ventana iluminada en el anexo de la biblioteca.*',
            '*De camino al gimnasio donde espera Dain, encuentro a Seoyeon junto a las escaleras de la azotea. Sonríe, pero sus dedos estrujan la manga del uniforme.*',
            '*De camino a la puerta trasera de la escuela, donde he quedado con Yuna, veo a Seoyeon sola bajo la farola de la entrada principal.*',
            '*De camino a la puerta trasera de la escuela, donde espera Yuna, veo a Dain ante la salida de emergencia del gimnasio oscuro, tocándose la cinta de la rodilla.*'
        ],
        loyal: ['Cumplir la promesa e ir con Seoyeon al parque', 'Responder a Seoyeon y seguir hacia el parque', 'Responder a Dain y seguir hacia el gimnasio', 'Responder a Dain y seguir hacia el gimnasio', 'Responder a Yuna y seguir hacia la puerta trasera', 'Responder a Yuna y seguir hacia la puerta trasera'],
        caught: [
            '*Por la mañana, en el aula. En cuanto dejo el móvil delante de Seoyeon, la pantalla se enciende. Una notificación de Dain dice: «No olvides lo que prometimos anoche en el gimnasio». La mirada de Seoyeon se queda clavada en la pantalla.* ¿No fuiste al parque y te marchaste al gimnasio?',
            '*El móvil vibra mientras Dain está junto a la mesa. Una notificación de Seoyeon dice: «Todavía recuerdo la mano que sostuve anoche en la azotea». La sonrisa de Dain se congela.* ¿Fuiste a la azotea mientras yo esperaba?',
            '*Cuando Dain aparta la silla de enfrente, una notificación de Yuna ilumina la pantalla. «Gracias por quedarte conmigo anoche en el anexo». La mano de Dain se detiene en el respaldo.* ¿Leíste mi mensaje y fuiste al anexo?'
        ],
        replacements: [['«¿Tú también llegaste?»', '«Estoy en el banco del parque»'], ['«¡Ya llegué!»', '«La puerta trasera del gimnasio está abierta»'], ['«¿Llegaste bien?»', '«La puerta trasera del gimnasio está abierta»']]
    },
    fr: {
        sojeong: [
            ['{name}', "*J'ouvre l'application de notes. Trente-neuf brouillons vides commencent par « Pour Sojeong ».*"],
            ['{name}', "*Je n'en écris pas un quarantième. Je choisis le plus court et l'envoie tel quel.*"],
            ['{name}', "J'ai vu ton bureau et ce qu'ils avaient écrit dessus, mais je n'ai rien dit à un professeur. Détourner les yeux, c'était aussi mon choix. Je suis désolé. Tu n'as pas besoin de répondre."],
            ['{name}', "*Le message part. Je ferme la conversation sans attendre qu'il soit lu.*"],
            ['{name}', "*J'écris aussi à mon professeur principal actuel : « Je voudrais parler de quelque chose que j'ai choisi d'ignorer dans mon ancien lycée. » Je laisse les deux messages à l'écran jusqu'à l'annonce du festival.*"]
        ],
        seo: [
            ['Haeun', "Présidente, la répétition de la radio tombe en même temps que le contrôle de sécurité des stands. Je m'occupe du studio ?"],
            ['{name}', "*La main de Seoyeon se dirige vers le bloc-notes, puis s'arrête. Elle tapote deux fois la case « Radio » avec son stylo.*"],
            ['Seoyeon', "Occupe-toi du studio. Envoie-moi seulement le résultat quand tu auras fini."],
            ['Haeun', "D'accord. Mais vous n'avez pas le droit de venir vérifier au milieu."],
            ['Seoyeon', "*Haeun part en courant. Seoyeon ne se retourne pas une seule fois.* C'est vrai. Une chose peut m'échapper sans que tout le festival s'effondre."]
        ],
        yuna: [
            ['{name}', "*Dans le couloir de l'annexe, deux élèves plus jeunes se tiennent devant le panneau. Ils lisent la nouvelle anonyme de Yuna et demandent s'il existe une suite.*"],
            ['{name}', "*Yuna touche le coin de la feuille. Sa main, prête à l'arracher, s'arrête sous le titre.*"],
            ['Yuna', "Il n'y a pas encore de suite. Mais c'est moi qui ai écrit ça."],
            ['{name}', "*Yuna sort un stylo de sa poche et écrit sous le titre : « Choi Yuna ». Les lettres penchent légèrement.*"],
            ['Yuna', "*Elle se détourne du panneau et rentre dans l'annexe.* La fin, c'est encore à toi que je la montrerai en premier."],
        ],
        dain: [
            ['{name}', "*Le coach appelle. Dain écoute jusqu'au bout quand il lui demande si elle peut jouer le match d'exhibition de la journée sportive.*"],
            ['Dain', "Je ne jouerai pas. Je l'ai dit à maman aujourd'hui aussi. Mais si la cabine des commentaires est libre, je la prends."],
            ['{name}', "*Un peu plus tard, Dain tapote le micro de la cabine. Tout le terrain s'étend sous nos yeux.*"],
            ['Dain', "Et voici le service ! Celle-là était bien sur la ligne ! Les réclamations, après le match !"],
            ['Dain', "*Elle coupe le micro et reprend son souffle en redescendant vers le gymnase.* Même sans jouer, j'ai encore des choses à dire. Plus que je ne pensais."]
        ],
        traps: ["Tout le monde a des jours comme ça. N'y pense pas trop.", "Je savais que tu forçais. Renonce au tournoi et repose-toi aujourd'hui.", "Après sept ans, ça doit être presque terminé. Je n'ai sans doute rien besoin de noter."],
        continuity: "J'ai fait comme si ma rééducation était finie. Je n'ai dit à personne que la douleur était revenue. Même pas à mes parents. Je ne voulais pas entendre : « Dain n'est plus Dain si elle ne joue pas ! »",
        setup: [
            "*En route pour retrouver Seoyeon au parc à 22 heures, je vois Dain devant la sortie de secours du gymnase plongé dans le noir, une main sur le bandage de son genou.*",
            "*En route pour le parc, Yuna m'écrit : « Les lumières de l'annexe sont encore allumées. » Une photo suit, avec deux chaises vides.*",
            "*À 22 heures, en route vers le gymnase où Dain m'attend, je remarque une seule fenêtre éclairée dans l'annexe de la bibliothèque.*",
            "*En route vers le gymnase où Dain m'attend, je trouve Seoyeon devant l'escalier du toit. Elle sourit, mais ses doigts froissent la manche de son uniforme.*",
            "*En route vers la grille arrière où Yuna m'a donné rendez-vous, je trouve Seoyeon seule sous le lampadaire de l'entrée principale.*",
            "*En route vers la grille arrière où Yuna m'attend, je vois Dain devant la sortie de secours du gymnase plongé dans le noir, une main sur le bandage de son genou.*"
        ],
        loyal: ['Tenir ma promesse et rejoindre Seoyeon au parc', 'Répondre à Seoyeon et continuer vers le parc', 'Répondre à Dain et continuer vers le gymnase', 'Répondre à Dain et continuer vers le gymnase', 'Répondre à Yuna et continuer vers la grille arrière', 'Répondre à Yuna et continuer vers la grille arrière'],
        caught: [
            "*Le matin, en classe. À peine ai-je posé mon téléphone devant Seoyeon que l'écran s'allume. Une notification de Dain affiche : « N'oublie pas notre promesse d'hier soir au gymnase. » Le regard de Seoyeon se fige sur l'écran.* Tu n'es pas venu au parc et tu es allé au gymnase ?",
            "*Le téléphone vibre alors que Dain se tient près de la table. Une notification de Seoyeon affiche : « Je me souviens encore de la main que j'ai tenue hier soir sur le toit. » Le sourire de Dain se fige.* Tu es allé sur le toit pendant que je t'attendais ?",
            "*Au moment où Dain tire la chaise d'en face, une notification de Yuna éclaire l'écran. « Merci d'être resté avec moi hier soir dans l'annexe. » La main de Dain s'immobilise sur le dossier.* Tu as lu mon message et tu es allé dans l'annexe ?"
        ],
        replacements: [['« Tu es bien rentré aussi ? »', '« Je suis sur le banc du parc. »'], ['« Bien rentrée ! »', '« La porte arrière du gymnase est ouverte. »'], ['« Je suis rentrée ! »', '« La porte arrière du gymnase est ouverte. »'], ['« Tu es bien rentré ? »', '« La porte arrière du gymnase est ouverte. »']]
    },
    de: {
        sojeong: [
            ['{name}', '*Ich öffne die Notizen-App. Neununddreißig leere Entwürfe beginnen mit „An Sojeong“.*'],
            ['{name}', '*Einen vierzigsten schreibe ich nicht. Ich wähle den kürzesten Entwurf und sende ihn unverändert ab.*'],
            ['{name}', 'Ich habe deinen Tisch und die Schmierereien gesehen, aber keiner Lehrkraft etwas gesagt. Wegzusehen war auch meine Entscheidung. Es tut mir leid. Du musst nicht antworten.'],
            ['{name}', '*Die Nachricht wird gesendet. Ich schließe den Chat, ohne auf eine Lesebestätigung zu warten.*'],
            ['{name}', '*Auch meiner jetzigen Klassenleitung schreibe ich: „Ich möchte über etwas sprechen, das ich an meiner alten Schule absichtlich ignoriert habe.“ Bis die Festivalansage beginnt, lasse ich beide Nachrichten auf dem Bildschirm stehen.*']
        ],
        seo: [
            ['Haeun', 'Präsidentin, die Probe der Rundfunk-AG überschneidet sich mit der Sicherheitsprüfung der Stände. Soll ich den Senderaum übernehmen?'],
            ['{name}', '*Seoyeons Hand bewegt sich zum Klemmbrett und hält inne. Mit dem Stift tippt sie zweimal auf das Feld „Rundfunk“.*'],
            ['Seoyeon', 'Übernimm den Senderaum. Schick mir danach nur das Ergebnis.'],
            ['Haeun', 'In Ordnung. Aber Sie dürfen nicht zwischendurch nachsehen kommen.'],
            ['Seoyeon', '*Haeun läuft davon. Seoyeon blickt kein einziges Mal zurück.* Stimmt. Eine Sache kann durch andere Hände gehen, ohne dass gleich das ganze Festival zusammenbricht.']
        ],
        yuna: [
            ['{name}', '*Als wir in den Flur des Nebengebäudes treten, stehen zwei jüngere Schüler vor der Pinnwand. Sie lesen Yunas anonyme Kurzgeschichte und fragen, ob es eine Fortsetzung gibt.*'],
            ['{name}', '*Yuna berührt eine Ecke des Blatts. Die Hand, die es abreißen wollte, hält unter dem Titel inne.*'],
            ['Yuna', 'Eine Fortsetzung gibt es noch nicht. Aber das hier habe ich geschrieben.'],
            ['{name}', '*Yuna holt einen Stift aus der Tasche und schreibt unter den Titel: „Choi Yuna“. Die Buchstaben stehen etwas schief.*'],
            ['Yuna', '*Sie wendet sich von der Pinnwand ab und geht zurück ins Nebengebäude.* Das Ende zeige ich trotzdem zuerst dir.']
        ],
        dain: [
            ['{name}', '*Der Trainer ruft an. Dain hört sich die Frage, ob sie beim Schaukampf des Sportfests spielen kann, bis zum Ende an.*'],
            ['Dain', 'Ich spiele nicht. Ich habe es heute auch Mama gesagt. Aber wenn die Kommentatorenkabine frei ist, übernehme ich.'],
            ['{name}', '*Kurz darauf tippt Dain gegen das Mikrofon in der Kabine. Von hier aus ist das ganze Feld zu sehen.*'],
            ['Dain', 'Und der Aufschlag kommt! Der war innerhalb der Linie! Beschwerden nehmen wir nach dem Spiel an!'],
            ['Dain', '*Sie schaltet das Mikrofon aus und holt Luft, während wir zur Turnhalle hinuntergehen.* Offenbar habe ich auch ohne zu spielen etwas zu sagen. Mehr als gedacht.']
        ],
        traps: ['Jeder hat mal so einen Tag. Nimm es nicht so schwer.', 'Ich wusste, dass du dich überforderst. Gib das Turnier auf und ruh dich heute aus.', 'Nach sieben Jahren ist es bestimmt fast fertig. Ich muss wohl nichts mehr markieren.'],
        continuity: 'Ich habe so getan, als wäre die Reha vorbei. Dass es wieder wehtat, habe ich niemandem gesagt. Nicht einmal meinen Eltern. Ich wollte nicht hören: „Dain ist nicht Dain, wenn sie nicht spielt!“',
        setup: [
            '*Auf dem Weg zum Park, wo ich Seoyeon um zehn treffen will, sehe ich Dain am Notausgang der dunklen Turnhalle. Sie berührt das Tape an ihrem Knie.*',
            '*Auf dem Weg zum Park schreibt Yuna: „Im Nebengebäude brennt noch Licht.“ Danach folgt ein Foto von zwei leeren Stühlen.*',
            '*Um zehn, auf dem Weg zur Turnhalle, wo Dain wartet, fällt mir ein einziges erleuchtetes Fenster im Bibliotheksanbau auf.*',
            '*Auf dem Weg zur Turnhalle, wo Dain wartet, steht Seoyeon an der Dachtreppe. Sie lächelt, doch ihre Finger zerknittern den Ärmel ihrer Uniform.*',
            '*Auf dem Weg zum Hintertor, wo ich mit Yuna verabredet bin, steht Seoyeon allein unter der Lampe am Haupteingang.*',
            '*Auf dem Weg zum Hintertor, wo Yuna wartet, sehe ich Dain am Notausgang der dunklen Turnhalle. Sie berührt das Tape an ihrem Knie.*'
        ],
        loyal: ['Das Versprechen halten und zu Seoyeon in den Park gehen', 'Seoyeon antworten und weiter zum Park gehen', 'Dain antworten und weiter zur Turnhalle gehen', 'Dain antworten und weiter zur Turnhalle gehen', 'Yuna antworten und weiter zum Hintertor gehen', 'Yuna antworten und weiter zum Hintertor gehen'],
        caught: [
            '*Am Morgen im Klassenzimmer. Sobald ich mein Handy vor Seoyeon ablege, leuchtet der Bildschirm auf. Eine Nachricht von Dain lautet: „Vergiss nicht, was wir gestern Abend in der Turnhalle versprochen haben.“ Seoyeons Blick bleibt am Bildschirm hängen.* Du bist nicht in den Park gekommen, sondern in die Turnhalle gegangen?',
            '*Das Handy vibriert, während Dain neben dem Tisch steht. Eine Nachricht von Seoyeon lautet: „Ich erinnere mich noch an die Hand, die ich gestern Abend auf dem Dach gehalten habe.“ Dains Lächeln erstarrt.* Du warst auf dem Dach, während ich gewartet habe?',
            '*Als Dain den Stuhl gegenüber heranzieht, erhellt eine Nachricht von Yuna den Bildschirm. „Danke, dass du gestern Abend im Nebengebäude bei mir geblieben bist.“ Dains Hand hält an der Rückenlehne inne.* Du hast meine Nachricht gelesen und bist ins Nebengebäude gegangen?'
        ],
        replacements: [['„Bist du auch gut angekommen?“', '„Ich sitze auf der Bank im Park.“'], ['„Bin zu Hause!“', '„Die Hintertür der Turnhalle ist offen.“'], ['„Gut nach Hause gekommen?“', '„Die Hintertür der Turnhalle ist offen.“']]
    },
    pt: {
        sojeong: [
            ['{name}', "*Abro o aplicativo de notas. Há trinta e nove rascunhos vazios começando com 'Para Sojeong'.*"],
            ['{name}', '*Não escrevo o quadragésimo. Escolho o mais curto e envio sem mudar nada.*'],
            ['{name}', 'Eu vi sua carteira e o que escreveram nela, mas não contei a nenhum professor. Fingir que não vi também foi uma escolha minha. Desculpa. Você não precisa responder.'],
            ['{name}', '*A mensagem é enviada. Fecho a conversa sem esperar a confirmação de leitura.*'],
            ['{name}', "*Também escrevo ao meu professor atual: 'Quero conversar sobre algo que escolhi ignorar na minha antiga escola.' Deixo as duas mensagens na tela até o anúncio do festival começar.*"]
        ],
        seo: [
            ['Haeun', 'Presidente, o ensaio do clube de rádio bate com a inspeção de segurança das barracas. Quer que eu cuide da sala de transmissão?'],
            ['{name}', "*A mão de Seoyeon vai até a prancheta e para. Ela bate duas vezes com a caneta no campo 'Rádio'.*"],
            ['Seoyeon', 'Cuide da sala de transmissão. Quando terminar, me mande só o resultado.'],
            ['Haeun', 'Certo. Mas a senhora não pode aparecer no meio para conferir.'],
            ['Seoyeon', '*Haeun sai correndo. Seoyeon não olha para trás nenhuma vez.* É. Uma coisa pode passar pelas mãos de outra pessoa sem derrubar o festival inteiro.']
        ],
        yuna: [
            ['{name}', '*Ao sairmos para o corredor do anexo, dois alunos mais novos estão diante do mural. Eles leem o conto anônimo de Yuna e perguntam se existe continuação.*'],
            ['{name}', '*Yuna toca a ponta da folha. A mão que ia arrancá-la para embaixo do título.*'],
            ['Yuna', 'Ainda não tem continuação. Mas fui eu que escrevi isto.'],
            ['{name}', "*Yuna tira uma caneta do bolso e escreve sob o título: 'Choi Yuna'. As letras ficam um pouco inclinadas.*"],
            ['Yuna', '*Ela se afasta do mural e volta para dentro do anexo.* O final eu ainda vou mostrar primeiro para você.']
        ],
        dain: [
            ['{name}', '*O técnico liga. Dain ouve até o fim quando ele pergunta se ela pode jogar a partida de exibição do festival esportivo.*'],
            ['Dain', 'Eu não vou jogar. Também contei para a minha mãe hoje. Mas, se a cabine de comentários estiver livre, eu assumo.'],
            ['{name}', '*Pouco depois, Dain dá dois toques no microfone da cabine. A quadra inteira aparece lá embaixo.*'],
            ['Dain', 'Lá vem o saque! Essa caiu dentro da linha! Reclamações só depois da partida!'],
            ['Dain', '*Ela desliga o microfone e recupera o fôlego enquanto descemos para o ginásio.* Mesmo sem jogar, ainda tenho coisa para dizer. Mais do que eu pensava.']
        ],
        traps: ['Todo mundo tem dias assim. Não leva tão a sério.', 'Eu sabia que você estava se forçando. Desiste do torneio e descansa hoje.', 'Depois de sete anos, já deve estar quase pronto. Acho que nem preciso marcar nada.'],
        continuity: "Fingi que a reabilitação tinha acabado. Também não contei a ninguém quando voltou a doer. Nem aos meus pais. Eu não queria ouvir: 'Dain não é Dain se não estiver jogando!'",
        setup: [
            '*A caminho do parque para encontrar Seoyeon às dez, vejo Dain diante da saída de emergência do ginásio escuro, mexendo na fita do joelho.*',
            "*A caminho do parque, Yuna manda uma mensagem: 'As luzes do anexo ainda estão acesas.' Depois chega uma foto de duas cadeiras vazias.*",
            '*Às dez, a caminho do ginásio onde Dain espera, noto uma única janela acesa no anexo da biblioteca.*',
            '*A caminho do ginásio onde Dain espera, encontro Seoyeon junto à escada do terraço. Ela sorri, mas os dedos amassam a manga do uniforme.*',
            '*A caminho do portão dos fundos onde marquei com Yuna, encontro Seoyeon sozinha sob a luz da entrada principal.*',
            '*A caminho do portão dos fundos onde Yuna espera, vejo Dain diante da saída de emergência do ginásio escuro, mexendo na fita do joelho.*'
        ],
        loyal: ['Cumprir a promessa e encontrar Seoyeon no parque', 'Responder a Seoyeon e seguir para o parque', 'Responder a Dain e seguir para o ginásio', 'Responder a Dain e seguir para o ginásio', 'Responder a Yuna e seguir para o portão dos fundos', 'Responder a Yuna e seguir para o portão dos fundos'],
        caught: [
            '*De manhã, na sala de aula. Assim que coloco o celular diante de Seoyeon, a tela se acende. Uma notificação de Dain diz: “Não esquece o que prometemos ontem à noite no ginásio.” O olhar de Seoyeon para na tela.* Você não foi ao parque e acabou indo ao ginásio?',
            '*O celular vibra enquanto Dain está ao lado da mesa. Uma notificação de Seoyeon diz: “Ainda lembro da mão que segurei ontem à noite no terraço.” O sorriso de Dain congela.* Você foi ao terraço enquanto eu esperava?',
            '*Quando Dain puxa a cadeira da frente, uma notificação de Yuna ilumina a tela. “Obrigada por ter ficado comigo ontem à noite no anexo.” A mão de Dain para no encosto.* Você leu minha mensagem e foi para o anexo?'
        ],
        replacements: [["'Você também chegou?'", "'Estou no banco do parque.'"], ["'Cheguei!'", "'A porta dos fundos do ginásio está aberta.'"], ["'Cheguei em casa!'", "'A porta dos fundos do ginásio está aberta.'"], ["'Chegou bem?'", "'A porta dos fundos do ginásio está aberta.'"]]
    }
};

const codaCopy = {
    ko: {
        seo: [['{name}', "*사진 아래에 새 학생회 운영 파일이 붙는다. 마지막 페이지 총괄란에는 하은의 이름이 있다. 서연은 수정 표시를 하나도 남기지 않았다.*"], ['서연', '화분은 네가 먼저 골라. 아니, 사진으로 고르지 말고 토요일에 같이 가자.'], ['{name}', "*약속 시간은 비어 있다. 내가 오후 세 시를 적자 서연은 '확인' 대신 '좋아'라고 답한다.*"]],
        yuna: [['{name}', "*서점 사인회 공지가 올라온다. 익명 대신 '최유나'가 표지보다 크게 적혀 있다.*"], ['유나', '끝나면 와. 이번엔 숨지 않을 거야.'], ['{name}', '*뒤이어 사인 연습 사진이 온다. 이름이 한 페이지 가득하다. 맨 아래에만 내 이름이 작게 적혀 있다.*']],
        dain: [['다인', '엄마가 재방송 세 번 봤대. 경기보다 내 해설이 더 시끄럽다고.'], ['{name}', "*다음 경기 대본 첫 줄에는 '아프면 멈춘다'가 굵게 적혀 있다. 지운 자국은 없다.*"], ['다인', '끝나고 같이 걸어가자. 오늘 속도는 내가 정할게.']]
    },
    en: {
        seo: [['{name}', "*A new student-council operations file is attached below the photo. Haeun's name fills the lead coordinator field on the last page, with no corrections from Seoyeon.*"], ['Seoyeon', "Pick the plant first. No—don't choose from a photo. Let's go together on Saturday."], ['{name}', "*The appointment time is blank. When I enter three in the afternoon, Seoyeon replies 'Sounds good' instead of 'Confirmed.'*"]],
        yuna: [['{name}', "*A bookstore posts an announcement for a signing. 'Choi Yuna' appears larger than the book cover, with no anonymous byline in sight.*"], ['Yuna', "Come when it's over. I won't hide this time."], ['{name}', '*A photo of signature practice follows. Her name fills the page; only at the bottom is mine written in small letters.*']],
        dain: [['Dain', 'Mom watched the replay three times. She says my commentary was louder than the match.'], ['{name}', "*The first line of her next match script reads 'Stop when it hurts' in bold. There are no eraser marks.*"], ['Dain', "Let's walk home after. I set the pace today."]]
    },
    ja: {
        seo: [['{name}', '*写真の下に、新しい生徒会運営ファイルが添付されている。最終ページの統括欄にはハウンの名前があり、ソヨンの修正は一つもない。*'], ['ソヨン', '植木鉢は君が先に選んで。いや、写真で選ばないで、土曜日に一緒に行こう。'], ['{name}', '*待ち合わせ時間は空欄だ。僕が午後三時と入れると、ソヨンは「確認」ではなく「いいね」と返す。*']],
        yuna: [['{name}', '*書店のサイン会告知が公開される。匿名ではなく「チェ・ユナ」の名が、本の表紙より大きく載っている。*'], ['ユナ', '終わったら来て。今度は隠れないから。'], ['{name}', '*続けて、サインを練習した写真が届く。名前が一ページを埋め、いちばん下にだけ僕の名前が小さく書かれている。*']],
        dain: [['ダイン', 'お母さん、再放送を三回も見たって。試合より私の実況のほうがうるさいってさ。'], ['{name}', '*次の試合の台本、その一行目には「痛んだら止める」と太字で書かれている。消した跡はない。*'], ['ダイン', '終わったら一緒に歩いて帰ろう。今日は私がペースを決める。']]
    },
    es: {
        seo: [['{name}', '*Debajo de la foto aparece un nuevo archivo de organización del consejo. En la última página, Haeun figura como coordinadora general y no hay una sola corrección de Seoyeon.*'], ['Seoyeon', 'Elige tú la maceta primero. No, no la elijas por foto. Vamos juntos el sábado.'], ['{name}', '*La hora de la cita está en blanco. Cuando escribo las tres de la tarde, Seoyeon responde «Me gusta» en vez de «Confirmado».*']],
        yuna: [['{name}', '*Una librería publica el anuncio de una firma. «Choi Yuna» aparece más grande que la portada y no hay ningún seudónimo.*'], ['Yuna', 'Ven cuando termine. Esta vez no voy a esconderme.'], ['{name}', '*Después llega una foto de sus firmas de práctica. Su nombre llena la página; solo al final aparece el mío, en pequeño.*']],
        dain: [['Dain', 'Mamá vio la repetición tres veces. Dice que mis comentarios sonaban más fuerte que el partido.'], ['{name}', '*La primera línea del guion para el siguiente partido dice «Parar si duele» en negrita. No hay marcas de haberlo borrado.*'], ['Dain', 'Volvamos andando juntos cuando termine. Hoy marco yo el ritmo.']]
    },
    fr: {
        seo: [['{name}', "*Un nouveau fichier d'organisation du conseil est joint sous la photo. Sur la dernière page, Haeun est indiquée comme coordinatrice générale, sans la moindre correction de Seoyeon.*"], ['Seoyeon', "Choisis d'abord le pot. Non, ne le choisis pas sur une photo. Allons-y ensemble samedi."], ['{name}', "*L'heure du rendez-vous est vide. Quand j'inscris quinze heures, Seoyeon répond « Ça me va » au lieu de « Confirmé ».*"]],
        yuna: [['{name}', "*Une librairie publie l'annonce d'une séance de dédicaces. « Choi Yuna » s'affiche plus grand que la couverture, sans aucune mention anonyme.*"], ['Yuna', "Viens quand ce sera fini. Cette fois, je ne me cacherai pas."], ['{name}', "*Une photo de ses essais de signature suit. Son nom remplit la page ; tout en bas seulement, le mien apparaît en petit.*"]],
        dain: [['Dain', "Maman a regardé la rediffusion trois fois. Elle dit que mes commentaires étaient plus bruyants que le match."], ['{name}', "*La première ligne du script du prochain match porte en gras : « Arrêter si ça fait mal. » Il n'y a aucune trace de gomme.*"], ['Dain', "On rentre à pied ensemble après. Aujourd'hui, c'est moi qui choisis le rythme."]]
    },
    de: {
        seo: [['{name}', '*Unter dem Foto hängt eine neue Organisationsdatei des Schülerrats. Auf der letzten Seite steht Haeun als Gesamtleitung; von Seoyeon stammt keine einzige Korrektur.*'], ['Seoyeon', 'Such du zuerst den Blumentopf aus. Nein, nicht auf einem Foto. Lass uns am Samstag zusammen hingehen.'], ['{name}', '*Die Uhrzeit ist noch frei. Als ich fünfzehn Uhr eintrage, antwortet Seoyeon mit „Klingt gut“ statt mit „Bestätigt“.*']],
        yuna: [['{name}', '*Eine Buchhandlung veröffentlicht die Ankündigung einer Signierstunde. „Choi Yuna“ steht größer als das Buchcover darauf, ohne anonymen Vermerk.*'], ['Yuna', 'Komm, wenn es vorbei ist. Diesmal verstecke ich mich nicht.'], ['{name}', '*Danach folgt ein Foto ihrer geübten Unterschriften. Ihr Name füllt die Seite; nur ganz unten steht meiner in kleinen Buchstaben.*']],
        dain: [['Dain', 'Mama hat die Wiederholung dreimal gesehen. Sie sagt, mein Kommentar war lauter als das Spiel.'], ['{name}', '*Die erste Zeile ihres Skripts für das nächste Spiel lautet fett: „Aufhören, wenn es weh tut.“ Es gibt keine Radierstellen.*'], ['Dain', 'Lass uns danach zusammen nach Hause laufen. Heute bestimme ich das Tempo.']]
    },
    pt: {
        seo: [['{name}', '*Um novo arquivo de organização do conselho aparece anexado sob a foto. Na última página, Haeun consta como coordenadora-geral, sem uma única correção de Seoyeon.*'], ['Seoyeon', 'Escolhe o vaso primeiro. Não, não escolhe por foto. Vamos juntos no sábado.'], ['{name}', '*O horário está em branco. Quando escrevo três da tarde, Seoyeon responde “Gostei” em vez de “Confirmado”.*']],
        yuna: [['{name}', '*Uma livraria publica o anúncio de uma sessão de autógrafos. “Choi Yuna” aparece maior que a capa, sem nenhum crédito anônimo.*'], ['Yuna', 'Vem quando acabar. Desta vez eu não vou me esconder.'], ['{name}', '*Depois chega uma foto dos autógrafos que ela praticou. O nome ocupa a página inteira; só no fim o meu aparece em letras pequenas.*']],
        dain: [['Dain', 'Minha mãe viu a reprise três vezes. Disse que meus comentários estavam mais altos que o jogo.'], ['{name}', '*A primeira linha do roteiro da próxima partida diz “Pare se doer” em negrito. Não há marcas de borracha.*'], ['Dain', 'Vamos voltar andando juntos depois. Hoje eu escolho o ritmo.']]
    }
};

const returnHomeCopy = {
    ko: { name: '{name}', text: '*약속을 마치고 집으로 돌아온다. 현관문이 닫히자 방 안에는 휴대폰 불빛만 남는다.*' },
    en: { name: '{name}', text: '*I return home after the meeting. When the front door closes, the phone is the only light left in my room.*' },
    ja: { name: '{name}', text: '*約束を終えて家に帰る。玄関の扉が閉まると、部屋にはスマホの明かりだけが残る。*' },
    es: { name: '{name}', text: '*Vuelvo a casa después de la cita. Al cerrarse la puerta, la luz del móvil es la única que queda en mi habitación.*' },
    fr: { name: '{name}', text: "*Je rentre chez moi après le rendez-vous. Une fois la porte fermée, le téléphone reste la seule lumière dans ma chambre.*" },
    de: { name: '{name}', text: '*Nach dem Treffen kehre ich nach Hause zurück. Als die Haustür zufällt, bleibt das Handy das einzige Licht in meinem Zimmer.*' },
    pt: { name: '{name}', text: '*Volto para casa depois do encontro. Quando a porta se fecha, a luz do celular é a única que resta no quarto.*' }
};

function read(locale, file) {
    const target = path.join(root, 'assets', 'js', 'i18n', locale, `${file}.json`);
    return { target, data: JSON.parse(fs.readFileSync(target, 'utf8')) };
}

function write(target, data) {
    fs.writeFileSync(target, `${JSON.stringify(data, null, 4)}\n`, 'utf8');
}

function scenes(prefix, entries) {
    return Object.fromEntries(entries.map(([name, text], index) => [`${prefix}_${index + 1}`, { name, text }]));
}

for (const locale of locales) {
    const pack = copy[locale];
    const morning = read(locale, 'day5_1_morning');
    const lunch = read(locale, 'day5_2_lunch');
    const day3 = read(locale, 'day3_3_afterschool');
    const day4 = read(locale, 'day4_4_night');
    const night5 = read(locale, 'day5_4_night');

    Object.assign(morning.data, scenes('morning5_sojeong', pack.sojeong));
    Object.assign(lunch.data, scenes('tour_seo_event', pack.seo));
    Object.assign(lunch.data, scenes('tour_yuna_event', pack.yuna));
    Object.assign(lunch.data, scenes('tour_dain_event', pack.dain));
    Object.assign(night5.data, scenes('perfect_seo_coda', codaCopy[locale].seo));
    Object.assign(night5.data, scenes('perfect_yuna_coda', codaCopy[locale].yuna));
    Object.assign(night5.data, scenes('perfect_dain_coda', codaCopy[locale].dain));
    day4.data.day4_student_return_home = returnHomeCopy[locale];

    day3.data.after3_seo_choice.choices[0] = pack.traps[0];
    day3.data.after3_dain_choice.choices[0] = pack.traps[1];
    morning.data.hidden_homeroom_d5_choice.choices[0] = pack.traps[2];
    day4.data.wall_dain_19.text = pack.continuity;
    night5.data.confess_fail_5.text = '─── CONFESSION REJECTED END ───';

    const setupKeys = ['wall_seo_glimpse_1', 'wall_seo_yuna_tempt_1', 'wall_dain_glimpse_1', 'wall_dain_seo_tempt_1', 'wall_yuna_glimpse_1', 'wall_yuna_dain_tempt_1'];
    const choiceKeys = ['wall_seo_glimpse_2', 'wall_seo_yuna_tempt_2', 'wall_dain_glimpse_4_c', 'wall_dain_seo_tempt_2', 'wall_yuna_glimpse_3_b', 'wall_yuna_dain_tempt_2'];
    setupKeys.forEach((key, index) => { day4.data[key].text = pack.setup[index]; });
    choiceKeys.forEach((key, index) => { day4.data[key].choices[0] = pack.loyal[index]; });

    morning.data.morning5_caught_seoyeon_by_dain.text = pack.caught[0];
    morning.data.morning5_caught_dain_by_seoyeon.text = pack.caught[1];
    morning.data.morning5_caught_dain_by_yuna.text = pack.caught[2];

    const replacementKeys = ['wall_seo_yuna_tempt_accept', 'wall_dain_glimpse_4_b', 'wall_dain_glimpse_4', 'wall_dain_seo_tempt_accept'];
    for (const key of replacementKeys) {
        for (const [from, to] of pack.replacements) {
            if (day4.data[key].text.includes(from)) day4.data[key].text = day4.data[key].text.replace(from, to);
        }
    }

    [morning, lunch, day3, day4, night5].forEach(({ target, data }) => write(target, data));
}

console.log(`Patched commercial scenario copy in ${locales.length} locales.`);
