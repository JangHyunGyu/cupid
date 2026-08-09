/**
 * ============================================================================
 * GalleryData - 갤러리 데이터 클래스
 * ============================================================================
 * 
 * 이 클래스는 Cupid 게임의 갤러리에서 사용하는 모든 정적 데이터를 관리합니다.
 * 
 * 포함 데이터:
 * - 캐릭터 정보 (이름, 설명, 프로필, 표정 목록)
 * - 표정 이름 매핑 (코드 → 표시명)
 * - CG 목록 (이벤트 CG 정보)
 * - BGM 목록 (배경음악 정보)
 * 
 * 사용 예시:
 *   GalleryData.getCharacter('ko', 'seyoun');  // 서연 캐릭터 데이터
 *   GalleryData.getExpressionName('ko', 'shy'); // '수줍음'
 */

class GalleryData {
    // =========================================================================
    // 버전 정보
    // =========================================================================

    /**
     * 갤러리 데이터 버전
     * 데이터 구조가 변경되면 버전을 올려서 자동 리셋 유도
     */
    static VERSION = 2;

    // =========================================================================
    // 캐릭터 데이터 (Character Data)
    // =========================================================================
    // 
    // 각 캐릭터의 상세 정보를 담고 있는 객체
    // 'ko'(한국어)와 'en'(영어) 두 가지 언어를 지원
    // 
    // 구조 설명:
    // - id: 캐릭터 고유 식별자 (이미지 파일명에 사용)
    // - name: 캐릭터 이름
    // - title: 캐릭터의 별명/칭호
    // - shortDescription: 짧은 소개 (호감도 80 미만에서 표시)
    // - description: 전체 소개 (호감도 80 이상에서 표시)
    // - age, birthday, height, weight, bust: 프로필 정보
    // - hobby, personality: 취미와 성격
    // - expressions: 사용 가능한 표정 목록 (이미지 파일명에 사용)
    //   예: 'normal' → 'seyoun_normal.png'

    static characters = {
        // ===== 한국어 데이터 =====
        ko: {
            // 서연 - 빈틈을 기록하는 학생회장
            seyoun: {
                id: 'seyoun',
                name: '서연',
                title: '빈틈을 기록하는 학생회장',
                shortDescription: '일정표와 열쇠 사용대장을 꼼꼼히 챙기는 학생회장.',
                description: '행사 순서와 사용대장을 빈칸 없이 정리하는 학생회장. 부탁할 때도 이유와 시간을 먼저 말한다. 혼자 감당하던 일을 나누기 시작하면서, 정식으로 빌린 옥상 열쇠와 다음 약속을 함께 기록한다.',
                age: '18세',
                birthday: '3월 14일',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: '음악 감상, 독서',
                personality: '책임감, 신중함',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },

            // 유나 - 쪽지로 문장을 고르는 독서가
            yuna: {
                id: 'yuna',
                name: '유나',
                title: '쪽지로 문장을 고르는 독서가',
                shortDescription: '말보다 책갈피와 쪽지에 먼저 문장을 남기는 독서가.',
                description: '도서관 별관의 조용한 자리를 아끼는 독서가. 대답을 서두르지 않고, 말하기 어려운 문장은 연보라색 잉크로 적는다. 혼자 쓰던 소설을 건네며 상대가 읽고 답할 시간을 남겨 둔다.',
                age: '18세',
                birthday: '7월 22일',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: '음악 감상, 소설 쓰기',
                personality: '관찰형, 신중함',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },

            // 다인 - 코트 밖의 진로를 찾는 배구부원
            dain: {
                id: 'dain',
                name: '다인',
                title: '코트 밖의 진로를 찾는 배구부원',
                shortDescription: '승부는 바로 걸고, 아픈 무릎은 뒤늦게 인정한 배구부원.',
                description: '가위바위보도 배구처럼 전력으로 하는 배구부원. 괜찮다는 말로 통증을 넘기려 했지만 코치와 부모에게 먼저 알리고 재활을 예약했다. 선수뿐 아니라 스포츠 중계라는 다음 선택지도 직접 시험해 보려 한다.',
                age: '18세',
                birthday: '12월 25일',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: '배구, 스포츠 중계',
                personality: '직진, 승부욕',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },

            // 담임선생님 - 원고를 다시 쓰는 교사
            teacher: {
                id: 'teacher',
                name: '담임선생님',
                title: '원고를 다시 쓰는 담임',
                shortDescription: '학생에게 답 대신 읽은 흔적을 부탁하는 국어 교사.',
                description: '수업과 상담의 경계를 분명히 지키는 국어 교사. 7년간 덮어 둔 원고를 문예부 공개 합평에 내고, 익명 의견을 받아 마지막 장을 다시 쓴다. 교사와 학생으로서의 관계는 졸업식의 공식적인 작별로 마무리한다.',
                age: '28세',
                birthday: '5월 5일',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: '독서, 영화 감상',
                personality: '원칙적, 성찰적',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },

            // 보건선생님 - 도움을 연결하는 보건교사
            nurse: {
                id: 'nurse',
                name: '보건선생님',
                title: '도움을 연결하는 보건교사',
                shortDescription: '증상과 기록을 확인하고 필요한 어른에게 연결하는 보건교사.',
                description: '농담보다 먼저 상태와 예약 시간을 확인하는 보건교사. 보건실, 위클래스, 보호자와 담당 교사를 잇는 방법을 구체적으로 알려 준다. 상담이 끝나면 기록을 정식으로 종결하고 졸업생을 자기 생활로 돌려보낸다.',
                age: '26세',
                birthday: '9월 12일',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: '원예, 명상',
                personality: '실무적, 침착함',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        },

        // ===== 영어 데이터 (English Data) =====
        // 한국어 데이터와 동일한 구조, 영어로 번역된 텍스트
        en: {
            // Seoyeon - 빈틈을 기록하는 학생회장
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'The Student Council President Who Leaves No Blanks',
                shortDescription: 'A student council president who carefully tracks schedules and the key-use log.',
                description: 'A student council president who keeps event plans and usage logs complete. Even when asking a favor, she gives the reason and time first. As she learns to share work she once handled alone, she records both the officially borrowed rooftop key and their next plans together.',
                age: '18 years old',
                birthday: 'March 14',
                height: '165 cm',
                weight: '52 kg',
                bust: '36-23-35 70E',
                hobby: 'Music, Reading',
                personality: 'Responsible, Cautious',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },

            // Yuna - 쪽지로 문장을 고르는 독서가
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'The Reader Who Chooses Her Words in Notes',
                shortDescription: 'A reader who writes her thoughts on bookmarks and notes before saying them aloud.',
                description: 'A reader who treasures a quiet seat in the library annex. She never rushes an answer and writes hard-to-say sentences in pale purple ink. When she hands over the novel she had been writing alone, she gives the other person time to read and respond.',
                age: '18 years old',
                birthday: 'July 22',
                height: '162 cm',
                weight: '49 kg',
                bust: '34-21-34 65E',
                hobby: 'Music, Writing Fiction',
                personality: 'Observant, Cautious',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },

            // Dain - 코트 밖의 진로를 찾는 배구부원
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'The Volleyball Player Finding a Future Beyond the Court',
                shortDescription: 'A volleyball player quick to take any challenge—and slower to admit her injured knee.',
                description: 'A volleyball player who puts as much into rock-paper-scissors as she does into volleyball. She tried to wave away the pain by saying she was fine, but finally told her coach and parents and booked rehabilitation. Now she wants to test another path for herself: sports broadcasting, not only competing.',
                age: '18 years old',
                birthday: 'December 25',
                height: '158 cm',
                weight: '54 kg',
                bust: '37-22-35 65H',
                hobby: 'Volleyball, Sports Broadcasting',
                personality: 'Straightforward, Competitive',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },

            // Homeroom Teacher - 원고를 다시 쓰는 교사
            teacher: {
                id: 'teacher',
                name: 'Homeroom Teacher',
                title: 'The Homeroom Teacher Rewriting Her Manuscript',
                shortDescription: 'A literature teacher who asks students to show what they have read rather than give her the “right” answer.',
                description: 'A literature teacher who keeps clear boundaries between teaching, counseling, and her own writing. She submits a manuscript left untouched for seven years to the literature club\'s open critique, then rewrites the final chapter in response to anonymous feedback. The teacher-student relationship ends with a formal farewell at graduation.',
                age: '28 years old',
                birthday: 'May 5',
                height: '170 cm',
                weight: '58 kg',
                bust: '38-24-38 70G',
                hobby: 'Reading, Watching Films',
                personality: 'Principled, Introspective',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },

            // School Nurse - 도움을 연결하는 보건교사
            nurse: {
                id: 'nurse',
                name: 'School Nurse',
                title: 'The School Nurse Who Connects Students to Help',
                shortDescription: 'A school nurse who checks symptoms and records, then connects students with the adults they need.',
                description: 'A school nurse who checks a student\'s condition and appointment time before making a joke. She explains exactly how students can seek help from the school infirmary, counseling office, guardians, and teachers. Once counseling ends, she formally closes the record and lets each graduate move on with their own life.',
                age: '26 years old',
                birthday: 'September 12',
                height: '168 cm',
                weight: '60 kg',
                bust: '38-24-38 70H',
                hobby: 'Gardening, Meditation',
                personality: 'Practical, Calm',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        },

