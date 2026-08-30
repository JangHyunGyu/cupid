// SEO 랜딩 페이지 생성기
// 실행: node seo/_generate.js  (cupid 디렉토리에서)
const fs = require('fs');
const path = require('path');

const SITE = 'https://cupid.archerlab.dev';
const OUT = __dirname;
const LASTMOD = '2026-07-13';
const SEO_IMAGE = `${SITE}/cupid_link.png?v=2.9.6`;
const SOCIAL_IMAGE = `${SITE}/assets/images/screenshots/cupid-title.jpg?v=2.9.6`;
const GAME_DESCRIPTION = 'Cupid is a free browser romance visual novel with a five-day school story, five character routes, multiple endings, and support for seven languages.';
const GAME_DESCRIPTIONS = {
  de: 'Cupid ist eine kostenlose romantische Visual Novel für den Browser mit einer fünftägigen Schulgeschichte, fünf Charakterrouten, mehreren Enden und Unterstützung für sieben Sprachen.'
};
const SOCIAL_IMAGE_ALTS = {
  ko: '브라우저 로맨스 비주얼 노벨 Cupid 타이틀 화면',
  en: 'Cupid browser romance visual novel title screen',
  ja: 'ブラウザ恋愛ビジュアルノベル「Cupid」のタイトル画面',
  es: 'Pantalla de título de Cupid, novela visual romántica para navegador',
  fr: 'Écran-titre du roman visuel romantique Cupid sur navigateur',
  de: 'Titelbildschirm von Cupid, einer Romance-Visual-Novel für den Browser',
  pt: 'Tela de título de Cupid, visual novel romântica para navegador'
};
const RELATED_NAV_LABELS = {
  ko: 'Cupid 관련 페이지',
  en: 'Related Cupid pages',
  ja: 'Cupidの関連ページ',
  es: 'Páginas relacionadas con Cupid',
  fr: 'Pages associées à Cupid',
  de: 'Weitere Seiten zu Cupid',
  pt: 'Páginas relacionadas a Cupid'
};
const GA_MEASUREMENT_ID = 'G-05YM7K3VX9';
const ORIGIN_TRIAL_TOKEN = 'Agn9opFYdjvT/UqEIvt4RnCkmN8Kt+8/lzvg731pKSz7MpNoJkLvra/pLOIFgR9GZb39JbBGeJ+CDO++Tus3FggAAABmeyJvcmlnaW4iOiJodHRwczovL2FyY2hlcmxhYi5kZXY6NDQzIiwiZmVhdHVyZSI6IkhUTUxJbkNhbnZhcyIsImV4cGlyeSI6MTc5MjQ1NDQwMCwiaXNTdWJkb21haW4iOnRydWV9';
const GA_LINKER_DOMAINS = [
  'latindance.kr',
  'archerlab.dev',
  'itstory.archerlab.dev',
  'chatbot.archerlab.dev',
  'walkwithme.archerlab.dev',
  'golf.archerlab.dev',
  'cupid.archerlab.dev',
  'harem.archerlab.dev'
];
const LOCALES = {
  ko: 'ko_KR',
  en: 'en_US',
  ja: 'ja_JP',
  es: 'es_LA',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR'
};

function siteUrl(pathname) {
  return `${SITE}${pathname}`;
}

function seoPath(slug) {
  return `/seo/${slug}`;
}

function seoUrl(slug) {
  return siteUrl(seoPath(slug));
}

// 언어별 cupid 메인 경로
const HOME = {
  ko: '/', en: '/index-en', ja: '/index-ja',
  es: '/index-es', fr: '/index-fr', de: '/index-de',
  pt: '/index-pt'
};

