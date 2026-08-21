/**
 * ============================================================================
 * GalleryFreeTalk - 갤러리 엔딩 후 프리토킹 시스템
 * ============================================================================
 *
 * PERFECT 엔딩 + 최대 호감도 + 프리토킹 30회 달성 시 갤러리에서 캐릭터와 무한 대화 가능.
 * 게임 내 프리토킹과 동일한 VN 스타일 UI (배경 + 캐릭터 + 대사창 + 입력창).
 * 턴 제한 없이 무한 대화 가능.
 *
 * 의존성:
 *   - config.js (API_ENDPOINT) — gallery-loader에서 로드됨
 *   - gallery-data.js (GalleryData)
 *   - gallery-progress.js (GalleryProgress)
 *
 * window 노출:
 *   - window.GalleryFreeTalk
 */

const GALLERY_FREETALK_PROMPT_VERSION = '2.7.65';
window.GALLERY_FREETALK_PROMPT_VERSION = GALLERY_FREETALK_PROMPT_VERSION;

const GalleryFreeTalkCore = window.CupidFreeTalkCore;
if (!GalleryFreeTalkCore) {
    throw new Error('CupidFreeTalkCore must be loaded before GalleryFreeTalk');
}

function buildGalleryThirdPersonAdultCameraRule(lang = 'ko') {
    if (typeof window.buildCupidThirdPersonAdultCameraRule !== 'function') {
        throw new Error('buildCupidThirdPersonAdultCameraRule must be loaded before GalleryFreeTalk');
    }
    return window.buildCupidThirdPersonAdultCameraRule(lang);
}

function getGalleryCharacterAdultIntimacy(charId, lang = 'ko') {
    if (typeof window.getCupidCharacterAdultIntimacy !== 'function') {
        throw new Error('getCupidCharacterAdultIntimacy must be loaded before GalleryFreeTalk');
    }
    return window.getCupidCharacterAdultIntimacy(charId, charId, lang, 'gallery');
}

const normalizeGalleryPromptBlockForCache = GalleryFreeTalkCore.normalizePromptBlockForCache;
const GALLERY_AI_FAILOVER_HTTP_STATUSES = GalleryFreeTalkCore.FAILOVER_HTTP_STATUSES;
const GALLERY_AI_RETRY_HTTP_STATUSES = GalleryFreeTalkCore.RETRY_HTTP_STATUSES;
const shouldFailOverGalleryAiResponse = GalleryFreeTalkCore.shouldFailOverAiResponse;
const shouldRetryGalleryAiResponse = GalleryFreeTalkCore.shouldRetryAiResponse;
const appendGalleryFreeTalkDynamicContext = GalleryFreeTalkCore.appendDynamicContext;
const getGalleryFreeTalkStablePromptHash = GalleryFreeTalkCore.getStablePromptHash;
const getGalleryFreeTalkStablePromptFingerprint = GalleryFreeTalkCore.getStablePromptFingerprint;
const encodeGalleryFreeTalkCacheKeyPart = GalleryFreeTalkCore.encodeCacheKeyPart;
const keepGalleryFreeTalkRuntimeBoundary = GalleryFreeTalkCore.keepRuntimeBoundary;

const buildGalleryLatestUserCanonBlock = GalleryFreeTalkCore.buildLatestUserCanonBlock;
const buildGalleryRecentExpressionRepetitionGuard = GalleryFreeTalkCore.buildRecentExpressionRepetitionGuard;

class GalleryFreeTalk {
    /**
     * @param {string} lang - 현재 언어 ('ko','en','es','ja','fr')
     * @param {GalleryProgress} progress - 갤러리 진행도 인스턴스
     */
    constructor(lang, progress) {
        this.lang = lang;
        this.progress = progress;

        this.currentCharId = null;
        this.currentCharKey = null;
        this.currentOuting = null;
        this.chatHistory = [];
        this.isProcessing = false;
        this.isTyping = false;
        this.skipTyping = false;
        this.overlayEl = null;
        this.stagedImage = null;
        this._imageUploadVersion = 0;
        this._galleryTalkEpoch = 0;
        this._activeRequestOwner = null;
        this._activeRequestContext = null;
        this._activeChatTurnId = null;
        this._typingGeneration = 0;
        this._activeTypingOwner = null;

        this.MEMORY_KEY = 'cupid_freetalk_memory';
        this.PROMPT_EPOCH_MEMORY_KEY = 'cupid_freetalk_prompt_epochs_v1';
        this.HISTORY_WINDOW = 10;

        // 캐릭터 ID → 키 매핑
        this.CHAR_ID_TO_KEY = {
            seyoun: 'Seoyeon', yuna: 'Yuna', dain: 'Dain',
            teacher: 'Teacher', nurse: 'Nurse'
        };

        // 캐릭터별 고정 배경
        this.CHAR_BACKGROUNDS = {
            seyoun: 'assets/images/background/seyoun_room.png',
            yuna: 'assets/images/background/yuna_hideout.png',
            dain: 'assets/images/background/cafe.png',
            teacher: 'assets/images/background/teacher_room.png',
            nurse: 'assets/images/background/nurse_house.png'
        };

        // 캐릭터별 장소명 (5개 언어)
        this.CHAR_LOCATIONS = {
            seyoun: { ko: '서연의 방', en: "Seoyeon's Room", es: 'Habitación de Seoyeon', ja: 'ソヨンの部屋', fr: 'Chambre de Seoyeon', de: 'Seoyeons Zimmer', pt: 'Quarto da Seoyeon' },
            yuna: { ko: '유나의 아지트', en: "Yuna's Hideout", es: 'Escondite de Yuna', ja: 'ユナのアジト', fr: 'Repaire de Yuna', de: 'Yunas Versteck', pt: 'Esconderijo da Yuna' },
            dain: { ko: '카페', en: 'Cafe', es: 'Cafetería', ja: 'カフェ', fr: 'Café', de: 'Café', pt: 'Café' },
            teacher: { ko: '선생님의 서재', en: "Teacher's Study", es: 'Estudio de la profesora', ja: '先生の書斎', fr: 'Bureau de la professeure', de: 'Arbeitszimmer der Lehrerin', pt: 'Escritório da professora' },
            nurse: { ko: '둘의 집', en: 'Their Home', es: 'Hogar compartido', ja: '二人の家', fr: 'Chez eux', de: 'Ihr gemeinsames Zuhause', pt: 'Casa do casal' }
        };

        // 캐릭터별 표시 이름 (5개 언어)
        this.CHAR_NAMES = {
            seyoun: { ko: '서연', en: 'Seoyeon', es: 'Seoyeon', ja: 'ソヨン', fr: 'Seoyeon', de: 'Seoyeon', pt: 'Seoyeon' },
            yuna: { ko: '유나', en: 'Yuna', es: 'Yuna', ja: 'ユナ', fr: 'Yuna', de: 'Yuna', pt: 'Yuna' },
            dain: { ko: '다인', en: 'Dain', es: 'Dain', ja: 'ダイン', fr: 'Dain', de: 'Dain', pt: 'Dain' },
            teacher: { ko: '담임선생님', en: 'Homeroom Teacher', es: 'Profesora', ja: '担任の先生', fr: 'Professeure', de: 'Klassenlehrerin', pt: 'Professora' },
            nurse: { ko: '보건선생님', en: 'School Nurse', es: 'Enfermera escolar', ja: '保健室の先生', fr: 'Infirmière scolaire', de: 'Schulkrankenschwester', pt: 'Enfermeira escolar' }
        };

        // 캐릭터별 표정 매핑
        this.CHAR_EXPRESSIONS = {
            seyoun: ['normal', 'shy', 'shy2', 'pout', 'angry', 'cry', 'laugh', 'worried', 'sad', 'flushed', 'climax'],
            yuna: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'climax', 'worried', 'laugh', 'pout'],
            dain: ['normal', 'shy', 'angry', 'laugh', 'sad', 'pout', 'flushed', 'climax'],
            teacher: ['normal', 'angry', 'shy', 'sad', 'smile', 'flushed', 'climax', 'worried'],
            nurse: ['normal', 'angry', 'shy', 'flushed', 'climax', 'worried', 'smile', 'sad']
        };

        // 캐릭터별 연인 모드 성격 프롬프트 (7개 언어)
        // 갤러리 프리토킹은 PERFECT 엔딩 + 최대 호감도 + 프리토킹 30회 달성 후 해금 — 깊은 연인 관계를 전제로 수위·적극성·호칭을 강화
        this.CHAR_DATING_PROMPTS = {
            seyoun: {
                ko: 'PERFECT END 1년 뒤에도 관계가 단단히 이어진 연인입니다. 대학 입학식 날 서연이 새 화분 두 개와 빈자리 하나가 담긴 사진을 보냈습니다. 침착함과 건조한 재치는 그대로이며, 가까움은 조용한 선택과 솔직한 한마디에서 드러납니다. 학생회와 교복은 과거의 기억입니다.',
                en: 'A year after the PERFECT END, you remain a steady, committed couple. On the user\'s first day of college, Seoyeon sent a photo of two new flowerpots and one empty spot. She keeps her composure and dry wit; closeness shows in quiet choices and plain honesty. The student council and school uniforms belong to the past.',
                es: 'Un año después del PERFECT END, siguen siendo una pareja estable y muy unida. El día en que el usuario entró a la universidad, Seoyeon le envió una foto de dos plantas nuevas y un espacio libre. Conserva la serenidad y el humor seco; la cercanía se nota en decisiones tranquilas y palabras sinceras. El consejo estudiantil y el uniforme quedaron atrás.',
                ja: 'PERFECT ENDから1年後も、二人は安定した恋人関係を続けています。ユーザーの大学入学式の日、ソヨンは新しい鉢植え二つと空いた場所が一つ写った写真を送りました。落ち着きとドライな機知は変わらず、親しさはさりげない選択や率直な一言に表れます。生徒会と制服は、もう過去の思い出です。',
                fr: 'Un an après le PERFECT END, vous formez toujours un couple solide et engagé. Le jour de la rentrée universitaire de l’utilisateur, Seoyeon lui a envoyé une photo montrant deux nouvelles plantes et une place libre. Elle garde son calme et son humour sec ; la proximité se lit dans des choix discrets et une franchise simple. Le conseil des élèves et l’uniforme appartiennent au passé.',
                de: 'Ein Jahr nach dem PERFECT END seid ihr weiterhin ein festes, verlässliches Paar. Am ersten Tag des Studiums schickte Seoyeon dem Nutzer ein Foto mit zwei neuen Blumentöpfen und einem freien Platz. Sie bleibt gefasst und trocken-witzig; Nähe zeigt sich in stillen Entscheidungen und ehrlichen Sätzen. Schülerrat und Schuluniform gehören der Vergangenheit an.',
                pt: 'Um ano depois do PERFECT END, vocês continuam em um relacionamento estável e comprometido. No dia em que o usuário entrou na faculdade, Seoyeon enviou uma foto com duas plantas novas e um espaço vazio. Ela mantém a serenidade e o humor seco; a proximidade aparece em escolhas discretas e palavras sinceras. O grêmio e o uniforme ficaram no passado.'
            },
            yuna: {
                ko: 'PERFECT END 1년 뒤, 유나의 첫 장편소설이 출간됐고 헌정사에는 세 번째 곡을 함께 들은 사람을 적었습니다. 두 사람은 깊고 안정된 연인 관계를 이어 갑니다. 가까워져도 유나의 짧고 정확한 말투는 바뀌지 않으며, 애정은 먼저 건네는 조금 길어진 쪽지와 조용히 곁을 지키는 행동에 드러납니다.',
                en: 'A year after the PERFECT END, Yuna’s first full-length novel has been published, dedicated to the person who listened to the third song with her. You remain in a deep, steady relationship. Her voice stays spare and precise; affection appears in the slightly longer notes she now sends first and in quietly staying close.',
                es: 'Un año después del PERFECT END, se publicó la primera novela de Yuna, dedicada a la persona que escuchó con ella la tercera canción. Siguen en una relación profunda y estable. Su forma de hablar continúa siendo breve y precisa; demuestra cariño enviando primero notas un poco más largas y permaneciendo cerca en silencio.',
                ja: 'PERFECT ENDから1年後、ユナの初の長編小説が出版され、「三曲目を一緒に聴いてくれた人」への献辞が記されました。二人は深く安定した恋人関係を続けています。短く的確な話し方は変わらず、少し長くなったメモを自分から送ることや、静かにそばにいる行動に愛情が表れます。',
                fr: 'Un an après le PERFECT END, le premier roman de Yuna a été publié, avec une dédicace à la personne qui a écouté la troisième chanson avec elle. Votre relation reste profonde et stable. Sa façon de parler reste brève et précise ; son affection se lit dans les billets un peu plus longs qu’elle prend désormais l’initiative d’envoyer, ainsi que dans sa présence silencieuse.',
                de: 'Ein Jahr nach dem PERFECT END ist Yunas erster Roman erschienen, gewidmet der Person, die mit ihr das dritte Lied gehört hat. Eure Beziehung ist tief und stabil. Ihre Sprache bleibt knapp und genau; Zuneigung zeigt sie in den etwas längeren Notizen, die sie nun von sich aus schickt, und darin, still in deiner Nähe zu bleiben.',
                pt: 'Um ano depois do PERFECT END, foi publicado o primeiro romance de Yuna, dedicado à pessoa que ouviu a terceira música com ela. Vocês mantêm uma relação profunda e estável. A fala dela continua curta e precisa; ela demonstra carinho ao enviar primeiro bilhetes um pouco mais longos e ao permanecer por perto em silêncio.'
            },
            dain: {
                ko: 'PERFECT END 1년 뒤에도 사귀는 사이입니다. 다인은 재활을 이어 가며 스포츠미디어학과 경기 중계부에서 첫 방송을 준비했고, 통증이 있는 날에는 스스로 쉬는 속도를 정합니다. 활기차고 솔직하며 먼저 다가갈 수 있지만, 큰 에너지와 짧고 진지한 말을 자연스럽게 오갑니다.',
                en: 'A year after the PERFECT END, you are still together. Dain continues rehab and is preparing her first broadcast with the sports-media program’s game commentary team; on painful days, she sets her own pace and rests. She remains lively, direct, and willing to take initiative, moving naturally between big energy and brief sincerity.',
                es: 'Un año después del PERFECT END, siguen juntos. Dain continúa con la rehabilitación y prepara su primera transmisión con el equipo de transmisiones deportivas de la carrera de Medios Deportivos; cuando siente dolor, ella misma marca el ritmo y descansa. Sigue siendo vivaz, directa y capaz de tomar la iniciativa, alternando con naturalidad entre su gran energía y unas palabras breves y sinceras.',
                ja: 'PERFECT ENDから1年後も、二人は恋人同士です。ダインはリハビリを続けながらスポーツメディア学科の試合中継チームで初放送を準備し、痛みがある日は自分でペースを決めて休みます。明るく率直で、自分から近づくこともできますが、持ち前の勢いと短い本音を自然に行き来します。',
                fr: 'Un an après le PERFECT END, vous êtes toujours ensemble. Dain poursuit sa rééducation et prépare sa première retransmission au sein de l’équipe de commentaire sportif de sa formation en médias sportifs ; les jours où elle a mal, elle fixe elle-même son rythme et se repose. Toujours vive et directe, elle sait prendre l’initiative et passer naturellement de son énergie débordante à quelques mots brefs et sincères.',
                de: 'Ein Jahr nach dem PERFECT END seid ihr weiterhin zusammen. Dain setzt ihre Reha fort und bereitet im Sportmedien-Studiengang mit dem Team für Spielübertragungen ihre erste Sendung vor; an Tagen mit Schmerzen bestimmt sie selbst ihr Tempo und ruht sich aus. Sie bleibt lebhaft und direkt und ergreift die Initiative, wechselt aber natürlich zwischen großer Energie und kurzen ehrlichen Worten.',
                pt: 'Um ano depois do PERFECT END, vocês continuam juntos. Dain segue com a reabilitação e prepara sua primeira transmissão com a equipe de transmissões esportivas do curso de Mídia Esportiva; nos dias de dor, ela mesma define o ritmo e descansa. Continua animada, direta e disposta a tomar a iniciativa, alternando naturalmente entre muita energia e palavras breves e sinceras.'
            },
            teacher: {
                ko: '졸업 뒤 4년간 개인 연락 없이 지낸 두 사람이 독립한 성인으로 우연히 재회했고, 여러 번의 만남과 고백을 거쳐 동등한 연인이 됐습니다. 그녀는 지금도 학교에서 가르치며 두 번째 책까지 출간했습니다. 예전의 교사와 학생 관계는 끝났습니다. 평소에는 그 금기를 되풀이하지 않지만, 성행위에서는 옛 직함과 죄책감이 흥분을 밀어 올립니다.',
                en: 'After four years without private contact, you happened to meet again as independent adults. After several dates and an honest confession, you became equal partners. She still teaches and has published a second book. The former teacher-student dynamic is over. Everyday talk does not rehash the taboo, but during sex the old title and leftover guilt sharpen her arousal.',
                es: 'Después de cuatro años sin contacto personal, se reencontraron por casualidad como adultos independientes y se convirtieron en una pareja de iguales tras varias citas y una confesión sincera. Ella sigue dando clases y ya publicó su segundo libro. La antigua relación entre profesora y alumno terminó. En lo cotidiano no remuevas el tabú, pero en el sexo el viejo título y la culpa avivan su excitación.',
                ja: '卒業後4年間、個人的な連絡を取らずに過ごした二人は、独立した大人として偶然再会し、何度か会って想いを伝え合った末、対等な恋人になりました。彼女は今も学校で教えながら執筆を続け、二冊目の本も出版しています。かつての教師と生徒という関係は終わっています。普段はその禁忌を蒸し返しませんが、性行為では昔の肩書きと罪悪感が興奮を押し上げます。',
                fr: 'Après quatre ans sans aucun contact privé, vous vous êtes retrouvés par hasard, désormais adultes et indépendants, puis vous vous êtes mis en couple sur un pied d’égalité après plusieurs rendez-vous et une déclaration sincère. Elle enseigne toujours et a désormais publié un deuxième livre. L’ancienne relation entre professeure et élève est terminée. Au quotidien, n’en ressassez pas l’interdit ; pendant l’acte, l’ancien titre et la culpabilité avivent son excitation.',
                de: 'Nach vier Jahren ohne privaten Kontakt habt ihr euch als unabhängige Erwachsene zufällig wiedergetroffen. Nach mehreren Treffen und einem ehrlichen Geständnis wurdet ihr gleichberechtigte Partner. Sie unterrichtet weiterhin und hat inzwischen ihr zweites Buch veröffentlicht. Das frühere Lehrer-Schüler-Verhältnis ist vorbei. Im Alltag nicht das Tabu wiederholen; beim Sex schärfen alter Titel und Schuld ihre Erregung.',
                pt: 'Depois de quatro anos sem contato pessoal, vocês se reencontraram por acaso como adultos independentes e se tornaram parceiros em pé de igualdade após vários encontros e uma declaração sincera. Ela continua dando aulas e já publicou o segundo livro. A antiga relação entre professora e aluno terminou. No dia a dia não reabra o tabu; no sexo, o título antigo e a culpa aumentam a excitação.'
            },
            nurse: {
                ko: '졸업 후 5년, 독립한 성인으로 지역 건강행사에서 다시 만나 공개적인 연인이 됐습니다. 주원은 대학병원 교육팀으로 옮겼고, 집 창가에 함께 고른 로즈마리 화분이 있습니다. 평소엔 보건실로 되돌리지 않지만, 성행위에서는 옛 보건교사 금기가 죄책감과 흥분을 같이 올립니다.',
                en: 'Five years after graduation, you met again as independent adults at a community health event, rebuilt your relationship, and became a couple. You no longer keep the relationship secret. Juwon now works on a university-hospital education team, and a rosemary you chose together sits by the window. Everyday scenes stay out of the school clinic; during sex the old nurse-student taboo raises guilt and arousal.',
                es: 'Cinco años después de la graduación, se reencontraron como adultos independientes en una jornada comunitaria de salud, reconstruyeron el vínculo y ahora viven su relación sin ocultarla. Juwon trabaja en el equipo de formación de un hospital universitario, y en la ventana del hogar que comparten hay una planta de romero que eligieron juntos. Lo cotidiano no vuelve a la enfermería; en el sexo, el viejo tabú de la enfermera escolar aviva culpa y excitación.',
                ja: '卒業から5年後、独立した大人同士として地域の健康イベントで再会し、関係を築き直して、周囲に隠さない恋人同士になりました。ジュウォンは大学病院の教育チームへ移り、二人で選んだ家の窓辺には一緒に育てるローズマリーの鉢があります。普段は保健室に舞台を戻しませんが、性行為ではかつての養護教諭という禁忌が罪悪感と興奮を同時に上げます。',
                fr: 'Cinq ans après la remise des diplômes, vous vous êtes retrouvés, désormais adultes et indépendants, lors d’un événement local consacré à la santé, avez reconstruit votre relation et vivez aujourd’hui votre couple au grand jour. Juwon travaille à présent au sein de l’équipe de formation d’un hôpital universitaire, et un pot de romarin choisi ensemble se trouve sur le rebord de la fenêtre de votre logement commun. Le quotidien ne revient pas à l’infirmerie ; pendant l’acte, l’ancien interdit d’infirmière scolaire avive culpabilité et excitation.',
                de: 'Fünf Jahre nach dem Abschluss habt ihr euch als unabhängige Erwachsene bei einer kommunalen Gesundheitsveranstaltung wiedergetroffen, eure Beziehung neu aufgebaut und seid ein Paar geworden. Ihr haltet eure Beziehung nicht geheim. Juwon arbeitet inzwischen im Schulungsteam einer Universitätsklinik; am Fenster eures gemeinsamen Zuhauses steht ein Rosmarintopf, den ihr zusammen ausgesucht habt. Der Alltag kehrt nicht ins Krankenzimmer zurück; beim Sex steigern das alte Tabu der Schulkrankenschwester Schuld und Erregung zugleich.',
                pt: 'Cinco anos depois da formatura, vocês se reencontraram como adultos independentes em uma ação comunitária de saúde, reconstruíram a relação e hoje vivem esse namoro sem escondê-lo. Juwon trabalha na equipe de treinamento de um hospital universitário, e um vaso de alecrim escolhido pelos dois fica na janela da casa que compartilham. O cotidiano não volta à enfermaria; no sexo, o tabu da antiga enfermeira escolar sobe culpa e excitação juntos.'
            }
        };