        // ===== 스페인어 데이터 (Spanish Data) =====
        es: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'La presidenta que no deja casillas en blanco',
                shortDescription: 'La presidenta del consejo estudiantil que lleva al detalle el horario y el registro de llaves.',
                description: 'La presidenta del consejo estudiantil que mantiene completos el programa de cada acto y los registros de uso. Incluso al pedir un favor, explica primero el motivo y la hora. Ahora que empieza a repartir el trabajo que antes asumía sola, anota tanto el préstamo oficial de la llave de la azotea como sus próximos planes juntos.',
                age: '18 años',
                birthday: '14 de marzo',
                height: '165 cm',
                weight: '52 kg',
                bust: '36-23-35 70E',
                hobby: 'Música, Lectura',
                personality: 'Responsable, Prudente',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'La lectora que elige sus palabras por escrito',
                shortDescription: 'Una lectora que escribe sus frases en separadores de libros y notas antes de decirlas en voz alta.',
                description: 'Una lectora que aprecia un asiento tranquilo en el anexo de la biblioteca. No se apresura a responder y escribe con tinta violeta clara las frases difíciles de pronunciar. Al entregar la novela que escribía a solas, deja a la otra persona tiempo para leerla y contestar.',
                age: '18 años',
                birthday: '22 de julio',
                height: '162 cm',
                weight: '49 kg',
                bust: '34-21-34 65E',
                hobby: 'Música, Escribir novelas',
                personality: 'Observadora, Prudente',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'La jugadora de voleibol que busca su futuro fuera de la cancha',
                shortDescription: 'Una jugadora de voleibol que acepta cualquier reto al instante, pero tardó en admitir que le dolía la rodilla.',
                description: 'Una jugadora de voleibol que se toma piedra, papel o tijera con la misma intensidad que un partido. Intentó ocultar el dolor diciendo que estaba bien, pero terminó contándoselo a su entrenador y a sus padres y programó su rehabilitación. Ahora quiere explorar por sí misma otro camino además de competir: la transmisión deportiva.',
                age: '18 años',
                birthday: '25 de diciembre',
                height: '158 cm',
                weight: '54 kg',
                bust: '37-22-35 65H',
                hobby: 'Voleibol, Transmisión deportiva',
                personality: 'Directa, Competitiva',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Profesora',
                title: 'La profesora que reescribe su manuscrito',
                shortDescription: 'Una profesora de literatura que no pide respuestas, sino señales de que sus alumnos han leído.',
                description: 'Una profesora de literatura que mantiene claros los límites entre las clases, la orientación y su propia escritura. Presenta en la crítica pública del club de literatura un manuscrito que llevaba siete años guardado y reescribe el último capítulo a partir de opiniones anónimas. La relación entre profesora y alumno termina con una despedida formal en la graduación.',
                age: '28 años',
                birthday: '5 de mayo',
                height: '170 cm',
                weight: '58 kg',
                bust: '38-24-38 70G',
                hobby: 'Lectura, Cine',
                personality: 'Íntegra, Reflexiva',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Enfermera',
                title: 'La enfermera que conecta a los alumnos con la ayuda que necesitan',
                shortDescription: 'Una enfermera escolar que comprueba síntomas y registros y deriva a cada alumno al adulto adecuado.',
                description: 'Una enfermera escolar que comprueba el estado y la hora de la cita antes de bromear. Explica de forma concreta cómo acudir a la enfermería, al servicio de orientación, a los tutores legales y al profesorado. Al terminar la orientación, cierra oficialmente el expediente y devuelve a cada graduado a su propia vida.',
                age: '26 años',
                birthday: '12 de septiembre',
                height: '168 cm',
                weight: '60 kg',
                bust: '38-24-38 70H',
                hobby: 'Jardinería, Meditación',
                personality: 'Práctica, Serena',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        },

        // ===== 일본어 데이터 (Japanese Data) =====
        ja: {
            seyoun: {
                id: 'seyoun',
                name: 'ソヨン',
                title: '空欄を残さない生徒会長',
                shortDescription: 'スケジュールと鍵の使用記録を欠かさず確認する生徒会長。',
                description: '行事の進行表も使用記録も、空欄を残さずきっちりまとめる生徒会長。何かを頼む時も、まず理由と時間を伝える。一人で抱えてきた仕事を分担するようになり、正式に借りた屋上の鍵の使用記録をつけながら、次の約束も一緒に残していく。',
                age: '18歳',
                birthday: '3月14日',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: '音楽鑑賞、読書',
                personality: '責任感が強い、慎重',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'ユナ',
                title: 'しおりに言葉を綴る読書家',
                shortDescription: '口にする前に、しおりやメモに思いを綴る読書家。',
                description: '図書館別館の静かな席を気に入っている読書家。答えを急がず、口にしにくい言葉は淡い紫のインクで書き留める。一人で書いていた小説を手渡し、相手が読んで返事をするまでの時間も大切にする。',
                age: '18歳',
                birthday: '7月22日',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: '音楽鑑賞、小説を書くこと',
                personality: '観察力が鋭い、慎重',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'ダイン',
                title: 'コートの外にも進路を探すバレー部員',
                shortDescription: '勝負にはすぐ挑み、痛む膝のことはようやく認めたバレー部員。',
                description: 'じゃんけんにもバレーと同じくらい全力で挑むバレー部員。「平気」と痛みをごまかしていたが、コーチと両親にきちんと伝え、リハビリを予約した。選手だけでなく、スポーツ中継という次の道にも自分の力で挑もうとしている。',
                age: '18歳',
                birthday: '12月25日',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: 'バレーボール、スポーツ中継',
                personality: 'まっすぐ、負けず嫌い',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: '担任の先生',
                title: '原稿を書き直す担任教師',
                shortDescription: '答えではなく、読んだ跡を残してほしいと生徒に頼む国語教師。',
                description: '授業・評価と個人の創作を明確に切り分ける国語教師。7年間しまい込んでいた原稿を文芸部の公開合評会に出し、番号だけが付いた感想を受けて最終章を書き直す。教師と生徒としての関係には、卒業式で正式に区切りをつける。',
                age: '28歳',
                birthday: '5月5日',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: '読書、映画鑑賞',
                personality: '原則を重んじる、内省的',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: '保健室の先生',
                title: '支援につなぐ養護教諭',
                shortDescription: '症状と記録を確認し、必要な大人へつなぐ養護教諭。',
                description: '冗談より先に体調と予約時間を確認する養護教諭。保健室、教育相談室、保護者、担当教員へつなぐ具体的な方法を教えてくれる。相談が終われば記録も正式に終了し、卒業生をそれぞれの生活へ送り出す。',
                age: '26歳',
                birthday: '9月12日',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: '園芸、瞑想',
                personality: '実務的、冷静',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        },

        // ===== 프랑스어 데이터 (French Data) =====
        fr: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'La présidente qui ne laisse aucune case vide',
                shortDescription: 'La présidente du conseil des élèves qui tient soigneusement le planning et le registre des clés.',
                description: 'La présidente du conseil des élèves qui complète sans rien omettre le déroulé des événements et les registres d\'utilisation. Même lorsqu\'elle demande un service, elle commence par en préciser la raison et l\'heure. Maintenant qu\'elle partage le travail qu\'elle assumait seule, elle consigne à la fois l\'emprunt officiel de la clé du toit et leurs prochains rendez-vous.',
                age: '18 ans',
                birthday: '14 mars',
                height: '165 cm',
                weight: '52 kg',
                bust: '36-23-35 70E',
                hobby: 'Musique, Lecture',
                personality: 'Responsable, Prudente',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'La lectrice qui choisit ses mots par écrit',
                shortDescription: 'Une lectrice qui confie ses phrases à des marque-pages et des petits mots avant de les prononcer.',
                description: 'Une lectrice attachée à une place tranquille dans l\'annexe de la bibliothèque. Elle ne précipite jamais sa réponse et écrit à l\'encre violet pâle les phrases difficiles à dire. Lorsqu\'elle confie le roman qu\'elle écrivait seule, elle laisse à l\'autre le temps de le lire et de lui répondre.',
                age: '18 ans',
                birthday: '22 juillet',
                height: '162 cm',
                weight: '49 kg',
                bust: '34-21-34 65E',
                hobby: 'Musique, Écriture de romans',
                personality: 'Observatrice, Prudente',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'La volleyeuse qui cherche sa voie hors du terrain',
                shortDescription: 'Une volleyeuse qui relève aussitôt chaque défi, mais qui a tardé à reconnaître sa blessure au genou.',
                description: 'Une volleyeuse qui joue à pierre-feuille-ciseaux avec autant d\'intensité qu\'un match. Elle a tenté d\'ignorer la douleur en assurant que tout allait bien, avant de prévenir son entraîneur et ses parents et de réserver sa rééducation. Elle veut désormais essayer une autre voie que la compétition : la retransmission sportive.',
                age: '18 ans',
                birthday: '25 décembre',
                height: '158 cm',
                weight: '54 kg',
                bust: '37-22-35 65H',
                hobby: 'Volley-ball, Retransmission sportive',
                personality: 'Franche, Compétitive',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Professeure principale',
                title: 'La professeure principale qui reprend son manuscrit',
                shortDescription: 'Une professeure de littérature qui demande à ses élèves des traces de lecture plutôt que la bonne réponse.',
                description: 'Une professeure de littérature qui maintient des limites claires entre ses cours, les entretiens et ses propres écrits. Elle soumet à la séance publique du club littéraire un manuscrit laissé de côté pendant sept ans, puis en réécrit le dernier chapitre à partir d\'avis anonymes. La relation entre professeure et élève se conclut par des adieux officiels lors de la remise des diplômes.',
                age: '28 ans',
                birthday: '5 mai',
                height: '170 cm',
                weight: '58 kg',
                bust: '38-24-38 70G',
                hobby: 'Lecture, Cinéma',
                personality: 'Intègre, Réfléchie',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Infirmière',
                title: 'L\'infirmière qui oriente les élèves vers la bonne aide',
                shortDescription: 'Une infirmière scolaire qui vérifie symptômes et dossiers avant d\'orienter chaque élève vers l\'adulte compétent.',
                description: 'Une infirmière scolaire qui vérifie l\'état de santé et l\'heure du rendez-vous avant de plaisanter. Elle explique concrètement comment joindre l\'infirmerie, le service d\'orientation, les responsables légaux et les enseignants. Une fois le suivi terminé, elle clôt officiellement le dossier et laisse chaque diplômé reprendre sa propre vie.',
                age: '26 ans',
                birthday: '12 septembre',
                height: '168 cm',
                weight: '60 kg',
                bust: '38-24-38 70H',
                hobby: 'Jardinage, Méditation',
                personality: 'Pragmatique, Calme',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        },

        // ===== 독일어 데이터 (German Data) =====
        de: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'Die Schülerratspräsidentin, die keine Lücke lässt',
                shortDescription: 'Eine Schülerratspräsidentin, die Zeitpläne und das Schlüsselbuch gewissenhaft führt.',
                description: 'Eine Schülerratspräsidentin, die Ablaufpläne und Nutzungsprotokolle lückenlos führt. Selbst bei einer Bitte nennt sie zuerst Grund und Zeitpunkt. Seit sie die Arbeit teilt, die sie früher allein getragen hat, hält sie sowohl den offiziell ausgeliehenen Dachschlüssel als auch die nächste gemeinsame Verabredung fest.',
                age: '18 Jahre',
                birthday: '14. März',
                height: '165 cm',
                weight: '52 kg',
                bust: '36-23-35 70E',
                hobby: 'Musik, Lesen',
                personality: 'Verantwortungsbewusst, Bedacht',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Die Leserin, die ihre Worte auf Zetteln findet',
                shortDescription: 'Eine Leserin, die ihre Sätze zuerst auf Lesezeichen und Zettel schreibt.',
                description: 'Eine Leserin, die ihren ruhigen Platz im Bibliotheksanbau schätzt. Sie lässt sich mit Antworten Zeit und schreibt Sätze, die ihr schwer über die Lippen kommen, mit blassvioletter Tinte auf. Wenn sie den Roman überreicht, an dem sie allein geschrieben hat, lässt sie ihrem Gegenüber Zeit zum Lesen und Antworten.',
                age: '18 Jahre',
                birthday: '22. Juli',
                height: '162 cm',
                weight: '49 kg',
                bust: '34-21-34 65E',
                hobby: 'Musik, Romane schreiben',
                personality: 'Aufmerksam, Bedacht',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Die Volleyballerin auf der Suche nach einem Weg jenseits des Spielfelds',
                shortDescription: 'Eine Volleyballerin, die jede Herausforderung sofort annimmt, ihr schmerzendes Knie aber erst spät eingestand.',
                description: 'Eine Volleyballerin, die selbst Schere, Stein, Papier mit demselben Einsatz spielt wie Volleyball. Sie wollte die Schmerzen mit einem „Alles gut“ abtun, informierte dann aber ihren Trainer und ihre Eltern und vereinbarte die Reha. Nun will sie neben dem Leistungssport auch einen neuen Weg selbst erproben: Sportübertragungen.',
                age: '18 Jahre',
                birthday: '25. Dezember',
                height: '158 cm',
                weight: '54 kg',
                bust: '37-22-35 65H',
                hobby: 'Volleyball, Sportübertragungen',
                personality: 'Direkt, Ehrgeizig',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Klassenlehrerin',
                title: 'Die Klassenlehrerin, die ihr Manuskript neu schreibt',
                shortDescription: 'Eine Literaturlehrerin, die ihre Schüler nicht um die richtige Antwort, sondern um Spuren ihrer Lektüre bittet.',
                description: 'Eine Literaturlehrerin, die klare Grenzen zwischen Unterricht, Beratung und ihrem eigenen Schreiben zieht. Sie legt ein sieben Jahre lang beiseitegelegtes Manuskript der öffentlichen Kritikrunde der Literatur-AG vor und schreibt anhand anonymer Rückmeldungen das letzte Kapitel neu. Das Verhältnis zwischen Lehrerin und Schüler endet mit einem offiziellen Abschied bei der Abschlussfeier.',
                age: '28 Jahre',
                birthday: '5. Mai',
                height: '170 cm',
                weight: '58 kg',
                bust: '38-24-38 70G',
                hobby: 'Lesen, Filme schauen',
                personality: 'Prinzipientreu, Reflektiert',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Schulkrankenschwester',
                title: 'Die Schulkrankenschwester, die Hilfe vermittelt',
                shortDescription: 'Eine Schulkrankenschwester, die Symptome und Akten prüft und Schüler an die richtigen Erwachsenen weiterleitet.',
                description: 'Eine Schulkrankenschwester, die erst Zustand und Termin prüft und dann einen Scherz macht. Sie erklärt konkret, wie Schüler im Schulsanitätsraum, bei der Schulberatung, bei ihren Erziehungsberechtigten und bei Lehrkräften Hilfe bekommen. Nach Abschluss der Beratung schließt sie die Akte offiziell, damit die Absolventen ihr eigenes Leben weiterführen können.',
                age: '26 Jahre',
                birthday: '12. September',
                height: '168 cm',
                weight: '60 kg',
                bust: '38-24-38 70H',
                hobby: 'Gartenarbeit, Meditation',
                personality: 'Praktisch, Ruhig',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        },

        // ===== 포르투갈어 데이터 (Brazilian Portuguese Data) =====
        pt: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'A presidente do grêmio que não deixa lacunas',
                shortDescription: 'A presidente do grêmio estudantil que confere com cuidado o cronograma e o registro das chaves.',
                description: 'A presidente do grêmio estudantil que mantém completos o roteiro dos eventos e os registros de uso. Até quando pede um favor, começa explicando o motivo e o horário. Agora que divide o trabalho que antes assumia sozinha, ela registra tanto o empréstimo oficial da chave do terraço quanto os próximos compromissos dos dois.',
                age: '18 anos',
                birthday: '14 de março',
                height: '165 cm',
                weight: '52 kg',
                bust: '36-23-35 70E',
                hobby: 'Música, Leitura',
                personality: 'Responsável, Cautelosa',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'A leitora que escolhe as palavras por escrito',
                shortDescription: 'Uma leitora que escreve suas frases em marcadores e bilhetes antes de dizê-las.',
                description: 'Uma leitora que gosta de um lugar tranquilo no anexo da biblioteca. Ela não apressa nenhuma resposta e escreve com tinta lilás as frases difíceis de dizer. Ao entregar o romance que escrevia sozinha, dá à outra pessoa tempo para ler e responder.',
                age: '18 anos',
                birthday: '22 de julho',
                height: '162 cm',
                weight: '49 kg',
                bust: '34-21-34 65E',
                hobby: 'Música, Escrever romances',
                personality: 'Observadora, Cautelosa',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'A jogadora de vôlei em busca de um futuro fora da quadra',
                shortDescription: 'Uma jogadora de vôlei que aceita qualquer desafio na hora, mas demorou a admitir a dor no joelho.',
                description: 'Uma jogadora de vôlei que leva pedra, papel e tesoura tão a sério quanto uma partida. Ela tentou ignorar a dor dizendo que estava bem, mas contou ao técnico e aos pais e marcou a fisioterapia. Agora quer testar por conta própria outro caminho além de jogar: a transmissão esportiva.',
                age: '18 anos',
                birthday: '25 de dezembro',
                height: '158 cm',
                weight: '54 kg',
                bust: '37-22-35 65H',
                hobby: 'Vôlei, Transmissão esportiva',
                personality: 'Direta, Competitiva',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Professora',
                title: 'A professora que reescreve seu manuscrito',
                shortDescription: 'Uma professora de literatura que pede aos alunos sinais de leitura, não a resposta certa.',
                description: 'Uma professora de literatura que mantém limites claros entre as aulas, a orientação e seus próprios textos. Ela apresenta ao clube de literatura, em uma sessão pública de crítica, um manuscrito guardado por sete anos e reescreve o último capítulo com base em comentários anônimos. A relação entre professora e aluno termina com uma despedida formal na formatura.',
                age: '28 anos',
                birthday: '5 de maio',
                height: '170 cm',
                weight: '58 kg',
                bust: '38-24-38 70G',
                hobby: 'Leitura, Cinema',
                personality: 'Íntegra, Reflexiva',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'worried', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Enfermeira',
                title: 'A enfermeira que encaminha os alunos para a ajuda certa',
                shortDescription: 'Uma enfermeira escolar que confere sintomas e registros e encaminha cada aluno ao adulto adequado.',
                description: 'Uma enfermeira escolar que confere o estado do aluno e o horário da consulta antes de brincar. Ela explica de forma concreta como procurar a enfermaria, a orientação escolar, os responsáveis e os professores. Quando o acompanhamento termina, encerra oficialmente o registro e deixa cada formando seguir a própria vida.',
                age: '26 anos',
                birthday: '12 de setembro',
                height: '168 cm',
                weight: '60 kg',
                bust: '38-24-38 70H',
                hobby: 'Jardinagem, Meditação',
                personality: 'Prática, Tranquila',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'worried', 'bikini']
            }
        }
    };

    // =========================================================================
    // 표정 이름 매핑 (Expression Name Mappings)
    // =========================================================================
    // 표정 코드(예: 'shy')를 사용자에게 표시할 이름(예: '수줍음')으로 변환
    // 표정 선택 버튼에 텍스트로 표시됨

    static expressions = {
        // 한국어 표정 이름
        ko: {
            normal: '기본',      // 기본 표정
            shy: '수줍음',       // 수줍은 표정
            shy2: '수줍음2',     // 수줍은 표정 변형
            angry: '화남',       // 화난 표정
            sad: '슬픔',         // 슬픈 표정
            laugh: '웃음',       // 웃는 표정
            cry: '울음',         // 우는 표정
            pout: '삐짐',        // 삐친 표정
            worried: '걱정',     // 걱정하는 표정
            back: '뒷모습',      // 뒷모습
            smile: '미소',       // 미소짓는 표정
            bored: '지루함',     // 지루해하는 표정
            active: '활발',      // 활발한 표정
            sweat: '땀흘림',     // 땀에 젖은 표정
            flushed: '달아오름',
            bikini: '???'        // 특별 표정 라벨 (호감도 100 + 프리토킹 30회 해금). 미스터리 연출 위해 '???' 사용 — 해금 전까지 무엇인지 숨김
        },

        // 영어 표정 이름
        en: {
            normal: 'Normal',
            shy: 'Shy',
            shy2: 'Shy 2',
            angry: 'Angry',
            sad: 'Sad',
            laugh: 'Laugh',
            cry: 'Cry',
            pout: 'Pout',
            worried: 'Worried',
            back: 'Rear View',
            smile: 'Smile',
            bored: 'Bored',
            active: 'Active',
            sweat: 'Sweaty',
            flushed: 'Flushed',
            bikini: '???'
        },

        // 스페인어 표정 이름
        es: {
            normal: 'Normal',
            shy: 'Tímida',
            shy2: 'Tímida 2',
            angry: 'Enojada',
            sad: 'Triste',
            laugh: 'Risa',
            cry: 'Llanto',
            pout: 'Puchero',
            worried: 'Preocupada',
            back: 'Espalda',
            smile: 'Sonrisa',
            bored: 'Aburrida',
            active: 'Activa',
            sweat: 'Sudorosa',
            flushed: 'Sonrojada',
            bikini: '???'
        },

        // 일본어 표정 이름
        ja: {
            normal: '普段',
            shy: '照れ',
            shy2: '照れ（強）',
            angry: '怒り',
            sad: '悲しみ',
            laugh: '笑い',
            cry: '泣き顔',
            pout: 'ふくれっ面',
            worried: '心配',
            back: '後ろ姿',
            smile: '微笑み',
            bored: '退屈',
            active: '元気',
            sweat: '汗',
            flushed: '火照り',
            bikini: '???'
        },

        // 프랑스어 표정 이름
        fr: {
            normal: 'Normale',
            shy: 'Timide',
            shy2: 'Timide 2',
            angry: 'En colère',
            sad: 'Triste',
            laugh: 'Rieuse',
            cry: 'En pleurs',
            pout: 'Boudeuse',
            worried: 'Inquiète',
            back: 'De dos',
            smile: 'Souriante',
            bored: 'Ennuyée',
            active: 'Dynamique',
            sweat: 'En sueur',
            flushed: 'Rougissante',
            bikini: '???'
        },

        // 독일어 표정 이름
        de: {
            normal: 'Normal',
            shy: 'Schüchtern',
            shy2: 'Schüchtern 2',
            angry: 'Wütend',
            sad: 'Traurig',
            laugh: 'Lachen',
            cry: 'Weinen',
            pout: 'Schmollen',
            worried: 'Besorgt',
            back: 'Rückansicht',
            smile: 'Lächeln',
            bored: 'Gelangweilt',
            active: 'Aktiv',
            sweat: 'Verschwitzt',
            flushed: 'Errötet',
            bikini: '???'
        },

        // 포르투갈어 표정 이름
        pt: {
            normal: 'Normal',
            shy: 'Tímida',
            shy2: 'Tímida 2',
            angry: 'Brava',
            sad: 'Triste',
            laugh: 'Rindo',
            cry: 'Chorando',
            pout: 'Emburrada',
            worried: 'Preocupada',
            back: 'De costas',
            smile: 'Sorrindo',
            bored: 'Entediada',
            active: 'Animada',
            sweat: 'Suada',
            flushed: 'Corada',
            bikini: '???'
        }
    };

    // =========================================================================
    // CG 데이터 (이벤트 CG 목록)
    // =========================================================================
    // 게임 내 특별 이벤트에서 표시되는 일러스트(CG) 목록
    // 
    // 구조 설명:
    // - id: CG 고유 식별자 (해금 상태 저장에 사용)
    // - name: CG 제목
    // - character: 해당 CG에 등장하는 캐릭터
    // - description: CG 설명
    // - file: 원본 이미지 경로
    // - thumbnail: 썸네일 이미지 경로 (목록에서 표시용)

    static cg = {
        ko: [
            {
                id: 'nurse_home_event1',
                name: '주원의 집에서 맞은 아침',
                character: '보건선생님',
                description: '졸업 5년 뒤 다시 만나 몇 달간 주말을 보낸 두 성인이 함께 맞은 아침',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: '다인의 부상',
                character: '다인',
                description: '체육관에서 무릎 부상을 당한 다인',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: '다인의 눈물',
                character: '다인',
                description: '어두운 체육관에서 혼자 울고 있는 다인',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            {
                id: 'ending_perfect_seoyeon',
                unlockHint: "서연 퍼펙트 엔딩 도달"
            ,
                name: '서연과의 약속',
                character: '서연',
                description: '옥상 화분을 함께 정리한 뒤, 서연이 열린 문 앞에서 내일 약속을 남긴 순간',
                file: 'assets/images/background/ending_perfect_seoyeon.png',
                thumbnail: 'assets/images/background/ending_perfect_seoyeon.png'
            },
            {
                id: 'ending_perfect_yuna',
                unlockHint: "유나 퍼펙트 엔딩 도달"
            ,
                name: '유나의 대답',
                character: '유나',
                description: '도서관 별관에서 소설을 건넨 유나가 한 뼘 앞에서 허락을 기다린 순간',
                file: 'assets/images/background/ending_perfect_yuna.png',
                thumbnail: 'assets/images/background/ending_perfect_yuna.png'
            },
            {
                id: 'ending_perfect_dain',
                unlockHint: "다인 퍼펙트 엔딩 도달"
            ,
                name: '다인의 승리',
                character: '다인',
                description: '체육관에서 먼저 허락을 묻고, 다친 무릎에 힘을 싣지 않은 채 안긴 순간',
                file: 'assets/images/background/ending_perfect_dain.png',
                thumbnail: 'assets/images/background/ending_perfect_dain.png'
            },
            {
                id: 'ending_bittersweet',
                unlockHint: "비터스윗 엔딩 도달"
            ,
                name: '빗속의 이별',
                character: null,
                description: '비 오는 학교 정문, 우산 아래 혼자 서서 멀어지는 뒷모습을 바라보다',
                file: 'assets/images/background/ending_bittersweet.png',
                thumbnail: 'assets/images/background/ending_bittersweet.png'
            },
            {
                id: 'ending_true_teacher',
                unlockHint: "담임 트루러브 엔딩 도달"
            ,
                name: '다음 주의 약속',
                character: '담임선생님',
                description: '졸업 4년 뒤 우연히 다시 만난 두 성인이 카페에서 다음 약속을 묻는 순간',
                file: 'assets/images/background/ending_true_teacher.png',
                thumbnail: 'assets/images/background/ending_true_teacher.png'
            },
            {
                id: 'ending_true_nurse',
                unlockHint: "보건 트루러브 엔딩 도달"
            ,
                name: '안전한 곳',
                character: '보건선생님',
                description: '졸업 4년 뒤 다시 만나 석 달간 약속을 이어 온 두 성인이 함께 영화를 본 밤',
                file: 'assets/images/background/ending_true_nurse.png',
                thumbnail: 'assets/images/background/ending_true_nurse.png'
            },
            {
                id: 'ending_harem',
                unlockHint: "엇갈린 대답 엔딩 도달"
            ,
                name: '엇갈린 대답',
                character: null,
                description: '세 사람 앞에서 솔직한 대답과 각자의 경계를 확인한 순간',
                file: 'assets/images/background/ending_harem.png',
                thumbnail: 'assets/images/background/ending_harem.png'
            },
            {
                id: 'ending_alone',
                unlockHint: "혼자 엔딩 도달"
            ,
                name: '혼자 남은 방',
                character: null,
                description: '어두운 방, 꺼진 핸드폰, 창밖의 도시 불빛만이 유일한 빛',
                file: 'assets/images/background/ending_alone.png',
                thumbnail: 'assets/images/background/ending_alone.png'
            },
            {
                id: 'ending_friend',
                unlockHint: "친구 엔딩 도달"
            ,
                name: '우리들의 졸업사진',
                character: null,
                description: '졸업식 날, 교실에서 찍은 다섯 명의 단체 셀카',
                file: 'assets/images/background/ending_friend.png',
                thumbnail: 'assets/images/background/ending_friend.png'
            },
            { id: 'ending_true_seoyeon', name: '서연의 방', character: '서연', description: '서연의 방에서 컵 두 개를 사이에 두고, 화분 받침 아래 접은 문장을 남겨 둔 밤', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "서연 트루 엔딩 도달"
            },
            { id: 'ending_true_yuna', name: '옥상의 별', character: '유나', description: '옥상 난간에 나란히 앉아 야경과 초승달을 바라보는 밤', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "유나 트루 엔딩 도달"
            },
            { id: 'ending_true_dain', name: '다인의 다음 약속', character: '다인', description: '병원 예약을 마친 다인이 체육관에서 어깨 하나만큼 자리를 비우고 답을 기다리는 순간', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "다인 트루 엔딩 도달"
            },
            { id: 'ending_good_seoyeon', name: '공원의 두 사람', character: '서연', description: '해질녘 공원길에서 보폭을 맞추고 다음 일정의 시간과 장소를 정한 순간', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "서연 굿 엔딩 도달"
            },
            { id: 'ending_good_yuna', name: '옥상의 다음 장', character: '유나', description: '운동장 스피커가 꺼진 뒤에도 같은 난간 앞에 남아 다음 책갈피를 고른 순간', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "유나 굿 엔딩 도달"
            },
            { id: 'ending_good_dain', name: '교문 앞 인사', character: '다인', description: '석양의 교문 앞에서 다인이 주먹을 내밀고 대답을 기다리는 순간', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "다인 굿 엔딩 도달"
            },
            { id: 'ending_confess_fail_seoyeon', name: '서연의 대답', character: '서연', description: '석양의 공원에서 끝까지 들은 뒤 지금은 아니라고 분명히 답하는 서연', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "서연에게 고백 거절당하기"
            },
            { id: 'ending_confess_fail_yuna', name: '유나의 대답', character: '유나', description: '공원 출구까지 나란히 걸은 뒤 그 마음을 받을 수 없다고 답하는 유나', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "유나에게 고백 거절당하기"
            },
            { id: 'ending_confess_fail_dain', name: '다인의 대답', character: '다인', description: '눈가를 닦은 뒤 친구로 남고 싶다고 분명히 말하는 다인', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "다인에게 고백 거절당하기"
            },
            { id: 'ending_mayhem', name: '읽음 뒤의 거리', character: null, description: '답하지 못한 세 대화방과 각자 다른 방향으로 멀어진 세 사람', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "양다리가 들통나기"
            },
            { id: 'event_temptation_seoyeon', name: '돌아갈 틈', character: '서연', description: '밤바람이 부는 옥상에서 서연이 망설임 없이 손을 내밀며 대답을 기다린 순간', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "4일차에 라이벌 서연의 제안을 받아들이기"
            },
            { id: 'event_temptation_yuna', name: '숨을 곳 없는 거리', character: '유나', description: '낡은 도서관 은신처에서 유나가 책장에 손을 짚고, 물러서지 않은 채 대답을 기다린 순간', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "4일차에 라이벌 유나의 제안을 받아들이기"
            },
            { id: 'event_temptation_dain', name: '불 꺼진 체육관', character: '다인', description: '훈련이 끝난 어두운 체육관에서 다인이 장난기 없는 눈으로 한 걸음 다가온 순간', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "4일차에 라이벌 다인의 제안을 받아들이기"
            },
            { id: 'ending_bittersweet_teacher', name: '돌아온 편지', character: '담임선생님', description: '졸업식 뒤 빈 교실, 담임이 추천서와 편지를 책상 위에 돌려놓고 작별을 택한 순간', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "담임 Bittersweet 엔딩 도달"
            },
            { id: 'ending_bittersweet_nurse', name: '상담 종료', character: '보건선생님', description: '상담 기록과 연락처 쪽지가 책상 위로 돌아오고, 보건실 문이 닫히기 직전 남은 마지막 인사', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "보건 Bittersweet 엔딩 도달"
            },
            { id: 'ending_good_teacher', name: '졸업식의 작별', character: '담임선생님', description: '졸업식 날 추천서와 합평본을 건넨 뒤, 복도 창가에서 졸업생들을 배웅하는 담임선생님', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "담임 굿 엔딩 도달"
            },
            { id: 'ending_good_nurse', name: '마지막 확인', character: '보건선생님', description: '졸업식 날 상담 기록을 종결하고 졸업생과 가볍게 인사를 나누는 보건선생님', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "보건 굿 엔딩 도달"
            },
            { id: 'ending_perfect_teacher', name: '벚꽃 아래 꽃다발', character: '담임선생님', description: '졸업 4년 뒤 다시 만난 두 성인. 벚꽃 테라스에서 출간 작가가 축하 꽃다발을 건네는 순간', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "담임 퍼펙트 엔딩 도달"
            },
            { id: 'ending_perfect_nurse', name: '함께 맞은 아침', character: '보건선생님', description: '졸업 5년 뒤 다시 만나 몇 달간 약속을 이어 온 두 성인이 함께 맞은 아침', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "보건 퍼펙트 엔딩 도달"
            }
        ],
        en: [
            {
                id: 'nurse_home_event1',
                name: 'Morning at Juwon\'s Home',
                character: 'School Nurse',
                description: 'A morning shared by two adults who reunited five years after graduation and spent several months seeing each other on weekends',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'Dain\'s Injury',
                character: 'Dain',
                description: 'Dain suffers a knee injury in the gym',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'Dain\'s Tears',
                character: 'Dain',
                description: 'Dain crying alone in the darkened gym',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'A Promise with Seoyeon', character: 'Seoyeon', description: 'After they finish tending the rooftop planters, Seoyeon leaves a promise for tomorrow by the open door', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Reach Seoyeon's Perfect Ending"
            },
            { id: 'ending_perfect_yuna', name: 'Yuna\'s Answer', character: 'Yuna', description: 'After handing over her novel in the library annex, Yuna waits a handspan away for permission', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Reach Yuna's Perfect Ending"
            },
            { id: 'ending_perfect_dain', name: 'Dain\'s Victory', character: 'Dain', description: 'In the gym, Dain asks permission first, then embraces you without putting weight on her injured knee', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Reach Dain's Perfect Ending"
            },
            { id: 'ending_bittersweet', name: 'Farewell in the Rain', character: null, description: 'At the school gate in the rain, standing alone beneath an umbrella and watching someone recede into the distance', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Reach the Bittersweet Ending"
            },
            { id: 'ending_true_teacher', name: 'Next Week\'s Promise', character: 'Homeroom Teacher', description: 'Four years after graduation, two adults meet again by chance and ask about their next meeting at a cafe', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Reach the Homeroom Teacher's True Love Ending"
            },
            { id: 'ending_true_nurse', name: 'A Safe Place', character: 'School Nurse', description: 'A night when two adults, reunited four years after graduation and seeing each other for three months, watch a film together', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Reach the School Nurse's True Love Ending"
            },
            { id: 'ending_harem', name: 'Different Answers', character: null, description: 'The moment an honest answer is given in front of all three and everyone\'s boundaries become clear', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Reach the Different Answers Ending"
            },
            { id: 'ending_alone', name: 'The Empty Room', character: null, description: 'A dark room, a switched-off phone, and the city lights outside as the only illumination', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Reach the Alone Ending"
            },
            { id: 'ending_friend', name: 'Our Graduation Photo', character: null, description: 'A five-person group selfie taken in the classroom on graduation day', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Reach the Friend Ending"
            },
            { id: 'ending_true_seoyeon', name: 'Seoyeon\'s Room', character: 'Seoyeon', description: 'A night in Seoyeon\'s room, with two cups between them and a folded sentence left beneath a plant saucer', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "Reach Seoyeon's True Ending"
            },
            { id: 'ending_true_yuna', name: 'Stars on the Rooftop', character: 'Yuna', description: 'A night sitting side by side at the rooftop railing, looking out at the city and a crescent moon', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "Reach Yuna's True Ending"
            },
            { id: 'ending_true_dain', name: 'Dain\'s Next Promise', character: 'Dain', description: 'After booking her hospital appointment, Dain leaves a shoulder\'s width of space in the gym and waits for an answer', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "Reach Dain's True Ending"
            },
            { id: 'ending_good_seoyeon', name: 'Two in the Park', character: 'Seoyeon', description: 'At dusk in the park, they match their pace and choose the time and place of their next meeting', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "Reach Seoyeon's Good Ending"
            },
            { id: 'ending_good_yuna', name: 'The Rooftop\'s Next Chapter', character: 'Yuna', description: 'After the school speakers go quiet, they stay by the same railing and choose the next bookmark', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "Reach Yuna's Good Ending"
            },
            { id: 'ending_good_dain', name: 'A Greeting at the School Gate', character: 'Dain', description: 'At the school gate at sunset, Dain holds out her fist and waits for an answer', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "Reach Dain's Good Ending"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'Seoyeon\'s Answer', character: 'Seoyeon', description: 'In the park at sunset, Seoyeon listens to the end and clearly says that now is not the right time', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Get rejected by Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'Yuna\'s Answer', character: 'Yuna', description: 'After walking side by side to the park exit, Yuna says that she cannot return those feelings', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Get rejected by Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'Dain\'s Answer', character: 'Dain', description: 'After wiping her eyes, Dain clearly says that she wants them to remain friends', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Get rejected by Dain"
            },
            { id: 'ending_mayhem', name: 'Distance After the Read Receipts', character: null, description: 'Three unanswered chats and three people walking away in different directions', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Get caught two-timing"
            },
            { id: 'event_temptation_seoyeon', name: 'No Way Back', character: 'Seoyeon', description: 'On the windy rooftop at night, Seoyeon extends her hand without hesitation and waits for an answer', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "Accept rival Seoyeon\'s offer on Day 4"
            },
            { id: 'event_temptation_yuna', name: 'Nowhere Left to Hide', character: 'Yuna', description: 'In the old library hideout, Yuna braces a hand against the shelf and waits for an answer without backing away', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "Accept rival Yuna\'s offer on Day 4"
            },
            { id: 'event_temptation_dain', name: 'The Darkened Gym', character: 'Dain', description: 'After practice, Dain steps closer in the darkened gym with none of her usual playfulness in her eyes', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "Accept rival Dain\'s offer on Day 4"
            },
            { id: 'ending_bittersweet_teacher', name: 'The Returned Letter', character: 'Homeroom Teacher', description: 'After graduation in an empty classroom, the homeroom teacher leaves the recommendation and letter on the desk and chooses goodbye', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "Reach the Homeroom Teacher\'s Bittersweet Ending"
            },
            { id: 'ending_bittersweet_nurse', name: 'Closing the File', character: 'School Nurse', description: 'The counseling record and contact note are returned to the desk, leaving one last goodbye before the nurse\'s office door closes', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "Reach the School Nurse\'s Bittersweet Ending"
            },
            { id: 'ending_good_teacher', name: 'A Graduation Farewell', character: 'Homeroom Teacher', description: 'After handing over a recommendation and the critique copy on graduation day, the homeroom teacher sees the graduates off from the hallway window', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Reach the Homeroom Teacher's Good Ending"
            },
            { id: 'ending_good_nurse', name: 'The Final Check-in', character: 'School Nurse', description: 'On graduation day, the school nurse closes the counseling record and briefly says goodbye to the graduate', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Reach the School Nurse's Good Ending"
            },
            { id: 'ending_perfect_teacher', name: 'A Bouquet Beneath the Cherry Blossoms', character: 'Homeroom Teacher', description: 'Four years after graduation, two adults meet again and the published author presents a celebratory bouquet on a cherry-blossom terrace', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Reach the Homeroom Teacher's Perfect Ending"
            },
            { id: 'ending_perfect_nurse', name: 'Morning Together', character: 'School Nurse', description: 'A morning shared by two adults who reunited five years after graduation and kept seeing each other for several months', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Reach the School Nurse's Perfect Ending"
            }
        ],
        es: [
            {
                id: 'nurse_home_event1',
                name: 'Una mañana en casa de Juwon',
                character: 'Enfermera',
                description: 'La mañana que comparten dos adultos que se reencontraron cinco años después de graduarse y pasaron varios meses viéndose los fines de semana',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'Lesión de Dain',
                character: 'Dain',
                description: 'Dain sufre una lesión de rodilla en el gimnasio',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'Las lágrimas de Dain',
                character: 'Dain',
                description: 'Dain llora sola en el gimnasio a oscuras',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Una promesa con Seoyeon', character: 'Seoyeon', description: 'Después de ordenar juntos las macetas de la azotea, Seoyeon deja junto a la puerta abierta una promesa para el día siguiente', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Alcanza el final perfecto de Seoyeon"
            },
            { id: 'ending_perfect_yuna', name: 'La respuesta de Yuna', character: 'Yuna', description: 'Tras entregar su novela en el anexo de la biblioteca, Yuna espera una respuesta a un palmo de distancia', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Alcanza el final perfecto de Yuna"
            },
            { id: 'ending_perfect_dain', name: 'La victoria de Dain', character: 'Dain', description: 'En el gimnasio, Dain pide permiso antes de abrazarte sin apoyar el peso en la rodilla lesionada', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Alcanza el final perfecto de Dain"
            },
            { id: 'ending_bittersweet', name: 'Despedida bajo la lluvia', character: null, description: 'Frente a la escuela bajo la lluvia, a solas bajo un paraguas, contemplando cómo alguien se aleja', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Alcanza el final agridulce"
            },
            { id: 'ending_true_teacher', name: 'La promesa de la próxima semana', character: 'Profesora', description: 'Cuatro años después de la graduación, dos adultos se reencuentran por casualidad y hablan en una cafetería de su próxima cita', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Alcanza el final de amor verdadero de la profesora"
            },
            { id: 'ending_true_nurse', name: 'Un lugar seguro', character: 'Enfermera', description: 'La noche en que dos adultos, reencontrados cuatro años después de la graduación y tras tres meses de citas, ven una película juntos', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Alcanza el final de amor verdadero de la enfermera"
            },
            { id: 'ending_harem', name: 'Respuestas distintas', character: null, description: 'El momento en que, frente a las tres, se expresa una respuesta sincera y quedan claros los límites de cada persona', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Alcanza el final de las respuestas distintas"
            },
            { id: 'ending_alone', name: 'La habitación vacía', character: null, description: 'Una habitación oscura, un teléfono apagado y las luces de la ciudad al otro lado de la ventana como única iluminación', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Alcanza el final en solitario"
            },
            { id: 'ending_friend', name: 'Nuestra foto de graduación', character: null, description: 'Un selfi de cinco personas tomado en el aula el día de la graduación', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Alcanza el final de amistad"
            },
            { id: 'ending_true_seoyeon', name: 'La habitación de Seoyeon', character: 'Seoyeon', description: 'Una noche en la habitación de Seoyeon, con dos tazas entre ambos y una frase doblada bajo el plato de una maceta', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "Alcanza el final verdadero de Seoyeon"
            },
            { id: 'ending_true_yuna', name: 'Estrellas en la azotea', character: 'Yuna', description: 'Una noche sentados uno junto al otro ante la baranda de la azotea, contemplando la ciudad y la luna creciente', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "Alcanza el final verdadero de Yuna"
            },
            { id: 'ending_true_dain', name: 'La próxima promesa de Dain', character: 'Dain', description: 'Después de reservar su cita en el hospital, Dain deja entre ambos un espacio del ancho de un hombro en el gimnasio y espera una respuesta', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "Alcanza el final verdadero de Dain"
            },
            { id: 'ending_good_seoyeon', name: 'Dos personas en el parque', character: 'Seoyeon', description: 'Al atardecer en el parque, igualan el paso y deciden la hora y el lugar de su próximo encuentro', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "Alcanza el buen final de Seoyeon"
            },
            { id: 'ending_good_yuna', name: 'El próximo capítulo en la azotea', character: 'Yuna', description: 'Cuando los altavoces de la escuela se apagan, ambos permanecen ante la misma baranda y eligen el próximo separador', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "Alcanza el buen final de Yuna"
            },
            { id: 'ending_good_dain', name: 'Un saludo frente a la escuela', character: 'Dain', description: 'Frente a la escuela al atardecer, Dain extiende el puño y espera una respuesta', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "Alcanza el buen final de Dain"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'La respuesta de Seoyeon', character: 'Seoyeon', description: 'En el parque al atardecer, Seoyeon escucha hasta el final y deja claro que ahora no es el momento', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Ser rechazado por Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'La respuesta de Yuna', character: 'Yuna', description: 'Después de caminar juntos hasta la salida del parque, Yuna dice que no puede corresponder a esos sentimientos', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Ser rechazado por Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'La respuesta de Dain', character: 'Dain', description: 'Después de secarse los ojos, Dain dice con claridad que quiere que sigan siendo amigos', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Ser rechazado por Dain"
            },
            { id: 'ending_mayhem', name: 'La distancia tras el visto', character: null, description: 'Tres chats sin respuesta y tres personas alejándose en direcciones distintas', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Deja que descubran tu doble juego"
            },
            { id: 'event_temptation_seoyeon', name: 'Sin vuelta atrás', character: 'Seoyeon', description: 'En la azotea azotada por el viento nocturno, Seoyeon tiende la mano sin vacilar y espera una respuesta', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "Acepta la propuesta de la rival Seoyeon el día 4"
            },
            { id: 'event_temptation_yuna', name: 'Sin lugar donde esconderse', character: 'Yuna', description: 'En el escondite de la vieja biblioteca, Yuna apoya una mano en la estantería y espera una respuesta sin retroceder', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "Acepta la propuesta de la rival Yuna el día 4"
            },
            { id: 'event_temptation_dain', name: 'El gimnasio a oscuras', character: 'Dain', description: 'Tras el entrenamiento, Dain da un paso hacia ti en el gimnasio a oscuras sin una pizca de broma en la mirada', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "Acepta la propuesta de la rival Dain el día 4"
            },
            { id: 'ending_bittersweet_teacher', name: 'La carta devuelta', character: 'Profesora', description: 'Tras la graduación, en un aula vacía, la profesora deja la recomendación y la carta sobre el escritorio y elige despedirse', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "Alcanza el final Bittersweet de la profesora"
            },
            { id: 'ending_bittersweet_nurse', name: 'Consulta cerrada', character: 'Enfermera', description: 'El expediente y la nota de contacto vuelven al escritorio, dejando una última despedida antes de que se cierre la puerta de la enfermería', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "Alcanza el final Bittersweet de la enfermera"
            },
            { id: 'ending_good_teacher', name: 'La despedida de la graduación', character: 'Profesora', description: 'Después de entregar la recomendación y la copia de la crítica el día de la graduación, la profesora despide a los graduados desde la ventana del pasillo', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Alcanza el buen final de la profesora"
            },
            { id: 'ending_good_nurse', name: 'La última revisión', character: 'Enfermera', description: 'El día de la graduación, la enfermera cierra el expediente de orientación y se despide brevemente del graduado', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Alcanza el buen final de la enfermera"
            },
            { id: 'ending_perfect_teacher', name: 'Un ramo bajo los cerezos', character: 'Profesora', description: 'Cuatro años después de la graduación, dos adultos se reencuentran y la autora publicada entrega un ramo de felicitación en la terraza de una cafetería con vista a los cerezos en flor', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Alcanza el final perfecto de la profesora"
            },
            { id: 'ending_perfect_nurse', name: 'Una mañana juntos', character: 'Enfermera', description: 'La mañana que comparten dos adultos que se reencontraron cinco años después de la graduación y siguieron viéndose durante varios meses', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Alcanza el final perfecto de la enfermera"
            }
        ],
        ja: [
            {
                id: 'nurse_home_event1',
                name: 'ジュウォンの家で迎えた朝',
                character: '保健室の先生',
                description: '卒業から5年後に再会し、数か月にわたって週末を共にしてきた二人の大人が迎えた朝',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'ダインの負傷',
                character: 'ダイン',
                description: '体育館で膝を負傷したダイン',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'ダインの涙',
                character: 'ダイン',
                description: '暗い体育館で一人泣いているダイン',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'ソヨンとの約束', character: 'ソヨン', description: '屋上の鉢植えの手入れを終え、開いたままの扉の前で「残りは明日見よう」と次の約束をした瞬間', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "ソヨンのパーフェクトエンドに到達"
            },
            { id: 'ending_perfect_yuna', name: 'ユナの答え', character: 'ユナ', description: '図書館別館の秘密の屋根裏部屋で小説を手渡したユナが、「抱きしめてもいい？」と少し距離を空けたまま返事を待つ瞬間', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "ユナのパーフェクトエンドに到達"
            },
            { id: 'ending_perfect_dain', name: 'ダインの勝利', character: 'ダイン', description: '体育館で「ちょっとだけ、抱きしめてもいい？」と確かめ、傷めた右膝に体重をかけないように抱きしめた瞬間', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "ダインのパーフェクトエンドに到達"
            },
            { id: 'ending_bittersweet', name: '雨の中の別れ', character: null, description: '雨の降る校門で、一人きりで傘を差し、遠ざかる後ろ姿を見つめる', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "ビタースイートエンドに到達"
            },
            { id: 'ending_true_teacher', name: '来週の約束', character: '担任の先生', description: '卒業から4年後に偶然再会し、元担任がカフェで「来週も会う？」と返事を待つ瞬間', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "担任の先生のトゥルーエンドに到達"
            },
            { id: 'ending_true_nurse', name: '安心できる場所', character: '保健室の先生', description: '卒業から4年後に再会し、3か月にわたって会ってきた二人の大人。映画が終わる前にジュウォンが相手の肩にもたれて眠った夜', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "保健室の先生のトゥルーエンドに到達"
            },
            { id: 'ending_harem', name: '食い違う答え', character: null, description: '三人を前に、率直な答えとそれぞれの境界線を確かめた瞬間', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "「食い違う答え」エンドに到達"
            },
            { id: 'ending_alone', name: 'ひとりきりの部屋', character: null, description: '静かな部屋、充電器につないで画面を消したスマートフォン。秒針の音だけが残る', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "ひとりエンドに到達"
            },
            { id: 'ending_friend', name: '俺たちの卒業写真', character: null, description: '卒業式の日、学校の友人たちと撮った集合写真', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "友達エンドに到達"
            },
            { id: 'ending_true_seoyeon', name: 'ソヨンの部屋', character: 'ソヨン', description: 'ソヨンの部屋で二つのカップを挟み、植木鉢の受け皿の下にある折りたたんだメモを見せ、また元に戻した夜', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "ソヨンのトゥルーエンドに到達"
            },
            { id: 'ending_true_yuna', name: '屋上の星', character: 'ユナ', description: '図書館別館の秘密の屋上で三曲目を聴き、ユナがこぶし一つ分の間を空けて「寄りかかってもいい？」と返事を待つ夜', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "ユナのトゥルーエンドに到達"
            },
            { id: 'ending_true_dain', name: 'ダインとの次の約束', character: 'ダイン', description: '病院の予約を入れたダインが、体育館でボールを抱え、肩幅ほどの隙間を空けて「ちょっと寄りかかってもいい？」と返事を待つ瞬間', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "ダインのトゥルーエンドに到達"
            },
            { id: 'ending_good_seoyeon', name: '桜の道を歩く二人', character: 'ソヨン', description: '桜の散る道で歩幅を合わせ、道の向こう側で次の予定の時間と場所を決めた瞬間', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "ソヨンのグッドエンドに到達"
            },
            { id: 'ending_good_yuna', name: '屋上の次のページ', character: 'ユナ', description: '校庭のスピーカーが静まったあとも同じ手すりのそばに残り、新しいページにしおりを挟んだ瞬間', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "ユナのグッドエンドに到達"
            },
            { id: 'ending_good_dain', name: '校門前の挨拶', character: 'ダイン', description: '夕暮れの校門前で、ダインが拳を差し出して答えを待つ瞬間', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "ダインのグッドエンドに到達"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'ソヨンの答え', character: 'ソヨン', description: '夕暮れの公園で最後まで話を聞き、今は応えられないとはっきり伝えるソヨン', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "ソヨンに告白を断られる"
            },
            { id: 'ending_confess_fail_yuna', name: 'ユナの答え', character: 'ユナ', description: '公園の出口まで並んで歩いたあと、その気持ちには応えられないと伝えるユナ', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "ユナに告白を断られる"
            },
            { id: 'ending_confess_fail_dain', name: 'ダインの答え', character: 'ダイン', description: '目元を拭ったあと、友達のままでいたいとはっきり伝えるダイン', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "ダインに告白を断られる"
            },
            { id: 'ending_mayhem', name: '既読のあとの距離', character: null, description: '好きだという言葉だけが残った三つのトークルームと、振り返らずに離れていく三人', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "複数人への告白が発覚する"
            },
            { id: 'event_temptation_seoyeon', name: '戻れない距離', character: 'ソヨン', description: '夜風の吹く屋上で、ソヨンが迷わず手を差し出し、答えを待った瞬間', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "4日目にライバルのソヨンの誘いを受け入れる"
            },
            { id: 'event_temptation_yuna', name: '隠れられない距離', character: 'ユナ', description: '古い図書館の隠れ家で、ユナが本棚に手をつき、一歩も引かずに答えを待った瞬間', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "4日目にライバルのユナの誘いを受け入れる"
            },
            { id: 'event_temptation_dain', name: '消灯後の体育館', character: 'ダイン', description: '練習後の暗い体育館で、ダインが冗談の消えた目のまま一歩近づいた瞬間', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "4日目にライバルのダインの誘いを受け入れる"
            },
            { id: 'ending_bittersweet_teacher', name: '返された手紙', character: '担任の先生', description: '卒業式後の誰もいない教室で、担任の先生が推薦状と手紙を机に戻し、別れを選んだ瞬間', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "担任の先生のBittersweetエンドに到達"
            },
            { id: 'ending_bittersweet_nurse', name: '相談終了', character: '保健室の先生', description: '相談記録と連絡先のメモが机に戻され、保健室の扉が閉じる前に最後の挨拶だけが残った瞬間', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "保健室の先生のBittersweetエンドに到達"
            },
            { id: 'ending_good_teacher', name: '卒業式の別れ', character: '担任の先生', description: '卒業式の日、推薦状の控えと文芸部の合評用冊子を渡し、廊下の窓辺から卒業生を見送る担任の先生', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "担任の先生のグッドエンドに到達"
            },
            { id: 'ending_good_nurse', name: '最後の確認', character: '保健室の先生', description: '卒業式の日、相談記録を終了し、卒業生と軽く挨拶を交わす保健室の先生', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "保健室の先生のグッドエンドに到達"
            },
            { id: 'ending_perfect_teacher', name: '桜を見下ろすテラスの花束', character: '担任の先生', description: '卒業から4年後に再会した二人の大人。桜を見下ろすカフェテラスで、出版を祝う花束を手渡す瞬間', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "担任の先生のパーフェクトエンドに到達"
            },
            { id: 'ending_perfect_nurse', name: '一緒に迎えた朝', character: '保健室の先生', description: '卒業から5年後に再会し、数か月にわたって会う約束を重ねてきた二人の大人が、一緒に迎えた朝', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "保健室の先生のパーフェクトエンドに到達"
            }
        ],
        fr: [
            {
                id: 'nurse_home_event1',
                name: 'Un matin chez Juwon',
                character: 'Infirmière',
                description: 'Le matin partagé par deux adultes qui se sont retrouvés cinq ans après la remise des diplômes et se sont vus le week-end pendant plusieurs mois',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'La blessure de Dain',
                character: 'Dain',
                description: 'Dain se blesse au genou dans le gymnase',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'Les larmes de Dain',
                character: 'Dain',
                description: 'Dain pleure seule dans le gymnase plongé dans le noir',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Une promesse avec Seoyeon', character: 'Seoyeon', description: 'Après avoir rangé ensemble les pots du toit, Seoyeon laisse devant la porte ouverte une promesse pour le lendemain', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Atteindre la fin parfaite de Seoyeon"
            },
            { id: 'ending_perfect_yuna', name: 'La réponse de Yuna', character: 'Yuna', description: 'Après avoir tendu son roman dans l\'annexe de la bibliothèque, Yuna attend la permission en laissant entre eux la largeur d\'une main', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Atteindre la fin parfaite de Yuna"
            },
            { id: 'ending_perfect_dain', name: 'La victoire de Dain', character: 'Dain', description: 'Dans le gymnase, Dain demande d\'abord la permission puis enlace l\'autre sans prendre appui sur son genou blessé', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Atteindre la fin parfaite de Dain"
            },
            { id: 'ending_bittersweet', name: 'Adieu sous la pluie', character: null, description: 'Devant le lycée sous la pluie, rester seul sous un parapluie et regarder une personne s\'éloigner', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Atteindre la fin douce-amère"
            },
            { id: 'ending_true_teacher', name: 'La promesse de la semaine prochaine', character: 'Professeure principale', description: 'Quatre ans après la remise des diplômes, deux adultes se retrouvent par hasard et parlent dans un café de leur prochain rendez-vous', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Atteindre la fin d'amour véritable de la professeure principale"
            },
            { id: 'ending_true_nurse', name: 'Un lieu sûr', character: 'Infirmière', description: 'La soirée où deux adultes, retrouvés quatre ans après la remise des diplômes et se fréquentant depuis trois mois, regardent un film ensemble', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Atteindre la fin d'amour véritable de l'infirmière"
            },
            { id: 'ending_harem', name: 'Des réponses divergentes', character: null, description: 'Le moment où, face aux trois, une réponse sincère est donnée et les limites de chacun deviennent claires', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Atteindre la fin des réponses divergentes"
            },
            { id: 'ending_alone', name: 'La chambre vide', character: null, description: 'Une chambre sombre, un téléphone éteint et, pour seule lumière, les lueurs de la ville derrière la fenêtre', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Atteindre la fin en solitaire"
            },
            { id: 'ending_friend', name: 'Notre photo de remise des diplômes', character: null, description: 'Un selfie à cinq pris dans la salle de classe le jour de la remise des diplômes', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Atteindre la fin de l'amitié"
            },
            { id: 'ending_true_seoyeon', name: 'La chambre de Seoyeon', character: 'Seoyeon', description: 'Une soirée dans la chambre de Seoyeon, avec deux tasses entre eux et une phrase pliée glissée sous la soucoupe d\'un pot', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "Atteindre la fin véritable de Seoyeon"
            },
            { id: 'ending_true_yuna', name: 'Les étoiles sur le toit', character: 'Yuna', description: 'Une nuit assis côte à côte devant la rambarde du toit, à contempler la ville et un croissant de lune', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "Atteindre la fin véritable de Yuna"
            },
            { id: 'ending_true_dain', name: 'La prochaine promesse de Dain', character: 'Dain', description: 'Après avoir pris son rendez-vous à l\'hôpital, Dain laisse entre eux la largeur d\'une épaule dans le gymnase et attend une réponse', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "Atteindre la fin véritable de Dain"
            },
            { id: 'ending_good_seoyeon', name: 'À deux dans le parc', character: 'Seoyeon', description: 'Au crépuscule dans le parc, ils accordent leur pas et choisissent l\'heure et le lieu de leur prochain rendez-vous', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "Atteindre la bonne fin de Seoyeon"
            },
            { id: 'ending_good_yuna', name: 'Le prochain chapitre sur le toit', character: 'Yuna', description: 'Une fois les haut-parleurs de l\'école éteints, ils restent devant la même rambarde et choisissent le prochain marque-page', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "Atteindre la bonne fin de Yuna"
            },
            { id: 'ending_good_dain', name: 'Un salut devant le lycée', character: 'Dain', description: 'Devant le lycée au coucher du soleil, Dain tend le poing et attend une réponse', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "Atteindre la bonne fin de Dain"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'La réponse de Seoyeon', character: 'Seoyeon', description: 'Dans le parc au coucher du soleil, Seoyeon écoute jusqu\'au bout puis répond clairement que ce n\'est pas le bon moment', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Se faire rejeter par Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'La réponse de Yuna', character: 'Yuna', description: 'Après avoir marché côte à côte jusqu\'à la sortie du parc, Yuna dit qu\'elle ne peut pas partager ces sentiments', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Se faire rejeter par Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'La réponse de Dain', character: 'Dain', description: 'Après avoir essuyé ses larmes, Dain dit clairement qu\'elle préfère qu\'ils restent amis', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Se faire rejeter par Dain"
            },
            { id: 'ending_mayhem', name: 'La distance après les messages lus', character: null, description: 'Trois conversations restées sans réponse et trois personnes parties dans des directions différentes', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Faire découvrir son double jeu"
            },
            { id: 'event_temptation_seoyeon', name: 'Plus de retour possible', character: 'Seoyeon', description: 'Sur le toit balayé par le vent nocturne, Seoyeon tend la main sans hésiter et attend une réponse', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "Accepter la proposition de la rivale Seoyeon au jour 4"
            },
            { id: 'event_temptation_yuna', name: 'Nulle part où se cacher', character: 'Yuna', description: 'Dans la cachette de la vieille bibliothèque, Yuna pose une main sur l’étagère et attend une réponse sans reculer', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "Accepter la proposition de la rivale Yuna au jour 4"
            },
            { id: 'event_temptation_dain', name: 'Le gymnase dans le noir', character: 'Dain', description: 'Après l’entraînement, Dain fait un pas de plus dans le gymnase assombri, le regard dénué de toute plaisanterie', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "Accepter la proposition de la rivale Dain au jour 4"
            },
            { id: 'ending_bittersweet_teacher', name: 'La lettre rendue', character: 'Professeure principale', description: 'Après la remise des diplômes, dans une salle vide, la professeure pose la recommandation et la lettre sur le bureau et choisit les adieux', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "Atteindre la fin Bittersweet de la professeure principale"
            },
            { id: 'ending_bittersweet_nurse', name: 'Dossier clos', character: 'Infirmière', description: 'Le dossier de suivi et le mot avec les coordonnées reviennent sur le bureau, laissant un dernier adieu avant que la porte de l’infirmerie ne se ferme', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "Atteindre la fin Bittersweet de l’infirmière"
            },
            { id: 'ending_good_teacher', name: 'Les adieux de la remise des diplômes', character: 'Professeure principale', description: 'Après avoir remis la recommandation et le dossier de critique le jour de la remise des diplômes, la professeure principale salue les diplômés depuis la fenêtre du couloir', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Atteindre la bonne fin de la professeure principale"
            },
            { id: 'ending_good_nurse', name: 'La dernière vérification', character: 'Infirmière', description: 'Le jour de la remise des diplômes, l\'infirmière clôt le dossier de suivi et échange de brefs adieux avec l\'élève diplômé', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Atteindre la bonne fin de l'infirmière"
            },
            { id: 'ending_perfect_teacher', name: 'Un bouquet sous les cerisiers', character: 'Professeure principale', description: 'Quatre ans après la remise des diplômes, deux adultes se retrouvent et l\'autrice désormais publiée offre un bouquet de félicitations sur une terrasse fleurie de cerisiers', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Atteindre la fin parfaite de la professeure principale"
            },
            { id: 'ending_perfect_nurse', name: 'Un matin ensemble', character: 'Infirmière', description: 'Le matin partagé par deux adultes qui se sont retrouvés cinq ans après la remise des diplômes et ont continué à se voir pendant plusieurs mois', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Atteindre la fin parfaite de l'infirmière"
            }
        ],
        de: [
            {
                id: 'nurse_home_event1',
                name: 'Ein Morgen bei Juwon',
                character: 'Schulkrankenschwester',
                description: 'Der gemeinsame Morgen zweier Erwachsener, die sich fünf Jahre nach dem Abschluss wiedersahen und mehrere Monate lang die Wochenenden miteinander verbrachten',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'Dains Verletzung',
                character: 'Dain',
                description: 'Dain verletzt sich das Knie in der Turnhalle',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'Dains Tränen',
                character: 'Dain',
                description: 'Dain weint allein in der abgedunkelten Turnhalle',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Ein Versprechen mit Seoyeon', character: 'Seoyeon', description: 'Nachdem sie gemeinsam die Pflanzentöpfe auf dem Dach geordnet haben, hinterlässt Seoyeon an der offenen Tür ein Versprechen für morgen', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Seoyeons perfektes Ende erreichen"
            },
            { id: 'ending_perfect_yuna', name: 'Yunas Antwort', character: 'Yuna', description: 'Nachdem sie im Bibliotheksanbau ihren Roman überreicht hat, wartet Yuna eine Handbreit entfernt auf Erlaubnis', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Yunas perfektes Ende erreichen"
            },
            { id: 'ending_perfect_dain', name: 'Dains Sieg', character: 'Dain', description: 'In der Turnhalle bittet Dain zuerst um Erlaubnis und umarmt ihr Gegenüber, ohne das verletzte Knie zu belasten', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Dains perfektes Ende erreichen"
            },
            { id: 'ending_bittersweet', name: 'Abschied im Regen', character: null, description: 'Im Regen vor dem Schultor allein unter einem Schirm stehen und einer Gestalt nachblicken, die sich entfernt', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Das bittersüße Ende erreichen"
            },
            { id: 'ending_true_teacher', name: 'Das Versprechen für nächste Woche', character: 'Klassenlehrerin', description: 'Vier Jahre nach dem Abschluss begegnen sich zwei Erwachsene zufällig wieder und sprechen in einem Café über ihr nächstes Treffen', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Das wahre Liebesende der Klassenlehrerin erreichen"
            },
            { id: 'ending_true_nurse', name: 'Ein sicherer Ort', character: 'Schulkrankenschwester', description: 'Der Abend, an dem zwei Erwachsene, die sich vier Jahre nach dem Abschluss wiedersahen und seit drei Monaten treffen, gemeinsam einen Film ansehen', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Das wahre Liebesende der Schulkrankenschwester erreichen"
            },
            { id: 'ending_harem', name: 'Unterschiedliche Antworten', character: null, description: 'Der Moment, in dem vor allen dreien eine ehrliche Antwort gegeben wird und die Grenzen jedes Einzelnen klar werden', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Das Ende „Unterschiedliche Antworten“ erreichen"
            },
            { id: 'ending_alone', name: 'Das leere Zimmer', character: null, description: 'Ein dunkles Zimmer, ein ausgeschaltetes Handy und die Lichter der Stadt vor dem Fenster als einzige Lichtquelle', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Das Allein-Ende erreichen"
            },
            { id: 'ending_friend', name: 'Unser Abschlussfoto', character: null, description: 'Ein Gruppenselfie zu fünft, aufgenommen am Tag der Abschlussfeier im Klassenzimmer', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Das Freundschaftsende erreichen"
            },
            { id: 'ending_true_seoyeon', name: 'Seoyeons Zimmer', character: 'Seoyeon', description: 'Ein Abend in Seoyeons Zimmer, mit zwei Tassen zwischen ihnen und einem gefalteten Satz unter dem Untersetzer eines Blumentopfs', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "Seoyeons wahres Ende erreichen"
            },
            { id: 'ending_true_yuna', name: 'Sterne auf dem Schuldach', character: 'Yuna', description: 'Eine Nacht nebeneinander am Geländer des Schuldachs, mit Blick auf die Stadt und die Mondsichel', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "Yunas wahres Ende erreichen"
            },
            { id: 'ending_true_dain', name: 'Dains nächstes Versprechen', character: 'Dain', description: 'Nach der Terminvereinbarung im Krankenhaus lässt Dain in der Turnhalle eine Schulterbreite Platz und wartet auf eine Antwort', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "Dains wahres Ende erreichen"
            },
            { id: 'ending_good_seoyeon', name: 'Zu zweit im Park', character: 'Seoyeon', description: 'In der Abenddämmerung im Park passen sie ihr Tempo einander an und legen Zeit und Ort des nächsten Treffens fest', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "Seoyeons gutes Ende erreichen"
            },
            { id: 'ending_good_yuna', name: 'Das nächste Kapitel auf dem Dach', character: 'Yuna', description: 'Nachdem die Schullautsprecher verstummt sind, bleiben beide am selben Geländer und wählen das nächste Lesezeichen', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "Yunas gutes Ende erreichen"
            },
            { id: 'ending_good_dain', name: 'Ein Gruß am Schultor', character: 'Dain', description: 'Am Schultor im Abendrot hält Dain ihre Faust hin und wartet auf eine Antwort', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "Dains gutes Ende erreichen"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'Seoyeons Antwort', character: 'Seoyeon', description: 'Im Park bei Sonnenuntergang hört Seoyeon bis zum Ende zu und sagt klar, dass jetzt nicht der richtige Zeitpunkt ist', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Von Seoyeon abgelehnt werden"
            },
            { id: 'ending_confess_fail_yuna', name: 'Yunas Antwort', character: 'Yuna', description: 'Nachdem sie nebeneinander bis zum Parkausgang gegangen sind, sagt Yuna, dass sie diese Gefühle nicht erwidern kann', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Von Yuna abgelehnt werden"
            },
            { id: 'ending_confess_fail_dain', name: 'Dains Antwort', character: 'Dain', description: 'Nachdem sie sich die Augen gewischt hat, sagt Dain deutlich, dass sie Freunde bleiben möchte', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Von Dain abgelehnt werden"
            },
            { id: 'ending_mayhem', name: 'Distanz nach der Lesebestätigung', character: null, description: 'Drei unbeantwortete Chats und drei Menschen, die in verschiedene Richtungen davongehen', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Beim zweigleisigen Dating auffliegen"
            },
            { id: 'event_temptation_seoyeon', name: 'Kein Weg zurück', character: 'Seoyeon', description: 'Auf dem windigen Dach bei Nacht streckt Seoyeon ohne Zögern die Hand aus und wartet auf eine Antwort', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "Am 4. Tag das Angebot der Rivalin Seoyeon annehmen"
            },
            { id: 'event_temptation_yuna', name: 'Kein Versteck mehr', character: 'Yuna', description: 'Im Versteck der alten Bibliothek stützt Yuna eine Hand am Regal ab und wartet, ohne zurückzuweichen', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "Am 4. Tag das Angebot der Rivalin Yuna annehmen"
            },
            { id: 'event_temptation_dain', name: 'Die dunkle Turnhalle', character: 'Dain', description: 'Nach dem Training kommt Dain in der dunklen Turnhalle einen Schritt näher, ohne den üblichen Schalk im Blick', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "Am 4. Tag das Angebot der Rivalin Dain annehmen"
            },
            { id: 'ending_bittersweet_teacher', name: 'Der zurückgegebene Brief', character: 'Klassenlehrerin', description: 'Nach der Abschlussfeier legt die Klassenlehrerin im leeren Klassenzimmer Empfehlung und Brief auf den Tisch zurück und entscheidet sich für den Abschied', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "Das Bittersweet-Ende der Klassenlehrerin erreichen"
            },
            { id: 'ending_bittersweet_nurse', name: 'Akte geschlossen', character: 'Schulkrankenschwester', description: 'Beratungsakte und Kontaktnotiz liegen wieder auf dem Tisch, und vor dem Schließen der Krankenzimmertür bleibt nur ein letzter Abschied', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "Das Bittersweet-Ende der Schulkrankenschwester erreichen"
            },
            { id: 'ending_good_teacher', name: 'Abschied bei der Abschlussfeier', character: 'Klassenlehrerin', description: 'Nachdem sie am Tag der Abschlussfeier die Empfehlung und die Kritikfassung überreicht hat, verabschiedet die Klassenlehrerin die Absolventen am Flurfenster', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Das gute Ende der Klassenlehrerin erreichen"
            },
            { id: 'ending_good_nurse', name: 'Die letzte Kontrolle', character: 'Schulkrankenschwester', description: 'Am Tag der Abschlussfeier schließt die Schulkrankenschwester die Beratungsakte und verabschiedet sich kurz vom Absolventen', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Das gute Ende der Schulkrankenschwester erreichen"
            },
            { id: 'ending_perfect_teacher', name: 'Ein Blumenstrauß unter Kirschblüten', character: 'Klassenlehrerin', description: 'Vier Jahre nach dem Abschluss sehen sich zwei Erwachsene wieder. Die Lehrerin, die inzwischen ein Buch veröffentlicht hat, überreicht auf einer Kirschblütenterrasse einen Glückwunschstrauß', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Das perfekte Ende der Klassenlehrerin erreichen"
            },
            { id: 'ending_perfect_nurse', name: 'Ein gemeinsamer Morgen', character: 'Schulkrankenschwester', description: 'Der gemeinsame Morgen zweier Erwachsener, die sich fünf Jahre nach dem Abschluss wiedersahen und seit mehreren Monaten trafen', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Das perfekte Ende der Schulkrankenschwester erreichen"
            }
        ],
        pt: [
            {
                id: 'nurse_home_event1',
                name: 'Uma manhã na casa de Juwon',
                character: 'Enfermeira',
                description: 'A manhã compartilhada por dois adultos que se reencontraram cinco anos após a formatura e passaram vários meses se vendo nos fins de semana',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'A lesão de Dain',
                character: 'Dain',
                description: 'Dain sofre uma lesão no joelho no ginásio',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'As lágrimas de Dain',
                character: 'Dain',
                description: 'Dain chora sozinha no ginásio escuro',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Uma promessa com Seoyeon', character: 'Seoyeon', description: 'Depois de arrumarem juntos os vasos do terraço, Seoyeon deixa diante da porta aberta uma promessa para o dia seguinte', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Alcance o final perfeito de Seoyeon"
            },
            { id: 'ending_perfect_yuna', name: 'A resposta de Yuna', character: 'Yuna', description: 'Depois de entregar seu romance no anexo da biblioteca, Yuna espera uma resposta a um palmo de distância', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Alcance o final perfeito de Yuna"
            },
            { id: 'ending_perfect_dain', name: 'A vitória de Dain', character: 'Dain', description: 'No ginásio, Dain pede permissão antes de abraçar sem apoiar o peso no joelho machucado', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Alcance o final perfeito de Dain"
            },
            { id: 'ending_bittersweet', name: 'Despedida na chuva', character: null, description: 'Diante da escola sob a chuva, ficar a sós debaixo do guarda-chuva e observar alguém se afastar', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Alcance o final agridoce"
            },
            { id: 'ending_true_teacher', name: 'A promessa da próxima semana', character: 'Professora', description: 'Quatro anos depois da formatura, dois adultos se reencontram por acaso e conversam em um café sobre o próximo encontro', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Alcance o final de amor verdadeiro da professora"
            },
            { id: 'ending_true_nurse', name: 'Um lugar seguro', character: 'Enfermeira', description: 'A noite em que dois adultos, reencontrados quatro anos após a formatura e se vendo há três meses, assistem a um filme juntos', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Alcance o final de amor verdadeiro da enfermeira"
            },
            { id: 'ending_harem', name: 'Respostas desencontradas', character: null, description: 'O momento em que, diante das três, uma resposta sincera é dada e os limites de cada pessoa ficam claros', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Alcance o final das respostas desencontradas"
            },
            { id: 'ending_alone', name: 'O quarto vazio', character: null, description: 'Um quarto escuro, um celular desligado e as luzes da cidade do lado de fora como única iluminação', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Alcance o final sozinho"
            },
            { id: 'ending_friend', name: 'Nossa foto de formatura', character: null, description: 'Uma selfie de cinco pessoas tirada na sala de aula no dia da formatura', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Alcance o final de amizade"
            },
            { id: 'ending_true_seoyeon', name: 'O quarto de Seoyeon', character: 'Seoyeon', description: 'Uma noite no quarto de Seoyeon, com duas xícaras entre os dois e uma frase dobrada sob o prato de um vaso', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "Alcance o final verdadeiro de Seoyeon"
            },
            { id: 'ending_true_yuna', name: 'Estrelas no terraço', character: 'Yuna', description: 'Uma noite sentados lado a lado diante do parapeito do terraço, olhando a cidade e a lua crescente', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "Alcance o final verdadeiro de Yuna"
            },
            { id: 'ending_true_dain', name: 'A próxima promessa de Dain', character: 'Dain', description: 'Depois de marcar a consulta no hospital, Dain deixa entre os dois um espaço da largura de um ombro no ginásio e espera uma resposta', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "Alcance o final verdadeiro de Dain"
            },
            { id: 'ending_good_seoyeon', name: 'Duas pessoas no parque', character: 'Seoyeon', description: 'Ao entardecer no parque, os dois acertam o passo e escolhem o horário e o lugar do próximo encontro', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "Alcance o bom final de Seoyeon"
            },
            { id: 'ending_good_yuna', name: 'O próximo capítulo no terraço', character: 'Yuna', description: 'Depois que os alto-falantes da escola se calam, os dois permanecem diante do mesmo parapeito e escolhem o próximo marcador', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "Alcance o bom final de Yuna"
            },
            { id: 'ending_good_dain', name: 'Um cumprimento no portão da escola', character: 'Dain', description: 'Diante do portão da escola ao entardecer, Dain estende o punho e espera uma resposta', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "Alcance o bom final de Dain"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'A resposta de Seoyeon', character: 'Seoyeon', description: 'No parque ao pôr do sol, Seoyeon escuta até o fim e deixa claro que agora não é o momento', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Ser rejeitado por Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'A resposta de Yuna', character: 'Yuna', description: 'Depois de caminharem lado a lado até a saída do parque, Yuna diz que não pode corresponder a esses sentimentos', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Ser rejeitado por Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'A resposta de Dain', character: 'Dain', description: 'Depois de enxugar os olhos, Dain diz com clareza que quer continuar apenas como amiga', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Ser rejeitado por Dain"
            },
            { id: 'ending_mayhem', name: 'A distância depois do visto', character: null, description: 'Três conversas sem resposta e três pessoas se afastando em direções diferentes', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Deixe que descubram seu jogo duplo"
            },
            { id: 'event_temptation_seoyeon', name: 'Sem volta', character: 'Seoyeon', description: 'No terraço varrido pelo vento noturno, Seoyeon estende a mão sem hesitar e espera uma resposta', file: 'assets/images/background/event_temptation_seoyeon.png', thumbnail: 'assets/images/background/event_temptation_seoyeon.png',
                unlockHint: "Aceite a proposta da rival Seoyeon no dia 4"
            },
            { id: 'event_temptation_yuna', name: 'Sem lugar para se esconder', character: 'Yuna', description: 'No esconderijo da biblioteca antiga, Yuna apoia a mão na estante e espera uma resposta sem recuar', file: 'assets/images/background/event_temptation_yuna.png', thumbnail: 'assets/images/background/event_temptation_yuna.png',
                unlockHint: "Aceite a proposta da rival Yuna no dia 4"
            },
            { id: 'event_temptation_dain', name: 'O ginásio às escuras', character: 'Dain', description: 'Depois do treino, Dain dá um passo à frente no ginásio escuro, sem qualquer brincadeira no olhar', file: 'assets/images/background/event_temptation_dain.png', thumbnail: 'assets/images/background/event_temptation_dain.png',
                unlockHint: "Aceite a proposta da rival Dain no dia 4"
            },
            { id: 'ending_bittersweet_teacher', name: 'A carta devolvida', character: 'Professora', description: 'Depois da formatura, numa sala vazia, a professora deixa a recomendação e a carta sobre a mesa e escolhe se despedir', file: 'assets/images/background/ending_bittersweet_teacher.png', thumbnail: 'assets/images/background/ending_bittersweet_teacher.png',
                unlockHint: "Alcance o final Bittersweet da professora"
            },
            { id: 'ending_bittersweet_nurse', name: 'Atendimento encerrado', character: 'Enfermeira', description: 'O registro e o bilhete com o contato voltam para a mesa, deixando apenas uma última despedida antes de a porta da enfermaria se fechar', file: 'assets/images/background/ending_bittersweet_nurse.png', thumbnail: 'assets/images/background/ending_bittersweet_nurse.png',
                unlockHint: "Alcance o final Bittersweet da enfermeira"
            },
            { id: 'ending_good_teacher', name: 'A despedida da formatura', character: 'Professora', description: 'Depois de entregar a recomendação e a cópia da crítica no dia da formatura, a professora se despede dos formandos junto à janela do corredor', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Alcance o bom final da professora"
            },
            { id: 'ending_good_nurse', name: 'A última verificação', character: 'Enfermeira', description: 'No dia da formatura, a enfermeira encerra o registro de acompanhamento e se despede brevemente do formando', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Alcance o bom final da enfermeira"
            },
            { id: 'ending_perfect_teacher', name: 'Um buquê sob as cerejeiras', character: 'Professora', description: 'Quatro anos depois da formatura, dois adultos se reencontram e a autora já publicada entrega um buquê de parabéns no terraço de um café com vista para as cerejeiras em flor', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Alcance o final perfeito da professora"
            },
            { id: 'ending_perfect_nurse', name: 'Uma manhã juntos', character: 'Enfermeira', description: 'A manhã compartilhada por dois adultos que se reencontraram cinco anos após a formatura e continuaram se vendo por vários meses', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Alcance o final perfeito da enfermeira"
            }
        ]
    };

    // =========================================================================
    // BGM 데이터 (배경음악 목록)
    // =========================================================================
    // 게임에서 사용되는 배경음악 목록
    // 게임 내에서 해당 BGM이 재생되면 자동으로 갤러리에서 해금됨
    //
    // 구조 설명:
    // - id: BGM 고유 식별자 (파일명과 동일하게 설정 권장)
    // - name: BGM 제목
    // - artist: 작곡가/아티스트
    // - duration: 재생 시간
    // - file: 오디오 파일 경로

    static bgm = {
        ko: [
            { id: 'intro', name: '메인 테마', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: '상쾌한 아침', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: '학교 일상', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: '평화로운 오후', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: '노을 지는 하교길', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: '설레는 순간', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: '두근두근 데이트', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: '고요한 밤', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: '비밀스러운 밤', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: '수상한 기운', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: '고백', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: '엔딩 테마', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        en: [
            { id: 'intro', name: 'Main Theme', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Fresh Morning', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Everyday School Life', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Peaceful Afternoon', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'The Walk Home at Sunset', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'A Fluttering Moment', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Heart-Racing Date', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Quiet Night', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Secret Night', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Something in the Air', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confession', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Ending Theme', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        es: [
            { id: 'intro', name: 'Tema principal', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Mañana fresca', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Vida escolar', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Tarde tranquila', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Camino a casa al atardecer', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Un momento de emoción', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Una cita emocionante', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Noche tranquila', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Noche secreta', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Algo extraño en el aire', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confesión', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Tema final', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        ja: [
            { id: 'intro', name: 'メインテーマ', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'さわやかな朝', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: '学校の日常', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: '穏やかな午後', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: '夕焼けの帰り道', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'ときめきの瞬間', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'ドキドキデート', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: '静かな夜', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: '秘密の夜', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: '怪しい気配', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: '告白', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'エンディングテーマ', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        fr: [
            { id: 'intro', name: 'Thème principal', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Matin frais', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Le quotidien au lycée', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Après-midi paisible', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Le chemin du retour au crépuscule', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Un instant d\'émoi', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Un rendez-vous palpitant', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Nuit calme', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Nuit secrète', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Une présence étrange', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Déclaration', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Thème de fin', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        de: [
            { id: 'intro', name: 'Hauptthema', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Frischer Morgen', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Schulalltag', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Friedlicher Nachmittag', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Heimweg im Abendrot', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Ein Moment voller Herzklopfen', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Aufregendes Date', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Ruhige Nacht', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Geheimnisvolle Nacht', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Eine seltsame Vorahnung', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Liebesgeständnis', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Schlussthema', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        pt: [
            { id: 'intro', name: 'Tema principal', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Manhã fresca', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Rotina escolar', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Tarde tranquila', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Volta para casa ao pôr do sol', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Um momento de emoção', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Encontro com o coração acelerado', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Noite tranquila', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Noite secreta', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Algo estranho no ar', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confissão', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Tema de encerramento', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ]
    };

    // =========================================================================
    // 헬퍼 메서드 (Helper Methods)
    // =========================================================================

    /**
     * 특정 캐릭터 데이터 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @param {string} charId - 캐릭터 ID (예: 'seyoun', 'yuna')
     * @returns {Object|null} 캐릭터 데이터 객체 또는 null
     * 
     * @example
     * const char = GalleryData.getCharacter('ko', 'seyoun');
     * console.log(char.name); // '서연'
     */
    static getCharacter(lang, charId) {
        return this.characters[lang]?.[charId] || null;
    }

    /**
     * 모든 캐릭터 목록 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @returns {Object} 해당 언어의 모든 캐릭터 객체
     * 
     * @example
     * const allChars = GalleryData.getAllCharacters('ko');
     * Object.values(allChars).forEach(char => console.log(char.name));
     */
    static getAllCharacters(lang) {
        return this.characters[lang] || {};
    }

    /**
     * 표정 코드를 표시 이름으로 변환
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @param {string} expr - 표정 코드 (예: 'shy', 'angry')
     * @returns {string} 표정 표시 이름 (예: '수줍음', 'Angry')
     * 
     * @example
     * GalleryData.getExpressionName('ko', 'shy'); // '수줍음'
     * GalleryData.getExpressionName('en', 'shy'); // 'Shy'
     */
    static getExpressionName(lang, expr) {
        return this.expressions[lang]?.[expr] || expr;
    }

    /**
     * CG 목록 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @returns {Array} CG 객체 배열
     */
    static getCGList(lang) {
        return this.cg[lang] || [];
    }

    /**
     * 특정 CG 찾기
     * 
     * @param {string} lang - 언어 코드
     * @param {string} cgId - CG ID
     * @returns {Object|null} CG 객체 또는 null
     */
    static getCG(lang, cgId) {
        return this.cg[lang]?.find(cg => cg.id === cgId) || null;
    }

    /**
     * 모든 CG ID 목록 가져오기 (언어 무관)
     * CG 경로에서 ID 추출 시 유효성 검증에 사용
     * 
     * @returns {Set} 모든 CG ID의 Set
     */
    static getAllCGIds() {
        return new Set([
            ...this.cg.ko.map(cg => cg.id),
            ...this.cg.en.map(cg => cg.id),
            ...(this.cg.es || []).map(cg => cg.id),
            ...(this.cg.ja || []).map(cg => cg.id),
            ...(this.cg.fr || []).map(cg => cg.id),
            ...(this.cg.de || []).map(cg => cg.id),
            ...(this.cg.pt || []).map(cg => cg.id)
        ]);
    }

    /**
     * BGM 목록 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @returns {Array} BGM 객체 배열
     */
    static getBGMList(lang) {
        return this.bgm[lang] || [];
    }
}

// 전역 접근을 위해 window에 노출 (다른 스크립트에서 사용 가능)
window.GalleryData = GalleryData;
