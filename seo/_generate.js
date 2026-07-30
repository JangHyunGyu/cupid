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
const GA_MEASUREMENT_ID = 'G-05YM7K3VX9';
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
  es: 'es_ES',
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
    why_title: '왜 무설치 웹 연애게임인가',
    why: [
      '설치·다운로드·가입 없이 링크만으로 시작',
      'PC·태블릿·모바일 어디서나 같은 저장본으로 이어 플레이',
      '저장공간 0MB — 끝나면 흔적 없이 닫기만',
      '광고·결제 압박 없이 전체 시나리오 무료 공개'
    ],
    how_title: '30초만에 시작하는 법',
    how: ['아래 [지금 플레이] 버튼 클릭', '원하는 캐릭터 선택', '선택지로 5일간 호감도 쌓고 엔딩 보기'],
    faq_title: '자주 묻는 질문',
    faqs: [
      ['정말 100% 무료인가요?', '네. 결제·구독·가입 없이 모든 캐릭터 루트와 엔딩을 끝까지 플레이할 수 있습니다.'],
      ['모바일에서도 잘 되나요?', '최신 Chrome·Safari·Edge 등 모든 모바일 브라우저에서 동작합니다. 세로 모드 전용이라 한 손으로 편하게 진행 가능합니다.'],
      ['진행 상황은 저장되나요?', '브라우저 로컬 스토리지에 자동 저장됩니다. 같은 기기·같은 브라우저라면 닫았다가 다시 열어도 이어서 플레이할 수 있습니다.'],
      ['어떤 장르인가요?', '메신저 형식의 5일짜리 로맨스 비주얼 노벨입니다. 선택에 따라 호감도와 엔딩이 분기됩니다.']
    ],
    picks_title: '추천 무설치 연애 게임',
    cupid_name: 'Cupid — AI 큐피드의 5일',
    cupid_desc: '메신저 UI 기반 멀티 엔딩 로맨스 VN. 5일간의 대화로 캐릭터마다 진짜 같은 관계를 만들어갑니다. 한국어 완역, 모바일 최적화.',
    nevergrad_name: 'Nevergrad (출시 예정)',
    nevergrad_label: '2026.04 출시',
    nevergrad_desc: '더 깊은 캐릭터, 더 긴 시나리오. 같은 archerlab 팀의 차기작.',
    cta: '지금 무료로 플레이 →',
    other_langs_label: '다른 언어',
    footer: '© archerlab — 무설치 브라우저 로맨스 게임'
  },
  en: {
    htmlLang: 'en',
    why_title: 'Why a browser dating sim?',
    why: [
      'No install, no download, no signup — just click and play',
      'Same save file across PC, tablet, and mobile browsers',
      'Zero storage footprint — close the tab and it leaves nothing behind',
      'Full story unlocked for free, no ads or paywalls mid-route'
    ],
    how_title: 'Start playing in 30 seconds',
    how: ['Click the [Play Now] button below', 'Pick the character you want to romance', 'Make choices over 5 in-game days and reach an ending'],
    faq_title: 'Frequently asked questions',
    faqs: [
      ['Is it really 100% free?', 'Yes. Every character route and ending is fully playable with no payment, no subscription, and no signup.'],
      ['Does it work on mobile?', 'Yes — it runs on any modern mobile browser (Chrome, Safari, Edge). The UI is portrait-first so you can play one-handed.'],
      ['Is my progress saved?', 'Yes. Progress is saved automatically to your browser. Reopen the same browser on the same device and you continue from where you left off.'],
      ['What genre is it?', 'A 5-day messenger-style romance visual novel. Your choices branch the story and unlock different endings.']
    ],
    picks_title: 'Recommended no-download dating sims',
    cupid_name: 'Cupid — Five Days with the AI Cupid',
    cupid_desc: 'A messenger-style romance VN with multiple endings. Build a real-feeling relationship across five days of chat. Mobile-optimized, fully translated.',
    nevergrad_name: 'Nevergrad (Coming Soon)',
    nevergrad_label: 'Launching Apr 2026',
    nevergrad_desc: 'Deeper characters, longer routes. The next title from the same archerlab team.',
    cta: 'Play Free Now →',
    other_langs_label: 'Other languages',
    footer: '© archerlab — browser-based romance games, no download'
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
    footer: '© archerlab — ダウンロード不要のブラウザ恋愛ゲーム'
  },
  es: {
    htmlLang: 'es',
    why_title: '¿Por qué un simulador de citas en el navegador?',
    why: [
      'Sin instalación, sin descarga, sin registro — solo haz clic y juega',
      'Misma partida guardada en PC, tableta y móvil',
      'Cero espacio en disco — cierra la pestaña y no queda nada',
      'Historia completa gratis, sin anuncios ni pagos a mitad de ruta'
    ],
    how_title: 'Empieza a jugar en 30 segundos',
    how: ['Haz clic en el botón [Jugar ahora] de abajo', 'Elige el personaje que quieres conquistar', 'Toma decisiones durante 5 días y desbloquea un final'],
    faq_title: 'Preguntas frecuentes',
    faqs: [
      ['¿Es realmente 100% gratis?', 'Sí. Todas las rutas de personajes y finales son completamente jugables sin pagos, sin suscripción y sin registro.'],
      ['¿Funciona en el móvil?', 'Sí, en cualquier navegador móvil moderno (Chrome, Safari, Edge). La interfaz está optimizada para vertical, ideal para jugar con una mano.'],
      ['¿Se guarda mi progreso?', 'Sí. El progreso se guarda automáticamente en tu navegador. En el mismo dispositivo y navegador puedes continuar donde lo dejaste.'],
      ['¿De qué género es?', 'Una novela visual romántica de 5 días en formato mensajería. Tus decisiones ramifican la historia y desbloquean distintos finales.']
    ],
    picks_title: 'Simuladores de citas sin descarga recomendados',
    cupid_name: 'Cupid — Cinco días con el Cupido IA',
    cupid_desc: 'Una VN romántica tipo mensajería con múltiples finales. Construye una relación realista a lo largo de cinco días de chat. Optimizada para móvil.',
    nevergrad_name: 'Nevergrad (próximamente)',
    nevergrad_label: 'Abril 2026',
    nevergrad_desc: 'Personajes más profundos, rutas más largas. El próximo título del equipo archerlab.',
    cta: 'Jugar gratis ahora →',
    other_langs_label: 'Otros idiomas',
    footer: '© archerlab — juegos románticos en el navegador, sin descarga'
  },
  fr: {
    htmlLang: 'fr',
    why_title: 'Pourquoi un jeu de drague en navigateur ?',
    why: [
      'Sans installation, sans téléchargement, sans inscription — un clic et c\'est parti',
      'Même sauvegarde sur PC, tablette et mobile',
      'Zéro espace disque — fermez l\'onglet, rien ne reste',
      'Histoire complète gratuite, sans pub ni paywall en cours de route'
    ],
    how_title: 'Commencez en 30 secondes',
    how: ['Cliquez sur le bouton [Jouer maintenant] ci-dessous', 'Choisissez le personnage que vous voulez séduire', 'Faites des choix sur 5 jours et atteignez une fin'],
    faq_title: 'Questions fréquentes',
    faqs: [
      ['Est-ce vraiment 100% gratuit ?', 'Oui. Toutes les routes de personnages et toutes les fins sont jouables intégralement, sans paiement, sans abonnement et sans inscription.'],
      ['Ça marche sur mobile ?', 'Oui, sur tout navigateur mobile récent (Chrome, Safari, Edge). L\'interface est pensée vertical pour jouer à une main.'],
      ['Ma progression est-elle sauvegardée ?', 'Oui. La progression est sauvegardée automatiquement dans votre navigateur. Sur le même appareil et navigateur, vous reprenez là où vous vous êtes arrêté.'],
      ['Quel est le genre ?', 'Un visual novel romantique de 5 jours au format messagerie. Vos choix font bifurquer l\'histoire et débloquent différentes fins.']
    ],
    picks_title: 'Jeux de drague sans téléchargement recommandés',
    cupid_name: 'Cupid — Cinq jours avec le Cupidon IA',
    cupid_desc: 'Un VN romantique au format messagerie avec plusieurs fins. Construisez une relation crédible sur cinq jours de chat. Optimisé mobile.',
    nevergrad_name: 'Nevergrad (à venir)',
    nevergrad_label: 'Avril 2026',
    nevergrad_desc: 'Personnages plus profonds, routes plus longues. Le prochain titre de l\'équipe archerlab.',
    cta: 'Jouer gratuitement →',
    other_langs_label: 'Autres langues',
    footer: '© archerlab — jeux romantiques en navigateur, sans téléchargement'
  },
  pt: {
    htmlLang: 'pt',
    why_title: 'Por que um simulador de romance no navegador?',
    why: [
      'Sem instalar, sem baixar, sem cadastro — só clicar e jogar',
      'Mesmo save em PC, tablet e celular',
      'Zero espaço em disco — feche a aba e não fica nada',
      'História completa grátis, sem anúncios nem paywalls no meio da rota'
    ],
    how_title: 'Comece a jogar em 30 segundos',
    how: ['Clique no botão [Jogar agora] abaixo', 'Escolha o personagem que quer conquistar', 'Faça escolhas ao longo de 5 dias e alcance um final'],
    faq_title: 'Perguntas frequentes',
    faqs: [
      ['É 100% grátis mesmo?', 'Sim. Todas as rotas de personagens e finais são totalmente jogáveis sem pagamento, sem assinatura e sem cadastro.'],
      ['Funciona no celular?', 'Sim, em qualquer navegador móvel moderno (Chrome, Safari, Edge). A interface é pensada na vertical, dá pra jogar com uma mão.'],
      ['Meu progresso é salvo?', 'Sim. O progresso é salvo automaticamente no seu navegador. No mesmo aparelho e navegador, você continua de onde parou.'],
      ['Qual é o gênero?', 'Uma visual novel romântica de 5 dias em formato de mensageiro. Suas escolhas ramificam a história e desbloqueiam finais diferentes.']
    ],
    picks_title: 'Simuladores de romance sem download recomendados',
    cupid_name: 'Cupid — Cinco dias com o Cupido IA',
    cupid_desc: 'Uma VN romântica em formato de mensageiro com múltiplos finais. Construa uma relação crível ao longo de cinco dias de chat. Otimizada para celular.',
    nevergrad_name: 'Nevergrad (em breve)',
    nevergrad_label: 'Abril 2026',
    nevergrad_desc: 'Personagens mais profundos, rotas mais longas. O próximo título da equipe archerlab.',
    cta: 'Jogar grátis agora →',
    other_langs_label: 'Outros idiomas',
    footer: '© archerlab — jogos românticos no navegador, sem download'
  },
  de: {
    htmlLang: 'de',
    why_title: 'Warum ein Browser-Dating-Sim?',
    why: [
      'Keine Installation, kein Download, keine Anmeldung — einfach anklicken und spielen',
      'Gleicher Spielstand auf PC, Tablet und Handy',
      'Null Speicherplatz — Tab schließen und nichts bleibt zurück',
      'Komplette Story kostenlos, keine Werbung oder Paywalls mittendrin'
    ],
    how_title: 'In 30 Sekunden loslegen',
    how: ['Unten auf [Jetzt spielen] klicken', 'Charakter auswählen, den du erobern willst', '5 Tage lang Entscheidungen treffen und ein Ending erreichen'],
    faq_title: 'Häufige Fragen',
    faqs: [
      ['Ist es wirklich 100% kostenlos?', 'Ja. Alle Charakterrouten und Endings sind komplett spielbar — ohne Bezahlung, ohne Abo, ohne Registrierung.'],
      ['Läuft es auf dem Handy?', 'Ja, in jedem modernen mobilen Browser (Chrome, Safari, Edge). Die Oberfläche ist hochkant gestaltet — bequem einhändig spielbar.'],
      ['Wird mein Fortschritt gespeichert?', 'Ja. Der Fortschritt wird automatisch im Browser gespeichert. Auf demselben Gerät und Browser kannst du jederzeit weiterspielen.'],
      ['Welches Genre ist das?', 'Eine 5-Tage-Romance-Visual-Novel im Messenger-Format. Deine Entscheidungen verzweigen die Story und schalten verschiedene Endings frei.']
    ],
    picks_title: 'Empfohlene Dating-Sims ohne Download',
    cupid_name: 'Cupid — Fünf Tage mit dem KI-Cupid',
    cupid_desc: 'Eine Messenger-Romance-VN mit mehreren Endings. Baue über fünf Chat-Tage eine echte Beziehung auf. Mobil optimiert, vollständig übersetzt.',
    nevergrad_name: 'Nevergrad (demnächst)',
    nevergrad_label: 'April 2026',
    nevergrad_desc: 'Tiefere Charaktere, längere Routen. Der nächste Titel des archerlab-Teams.',
    cta: 'Jetzt kostenlos spielen →',
    other_langs_label: 'Andere Sprachen',
    footer: '© archerlab — Browser-Romance-Games ohne Download'
  }
};

