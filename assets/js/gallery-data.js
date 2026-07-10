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
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
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
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
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
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
            }
        },

        // ===== 영어 데이터 (English Data) =====
        // 한국어 데이터와 동일한 구조, 영어로 번역된 텍스트
        en: {
            // Seyoun - 완벽한 학생회장 (메가데레)
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'The Perfect Student Council President',
                shortDescription: 'A seemingly flawless student council president who is kind to everyone.',
                description: 'A seemingly flawless student council president who is kind to everyone. She gets lonely more easily than she lets on and turns shy when she is alone with you. She values rules, but sometimes wants to break them for your sake.',
                age: '18 years old',
                birthday: 'March 14',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: 'Music, Reading',
                personality: 'Deeply Affectionate, Shy',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },

            // Yuna - 신비로운 쿨데레 (Kuudere)
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Mysterious Kuudere',
                shortDescription: 'The epitome of a cold, expressionless kuudere.',
                description: 'The epitome of a cold, expressionless kuudere. Shows deep, obsessive interest in your "special light". Known for dropping cryptic remarks that catch you off guard. There\'s something about her that feels protective.',
                age: '18 years old',
                birthday: 'July 22',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: 'Stargazing, Poetry',
                personality: 'Kuudere, Mysterious',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
            },

            // Dain - 햇살 같은 소꿉친구 (Tsundere)
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Sunny Childhood Friend',
                shortDescription: 'A bright and lively tsundere with a caring, motherly side.',
                description: 'A bright and lively tsundere with a caring, motherly side. Treats you like a comfortable friend, but quickly turns red and flustered in romantic moments. Honest about her feelings, but hopeless at putting them into words.',
                age: '18 years old',
                birthday: 'December 25',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: 'Cooking, Sports',
                personality: 'Tsundere, Cheerful',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },

            // Teacher (Ms. Kim) - 의외의 허당 선생님 (Gap Moe)
            teacher: {
                id: 'teacher',
                name: 'Ms. Kim',
                title: 'The Surprisingly Clumsy Teacher',
                shortDescription: 'A consummate professional who keeps school and personal life separate.',
                description: 'A consummate professional who keeps school and personal life separate, though she has an unexpectedly scatterbrained side. She notices right away when you act surprisingly mature. Beneath her composure, she is quietly longing for someone she can lean on, and that contrast is part of her charm.',
                age: '28 years old',
                birthday: 'May 5',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: 'Reading, Movies',
                personality: 'Professional, Clumsy',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
            },

            // Nurse (School Nurse) - 장난꾸러기 보건교사 (Playful)
            nurse: {
                id: 'nurse',
                name: 'School Nurse',
                title: 'The Mischievous School Nurse',
                shortDescription: 'A mature, teasing school nurse.',
                description: 'A mature, teasing school nurse who loves riling you up with provocative jokes, but cares for and protects her students more than anyone. She finds it adorable when you get flustered.',
                age: '26 years old',
                birthday: 'September 12',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: 'Gardening, Meditation',
                personality: 'Playful, Mature',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
            }
        },

        // ===== 스페인어 데이터 (Spanish Data) =====
        es: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'La Presidenta Perfecta',
                shortDescription: 'Una presidenta del consejo estudiantil perfecta y amable con todos.',
                description: 'Una presidenta del consejo estudiantil perfecta y amable con todos. En realidad se siente sola fácilmente y se vuelve muy tímida cuando está a solas contigo. Valora las reglas, pero a veces quiere romperlas por ti.',
                age: '18 años',
                birthday: '14 de marzo',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: 'Música, Lectura',
                personality: 'Megadere, Tímida',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Kuudere Misteriosa',
                shortDescription: 'La esencia de una kuudere fría e inexpresiva.',
                description: 'La esencia de una kuudere fría e inexpresiva. Muestra un interés profundo y obsesivo en tu "luz especial". Conocida por sus comentarios misteriosos y cautivadores. Emana un aura de querer protegerte.',
                age: '18 años',
                birthday: '22 de julio',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: 'Observar estrellas, Poesía',
                personality: 'Kuudere, Misteriosa',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Amiga de la Infancia Radiante',
                shortDescription: 'Una tsundere alegre y vivaz con un lado maternal.',
                description: 'Una tsundere alegre y vivaz con un lado maternal. Te trata como un amigo cercano, pero se sonroja rápidamente en momentos románticos. Honesta con sus sentimientos pero torpe al expresarlos.',
                age: '18 años',
                birthday: '25 de diciembre',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: 'Cocina, Deportes',
                personality: 'Tsundere, Alegre',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Profesora',
                title: 'La Profesora Despistada',
                shortDescription: 'Una profesora profesional que separa el trabajo de la vida personal.',
                description: 'Una profesora profesional que separa el trabajo de la vida personal, pero en realidad tiene un lado despistado. Su corazón se acelera con tus momentos inesperadamente maduros. Tiene un encantador contraste de querer apoyarse en ti secretamente.',
                age: '28 años',
                birthday: '5 de mayo',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: 'Lectura, Películas',
                personality: 'Profesional, Despistada',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Enfermera',
                title: 'Enfermera Juguetona',
                shortDescription: 'Una enfermera escolar madura y juguetona.',
                description: 'Una enfermera escolar madura y juguetona. Disfruta provocándote con palabras atrevidas, pero en realidad cuida y protege a los estudiantes más que nadie. Encuentra adorables tus reacciones avergonzadas.',
                age: '26 años',
                birthday: '12 de septiembre',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: 'Jardinería, Meditación',
                personality: 'Juguetona, Madura',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
            }
        },

        // ===== 일본어 데이터 (Japanese Data) =====
        ja: {
            seyoun: {
                id: 'seyoun',
                name: 'ソヨン',
                title: '完璧な生徒会長',
                shortDescription: '誰にでも優しい完璧な生徒会長。',
                description: '誰にでも優しい完璧な生徒会長。実は寂しがり屋で、二人きりになるととても恥ずかしがる。規則を大切にするが、あなたのためなら時々破りたいと思っている。',
                age: '18歳',
                birthday: '3月14日',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: '音楽鑑賞、読書',
                personality: 'メガデレ、恥ずかしがり',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'ユナ',
                title: '神秘的なクーデレ',
                shortDescription: '無表情で冷たいクーデレの典型。',
                description: '無表情で冷たいクーデレの典型。あなたの「特別な光」に深く執着的な関心を示す。時折放つ神秘的でときめく言葉が特徴。あなたを守ろうとする不思議な雰囲気を漂わせる。',
                age: '18歳',
                birthday: '7月22日',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: '星を見ること、詩を書くこと',
                personality: 'クーデレ、神秘的',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'ダイン',
                title: '太陽のような幼なじみ',
                shortDescription: '明るく活発な世話焼きツンデレ。',
                description: '明るく活発な世話焼きツンデレ。あなたを気軽な友達として接するが、ロマンチックな雰囲気になるとすぐ顔が真っ赤になって慌てる。気持ちに正直だが表現が下手な可愛い魅力がある。',
                age: '18歳',
                birthday: '12月25日',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: '料理、スポーツ',
                personality: 'ツンデレ、活発',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: '担任先生',
                title: '意外とドジな先生',
                shortDescription: '公私をきちんと分ける専門的な教師。',
                description: '公私をきちんと分ける専門的な教師だが、実はドジな一面がある。あなたの予想外に大人びた姿にときめき、密かにあなたに頼りたいと思っているギャップ萌えがある。',
                age: '28歳',
                birthday: '5月5日',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: '読書、映画鑑賞',
                personality: '専門的、ドジ',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: '保健先生',
                title: 'いたずら好きな保健教師',
                shortDescription: '成熟していたずら好きな保健教師。',
                description: '成熟していたずら好きな保健教師。挑発的な言葉であなたをからかうことを楽しむが、実は誰よりも生徒たちを大切に思い守ろうとする。あなたが慌てる姿を可愛いと感じている。',
                age: '26歳',
                birthday: '9月12日',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: '園芸、瞑想',
                personality: 'いたずら好き、成熟',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
            }
        },

        // ===== 프랑스어 데이터 (French Data) =====
        fr: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'La Présidente Parfaite',
                shortDescription: 'Une présidente du conseil étudiant parfaite et bienveillante envers tous.',
                description: 'Une présidente du conseil étudiant parfaite et bienveillante envers tous. En réalité, elle se sent facilement seule et devient très timide lorsqu\'elle est seule avec vous. Elle respecte les règles, mais parfois elle aimerait les enfreindre pour vous.',
                age: '18 ans',
                birthday: '14 mars',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: 'Musique, Lecture',
                personality: 'Mégadere, Timide',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Kuudere Mystérieuse',
                shortDescription: 'L\'incarnation d\'une kuudere froide et inexpressive.',
                description: 'L\'incarnation d\'une kuudere froide et inexpressive. Elle montre un intérêt profond et obsessionnel pour votre « lumière spéciale ». Connue pour ses remarques mystérieuses et enivrantes. Elle dégage une aura de vouloir vous protéger.',
                age: '18 ans',
                birthday: '22 juillet',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: 'Observation des étoiles, Poésie',
                personality: 'Kuudere, Mystérieuse',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Amie d\'Enfance Radieuse',
                shortDescription: 'Une tsundere joyeuse et vive avec un côté maternel.',
                description: 'Une tsundere joyeuse et vive avec un côté maternel. Elle vous traite comme un ami proche, mais rougit rapidement dans les moments romantiques. Honnête avec ses sentiments mais maladroite pour les exprimer.',
                age: '18 ans',
                birthday: '25 décembre',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: 'Cuisine, Sport',
                personality: 'Tsundere, Joyeuse',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Professeure',
                title: 'La Professeure Maladroite',
                shortDescription: 'Une enseignante professionnelle qui sépare travail et vie privée.',
                description: 'Une enseignante professionnelle qui sépare travail et vie privée, mais qui a en réalité un côté maladroit. Son cœur s\'emballe devant vos moments de maturité inattendus. Un contraste charmant de vouloir secrètement s\'appuyer sur vous.',
                age: '28 ans',
                birthday: '5 mai',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: 'Lecture, Cinéma',
                personality: 'Professionnelle, Maladroite',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Infirmière',
                title: 'Infirmière Espiègle',
                shortDescription: 'Une infirmière scolaire mature et espiègle.',
                description: 'Une infirmière scolaire mature et espiègle. Elle aime vous taquiner avec des mots provocateurs, mais en réalité elle prend soin des élèves et les protège plus que quiconque. Elle trouve vos réactions embarrassées adorables.',
                age: '26 ans',
                birthday: '12 septembre',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: 'Jardinage, Méditation',
                personality: 'Espiègle, Mature',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
            }
        },

        // ===== 독일어 데이터 (German Data) =====
        de: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'Die perfekte Präsidentin',
                shortDescription: 'Eine perfekte Schülerratspräsidentin, die zu allen freundlich ist.',
                description: 'Eine perfekte Schülerratspräsidentin, die zu allen freundlich ist. In Wirklichkeit wird sie leicht einsam und wird sehr schüchtern, wenn sie mit dir allein ist. Sie schätzt Regeln, möchte sie aber manchmal für dich brechen.',
                age: '18 Jahre',
                birthday: '14. März',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: 'Musik, Lesen',
                personality: 'Megadere, Schüchtern',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Geheimnisvolle Kuudere',
                shortDescription: 'Der Inbegriff einer kalten, ausdruckslosen Kuudere.',
                description: 'Der Inbegriff einer kalten, ausdruckslosen Kuudere. Zeigt tiefes, obsessives Interesse an deinem „besonderen Licht". Bekannt für gelegentliche geheimnisvolle und herzklopfende Bemerkungen. Strahlt eine Aura aus, dich beschützen zu wollen.',
                age: '18 Jahre',
                birthday: '22. Juli',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: 'Sternbeobachtung, Poesie',
                personality: 'Kuudere, Geheimnisvoll',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Sonnige Sandkastenfreundin',
                shortDescription: 'Eine fröhliche und lebhafte Tsundere mit fürsorglicher Seite.',
                description: 'Eine fröhliche und lebhafte „fürsorgliche" Tsundere. Behandelt dich wie einen engen Freund, wird aber in romantischen Momenten schnell rot und verlegen. Ehrlich mit ihren Gefühlen, aber unbeholfen im Ausdruck.',
                age: '18 Jahre',
                birthday: '25. Dezember',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: 'Kochen, Sport',
                personality: 'Tsundere, Fröhlich',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Frau Lehrerin',
                title: 'Die tollpatschige Lehrerin',
                shortDescription: 'Eine professionelle Lehrerin, die Beruf und Privatleben trennt.',
                description: 'Eine professionelle Lehrerin, die Beruf und Privatleben trennt, aber in Wirklichkeit eine tollpatschige Seite hat. Ihr Herz schlägt schneller bei deinen unerwartet reifen Momenten. Ein charmanter Kontrast – sie möchte sich heimlich auf dich verlassen.',
                age: '28 Jahre',
                birthday: '5. Mai',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: 'Lesen, Filme',
                personality: 'Professionell, Tollpatschig',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Schulkrankenschwester',
                title: 'Verspielte Schulkrankenschwester',
                shortDescription: 'Eine reife und verspielte Schulkrankenschwester.',
                description: 'Eine reife und verspielte Schulkrankenschwester. Neckt dich gerne mit provokanten Worten, kümmert sich aber in Wirklichkeit mehr als jeder andere um die Schüler und beschützt sie. Findet deine verlegenen Reaktionen entzückend.',
                age: '26 Jahre',
                birthday: '12. September',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: 'Gartenarbeit, Meditation',
                personality: 'Verspielt, Reif',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
            }
        },

        // ===== 포르투갈어 데이터 (Brazilian Portuguese Data) =====
        pt: {
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'A Presidenta Perfeita',
                shortDescription: 'Uma presidenta do gremio estudantil perfeita e gentil com todos.',
                description: 'Uma presidenta do gremio estudantil perfeita e gentil com todos. Na verdade, sente-se solitaria facilmente e fica muito timida quando esta a sos com voce. Valoriza as regras, mas as vezes quer quebra-las por voce.',
                age: '18 anos',
                birthday: '14 de marco',
                height: '165cm',
                weight: '52kg',
                bust: '36-23-35 70E',
                hobby: 'Musica, Leitura',
                personality: 'Megadere, Timida',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'flushed', 'bikini']
            },
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Kuudere Misteriosa',
                shortDescription: 'A essencia de uma kuudere fria e inexpressiva.',
                description: 'A essencia de uma kuudere fria e inexpressiva. Mostra um interesse profundo e obsessivo na sua "luz especial". Conhecida por seus comentarios misteriosos e encantadores. Emana uma aura de querer protege-lo.',
                age: '18 anos',
                birthday: '22 de julho',
                height: '162cm',
                weight: '49kg',
                bust: '34-21-34 65E',
                hobby: 'Observar estrelas, Poesia',
                personality: 'Kuudere, Misteriosa',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'bikini']
            },
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Amiga de Infancia Radiante',
                shortDescription: 'Uma tsundere alegre e animada com um lado maternal.',
                description: 'Uma tsundere alegre e animada com um lado maternal. Te trata como um amigo proximo, mas fica vermelha rapidamente em momentos romanticos. Honesta com seus sentimentos mas desajeitada ao expressa-los.',
                age: '18 anos',
                birthday: '25 de dezembro',
                height: '158cm',
                weight: '54kg',
                bust: '37-22-35 65H',
                hobby: 'Culinaria, Esportes',
                personality: 'Tsundere, Alegre',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'flushed', 'bikini']
            },
            teacher: {
                id: 'teacher',
                name: 'Professora',
                title: 'A Professora Desastrada',
                shortDescription: 'Uma professora profissional que separa trabalho e vida pessoal.',
                description: 'Uma professora profissional que separa trabalho e vida pessoal, mas na verdade tem um lado desastrado. Seu coracao dispara com seus momentos inesperadamente maduros. Um contraste encantador de querer secretamente se apoiar em voce.',
                age: '28 anos',
                birthday: '5 de maio',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: 'Leitura, Filmes',
                personality: 'Profissional, Desastrada',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'flushed', 'bikini']
            },
            nurse: {
                id: 'nurse',
                name: 'Enfermeira',
                title: 'Enfermeira Brincalhona',
                shortDescription: 'Uma enfermeira escolar madura e brincalhona.',
                description: 'Uma enfermeira escolar madura e brincalhona. Gosta de te provocar com palavras ousadas, mas na verdade cuida e protege os alunos mais do que ninguem. Acha suas reacoes envergonhadas adoraveis.',
                age: '26 anos',
                birthday: '12 de setembro',
                height: '168cm',
                weight: '60kg',
                bust: '38-24-38 70H',
                hobby: 'Jardinagem, Meditacao',
                personality: 'Brincalhona, Madura',
                expressions: ['normal', 'shy', 'angry', 'flushed', 'bikini']
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
            sweat: 'Nervous',
            flushed: 'Flushed',
            bikini: '???'
        },

        // 스페인어 표정 이름
        es: {
            normal: 'Normal',
            shy: 'Tímida',
            shy2: 'Tímida 2',
            angry: 'Enfadada',
            sad: 'Triste',
            laugh: 'Risa',
            cry: 'Llanto',
            pout: 'Puchero',
            worried: 'Preocupada',
            back: 'Espalda',
            smile: 'Sonrisa',
            bored: 'Aburrida',
            active: 'Activa',
            sweat: 'Nerviosa',
            flushed: 'Sonrojada',
            bikini: '???'
        },

        // 일본어 표정 이름
        ja: {
            normal: '通常',
            shy: '照れ',
            shy2: '照れ2',
            angry: '怒り',
            sad: '悲しみ',
            laugh: '笑い',
            cry: '泣き',
            pout: 'すねる',
            worried: '心配',
            back: '後ろ姿',
            smile: '微笑み',
            bored: '退屈',
            active: '活発',
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
            sweat: 'Nerveuse',
            flushed: 'Troublee',
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
            sweat: 'Nervös',
            flushed: 'Erhitzt',
            bikini: '???'
        },

        // 포르투갈어 표정 이름
        pt: {
            normal: 'Normal',
            shy: 'Timida',
            shy2: 'Timida 2',
            angry: 'Brava',
            sad: 'Triste',
            laugh: 'Riso',
            cry: 'Choro',
            pout: 'Emburrada',
            worried: 'Preocupada',
            back: 'De costas',
            smile: 'Sorriso',
            bored: 'Entediada',
            active: 'Ativa',
            sweat: 'Nervosa',
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
                name: 'Special Moment with the Nurse',
                character: 'School Nurse',
                description: 'A special event at the nurse\'s home',
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
                description: 'Dain crying alone in the dark gym',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Promise with Seoyeon', character: 'Seoyeon', description: 'On the sunset rooftop, Seoyeon holds you close and looks up', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Reach Seoyeon Perfect Ending"
            },
            { id: 'ending_perfect_yuna', name: 'Yuna\'s Warmth', character: 'Yuna', description: 'In the moonlit hideout, Yuna holds you close for the first time', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Reach Yuna Perfect Ending"
            },
            { id: 'ending_perfect_dain', name: 'Dain\'s Victory', character: 'Dain', description: 'In the sunset gym, Dain wraps her arms around you while keeping the weight off her injured knee', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Reach Dain Perfect Ending"
            },
            { id: 'ending_bittersweet', name: 'Farewell in the Rain', character: null, description: 'Standing alone under an umbrella, watching a silhouette fade away', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Reach the Bittersweet Ending"
            },
            { id: 'ending_true_teacher', name: 'Next Week\'s Promise', character: 'Teacher', description: 'Holding hands at a cafe after meeting again as adults and making plans for next week', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Reach Teacher True Love Ending"
            },
            { id: 'ending_true_nurse', name: 'Safe Place', character: 'School Nurse', description: 'She falls asleep on your shoulder on her couch, a quiet night', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Reach Nurse True Love Ending"
            },
            { id: 'ending_harem', name: 'Different Answers', character: null, description: 'Facing all three girls as everyone states their honest answer and boundaries', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Reach the Harem Ending"
            },
            { id: 'ending_alone', name: 'Empty Room', character: null, description: 'A dark room, a dead phone, city lights through the curtain', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Reach the Alone Ending"
            },
            { id: 'ending_friend', name: 'Our Graduation Photo', character: null, description: 'A group selfie in the classroom on graduation day', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Reach the Friend Ending"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'Seoyeon\'s Silence', character: 'Seoyeon', description: 'At the sunset park, Seoyeon quietly adjusts her glasses and looks away', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Get rejected by Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'Yuna\'s Back', character: 'Yuna', description: 'In the dark park, Yuna turns and walks away without a word', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Get rejected by Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'Dain\'s Fake Smile', character: 'Dain', description: 'Dain wipes her tears and waves with a forced grin', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Get rejected by Dain"
            },
            { id: 'ending_mayhem', name: 'Caught', character: null, description: 'Seoyeon\'s ice-cold glare and Dain\'s trembling fists in the hallway', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Get caught two-timing"
            },
            { id: 'ending_good_teacher', name: 'Teacher by the Window', character: 'Teacher', description: 'The homeroom teacher watches students leave from the hallway window', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Reach Teacher Good Ending"
            },
            { id: 'ending_good_nurse', name: 'Nurse\'s Break Time', character: 'School Nurse', description: 'The nurse leans back with coffee and a knowing smirk', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Reach Nurse Good Ending"
            },
            { id: 'ending_perfect_teacher', name: 'Bouquet Under Cherry Blossoms', character: 'Teacher', description: 'After graduation, handing her flowers on a sunset terrace', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Reach Teacher Perfect Ending"
            },
            { id: 'ending_perfect_nurse', name: 'Morning Together', character: 'School Nurse', description: 'After graduation, a warm morning together under the covers', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Reach Nurse Perfect Ending"
            }
        ],
        es: [
            {
                id: 'nurse_home_event1',
                name: 'Momento especial con la Enfermera',
                character: 'Enfermera',
                description: 'Un evento especial en la casa de la enfermera',
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
                description: 'Dain llorando sola en el gimnasio oscuro',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Promesa con Seoyeon', character: 'Seoyeon', description: 'En la azotea al atardecer, Seoyeon se abraza a ti y te mira', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Alcanza el Final Perfecto de Seoyeon"
            },
            { id: 'ending_perfect_yuna', name: 'La calidez de Yuna', character: 'Yuna', description: 'En el escondite bajo la luz de la luna, Yuna se abraza a ti por primera vez', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Alcanza el Final Perfecto de Yuna"
            },
            { id: 'ending_perfect_dain', name: 'La victoria de Dain', character: 'Dain', description: 'En el gimnasio al atardecer, Dain te abraza sin cargar peso sobre la rodilla lesionada', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Alcanza el Final Perfecto de Dain"
            },
            { id: 'ending_bittersweet', name: 'Despedida bajo la lluvia', character: null, description: 'Solo bajo un paraguas, viendo una silueta desaparecer', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Alcanza el Final Agridulce"
            },
            { id: 'ending_true_teacher', name: 'La promesa de la próxima semana', character: 'Profesora', description: 'Tomarse de la mano en un café tras reencontrarse como adultos y acordar la próxima cita', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Alcanza Final Amor Verdadero"
            },
            { id: 'ending_true_nurse', name: 'Lugar seguro', character: 'Enfermera', description: 'Ella se duerme en tu hombro en su sofá', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Alcanza Final Amor Verdadero"
            },
            { id: 'ending_harem', name: 'Respuestas distintas', character: null, description: 'Frente a las tres chicas, cada persona deja clara su respuesta y sus límites', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Alcanza el Final Haren"
            },
            { id: 'ending_alone', name: 'Habitación vacía', character: null, description: 'Una habitación oscura, un teléfono apagado', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Alcanza el Final Solo"
            },
            { id: 'ending_friend', name: 'Nuestra foto de graduación', character: null, description: 'Un selfie grupal el día de la graduación', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Alcanza el Final de Amistad"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'El silencio de Seoyeon', character: 'Seoyeon', description: 'En el parque al atardecer, Seoyeon se ajusta las gafas y mira hacia otro lado', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Ser rechazado por Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'La espalda de Yuna', character: 'Yuna', description: 'En el parque oscuro, Yuna se da la vuelta y se va sin decir nada', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Ser rechazado por Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'La sonrisa falsa de Dain', character: 'Dain', description: 'Dain se seca las lágrimas y saluda con una sonrisa forzada', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Ser rechazado por Dain"
            },
            { id: 'ending_mayhem', name: 'Atrapado', character: null, description: 'La mirada gélida de Seoyeon y los puños temblorosos de Dain', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Ser descubierto"
            },
            { id: 'ending_good_teacher', name: 'La profesora en la ventana', character: 'Profesora', description: 'La profesora observa a los alumnos irse desde la ventana', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Alcanza el Buen Final"
            },
            { id: 'ending_good_nurse', name: 'El relax de la enfermera', character: 'Enfermera', description: 'La enfermera se recuesta con café y una sonrisa cómplice', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Alcanza el Buen Final"
            },
            { id: 'ending_perfect_teacher', name: 'Ramo bajo los cerezos', character: 'Profesora', description: 'Después de graduarse, entregándole flores en una terraza', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Alcanza el Final Perfecto"
            },
            { id: 'ending_perfect_nurse', name: 'Mañana juntos', character: 'Enfermera', description: 'Después de graduarse, una mañana cálida juntos', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Alcanza el Final Perfecto"
            }
        ],
        ja: [
            {
                id: 'nurse_home_event1',
                name: '保健先生との特別な出会い',
                character: '保健先生',
                description: '保健先生の家で起きた特別なイベント',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'ダインの怪我',
                character: 'ダイン',
                description: '体育館で膝を怪我したダイン',
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
            { id: 'ending_perfect_seoyeon', name: 'ソヨンとの約束', character: 'ソヨン', description: '夕焼けの屋上で、ソヨンが胸に飛び込んで見上げる瞬間', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "ソヨンのパーフェクトエンディングに到達"
            },
            { id: 'ending_perfect_yuna', name: 'ユナの温もり', character: 'ユナ', description: '月明かりの隠れ家で、ユナが初めて胸に飛び込んだ夜', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "ユナのパーフェクトエンディングに到達"
            },
            { id: 'ending_perfect_dain', name: 'ダインの勝利', character: 'ダイン', description: '夕暮れの体育館で、ダインが痛めた膝に体重をかけずに抱きついた瞬間', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "ダインのパーフェクトエンディングに到達"
            },
            { id: 'ending_bittersweet', name: '雨の中の別れ', character: null, description: '傘の下で一人、遠ざかる影を見つめる', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "ビタースイートエンディングに到達"
            },
            { id: 'ending_true_teacher', name: '来週の約束', character: '担任先生', description: '大人になって再会したカフェで手を取り、次の約束を決めた瞬間', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "担任トゥルーラブエンディングに到達"
            },
            { id: 'ending_true_nurse', name: '安全な場所', character: '保健先生', description: '保健先生の家のソファで、肩にもたれて眠った静かな夜', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "保健先生トゥルーラブに到達"
            },
            { id: 'ending_harem', name: 'すれ違う答え', character: null, description: '三人を前に、それぞれが本音と境界線を確かめた瞬間', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "ハーレムエンディングに到達"
            },
            { id: 'ending_alone', name: '一人きりの部屋', character: null, description: '暗い部屋、消えたスマホ、カーテン越しの街の灯り', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "一人エンディングに到達"
            },
            { id: 'ending_friend', name: '僕たちの卒業写真', character: null, description: '卒業式の日、教室で撮った五人の集合セルフィー', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "友達エンディングに到達"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'ソヨンの沈黙', character: 'ソヨン', description: '夕暮れの公園で、ソヨンは静かに眼鏡を直して目をそらす', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "ソヨンに告白を断られる"
            },
            { id: 'ending_confess_fail_yuna', name: 'ユナの背中', character: 'ユナ', description: '暗い公園で、ユナは一言もなく振り向いて去っていく', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "ユナに告白を断られる"
            },
            { id: 'ending_confess_fail_dain', name: 'ダインの作り笑い', character: 'ダイン', description: 'ダインは涙を拭きながら無理に笑って手を振る', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "ダインに告白を断られる"
            },
            { id: 'ending_mayhem', name: 'バレた瞬間', character: null, description: 'ソヨンの氷のような視線とダインの震える拳', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "二股がバレる"
            },
            { id: 'ending_good_teacher', name: '窓辺の先生', character: '担任先生', description: '担任の先生が廊下の窓から生徒たちを見送る', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "担任グッドエンディングに到達"
            },
            { id: 'ending_good_nurse', name: '保健室のひととき', character: '保健先生', description: '保健先生がコーヒーを片手に意味深な笑みを浮かべる', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "保健先生グッドエンディングに到達"
            },
            { id: 'ending_perfect_teacher', name: '桜の下の花束', character: '担任先生', description: '卒業後、夕日のテラスで花束を渡す瞬間', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "担任パーフェクトエンディングに到達"
            },
            { id: 'ending_perfect_nurse', name: '二人の朝', character: '保健先生', description: '卒業後、朝日の中で布団の下の二人きりの時間', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "保健先生パーフェクトエンディングに到達"
            }
        ],
        fr: [
            {
                id: 'nurse_home_event1',
                name: 'Moment spécial avec l\'Infirmière',
                character: 'Infirmière',
                description: 'Un événement spécial chez l\'infirmière',
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
                description: 'Dain pleurant seule dans le gymnase sombre',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Promesse avec Seoyeon', character: 'Seoyeon', description: 'Sur le toit au coucher du soleil, Seoyeon se blottit contre toi et lève les yeux', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Atteindre la fin parfaite de Seoyeon"
            },
            { id: 'ending_perfect_yuna', name: 'La chaleur de Yuna', character: 'Yuna', description: 'Dans le repaire au clair de lune, Yuna se blottit contre toi pour la première fois', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Atteindre la fin parfaite de Yuna"
            },
            { id: 'ending_perfect_dain', name: 'La victoire de Dain', character: 'Dain', description: 'Dans le gymnase au coucher du soleil, Dain t\'enlace sans appuyer sur son genou blessé', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Atteindre la fin parfaite de Dain"
            },
            { id: 'ending_bittersweet', name: 'Adieu sous la pluie', character: null, description: 'Seul sous un parapluie, regardant une silhouette s\'éloigner', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Atteindre la fin douce-amere"
            },
            { id: 'ending_true_teacher', name: 'La promesse de la semaine prochaine', character: 'Professeure', description: 'Se tenir la main au café après s\'être retrouvés adultes et fixer le prochain rendez-vous', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Atteindre fin amour vrai"
            },
            { id: 'ending_true_nurse', name: 'Lieu sûr', character: 'Infirmière', description: 'Elle s\'endort sur ton épaule sur son canapé', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Atteindre fin amour vrai"
            },
            { id: 'ending_harem', name: 'Des réponses différentes', character: null, description: 'Face aux trois filles, chacun exprime franchement sa réponse et ses limites', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Atteindre la fin harem"
            },
            { id: 'ending_alone', name: 'Chambre vide', character: null, description: 'Une chambre sombre, un téléphone éteint', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Atteindre la fin solitaire"
            },
            { id: 'ending_friend', name: 'Notre photo de fin d\'année', character: null, description: 'Un selfie de groupe le jour de la remise des diplômes', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Atteindre la fin amicale"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'Le silence de Seoyeon', character: 'Seoyeon', description: 'Au parc au coucher du soleil, Seoyeon ajuste ses lunettes et détourne le regard', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Se faire rejeter par Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'Le dos de Yuna', character: 'Yuna', description: 'Dans le parc sombre, Yuna se retourne et part sans un mot', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Se faire rejeter par Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'Le faux sourire de Dain', character: 'Dain', description: 'Dain essuie ses larmes et fait un signe de la main avec un sourire forcé', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Se faire rejeter par Dain"
            },
            { id: 'ending_mayhem', name: 'Pris en flagrant délit', character: null, description: 'Le regard glacial de Seoyeon et les poings tremblants de Dain', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Se faire prendre"
            },
            { id: 'ending_good_teacher', name: 'La professeure à la fenêtre', character: 'Professeure', description: 'La professeure regarde les élèves partir depuis la fenêtre', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Atteindre la bonne fin"
            },
            { id: 'ending_good_nurse', name: 'La détente de l\'infirmière', character: 'Infirmière', description: 'L\'infirmière se détend avec un café et un sourire complice', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Atteindre la bonne fin"
            },
            { id: 'ending_perfect_teacher', name: 'Bouquet sous les cerisiers', character: 'Professeure', description: 'Après le diplôme, lui offrant des fleurs sur une terrasse', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Atteindre la fin parfaite"
            },
            { id: 'ending_perfect_nurse', name: 'Matin ensemble', character: 'Infirmière', description: 'Après le diplôme, un matin chaleureux ensemble', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Atteindre la fin parfaite"
            }
        ],
        de: [
            {
                id: 'nurse_home_event1',
                name: 'Besonderer Moment mit der Krankenschwester',
                character: 'Schulkrankenschwester',
                description: 'Ein besonderes Ereignis im Zuhause der Krankenschwester',
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
                description: 'Dain weint allein in der dunklen Turnhalle',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Versprechen mit Seoyeon', character: 'Seoyeon', description: 'Auf dem Dach bei Sonnenuntergang, Seoyeon schmiegt sich an dich und blickt auf', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Erreiche Seoyeons perfektes Ende"
            },
            { id: 'ending_perfect_yuna', name: 'Yunas Wärme', character: 'Yuna', description: 'Im mondbeleuchteten Versteck schmiegt sich Yuna zum ersten Mal an dich', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Erreiche Yunas perfektes Ende"
            },
            { id: 'ending_perfect_dain', name: 'Dains Sieg', character: 'Dain', description: 'In der Turnhalle bei Sonnenuntergang umarmt Dain dich, ohne ihr verletztes Knie zu belasten', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Erreiche Dains perfektes Ende"
            },
            { id: 'ending_bittersweet', name: 'Abschied im Regen', character: null, description: 'Allein unter einem Regenschirm, eine Silhouette verschwindet', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Erreiche das bittersuesze Ende"
            },
            { id: 'ending_true_teacher', name: 'Das Versprechen für nächste Woche', character: 'Lehrerin', description: 'Nach dem Wiedersehen als Erwachsene halten sie im Café Händchen und verabreden sich erneut', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Erreiche das wahre Liebesende"
            },
            { id: 'ending_true_nurse', name: 'Sicherer Ort', character: 'Schulkrankenschwester', description: 'Sie schläft auf deiner Schulter auf ihrem Sofa ein', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Erreiche das wahre Liebesende"
            },
            { id: 'ending_harem', name: 'Unterschiedliche Antworten', character: null, description: 'Vor allen drei Mädchen spricht jeder offen aus, was er will und wo seine Grenzen liegen', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Erreiche das Harem-Ende"
            },
            { id: 'ending_alone', name: 'Leeres Zimmer', character: null, description: 'Ein dunkles Zimmer, ein totes Handy', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Erreiche das Allein-Ende"
            },
            { id: 'ending_friend', name: 'Unser Abschlussfoto', character: null, description: 'Ein Gruppenselfie am Abschlusstag', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Erreiche das Freundschafts-Ende"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'Seoyeons Schweigen', character: 'Seoyeon', description: 'Im Park bei Sonnenuntergang richtet Seoyeon ihre Brille und schaut weg', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Von Seoyeon abgelehnt werden"
            },
            { id: 'ending_confess_fail_yuna', name: 'Yunas Rücken', character: 'Yuna', description: 'Im dunklen Park dreht sich Yuna um und geht wortlos', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Von Yuna abgelehnt werden"
            },
            { id: 'ending_confess_fail_dain', name: 'Dains falsches Lächeln', character: 'Dain', description: 'Dain wischt sich die Tränen ab und winkt mit einem erzwungenen Grinsen', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Von Dain abgelehnt werden"
            },
            { id: 'ending_mayhem', name: 'Erwischt', character: null, description: 'Seoyeons eiskalter Blick und Dains zitternde Fäuste', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Erwischt werden"
            },
            { id: 'ending_good_teacher', name: 'Die Lehrerin am Fenster', character: 'Lehrerin', description: 'Die Lehrerin beobachtet die Schüler vom Flurfenster aus', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Erreiche das gute Ende"
            },
            { id: 'ending_good_nurse', name: 'Die Muße der Krankenschwester', character: 'Schulkrankenschwester', description: 'Die Krankenschwester lehnt sich mit Kaffee zurück und lächelt wissend', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Erreiche das gute Ende"
            },
            { id: 'ending_perfect_teacher', name: 'Blumenstrauß unter Kirschblüten', character: 'Lehrerin', description: 'Nach dem Abschluss, Blumen auf einer Terrasse überreichend', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Erreiche das perfekte Ende"
            },
            { id: 'ending_perfect_nurse', name: 'Morgen zusammen', character: 'Schulkrankenschwester', description: 'Nach dem Abschluss, ein warmer Morgen zu zweit', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Erreiche das perfekte Ende"
            }
        ],
        pt: [
            {
                id: 'nurse_home_event1',
                name: 'Momento especial com a Enfermeira',
                character: 'Enfermeira',
                description: 'Um evento especial na casa da enfermeira',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            },
            {
                id: 'dain_hurt_event1',
                name: 'Lesao da Dain',
                character: 'Dain',
                description: 'Dain sofre uma lesao no joelho no ginasio',
                file: 'assets/images/background/dain_hurt_event1.png',
                thumbnail: 'assets/images/background/dain_hurt_event1.png'
            },
            {
                id: 'dain_depression_event1',
                name: 'As lagrimas da Dain',
                character: 'Dain',
                description: 'Dain chorando sozinha no ginasio escuro',
                file: 'assets/images/background/dain_depression_event1.png',
                thumbnail: 'assets/images/background/dain_depression_event1.png'
            },
            { id: 'ending_perfect_seoyeon', name: 'Promessa com Seoyeon', character: 'Seoyeon', description: 'No terraço ao por do sol, Seoyeon se aconchega em voce e olha pra cima', file: 'assets/images/background/ending_perfect_seoyeon.png', thumbnail: 'assets/images/background/ending_perfect_seoyeon.png',
                unlockHint: "Alcancar o Final Perfeito da Seoyeon"
            },
            { id: 'ending_perfect_yuna', name: 'O calor da Yuna', character: 'Yuna', description: 'No esconderijo ao luar, Yuna se aconchega em voce pela primeira vez', file: 'assets/images/background/ending_perfect_yuna.png', thumbnail: 'assets/images/background/ending_perfect_yuna.png',
                unlockHint: "Alcancar o Final Perfeito da Yuna"
            },
            { id: 'ending_perfect_dain', name: 'A vitória da Dain', character: 'Dain', description: 'No ginásio ao pôr do sol, Dain te abraça sem apoiar o peso no joelho machucado', file: 'assets/images/background/ending_perfect_dain.png', thumbnail: 'assets/images/background/ending_perfect_dain.png',
                unlockHint: "Alcancar o Final Perfeito da Dain"
            },
            { id: 'ending_bittersweet', name: 'Despedida na chuva', character: null, description: 'Sozinho debaixo de um guarda-chuva, vendo uma silhueta desaparecer', file: 'assets/images/background/ending_bittersweet.png', thumbnail: 'assets/images/background/ending_bittersweet.png',
                unlockHint: "Alcancar o Final Agridoce"
            },
            { id: 'ending_true_teacher', name: 'A promessa da próxima semana', character: 'Professora', description: 'De mãos dadas no café após se reencontrarem como adultos e marcarem o próximo encontro', file: 'assets/images/background/ending_true_teacher.png', thumbnail: 'assets/images/background/ending_true_teacher.png',
                unlockHint: "Alcancar Final Amor Verdadeiro"
            },
            { id: 'ending_true_nurse', name: 'Lugar seguro', character: 'Enfermeira', description: 'Ela adormece no seu ombro no sofa, uma noite tranquila', file: 'assets/images/background/ending_true_nurse.png', thumbnail: 'assets/images/background/ending_true_nurse.png',
                unlockHint: "Alcancar Final Amor Verdadeiro"
            },
            { id: 'ending_harem', name: 'Respostas diferentes', character: null, description: 'Diante das três garotas, cada um deixa clara sua resposta e seus limites', file: 'assets/images/background/ending_harem.png', thumbnail: 'assets/images/background/ending_harem.png',
                unlockHint: "Alcancar o Final Harem"
            },
            { id: 'ending_alone', name: 'Quarto vazio', character: null, description: 'Um quarto escuro, um celular desligado, luzes da cidade pela cortina', file: 'assets/images/background/ending_alone.png', thumbnail: 'assets/images/background/ending_alone.png',
                unlockHint: "Alcancar o Final Sozinho"
            },
            { id: 'ending_friend', name: 'Nossa foto de formatura', character: null, description: 'Uma selfie em grupo na sala de aula no dia da formatura', file: 'assets/images/background/ending_friend.png', thumbnail: 'assets/images/background/ending_friend.png',
                unlockHint: "Alcancar o Final de Amizade"
            },
            { id: 'ending_confess_fail_seoyeon', name: 'O silencio da Seoyeon', character: 'Seoyeon', description: 'No parque ao por do sol, Seoyeon ajusta os oculos e desvia o olhar', file: 'assets/images/background/ending_confess_fail_seoyeon.png', thumbnail: 'assets/images/background/ending_confess_fail_seoyeon.png',
                unlockHint: "Ser rejeitado pela Seoyeon"
            },
            { id: 'ending_confess_fail_yuna', name: 'As costas da Yuna', character: 'Yuna', description: 'No parque escuro, Yuna se vira e vai embora sem dizer nada', file: 'assets/images/background/ending_confess_fail_yuna.png', thumbnail: 'assets/images/background/ending_confess_fail_yuna.png',
                unlockHint: "Ser rejeitado pela Yuna"
            },
            { id: 'ending_confess_fail_dain', name: 'O sorriso falso da Dain', character: 'Dain', description: 'Dain enxuga as lagrimas e acena com um sorriso forcado', file: 'assets/images/background/ending_confess_fail_dain.png', thumbnail: 'assets/images/background/ending_confess_fail_dain.png',
                unlockHint: "Ser rejeitado pela Dain"
            },
            { id: 'ending_mayhem', name: 'Pego em flagrante', character: null, description: 'O olhar gelado da Seoyeon e os punhos tremendo da Dain no corredor', file: 'assets/images/background/ending_mayhem.png', thumbnail: 'assets/images/background/ending_mayhem.png',
                unlockHint: "Ser pego traindo"
            },
            { id: 'ending_good_teacher', name: 'A professora na janela', character: 'Professora', description: 'A professora observa os alunos indo embora pela janela do corredor', file: 'assets/images/background/ending_good_teacher.png', thumbnail: 'assets/images/background/ending_good_teacher.png',
                unlockHint: "Alcancar o Bom Final"
            },
            { id: 'ending_good_nurse', name: 'O descanso da enfermeira', character: 'Enfermeira', description: 'A enfermeira se reclina com cafe e um sorriso sabido', file: 'assets/images/background/ending_good_nurse.png', thumbnail: 'assets/images/background/ending_good_nurse.png',
                unlockHint: "Alcancar o Bom Final"
            },
            { id: 'ending_perfect_teacher', name: 'Buque sob as cerejeiras', character: 'Professora', description: 'Apos a formatura, entregando flores em um terraco ao por do sol', file: 'assets/images/background/ending_perfect_teacher.png', thumbnail: 'assets/images/background/ending_perfect_teacher.png',
                unlockHint: "Alcancar o Final Perfeito"
            },
            { id: 'ending_perfect_nurse', name: 'Manha juntos', character: 'Enfermeira', description: 'Apos a formatura, uma manha quentinha juntos debaixo das cobertas', file: 'assets/images/background/ending_perfect_nurse.png', thumbnail: 'assets/images/background/ending_perfect_nurse.png',
                unlockHint: "Alcancar o Final Perfeito"
            },
            { id: 'ending_true_seoyeon', name: 'Quarto da Seoyeon', character: 'Seoyeon', description: 'No quarto da Seoyeon, sentados lado a lado, maos quase se tocando na noite', file: 'assets/images/background/ending_true_seoyeon.png', thumbnail: 'assets/images/background/ending_true_seoyeon.png',
                unlockHint: "Alcancar o Final Verdadeiro da Seoyeon"
            },
            { id: 'ending_true_yuna', name: 'Estrela no terraco', character: 'Yuna', description: 'Sentados lado a lado no parapeito do terraco, olhando a paisagem noturna e a lua crescente', file: 'assets/images/background/ending_true_yuna.png', thumbnail: 'assets/images/background/ending_true_yuna.png',
                unlockHint: "Alcancar o Final Verdadeiro da Yuna"
            },
            { id: 'ending_true_dain', name: 'A soneca da Dain', character: 'Dain', description: 'Encostada na parede do ginasio, Dain adormeceu no seu ombro, ficando bem quieto para nao acorda-la', file: 'assets/images/background/ending_true_dain.png', thumbnail: 'assets/images/background/ending_true_dain.png',
                unlockHint: "Alcancar o Final Verdadeiro da Dain"
            },
            { id: 'ending_good_seoyeon', name: 'Duas pessoas no parque', character: 'Seoyeon', description: 'Duas pessoas caminhando lado a lado no parque ao entardecer, maos quase se tocando', file: 'assets/images/background/ending_good_seoyeon.png', thumbnail: 'assets/images/background/ending_good_seoyeon.png',
                unlockHint: "Alcancar o Bom Final da Seoyeon"
            },
            { id: 'ending_good_yuna', name: 'Silencio no terraco', character: 'Yuna', description: 'Duas pessoas sentadas lado a lado no terraco escuro olhando o ceu', file: 'assets/images/background/ending_good_yuna.png', thumbnail: 'assets/images/background/ending_good_yuna.png',
                unlockHint: "Alcancar o Bom Final da Yuna"
            },
            { id: 'ending_good_dain', name: 'Cumprimento no portão', character: 'Dain', description: 'Dain encosta o punho no seu diante do portão ao entardecer, e os dois começam a caminhar juntos', file: 'assets/images/background/ending_good_dain.png', thumbnail: 'assets/images/background/ending_good_dain.png',
                unlockHint: "Alcancar o Bom Final da Dain"
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
            { id: 'daily', name: 'School Days', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Peaceful Afternoon', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Sunset Walk Home', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Romantic Moment', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Butterflies', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Quiet Night', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Secret Night', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Something\'s Off', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confession', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Ending Theme', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        es: [
            { id: 'intro', name: 'Tema Principal', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Mañana Fresca', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Días de Escuela', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Tarde Tranquila', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Camino al Atardecer', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Momento Romántico', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Cita Emocionante', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Noche Tranquila', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Noche Secreta', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Aura Sospechosa', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confesión', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Tema Final', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
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
            { id: 'intro', name: 'Thème Principal', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Matin Frais', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Jours d\'École', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Après-midi Paisible', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Promenade au Coucher du Soleil', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Moment Romantique', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Rendez-vous Palpitant', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Nuit Tranquille', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Nuit Secrète', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Aura Suspecte', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confession', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Thème de Fin', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        de: [
            { id: 'intro', name: 'Hauptthema', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Frischer Morgen', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Schulalltag', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Friedlicher Nachmittag', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Heimweg im Sonnenuntergang', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Romantischer Moment', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Herzklopfen-Date', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Stille Nacht', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Geheimnisvolle Nacht', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Verdächtige Aura', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Liebesgeständnis', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Abschlussthema', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        pt: [
            { id: 'intro', name: 'Tema Principal', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Manha Fresca', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'Dias de Escola', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Tarde Tranquila', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Caminho do Por do Sol', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Momento Romantico', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Encontro Emocionante', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Noite Tranquila', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Noite Secreta', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Aura Suspeita', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confissao', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Tema Final', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
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