// 언어별 공통 카피 (한 번만 번역)
const C = {
  ko: {
    htmlLang: 'ko',
    why_title: '무설치 웹 연애 게임이 편한 이유',
    why: [
      '링크를 열면 설치·다운로드·가입 없이 바로 시작',
      '같은 기기와 브라우저에 진행 상황 자동 저장',
      'PC와 모바일 브라우저에서 별도 설치 파일 없이 실행',
      '광고나 중간 결제 없이 모든 시나리오 공개'
    ],
    how_title: '30초 만에 시작하기',
    how: ['아래 [지금 플레이] 버튼 누르기', '이름을 입력하고 이야기 시작하기', '5일 동안 선택하며 원하는 엔딩까지 가 보기'],
    faq_title: '자주 묻는 질문',
    faqs: [
      ['정말 무료인가요?', '네. 결제·구독·가입 없이 모든 캐릭터 루트와 엔딩을 끝까지 볼 수 있습니다.'],
      ['모바일에서도 잘 되나요?', '네. 최신 Chrome·Safari·Edge 같은 모바일 브라우저에서 실행됩니다. 세로 화면에 맞춰져 있어 한 손으로도 편하게 플레이할 수 있습니다.'],
      ['진행 상황은 저장되나요?', '진행 상황은 브라우저에 자동 저장됩니다. 같은 기기와 브라우저로 돌아오면 닫았던 장면부터 이어집니다.'],
      ['어떤 장르인가요?', '5일 동안 메신저처럼 대화를 나누는 학원 로맨스 비주얼 노벨입니다. 선택에 따라 호감도와 엔딩이 달라집니다.']
    ],
    picks_title: '설치 없이 즐기는 연애 게임',
    cupid_name: 'Cupid — AI 큐피드의 5일',
    cupid_desc: '메신저처럼 대화하고 선택하는 5일짜리 로맨스 VN입니다. 선택에 따라 관계와 엔딩이 달라지며, 한국어와 모바일 화면을 지원합니다.',
    nevergrad_name: 'Nevergrad (출시 예정)',
    nevergrad_label: '개발 중',
    nevergrad_desc: 'ArcherLab이 다음으로 준비 중인 작품입니다. 인물과 시나리오를 더 길고 깊게 다룹니다.',
    cta: '무료로 시작하기 →',
    other_langs_label: '다른 언어',
    footer: '© ArcherLab — 무설치 브라우저 로맨스 게임'
  },
  en: {
    htmlLang: 'en',
    why_title: 'Why a browser dating sim?',
    why: [
      'No install, no download, no signup — just click and play',
      'Runs in modern desktop, tablet, and mobile browsers',
      'Progress saves automatically in the same browser on the same device',
      'The full story is unlocked for free, with no ads or paywalls mid-route'
    ],
    how_title: 'Start playing in 30 seconds',
    how: ['Click the “Play Now” button below', 'Enter your name and start the story', 'Make choices over five in-game days and reach an ending'],
    faq_title: 'Frequently asked questions',
    faqs: [
      ['Is it really 100% free?', 'Yes. Every character route and ending is fully playable with no payment, no subscription, and no signup.'],
      ['Does it work on mobile?', 'Yes — it runs on any modern mobile browser (Chrome, Safari, Edge). The UI is portrait-first so you can play one-handed.'],
      ['Is my progress saved?', 'Yes. Progress is saved automatically to your browser. Reopen the same browser on the same device, and you can continue from where you left off.'],
      ['What genre is it?', 'A 5-day messenger-style romance visual novel. Your choices branch the story and unlock different endings.']
    ],
    picks_title: 'Recommended no-download dating sims',
    cupid_name: 'Cupid — Five Days of School Romance',
    cupid_desc: 'A messenger-style romance visual novel with multiple endings. Your choices shape five days of conversations and relationships. Optimized for mobile play.',
    nevergrad_name: 'Nevergrad',
    nevergrad_label: 'In development',
    nevergrad_desc: 'Deeper characters, longer routes. The next title from the same ArcherLab team.',
    cta: 'Play Free Now →',
    other_langs_label: 'Other languages',
    footer: '© ArcherLab — browser-based romance games, no download'
  },
  ja: {
    htmlLang: 'ja',
    why_title: 'ブラウザなら、すぐ遊べる',
    why: [
      'インストールも会員登録も不要。リンクを開けば、すぐにスタート',
      'PC・タブレット・スマートフォンの主要ブラウザに対応',
      '進行状況は同じ端末・同じブラウザに自動保存',
      '全シナリオを無料公開。ルート途中の課金や広告なし'
    ],
    how_title: '遊び方はかんたん',
    how: ['下の「今すぐ無料でプレイ」をタップ', 'プレイヤー名を入力して物語をスタート', '会話の選択肢を選び、気になる相手との仲を深める'],
    faq_title: 'よくある質問',
    faqs: [
      ['本当に無料ですか？', 'はい。すべてのキャラクタールートとエンディングを、課金・サブスクリプション・会員登録なしで最後まで遊べます。'],
      ['スマートフォンでも遊べますか？', 'はい。最新版のChrome・Safari・Edgeなど、主要なモバイルブラウザに対応しています。縦画面に最適化されているため、片手でも快適に遊べます。'],
      ['進行状況は保存されますか？', 'ブラウザ内に自動保存されます。同じ端末・同じブラウザで開けば、続きから再開できます。'],
      ['どんなジャンルですか？', '男性主人公として5人の女性キャラクターと交流する、メッセンジャー形式の学園恋愛ビジュアルノベルです。選択肢によって好感度とエンディングが変化します。']
    ],
    picks_title: 'ダウンロード不要で遊べる恋愛ゲーム',
    cupid_name: 'Cupid — 5日間の学園ロマンス',
    cupid_desc: 'メッセンジャー風UIで物語が進む、マルチエンディングの恋愛ビジュアルノベル。日本語に完全対応し、スマートフォンでも快適に遊べます。',
    nevergrad_name: 'Nevergrad',
    nevergrad_label: '開発中',
    nevergrad_desc: 'より深い人物描写と長編ルートを描く、ArcherLabの次回作です。',
    cta: '今すぐ無料でプレイ →',
    other_langs_label: '他の言語',
    footer: '© ArcherLab — ダウンロード不要のブラウザ恋愛ゲーム'
  },
  es: {
    htmlLang: 'es',
    why_title: '¿Por qué un simulador de citas en el navegador?',
    why: [
      'Sin instalación, sin descarga, sin registro — solo haz clic y juega',
      'Funciona en navegadores modernos de computadora, tableta y celular',
      'La partida se guarda automáticamente en este dispositivo y navegador',
      'Historia completa gratis, sin anuncios ni pagos durante la historia'
    ],
    how_title: 'Empieza a jugar en 30 segundos',
    how: ['Haz clic en el botón [Jugar ahora] de abajo', 'Escribe tu nombre y empieza la historia', 'Toma decisiones durante 5 días y desbloquea un final'],
    faq_title: 'Preguntas frecuentes',
    faqs: [
      ['¿Es realmente 100% gratis?', 'Sí. Todas las rutas de personajes y finales son completamente jugables sin pagos, sin suscripción y sin registro.'],
      ['¿Funciona en el celular?', 'Sí, en cualquier navegador móvil moderno (Chrome, Safari, Edge). La interfaz está diseñada para pantalla vertical, así que puedes jugar cómodamente con una mano.'],
      ['¿Se guarda mi progreso?', 'Sí. El progreso se guarda automáticamente en tu navegador. En el mismo dispositivo y navegador puedes continuar donde lo dejaste.'],
      ['¿A qué género pertenece?', 'Es una novela visual romántica de 5 días con interfaz de mensajería. Tus decisiones cambian el rumbo de la historia y desbloquean distintos finales.']
    ],
    picks_title: 'Simuladores de citas sin descarga recomendados',
    cupid_name: 'Cupid — Cinco días de romance escolar',
    cupid_desc: 'Una novela visual romántica con interfaz de mensajería y múltiples finales. Tus decisiones dan forma a cinco días de conversaciones y relaciones. Optimizada para celulares.',
    nevergrad_name: 'Nevergrad',
    nevergrad_label: 'En desarrollo',
    nevergrad_desc: 'Personajes más profundos, rutas más largas. El próximo título del equipo ArcherLab.',
    cta: 'Jugar gratis ahora →',
    other_langs_label: 'Otros idiomas',
    footer: '© ArcherLab — juegos románticos en el navegador, sin descarga'
  },
  fr: {
    htmlLang: 'fr',
    why_title: 'Pourquoi jouer à un jeu de romance dans le navigateur ?',
    why: [
      'Sans installation, sans téléchargement, sans inscription : un clic suffit',
      'Compatible avec les navigateurs récents sur ordinateur, tablette et mobile',
      'Progression sauvegardée automatiquement sur le même appareil et dans le même navigateur',
      'Histoire complète gratuite, sans publicité ni paiement en cours de route'
    ],
    how_title: 'Commencez en 30 secondes',
    how: ['Cliquez sur le bouton [Jouer maintenant] ci-dessous', 'Entrez votre nom et commencez l’histoire', 'Faites des choix pendant cinq jours et découvrez la fin qui vous attend'],
    faq_title: 'Questions fréquentes',
    faqs: [
      ['Est-ce vraiment 100% gratuit ?', 'Oui. Toutes les routes de personnages et toutes les fins sont jouables intégralement, sans paiement, sans abonnement et sans inscription.'],
      ['Est-ce compatible avec les mobiles ?', 'Oui, sur tout navigateur mobile récent (Chrome, Safari, Edge). L\'interface est conçue pour l\'affichage vertical et se joue facilement d\'une main.'],
      ['Ma progression est-elle sauvegardée ?', 'Oui. La progression est sauvegardée automatiquement dans votre navigateur. Sur le même appareil et navigateur, vous reprenez là où vous vous êtes arrêté.'],
      ['De quel genre de jeu s\'agit-il ?', 'C\'est un visual novel romantique de cinq jours qui se joue sous forme de messagerie. Vos choix font bifurquer l\'histoire et débloquent différentes fins.']
    ],
    picks_title: 'Jeux de romance sans téléchargement à découvrir',
    cupid_name: 'Cupid — Cinq jours de romance au lycée',
    cupid_desc: 'Un visual novel romantique qui se joue sous forme de messagerie, avec plusieurs fins. Vos choix façonnent cinq jours d\'échanges et de relations. Le jeu est optimisé pour les appareils mobiles.',
    nevergrad_name: 'Nevergrad',
    nevergrad_label: 'En développement',
    nevergrad_desc: 'Des personnages plus fouillés et des intrigues plus longues. Le prochain titre de l\'équipe ArcherLab.',
    cta: 'Jouer gratuitement →',
    other_langs_label: 'Autres langues',
    footer: '© ArcherLab — jeux romantiques sur navigateur, sans téléchargement'
  },
  pt: {
    htmlLang: 'pt',
    why_title: 'Por que um simulador de romance no navegador?',
    why: [
      'Sem instalar, sem baixar, sem cadastro — só clicar e jogar',
      'Funciona em navegadores atuais no computador, tablet e celular',
      'O progresso fica salvo automaticamente neste aparelho e navegador',
      'História completa grátis, sem anúncios nem cobranças durante a história'
    ],
    how_title: 'Comece a jogar em 30 segundos',
    how: ['Clique no botão [Jogar agora] abaixo', 'Digite seu nome e comece a história', 'Faça escolhas ao longo de 5 dias e descubra seu final'],
    faq_title: 'Perguntas frequentes',
    faqs: [
      ['É 100% grátis mesmo?', 'Sim. Todas as rotas de personagens e finais são totalmente jogáveis sem pagamento, sem assinatura e sem cadastro.'],
      ['Funciona no celular?', 'Sim, em qualquer navegador móvel moderno (Chrome, Safari, Edge). A interface foi pensada para uso na vertical, então dá para jogar com uma mão.'],
      ['Meu progresso é salvo?', 'Sim. O progresso é salvo automaticamente no seu navegador. No mesmo aparelho e navegador, você continua de onde parou.'],
      ['Qual é o gênero?', 'É uma visual novel romântica de 5 dias com interface de conversa. Suas escolhas mudam os rumos da história e desbloqueiam finais diferentes.']
    ],
    picks_title: 'Simuladores de romance sem download recomendados',
    cupid_name: 'Cupid — Cinco dias de romance escolar',
    cupid_desc: 'Uma visual novel romântica com interface de conversa e vários finais. Suas escolhas moldam cinco dias de diálogos e relacionamentos. Otimizada para celular.',
    nevergrad_name: 'Nevergrad',
    nevergrad_label: 'Em desenvolvimento',
    nevergrad_desc: 'Personagens mais profundos, rotas mais longas. O próximo título da equipe ArcherLab.',
    cta: 'Jogar grátis agora →',
    other_langs_label: 'Outros idiomas',
    footer: '© ArcherLab — jogos românticos no navegador, sem download'
  },
  de: {
    htmlLang: 'de',
    why_title: 'Warum eine Dating-Simulation im Browser?',
    why: [
      'Keine Installation, kein Download, keine Anmeldung — einfach anklicken und spielen',
      'Läuft in aktuellen Browsern auf PC, Tablet und Smartphone',
      'Der Fortschritt wird auf demselben Gerät im selben Browser automatisch gespeichert',
      'Die komplette Geschichte ist kostenlos, ohne Werbung oder Bezahlschranken mitten in einer Route'
    ],
    how_title: 'In 30 Sekunden loslegen',
    how: ['Klicke unten auf [Jetzt spielen]', 'Gib deinen Namen ein und starte die Geschichte', 'Triff fünf Tage lang Entscheidungen und entdecke dein Ende'],
    faq_title: 'Häufige Fragen',
    faqs: [
      ['Ist es wirklich 100% kostenlos?', 'Ja. Alle Charakterrouten und Enden sind komplett spielbar — ohne Bezahlung, Abo oder Registrierung.'],
      ['Läuft es auf dem Handy?', 'Ja, in jedem modernen mobilen Browser (Chrome, Safari, Edge). Die Oberfläche ist hochkant gestaltet — bequem einhändig spielbar.'],
      ['Wird mein Fortschritt gespeichert?', 'Ja. Der Fortschritt wird automatisch im Browser gespeichert. Auf demselben Gerät und Browser kannst du jederzeit weiterspielen.'],
      ['Welches Genre ist das?', 'Es ist eine fünftägige Romance-Visual-Novel im Messenger-Stil. Deine Entscheidungen verändern den Verlauf der Handlung und schalten verschiedene Enden frei.']
    ],
    picks_title: 'Empfohlene Dating-Simulationen ohne Download',
    cupid_name: 'Cupid — Fünf Tage voller Schulromantik',
    cupid_desc: 'Eine Romance-Visual-Novel im Messenger-Stil mit mehreren Enden. Deine Entscheidungen prägen fünf Tage voller Gespräche und Beziehungen. Für Smartphones optimiert.',
    nevergrad_name: 'Nevergrad',
    nevergrad_label: 'In Entwicklung',
    nevergrad_desc: 'Vielschichtigere Figuren, längere Routen. Der nächste Titel des ArcherLab-Teams.',
    cta: 'Jetzt kostenlos spielen →',
    other_langs_label: 'Andere Sprachen',
    footer: '© ArcherLab — Romance-Spiele im Browser, ohne Download'
  }
};