// 페이지 정의: { slug, h1, title, meta, intro }
const PAGES = {
  ko: [
    {
      slug: 'muryo-misinsi-game',
      group: 'free-browser-romance',
      h1: '무료 미연시 게임 — 웹에서 바로 플레이하는 Cupid',
      title: '무료 미연시 게임 | 웹 미연시 Cupid 바로 플레이',
      meta: '무료 미연시 게임을 다운로드 없이 브라우저에서 바로 플레이하세요. 학원 로맨스 비주얼노벨 Cupid는 한국어 지원, 멀티 엔딩, PC·모바일 웹플레이를 제공합니다.',
      intro: '"무료 미연시"나 "무료 미연시 게임"을 찾는다면 설치 파일을 받을 필요가 없습니다. Cupid는 브라우저에서 바로 시작하는 웹 미연시로, 5일간의 학원 로맨스와 선택지 기반 멀티 엔딩을 무료로 즐길 수 있습니다.'
    },
    {
      slug: 'web-misinsi',
      h1: '웹 미연시 — 설치 없이 바로 즐기는 Cupid',
      title: '웹 미연시 무료 플레이 | 브라우저 미연시 Cupid',
      meta: '웹 미연시를 찾는다면 Cupid를 브라우저에서 바로 플레이하세요. 설치·다운로드 없이 한국어 학원 로맨스, 선택지, 멀티 엔딩을 무료로 즐길 수 있습니다.',
      intro: '"웹 미연시"는 앱 설치보다 빠르게 시작할 수 있어야 합니다. Cupid는 링크를 열면 바로 시작되는 브라우저 미연시로, 전학 첫날부터 5일간 이어지는 학원 로맨스와 선택지 분기를 제공합니다.'
    },
    {
      slug: 'muryo-misinsi',
      h1: '무료 미연시 — 다운로드 없이 브라우저에서',
      title: '무료 미연시 | 다운로드 없는 웹 미연시 Cupid',
      meta: '무료 미연시 Cupid를 다운로드 없이 웹에서 플레이하세요. 한국어 지원, 모바일 대응, 5일 학원 로맨스와 멀티 엔딩을 브라우저에서 바로 즐길 수 있습니다.',
      intro: '"무료 미연시"를 찾을 때 가장 번거로운 것은 설치 파일과 회원가입입니다. Cupid는 그런 단계를 없애고, 브라우저에서 바로 열리는 무료 미연시 경험에 집중했습니다.'
    },
    {
      slug: 'misinsi-muryo',
      h1: '미연시 무료 플레이 — Cupid',
      title: '미연시 무료 플레이 | 무설치 웹 미연시',
      meta: '미연시 무료 플레이를 원한다면 무설치 웹 미연시 Cupid를 시작하세요. 결제 없이 캐릭터 루트와 엔딩을 브라우저에서 진행할 수 있습니다.',
      intro: '"미연시 무료" 검색 결과가 가벼운 광고성 게임뿐이라면 Cupid를 확인해보세요. 메신저형 UI, 호감도 선택지, 엔딩 분기가 있는 학원 로맨스 VN을 무료로 플레이할 수 있습니다.'
    },
    {
      slug: 'muryo-yeonae-sim',
      h1: '무료 연애 시뮬레이션 게임 — 무설치 웹에서 바로',
      title: '무료 연애 시뮬레이션 게임 BEST | 무설치 브라우저 플레이 2026',
      meta: '결제·다운로드 없이 바로 즐기는 무료 연애 시뮬레이션 게임 추천. 한국어 완역 멀티 엔딩 로맨스 VN을 모바일·PC에서 무설치로 플레이.',
      intro: '"무료 연애 시뮬레이션 게임"을 찾고 있다면, 이젠 굳이 스팀이나 앱스토어를 거칠 필요가 없습니다. 브라우저만 있으면 5일짜리 멀티 엔딩 로맨스 VN을 결제 한 번 없이 끝까지 플레이할 수 있습니다.'
    },
    {
      slug: 'browser-misinsi',
      h1: '브라우저 미연시 — 설치 없이 PC·모바일에서 바로',
      title: '브라우저 미연시 추천 | 무설치 한글 미연시 모음 2026',
      meta: '브라우저에서 바로 돌아가는 한글 미연시 추천 모음. 다운로드/설치 없이 PC와 모바일에서 동일하게 진행되는 무료 멀티 엔딩 로맨스 VN.',
      intro: '"브라우저 미연시"는 더 이상 영어 게임만의 영역이 아닙니다. 한국어 완역, 모바일 세로 모드 최적화, 멀티 엔딩까지 — 설치 없이 링크만으로 시작하는 한글 미연시를 소개합니다.'
    },
    {
      slug: 'mu-seolchi-yeonae-game',
      h1: '무설치 연애게임 — 링크 한 번이면 끝',
      title: '무설치 연애게임 추천 | 다운로드 없이 즐기는 한글 로맨스 VN',
      meta: '무설치로 즐기는 한국어 연애게임 추천. 다운로드·가입·결제 없이 브라우저에서 바로 시작하는 5일 로맨스 비주얼 노벨.',
      intro: '"무설치 연애게임"은 보통 광고만 잔뜩 띄우는 가벼운 미니게임이 대부분입니다. 하지만 풀 시나리오 멀티 엔딩 로맨스 VN을 정말 무설치로 끝까지 플레이할 수 있는 곳도 있습니다.'
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
      h1: 'Cupid Visual Novel — Free Romance VN in Browser',
      title: 'Cupid Visual Novel | Free Browser Romance VN',
      meta: 'Cupid is a free browser visual novel with romance routes, multiple endings, and no download. Play the full messenger-style VN on desktop or mobile.',
      intro: 'Cupid is a browser-based visual novel built around short messenger scenes, character choices, and multiple endings. No installer, no app store, no payment wall.'
    },
    {
      slug: 'browser-otome-game',
      h1: 'Browser Otome Game — Play Free, No Install',
      title: 'Browser Otome Game (Free, No Install) | Play Online 2026',
      meta: 'A free browser otome game with multiple endings. No download, no signup. Plays on PC and mobile in the same save.',
      intro: '"Browser otome game" used to mean clunky Flash games long since dead. Today you can play a fully voiced-style messenger romance VN with multiple endings in any modern browser — no install required.'
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
      intro: '¿Buscas un "simulador de citas gratis sin descargar"? No necesitas Steam, ni app store, ni tarjeta. Una novela visual romántica completa con múltiples finales corre directamente en tu navegador, en escritorio o móvil.'
    },
    {
      slug: 'otome-navegador',
      h1: 'Otome game en el navegador — Gratis y en español',
      title: 'Otome game español gratis en el navegador | Sin instalar',
      meta: 'Otome game gratis en español jugable en el navegador. Sin instalación, sin registro, con múltiples finales.',
      intro: 'Los "otome game en español" suelen ser difíciles de encontrar y muchos solo existen en inglés o japonés. Aquí tienes uno totalmente traducido al español, jugable en el navegador sin instalar nada.'
    },
    {
      slug: 'juego-citas-online',
      h1: 'Juego de citas online — Gratis y en el navegador',
      title: 'Juego de citas online gratis | Jugar en el navegador 2026',
      meta: 'Juego de citas online gratis para jugar en el navegador. Sin descarga, sin registro, historia completa desbloqueada.',
      intro: 'La mayoría de resultados para "juego de citas online" llevan a páginas con descargas sospechosas. Este no: una VN romántica de 5 días que corre en tu navegador, gratis, con toda la historia desbloqueada desde el primer clic.'
    }
  ],
  fr: [
    {
      slug: 'simulation-amour-gratuit',
      group: 'free-browser-romance',
      h1: 'Simulation amoureuse gratuite — Sans téléchargement',
      title: 'Simulation amoureuse gratuite sans téléchargement | Jouer en ligne 2026',
      meta: 'Jouez à une simulation amoureuse gratuite sans téléchargement, sans inscription, sans paiement. Visual novel romantique multi-fins en navigateur.',
      intro: 'Vous cherchez une "simulation amoureuse gratuite sans téléchargement" ? Pas besoin de Steam, d\'app store ni de carte bancaire. Un visual novel romantique de 5 jours avec plusieurs fins tourne directement dans votre navigateur.'
    },
    {
      slug: 'otome-navigateur',
      h1: 'Otome game en navigateur — Gratuit et en français',
      title: 'Otome game français gratuit en navigateur | Sans installation',
      meta: 'Otome game gratuit en français jouable en navigateur. Sans installation, sans inscription, plusieurs fins.',
      intro: 'Les "otome game en français" sont rares — la plupart n\'existent qu\'en anglais ou japonais. En voici un entièrement traduit, jouable en navigateur sans rien installer.'
    },
    {
      slug: 'jeu-drague-en-ligne',
      h1: 'Jeu de drague en ligne — Gratuit, sans téléchargement',
      title: 'Jeu de drague en ligne gratuit | Jouer en navigateur 2026',
      meta: 'Jeu de drague en ligne gratuit jouable en navigateur. Sans téléchargement, sans inscription, histoire complète débloquée.',
      intro: 'La plupart des résultats pour "jeu de drague en ligne" mènent à des sites de téléchargement louches. Pas celui-ci : un VN romantique de 5 jours qui tourne dans votre navigateur, gratuitement, histoire complète dès le premier clic.'
    }
  ],
  de: [
    {
      slug: 'dating-sim-kostenlos',
      group: 'free-browser-romance',
      h1: 'Dating Sim kostenlos — Ohne Download im Browser',
      title: 'Dating Sim kostenlos ohne Download | Im Browser spielen 2026',
      meta: 'Spiele einen kostenlosen Dating Sim ohne Download, ohne Anmeldung und ohne Bezahlung. Romance-Visual-Novel mit mehreren Endings im Browser.',
      intro: 'Du suchst einen "Dating Sim kostenlos ohne Download"? Du brauchst weder Steam noch App Store noch Kreditkarte. Eine komplette 5-Tage-Romance-VN mit mehreren Endings läuft direkt in deinem Browser — am PC oder Handy.'
    },
    {
      slug: 'browser-otome',
      h1: 'Browser Otome Game — Kostenlos, ohne Installation',
      title: 'Browser Otome Game kostenlos | Ohne Installation 2026',
      meta: 'Kostenloses Browser-Otome-Game mit mehreren Endings. Kein Download, keine Anmeldung. Läuft am PC und Handy mit demselben Spielstand.',
      intro: '"Browser Otome Game" bedeutete früher abgestürzte Flash-Spiele. Heute kannst du eine vollwertige Messenger-Romance-VN mit mehreren Endings in jedem modernen Browser spielen — ganz ohne Installation.'
    },
    {
      slug: 'dating-spiel-online',
      h1: 'Dating Spiel online — Gratis im Browser',
      title: 'Dating Spiel online gratis | Im Browser spielen ohne Download',
      meta: 'Dating-Spiel online gratis im Browser spielen. Kein Download, keine Anmeldung, komplette Story freigeschaltet.',
      intro: 'Die meisten Treffer für "Dating Spiel online" führen zu dubiosen Download-Seiten. Dieses nicht: eine 5-Tage-Romance-VN, die in deinem Browser läuft, gratis, mit kompletter Story ab dem ersten Klick.'
    }
  ],
  pt: [
    {
      slug: 'otome-navegador-gratis',
      group: 'free-browser-romance',
      h1: 'Otome game no navegador — Grátis e em português',
      title: 'Otome game português grátis no navegador | Sem instalar 2026',
      meta: 'Otome game grátis em português jogável no navegador. Sem instalação, sem cadastro, com múltiplos finais.',
      intro: 'Encontrar um "otome game em português" costuma ser difícil — a maioria só existe em inglês ou japonês. Aqui tem um totalmente traduzido, jogável no navegador sem instalar nada.'
    },
    {
      slug: 'jogo-namoro-online-gratis',
      h1: 'Jogo de namoro online grátis — No navegador, sem download',
      title: 'Jogo de namoro online grátis sem download | Jogar no navegador 2026',
      meta: 'Jogo de namoro online grátis para jogar no navegador. Sem download, sem cadastro, história completa desbloqueada.',
      intro: 'A maioria dos resultados de "jogo de namoro online" leva a sites de download suspeitos. Este não: uma VN romântica de 5 dias que roda no seu navegador, grátis, com toda a história desbloqueada do primeiro clique.'
    },
    {
      slug: 'visual-novel-romance-gratis',
      h1: 'Visual novel romance grátis — No navegador, sem baixar',
      title: 'Visual novel romance grátis sem baixar | Jogar no navegador 2026',
      meta: 'Visual novel romântica grátis para jogar no navegador, sem baixar nem instalar. Múltiplos finais, otimizada para celular.',
      intro: 'Você procura uma "visual novel romance grátis"? Não precisa de Steam, nem app store, nem cartão. Uma VN romântica completa de 5 dias com múltiplos finais roda direto no seu navegador — PC ou celular.'
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
  const socialImageAlt = lang === 'ja'
    ? 'ブラウザ恋愛ビジュアルノベル「Cupid」のタイトル画面'
    : 'Cupid browser romance visual novel title screen';
  const relatedNavLabel = lang === 'ja'
    ? 'Cupidの関連ページ'
    : 'Related Cupid search pages';
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
        "description": GAME_DESCRIPTION,
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
          "name": "Archerlab",
          "url": "https://archerlab.dev/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": c.faqs.map(([q, a]) => ({
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
  <meta charset="UTF-8">
  <script src="/assets/js/error-reporter.js?v=20260727-offline-analytics-filter"></script>
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

    ${relatedLinks ? `<nav class="related" aria-label="${relatedNavLabel}">${relatedLinks}</nav>` : ''}

    <div class="cta-box">
      <a class="cta" href="${homeUrl}" data-seo-cta="top" onclick="window.sendGAEvent('seo_cta_click',{seo_slug:'${page.slug}',cta_placement:'top',link_url:'${siteUrl(homeUrl)}',transport_type:'beacon'})">${escapeHTML(c.cta)}</a>
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
      <a class="cta" href="${homeUrl}" data-seo-cta="bottom" onclick="window.sendGAEvent('seo_cta_click',{seo_slug:'${page.slug}',cta_placement:'bottom',link_url:'${siteUrl(homeUrl)}',transport_type:'beacon'})">${escapeHTML(c.cta)}</a>
    </div>

    <h2>${escapeHTML(c.faq_title)}</h2>
    ${c.faqs.map(([q, a]) => `<details class="faq"><summary>${escapeHTML(q)}</summary><p>${escapeHTML(a)}</p></details>`).join('\n    ')}

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
</urlset>
`;

fs.writeFileSync(path.join(OUT, '..', 'sitemap.xml'), sitemap, 'utf8');
console.log(`✓ sitemap.xml updated`);