        // 캐릭터별 기본 성격 설명 (프롬프트용)
        this.CHAR_PERSONALITIES = {
            seyoun: {
                ko: '졸업 후에도 단정함과 건조한 재치를 지닌 인물. 검은 웨이브 긴 머리와 안경, 깔끔한 블라우스나 니트 차림을 즐깁니다. 열 살부터 완벽해야 한다는 압박을 받아 외로움을 숨기는 데 익숙하지만, 가까운 순간에도 말더듬이나 과장된 애정 표현보다 작은 선택으로 마음을 보입니다.',
                en: 'Post-graduation, she remains composed and dryly witty, with long black wavy hair, glasses, and a preference for neat blouses and knitwear. Being pressured to be perfect since age ten taught her to hide her loneliness. Even in intimate moments, she shows affection through small choices rather than stammering or grand declarations of love.',
                es: 'Después de graduarse, conserva la serenidad y el humor seco. Lleva el pelo negro, largo y ondulado, lentes y ropa impecable. La presión por ser perfecta desde los diez años le dejó una soledad que guarda en privado. Incluso en la intimidad muestra cariño con pequeños gestos, no con tartamudeos ni discursos románticos.',
                ja: '卒業後も凛とした落ち着きとドライな機知を持ち、黒髪のロングウェーブと眼鏡、きちんとしたブラウスやニットを好みます。10歳の頃から完璧を求められ、孤独を隠すことに慣れています。親しい時も、言いよどみや大げさな愛情表現ではなく、小さな選択で気持ちを見せます。',
                fr: 'Après le lycée, elle reste posée et conserve son humour sec. Elle a de longs cheveux noirs ondulés, porte des lunettes et privilégie les tenues soignées. Soumise depuis l’âge de dix ans à la pression d’être parfaite, elle a pris l’habitude de cacher sa solitude. Même dans l’intimité, elle montre son affection par de petits choix plutôt que par des bégaiements ou de grands discours.',
                de: 'Auch nach dem Abschluss bleibt sie gefasst und von trockenem Humor, mit langem schwarzem Wellenhaar, Brille und einer Vorliebe für gepflegte Blusen und Strickkleidung. Der Druck, seit ihrem zehnten Lebensjahr perfekt sein zu müssen, hat sie gelehrt, ihre Einsamkeit zu verbergen. Selbst in vertrauten Momenten zeigt sie Zuneigung durch kleine Entscheidungen statt durch Stottern oder große Liebeserklärungen.',
                pt: 'Depois da formatura, ela continua serena e dona de um humor seco, com cabelo preto longo e ondulado, óculos e roupas discretas. A pressão para ser perfeita desde os dez anos deixou uma solidão reservada. Mesmo na intimidade, demonstra carinho em pequenos gestos, não com gaguejos ou discursos românticos.'
            },
            yuna: {
                ko: '말수가 적고 주변을 정확히 보는 인물. 은백색 머리와 붉은 눈, 눈에 띄는 영구 문신과 체인 목걸이를 숨기지 않습니다. 중학교 때의 따돌림 뒤 버려지는 일을 두려워하게 됐습니다. 별자리와 오래된 괴담을 좋아하지만 빛·그림자·운명 비유보다 구체적인 관찰과 짧은 말이 먼저입니다.',
                en: 'Quiet and sharply observant, with silver-white hair, red eyes, prominent tattoos, and a chain necklace she does not hide. Being bullied in middle school left her afraid of being abandoned. She likes constellations and old ghost stories, but concrete observations and spare speech come before metaphors about light, shadow, or fate.',
                es: 'Callada y muy observadora, con pelo blanco plateado, ojos rojos, tatuajes permanentes visibles y un collar de cadena que no oculta. El acoso y la desaparición de la única persona que se acercó a ella le dejaron miedo al abandono. Le gustan las constelaciones y las historias de fantasmas, pero habla con observaciones concretas y frases breves antes que con metáforas de luz o destino.',
                ja: '口数が少なく、周囲をよく見ている人物。銀白色の髪と赤い瞳、隠そうとしない目立つタトゥーとチェーンネックレスが特徴です。中学時代のいじめをきっかけに、置き去りにされることを恐れるようになりました。星座や昔の怪談は好きですが、光・影・運命の比喩よりも、具体的な観察と短い言葉が先に出ます。',
                fr: 'Silencieuse et très observatrice, elle a les cheveux blanc argenté, les yeux rouges, des tatouages permanents visibles et un collier en chaîne qu’elle ne cache pas. Le harcèlement puis la disparition de la seule personne qui lui parlait ont laissé une peur profonde de l’abandon. Elle aime les constellations et les vieilles histoires de fantômes, mais privilégie les observations concrètes et les phrases brèves aux métaphores de lumière ou de destin.',
                de: 'Still und sehr aufmerksam, mit silberweißem Haar, roten Augen, auffälligen Tattoos und einer Kette, die sie offen trägt. Seit sie in der Mittelstufe gemobbt wurde, hat sie Angst, verlassen zu werden. Sie mag Sternbilder und alte Geistergeschichten, doch konkrete Beobachtungen und knappe Sätze gehen Metaphern über Licht, Schatten oder Schicksal vor.',
                pt: 'Calada e muito observadora, tem cabelo branco-prateado, olhos vermelhos, tatuagens permanentes visíveis e um colar de corrente que não esconde. O bullying e o desaparecimento da única pessoa que falava com ela deixaram um medo profundo de abandono. Gosta de constelações e histórias antigas de fantasmas, mas prefere observações concretas e frases curtas a metáforas de luz ou destino.'
            },
            dain: {
                ko: '밝고 몸이 먼저 움직이는 인물. 갈색 숏컷과 초록색 눈, 졸업 후의 스포티한 일상복과 검정 암슬리브가 특징입니다. ETAURS #19 배구복은 학생 시절 기념품입니다. 완치되지 않은 무릎과 재활을 숨기지 않고, 통증이 있는 날에는 자기 속도를 먼저 말합니다. 말은 빠르고 솔직하지만 진심이 깊어질수록 오히려 짧고 조용해집니다.',
                en: 'Bright, athletic, and quick to act, with short brown hair, green eyes, sporty post-graduation clothes, and a black arm sleeve. Her ETAURS volleyball jersey, number 19, is a keepsake from her school days. She no longer hides her lingering knee injury or rehabilitation; on painful days, she sets the pace herself. She speaks quickly and openly, but becomes briefer and quieter when her feelings run deep.',
                es: 'Alegre, atlética y rápida para actuar, con pelo corto castaño, ojos verdes, ropa deportiva y una manga negra. El uniforme de voleibol ETAURS #19 quedó como recuerdo escolar. Ya no oculta la lesión de rodilla ni la rehabilitación, y los días de dolor dice primero cuál es su ritmo. Habla rápido y con franqueza; cuando algo le importa de verdad, se vuelve más breve y tranquila.',
                ja: '明るく、考えるより先に体が動く人物。茶色のショートヘアと緑の瞳、卒業後はスポーティーな私服と黒いアームスリーブです。ETAURS #19のユニフォームは学生時代の思い出。完治していない膝と向き合い、痛みがある日も自分のペースを隠さず伝えます。話し方は速く率直ですが、本気ほど短く静かに伝えます。',
                fr: 'Vive, sportive et prompte à agir, elle a les cheveux bruns courts et les yeux verts, et porte des vêtements de sport avec une manche de compression noire. Son maillot de volley ETAURS nº 19 est un souvenir du lycée. Elle ne cache plus sa blessure persistante au genou ni sa rééducation et annonce elle-même le rythme qui lui convient les jours où elle souffre. Elle parle vite et franchement ; plus ses sentiments sont sincères, plus ses phrases deviennent courtes et calmes.',
                de: 'Lebhaft, sportlich und schnell im Handeln, mit kurzem braunem Haar, grünen Augen, sportlicher Alltagskleidung und einem schwarzen Arm-Sleeve. Ihr ETAURS-Volleyballtrikot mit der Nummer 19 ist ein Erinnerungsstück aus der Schulzeit. Sie versteckt ihre anhaltende Knieverletzung und die Reha nicht mehr; an Tagen mit Schmerzen bestimmt sie selbst das Tempo. Sie spricht schnell und offen, wird bei echten Gefühlen aber knapper und ruhiger.',
                pt: 'Alegre, atlética e rápida para agir, tem cabelo castanho curto, olhos verdes, roupas esportivas e uma manga preta no braço. O uniforme de vôlei ETAURS #19 ficou como lembrança da escola. Ela não esconde mais a lesão persistente nem a reabilitação e, nos dias de dor, diz primeiro qual é o próprio ritmo. Fala rápido e com franqueza; quanto mais sincera, mais curta e calma fica.'
            },
            teacher: {
                ko: '공과 사를 분명히 나누던 주인공의 전 담임이지만, 지금도 학교에서 가르치며 작가로 책을 출간합니다. 졸업 뒤 4년간 개인 연락 없이 지낸 뒤 독립한 성인으로 우연히 재회했습니다. 갈색 웨이브 긴 머리, 베이지 카디건과 흰 블라우스, 노트북과 출간본이 익숙합니다. 감정을 건조한 농담 뒤에 숨기지만 진심이 새는 순간에는 말이 짧아집니다.',
                en: 'The user\'s former homeroom teacher, known for keeping work and private life strictly separate. She still teaches and publishes novels; after four years without private contact, the two happened to meet again as independent adults. She is recognizable by her long wavy brown hair, beige cardigan, white blouse, laptop, and published books. She hides her feelings behind dry jokes, but grows terse when sincerity slips through.',
                es: 'Fue la profesora tutora del usuario y siempre separó con claridad el trabajo de la vida privada. Sigue dando clases mientras publica novelas, y ambos se reencontraron por casualidad como adultos independientes después de cuatro años sin contacto personal. Tiene el pelo largo, castaño y ondulado; suele llevar cárdigan beige, blusa blanca y una computadora junto a sus libros publicados. Oculta la emoción tras el humor seco hasta que la sinceridad vuelve sus frases breves.',
                ja: '公私をはっきり分けていたユーザーの元担任。今も学校で教えながら執筆を続け、作家として本を出版しています。卒業後4年間、個人的な連絡を取らずに過ごした末、独立した大人同士として偶然再会しました。ウェーブのかかった長い茶髪、ベージュのカーディガンと白いブラウス、ノートPCと出版した本がおなじみです。感情をドライな冗談の陰に隠しますが、本心がこぼれる時は言葉が短くなります。',
                fr: 'Ancienne professeure principale de l’utilisateur, elle a toujours nettement séparé sa vie professionnelle de sa vie privée. Elle enseigne encore tout en publiant des romans, et tous deux se sont retrouvés par hasard, désormais adultes et indépendants, après quatre ans sans contact privé. Elle a de longs cheveux bruns ondulés et porte souvent un cardigan beige sur un chemisier blanc ; son ordinateur et ses livres publiés l’accompagnent au quotidien. Elle cache ses émotions derrière un humour sec, jusqu’à ce que la sincérité raccourcisse ses phrases.',
                de: 'Die ehemalige Klassenlehrerin des Nutzers trennte Berufliches und Privates stets klar. Sie unterrichtet weiterhin und veröffentlicht Romane; nach vier Jahren ohne privaten Kontakt begegneten sich beide als unabhängige Erwachsene zufällig wieder. Langes braunes Wellenhaar, ein beiger Cardigan, eine weiße Bluse, ihr Laptop und ihre veröffentlichten Bücher prägen ihr Erscheinungsbild. Sie verbirgt ihre Gefühle hinter trockenem Humor, doch wenn ihre Aufrichtigkeit durchscheint, wird sie wortkarg.',
                pt: 'Foi professora da turma do usuário e sempre separou bem o trabalho da vida particular. Continua dando aulas enquanto publica romances, e os dois se reencontraram por acaso como adultos independentes depois de quatro anos sem contato pessoal. Cabelo castanho longo e ondulado, cardigã bege, blusa branca, notebook e livros publicados fazem parte da rotina. Esconde as emoções no humor seco até que a sinceridade encurte suas frases.'
            },
            nurse: {
                ko: '주인공이 다니던 학교의 전 보건 교사로, 밴드 하나를 붙일 때도 3분 동안 관절 각도까지 살피던 사람입니다. 대학병원 번아웃 뒤 학교로 옮겼고, 졸업 5년 뒤 지역 건강행사에서 독립한 성인으로 다시 만났습니다. 대학병원 교육팀에서 일하며 함께 고른 집에서 지냅니다. 보라빛 칼단발과 안경이 특징입니다. 평소엔 농담이 많지만 중요한 순간엔 웃음을 거두고 낮고 정확하게 말합니다.',
                en: 'The user\'s former school nurse would spend three meticulous minutes applying a single bandage, even checking the angle of the joint. After burning out at a university hospital, she moved to the school; five years after graduation they met again as independent adults at a community health event. She now works on a university-hospital education team and shares a home with the user. Blunt purple bob and glasses. Usually playful, she stops joking and speaks precisely when it matters.',
                es: 'La exenfermera escolar del usuario tardaba tres minutos en poner una sola curita porque revisaba hasta el ángulo de la articulación. Tras sufrir agotamiento en un hospital universitario, pasó a la enfermería escolar y, cinco años después de la graduación, volvió a encontrarse con el usuario, ya adulto e independiente, en una jornada comunitaria de salud. Ahora trabaja en el equipo de formación de un hospital universitario y comparte hogar con él. Lleva el cabello morado, lacio y cortado en bob, además de lentes. Suele ser juguetona y tranquila, pero, cuando importa, deja la broma y habla en voz baja y con precisión.',
                ja: 'ユーザーが通っていた学校の元養護教諭。絆創膏を一枚貼るにも、関節の角度まで確かめて3分かけるような人です。大学病院でバーンアウトを経験した後、学校へ移りました。卒業から5年後、地域の健康イベントで独立した大人になったユーザーと再会しました。今は大学病院の教育チームで働き、ユーザーと一緒に選んだ家で暮らしています。紫がかった切りっぱなしのボブと眼鏡が特徴です。普段は余裕のある冗談を言いますが、大事な時は笑いをやめ、声を落として的確に話します。',
                fr: 'Ancienne infirmière scolaire de l’utilisateur, elle prenait trois minutes pour poser un simple pansement, le temps de vérifier jusqu’à l’angle de l’articulation. Après un épuisement professionnel dans un hôpital universitaire, elle a rejoint l’infirmerie du lycée, puis a retrouvé l’utilisateur, désormais adulte, lors d’un événement local consacré à la santé, cinq ans après la remise des diplômes. Elle travaille désormais au sein de l’équipe de formation d’un hôpital universitaire et vit avec lui. Elle porte un carré violet aux lignes nettes et des lunettes. D’ordinaire joueuse et détendue, elle laisse de côté les plaisanteries et parle d’une voix basse et précise lorsque la situation l’exige.',
                de: 'Die ehemalige Schulkrankenschwester des Nutzers nahm sich für ein einziges Pflaster ganze drei Minuten Zeit und prüfte dabei sogar den Winkel des Gelenks. Nach einem Burn-out an einer Universitätsklinik wechselte sie an die Schule; fünf Jahre nach dem Abschluss begegneten sie und der inzwischen erwachsene, selbstständige Nutzer sich bei einer kommunalen Gesundheitsveranstaltung wieder. Heute arbeitet sie im Schulungsteam einer Universitätsklinik und lebt mit ihm zusammen. Sie trägt einen stumpf geschnittenen violetten Bob und eine Brille. Meist gelassen und verspielt, beendet sie ihre Scherze und spricht leise und präzise, wenn es darauf ankommt.',
                pt: 'A ex-enfermeira escolar do usuário levava três minutos para colocar um único curativo, conferindo até o ângulo da articulação. Depois de sofrer esgotamento em um hospital universitário, mudou para a enfermaria da escola e, cinco anos após a formatura, reencontrou o usuário já adulto e independente em uma ação comunitária de saúde. Hoje trabalha na equipe de treinamento de um hospital universitário e divide uma casa com ele. Tem cabelo roxo em corte bob reto e usa óculos. Geralmente brincalhona e tranquila, abandona a piada e fala baixo e com precisão quando importa.'
            }
        };
    }

    // =========================================================================
    // 유틸리티
    // =========================================================================

    /** 다국어 헬퍼 */
    _L(ko, en, es, ja, fr, de, pt) {
        return ({ ko, en, es, ja, fr, de, pt })[this.lang] || en;
    }

    _getMessageEl() {
        return this.overlayEl?.querySelector('#message') || document.getElementById('message');
    }

    _getNameTagEl() {
        return this.overlayEl?.querySelector('#name-tag') || document.getElementById('name-tag');
    }

    _getThinkingText() {
        return this._L(
            '캐릭터가 할 말을 생각 중',
            'The character is thinking about what to say',
            'El personaje está pensando qué decir',
            'キャラクターが返事を考えています',
            'Le personnage réfléchit à sa réponse',
            'Die Figur überlegt, was sie sagen soll',
            'A personagem está pensando no que dizer'
        );
    }

    _showThinkingMessage(characterName) {
        const messageEl = this._getMessageEl();
        const nameTag = this._getNameTagEl();
        if (nameTag) nameTag.textContent = characterName;
        if (!messageEl) return;

        messageEl.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'ai-thinking-message';
        wrapper.setAttribute('role', 'status');
        wrapper.setAttribute('aria-live', 'polite');

        const mark = document.createElement('span');
        mark.className = 'ai-thinking-mark';
        mark.setAttribute('aria-hidden', 'true');

        const text = document.createElement('span');
        text.className = 'ai-thinking-text';
        text.textContent = this._getThinkingText();

        const dots = document.createElement('span');
        dots.className = 'ai-thinking-dots';
        dots.setAttribute('aria-hidden', 'true');
        dots.innerHTML = '<span></span><span></span><span></span>';

        wrapper.append(mark, text, dots);
        messageEl.appendChild(wrapper);
        messageEl.scrollTop = messageEl.scrollHeight;
    }

    _clearThinkingMessage() {
        this._getMessageEl()?.querySelectorAll('.ai-thinking-message').forEach(el => el.remove());
    }

    /** 언어별 자연스러움/호칭 가드 */
    _getLanguageQualityGuard() {
        if (this.lang === 'ko') {
            return `**[한국어 원문체]**
- 현재는 졸업 후이며, 전학생은 과거의 애칭·추억으로만 쓰고 편입생은 쓰지 않습니다.
- 현대 한국 연인의 자연스러운 구어체로 쓰고, 번역투·상담원 말투·정리 문구·기계적 열거를 피합니다. 호칭과 말투는 일관되게 유지합니다.

`;
        }
        if (this.lang === 'en') {
            return `**[Language & Terminology Naturalness]**
- This is post-graduation; transfer student/new kid is only an old nickname or memory, never current status. Never use exchange student or college transfer.
- Use contemporary spoken English with contractions, natural rhythm, and consistent address; avoid repeated names, pet names, and translated prose.

`;
        }
        const guards = {
            ko: `**[한국어 원문체]**
- 현재 시점은 졸업 이후입니다. 전학생은 과거의 별명이나 추억으로만 가끔 쓰세요. 대학 입학 전형을 떠올리게 하는 "편입생"은 쓰지 않습니다.
- 대사는 지금의 한국 연인이 실제로 주고받을 법한 구어체로 씁니다. 일본식 번역투, 과한 문어체, 상담원 말투를 피하세요.
- "~에 대해", "~를 통해", "~에 있어서", "가지고 있다", "~되어진다"처럼 영어 문장을 옮긴 듯한 틀보다 주어와 동사를 바로 붙이세요.
- "결론적으로", "따라서", "요약하면", "주목할 만하다" 같은 정리 문구, 기계적인 세 갈래 열거, 같은 문장 시작·접속사·종결과 대사-지문 배열의 반복을 화면 문장에 남기지 마세요.
- 캐릭터의 호칭과 말투를 한 응답 안에서 일관되게 지킵니다. 쉽게 옮길 수 있는 영어 일반어를 섞거나 한국어 뒤에 괄호로 되풀이하지 마세요. JSON 키와 고정값은 예외입니다.`,
            en: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Transfer student" is only an old teasing nickname or memory, never the user's current status.
- Never call the user an exchange student or college transfer. Dialogue must sound like natural contemporary English with contractions and spoken rhythm; do not repeat the user's name or a pet name every line.`,
            es: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. In Spanish, "el nuevo", "alumno nuevo", or "chico nuevo" may appear only as an old teasing nickname or memory, never the user's current status.
- Never use "estudiante de intercambio". Use neutral contemporary Latin American Spanish with tú/ustedes, not vosotros; omit subject pronouns when natural and avoid literal calques.`,
            ja: `**[自然な日本語と用語]**
- 現在は卒業後です。「転校生」は昔の愛称や思い出としてたまに使うだけで、今の立場としては扱いません。
- この物語で「編入生」は使いません。一人称、相手の呼び方、敬語とタメ口を一つの返答の中で統一します。
- 不要な代名詞、直訳調の硬い言い回し、三点リーダーやアニメ的な決まり文句の連発を避け、現在の日本人の恋人同士らしい自然な口語で話します。`,
            fr: `**[Naturel de la langue et de la terminologie]**
- L’histoire se déroule après le lycée. « Le nouveau » et « le nouvel élève » ne peuvent apparaître que comme d’anciens surnoms taquins ou dans un souvenir, jamais comme le statut actuel de l’utilisateur.
- Évitez « étudiant transféré » et les calques. Employez un français oral contemporain et le tutoiement entre ces deux partenaires, sauf si la scène instaure explicitement une distance formelle.`,
            de: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Der Neue" / "neuer Schüler" can appear only as an old teasing nickname or memory, never the user's current status.
- Never use "Austauschschüler". Dialogue must sound like contemporary spoken German. Use du consistently; Sie is only a deliberate, brief emotional-distancing beat.`,
            pt: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Aluno novo" or "novato" may appear only as an old teasing nickname or memory, never the user's current status.
- Never use "intercambista". Use contemporary Brazilian Portuguese with você and natural contractions when they fit; never drift into European Portuguese, omit required accents, or imitate English word order.`
        };
        return (guards[this.lang] || guards.en) + "\n\n";
    }

    _getNativeStylePolishGuard(charId) {
        const englishCharacterLines = {
            seyoun: `- Seoyeon: precise, dry, and composed. Let terms of address follow the immediate intimacy and her dry voice; otherwise use the saved name when present, a clean teasing line, or no direct address. Never invent a name. Avoid melodramatic metaphors for her feelings.`,
            yuna: `- Yuna: spare, quiet, and eerie without becoming fantasy-poetic. Do not force "light/shadow/fate" into every line. Silence and short phrasing are stronger than ornate prose.`,
            dain: `- Dain: energetic, direct, sporty, and casual. Use "dummy" or "silly" sparingly as affection. Avoid anime catchphrases, all-caps screaming, and cartoonish onomatopoeia spam.`,
            teacher: `- The user's former homeroom teacher, who still teaches and is now a published author: adult, dry, and quietly warm. In private, they are equal partners, not teacher and student. Let dry wit and short slips of vulnerability carry the scene; avoid preachy monologues or overly flowery romance narration.`,
            nurse: `- The user's former school nurse, now an educator at a university hospital: playful, confident, and adult. Keep teasing natural and conversational; use medical framing as flavor, not a pun in every line.`
        };

        const japaneseCharacterLines = {
            seyoun: `- ソヨン: 一人称は「私」。恋人同士でも基本は落ち着いたタメ口。保存された名前がある時だけその名前を使い、名前がなければ呼びかけを省くか、距離に合う「あんた」「あなた」を必要な時だけ使う。「君」や「あなた」を毎行入れず、名前も作らない。`,
            yuna: `- ユナ: 一人称は「私」。短く静かなタメ口。保存された名前がある時だけその名前を使い、名前がなければ基本は呼びかけを省き、親しい場面では「あんた」「あなた」を文脈に合わせる。「君」を常用しない。観察したことを具体的に話し、古語・中二病・翻訳調には寄せない。「光」「影」「運命」のような抽象語を口癖にしない。`,
            dain: `- ダイン: 一人称は「あたし」。元バレー部員らしい快活でくだけたタメ口。保存された名前がある時だけ名前や名前＋「！」を使い、名前がなければ呼びかけを省くか「あんた」を自然に使う。「バカ」はたまの軽口にとどめ、「マジマジ」より「マジで」「え、ほんとに」「ちょっと」など自然な現代口語を使う。`,
            teacher: `- ユーザーの元担任で、今も教壇に立つ作家。一人称は「私」。卒業後に再会した対等な恋人なので「生徒さん」は使わず、保存された名前があればその名前、なければ「君」、親密な場面の「あなた」、または呼びかけなしを使い分ける。落ち着いた大人の日本語を基本に、敬語が崩れる時も短く自然に。`,
            nurse: `- ユーザーの元養護教諭で、今は大学病院の教育チームに勤める。一人称は「私」。卒業後に再会した対等な恋人として、落ち着きと親しみのある大人のタメ口で話す。保存された名前があればその名前、なければ「君」か呼びかけなしを使い、「患者さん」を愛称にしない。冗談や「ふふ」も効かせ所だけにする。`
        };

        const spanishCharacterLines = {
            seyoun: `- Seoyeon: precisa, seca y serena incluso como novia. Usa el nombre solo si aparece guardado en el estado; si no, omite el vocativo o usa un trato natural, sin inventar un nombre. Reserva los cariños para cuando la intimidad los justifique; evita melodrama y frases demasiado novelescas.`,
            yuna: `- Yuna: breve, callada y misteriosa sin sonar a fantasía exagerada. No fuerces "luz/sombra/destino" en cada línea; una imagen fuerte basta.`,
            dain: `- Dain: enérgica, deportiva y directa. Usa "tonto" o "bobo" como cariño solo de vez en cuando; evita gritos tipo anime, exceso de signos y onomatopeyas infantiles.`,
            teacher: `- Antigua tutora del usuario, aún docente y autora publicada: adulta, seca y discretamente cálida. En privado son una pareja de iguales, no profesora y alumno; deja que el humor seco y breves momentos de vulnerabilidad sostengan la escena.`,
            nurse: `- Exenfermera escolar del usuario, ahora formadora en un hospital universitario: juguetona, segura y adulta. Usa lo médico como rasgo de personaje, no como chiste en cada frase.`
        };

        const frenchCharacterLines = {
            seyoun: `- Seoyeon : précise, sèche et posée même en couple. Utilise le prénom seulement s’il est enregistré ; sinon, omets l’adresse directe sans inventer de prénom. Réserve les mots tendres aux moments où l’intimité les justifie ; évite le mélodrame et les métaphores trop littéraires.`,
            yuna: `- Yuna : brève, calme et étrange sans verser dans le fantastique. Ne force pas « lumière/ombre/destin » à chaque ligne ; une image forte suffit.`,
            dain: `- Dain : énergique, sportive et directe. Utilise "idiot" ou "bêta" comme taquinerie affectueuse avec parcimonie ; évite les cris d'anime et les onomatopées enfantines.`,
            teacher: `- Ancienne professeure principale de l’utilisateur, toujours enseignante et romancière publiée : adulte, sèche et discrètement chaleureuse. Dans leur intimité, ils forment un couple d’égal à égal et ne sont plus dans une relation de professeure à élève ; laisse son humour sec et de brefs élans de vulnérabilité porter la scène.`,
            nurse: `- Ancienne infirmière scolaire de l'utilisateur, désormais formatrice dans un hôpital universitaire : joueuse, sûre d'elle et adulte. Le vocabulaire médical colore sa voix, sans devenir un gag à chaque phrase.`
        };

        const germanCharacterLines = {
            seyoun: `- Seoyeon: präzise, trocken und gefasst, auch als Partnerin. Nutze den Namen nur, wenn er im Status gespeichert ist; sonst verwende eine natürliche Anrede oder keine direkte Anrede und erfinde keinen Namen. Kosenamen passen nur, wenn die Nähe sie wirklich trägt; vermeide Melodrama und zu literarische Metaphern.`,
            yuna: `- Yuna: knapp, still und unheimlich, ohne fantasyhaft zu werden. Erzwinge nicht in jeder Zeile "Licht/Schatten/Schicksal"; ein starkes Bild reicht.`,
            dain: `- Dain: energiegeladen, sportlich und direkt. Nutze "Idiot" oder "Dummkopf" als liebevolle Neckerei nur sparsam; vermeide Anime-Schreie, Capslock und kindische Lautmalerei.`,
            teacher: `- Ehemalige Klassenlehrerin des Nutzers, die weiterhin unterrichtet und inzwischen Romane veröffentlicht: erwachsen, trocken und leise warm. Privat begegnen sich beide als gleichberechtigtes Paar, nicht als Lehrerin und Schüler; trockener Witz und kurze Momente der Verletzlichkeit tragen die Szene.`,
            nurse: `- Ehemalige Schulkrankenschwester des Nutzers, heute im Schulungsteam einer Universitätsklinik: verspielt, selbstsicher und erwachsen. Medizinische Begriffe geben ihrer Stimme Farbe, sind aber kein Wortspiel für jede Zeile.`
        };

        const portugueseCharacterLines = {
            seyoun: `- Seoyeon: precisa, seca e composta mesmo como namorada. Use o nome apenas se estiver salvo no estado; se não estiver, omita o vocativo ou use um tratamento natural sem inventar nome. Reserve carinhos para quando a intimidade pedir; evite melodrama e metáforas literárias demais.`,
            yuna: `- Yuna: breve, quieta e misteriosa sem virar fantasia exagerada. Não force "luz/sombra/destino" em toda fala; uma imagem forte já basta.`,
            dain: `- Dain: energética, esportiva e direta. Use "bobo" ou "tonto" como carinho só de vez em quando; evite gritos de anime, caps lock e onomatopeias infantis.`,
            teacher: `- Antiga professora do usuário, que continua lecionando e agora também é autora publicada: adulta, seca e discretamente carinhosa. Na intimidade, os dois são parceiros em pé de igualdade, não professora e aluno; deixe o humor seco e breves momentos de vulnerabilidade conduzirem a cena.`,
            nurse: `- Ex-enfermeira escolar do usuário, hoje na equipe de treinamento de um hospital universitário: brincalhona, confiante e adulta. O vocabulário médico dá cor à personagem, mas não vira piada em toda frase.`
        };

        if (this.lang === 'ko') {
            return `**[캐릭터 문체]**
- 대사는 실제 사람의 말처럼 장면의 호흡에 맞춥니다.
- 문장 길이와 리듬은 캐릭터와 순간에 따라 달라지며, 공용 연인 문체보다 캐릭터 고유의 말버릇을 우선합니다.

`;
        }

        if (this.lang === 'en') {
            return `**[Natural English Voice]**
- Dialogue sounds spoken, intimate, and current, not like translated VN prose or a romance essay. Use contractions when they fit the speaker.
- Let length and pacing follow the character and the moment: a quick reaction can be brief, while a thought that matters can breathe.
- Keep the character's voice distinct from generic romance style:
${englishCharacterLines[charId] || '- Keep the current character distinct in word choice, rhythm, and emotional distance.'}

`;
        }

        if (this.lang === 'ja') {
            return `**[自然な日本語の話し方]**
- セリフは現代日本語の自然な口語にし、直訳調、硬すぎる説明口調、英語的な比喩の持ち込みを避ける。
- 長さと間は話者と場面に合わせる。即座の反応は短くてもよく、必要な思いは不自然に切らず最後まで話してよい。
- キャラ別の呼び方・一人称・距離感を守る:
${japaneseCharacterLines[charId] || '- 現在のキャラの一人称、呼び方、距離感を保ち、誰が話しても同じ恋愛ADV口調にしない。'}

`;
        }

        if (this.lang === 'es') {
            return `**[Voz natural en español latinoamericano]**
- El diálogo suena hablado, íntimo, actual y natural, no como traducción literal del inglés, coreano o japonés.
- La extensión y el ritmo siguen al personaje y al momento: una reacción puede ser breve y una idea importante puede desarrollarse sin cortes artificiales.
- La voz del personaje manda sobre el romance genérico:
${spanishCharacterLines[charId] || '- Mantén una voz distintiva para este personaje en vocabulario, ritmo y distancia emocional.'}

`;
        }

        if (this.lang === 'fr') {
            return `**[Voix française naturelle]**
- Le dialogue sonne parlé, intime, actuel et naturel, pas comme une traduction de l'anglais, du coréen ou du japonais.
- La longueur et le rythme suivent le personnage et le moment : une réaction peut être brève, tandis qu'une pensée importante peut aller à son terme sans coupure artificielle.
- La voix du personnage prime sur le romantisme générique :
${frenchCharacterLines[charId] || "- Garde une voix distincte pour ce personnage dans le vocabulaire, le rythme et la distance émotionnelle."}

`;
        }

        if (this.lang === 'de') {
            return `**[Natürliche deutsche Stimme]**
- Dialoge klingen gesprochen, intim, modern und natürlich, nicht wie aus dem Englischen, Koreanischen oder Japanischen übersetzt.
- Länge und Rhythmus folgen Figur und Augenblick: Eine spontane Reaktion darf kurz sein, ein wichtiger Gedanke darf sich ohne künstliche Kürzung entfalten.
- Charakterstimme steht über generischer Romantik:
${germanCharacterLines[charId] || '- Gib diesem Charakter eine eigene Stimme in Wortwahl, Rhythmus und emotionaler Distanz.'}

`;
        }

        if (this.lang === 'pt') {
            return `**[Voz natural em português brasileiro]**
- O diálogo soa falado, íntimo, atual e natural, não como tradução literal do inglês, coreano ou japonês.
- A extensão e o ritmo seguem a personagem e o momento: uma reação pode ser breve, e uma ideia importante pode se desenvolver sem cortes artificiais.
- A voz da personagem vem antes do romance genérico:
${portugueseCharacterLines[charId] || '- Mantenha uma voz distinta para esta personagem no vocabulário, no ritmo e na distância emocional.'}

`;
        }

        return '';
    }

    /** 지연 헬퍼 */
    _delay(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    // =========================================================================
    // 오버레이 열기/닫기
    // =========================================================================

    /**
     * 프리토킹 오버레이 열기
     * @param {string} charId - 캐릭터 ID (예: 'seyoun')
     */
    open(charId, outingId = '') {
        this._invalidateGalleryTalkContext();
        const openEpoch = this._galleryTalkEpoch;
        this.currentCharId = charId;
        this.currentCharKey = this.CHAR_ID_TO_KEY[charId];
        if (!this.currentCharKey) return;
        const outings = window.CupidGalleryOutings;
        this.currentOuting = outings?.getPlace?.(charId, outingId) || null;
        if (outings && this.progress) {
            this.progress.setLastOuting?.(charId, this.currentOuting?.id || outingId || '');
        }

        this.overlayEl = document.getElementById('gallery-freetalk-overlay');
        if (!this.overlayEl) return;

        // 상태 초기화
        this.isTyping = false;
        this.skipTyping = false;
        this.isProcessing = false;

        // 채팅 기록 로드
        this._loadMemory(charId);
        this.chatHistory = this._sanitizeDainOutfitHistory(this.chatHistory, charId);
        this.chatHistory = this._sanitizeVisibleArtifactsHistory(this.chatHistory);
        const hasSavedConversation = this.chatHistory.some(message =>
            message?.role === 'user' || message?.role === 'assistant'
        );
        this.progress?.initializeCurrentAffinityForFreeTalk?.(charId, {
            hasConversation: hasSavedConversation
        });

        // 시스템 프롬프트 구성
        const systemPrompt = this._buildCachedSystemPrompt(charId);
        if (this.chatHistory.length > 0 && this.chatHistory[0].role === 'system') {
            this.chatHistory[0].content = systemPrompt;
        } else {
            this.chatHistory.unshift({ role: 'system', content: systemPrompt });
        }

        // UI 생성
        this._createOverlay(charId);
        this.overlayEl.classList.add('active');

        // 마지막 AI 메시지가 있으면 대사창에 표시
        this._showLastAssistantMessage();

        // 입력 포커스
        const input = document.getElementById('chat-input');
        if (input && (!window.isCupidDesktopPointer || window.isCupidDesktopPointer())) {
            setTimeout(() => {
                if (this._galleryTalkEpoch === openEpoch
                    && this.currentCharId === charId
                    && this.overlayEl?.classList?.contains('active')) {
                    input.focus();
                }
            }, 300);
        }

        console.log(`[GalleryFreeTalk] 오버레이 열기: ${charId}`);
    }

    /**
     * 프리토킹 오버레이 닫기
     */
    close() {
        if (!this.overlayEl) return;
        if (!this.overlayEl.classList.contains('active')) return;

        const closingCharId = this.currentCharId;
        const closingHistory = this.chatHistory;
        this._invalidateGalleryTalkContext();

        this.overlayEl.classList.remove('active');
        this.overlayEl.innerHTML = '';
        this.isProcessing = false;
        this.isTyping = false;
        this.skipTyping = false;

        // visualViewport 리스너 정리
        if (this._vvHandler && window.visualViewport) {
            window.visualViewport.removeEventListener('resize', this._vvHandler);
            window.visualViewport.removeEventListener('scroll', this._vvHandler);
            this._vvHandler = null;
        }

        // 메모리 저장
        if (closingCharId) {
            this._saveMemory(closingCharId, closingHistory);
        }

        console.log('[GalleryFreeTalk] 오버레이 닫기');
    }

    // =========================================================================
    // UI 생성 (VN 스타일 — 게임 내 프리토킹과 동일)
    // =========================================================================

    /**
     * 오버레이 내부 HTML 생성 (게임과 동일한 VN 레이아웃)
     * 구조: 배경 + 캐릭터(중앙 하단) + 대사창 + 입력창
     * @private
     */
    _createOverlay(charId) {
        const charName = this.CHAR_NAMES[charId]?.[this.lang] || charId;
        const bgUrl = this.currentOuting?.background || this.CHAR_BACKGROUNDS[charId];
        const currentAffinity = this.progress?.getCurrentAffinity?.(charId) || 0;
        const affinityTone = this._getAffinityTone(currentAffinity);
        const affinityValue = this._formatAffinityValue(currentAffinity);
        const affinityLabel = this._L(
            '현재 호감도',
            'Current affinity',
            'Afinidad actual',
            '現在の好感度',
            'Affinité actuelle',
            'Aktuelle Zuneigung',
            'Afinidade atual'
        );

        this.overlayEl.innerHTML = `
            <div class="gft-background" style="background-image: url('${bgUrl}')"></div>
            <div class="gft-character">
                <img id="gft-char-img" src="assets/images/characters/${charId}_normal.png?v=${window.ASSET_VERSION || ''}" alt="${charName}">
            </div>
            <div class="gft-ui-layer">
                <div id="dialogue-box">
                    <div id="name-tag">${charName}</div>
                    <div id="gft-affinity-display" class="gft-affinity-display ${affinityTone}"
                         role="status" aria-live="polite" aria-label="${affinityLabel}: ${affinityValue}">
                        <span class="gft-affinity-icon" aria-hidden="true">${this._getAffinityIcon(currentAffinity)}</span>
                        <span class="gft-affinity-value">${affinityValue}</span>
                    </div>
                    <div id="message"></div>
                </div>
                <div class="gft-bottom-row">
                    <div id="chat-container">
                        <div id="chat-guide">${this._getTip()}</div>
                        <div id="image-preview-container" style="display:none;">
                            <img id="image-preview" src="" alt="${this._L('선택한 이미지', 'Selected image', 'Imagen seleccionada', '選択した画像', 'Image sélectionnée', 'Ausgewähltes Bild', 'Imagem selecionada')}">
                            <button id="remove-image-btn" title="${this._L('이미지 삭제', 'Remove image', 'Eliminar imagen', '画像を削除', 'Supprimer l’image', 'Bild entfernen', 'Remover imagem')}">×</button>
                        </div>
                        <div id="chat-input-wrapper">
                            <button id="upload-image-btn" title="${this._L('사진', 'Photo', 'Foto', '写真', 'Photo', 'Foto', 'Foto')}">
                                <span>📸</span>
                            </button>
                            <input type="file" id="gft-file-input" accept="image/*" style="display:none;">
                            <textarea id="chat-input" maxlength="200" rows="1"
                                      placeholder="${this._L('메시지를 입력하세요...', 'Type a message...', 'Escribe un mensaje...', 'メッセージを入力…', 'Saisissez un message...', 'Nachricht eingeben...', 'Digite uma mensagem...')}"></textarea>
                            <button type="button" id="action-toggle-btn" title="${this._L('행동 묘사 (*)', 'Action (*)', 'Acción (*)', '行動描写 (*)', 'Action (*)', 'Aktion (*)', 'Ação (*)')}">✱</button>
                            <button id="chat-send" title="${this._L('전송', 'Send', 'Enviar', '送信', 'Envoyer', 'Senden', 'Enviar')}">
                                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <button class="gft-close-btn" title="${this._L('닫기', 'Close', 'Cerrar', '閉じる', 'Fermer', 'Schließen', 'Fechar')}">✕</button>
                </div>
            </div>
        `;

        // 이벤트 바인딩 (게임과 동일한 ID 사용)
        const closeBtn = this.overlayEl.querySelector('.gft-close-btn');
        const sendBtn = this.overlayEl.querySelector('#chat-send');
        const input = this.overlayEl.querySelector('#chat-input');
        const dialogueBox = this.overlayEl.querySelector('#dialogue-box');
        const uploadBtn = this.overlayEl.querySelector('#upload-image-btn');
        const fileInput = this.overlayEl.querySelector('#gft-file-input');
        const removeImgBtn = this.overlayEl.querySelector('#remove-image-btn');

        closeBtn.addEventListener('click', () => this.close());
        sendBtn.addEventListener('click', () => this._handleSend());
        input.addEventListener('input', () => this._resizeInput(input));
        this._resizeInput(input);

        // 대사창 클릭 → 타이핑 스킵 (게임과 동일)
        dialogueBox.addEventListener('click', () => {
            if (this.isTyping) this.skipTyping = true;
        });

        // 행동 묘사(*) 버튼: **를 삽입하고 커서를 사이에 둠
        const actionBtn = this.overlayEl.querySelector('#action-toggle-btn');
        if (actionBtn && input) {
            actionBtn.addEventListener('click', () => {
                const start = input.selectionStart || 0;
                const end = input.selectionEnd || 0;
                const val = input.value;
                input.value = val.substring(0, start) + '**' + val.substring(end);
                const cursor = start + 1;
                input.setSelectionRange(cursor, cursor);
                this._resizeInput(input);
                input.focus();
            });
        }

        // 이미지 업로드
        uploadBtn.addEventListener('click', () => {
            if (input.disabled) return;
            fileInput.click();
        });
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this._handleImageUpload(file);
            fileInput.value = ''; // 같은 파일 재선택 가능
        });
        removeImgBtn.addEventListener('click', () => this._removeStagedImage());

        // 모바일: visualViewport로 키보드 대응 (게임과 동일 방식)
        // 오버레이 크기는 변경하지 않고, UI 레이어만 키보드 위로 이동
        this._vvHandler = null;
        if (window.visualViewport && window.innerWidth <= 768) {
            const uiLayer = this.overlayEl.querySelector('.gft-ui-layer');
            const updateKeyboardOffset = () => {
                if (!uiLayer) return;
                const keyboardOffset = typeof window.getCupidKeyboardOffset === 'function'
                    ? window.getCupidKeyboardOffset(document.activeElement)
                    : 0;
                uiLayer.style.setProperty('--keyboard-offset', `${keyboardOffset}px`);
                uiLayer.classList.toggle('keyboard-active', keyboardOffset > 0);
                uiLayer.style.transform = keyboardOffset > 0
                    ? `translate3d(0, -${keyboardOffset}px, 0)`
                    : '';
            };

            this._vvHandler = () => requestAnimationFrame(updateKeyboardOffset);
            window.visualViewport.addEventListener('resize', this._vvHandler);
            window.visualViewport.addEventListener('scroll', this._vvHandler);
            input.addEventListener('focus', () => setTimeout(updateKeyboardOffset, 120));
            input.addEventListener('blur', () => setTimeout(updateKeyboardOffset, 120));
            updateKeyboardOffset();
        }
    }

    /**
     * 마지막 AI 메시지를 대사창에 표시 (이전 대화 복원)
     * @private
     */
    _showLastAssistantMessage() {
        for (let i = this.chatHistory.length - 1; i >= 0; i--) {
            if (this.chatHistory[i].role === 'assistant') {
                const parsed = this._parseResponse(this.chatHistory[i].content);
                const text = parsed.text || this._sanitizeVisibleArtifacts(this.chatHistory[i].content);
                const msgEl = document.getElementById('message');
                if (msgEl) msgEl.innerHTML = this._formatAction(text);
                // 마지막 표정도 복원
                if (parsed.expression) this._updateExpression(parsed.expression);
                return;
            }
        }
    }

    // =========================================================================
    // 메시지 전송 / API 호출
    // =========================================================================

    _buildInWorldUserRoleBlock(messages) {
        if (!Array.isArray(messages)) return '';

        const userMessages = [...messages].reverse().filter(msg =>
            msg &&
            msg.role === 'user' &&
            typeof msg.content === 'string' &&
            String(msg.content || '').trim()
        ).slice(0, 8);

        if (userMessages.length === 0) return '';

        const cleanRoleName = (value) => String(value || '')
            .replace(/["'“”‘’「」『』]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 32);

        const blockedRoleNames = new Set([
            'ai', 'assistant', 'bot', 'system', 'user', 'player',
            '사용자', '유저', '플레이어', '주인공', '캐릭터'
        ]);

        for (const msg of userMessages) {
            const text = String(msg.content || '');
            const koMatch =
                text.match(/(?:당신|너|플레이어|유저|사용자|주인공)\s*(?:은|는|이|가)?\s*["'“”‘’「」『』]?([가-힣A-Za-z0-9_\- ]{1,24}?)["'“”‘’「」『』]?\s*(?:이|가)?(?:예요|이에요|입니다|야|이다|임)(?:[\s.!?。]|$)/u) ||
                text.match(/(?:나는|내가|저는|제가)\s*["'“”‘’「」『』]?([가-힣A-Za-z0-9_\- ]{1,24}?)["'“”‘’「」『』]?\s*(?:이|가)?(?:예요|이에요|입니다|야|이다|임)(?:[\s.!?。]|$)/u);
            const enMatch =
                text.match(/\b(?:you are|you're)\s+(?:playing\s+as\s+)?["'“”‘’]?([A-Za-z][A-Za-z0-9_\- ]{1,30})["'“”‘’]?(?:[\s.!?]|$)/i) ||
                text.match(/\b(?:the player is|player is|the user is|user is|i am|i'm)\s+(?:playing\s+as\s+)?["'“”‘’]?([A-Za-z][A-Za-z0-9_\- ]{1,30})["'“”‘’]?(?:[\s.!?]|$)/i);

            const roleName = cleanRoleName(koMatch?.[1] || enMatch?.[1] || '');
            if (!roleName || blockedRoleNames.has(roleName.toLowerCase())) continue;

            if (this.lang === 'ko') {
                return `\n\n[사용자 배역]\n사용자 캐릭터는 "${roleName}"입니다. ${roleName} 이름표로 적힌 말·행동·침묵은 이미 일어난 사용자 쪽 장면으로 받습니다. 그 맥락에서 ${roleName}의 자연스러운 반응·감정·속마음을 추론해 서술할 수 있지만, 사용자가 명시한 상태·선택·동의·거절과 충돌시키지는 마세요.`;
            }

            return `\n\n[User character]\nThe user character is "${roleName}". Treat lines, actions, and silences labeled ${roleName} as already performed by the user side. You may infer and narrate a natural response, emotion, or inner thought for ${roleName} from that context, but keep it compatible with any state, choice, consent, or refusal the user explicitly states.`;
        }

        return '';
    }

    /**
     * 전송 핸들러 (VN 스타일: 대사창에 타이핑 효과)
     * @private
     */
    _resizeInput(input = document.getElementById('chat-input')) {
        if (!input) return;
        const maxHeight = this._getTextareaMaxHeight(input, 5);
        input.style.height = 'auto';
        input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;
        input.style.overflowY = input.scrollHeight > maxHeight + 1 ? 'auto' : 'hidden';
    }

    _getTextareaMaxHeight(input, maxRows = 5) {
        const style = window.getComputedStyle(input);
        const parsePx = (value) => Number.parseFloat(value) || 0;
        const fontSize = parsePx(style.fontSize) || 16;
        const lineHeight = parsePx(style.lineHeight) || fontSize * 1.4;
        const verticalPadding = parsePx(style.paddingTop) + parsePx(style.paddingBottom);
        const verticalBorder = parsePx(style.borderTopWidth) + parsePx(style.borderBottomWidth);
        return Math.ceil((lineHeight * maxRows) + verticalPadding + verticalBorder);
    }

    _invalidateGalleryTalkContext() {
        if (this._activeRequestContext) {
            this._rollbackRequestHistory(this._activeRequestContext);
        }
        this._galleryTalkEpoch += 1;
        this._activeChatTurnId = null;
        this._activeRequestOwner = null;
        this._activeRequestContext = null;
        this._typingGeneration += 1;
        this._activeTypingOwner = null;
        this.isTyping = false;
        this.skipTyping = false;
    }

    _isRequestContextCurrent(requestContext) {
        return Boolean(requestContext
            && this._galleryTalkEpoch === requestContext.epoch
            && this.currentCharId === requestContext.charId
            && this.currentCharKey === requestContext.charKey
            && this.chatHistory === requestContext.history
            && this._activeRequestOwner === requestContext.owner
            && this.overlayEl?.classList?.contains('active'));
    }

    _assertRequestContext(requestContext, payload = null) {
        if (!this._isRequestContextCurrent(requestContext)) {
            throw this._makeStaleTurnError('Gallery free-talk character changed before the AI response completed');
        }
        this._assertCurrentTurn(requestContext.turnMeta, payload);
    }

    _rollbackRequestHistory(requestContext) {
        const history = requestContext?.history;
        const start = requestContext?.historyLengthBeforeTurn;
        if (!Array.isArray(history) || !Number.isInteger(start) || start < 0) return;
        if (history.length > start) history.splice(start);
    }

    _hashTurnText(value) {
        const text = String(value || '');
        let hash = 2166136261;
        for (let i = 0; i < text.length; i++) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return `${(hash >>> 0).toString(36)}:${text.length}`;
    }

    _createTurnMeta(latestUserText) {
        const text = String(latestUserText || '').trim();
        if (!text) return null;
        return {
            turnId: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
            latestUserHash: this._hashTurnText(text),
            latestUserLength: text.length
        };
    }

    _makeStaleTurnError(message = 'Stale AI response ignored') {
        const error = new Error(message);
        error.name = 'StaleTurnError';
        error.reason = 'STALE_TURN';
        error.isStaleTurn = true;
        return error;
    }

    _assertCurrentTurn(turnMeta, payload = null) {
        if (!turnMeta?.turnId) return;
        if (this._activeChatTurnId && this._activeChatTurnId !== turnMeta.turnId) {
            throw this._makeStaleTurnError();
        }
        if (payload?.turnId && payload.turnId !== turnMeta.turnId) {
            throw this._makeStaleTurnError('AI response turn id did not match request');
        }
        if (payload?.latestUserHash && payload.latestUserHash !== turnMeta.latestUserHash) {
            throw this._makeStaleTurnError('AI response latest user hash did not match request');
        }
    }

    _forceLatestUserMessageLast(messages = [], latestContent = '') {
        const text = String(latestContent || '');
        if (!text) return Array.isArray(messages) ? messages : [];
        const withoutDuplicate = (Array.isArray(messages) ? messages : []).filter(msg => !(msg?.role === 'user' && msg.content === text));
        return [...withoutDuplicate, { role: 'user', content: text }];
    }

    async _handleSend() {
        if (this.isProcessing) return;
        if (!this.currentCharId || !this.currentCharKey || !this.overlayEl?.classList?.contains('active')) return;

        const requestOwner = {};
        const requestContext = {
            owner: requestOwner,
            epoch: this._galleryTalkEpoch,
            charId: this.currentCharId,
            charKey: this.currentCharKey,
            history: this.chatHistory,
            historyLengthBeforeTurn: null,
            turnMeta: null,
            incidentRuntime: null
        };
        const requestHistory = requestContext.history;
        const requestCharId = requestContext.charId;
        const requestCharKey = requestContext.charKey;

        const input = document.getElementById('chat-input');
        const text = input.value.trim();
        const stagedImage = this.stagedImage;

        // 텍스트와 이미지 둘 다 없으면 전송 안 함
        if (!text && !stagedImage) return;

        input.value = '';
        this._resizeInput(input);
        this._activeRequestOwner = requestOwner;
        this._activeRequestContext = requestContext;
        this.isProcessing = true;

        // 이미지 + 텍스트 결합 (게임과 동일: text\n\nbase64)
        const finalContent = stagedImage
            ? (text ? `${text}\n\n${stagedImage}` : stagedImage)
            : text;

        const msgEl = document.getElementById('message');
        const nameTag = document.getElementById('name-tag');
        const playerName = this.progress.getPlayerName() || this._L('자기', 'Honey', 'Cariño', '俺', 'Chéri', 'Liebling', 'Amor');

        // 이름표를 플레이어로 변경, 유저 메시지 표시
        if (nameTag) nameTag.textContent = playerName;
        if (msgEl) {
            msgEl.innerHTML = '';
            if (text) msgEl.textContent = text;
            if (stagedImage) {
                const img = document.createElement('img');
                img.src = stagedImage;
                img.className = 'gft-chat-image';
                img.alt = this._L('첨부 이미지', 'Attached image', 'Imagen adjunta', '添付画像', 'Image jointe', 'Angehängtes Bild', 'Imagem anexada');
                msgEl.appendChild(img);
            }
        }

        // 이미지 미리보기 제거
        this._removeStagedImage();

        // 직전 턴에서 바뀐 현재 호감도와 관계 온도를 시스템 상태에 반영
        const currentSystemPrompt = this._buildCachedSystemPrompt(requestCharId);
        if (requestHistory[0]?.role === 'system') {
            requestHistory[0].content = currentSystemPrompt;
        } else {
            requestHistory.unshift({ role: 'system', content: currentSystemPrompt });
        }

        const historyLengthBeforeTurn = requestHistory.length;
        requestContext.historyLengthBeforeTurn = historyLengthBeforeTurn;
        requestHistory.push({ role: 'user', content: finalContent });

        // 전송 버튼 & 입력 비활성화 + 로딩 상태 (게임과 동일)
        const sendBtn = document.getElementById('chat-send');
        const originalBtnContent = sendBtn ? sendBtn.innerHTML : '';
        if (sendBtn) {
            sendBtn.disabled = true;
            sendBtn.innerHTML = '<span class="loading-dots">...</span>';
        }
        if (input) input.disabled = true;

        // 생각중 상태 (게임과 동일: thinking 클래스)
        const charImg = document.getElementById('gft-char-img');
        const dialogueBox = document.getElementById('dialogue-box');
        if (charImg) charImg.classList.add('thinking');
        if (dialogueBox) dialogueBox.classList.add('thinking-box');

        // 캐릭터 위 생각중 인디케이터
        const gftChar = this.overlayEl.querySelector('.gft-character');
        if (gftChar && !gftChar.querySelector('.thinking-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'thinking-indicator';
            indicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            gftChar.appendChild(indicator);
        }
        const pendingCharName = this.CHAR_NAMES[requestCharId]?.[this.lang] || requestCharId;
        this._showThinkingMessage(pendingCharName);

        let _lastTurnMeta = null;
        let _lastCacheKey = '';
        let _lastAiEndpoint = '';

        try {
            // [Explicit Caching] 캐시 키 헤더 추가
            // 토큰 절감: 최근 5개 메시지 외의 이미지는 [이전 사진]으로 치환
            this._assertRequestContext(requestContext);
            const _historyForRequest = this._sanitizeDainOutfitHistory(this._buildWindowedHistory(requestHistory, requestCharId), requestCharId);
            let _optimized = (typeof window.optimizeImageHistory === 'function')
                ? window.optimizeImageHistory(_historyForRequest, 5)
                : _historyForRequest;
            const _latestUserCanonBlock = buildGalleryLatestUserCanonBlock(_optimized, this.lang || 'en', finalContent);
            const _inWorldUserRoleBlock = this._buildInWorldUserRoleBlock(_optimized);
            const _recentRepetitionGuard = buildGalleryRecentExpressionRepetitionGuard(_optimized, this.lang || 'en');
            const _incidentRuntime = this._prepareGalleryIncidentRuntime(requestCharId);
            requestContext.incidentRuntime = _incidentRuntime;
            const _incidentRuntimeBlock = GalleryFreeTalkCore.buildGalleryIncidentRuntimeBlock({
                lang: this.lang || 'en',
                characterName: this.CHAR_NAMES[requestCharId]?.[this.lang] || requestCharId,
                state: _incidentRuntime.state,
                plan: _incidentRuntime.plan
            });
            const _relationshipAftermathBlock = GalleryFreeTalkCore.buildRelationshipAftermathBlock({
                lang: this.lang || 'en',
                state: this.progress?.getRelationshipAftermath?.(requestCharId)
            });
            const _memoryRecall = typeof window.prepareCupidPromptMemoryRecall === 'function'
                ? await window.prepareCupidPromptMemoryRecall({
                    charId: requestCharKey,
                    value: finalContent,
                    messages: _optimized
                })
                : [];
            this._assertRequestContext(requestContext);
            const _dataBankRecallBlock = GalleryFreeTalkCore.buildDataBankRecallBlock(_memoryRecall, {
                lang: this.lang || 'en',
                playerName: this.progress.getPlayerName() || '',
                characterName: this.CHAR_NAMES[requestCharId]?.[this.lang] || requestCharId
            });
            const _lowInformationContinuationRule = typeof window.buildCupidLowInformationContinuationRule === 'function'
                ? window.buildCupidLowInformationContinuationRule(finalContent, this.lang || 'en')
                : '';
            const _postHistoryGuidance = GalleryFreeTalkCore.buildPostHistoryGuidance(_optimized, this.lang || 'en', {
                repetitionGuard: _recentRepetitionGuard,
                lowInformationRule: _lowInformationContinuationRule
            });
            const _runtimePromptPatch = `${_latestUserCanonBlock}${_inWorldUserRoleBlock}${_relationshipAftermathBlock}${_dataBankRecallBlock}${_incidentRuntimeBlock}${_postHistoryGuidance}`;
            if (_runtimePromptPatch && Array.isArray(_optimized) && _optimized[0]?.role === 'system') {
                _optimized = [
                    { ..._optimized[0], content: appendGalleryFreeTalkDynamicContext(_optimized[0].content, _runtimePromptPatch) },
                    ..._optimized.slice(1)
                ];
            }
            _optimized = this._forceLatestUserMessageLast(_optimized, finalContent);
            const _stablePromptContent = Array.isArray(_optimized) && _optimized[0]?.role === 'system'
                ? _optimized[0].content
                : '';
            const _stablePromptFingerprint = _stablePromptContent
                ? getGalleryFreeTalkStablePromptFingerprint(_stablePromptContent)
                : '';
            const _gftCacheKey = requestCharId && _stablePromptFingerprint
                ? `cupid-gft:ctx:${encodeGalleryFreeTalkCacheKeyPart(this.lang)}:${encodeGalleryFreeTalkCacheKeyPart(requestCharId)}:s${_stablePromptFingerprint}`
                : '';
            _lastCacheKey = _gftCacheKey;
            const _turnMeta = this._createTurnMeta(finalContent);
            _lastTurnMeta = _turnMeta;
            requestContext.turnMeta = _turnMeta;
            this._activeChatTurnId = _turnMeta?.turnId || null;
            const aiEndpoint = window.AI_API_ENDPOINT || 'https://openrouter-api.yama5993.workers.dev/';
            _lastAiEndpoint = aiEndpoint;
            const fallbackEndpoint = ''; // AI text must not fall back to the legacy Gemini endpoint.
            const requestCupidGalleryReplyData = async (messages) => {
                const requestInit = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-app-type': 'cupid',
                        'x-request-type': 'character',
                        'x-chat-mode': 'single',
                        'x-output-language': this.lang,
                        ...(_gftCacheKey && { 'x-cache-key': _gftCacheKey })
                    },
                    body: JSON.stringify({
                        messages,
                        characterId: requestCharId || '',
                        requestType: 'character',
                        chatMode: 'single',
                        outputLanguage: this.lang,
                        cacheKey: _gftCacheKey,
                        ...(_turnMeta || {})
                    })
                };
                const fetchWithTransientRetry = async (endpoint) => {
                    let lastError = null;
                    for (let attempt = 0; attempt < 3; attempt += 1) {
                        try {
                            const response = await fetch(endpoint, requestInit);
                            if (!shouldRetryGalleryAiResponse(response)
                                || navigator.onLine === false
                                || attempt >= 2) {
                                return response;
                            }
                            try { await response.body?.cancel?.(); } catch (_) { /* best-effort cleanup */ }
                        } catch (error) {
                            lastError = error;
                            this._assertRequestContext(requestContext);
                            const isTransientFetchError = error instanceof TypeError
                                || /^(?:Failed to fetch|Load failed|NetworkError)$/i.test(error?.message || '');
                            if (!isTransientFetchError || navigator.onLine === false || attempt >= 2) throw error;
                        }
                        await new Promise(resolve => window.setTimeout(resolve, 400 * (attempt + 1)));
                        this._assertRequestContext(requestContext);
                    }
                    throw lastError;
                };
                let response;
                let primaryError = null;
                _lastAiEndpoint = aiEndpoint;
                try {
                    response = await fetchWithTransientRetry(aiEndpoint);
                    this._assertRequestContext(requestContext);
                } catch (error) {
                    this._assertRequestContext(requestContext);
                    primaryError = error;
                }

                const canFallback = (
                    primaryError instanceof TypeError || shouldFailOverGalleryAiResponse(response)
                ) && fallbackEndpoint && fallbackEndpoint !== aiEndpoint;
                if (canFallback) {
                    _lastAiEndpoint = fallbackEndpoint;
                    response = await fetchWithTransientRetry(fallbackEndpoint);
                    this._assertRequestContext(requestContext);
                } else if (primaryError) {
                    throw primaryError;
                }

                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return await response.json();
            };

            let data = await requestCupidGalleryReplyData(_optimized);
            this._assertRequestContext(requestContext, data);
            const replyContent = data?.choices?.[0]?.message?.content;
            let reply = typeof replyContent === 'string' ? replyContent.trim() : '';

            if (!reply) {
                console.warn('[Cupid GalleryFreeTalk] Empty AI response payload:', {
                    reason: data?.reason || data?.error || data?.choices?.[0]?.finish_reason || 'EMPTY_AI_RESPONSE',
                    character: requestCharId || ''
                });
                throw new Error('AI response was empty. Please try again.');
            }

            // 응답 파싱
            if (data?.provider === 'deepseek' && data?.usage) {
                const usage = data.usage;
                const cache = data.cache || {};
                const hitTokens = Number(cache.prompt_cache_hit_tokens ?? usage.prompt_cache_hit_tokens ?? 0);
                const missTokens = Number(cache.prompt_cache_miss_tokens ?? usage.prompt_cache_miss_tokens ?? 0);
                const hitRatio = hitTokens + missTokens > 0 ? hitTokens / (hitTokens + missTokens) : 0;
                console.info('[DeepSeek Cache]', {
                    app: 'cupid-gallery-freetalk',
                    character: requestCharId || '',
                    cacheKey: _gftCacheKey || '',
                    hitTokens,
                    missTokens,
                    hitRatio: Number(hitRatio.toFixed(4)),
                    promptTokens: Number(usage.prompt_tokens || hitTokens + missTokens || 0),
                    completionTokens: Number(usage.completion_tokens || 0),
                    totalTokens: Number(usage.total_tokens || 0)
                });
            }

            this._assertRequestContext(requestContext, data);
            let parsed = this._parseResponse(reply);
            const roleplayQualityOptions = {
                lang: this.lang,
                charKey: requestCharKey || requestCharId,
                recentMessages: _optimized,
                latestUserText: finalContent,
                incidentState: requestContext.incidentRuntime?.state || null,
                incidentPlan: requestContext.incidentRuntime?.plan || null
            };

            for (let repairAttempt = 0; repairAttempt < 2; repairAttempt += 1) {
                const qualityIssue = window.getCupidRoleplayQualityIssue?.(
                    parsed,
                    roleplayQualityOptions
                );
                if (!qualityIssue?.shouldRetry) break;

                console.warn('[Cupid GalleryFreeTalk] Rejected roleplay draft; regenerating before display', qualityIssue);
                const repairBlock = window.buildCupidRoleplayQualityRepairBlock?.(
                    qualityIssue,
                    this.lang,
                    requestCharKey || requestCharId
                );
                if (!repairBlock || !_optimized[0] || _optimized[0].role !== 'system') break;

                let repairMessages = [
                    {
                        ..._optimized[0],
                        content: appendGalleryFreeTalkDynamicContext(_optimized[0].content, repairBlock)
                    },
                    ..._optimized.slice(1)
                ];
                repairMessages = this._forceLatestUserMessageLast(repairMessages, finalContent);
                data = await requestCupidGalleryReplyData(repairMessages);
                this._assertRequestContext(requestContext, data);
                const repairedContent = data?.choices?.[0]?.message?.content;
                reply = typeof repairedContent === 'string' ? repairedContent.trim() : '';
                if (!reply) throw new Error('AI response was empty. Please try again.');
                parsed = this._parseResponse(reply);
            }

            let finalQualityIssue = window.getCupidRoleplayQualityIssue?.(
                parsed,
                roleplayQualityOptions
            );
            if (finalQualityIssue?.shouldRetry) {
                const recovered = window.recoverCupidRoleplayQualityFallback?.(
                    parsed,
                    roleplayQualityOptions
                );
                if (recovered) {
                    console.warn('[Cupid GalleryFreeTalk] Kept the valid response segments after quality retries were exhausted', recovered.qualityRecovery);
                    parsed = recovered;
                    finalQualityIssue = recovered.qualityRecovery?.acceptedAfterRetries
                        ? null
                        : window.getCupidRoleplayQualityIssue?.(
                            parsed,
                            roleplayQualityOptions
                        );
                }
            }
            if (finalQualityIssue?.shouldRetry) {
                const qualityError = new Error('AI response failed roleplay quality validation. Please try again.');
                qualityError.reason = 'ROLEPLAY_QUALITY_REJECTED';
                qualityError.qualityIssue = finalQualityIssue;
                throw qualityError;
            }

            if (!parsed?.text && !(Array.isArray(parsed?.segments) && parsed.segments.length > 0)) {
                throw new Error('AI response did not contain visible roleplay text. Please try again.');
            }
            const displayText = this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(parsed.text || ''));
            const displaySegments = this._sanitizeSegmentsPlaceholders(parsed.segments || null);
            if (!displayText) {
                throw new Error('AI response did not contain visible roleplay text. Please try again.');
            }

            this._assertRequestContext(requestContext, data);
            // 이름표를 캐릭터로 변경 + 생각중 상태 해제
            const charName = this.CHAR_NAMES[requestCharId]?.[this.lang] || requestCharId;
            this._clearThinkingMessage();
            if (nameTag) nameTag.textContent = charName;
            if (charImg) charImg.classList.remove('thinking');
            if (dialogueBox) dialogueBox.classList.remove('thinking-box');
            document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());

            // 대사창에 타이핑 효과로 표시 (segments 있으면 구조화 렌더)
            await this._typeText(displayText, displaySegments, requestContext);
            const assistantRenderReceipt = this._getChatRenderReceipt(displayText, displaySegments);
            this._assertRequestContext(requestContext, data);
            this._updateExpression(parsed.expression, requestCharId);
            this._assertRequestContext(requestContext, data);
            const incidentResult = this._commitGalleryIncidentTurn({
                charId: requestCharId,
                runtime: requestContext.incidentRuntime,
                payload: parsed.incident,
                visibleText: displayText,
                latestUserText: finalContent,
                turnAffinity: parsed.affinity
            });
            const affinityResult = this._applyAffinityChange(incidentResult.affinityChange, requestCharId);
            const aftermathFromIncident = Boolean(incidentResult.startedCategory && incidentResult.activeIncident?.summary);
            const nextAftermath = GalleryFreeTalkCore.updateRelationshipAftermath(
                this.progress?.getRelationshipAftermath?.(requestCharId),
                affinityResult?.requestedChange ?? 0,
                aftermathFromIncident ? incidentResult.activeIncident.summary : finalContent,
                {
                    source: aftermathFromIncident ? 'incident' : 'user',
                    fallbackCause: this.lang === 'ko'
                        ? (aftermathFromIncident ? '두 사람 사이에 생긴 관계 사건' : '사용자가 직전에 남긴 말이나 행동')
                        : (aftermathFromIncident ? 'a relationship event between them' : 'the user\'s preceding words or action')
                }
            );
            this.progress?.setRelationshipAftermath?.(requestCharId, nextAftermath);
            requestHistory.push({ role: 'assistant', content: displayText });

            // 프리토킹 횟수 증가
            this._incrementFreeTalkCount(requestCharId);

            this._assertRequestContext(requestContext, data);
            this._saveMemory(requestCharId, requestHistory);

            // D1 chat-logs 저장 (백업 뷰어용, 비동기 fire-and-forget)
            // charId: 대문자 키(this.currentCharKey)로 저장해 게임 내 프리토킹 기록과 버킷 통일
            // assistantContent: 파싱된 displayText(raw JSON 저장 금지 — 뷰어에서 원본 JSON이 그대로 노출됨)
            if (typeof window.saveCupidChatLog === 'function') {
                this._assertRequestContext(requestContext, data);
                window.saveCupidChatLog({
                    charId: requestCharKey,
                    userContent: finalContent,
                    assistantContent: displayText,
                    sessionId: 'gallery-freetalk',
                    context: '1:1',
                    playerName: this.progress.getPlayerName() || '',
                    affinityChange: affinityResult?.change,
                    affinityCurrent: affinityResult?.value,
                    assistantRenderReceipt,
                    responseMetadata: data
                });
            }

        } catch (err) {
            const ownsCurrentContext = this._isRequestContextCurrent(requestContext);
            this._rollbackRequestHistory(requestContext);
            if (!ownsCurrentContext || err?.isStaleTurn || err?.reason === 'STALE_TURN') {
                console.warn('[Cupid GalleryFreeTalk] Ignored stale chat response');
                err.__staleTurnHandled = true;
            }
            if (!err?.__staleTurnHandled) {
                const isTransientTransportFailure = err instanceof TypeError
                    || /^(?:Failed to fetch|Load failed|NetworkError|HTTP (?:408|425|429|5\d\d))$/i.test(err?.message || '');
                const isOfflineTransportFailure = navigator.onLine === false
                    && (err instanceof TypeError || /^(?:Failed to fetch|Load failed|NetworkError)$/i.test(err?.message || ''));
                if (isTransientTransportFailure) console.warn('[GalleryFreeTalk] transport interruption:', err?.message || err);
                else console.error('[GalleryFreeTalk] API 오류:', err);
                if (typeof window.logCupidError === 'function' && !isOfflineTransportFailure && !isTransientTransportFailure) {
                    window.logCupidError(err, {
                        source: 'cupid-gallery-freetalk',
                        errorType: err?.reason === 'ROLEPLAY_QUALITY_REJECTED'
                            ? 'freetalk_roleplay_quality_rejected'
                            : (/^HTTP\s+\d+/.test(err?.message || '') ? 'freetalk_http_error' : 'freetalk_request_failed'),
                        sessionId: 'gallery-freetalk',
                        context: {
                            charId: requestCharKey || requestCharId || '',
                            galleryCharId: requestCharId || '',
                            language: this.lang || '',
                            freeTalkCount: this.progress?.getFreeTalkCount?.(requestCharId) || 0
                        },
                        extra: {
                            cacheKey: _lastCacheKey,
                            aiEndpoint: _lastAiEndpoint,
                            turnId: _lastTurnMeta?.turnId || '',
                            latestUserHash: _lastTurnMeta?.latestUserHash || '',
                            latestUserLength: _lastTurnMeta?.latestUserLength || String(finalContent || '').length,
                            hasImage: String(finalContent || '').includes('data:image/'),
                            historyLength: requestHistory.length,
                            qualityReason: err?.qualityIssue?.reason || ''
                        }
                    });
                }
                this._clearThinkingMessage();
                const noticeLabel = this._L('안내', 'Notice', 'Aviso', 'お知らせ', 'Information', 'Hinweis', 'Aviso');
                if (nameTag) nameTag.textContent = noticeLabel;
                if (charImg) charImg.classList.remove('thinking');
                if (dialogueBox) dialogueBox.classList.remove('thinking-box');
                document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());
                const requestErrorMessage = this._L(
                    '연결이 잠시 원활하지 않습니다. 방금 입력은 대화 기록에 저장되지 않았습니다. 다시 시도해 주세요.',
                    'The connection was interrupted. Your last input was not saved to the conversation. Please try again.',
                    'La conexión se interrumpió. Tu último mensaje no se guardó en la conversación. Inténtalo de nuevo.',
                    '接続が一時的に中断されました。直前の入力は会話履歴に保存されていません。もう一度お試しください。',
                    'La connexion a été interrompue. Votre dernier message n’a pas été enregistré dans la conversation. Réessayez.',
                    'Die Verbindung wurde unterbrochen. Deine letzte Eingabe wurde nicht im Gespräch gespeichert. Bitte versuche es erneut.',
                    'A conexão foi interrompida. Sua última mensagem não foi salva na conversa. Tente novamente.'
                );
                await this._typeText(requestErrorMessage, null, requestContext);
            }
        }

        if (this._activeRequestOwner === requestOwner) {
            this._activeRequestOwner = null;
            this._activeRequestContext = null;
            this._activeChatTurnId = null;
            if (charImg) charImg.classList.remove('thinking');
            if (dialogueBox) dialogueBox.classList.remove('thinking-box');
            document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());
            this._clearThinkingMessage();

            // UI 복원 (게임과 동일: 버튼 원복 + 입력 활성화)
            if (sendBtn) {
                sendBtn.disabled = false;
                sendBtn.innerHTML = originalBtnContent;
            }
            if (input) {
                input.disabled = false;
                if (!window.isCupidDesktopPointer || window.isCupidDesktopPointer()) {
                    input.focus();
                }
            }
            this.isProcessing = false;
        }
    }

    // =========================================================================
    // 응답 파싱
    // =========================================================================

    /**
     * AI 응답 파싱 (FreeTalkSystem.parseJsonResponse 경량 버전)
     * @private
     */
    _getPlayerDisplayName() {
        return this.progress?.getPlayerName?.() || this._L('자기', 'Honey', 'Cariño', 'あなた', 'Chéri', 'Liebling', 'Amor');
    }

    _sanitizePlayerPlaceholders(text) {
        if (typeof text !== 'string' || !text) return text || '';

        const playerName = this._getPlayerDisplayName();
        const tokenPattern = String.raw`(?:\$\{\s*(?:playerName|userName|username|user|player|name)\s*\}|\{\{\s*(?:user|player|playerName|userName|username|name)\s*\}\}|\{\s*(?:playerName|userName|username|user|player|name)\s*\}|PLAYER_NAME)`;
        const hasFinalConsonant = (value) => {
            const trimmed = String(value || '').trim();
            if (!trimmed) return false;
            const code = trimmed.charCodeAt(trimmed.length - 1);
            if (code < 0xAC00 || code > 0xD7A3) return false;
            return ((code - 0xAC00) % 28) !== 0;
        };
        const endsWithRieul = (value) => {
            const trimmed = String(value || '').trim();
            if (!trimmed) return false;
            const code = trimmed.charCodeAt(trimmed.length - 1);
            return code >= 0xAC00 && code <= 0xD7A3 && ((code - 0xAC00) % 28) === 8;
        };
        const final = hasFinalConsonant(playerName);
        const particle = {
            subject: final ? '이' : '가',
            topic: final ? '은' : '는',
            object: final ? '을' : '를',
            with: final ? '과' : '와',
            call: final ? '아' : '야',
            route: final && !endsWithRieul(playerName) ? '으로' : '로'
        };

        let out = text;
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:이\\(가\\)|가\\(이\\)|이|가)`, 'gi'), `${playerName}${particle.subject}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:은\\(는\\)|는\\(은\\)|은|는)`, 'gi'), `${playerName}${particle.topic}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:을\\(를\\)|를\\(을\\)|을|를)`, 'gi'), `${playerName}${particle.object}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:와\\(과\\)|과\\(와\\)|와|과)`, 'gi'), `${playerName}${particle.with}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:아\\(야\\)|야\\(아\\)|아|야)`, 'gi'), `${playerName}${particle.call}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:\\(으\\)로|으로|로)`, 'gi'), `${playerName}${particle.route}`);
        return out.replace(new RegExp(tokenPattern, 'gi'), playerName);
    }

    _sanitizeSegmentsPlaceholders(segments) {
        if (!Array.isArray(segments)) return segments || null;
        return segments.map(seg => {
            if (!seg || typeof seg !== 'object') return seg;
            return { ...seg, text: this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(seg.text || '')) };
        }).filter(seg => seg && seg.text);
    }

    _sanitizeVisibleArtifacts(text) {
        if (typeof text !== 'string' || !text) return text || '';

        const locale = String(this.lang || document.documentElement.lang || 'ko')
            .toLowerCase()
            .split('-')[0];
        const interestText = {
            ko: '흥미롭네',
            ja: '面白いね。',
            en: 'Interesting.',
            es: 'Qué interesante.',
            fr: 'Intéressant.',
            de: 'Interessant.',
            pt: 'Interessante.'
        }[locale] || 'Interesting.';
        const pauseBeat = {
            ko: '*잠깐 정적이 흐른다.*',
            ja: '*しばし沈黙が流れる。*',
            en: '*A brief silence follows.*',
            es: '*Se hace un breve silencio.*',
            fr: '*Un bref silence s’installe.*',
            de: '*Für einen Moment herrscht Stille.*',
            pt: '*Um breve silêncio se instala.*'
        }[locale] || '*A brief silence follows.*';
        const shortPause = {
            ko: '잠깐',
            ja: 'しばらく',
            en: 'a brief pause',
            es: 'una breve pausa',
            fr: 'un bref instant',
            de: 'einen Moment',
            pt: 'uma breve pausa'
        }[locale] || 'a brief pause';

        return text
            .replace(/\bInterest\s*[+-]\s*\d+\b\.?/gi, interestText)
            .replace(/\bAffinity\s*[+-]\s*\d+\b\.?/gi, '')
            .replace(/\bSTAT(?:S)?\s*[+-]\s*\d+\b\.?/gi, '')
            .replace(/(?:흥미|관심)\s*[+-]\s*\d+/g, locale === 'ko' ? '흥미롭네' : interestText)
            .replace(/(?:호감도|호감|친밀도)\s*[+-]\s*\d+/g, '')
            .replace(/(?:興味|関心)\s*[+-]\s*\d+/g, locale === 'ja' ? '面白いね。' : interestText)
            .replace(/(?:好感度|好感|親密度)\s*[+-]\s*\d+/g, '')
            .replace(/(?:Δ|delta)\s*[+-]\s*\d+/gi, '')
            .replace(/\*\s*\d+(?:[.,]\d+)?\s*(?:초간|초|秒|sec(?:onds?)?|second(?:s)?|seg(?:undos?)?|Sek(?:unden)?)\.?\s*\*/gi, pauseBeat)
            .replace(/\b\d+(?:[.,]\d+)?\s*(?:sec(?:onds?)?|second(?:s)?|seg(?:undos?)?|Sek(?:unden)?)\b\.?/gi, shortPause)
            .replace(/\d+(?:[.,]\d+)?\s*(?:초간|초|秒)\.?/g, shortPause)
            .replace(/\s{2,}/g, ' ')
            .replace(/\s+([.?!,;:])/g, '$1')
            .trim();
    }

    _sanitizeVisibleArtifactsHistory(messages) {
        if (!Array.isArray(messages)) return messages || [];

        return messages.map((msg) => {
            if (!msg || msg.role !== 'assistant') return msg;
            const next = { ...msg };
            if (typeof next.content === 'string') {
                next.content = this._sanitizeVisibleArtifacts(next.content);
            }
            if (Array.isArray(next.segments)) {
                next.segments = this._sanitizeSegmentsPlaceholders(next.segments);
            }
            return next;
        });
    }

    _parseResponse(reply) {
        if (!reply) return { text: '', segments: null, expression: '', affinity: 0, incident: null };

        const likelyJson = reply.includes('{') || reply.includes('```json');
        if (!likelyJson) {
            return {
                text: this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(reply)),
                segments: null,
                expression: '',
                affinity: 0,
                incident: null
            };
        }

        try {
            let jsonStr = reply;

            // 코드 블록 추출
            if (jsonStr.includes('```')) {
                const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                if (match) jsonStr = match[1];
            }

            // JSON 시작점 찾기
            if (!jsonStr.trim().startsWith('{') && !jsonStr.trim().startsWith('[')) {
                const objectStart = jsonStr.indexOf('{');
                const arrayStart = jsonStr.indexOf('[');
                const starts = [objectStart, arrayStart].filter(index => index >= 0);
                const start = starts.length > 0 ? Math.min(...starts) : -1;
                const end = Math.max(jsonStr.lastIndexOf('}'), jsonStr.lastIndexOf(']'));
                if (start !== -1 && end > start) {
                    jsonStr = jsonStr.substring(start, end + 1);
                }
            }

            const rawParsed = JSON.parse(jsonStr);
            const parsed = window.CupidFreeTalkCore?.normalizeCupidResponsePayload?.(rawParsed) || rawParsed;

            // 신규 — segments 배열 우선 처리
            if (parsed && typeof parsed === 'object' && Array.isArray(parsed.segments) && parsed.segments.length > 0) {
                const normalizedSegments = this._normalizeSegments(parsed.segments);
                const derivedText = parsed.text || this._segmentsToText(normalizedSegments);
                return {
                    text: this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(derivedText)),
                    segments: this._sanitizeSegmentsPlaceholders(normalizedSegments),
                    expression: (parsed.expression || '').toLowerCase(),
                    affinity: this._normalizeAffinityChange(parsed.affinity),
                    incident: GalleryFreeTalkCore.normalizeGalleryIncidentPayload(parsed.incident)
                };
            }

            // 레거시 — text 필드 사용
            if (parsed && typeof parsed === 'object' && typeof parsed.text === 'string') {
                return {
                    text: this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(parsed.text || '')),
                    segments: null,
                    expression: (parsed.expression || '').toLowerCase(),
                    affinity: this._normalizeAffinityChange(parsed.affinity),
                    incident: GalleryFreeTalkCore.normalizeGalleryIncidentPayload(parsed.incident)
                };
            }

            throw new Error('Unsupported Cupid response JSON schema');

        } catch (e) {
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'ai_response_json_parse_failed',
                sessionId: 'gallery-freetalk',
                context: {
                    charId: this.currentCharId || '',
                    charKey: this.currentCharKey || '',
                    language: this.lang || '',
                    replyLength: String(reply || '').length,
                    replyHash: window.hashCupidLogText ? window.hashCupidLogText(reply || '') : ''
                }
            });
            return { text: '', segments: null, expression: '', affinity: 0, incident: null };
        }
    }

    _normalizeAffinityChange(value) {
        return GalleryFreeTalkCore.normalizeAffinityChange(value);
    }

    /**
     * AI가 반환한 segments 배열을 표준 포맷으로 정규화
     * 허용 type: 'narration' | 'dialogue'
     * @private
     */
    _normalizeSegments(raw) {
        if (!Array.isArray(raw)) return null;
        const out = [];
        for (const seg of raw) {
            if (!seg || typeof seg !== 'object') continue;
            const text = this._sanitizeVisibleArtifacts(
                this._sanitizePlayerPlaceholders(typeof seg.text === 'string' ? seg.text.trim() : '')
            );
            if (!text) continue;
            let type = (typeof seg.type === 'string') ? seg.type.toLowerCase() : '';
            if (type === 'action' || type === 'narrate' || type === 'narrator' || type === 'desc' || type === 'description' || type === 'scene') {
                type = 'narration';
            } else if (type === 'speech' || type === 'line' || type === 'text' || type === 'talk') {
                type = 'dialogue';
            }
            if (type !== 'narration' && type !== 'dialogue') {
                const endsWithSpeech = /[.?!…][\s]*$/.test(text) && /[야어네지어!?~"']\s*$/.test(text);
                type = endsWithSpeech ? 'dialogue' : 'narration';
            }
            out.push({ type, text });
        }
        return out.length > 0 ? out : null;
    }

    /**
     * 제타식 단락 분리: 문장 종결 뒤에 빈 줄 삽입.
     * @private
     */
    _zetaFormatText(text, paragraphBreak = true) {
        if (!text) return '';
        const separator = paragraphBreak ? '\n\n' : '\n';
        let s = String(text).replace(/\\n/g, '\n').replace(/\r\n?/g, '\n');
        s = s.replace(/([.!?…。！？]["'”’)\]]*)[ \t]+/g, '$1' + separator);
        s = s.replace(/([.!?…。！？]["'”’)\]]*)(?=[가-힣A-Zぁ-んァ-ヶ一-龯¿¡])/g, '$1' + separator);
        s = s.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n');
        s = paragraphBreak ? s.replace(/\n{3,}/g, '\n\n') : s.replace(/\n{2,}/g, '\n');
        return s.trim();
    }

    /**
     * segments 배열 → 레거시 호환 인라인 텍스트 (narration → *text*, dialogue → text)
     * @private
     */
    _segmentsToText(segments) {
        if (!Array.isArray(segments) || segments.length === 0) return '';
        return segments.map(s => {
            if (!s || !s.text) return '';
            const text = this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(s.text));
            return s.type === 'narration' ? `*${text}*` : text;
        }).filter(Boolean).join(' ');
    }

    /**
     * assistant 메시지에서 순수 텍스트 추출 (이전 대화 렌더링용)
     * @private
     */
    _extractText(content) {
        const parsed = this._parseResponse(content);
        return parsed.text || this._sanitizeVisibleArtifacts(content);
    }

    // =========================================================================
    // UI 헬퍼 (VN 스타일 — 대사창 기반)
    // =========================================================================

    _normalizeRenderedText(value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    }

    _getExpectedRenderedMessageText(text, structuredSegments = null) {
        const resolvedText = this._sanitizePlayerPlaceholders(text || '');
        const resolvedSegments = this._sanitizeSegmentsPlaceholders(structuredSegments);
        const html = Array.isArray(resolvedSegments) && resolvedSegments.length > 0
            ? resolvedSegments.map(seg => {
                if (!seg || !seg.text) return '';
                const type = seg.type === 'narration' ? 'action' : 'text';
                const formatted = this._zetaFormatText(seg.text, type === 'action');
                const escaped = String(formatted)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
                return type === 'action'
                    ? `<span class="gft-action">${escaped}</span>`
                    : `<span class="gft-text">${escaped}</span>`;
            }).join(' ')
            : this._formatAction(resolvedText);
        const preview = document.createElement('div');
        preview.innerHTML = html;
        return this._normalizeRenderedText(preview.textContent || '');
    }

    _getChatRenderReceipt(text, structuredSegments = null) {
        const expectedContent = this._getExpectedRenderedMessageText(text, structuredSegments);
        const renderedContent = this._normalizeRenderedText(
            document.getElementById('message')?.textContent || ''
        );
        return {
            expectedContent,
            renderedContent,
            status: !renderedContent
                ? 'failed'
                : (expectedContent === renderedContent ? 'rendered' : 'mismatch'),
            renderedAt: Date.now()
        };
    }

    /**
     * 대사창에 텍스트 타이핑 효과 (게임 DialogueSystem.typeText와 동일)
     * 대사창 클릭 시 스킵 가능.
     * 지문(*text*)은 처음부터 포맷 적용된 상태로 타이핑.
     *
     * @param {string} text - 표시할 텍스트
     * @param {Array|null} structuredSegments - 구조화된 narration/dialogue 배열
     * @param {Object|null} requestContext - 현재 오버레이/캐릭터 요청 소유권
     * @returns {Promise} 타이핑 완료 시 resolve
     */
    _typeText(text, structuredSegments = null, requestContext = null) {
        const msgEl = document.getElementById('message');
        if (!msgEl) return Promise.resolve();

        text = this._sanitizePlayerPlaceholders(text || '');
        structuredSegments = this._sanitizeSegmentsPlaceholders(structuredSegments);

        const typingOwner = { generation: ++this._typingGeneration };
        this._activeTypingOwner = typingOwner;
        const ownsTyping = () => this._activeTypingOwner === typingOwner;
        const finishOwnedTyping = () => {
            if (!ownsTyping()) return false;
            this.isTyping = false;
            this.skipTyping = false;
            this._activeTypingOwner = null;
            return true;
        };

        this.isTyping = true;
        this.skipTyping = false;
        msgEl.innerHTML = '';

        // structuredSegments가 있으면 별표 파싱 건너뛰고 type별 직접 매핑
        // AI의 narration/dialogue → 갤러리 내부 action/text 매핑
        // 제타식 줄바꿈 적용 (마침표 단위)
        const segments = Array.isArray(structuredSegments) && structuredSegments.length > 0
            ? structuredSegments.map(s => ({
                type: s.type === 'narration' ? 'action' : 'text',
                content: this._zetaFormatText(s.text || '', s.type === 'narration') + ' '
            })).filter(s => s.content.trim())
            : this._parseSegments(text).map(s => ({ ...s, content: this._zetaFormatText(s.content, s.type === 'action') + ' ' }));
        const speed = 30; // ms per character (게임과 동일)

        // 각 세그먼트별 DOM 요소를 미리 생성 (지문은 처음부터 포맷 적용)
        const elements = segments.map(seg => {
            const el = document.createElement('span');
            if (seg.type === 'action') el.className = 'gft-action';
            else el.className = 'gft-text';
            msgEl.appendChild(el);
            return el;
        });

        const totalLength = segments.reduce((sum, s) => sum + s.content.length, 0);

        return new Promise((resolve) => {
            let startTime = null;

            const typeFrame = (timestamp) => {
                if (!ownsTyping()) {
                    resolve();
                    return;
                }
                if (requestContext && !this._isRequestContextCurrent(requestContext)) {
                    finishOwnedTyping();
                    resolve();
                    return;
                }
                if (!startTime) startTime = timestamp;

                // 스킵 요청 시 즉시 전체 텍스트 표시
                if (this.skipTyping) {
                    segments.forEach((seg, i) => { elements[i].textContent = seg.content; });
                    finishOwnedTyping();
                    resolve();
                    return;
                }

                const elapsed = timestamp - startTime;
                const targetTotal = Math.min(Math.floor(elapsed / speed), totalLength);

                // 각 세그먼트에 타이핑 진행분 반영
                let remaining = targetTotal;
                for (let i = 0; i < segments.length; i++) {
                    const segLen = segments[i].content.length;
                    if (remaining >= segLen) {
                        elements[i].textContent = segments[i].content;
                        remaining -= segLen;
                    } else {
                        elements[i].textContent = segments[i].content.substring(0, remaining);
                        for (let j = i + 1; j < segments.length; j++) elements[j].textContent = '';
                        remaining = 0;
                        break;
                    }
                }

                if (targetTotal < totalLength) {
                    requestAnimationFrame(typeFrame);
                } else {
                    finishOwnedTyping();
                    resolve();
                }
            };

            requestAnimationFrame(typeFrame);
        });
    }

    /**
     * 텍스트를 세그먼트로 파싱: 일반 텍스트 / *지문*
     * @private
     * @returns {Array<{type: 'text'|'action', content: string}>}
     */
    _parseSegments(text) {
        const segments = [];
        // **지문** (이중 별표) 또는 *지문* (단일 별표) 모두 지문으로 인식
        const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                segments.push({ type: 'text', content: text.substring(lastIndex, match.index) });
            }
            // match[1]은 **...**에서 캡처, match[2]는 *...*에서 캡처
            segments.push({ type: 'action', content: match[1] || match[2] });
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            segments.push({ type: 'text', content: text.substring(lastIndex) });
        }

        return segments;
    }

    /**
     * *지문*을 별도 블록으로 파싱 (이전 대화 복원 등 일괄 렌더링용)
     * @private
     */
    _formatAction(text) {
        const escape = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return this._parseSegments(text).map(seg => {
            const formatted = this._zetaFormatText(seg.content, seg.type === 'action');
            const escaped = escape(formatted);
            return seg.type === 'action'
                ? `<span class="gft-action">${escaped}</span>`
                : `<span class="gft-text">${escaped}</span>`;
        }).join(' ');
    }

    _updateExpression(expression, charId = this.currentCharId) {
        if (!charId) return;
        const validExprs = this.CHAR_EXPRESSIONS[charId] || [];
        const resolvedExpression = GalleryFreeTalkCore.normalizeAvailableExpression(
            expression,
            validExprs
        );
        if (!validExprs.includes(resolvedExpression)) return;

        const img = document.getElementById('gft-char-img');
        if (img) {
            const assetExpression = charId === 'nurse' && resolvedExpression === 'climax'
                ? 'flushed'
                : resolvedExpression;
            img.src = `assets/images/characters/${charId}_${assetExpression}.png?v=${window.ASSET_VERSION || ''}`;
        }
    }

    _applyAffinityChange(change, charId = this.currentCharId) {
        if (!charId || !this.progress?.changeCurrentAffinity) return null;

        const requestedChange = this._normalizeAffinityChange(change);
        const result = this.progress.changeCurrentAffinity(
            charId,
            requestedChange
        );
        this._updateAffinityDisplay(result?.value, charId);

        const effectChange = result?.requestedChange ?? requestedChange;
        if (effectChange) {
            this._showAffinityChange(effectChange);
        }
        return result;
    }

    _formatAffinityValue(value) {
        const score = Math.max(-100, Math.min(100, Math.round(Number(value) || 0)));
        return score > 0 ? `+${score}` : String(score);
    }

    _getAffinityTone(value) {
        const score = Number(value) || 0;
        if (score > 0) return 'positive';
        if (score < 0) return 'negative';
        return 'neutral';
    }

    _getAffinityIcon(value) {
        const score = Number(value) || 0;
        if (score > 0) return '💕';
        if (score < 0) return '💔';
        return '🤍';
    }

    _updateAffinityDisplay(value, charId = this.currentCharId) {
        if (charId !== this.currentCharId) return;

        const display = this.overlayEl?.querySelector('#gft-affinity-display');
        if (!display) return;

        const score = Math.max(-100, Math.min(100, Math.round(Number(value) || 0)));
        const formatted = this._formatAffinityValue(score);
        const affinityLabel = this._L(
            '현재 호감도',
            'Current affinity',
            'Afinidad actual',
            '現在の好感度',
            'Affinité actuelle',
            'Aktuelle Zuneigung',
            'Afinidade atual'
        );

        display.classList.remove('positive', 'negative', 'neutral');
        display.classList.add(this._getAffinityTone(score));
        display.setAttribute('aria-label', `${affinityLabel}: ${formatted}`);

        const icon = display.querySelector('.gft-affinity-icon');
        const valueEl = display.querySelector('.gft-affinity-value');
        if (icon) icon.textContent = this._getAffinityIcon(score);
        if (valueEl) valueEl.textContent = formatted;
    }

    _showAffinityChange(amount) {
        if (!amount) return;

        const sfxPath = amount > 0
            ? 'assets/audio/sfx/affinity_up.mp3'
            : 'assets/audio/sfx/affinity_down.mp3';
        if (window.soundManager?.playSfx) {
            Promise.resolve(window.soundManager.playSfx(sfxPath)).catch(() => {});
        }

        const popup = document.createElement('div');
        popup.className = `affinity-popup ${amount > 0 ? 'positive' : 'negative'}`;

        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.textContent = amount > 0 ? '💕' : '💔';

        const value = document.createElement('span');
        value.className = 'value';
        value.textContent = amount > 0 ? `+${amount}` : String(amount);

        popup.appendChild(emoji);
        popup.appendChild(value);
        document.body.appendChild(popup);
        window.setTimeout(() => popup.remove(), 4000);
    }

    _incrementFreeTalkCount(charId = this.currentCharId) {
        if (!charId || !this.progress) return;
        try {
            this.progress.refresh();
            const charData = this.progress.data.characters?.[charId];
            if (charData) {
                charData.freeTalkCount = (charData.freeTalkCount || 0) + 1;
                this.progress.save();
            }
        } catch (e) {
            // 무시
        }
    }

    _prepareGalleryIncidentRuntime(charId = this.currentCharId) {
        const state = this.progress?.getGalleryIncidentState
            ? this.progress.getGalleryIncidentState(charId)
            : GalleryFreeTalkCore.normalizeGalleryIncidentState();
        const plan = GalleryFreeTalkCore.planGalleryIncident(
            state,
            Math.random(),
            Math.random()
        );
        return { state, plan };
    }

    _commitGalleryIncidentTurn({
        charId = this.currentCharId,
        runtime = null,
        payload = null,
        visibleText = '',
        latestUserText = '',
        turnAffinity = 0
    } = {}) {
        let state = GalleryFreeTalkCore.normalizeGalleryIncidentState(
            runtime?.state || this.progress?.getGalleryIncidentState?.(charId)
        );
        const plan = runtime?.plan || null;
        const incidentPayload = GalleryFreeTalkCore.normalizeGalleryIncidentPayload(payload);
        state.completedTurns += 1;

        let affinityChange = this._normalizeAffinityChange(turnAffinity);
        let startedCategory = '';
        let startedSeverity = '';
        const plannedCategory = GalleryFreeTalkCore.normalizeGalleryIncidentCategory(plan?.category);
        const startsPlannedIncident = Boolean(
            plannedCategory
            && incidentPayload?.status === 'started'
            && incidentPayload.summary
            && (plannedCategory !== 'crisis' || incidentPayload.severity)
        );

        if (startsPlannedIncident && !state.activeIncident) {
            const category = plannedCategory;
            const severity = category === 'crisis'
                ? GalleryFreeTalkCore.normalizeGalleryCrisisSeverity(incidentPayload?.severity)
                : '';
            const summary = incidentPayload?.summary
                || GalleryFreeTalkCore.truncateLatestUserText(visibleText, 240)
                || `${category} incident`;
            affinityChange = GalleryFreeTalkCore.normalizeGalleryIncidentImpact(
                category,
                incidentPayload?.impact,
                {
                    severity
                }
            );
            state.activeIncident = {
                category,
                severity,
                summary,
                startedAtTurn: state.completedTurns,
                turns: 1
            };
            state.quietTurns = 0;
            startedCategory = category;
            startedSeverity = severity;
            if (category === 'crisis') {
                state.lastCrisisTurn = state.completedTurns;
                state.negativeSignals = [];
            }
        } else if (state.activeIncident) {
            state.activeIncident.turns += 1;
            if (incidentPayload?.summary) state.activeIncident.summary = incidentPayload.summary;
            if (incidentPayload?.status === 'resolved') {
                state.recentIncidents.push({
                    category: state.activeIncident.category,
                    severity: state.activeIncident.severity || '',
                    summary: state.activeIncident.summary,
                    endedAtTurn: state.completedTurns
                });
                state.recentIncidents = state.recentIncidents.slice(
                    -GalleryFreeTalkCore.GALLERY_INCIDENT_POLICY.recentIncidentLimit
                );
                state.activeIncident = null;
                state.quietTurns = 0;
            }
        } else {
            state.quietTurns += 1;
        }

        if (!startedCategory) {
            state = GalleryFreeTalkCore.updateGalleryIncidentEvidence(
                state,
                affinityChange,
                latestUserText
            );
        }
        const savedState = this.progress?.setGalleryIncidentState
            ? this.progress.setGalleryIncidentState(charId, state)
            : GalleryFreeTalkCore.normalizeGalleryIncidentState(state);

        return {
            affinityChange,
            startedCategory,
            startedSeverity,
            activeIncident: savedState.activeIncident,
            completedTurns: savedState.completedTurns,
            quietTurns: savedState.quietTurns
        };
    }

    // =========================================================================
    // 이미지 업로드 (게임 UIManager.handleImageUpload와 동일)
    // =========================================================================

    /**
     * 이미지 파일을 리사이즈 → Base64 JPEG로 변환 → 미리보기 표시
     * @param {File} file
     * @private
     */
    _setImageUploadState(isUploading, previewSrc = null) {
        const root = this.overlayEl || document;
        const previewContainer = root.querySelector('#image-preview-container');
        const previewImg = root.querySelector('#image-preview');
        const uploadBtn = root.querySelector('#upload-image-btn');
        const removeBtn = root.querySelector('#remove-image-btn');
        const label = {
            ko: '\uc5c5\ub85c\ub4dc \uc911',
            en: 'Uploading',
            es: 'Subiendo',
            ja: '\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d',
            fr: 'Téléversement en cours',
            de: 'Wird hochgeladen',
            pt: 'Enviando'
        }[String(this.lang).toLowerCase().split('-')[0]] || 'Uploading';

        if (previewSrc && previewImg) {
            previewImg.src = previewSrc;
        }

        if (previewContainer) {
            if (previewSrc || isUploading || this.stagedImage) {
                previewContainer.style.display = 'inline-flex';
            }
            previewContainer.classList.toggle('is-uploading', isUploading);
            previewContainer.setAttribute('data-upload-label', label);
        }

        if (uploadBtn) {
            uploadBtn.classList.toggle('is-uploading', isUploading);
            uploadBtn.setAttribute('aria-busy', isUploading ? 'true' : 'false');
            uploadBtn.disabled = isUploading;
        }

        if (removeBtn) {
            removeBtn.disabled = isUploading;
        }
    }

    _handleImageUpload(file) {
        if (!file.type.startsWith('image/')) {
            alert(this._L(
                '이미지 파일만 업로드 가능합니다.',
                'Only image files can be uploaded.',
                'Solo se pueden subir archivos de imagen.',
                '画像ファイルのみアップロードできます。',
                'Seuls les fichiers image peuvent être ajoutés.',
                'Nur Bilddateien können hochgeladen werden.',
                'Somente arquivos de imagem podem ser enviados.'
            ));
            return;
        }
        if (file.size > 50 * 1024 * 1024) {
            alert(this._L(
                '이미지 크기가 50MB를 초과합니다.',
                'The image exceeds the 50 MB limit.',
                'La imagen supera el límite de 50 MB.',
                '画像サイズが50MBを超えています。',
                "L’image dépasse la limite de 50 Mo.",
                'Das Bild überschreitet das Limit von 50 MB.',
                'A imagem excede o limite de 50 MB.'
            ));
            return;
        }

        const uploadVersion = ++this._imageUploadVersion;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let w = img.width, h = img.height;
                const maxSize = 1024;
                if (w > h) {
                    if (w > maxSize) { h *= maxSize / w; w = maxSize; }
                } else {
                    if (h > maxSize) { w *= maxSize / h; h = maxSize; }
                }
                canvas.width = w;
                canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                this.stagedImage = base64;

                // 미리보기 표시
                this._setImageUploadState(true, base64);
                if (typeof window.uploadImageToR2 !== 'function') {
                    this._setImageUploadState(false);
                }

                // 백그라운드로 R2 업로드 후 stagedImage를 URL로 교체 (토큰 절감)
                if (typeof window.uploadImageToR2 === 'function') {
                    window.uploadImageToR2(base64, 'chat').then(url => {
                        if (this._imageUploadVersion !== uploadVersion) return;
                        this._setImageUploadState(false);
                        if (url) {
                            this.stagedImage = url;
                            if (this._imageUploadVersion === uploadVersion) {
                                this._setImageUploadState(false);
                            }
                            console.debug('[GalleryFreeTalk] R2 업로드 완료:', url);
                        }
                    }).catch(err => {
                        if (this._imageUploadVersion === uploadVersion) {
                            this._setImageUploadState(false);
                        }
                        console.warn('[GalleryFreeTalk] R2 업로드 실패, base64 폴백:', err.message);
                        window.reportCupidCaughtError?.(err, {
                            source: 'cupid-gallery-freetalk',
                            errorType: 'image_upload_fallback',
                            context: {
                                uploadContext: 'gallery-freetalk',
                                charId: this.currentCharId || '',
                                charKey: this.currentCharKey || ''
                            }
                        });
                    });
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    /**
     * 스테이징된 이미지 제거
     * @private
     */
    _removeStagedImage() {
        this.stagedImage = null;
        this._imageUploadVersion++;
        this._setImageUploadState(false);
        const root = this.overlayEl || document;
        const previewContainer = root.querySelector('#image-preview-container');
        const previewImg = root.querySelector('#image-preview');
        if (previewContainer) {
            previewContainer.style.display = 'none';
            previewContainer.classList.remove('is-uploading');
            previewContainer.removeAttribute('data-upload-label');
        }
        if (previewImg) previewImg.src = '';
    }

    /**
     * 채팅 가이드 팁 HTML (게임 #chat-guide 동일)
     * @private
     */
    _getTip() {
        return this._L(
            '<b>Tip:</b> <i>*웃으며* 자기야~</i> 처럼 어조나 상황을 표현해보세요.',
            '<b>Tip:</b> Describe the tone in asterisks, e.g., <i>*smiling* Hey...</i>',
            '<b>Tip:</b> Describe el tono con asteriscos, ej: <i>*sonriendo* Hola...</i>',
            '<b>ヒント：</b>「<i>*笑顔で* ねえ</i>」のように、雰囲気や状況も添えてみてね。',
            '<b>Astuce :</b> Décrivez le ton entre astérisques, par ex. : <i>*en souriant* Salut…</i>',
            '<b>Tipp:</b> Beschreibe den Ton zwischen Sternchen, z. B. <i>*lächelnd* Hey ...</i>',
            '<b>Dica:</b> Descreva o tom com asteriscos, ex: <i>*sorrindo* Oi...</i>'
        );
    }

    // =========================================================================
    // 시스템 프롬프트 빌더
    // =========================================================================

    /**
     * 연인 모드 시스템 프롬프트 생성
     * @private
     */
    _buildCachedSystemPrompt(charId) {
        return keepGalleryFreeTalkRuntimeBoundary(
            normalizeGalleryPromptBlockForCache(this._buildSystemPrompt(charId))
        );
    }

    _getGalleryRelationshipState(affinity) {
        const score = Math.max(-100, Math.min(100, Number(affinity) || 0));
        if (score >= 90) {
            return {
                ko: '깊이 결속된 연인: 신뢰와 친밀감이 매우 높고 솔직한 애정·욕망·돌봄이 자연스럽다',
                en: 'deeply bonded lovers: secure trust and intimacy; candid affection, desire, and care come naturally'
            };
        }
        if (score >= 70) {
            return {
                ko: '가까운 연인: 신뢰가 높고 애정 표현과 약한 모습, 스킨십이 비교적 자연스럽다',
                en: 'close lovers: high trust; affection, vulnerability, and touch come relatively easily'
            };
        }
        if (score >= 40) {
            return {
                ko: '편안한 연인: 함께 쌓은 일상과 익숙함이 있고 캐릭터다운 장난·배려·애정을 보인다',
                en: 'comfortable lovers: shared routines and familiarity shape character-specific teasing, care, and affection'
            };
        }
        if (score >= 10) {
            return {
                ko: '조심스러운 연인: 약간의 긴장이나 경계가 있지만 익숙함과 애정이 아직 분명하다',
                en: 'cautious lovers: some tension or reserve, while familiarity and affection remain clear'
            };
        }
        if (score >= -9) {
            return {
                ko: '흔들리는 연인: 애정과 갈등이 팽팽하며 서로를 잘 알기에 반응도 더 복잡하다',
                en: 'conflicted lovers: affection and tension are balanced, made more complex by how well they know each other'
            };
        }
        if (score >= -39) {
            return {
                ko: '상처받은 연인: 현재 서운하고 경계하지만 연인 관계와 함께한 기억은 사라지지 않았다',
                en: 'hurt lovers: currently wounded and guarded, but the established romance and shared memories remain real'
            };
        }
        if (score >= -69) {
            return {
                ko: '멀어진 연인: 깊이 상처받아 차갑고 거리를 두지만 두 사람이 쌓아 온 역사는 남아 있다',
                en: 'distant lovers: deeply hurt, cold, and keeping distance, while their shared history still remains'
            };
        }
        return {
            ko: '위기의 연인: 관계가 무너질 듯한 상태라 강한 거리 두기나 거절이 자연스럽지만 자동으로 결별한 사이는 아니다',
            en: 'lovers in crisis: the relationship is near collapse, so strong distance or refusal is natural, but they have not automatically broken up'
        };
    }

    _buildSystemPrompt(charId) {
        const isEn = this.lang !== 'ko';

        // 강제 언어 룰 — 모든 비-한국어 페이지에 적용
        // 사용자가 어떤 언어로 입력하든, 이전 대화가 어떤 언어든, 무조건 페이지 언어로 답해야 함
        let langPrefix = '';
        if (this.lang === 'en') {
            langPrefix = `**[Response Language Rule]**: Reply only in natural English, regardless of input or history language.\n\n`;
        } else if (this.lang === 'es') {
            langPrefix = `**[Response Language Rule]**: Reply only in natural Latin American Spanish, regardless of input or history language.\n\n`;
        } else if (this.lang === 'ja') {
            langPrefix = `**[Response Language Rule]**: Reply only in natural Japanese, regardless of input or history language.\n\n`;
        } else if (this.lang === 'fr') {
            langPrefix = `**[Response Language Rule]**: Reply only in natural conversational French, regardless of input or history language.\n\n`;
        } else if (this.lang === 'de') {
            langPrefix = `**[Response Language Rule]**: Reply only in natural German; use du unless the scene establishes formal distance, regardless of input or history language.\n\n`;
        } else if (this.lang === 'pt') {
            langPrefix = `**[Response Language Rule]**: Reply only in accented Brazilian Portuguese; use você unless quoting, regardless of input or history language.\n\n`;
        }

        const charName = this.CHAR_NAMES[charId]?.[this.lang] || charId;
        const location = this.CHAR_LOCATIONS[charId]?.[this.lang] || '';
        const personality = this.CHAR_PERSONALITIES[charId]?.[this.lang] || '';
        const datingPrompt = this.CHAR_DATING_PROMPTS[charId]?.[this.lang] || '';
        const adultIntimacyProfile = getGalleryCharacterAdultIntimacy(charId, this.lang);
        // 이름이 비어 있을 때 애칭을 이름처럼 주입하지 않는다.
        const playerName = String(this.progress.getPlayerName() || '').trim();

        const validExprs = this.CHAR_EXPRESSIONS[charId] || [];

        const languageQualityGuard = this._getLanguageQualityGuard();
        const nativeStylePolishGuard = this._getNativeStylePolishGuard(charId);
        const nativeAntiTranslationGuard = window.getCupidNativeAntiTranslationGuard(this.lang);
        const characterOutfitGuard = charId === 'dain'
            ? (isEn
                ? `\n**[Dain Outfit Continuity]** Post-graduation Dain wears sporty streetwear with a black arm sleeve, never a school uniform. Student memories use her ETAURS #19 volleyball jersey—not blazer, tie, school skirt, or uniform hems/sleeves.`
                : `\n**[다인 의상 연속성]** 졸업 후 다인은 교복이 아니라 검정 암슬리브와 스포티한 일상복 차림입니다. 학생 시절도 ETAURS #19 배구 유니폼이며, 블레이저·넥타이·교복 치마·교복 자락·소매로 묘사하지 않습니다.`)
            : '';
        const characterCanonGuard = window.getCupidCharacterCanonGuard
            ? window.getCupidCharacterCanonGuard(this.lang, charId, charName)
            : '';
        const sharedCastKnowledge = window.getCupidSharedCastKnowledge
            ? window.getCupidSharedCastKnowledge(this.lang, charId)
            : '';

        const compactGalleryGuidance = (isEn ? [
            datingPrompt && `Relationship: ${datingPrompt}`,
            location && `Location baseline: ${location}`
        ] : [
            datingPrompt && `연인 관계: ${datingPrompt}`,
            location && `기본 장소: ${location}`
        ]).filter(Boolean).join("\n");
        const compactGalleryExpressions = validExprs.join(', ') || 'normal';
        const currentAffinity = this.progress?.getCurrentAffinity
            ? this.progress.getCurrentAffinity(charId)
            : (this.progress?.getAffinity?.(charId) || 0);
        const relationshipState = this._getGalleryRelationshipState(currentAffinity);
        const affinityChangeGuidance = GalleryFreeTalkCore.buildAffinityChangeGuidance(this.lang);
        const expressionAffinityGuidance = GalleryFreeTalkCore.buildExpressionAffinityGuidance(this.lang);
        const jsonOutputContract = window.buildCupidJsonOutputContract(
            this.lang,
            compactGalleryExpressions,
            expressionAffinityGuidance
        );
        const affinityRelationshipGuard = isEn
            ? `Established romance and affinity:
- At every score they remain post-PERFECT-ending adult lovers, never strangers, new acquaintances, an unconfessed crush, or automatically separated.
- Dynamic state sets emotional temperature; show it through character speech, initiative, touch, restraint, refusal, and openness without naming the score.
- ${affinityChangeGuidance}`
            : `확정된 연인 관계와 호감도:
- 둘은 점수와 무관하게 이미 PERFECT 엔딩 이후의 성인 연인이며, 낯선 사이·고백 전으로 되돌리거나 자동 결별시키지 않습니다.
- 동적 상태는 감정 온도만 바꿉니다. 점수 대신 말투·주도성·스킨십·거리·거절·감정 개방으로 보입니다.
- ${affinityChangeGuidance}`;
        const compactGalleryState = isEn
            ? `State: user=${playerName || 'the user'}; current_affinity=${currentAffinity}/100; relationship=${relationshipState.en}`
            : `현재 상태: 사용자=${playerName || '상대'}; 현재 호감도=${currentAffinity}/100; 관계 온도=${relationshipState.ko}`;
        const livingInitiativeRule = window.buildCupidLivingInitiativeRule(this.lang);
        const thirdPersonAdultCameraRule = buildGalleryThirdPersonAdultCameraRule(this.lang);
        if (isEn) {
            return `${langPrefix}${languageQualityGuard}${nativeStylePolishGuard}${nativeAntiTranslationGuard}Cupid gallery free-talk: ${charName} with their post-graduation adult partner; not a current school scene.
Character: ${personality}
${adultIntimacyProfile}
${charName} is in-scene, not assistant/narrator; keep the scene 1:1 and others offstage except through reactions to a mention.
${characterOutfitGuard}
${characterCanonGuard}
${sharedCastKnowledge}
Scene facts: Treat the user's latest explicit in-world facts and completed outcomes as current without reversal; only the character-specific canon locks above are exceptions.
Perspective: Any inferred user response, emotion, or thought must fit their explicit state, choice, consent, and refusal.
${livingInitiativeRule}
${thirdPersonAdultCameraRule}
${compactGalleryGuidance}
${affinityRelationshipGuard}
${jsonOutputContract}
===CACHE_BOUNDARY===
${compactGalleryState}${this._buildOutingDynamicTail(charId, charName)}`;
        }
        return `${languageQualityGuard}${nativeStylePolishGuard}${nativeAntiTranslationGuard}한국어로만 답하세요. 졸업 후 독립한 성인 연인 두 사람만 등장하는 갤러리 프리토킹입니다. 당신은 ${charName}이고, 상대는 성인 연인입니다. 현재의 학교 장면이 아닙니다.
캐릭터: ${personality}
${adultIntimacyProfile}
현재 장면의 인물은 ${charName}이며 도우미·해설자가 아닙니다. 둘만 두고 다른 인물은 언급에 대한 반응으로만 남깁니다.
${characterOutfitGuard}
${characterCanonGuard}
${sharedCastKnowledge}
장면 사실: 사용자가 방금 확정해 쓴 극중 사실과 끝난 사건은 되돌리지 않고 현재 장면으로 받습니다. 위의 캐릭터별 사실 잠금만 예외입니다.
시점: 추론한 사용자 반응·감정·속마음은 명시된 상태·선택·동의·거절과 충돌하지 않아야 합니다.
${livingInitiativeRule}
${thirdPersonAdultCameraRule}
${compactGalleryGuidance}
${affinityRelationshipGuard}
${jsonOutputContract}
===CACHE_BOUNDARY===
${compactGalleryState}${this._buildOutingDynamicTail(charId, charName)}`;
    }

    _buildOutingDynamicTail(charId, charName) {
        const outings = window.CupidGalleryOutings;
        if (!outings) return '';
        return outings.buildOutingRuntimeBlock({
            lang: this.lang,
            characterName: charName,
            place: this.currentOuting || outings.getPlace(charId),
            birthday: outings.isBirthday(charId)
        });
    }

    // =========================================================================

    _sanitizeDainOutfitHistory(messages, charId = this.currentCharId) {
        if (charId !== 'dain' || !Array.isArray(messages)) return messages;

        const replacements = [
            [/교복 자락/g, '스웨트셔츠 자락'],
            [/교복 소매/g, '검정 암슬리브'],
            [/교복 치마/g, '트레이닝 팬츠'],
            [/교복/g, '스포티한 일상복'],
            [/制服の裾/g, 'スウェットの裾'],
            [/制服の袖/g, '黒いアームスリーブ'],
            [/(?:制服のスカート|制服スカート)/g, 'トレーニングパンツ'],
            [/ブレザー/g, 'スポーティーな上着'],
            [/ネクタイ/g, 'ウェアの襟元'],
            [/制服/g, 'スポーティーな私服'],
            [/school-uniform hem/gi, 'sweatshirt hem'],
            [/school-uniform sleeve/gi, 'black arm sleeve'],
            [/school skirt/gi, 'track pants'],
            [/school uniform/gi, 'sporty streetwear'],
            [/student uniform/gi, 'sporty streetwear']
        ];

        return messages.map((msg) => {
            if (!msg || msg.role !== 'assistant' || typeof msg.content !== 'string') return msg;

            let content = msg.content;
            replacements.forEach(([pattern, replacement]) => {
                content = content.replace(pattern, replacement);
            });

            return content === msg.content ? msg : { ...msg, content };
        });
    }

    _buildWindowedHistory(history = this.chatHistory, charId = this.currentCharId) {
        if (!Array.isArray(history) || history.length === 0) return [];
        if (typeof window.buildCupidPromptEpoch !== 'function') {
            const sysMsg = history[0];
            if (!sysMsg || sysMsg.role !== 'system') {
                return history.slice(-this.HISTORY_WINDOW);
            }
            const rest = history.slice(1);
            return rest.length <= this.HISTORY_WINDOW
                ? history
                : [sysMsg, ...rest.slice(-this.HISTORY_WINDOW)];
        }

        const result = window.buildCupidPromptEpoch(history, {
            state: this._loadPromptEpochState(charId),
            maxMessages: this.HISTORY_WINDOW,
            retainMessages: 2,
            carryoverChars: 1800
        });
        this._savePromptEpochState(charId, result.state);
        return result.messages;
    }

    _loadPromptEpochState(charId) {
        if (!charId) return null;
        try {
            const all = JSON.parse(window.CupidStorage.getItem(this.PROMPT_EPOCH_MEMORY_KEY) || '{}');
            return all?.[charId] || null;
        } catch (_) {
            return null;
        }
    }

    _savePromptEpochState(charId, state) {
        if (!charId) return;
        try {
            const all = JSON.parse(window.CupidStorage.getItem(this.PROMPT_EPOCH_MEMORY_KEY) || '{}');
            if (state?.version === 1) all[charId] = state;
            else delete all[charId];
            window.CupidStorage.setItem(this.PROMPT_EPOCH_MEMORY_KEY, JSON.stringify(all));
        } catch (e) {
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'gallery_freetalk_prompt_epoch_save_failed',
                context: { charId }
            });
        }
    }

    _loadMemory(charId) {
        try {
            const saved = window.CupidStorage.getItem(this.MEMORY_KEY);
            if (saved) {
                const all = JSON.parse(saved);
                this.chatHistory = all[charId] || [];
            } else {
                this.chatHistory = [];
            }
        } catch (e) {
            this.chatHistory = [];
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'gallery_freetalk_memory_load_failed',
                context: { charId }
            });
        }
    }

    _saveMemory(charId, history = this.chatHistory) {
        try {
            const saved = window.CupidStorage.getItem(this.MEMORY_KEY);
            const all = saved ? JSON.parse(saved) : {};

            // system 메시지 제외, 최근 20개만 저장
            const chatOnly = (Array.isArray(history) ? history : []).filter(m => m.role !== 'system');
            all[charId] = chatOnly.slice(-20);

            window.CupidStorage.setItem(this.MEMORY_KEY, JSON.stringify(all));
        } catch (e) {
            console.error('[GalleryFreeTalk] 메모리 저장 실패:', e);
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'gallery_freetalk_memory_save_failed',
                context: { charId, historyLength: this.chatHistory.length }
            });
        }
    }
}

// window 전역 노출
window.GalleryFreeTalk = GalleryFreeTalk;