// 페이지 정의: { slug, h1, title, meta, intro, intentSection?, faqs? }
const PAGES = {
  ko: [
    {
      slug: 'muryo-misinsi-game',
      group: 'free-browser-romance',
      h1: '무료 미연시 게임 — 웹에서 바로 플레이하는 Cupid',
      title: '무료 미연시 게임 | 웹 미연시 Cupid 바로 플레이',
      meta: '무료 미연시 Cupid를 다운로드 없이 브라우저에서 바로 즐겨 보세요. 한국어로 진행되는 5일간의 학원 로맨스와 여러 엔딩을 PC·모바일에서 무료로 만날 수 있습니다.',
      intro: '"무료 미연시"를 찾고 있다면 설치 파일부터 받을 필요가 없습니다. Cupid는 브라우저에서 바로 시작해, 5일 동안 대화와 선택으로 여러 엔딩을 만나는 학원 로맨스입니다.'
    },
    {
      slug: 'web-misinsi',
      h1: '미연시 사이트 — 설치 없이 바로 즐기는 Cupid',
      title: '미연시 사이트 | 웹 미연시 Cupid 무료 플레이',
      meta: '미연시 사이트를 찾고 있다면 Cupid를 브라우저에서 바로 시작해 보세요. 설치나 다운로드 없이 한국어 학원 로맨스와 여러 엔딩을 무료로 즐길 수 있습니다.',
      intro: '"미연시 사이트"에서 곧바로 플레이하고 싶다면 앱이나 설치 파일을 거칠 필요가 없습니다. 링크를 열면 전학 첫날부터 닷새 동안 이어지는 대화와 선택이 시작됩니다.'
    },
    {
      slug: 'muryo-misinsi',
      h1: '무료 미연시 — 다운로드 없이 브라우저에서',
      title: '무료 미연시 | 다운로드 없는 웹 미연시 Cupid',
      meta: '무료 미연시 Cupid는 다운로드 없이 웹에서 바로 시작할 수 있습니다. 모바일과 한국어를 지원하며, 5일간의 학원 로맨스가 선택에 따라 여러 엔딩으로 이어집니다.',
      intro: '"무료 미연시"를 찾을 때 설치 파일과 회원가입부터 요구하면 망설여집니다. Cupid는 링크만 열면 바로 이야기를 시작할 수 있습니다.'
    },
    {
      slug: 'misinsi-muryo',
      h1: '미연시 무료 플레이 — Cupid',
      title: '미연시 무료 플레이 | 무설치 웹 미연시',
      meta: '미연시 무료 플레이를 원한다면 Cupid를 시작해 보세요. 결제와 설치 없이 브라우저에서 캐릭터별 이야기와 엔딩을 끝까지 볼 수 있습니다.',
      intro: '"미연시 무료" 검색 결과에서 짧은 광고 게임만 보여 아쉬웠다면 Cupid를 열어 보세요. 5일 동안 메신저처럼 대화하고, 선택에 따라 관계와 엔딩을 만들어 가는 학원 로맨스입니다.'
    },
    {
      slug: 'muryo-yeonae-sim',
      h1: '무료 연애 시뮬레이션 게임 — 무설치 웹에서 바로',
      title: '무료 연애 시뮬레이션 게임 | 무설치 브라우저 플레이 2026',
      meta: '결제나 다운로드 없이 바로 즐기는 무료 연애 시뮬레이션 게임입니다. 한국어 멀티 엔딩 로맨스 VN을 모바일과 PC 브라우저에서 플레이하세요.',
      intro: '"무료 연애 시뮬레이션 게임"을 찾는다고 스팀이나 앱스토어부터 열 필요는 없습니다. 브라우저만 있으면 5일짜리 로맨스와 여러 엔딩을 결제 없이 끝까지 즐길 수 있습니다.'
    },
    {
      slug: 'browser-misinsi',
      h1: '브라우저 미연시 — 설치 없이 PC·모바일에서 바로',
      title: '브라우저 미연시 추천 | 설치 없는 Cupid 무료 플레이',
      meta: '브라우저 야겜이나 웹 미연시를 찾는다면 Cupid를 바로 플레이하세요. 다운로드·설치 없이 PC와 모바일에서 즐기는 무료 멀티 엔딩 로맨스 VN입니다.',
      intro: '"브라우저 야겜"이나 "웹 미연시"를 찾고 있다면 설치 없이 시작하는 Cupid가 있습니다. 한국어로 닷새 동안 대화하고 선택하며, 캐릭터마다 다른 엔딩을 볼 수 있습니다.',
      intentSection: {
        title: '무료 야겜·에로게 사이트를 찾는다면',
        body: 'Cupid는 게임 파일을 내려받는 미연시 다운로드 사이트가 아닙니다. 링크를 열면 설치 없이 바로 시작되고, 5일간의 학원 로맨스가 선택에 따라 여러 엔딩으로 이어집니다.'
      },
      faqs: [
        ['Cupid는 야겜 또는 에로게인가요?', '성인 취향 연애 게임을 넓게 야겜이나 에로게라고 부른다면 가깝습니다. 다만 Cupid의 중심은 노골적인 장면이 아니라 5일간 이어지는 관계와 선택, 여러 엔딩입니다.'],
        ['미연시 다운로드 사이트인가요?', '아니요. 파일을 내려받지 않고 브라우저에서 바로 실행합니다. PC와 모바일 모두 따로 설치할 필요가 없습니다.']
      ]
    },
    {
      slug: 'mu-seolchi-yeonae-game',
      h1: '무설치 연애게임 — 링크를 열면 바로 시작',
      title: '무설치 연애게임 추천 | 다운로드 없이 즐기는 한글 로맨스 VN',
      meta: '무설치로 즐기는 한국어 연애게임 추천. 다운로드·가입·결제 없이 브라우저에서 바로 시작하는 5일 로맨스 비주얼 노벨.',
      intro: '"무설치 연애게임"을 찾았는데 광고만 많은 짧은 미니게임이라 아쉬웠다면 Cupid를 열어 보세요. 설치 없이도 5일짜리 학원 로맨스와 여러 엔딩을 끝까지 즐길 수 있습니다.'
    }
  ],
  en: [
    {
      slug: 'free-dating-sim-no-download',
      group: 'free-browser-romance',
      h1: 'Free Dating Sim, No Download — Play Right in Your Browser',
      title: 'Free Dating Sim No Download | Play in Browser 2026',
      meta: 'Play a full free dating sim with no download, no signup, and no payment. Mobile-friendly multi-ending romance visual novel right in your browser.',
      intro: 'Looking for a "free dating sim no download"? You don\'t need Steam, an app store, or a credit card. A full 5-day multi-ending romance visual novel runs entirely in your browser — desktop or mobile.'
    },
    {
      slug: 'cupid-game-online',
      h1: 'Cupid Game Online — Free Browser Visual Novel',
      title: 'Cupid Game Online | Free Romance Visual Novel',
      meta: 'Play Cupid game online for free in your browser. A no-download romance visual novel with messenger-style choices, multiple endings, and mobile support.',
      intro: 'If you searched for "Cupid game online", this is the playable browser version: a free romance visual novel about five days of choices, messages, and branching endings.'
    },
    {
      slug: 'cupid-visual-novel',
      h1: 'Cupid Visual Novel — Free Romance VN in Your Browser',
      title: 'Cupid Visual Novel | Free Browser Romance VN',
      meta: 'Cupid is a free browser visual novel with romance routes, multiple endings, and no download. Play the full messenger-style VN on desktop or mobile.',
      intro: 'Cupid is a browser-based visual novel built around short messenger scenes, character choices, and multiple endings. No installer, no app store, no payment wall.'
    },
    {
      slug: 'browser-otome-game',
      h1: 'Looking for a Browser Otome Game? Try Cupid Free',
      title: 'Browser Otome Game Search | Free Romance VN Online',
      meta: 'Looking for a free browser otome game? Cupid is a no-download school-romance visual novel with a male protagonist, five women, and multiple endings.',
      intro: 'If you searched for a "browser otome game," one detail matters: Cupid is not a traditional otome game with a female protagonist and male love interests. You play as a male transfer student getting to know five women in a school-romance visual novel, free in your browser with no install or signup.'
    },
    {
      slug: 'play-dating-simulator-online',
      h1: 'Play a Dating Simulator Online — Free, In-Browser',
      title: 'Play Dating Simulator Online Free | No Download 2026',
      meta: 'Play a dating simulator online for free in your browser. Multi-ending romance VN with no download, no signup, and full story unlocked.',
      intro: 'Most "play dating simulator online" results push you to sketchy download sites. Here\'s a real one: a 5-day romance VN that runs in your browser, free, with the full story unlocked from the first click.'
    }
  ],
  ja: [
    {
      slug: 'gakuen-renai-game-muryo-browser',
      group: 'free-browser-romance',
      h1: '無料の学園恋愛ゲーム — ブラウザですぐ遊べるCupid',
      title: '無料の学園恋愛ゲーム | ブラウザで遊べるCupid',
      meta: '学園恋愛ゲームをブラウザで無料プレイ。Cupidはダウンロード不要・スマホ対応で、5日間の学園ロマンスと複数のエンディングを楽しめます。',
      intro: 'ブラウザで遊べる無料の学園恋愛ゲームを探している方へ。Cupidはインストールなしですぐに始められます。転校初日からの5日間、会話と選択肢によって関係が変わり、物語は複数のエンディングへ分岐します。'
    },
    {
      slug: 'gakuen-renai-game-muryo-download-nashi',
      h1: '無料・ダウンロード不要の学園恋愛ゲーム — Cupid',
      title: '無料・ダウンロード不要の学園恋愛ゲーム | スマホ対応Cupid',
      meta: '無料・ダウンロード不要で遊べる学園恋愛ゲーム。Cupidは会員登録も不要で、スマートフォンやPCのブラウザから最後まで楽しめます。',
      intro: 'ダウンロードなしで遊べる無料の学園恋愛ゲームを探しているなら、Cupidはブラウザからそのまま始められます。アプリもインストーラーも不要。学校を舞台にした5日間の恋愛ストーリーを無料で楽しめます。'
    },
    {
      slug: 'browser-otome-game-ja',
      h1: 'ブラウザ乙女ゲームを探している方へ — 無料で遊べるCupid',
      title: 'ブラウザ乙女ゲームを探している方へ | 無料・インストール不要',
      meta: 'ブラウザで遊べる恋愛ゲームを探している方へ。Cupidは男性主人公として5人の女性と交流する、無料・インストール不要の学園恋愛VNです。',
      intro: '「ブラウザ乙女ゲーム」で検索してたどり着いた方へ。Cupidは女性主人公の乙女ゲームではなく、男性主人公として5人の女性キャラクターと交流する学園恋愛ビジュアルノベルです。アプリ不要で、リンクを開けばすぐに遊べます。'
    },
    {
      slug: 'renai-game-browser',
      h1: 'ブラウザ恋愛ゲーム — ダウンロードなしですぐ遊べるCupid',
      title: 'ブラウザで遊べる恋愛ゲーム | 無料のCupid',
      meta: '恋愛ゲームをブラウザで無料プレイ。Cupidはダウンロードも会員登録も不要で、スマートフォンにも対応した学園恋愛ビジュアルノベルです。',
      intro: 'ブラウザで遊べる恋愛ゲームを探しているなら、Cupidはすぐに始められます。インストールは不要。5日間の会話と選択肢によって、相手との関係や物語の結末が変わります。'
    },
    {
      slug: 'browser-otome-muryo',
      h1: 'ブラウザで遊べる無料恋愛ゲーム — インストール不要',
      title: '無料のブラウザ恋愛ゲーム | インストール不要・スマホ対応',
      meta: '無料で遊べるブラウザ恋愛ゲーム。Cupidは男性主人公として5人の女性と交流する、スマホ対応・マルチエンディングの学園恋愛VNです。',
      intro: '「無料のブラウザ乙女ゲーム」を探している方にも遊びやすい、メッセンジャー形式の恋愛ビジュアルノベルです。ただし、Cupidは女性主人公の乙女ゲームではなく、男性主人公と5人の女性キャラクターの恋を描きます。インストール不要で、最後まで無料です。'
    },
    {
      slug: 'muryo-renai-sim',
      h1: '無料の恋愛シミュレーション — ダウンロード不要',
      title: '無料・ダウンロード不要の恋愛シミュレーション | ブラウザですぐ遊べる',
      meta: 'ダウンロードも課金も不要で遊べる無料の恋愛シミュレーション。5日間の物語が複数の結末へ分岐する恋愛ビジュアルノベルです。',
      intro: '「無料 恋愛シミュレーション ダウンロード不要」を探している方へ。Steamやアプリストアを経由する必要はありません。5日間のマルチエンディング恋愛ビジュアルノベルを、ブラウザだけで最後まで無料で遊べます。'
    },
    {
      slug: 'web-otome',
      h1: 'Web乙女ゲームを探している方へ — リンクひとつで遊べる恋愛VN',
      title: 'Web乙女ゲームを探している方へ | 無料のブラウザ恋愛VN',
      meta: 'Webで遊べる恋愛ゲームを探している方へ。Cupidは男性主人公として5人の女性と交流する、インストール・登録・課金不要の学園恋愛VNです。',
      intro: '「Web乙女ゲーム」で検索してきた方へ。Cupidは女性主人公の乙女ゲームではなく、男性主人公として5人の女性キャラクターとの恋を描く作品です。メッセンジャー形式の物語を、リンクひとつで最後まで楽しめます。'
    },
    {
      slug: 'renai-game-muryo-download-nashi',
      h1: '無料・ダウンロード不要の恋愛ゲーム — ブラウザですぐ遊べる',
      title: '無料・ダウンロード不要の恋愛ゲーム | ブラウザで遊べるCupid',
      meta: '無料・ダウンロード不要で遊べる恋愛ゲーム。インストール・会員登録・課金なしで、複数のエンディングを最後まで楽しめます。',
      intro: 'ダウンロードなしで遊べる無料の恋愛ゲームを探している方へ。Cupidは5日間の物語が複数の結末へ分岐する、学園恋愛ビジュアルノベルです。ブラウザを開けば、そのまま始められます。'
    },
    {
      slug: 'sumaho-otome-game-muryo',
      h1: 'スマホで遊べる無料恋愛ゲーム — アプリ不要・縦画面対応',
      title: 'スマホ向け無料恋愛ゲーム | アプリ不要・片手操作対応',
      meta: 'スマホで遊べる無料恋愛ゲーム。Cupidは男性主人公として5人の女性と交流する、アプリ不要・縦画面対応の学園恋愛VNです。',
      intro: '「スマホで遊べる無料の乙女ゲーム」を探している方へ。Cupidは女性主人公の乙女ゲームではなく、男性主人公と5人の女性キャラクターの恋を描く作品です。縦画面・片手操作に最適化され、アプリを入れずに最後まで楽しめます。'
    }
  ],
  es: [
    {
      slug: 'simulador-citas-gratis',
      group: 'free-browser-romance',
      h1: 'Simulador de citas gratis — Sin descargar, en el navegador',
      title: 'Simulador de citas gratis sin descargar | Jugar en línea 2026',
      meta: 'Juega un simulador de citas gratis sin descargar, sin registro y sin pagos. Novela visual romántica con múltiples finales en el navegador.',
      intro: '¿Buscas un "simulador de citas gratis sin descargar"? No necesitas Steam, una tienda de aplicaciones ni tarjeta. Esta novela visual romántica de 5 días, con múltiples finales, funciona directamente en tu navegador, tanto en computadora como en celular.'
    },
    {
      slug: 'otome-navegador',
      h1: '¿Buscas un otome game en el navegador? Prueba Cupid gratis',
      title: 'Otome game en español | Romance visual gratis en navegador',
      meta: '¿Buscas un otome game gratis en español? Cupid es una novela visual escolar sin descarga, con protagonista masculino, cinco mujeres y múltiples finales.',
      intro: 'Si llegaste buscando un "otome game en español", hay algo que debes saber: Cupid no es un otome tradicional con protagonista femenina e intereses amorosos masculinos. Aquí juegas como un alumno nuevo que conoce a cinco mujeres en una novela visual de romance escolar, gratis y sin instalar nada.'
    },
    {
      slug: 'juego-citas-online',
      h1: 'Juego de citas online — Gratis y en el navegador',
      title: 'Juego de citas online gratis | Jugar en el navegador 2026',
      meta: 'Juego de citas online gratis para jugar en el navegador. Sin descarga, sin registro, historia completa desbloqueada.',
      intro: 'Muchos resultados para "juego de citas online" llevan a páginas de descarga poco confiables. Cupid funciona directamente en tu navegador: una novela visual romántica de 5 días, gratis y con la historia completa disponible desde el primer clic.'
    }
  ],
  fr: [
    {
      slug: 'simulation-amour-gratuit',
      group: 'free-browser-romance',
      h1: 'Simulation amoureuse gratuite — Sans téléchargement',
      title: 'Simulation amoureuse gratuite sans téléchargement | Jouer en ligne 2026',
      meta: 'Jouez à une simulation amoureuse gratuite, sans téléchargement, sans inscription et sans paiement. Un visual novel romantique à fins multiples, directement dans votre navigateur.',
      intro: 'Vous cherchez une « simulation amoureuse gratuite sans téléchargement » ? Pas besoin de Steam, d\'une boutique d\'applications ni de carte bancaire. Ce visual novel romantique de cinq jours, avec plusieurs fins, fonctionne directement dans votre navigateur.'
    },
    {
      slug: 'otome-navigateur',
      h1: 'Vous cherchez un otome game sur navigateur ? Essayez Cupid',
      title: 'Otome game en français | Visual novel romantique gratuit',
      meta: 'Vous cherchez un otome game gratuit en français ? Cupid est un visual novel scolaire sans téléchargement, avec un héros, cinq personnages féminins et plusieurs fins.',
      intro: 'Si vous cherchiez un « otome game en français », mieux vaut préciser que Cupid n\'est pas un otome traditionnel mettant en scène une héroïne et des prétendants masculins. Vous incarnez un nouvel élève qui apprend à connaître cinq personnages féminins dans un visual novel de romance scolaire, gratuit et sans installation.'
    },
    {
      slug: 'jeu-drague-en-ligne',
      h1: 'Jeu de drague en ligne — Gratuit, sans téléchargement',
      title: 'Jeu de drague en ligne gratuit | Jouer en navigateur 2026',
      meta: 'Jeu de drague en ligne gratuit, jouable directement dans votre navigateur. Sans téléchargement ni inscription, avec l\'intégralité de l\'histoire accessible.',
      intro: 'De nombreux résultats pour « jeu de drague en ligne » renvoient vers des sites de téléchargement peu fiables. Cupid se lance directement dans votre navigateur : un visual novel romantique de 5 jours, gratuit, dont toute l\'histoire est accessible dès le premier clic.'
    }
  ],
  de: [
    {
      slug: 'dating-sim-kostenlos',
      group: 'free-browser-romance',
      h1: 'Dating-Sim kostenlos — ohne Download im Browser',
      title: 'Dating-Sim kostenlos ohne Download | Im Browser spielen 2026',
      meta: 'Spiele eine kostenlose Dating-Simulation ohne Download, Anmeldung oder Bezahlung. Eine Romance-Visual-Novel mit mehreren Enden direkt im Browser.',
      intro: 'Du suchst nach „Dating-Sim kostenlos ohne Download“? Du brauchst weder Steam noch einen App-Store noch eine Kreditkarte. Diese fünftägige Romance-Visual-Novel mit mehreren Enden läuft direkt in deinem Browser — am PC oder Smartphone.'
    },
    {
      slug: 'browser-otome',
      h1: 'Du suchst ein Browser-Otome-Game? Probiere Cupid',
      title: 'Browser-Otome-Game gesucht | Kostenlose Romance-VN',
      meta: 'Du suchst ein kostenloses Browser-Otome-Game? Cupid ist eine Visual Novel über eine Schulromanze – ohne Download, mit männlicher Hauptfigur, fünf weiblichen Figuren und mehreren Enden.',
      intro: 'Wenn du nach einem „Browser-Otome-Game“ gesucht hast, ist ein Hinweis wichtig: Cupid ist kein klassisches Otome mit weiblicher Hauptfigur und männlichen Liebesinteressen. Du spielst einen neuen Schüler, der in einer Visual Novel über eine Schulromanze fünf weibliche Figuren kennenlernt – kostenlos, ohne Installation oder Anmeldung.'
    },
    {
      slug: 'dating-spiel-online',
      h1: 'Dating-Spiel online — Gratis im Browser',
      title: 'Dating-Spiel online gratis | Im Browser spielen ohne Download',
      meta: 'Dating-Spiel online gratis im Browser spielen. Kein Download, keine Anmeldung, die vollständige Handlung ist freigeschaltet.',
      intro: 'Viele Treffer für „Dating-Spiel online“ führen zu fragwürdigen Download-Seiten. Cupid läuft direkt in deinem Browser: eine kostenlose, fünftägige Romance-Visual-Novel, deren komplette Handlung ab dem ersten Klick verfügbar ist.'
    }
  ],
  pt: [
    {
      slug: 'otome-navegador-gratis',
      group: 'free-browser-romance',
      h1: 'Procurando um otome game no navegador? Conheça Cupid',
      title: 'Otome game em português | Romance visual grátis',
      meta: 'Procurando um otome game grátis em português? Cupid é uma visual novel escolar sem download, com protagonista masculino, cinco mulheres e vários finais.',
      intro: 'Se você chegou procurando um “otome game em português”, vale esclarecer: Cupid não é um otome tradicional com protagonista feminina e interesses amorosos masculinos. Você joga como um aluno transferido que conhece cinco mulheres em uma visual novel de romance escolar, grátis e sem instalar nada.'
    },
    {
      slug: 'jogo-namoro-online-gratis',
      h1: 'Jogo de namoro online grátis — No navegador, sem download',
      title: 'Jogo de namoro online grátis sem download | Jogar no navegador 2026',
      meta: 'Jogo de namoro online grátis para jogar no navegador. Sem download, sem cadastro, história completa desbloqueada.',
      intro: 'Muitos resultados de “jogo de namoro online” levam a sites de download pouco confiáveis. Cupid roda direto no navegador: uma visual novel romântica de 5 dias, grátis, com a história completa disponível desde o primeiro clique.'
    },
    {
      slug: 'visual-novel-romance-gratis',
      h1: 'Visual novel de romance grátis — No navegador, sem baixar',
      title: 'Visual novel de romance grátis | Jogar sem baixar 2026',
      meta: 'Visual novel romântica grátis para jogar no navegador, sem baixar nem instalar. Múltiplos finais, otimizada para celular.',
      intro: 'Você procura uma “visual novel de romance grátis”? Não precisa de Steam, loja de aplicativos nem cartão. Esta visual novel romântica de 5 dias, com vários finais, roda direto no navegador — no computador ou celular.'
    }
  ]
};

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans KR","Noto Sans JP","Noto Sans",sans-serif;line-height:1.65;color:#2a2a3a;background:linear-gradient(180deg,#fff5f8 0%,#fff 40%);min-height:100vh}
.wrap{max-width:760px;margin:0 auto;padding:32px 20px 80px}
header{text-align:center;padding:24px 0 8px}
h1{font-size:28px;line-height:1.3;margin-bottom:16px;color:#c2185b}
h2{font-size:20px;margin:36px 0 12px;color:#880e4f;border-bottom:2px solid #fce4ec;padding-bottom:6px}
p{margin-bottom:14px}
ul{margin:12px 0 18px 0;padding-left:22px}
li{margin-bottom:8px}
.intro{font-size:17px;color:#444;background:#fff;border-left:4px solid #ec407a;padding:14px 18px;border-radius:6px;margin:18px 0 8px}
.cta-box{text-align:center;margin:36px 0;padding:28px 20px;background:linear-gradient(135deg,#ec407a,#ad1457);border-radius:14px;box-shadow:0 8px 24px rgba(236,64,122,.25)}
.cta{display:inline-block;background:#fff;color:#c2185b;font-weight:700;font-size:18px;padding:14px 32px;border-radius:50px;text-decoration:none;box-shadow:0 4px 12px rgba(0,0,0,.12);transition:transform .15s}
.cta:hover{transform:translateY(-2px)}
.pick{background:#fff;border:1px solid #f8bbd0;border-radius:10px;padding:16px 18px;margin-bottom:14px}
.pick h3{font-size:17px;color:#c2185b;margin-bottom:6px}
.pick .badge{display:inline-block;background:#fce4ec;color:#c2185b;font-size:12px;padding:2px 8px;border-radius:10px;margin-left:6px;vertical-align:middle}
.pick p{font-size:14px;color:#555;margin:0}
.faq{margin-bottom:14px}
.faq summary{cursor:pointer;font-weight:600;padding:10px 0;color:#444}
.faq p{padding:6px 0 4px;color:#555;font-size:15px}
footer{margin-top:48px;padding-top:20px;border-top:1px solid #fce4ec;text-align:center;font-size:13px;color:#888}
.langs{margin-top:14px;font-size:13px}
.langs a{color:#ad1457;margin:0 6px;text-decoration:none}
.langs a:hover{text-decoration:underline}
.related{margin:22px 0 6px;text-align:center;font-size:13px;color:#777}
.related a{color:#ad1457;margin:0 7px;text-decoration:none}
.related a:hover{text-decoration:underline}
@media(max-width:520px){h1{font-size:23px}h2{font-size:18px}.intro{font-size:15px}.cta{font-size:16px;padding:12px 26px}}
`;

function escapeHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function findPageByGroup(lang, group) {
  return PAGES[lang].find(p => p.group === group);
}

function getAlternateEntries(lang, page) {
  if (!page.group) {
    return [];
  }
  return Object.keys(PAGES)
    .map(L => ({ lang: L, page: findPageByGroup(L, page.group) }))
    .filter(entry => entry.page);
}

function getDefaultAlternate(entries) {
  return entries.find(entry => entry.lang === 'en') || entries.find(entry => entry.lang === 'ko') || entries[0];
}

function renderGoogleAnalytics() {
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      linker: {
        domains: ${JSON.stringify(GA_LINKER_DOMAINS)}
      }
    });
    window.sendGAEvent = function(eventName, params) {
      gtag('event', eventName, Object.assign({
        page_language: document.documentElement.lang || 'en'
      }, params || {}));
    };
  </script>`;
}

function renderPage(lang, page) {
  const c = C[lang];
  const url = seoUrl(page.slug);
  const homeUrl = HOME[lang];
  const socialImageAlt = SOCIAL_IMAGE_ALTS[lang] || SOCIAL_IMAGE_ALTS.en;
  const relatedNavLabel = RELATED_NAV_LABELS[lang] || RELATED_NAV_LABELS.en;
  const faqs = [...c.faqs, ...(page.faqs || [])];
  const alternateEntries = getAlternateEntries(lang, page);
  const defaultAlternate = getDefaultAlternate(alternateEntries);

  const altLinks = alternateEntries.length > 0
    ? alternateEntries.map(({ lang: L, page: altPage }) =>
      `<link rel="alternate" hreflang="${L}" href="${seoUrl(altPage.slug)}">`
    ).join('\n  ') + `\n  <link rel="alternate" hreflang="x-default" href="${seoUrl(defaultAlternate.page.slug)}">`
    : '';

  const languageTargets = alternateEntries.length > 1
    ? alternateEntries
    : Object.keys(PAGES).map(L => ({ lang: L, page: PAGES[L][0] }));

  const otherLangs = languageTargets
    .filter(entry => entry.lang !== lang)
    .map(entry => `<a href="${seoPath(entry.page.slug)}" hreflang="${entry.lang}">${entry.lang.toUpperCase()}</a>`)
    .join(' | ');

  const relatedLinks = PAGES[lang]
    .filter(p => p.slug !== page.slug)
    .slice(0, 6)
    .map(p => `<a href="${seoPath(p.slug)}">${escapeHTML(p.title.split('|')[0].trim())}</a>`)
    .join(' | ');

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": page.title,
        "description": page.meta,
        "inLanguage": lang,
        "mainEntity": { "@id": `${SITE}/#videogame` },
        "breadcrumb": { "@id": `${url}#breadcrumb` }
      },
      {
        "@type": ["VideoGame", "WebApplication"],
        "@id": `${SITE}/#videogame`,
        "name": "Cupid",
        "alternateName": ["Cupid Game", "Cupid Visual Novel", "무료 미연시 Cupid", "学園恋愛ゲーム Cupid"],
        "description": GAME_DESCRIPTIONS[lang] || GAME_DESCRIPTION,
        "url": siteUrl('/'),
        "image": SEO_IMAGE,
        "screenshot": [
          `${SITE}/assets/images/screenshots/cupid-title.jpg?v=2.9.6`,
          `${SITE}/assets/images/screenshots/cupid-dialogue.jpg?v=2.9.6`,
          `${SITE}/assets/images/screenshots/cupid-school.jpg?v=2.9.6`
        ],
        "genre": ["Visual Novel", "Romance", "Dating Simulation"],
        "gamePlatform": ["Web Browser", "Mobile Browser"],
        "applicationCategory": "GameApplication",
        "operatingSystem": "Any",
        "inLanguage": Object.keys(PAGES),
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": 0,
          "priceCurrency": "USD"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://archerlab.dev/#organization",
          "name": "ArcherLab",
          "url": "https://archerlab.dev/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": faqs.map(([q, a]) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Cupid",
            "item": siteUrl(homeUrl)
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.title.split('|')[0].trim(),
            "item": url
          }
        ]
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="${c.htmlLang}">
<head>
<script src="/assets/js/ga-engagement.js?v=20260618-engagement" defer></script>
  <meta charset="UTF-8">
  <meta http-equiv="origin-trial" content="${ORIGIN_TRIAL_TOKEN}">
  <script src="/assets/js/error-reporter.js?v=20260821-resource-retry"></script>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHTML(page.title)}</title>
  <meta name="description" content="${escapeHTML(page.meta)}">
  <link rel="canonical" href="${url}">
${altLinks ? `  ${altLinks}\n` : ''}  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <meta property="og:title" content="${escapeHTML(page.title)}">
  <meta property="og:description" content="${escapeHTML(page.meta)}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Cupid">
  <meta property="og:locale" content="${LOCALES[lang] || 'en_US'}">
  <meta property="og:image" content="${SOCIAL_IMAGE}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1920">
  <meta property="og:image:height" content="1080">
  <meta property="og:image:alt" content="${socialImageAlt}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHTML(page.title)}">
  <meta name="twitter:description" content="${escapeHTML(page.meta)}">
  <meta name="twitter:image" content="${SOCIAL_IMAGE}">
  <meta name="twitter:image:alt" content="${socialImageAlt}">
  <link rel="icon" href="/favicon.ico">
  ${renderGoogleAnalytics()}
  <style>${CSS}</style>
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>${escapeHTML(page.h1)}</h1>
    </header>

    <p class="intro">${escapeHTML(page.intro)}</p>
${page.intentSection ? `
    <h2>${escapeHTML(page.intentSection.title)}</h2>
    <p>${escapeHTML(page.intentSection.body)}</p>
` : '\n'}    ${relatedLinks ? `<nav class="related" aria-label="${relatedNavLabel}">${relatedLinks}</nav>` : ''}

    <div class="cta-box">
      <a class="cta" href="${homeUrl}" data-seo-cta="top" onclick="try{localStorage.setItem('cupid:language','${lang}')}catch(e){};window.sendGAEvent('seo_cta_click',{seo_slug:'${page.slug}',cta_placement:'top',link_url:'${siteUrl(homeUrl)}',transport_type:'beacon'})">${escapeHTML(c.cta)}</a>
    </div>

    <h2>${escapeHTML(c.why_title)}</h2>
    <ul>
      ${c.why.map(w => `<li>${escapeHTML(w)}</li>`).join('\n      ')}
    </ul>

    <h2>${escapeHTML(c.picks_title)}</h2>
    <div class="pick">
      <h3>${escapeHTML(c.cupid_name)}</h3>
      <p>${escapeHTML(c.cupid_desc)}</p>
    </div>
    <div class="pick">
      <h3>${escapeHTML(c.nevergrad_name)} <span class="badge">${escapeHTML(c.nevergrad_label)}</span></h3>
      <p>${escapeHTML(c.nevergrad_desc)}</p>
    </div>

    <h2>${escapeHTML(c.how_title)}</h2>
    <ul>
      ${c.how.map(h => `<li>${escapeHTML(h)}</li>`).join('\n      ')}
    </ul>

    <div class="cta-box">
      <a class="cta" href="${homeUrl}" data-seo-cta="bottom" onclick="try{localStorage.setItem('cupid:language','${lang}')}catch(e){};window.sendGAEvent('seo_cta_click',{seo_slug:'${page.slug}',cta_placement:'bottom',link_url:'${siteUrl(homeUrl)}',transport_type:'beacon'})">${escapeHTML(c.cta)}</a>
    </div>

    <h2>${escapeHTML(c.faq_title)}</h2>
    ${faqs.map(([q, a]) => `<details class="faq"><summary>${escapeHTML(q)}</summary><p>${escapeHTML(a)}</p></details>`).join('\n    ')}

    <footer>
      <div>${escapeHTML(c.footer)}</div>
      <div class="langs"><span>${escapeHTML(c.other_langs_label)}:</span> ${otherLangs}</div>
    </footer>
  </div>
</body>
</html>
`;
}

let count = 0;
const allUrls = [];
for (const lang of Object.keys(PAGES)) {
  for (const page of PAGES[lang]) {
    const html = renderPage(lang, page);
    fs.writeFileSync(path.join(OUT, `${page.slug}.html`), html, 'utf8');
    allUrls.push({ url: seoUrl(page.slug), lang, slug: page.slug });
    count++;
  }
}
console.log(`✓ ${count} SEO pages generated in ${OUT}`);

function renderSitemapUrl(url, altEntries, changefreq, priority) {
  const defaultEntry = getDefaultAlternate(altEntries);
  const altLinks = altEntries.length > 0
    ? altEntries.map(entry =>
      `        <xhtml:link rel="alternate" hreflang="${entry.lang}" href="${seoUrl(entry.page.slug)}"/>`
    ).join('\n') + `\n        <xhtml:link rel="alternate" hreflang="x-default" href="${seoUrl(defaultEntry.page.slug)}"/>`
    : '';

  return `    <url>
        <loc>${url}</loc>
${altLinks ? `${altLinks}\n` : ''}        <lastmod>${LASTMOD}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
}

function renderHomeSitemapUrl(lang, pathname) {
  const altLinks = Object.keys(HOME).map(L =>
    `        <xhtml:link rel="alternate" hreflang="${L}" href="${siteUrl(HOME[L])}"/>`
  ).join('\n') + `\n        <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl('/')}"/>`;
  const priority = lang === 'ko' ? '1.0' : '0.9';

  return `    <url>
        <loc>${siteUrl(pathname)}</loc>
${altLinks}
        <lastmod>${LASTMOD}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
    </url>`;
}

// sitemap 단편 출력 및 메인 sitemap.xml 갱신
const sitemapFrag = allUrls.map(u => {
  const page = PAGES[u.lang].find(p => p.slug === u.slug);
  const altEntries = getAlternateEntries(u.lang, page);
  return renderSitemapUrl(u.url, altEntries, 'monthly', '0.7');
}).join('\n');

fs.writeFileSync(path.join(OUT, '_sitemap_fragment.xml'), sitemapFrag, 'utf8');
console.log(`✓ sitemap fragment written to seo/_sitemap_fragment.xml`);

const homeSitemap = Object.entries(HOME)
  .map(([lang, pathname]) => renderHomeSitemapUrl(lang, pathname))
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeSitemap}
    <!-- SEO landing pages -->
${sitemapFrag}
<!-- traffic-pages:start -->
  <url>
    <loc>https://cupid.archerlab.dev/seo/visual-novel-beginner-guide</loc>
    <lastmod>2026-08-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cupid.archerlab.dev/seo/multiple-ending-romance-game</loc>
    <lastmod>2026-08-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://cupid.archerlab.dev/seo/cupid-gameplay-save-guide</loc>
    <lastmod>2026-08-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
<!-- traffic-pages:end -->
</urlset>
`;

fs.writeFileSync(path.join(OUT, '..', 'sitemap.xml'), sitemap, 'utf8');
console.log(`✓ sitemap.xml updated`);
