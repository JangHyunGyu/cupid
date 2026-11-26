(function(root){
 'use strict';
 const base='https://avatar.archerlab.dev';
 const copy={
  ko:{
   balance:'잔액',
   title:'잔액 안내',
   loading:'잔액 확인 중…',
   unavailable:'잔액을 확인하지 못했어요. 잠시 후 다시 시도해 주세요.',
   insufficient:'대화에 필요한 잔액이 부족해요',
   pill:'잔액 {amount}원 · 답변 1회 10원',
   pillTooltip:'갤러리 프리토킹에서 AI 답변 1회를 받으면 하렘과 공유하는 잔액에서 10원이 차감돼요. 첫인사와 자동요약은 무료예요.',
   turns:'일반·갤러리 대화 {n}회 가능',
   cost:'갤러리 프리토킹 · 하렘 일반·단체 대화: AI 답변 1회당 10원 (첫인사·자동요약 무료)',
   chargePolicy:'답변이 도착하기 전에 요청이 취소되거나 실패하면 차감하지 않아요. 답변의 일부라도 도착한 뒤에는 환불되지 않아요.',
   roomFree:'하렘 공개방(큐피드방·사각지대 합산): 하루 {roomFreeLimit}마디 무료(오늘 {roomFree}회 남음), 이후 마디당 10원 · 이동·재접속 {move}',
   roomAffinityNote:'큐피드 본편·갤러리 호감도와 유저 간 하트·표시, 질투 같은 시스템 변화는 잔액에 영향을 주지 않아요.',
   need:'대화를 보내거나 답변을 받으려면 10원이 필요해요. 하렘 공개방(큐피드방·사각지대 합산)은 하루 {roomFreeLimit}마디까지 잔액 없이 무료예요.',
   conversion:'공개방 보상: 캐릭터 호감·서열·집착 +1마다 +10원 (점수가 내려도 차감 없음)',
   daily:'오늘 공개방 보상 {earned} / {limit}원',
   remaining:'오늘 {remaining}원 더 받을 수 있어요.',
   limit:'오늘 공개방 보상 한도 {limit}원을 모두 채웠어요.',
   reset:'한도 초기화: {time} (한국시간)',
   attendance:'출석체크',
   attended:'오늘 출석 완료',
   attendanceAccountBlocked:'이 계정은 오늘 출석 보상을 이미 받았어요. 한국시간으로 내일 0시부터 다시 받을 수 있어요.',
   attendanceBrowserBlocked:'이 브라우저에서는 오늘 출석 보상을 이미 받았어요. 한국시간으로 내일 0시부터 다시 받을 수 있어요.',
   attendanceAlreadyBlocked:'오늘 출석 보상을 이미 받았어요. 한국시간으로 내일 0시부터 다시 받을 수 있어요.',
   attendanceDeviceError:'브라우저를 확인하지 못해 출석 보상을 받을 수 없어요. 쿠키를 허용한 뒤 페이지를 새로고침하고 다시 시도해 주세요.',
   attendanceAuthError:'접속 정보를 확인하지 못했어요. 페이지를 새로고침한 뒤 시도해 주세요.',
   attendanceNetworkError:'서버 응답을 받지 못해 출석 결과를 확인하지 못했어요. 인터넷 연결을 확인한 뒤 다시 시도해 주세요.',
   attendanceServerError:'출석 정보를 확인하지 못했어요. 잠시 후 다시 시도해 주세요.',
   attendanceInfo:'일일 출석 보상 {amount} (비로그인 100원 · 로그인 200원)',
   attendanceConfirm:'오늘 출석 보상 {amount}을 받을까요?',
   attendanceDone:'출석 보상 {amount}을 받았어요.',
   loginBenefit:'첫 로그인하면 +700원 보너스 (비로그인 잔액·관계 점수 1회 합산, 일일 보상 한도 1,000원·출석 200원)',
   login:'로그인하기',
   room:'큐피드방으로 가기',
   confirm:'확인',
   close:'닫기',
   retry:'다시 확인'
  },
  en:{
   balance:'Balance',
   title:'Gallery chat balance',
   loading:'Checking balance…',
   unavailable:'Unable to check your balance. Please try again shortly.',
   insufficient:'Not enough balance for this reply',
   pill:'Balance ₩{amount} · ₩10/reply',
   pillTooltip:'Each AI reply in Gallery FreeTalk costs ₩10 from your shared Harem balance. Greetings and automatic summaries are free.',
   turns:'{n} standard or gallery replies available',
   cost:'Gallery FreeTalk & Harem solo/group chats: ₩10 per AI reply (greetings & summaries free)',
   chargePolicy:'Cancelled or failed requests are free until a reply begins arriving. Once any part of the reply arrives, the charge is not refunded.',
   roomFree:'Harem public rooms (Cupid Room + Blind Spot combined): {roomFreeLimit} free chats/day ({roomFree} left today), then ₩10/chat · Move/reconnect {move}',
   roomAffinityNote:'Cupid main story or gallery affinity, peer hearts/markers, and system changes like jealousy do not affect your balance.',
   need:'₩10 is required to receive an AI reply. Harem public rooms (Cupid Room and Blind Spot combined) include {roomFreeLimit} free chats per day even at ₩0.',
   conversion:'Public room rewards: +₩10 per +1 character affinity/standing/obsession (drops never deduct)',
   daily:'Public room rewards today: ₩{earned} / ₩{limit}',
   remaining:'₩{remaining} left to earn today.',
   limit:'Reached today’s ₩{limit} public room reward limit.',
   reset:'Resets at {time} (Korea time)',
   attendance:'Daily check-in',
   attended:'Checked in today',
   attendanceAccountBlocked:'This account has already received today’s check-in reward. You can claim again after midnight tomorrow, Korea time.',
   attendanceBrowserBlocked:'This browser has already received today’s check-in reward. You can claim again after midnight tomorrow, Korea time.',
   attendanceAlreadyBlocked:'You have already received today’s check-in reward. You can claim again after midnight tomorrow, Korea time.',
   attendanceDeviceError:'We could not verify this browser. Allow cookies, reload the page and try again.',
   attendanceAuthError:'We could not verify your session. Reload the page and try again.',
   attendanceNetworkError:'We did not receive a server response, so we could not confirm your check-in result. Check your internet connection and try again.',
   attendanceServerError:'We could not check your attendance. Please try again shortly.',
   attendanceInfo:'Daily check-in: {amount} (₩100 signed out · ₩200 signed in)',
   attendanceConfirm:'Claim today’s {amount} check-in reward?',
   attendanceDone:'Received {amount} check-in reward.',
   loginBenefit:'First sign-in grants +₩700 bonus (merges guest balance & scores once; ₩1,000 daily reward cap · ₩200 check-in)',
   login:'Sign in',
   room:'Go to Cupid room',
   confirm:'Confirm',
   close:'Close',
   retry:'Check again'
  },
  ja:{
   balance:'残高',
   title:'ギャラリーチャットの残高',
   loading:'残高を確認中…',
   unavailable:'残高を確認できませんでした。少し待ってから再試行してください。',
   insufficient:'会話に必要な残高が足りません',
   pill:'残高 {amount}ウォン · 返信10ウォン',
   pillTooltip:'ギャラリーフリートークのAI返答は、ハーレムと共通の残高から1回10ウォン引かれます。最初の挨拶と自動要約は無料です。',
   turns:'通常・ギャラリー会話 あと{n}回',
   cost:'ギャラリーフリートーク・ハーレム会話：AI返答1回につき10ウォン（初回挨拶・要約は無料）',
   chargePolicy:'返信が届く前にキャンセルまたは失敗した場合は無料です。一部でも返信が届いた後は返金されません。',
   roomFree:'ハーレム公開ルーム（キューピッドの部屋・死角の合算）：1日{roomFreeLimit}回まで無料（本日残り{roomFree}回）、以降は1回10ウォン · 移動・再接続 {move}',
   roomAffinityNote:'キューピッド本編・ギャラリーの好感度、ユーザー間のハート・表示、嫉妬などのシステム変化は残高に影響しません。',
   need:'返答を受け取るには10ウォン必要です。ハーレム公開ルーム（キューピッドの部屋と死角の合算）は1日{roomFreeLimit}回まで残高なしで無料です。',
   conversion:'公開ルーム報酬：キャラの好感・序列・執着+1ごとに+10ウォン（減点時も減額なし）',
   daily:'今日の公開ルーム報酬 {earned} / {limit}ウォン',
   remaining:'今日はあと{remaining}ウォン受け取れます。',
   limit:'今日の公開ルーム報酬上限（{limit}ウォン）に達しました。',
   reset:'上限リセット：{time}（韓国時間）',
   attendance:'出席チェック',
   attended:'本日の出席完了',
   attendanceAccountBlocked:'このアカウントは本日の出席報酬を受け取り済みです。韓国時間の翌日0時から再び受け取れます。',
   attendanceBrowserBlocked:'このブラウザーでは本日の出席報酬を受け取り済みです。韓国時間の翌日0時から再び受け取れます。',
   attendanceAlreadyBlocked:'本日の出席報酬は受け取り済みです。韓国時間の翌日0時から再び受け取れます。',
   attendanceDeviceError:'ブラウザーを確認できませんでした。Cookieを許可してページを再読み込みし、もう一度お試しください。',
   attendanceAuthError:'接続情報を確認できませんでした。ページを再読み込みしてからお試しください。',
   attendanceNetworkError:'サーバーから応答がなく、出席結果を確認できませんでした。インターネット接続を確認してからお試しください。',
   attendanceServerError:'出席情報を確認できませんでした。少し待ってからもう一度お試しください。',
   attendanceInfo:'出席報酬 {amount}（未ログイン100ウォン · ログイン200ウォン）',
   attendanceConfirm:'本日の出席報酬{amount}を受け取りますか？',
   attendanceDone:'出席報酬{amount}を受け取りました。',
   loginBenefit:'初回ログインで+700ウォン進呈（未ログイン残高・関係スコアを1回統合、1日の報酬上限1,000ウォン・出席200ウォン）',
   login:'ログイン',
   room:'キューピッドの部屋へ',
   confirm:'確認',
   close:'閉じる',
   retry:'再確認'
  },
  es:{
   balance:'Saldo',
   title:'Saldo del chat de galería',
   loading:'Consultando saldo…',
   unavailable:'No se pudo consultar el saldo. Inténtalo de nuevo en un momento.',
   insufficient:'Saldo insuficiente para esta respuesta',
   pill:'Saldo ₩{amount} · ₩10/respuesta',
   pillTooltip:'Cada respuesta de la IA en el chat libre de galería cuesta ₩10 del mismo saldo que usas en Harem. Saludos y resúmenes son gratis.',
   turns:'{n} respuestas normales o de galería disponibles',
   cost:'Chat de galería y Harem (1:1 y grupal): ₩10 por respuesta de IA (saludos y resúmenes gratis)',
   chargePolicy:'Si la solicitud falla o se cancela antes de empezar a recibir la respuesta, no se cobra. Después de recibir cualquier parte, no hay reembolso.',
   roomFree:'Salas públicas de Harem (Sala de Cupid + Punto Ciego, combinadas): {roomFreeLimit} mensajes gratis/día (quedan {roomFree} hoy), luego ₩10 · Mover/reconectar {move}',
   roomAffinityNote:'La afinidad del modo principal o galería de Cupid, los corazones o marcas entre jugadores y cambios del sistema como celos no afectan tu saldo.',
   need:'Se requieren ₩10 para recibir una respuesta. Las salas públicas de Harem (sala de Cupid y Punto Ciego, combinadas) incluyen {roomFreeLimit} mensajes gratis al día incluso con ₩0.',
   conversion:'Salas públicas: +₩10 por cada +1 de afinidad/jerarquía/obsesión del personaje (las bajadas nunca descuentan)',
   daily:'Recompensas en salas públicas hoy: ₩{earned} / ₩{limit}',
   remaining:'Puedes ganar ₩{remaining} más hoy.',
   limit:'Alcanzaste el límite diario de ₩{limit} en salas públicas.',
   reset:'Reinicio diario: {time} (hora de Corea)',
   attendance:'Asistencia diaria',
   attended:'Asistencia registrada hoy',
   attendanceAccountBlocked:'Esta cuenta ya recibió la recompensa por asistencia de hoy. Podrás recibirla de nuevo mañana a partir de medianoche, hora de Corea.',
   attendanceBrowserBlocked:'Este navegador ya recibió la recompensa por asistencia de hoy. Podrás recibirla de nuevo mañana a partir de medianoche, hora de Corea.',
   attendanceAlreadyBlocked:'Ya recibiste la recompensa por asistencia de hoy. Podrás recibirla de nuevo mañana a partir de medianoche, hora de Corea.',
   attendanceDeviceError:'No pudimos verificar este navegador. Permite las cookies, recarga la página e inténtalo de nuevo.',
   attendanceAuthError:'No pudimos verificar tu sesión. Recarga la página e inténtalo de nuevo.',
   attendanceNetworkError:'No recibimos una respuesta del servidor y no pudimos confirmar tu asistencia. Comprueba tu conexión a internet e inténtalo de nuevo.',
   attendanceServerError:'No pudimos comprobar tu asistencia. Vuelve a intentarlo en unos instantes.',
   attendanceInfo:'Asistencia diaria: {amount} (sin sesión ₩100 · con sesión ₩200)',
   attendanceConfirm:'¿Recibir la recompensa diaria de {amount}?',
   attendanceDone:'Has recibido la recompensa diaria de {amount}.',
   loginBenefit:'El primer inicio de sesión otorga +₩700 de bono (transfiere saldo y puntuaciones de invitado una vez; límite diario de ₩1,000 · asistencia ₩200)',
   login:'Iniciar sesión',
   room:'Ir a la sala de Cupid',
   confirm:'Confirmar',
   close:'Cerrar',
   retry:'Volver a consultar'
  },
  fr:{
   balance:'Solde',
   title:'Solde du chat de galerie',
   loading:'Vérification du solde…',
   unavailable:'Impossible de consulter le solde. Réessayez dans un instant.',
   insufficient:'Solde insuffisant pour cette réponse',
   pill:'Solde ₩{amount} · ₩10/réponse',
   pillTooltip:'Chaque réponse de l’IA dans le chat de galerie coûte ₩10 sur votre solde partagé avec Harem. Salutations et résumés gratuits.',
   turns:'{n} réponses standard ou de galerie disponibles',
   cost:'Chat de galerie et Harem (solo/groupe) : ₩10 par réponse IA (salutations et résumés gratuits)',
   chargePolicy:'Une demande annulée ou échouée avant le début de la réponse est gratuite. Dès qu’une partie arrive, le montant n’est plus remboursable.',
   roomFree:'Salons publics Harem (Salon Cupid + Angle Mort, cumulés) : {roomFreeLimit} messages gratuits/jour ({roomFree} restants), puis ₩10 · Déplacement/reconnexion {move}',
   roomAffinityNote:'L’affinité du jeu principal ou de la galerie Cupid, les cœurs ou marques entre joueurs et les effets système comme la jalousie n’affectent pas votre solde.',
   need:'₩10 requis pour recevoir une réponse. Les salons publics Harem (salon Cupid et Angle Mort, cumulés) incluent {roomFreeLimit} messages gratuits par jour même à ₩0.',
   conversion:'Salons publics : +₩10 par +1 d’affinité/rang/obsession du personnage (les baisses ne déduisent jamais)',
   daily:'Récompenses en salons publics aujourd’hui : ₩{earned} / ₩{limit}',
   remaining:'Encore ₩{remaining} à gagner aujourd’hui.',
   limit:'Plafond quotidien de ₩{limit} atteint en salons publics.',
   reset:'Réinitialisation : {time} (heure de Corée)',
   attendance:'Présence quotidienne',
   attended:'Présence enregistrée aujourd’hui',
   attendanceAccountBlocked:'Ce compte a déjà reçu la récompense de présence du jour. Vous pourrez la recevoir à nouveau demain après minuit, heure de Corée.',
   attendanceBrowserBlocked:'Ce navigateur a déjà reçu la récompense de présence du jour. Vous pourrez la recevoir à nouveau demain après minuit, heure de Corée.',
   attendanceAlreadyBlocked:'Vous avez déjà reçu la récompense de présence du jour. Vous pourrez la recevoir à nouveau demain après minuit, heure de Corée.',
   attendanceDeviceError:'Nous n’avons pas pu vérifier ce navigateur. Autorisez les cookies, rechargez la page et réessayez.',
   attendanceAuthError:'Nous n’avons pas pu vérifier votre session. Rechargez la page et réessayez.',
   attendanceNetworkError:'Le serveur n’a pas répondu ; nous n’avons donc pas pu confirmer votre présence. Vérifiez votre connexion internet et réessayez.',
   attendanceServerError:'Nous n’avons pas pu vérifier votre présence. Veuillez réessayer dans un instant.',
   attendanceInfo:'Présence quotidienne : {amount} (hors connexion ₩100 · connecté ₩200)',
   attendanceConfirm:'Recevoir la récompense de présence de {amount} ?',
   attendanceDone:'Récompense de présence de {amount} reçue.',
   loginBenefit:'Première connexion : bonus de +₩700 (fusionne solde et scores invité une fois ; plafond quotidien ₩1,000 · présence ₩200)',
   login:'Se connecter',
   room:'Aller au salon Cupid',
   confirm:'Confirmer',
   close:'Fermer',
   retry:'Vérifier à nouveau'
  },
  de:{
   balance:'Guthaben',
   title:'Guthaben für den Galeriechat',
   loading:'Guthaben wird geprüft…',
   unavailable:'Das Guthaben konnte nicht abgerufen werden. Bitte versuche es gleich erneut.',
   insufficient:'Nicht genug Guthaben für diese Antwort',
   pill:'Guthaben ₩{amount} · ₩10/Antwort',
   pillTooltip:'Jede KI-Antwort im Galeriechat kostet ₩10 aus deinem gemeinsamen Harem-Guthaben. Begrüßungen und Zusammenfassungen sind kostenlos.',
   turns:'{n} normale oder Galerie-Antworten verfügbar',
   cost:'Galeriechat & Harem (Einzel-/Gruppenchats): ₩10 pro KI-Antwort (Begrüßungen & Zusammenfassungen kostenlos)',
   chargePolicy:'Abgebrochene oder fehlgeschlagene Anfragen sind kostenlos, solange noch keine Antwort eintrifft. Sobald ein Teil ankommt, gibt es keine Erstattung.',
   roomFree:'Öffentliche Harem-Räume (Cupid-Raum + Toter Winkel zusammen): {roomFreeLimit} kostenlose Nachrichten/Tag (heute noch {roomFree}), danach ₩10 · Ortswechsel/Neuverbindung {move}',
   roomAffinityNote:'Zuneigung im Cupid-Hauptspiel oder in der Galerie, Herzen/Zeichen zwischen Spielern und Systemeffekte wie Eifersucht beeinflussen dein Guthaben nicht.',
   need:'Für eine Antwort sind ₩10 nötig. In den öffentlichen Harem-Räumen (Cupid-Raum und Toter Winkel zusammen) sind täglich {roomFreeLimit} Nachrichten auch bei ₩0 frei.',
   conversion:'Öffentliche Räume: +₩10 pro +1 Zuneigung/Rang/Besessenheit durch Charaktere (Abzüge kosten kein Guthaben)',
   daily:'Heutige Raumbelohnung: ₩{earned} / ₩{limit}',
   remaining:'Heute noch ₩{remaining} möglich.',
   limit:'Heutiges Tageslimit von ₩{limit} in öffentlichen Räumen erreicht.',
   reset:'Zurücksetzung: {time} (koreanische Zeit)',
   attendance:'Tägliche Anwesenheit',
   attended:'Heute bereits eingecheckt',
   attendanceAccountBlocked:'Dieses Konto hat die heutige Anwesenheitsbelohnung bereits erhalten. Ab morgen um Mitternacht koreanischer Zeit kannst du sie erneut erhalten.',
   attendanceBrowserBlocked:'Dieser Browser hat die heutige Anwesenheitsbelohnung bereits erhalten. Ab morgen um Mitternacht koreanischer Zeit kannst du sie erneut erhalten.',
   attendanceAlreadyBlocked:'Du hast die heutige Anwesenheitsbelohnung bereits erhalten. Ab morgen um Mitternacht koreanischer Zeit kannst du sie erneut erhalten.',
   attendanceDeviceError:'Dieser Browser konnte nicht überprüft werden. Erlaube Cookies, lade die Seite neu und versuche es erneut.',
   attendanceAuthError:'Deine Sitzung konnte nicht überprüft werden. Lade die Seite neu und versuche es erneut.',
   attendanceNetworkError:'Der Server hat nicht geantwortet, daher konnte deine Anwesenheit nicht bestätigt werden. Prüfe deine Internetverbindung und versuche es erneut.',
   attendanceServerError:'Deine Anwesenheit konnte nicht überprüft werden. Bitte versuche es gleich noch einmal.',
   attendanceInfo:'Tägliche Anwesenheit: {amount} (abgemeldet ₩100 · angemeldet ₩200)',
   attendanceConfirm:'Heutige Anwesenheitsbelohnung von {amount} erhalten?',
   attendanceDone:'Anwesenheitsbelohnung von {amount} erhalten.',
   loginBenefit:'Erste Anmeldung: +₩700 Bonus (übernimmt Gast-Guthaben & Werte einmalig; ₩1,000 Tageslimit · ₩200 Anwesenheit)',
   login:'Anmelden',
   room:'Zum Cupid-Raum',
   confirm:'Bestätigen',
   close:'Schließen',
   retry:'Erneut prüfen'
  },
  pt:{
   balance:'Saldo',
   title:'Saldo do chat da galeria',
   loading:'Consultando saldo…',
   unavailable:'Não foi possível consultar seu saldo. Tente novamente em instantes.',
   insufficient:'Saldo insuficiente para esta resposta',
   pill:'Saldo ₩{amount} · ₩10/resposta',
   pillTooltip:'Cada resposta da IA no chat livre da galeria custa ₩10 do mesmo saldo usado em Harem. Saudações e resumos automáticos são gratuitos.',
   turns:'{n} respostas normais ou da galeria disponíveis',
   cost:'Chat da galeria e Harem (1:1 e em grupo): ₩10 por resposta da IA (saudações e resumos grátis)',
   chargePolicy:'Pedidos cancelados ou que falhem antes de a resposta começar a chegar são gratuitos. Depois de qualquer parte chegar, não há reembolso.',
   roomFree:'Salas públicas de Harem (Sala Cupid + Ponto Cego, somadas): {roomFreeLimit} msgs grátis/dia ({roomFree} restantes hoje), depois ₩10 · Mover/reconectar {move}',
   roomAffinityNote:'Afinidade da história principal ou galeria do Cupid, corações ou marcas entre usuários e efeitos do sistema como ciúme não alteram seu saldo.',
   need:'É preciso ₩10 para receber uma resposta. As salas públicas de Harem (sala Cupid e Ponto Cego, somadas) incluem {roomFreeLimit} msgs grátis por dia mesmo com saldo ₩0.',
   conversion:'Salas públicas: +₩10 por cada +1 de afinidade/posição/obsessão do personagem (quedas nunca descontam)',
   daily:'Recompensas nas salas públicas hoje: ₩{earned} / ₩{limit}',
   remaining:'Ainda pode ganhar ₩{remaining} hoje.',
   limit:'Limite diário de ₩{limit} nas salas públicas atingido.',
   reset:'Reinício diário: {time} (horário da Coreia)',
   attendance:'Presença diária',
   attended:'Presença registrada hoje',
   attendanceAccountBlocked:'Esta conta já recebeu a recompensa de presença de hoje. Você poderá recebê-la novamente amanhã a partir da meia-noite, no horário da Coreia.',
   attendanceBrowserBlocked:'Este navegador já recebeu a recompensa de presença de hoje. Você poderá recebê-la novamente amanhã a partir da meia-noite, no horário da Coreia.',
   attendanceAlreadyBlocked:'Você já recebeu a recompensa de presença de hoje. Você poderá recebê-la novamente amanhã a partir da meia-noite, no horário da Coreia.',
   attendanceDeviceError:'Não foi possível verificar este navegador. Permita cookies, recarregue a página e tente novamente.',
   attendanceAuthError:'Não foi possível verificar sua sessão. Recarregue a página e tente outra vez.',
   attendanceNetworkError:'Não recebemos uma resposta do servidor, por isso não foi possível confirmar sua presença. Verifique sua conexão com a internet e tente novamente.',
   attendanceServerError:'Não foi possível verificar sua presença. Tente novamente em instantes.',
   attendanceInfo:'Presença diária: {amount} (sem login ₩100 · com login ₩200)',
   attendanceConfirm:'Receber a recompensa de presença de {amount} hoje?',
   attendanceDone:'Recompensa de presença de {amount} recebida.',
   loginBenefit:'Primeiro login dá bônus de +₩700 (unifica saldo e pontuações de visitante uma vez; limite diário ₩1,000 · presença ₩200)',
   login:'Entrar',
   room:'Ir para a sala do Cupid',
   confirm:'Confirmar',
   close:'Fechar',
   retry:'Verificar novamente'
  },
  zh:{
   balance:'余额',
   title:'画廊聊天余额',
   loading:'正在查询余额…',
   unavailable:'无法查询余额，请稍后重试。',
   insufficient:'余额不足，无法获取本次回复',
   pill:'余额 ₩{amount} · 每次回复₩10',
   pillTooltip:'在画廊自由聊天中收到 AI 回复时，将从与 Harem 共用的余额中扣除 ₩10。首次问候和自动摘要免费。',
   turns:'普通与画廊对话可用 {n} 次',
   cost:'画廊自由聊天与 Harem（单人·群聊）：每次 AI 回复扣除 ₩10（首次问候与自动摘要免费）',
   chargePolicy:'在回复开始到达前取消或失败的请求不收费。收到任何部分的回复后均不退款。',
   roomFree:'Harem 公开房间（Cupid 房间与死角合计）：每日 {roomFreeLimit} 条免费（今日剩 {roomFree} 条），超出每条 ₩10 · 移动/重连 {move}',
   roomAffinityNote:'Cupid 主线或画廊好感度、玩家间的爱心/标记以及嫉妒等系统变化均不影响余额。',
   need:'获取回复需要 ₩10。Harem 公开房间（Cupid 房间与死角合计）每日包含 {roomFreeLimit} 条免费聊天，余额为 ₩0 也可发言。',
   conversion:'公开房间奖励：角色好感·地位·执着每 +1 获 +₩10（降分不扣余额）',
   daily:'今日公开房间奖励 ₩{earned} / ₩{limit}',
   remaining:'今日还可获得 ₩{remaining}。',
   limit:'今日公开房间奖励上限 ₩{limit} 已满。',
   reset:'上限重置：{time}（韩国时间）',
   attendance:'每日签到',
   attended:'今日已签到',
   attendanceAccountBlocked:'此账号已领取今天的签到奖励。韩国时间明天零点后可再次领取。',
   attendanceBrowserBlocked:'此浏览器已领取今天的签到奖励。韩国时间明天零点后可再次领取。',
   attendanceAlreadyBlocked:'已领取今天的签到奖励。韩国时间明天零点后可再次领取。',
   attendanceDeviceError:'无法验证此浏览器。请允许 Cookie，刷新页面后重试。',
   attendanceAuthError:'无法验证当前会话。请刷新页面后重试。',
   attendanceNetworkError:'未收到服务器响应，无法确认签到结果。请检查网络连接后重试。',
   attendanceServerError:'无法查询签到信息。请稍后再试。',
   attendanceInfo:'每日签到奖励 {amount}（未登录 ₩100 · 已登录 ₩200）',
   attendanceConfirm:'确认领取今日 {amount} 签到奖励吗？',
   attendanceDone:'已领取 {amount} 签到奖励。',
   loginBenefit:'首次登录赠送 +₩700（一次性合并未登录余额与关系分数；每日奖励上限 ₩1,000 · 签到 ₩200）',
   login:'登录',
   room:'前往 Cupid 房间',
   confirm:'确认',
   close:'关闭',
   retry:'重新查询'
  }
 };
 const lang=()=>String(root.GAME_LANG||document.documentElement.lang||'ko').slice(0,2);
 const t=(key,vars={})=>String(((copy[lang()]||copy.en)[key])||copy.en[key]||'').replace(/\{(\w+)\}/g,(_,k)=>vars[k]!==undefined?vars[k]:`{${k}}`);
 const num=value=>new Intl.NumberFormat(lang()).format(Math.max(0,Math.trunc(Number(value)||0)));
 const money=value=>lang()==='ko'?`${num(value)}원`:lang()==='ja'?`${num(value)}ウォン`:`₩${num(value)}`;
 let wallet=null,session=null,pending=null,refreshPending=null,epoch=0,dialog=null,lastRefreshError=null;
 const active=new Set();
 const account=()=>{ var __oc0, __oc1; return (
String((((__oc1 = (__oc0 = root.archerlabAccount) === null || __oc0 === void 0 ? void 0 : __oc0.user) === null || __oc1 === void 0 ? void 0 : __oc1.id))||'').replace(/^al:/,'')
); };
 const subject=()=>account()?'al:'+account():'guest';
 let accountId=account();
 const node=(tag,cls,text)=>{
  const n=document.createElement(tag);
  if(cls)n.className=cls;
  if(text!==undefined&&text!==null)n.textContent=String(text);
  return n;
 };
 const on=(el,ev,fn,opts)=>{ if(el&&typeof el.addEventListener==='function')el.addEventListener(ev,fn,opts); };
 async function post(url,body){ var __oc2, __oc3;
  const fp=await (((__oc3 = (__oc2 = root.AiBrowserProof) === null || __oc2 === void 0 ? void 0 : __oc2.fingerprint) === null || __oc3 === void 0 ? void 0 : __oc3.call(__oc2)));
  const headers={'Content-Type':'application/json'};if(fp&&url.startsWith(base))headers['X-Device-Fp']=fp;
  const response=await fetch(url,{method:'POST',credentials:'include',cache:'no-store',headers,body:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw new Error('IDENTITY_UNAVAILABLE');return response.json();
 }
 async function credentials(){ var __oc4;
  await (((__oc4 = root.archerlabAccount) === null || __oc4 === void 0 ? void 0 : __oc4.ready));
  const who=account(),version=epoch;
  if(((session === null || session === void 0 ? void 0 : session.account))===who&&session.expires_at>Date.now()+60000)return session;
  if(pending)return pending;
  pending=(async()=>{
   let value;
   if(who){
    const status=await post('https://account.archerlab.dev/api/status',{});
    if(!status.user||String(status.user.id)!==who)throw new Error('IDENTITY_CHANGED');
    const start=await post(base+'/api/session/start',{});
    const ticket=await post('https://account.archerlab.dev/api/sso',{csrf:status.csrf,request:start.request});
    value=await post(base+'/api/session',{state:start.state,code:ticket.code});
   }else value=await post(base+'/api/session',{guest:true});
   if(epoch!==version||account()!==who||!value.token||!value.user_id||(who&&value.user_id!=='al:'+who))throw new Error('IDENTITY_CHANGED');
   return session={...value,account:who};
  })().finally(()=>{if(version===epoch)pending=null;});
  return pending;
 }
 async function authorized(path,init={},auth){ var __oc5, __oc6;
  auth=auth||await credentials();const headers=new Headers(init.headers||{});headers.set('Authorization','Bearer '+auth.token);
  const fp=await (((__oc6 = (__oc5 = root.AiBrowserProof) === null || __oc5 === void 0 ? void 0 : __oc5.fingerprint) === null || __oc6 === void 0 ? void 0 : __oc6.call(__oc5)));if(fp&&!headers.has('X-Device-Fp'))headers.set('X-Device-Fp',fp);
  const response=await fetch(base+path,{...init,headers,credentials:'include',cache:'no-store'});
  if(response.status===401&&((session === null || session === void 0 ? void 0 : session.token))===auth.token)session=null;return response;
 }
 async function proofFor(expectedSubject=''){
  const target=String(expectedSubject||subject());
  if(target!==subject())return '';
  try{
   const auth=await credentials();
   if(target!==subject())return '';
   if(target==='guest'&&!String(((auth === null || auth === void 0 ? void 0 : auth.user_id))||'').startsWith('gu:'))return '';
   if(target.startsWith('al:')&&((auth === null || auth === void 0 ? void 0 : auth.user_id))!==target)return '';
   return String(((auth === null || auth === void 0 ? void 0 : auth.token))||'');
  }catch (_err) {return '';}
 }
 function render(){
  const text=wallet?t('pill',{amount:num(wallet.balance)}):t('loading');
  const tip=t('pillTooltip');
  document.querySelectorAll('.cupid-gallery-balance').forEach(el=>{el.textContent=text;el.title=tip;});
 }
 async function refresh(){
  if(refreshPending)return refreshPending;const version=epoch;
  refreshPending=(async()=>{
   try{
    lastRefreshError=null;
    const auth=await credentials();const response=await authorized('/api/credits',{signal:AbortSignal.timeout(15000)},auth);
    if(!response.ok){const err=new Error('CREDITS_UNAVAILABLE');err.status=response.status;throw err;}
    const value=await response.json();
    if(version!==epoch||value.owner!==auth.user_id)throw new Error('IDENTITY_CHANGED');
    wallet=value;render();return wallet;
   }catch(error){lastRefreshError=error;throw error;}
  })().finally(()=>{if(version===epoch)refreshPending=null;});return refreshPending;
 }
 function toast(message){
  const existing=typeof document.querySelector==='function'?document.querySelector('.cupid-gallery-credit-toast'):null;
  const el=existing||node('div','cupid-gallery-credit-toast harem-credit-toast');
  el.setAttribute('role','status');
  if(!existing){on(el,'click',()=>{clearTimeout(el._timer);el.hidden=true;});document.body.append(el);}
  el.textContent=message;el.hidden=false;clearTimeout(el._timer);el._timer=setTimeout(()=>{el.hidden=true;},2000);
 }
 function close(){
  if(!dialog)return;
  if(typeof dialog.close==='function')dialog.close();
  if(typeof dialog.remove==='function')dialog.remove();
  dialog=null;
 }
 function attendanceReason(value){
  return ((value === null || value === void 0 ? void 0 : value.kind))==='account'&&value.attendanceAccountClaimed?'attendanceAccountBlocked'
   :((value === null || value === void 0 ? void 0 : value.attendanceBrowserClaimed))?'attendanceBrowserBlocked':'attendanceAlreadyBlocked';
 }
 function attendanceFailure(error){
  return ((error === null || error === void 0 ? void 0 : error.code))==='ATTENDANCE_DEVICE_REQUIRED'?'attendanceDeviceError'
   :((error === null || error === void 0 ? void 0 : error.status))===401?'attendanceAuthError'
   :((error === null || error === void 0 ? void 0 : error.name))==='TypeError'||((error === null || error === void 0 ? void 0 : error.name))==='TimeoutError'||((error === null || error === void 0 ? void 0 : error.name))==='AbortError'?'attendanceNetworkError':'attendanceServerError';
 }
 function attendanceNotice(key){
  if(typeof document.querySelector==='function'&&document.querySelector('.harem-attendance-notice'))return;
  const trigger=document.activeElement,sheet=node('dialog','cupid-gallery-credit-dialog harem-credit-dialog harem-attendance-notice');
  const title=node('h2','',t('attendance'));title.id='cupid-attendance-notice-title';sheet.setAttribute('aria-labelledby',title.id);
  const button=node('button','harem-credit-action harem-credit-action--primary',t('confirm'));button.type='button';
  const finish=()=>{if(typeof sheet.close==='function')sheet.close();if(typeof sheet.remove==='function')sheet.remove();if(trigger&&trigger.isConnected&&trigger!==document.body&&typeof trigger.focus==='function')trigger.focus();};
  button.onclick=finish;on(sheet,'cancel',e=>{e.preventDefault();finish();});
  sheet.append(title,node('p','harem-credit-copy',t(key)),button);document.body.append(sheet);sheet.showModal();
 }
 function openAttendance(){ var __oc11;
  if(!wallet||wallet.attendanceClaimed||(typeof document.querySelector==='function'&&document.querySelector('.harem-attendance-dialog')))return;
  const epochAtOpen=epoch,trigger=document.activeElement;
  const sheet=node('dialog','cupid-gallery-credit-dialog harem-credit-dialog harem-attendance-dialog');
  const title=node('h2','',t('attendance'));title.id='cupid-attendance-title';sheet.setAttribute('aria-labelledby',title.id);
  const confirm=node('button','harem-credit-action harem-credit-action--primary',t('confirm'));confirm.type='button';
  const cancel=node('button','harem-credit-action',t('close'));cancel.type='button';
  const finish=()=>{if(typeof sheet.close==='function')sheet.close();if(typeof sheet.remove==='function')sheet.remove();if(trigger&&trigger.isConnected&&typeof trigger.focus==='function')trigger.focus();};
  cancel.onclick=finish;on(sheet,'cancel',e=>{e.preventDefault();finish();});
  confirm.onclick=async()=>{
   if(epochAtOpen!==epoch){finish();return;}
   const version=epoch;confirm.disabled=true;
   try{
    const response=await authorized('/api/credits/attendance',{method:'POST',signal:AbortSignal.timeout(10000)});
    if(!response.ok){const body=await response.json().catch(()=>({})),error=new Error('ATTENDANCE_UNAVAILABLE');error.code=body.error;error.status=response.status;throw error;}
    const result=await response.json();
    if(version===epoch&&result.wallet){wallet=result.wallet;render();if(dialog)show(dialog._lastReason||'');if(result.amount>0)toast(t('attendanceDone',{amount:money(result.amount)}));}
    finish();
    if(version===epoch&&result.amount===0)attendanceNotice(attendanceReason(result.wallet));
   }catch(error){finish();if(version===epoch)attendanceNotice(attendanceFailure(error));}
  };
  const amount=money((((__oc11 = wallet.attendanceAmount) !== null && __oc11 !== void 0 ? __oc11 : (wallet.kind==='guest'?100:200))));
  sheet.append(title,node('p','harem-credit-copy',t('attendanceConfirm',{amount})),node('p','harem-credit-muted',t('attendanceInfo',{amount})),confirm,cancel);
  document.body.append(sheet);sheet.showModal();
 }
 async function requestAttendance(){
  const version=epoch;
  let value=null;
  try{value=await refresh();}catch(_){value=null;}
  if(version!==epoch)return;
  if(!value)return attendanceNotice(attendanceFailure(lastRefreshError));
  if(value.attendanceClaimed)return attendanceNotice(attendanceReason(value));
  openAttendance();
 }
 function show(reason=''){ var __oc12, __oc13, __oc14, __oc15, __oc16;
  close();
  dialog=node('dialog','cupid-gallery-credit-dialog harem-credit-dialog');
  dialog._lastReason=reason;
  const insufficient=reason==='insufficient';
  const price=(wallet&&wallet.price)||10;
  dialog.dataset=dialog.dataset||{};
  dialog.dataset.insufficient=String(insufficient||Boolean(wallet&&wallet.balance<price&&reason==='insufficient'));
  const heading=node('div','harem-credit-heading');
  const title=node('h2','',insufficient?t('insufficient'):t('title'));title.id='cupid-gallery-credit-title';
  dialog.setAttribute('aria-labelledby',title.id);
  const dismiss=node('button','harem-credit-close','×');dismiss.type='button';dismiss.setAttribute('aria-label',t('close'));dismiss.onclick=close;
  heading.append(title,dismiss);dialog.append(heading);
  on(dialog,'click',e=>{if(e.target===dialog)close();});
  on(dialog,'cancel',e=>{e.preventDefault();close();});
  if(!wallet||reason==='unavailable'){
   const warn=node('p','harem-credit-warning',t(reason==='unavailable'?'unavailable':'loading'));
   if(reason==='unavailable')warn.setAttribute('role','alert');
   dialog.append(warn);
   const retry=node('button','harem-credit-action harem-credit-action--primary',t('retry'));retry.type='button';
   retry.onclick=()=>void refresh().then(()=>show('')).catch(()=>show('unavailable'));
   dialog.append(retry);document.body.append(dialog);dialog.showModal();dismiss.focus();return;
  }
  const summary=node('div','harem-credit-summary');
  summary.append(node('span','harem-credit-caption',t('balance')),node('p','harem-credit-total',money(wallet.balance)),node('p','harem-credit-muted',t('turns',{n:num(Math.max(0,Math.floor(wallet.balance/price)))})));
  dialog.append(summary);
  const roomFreeLimit=num((((__oc12 = wallet.roomFreeLimit) !== null && __oc12 !== void 0 ? __oc12 : 30)));
  const roomFree=num((((__oc14 = (__oc13 = wallet.roomFreeRemaining) !== null && __oc13 !== void 0 ? __oc13 : wallet.roomFreeLimit) !== null && __oc14 !== void 0 ? __oc14 : 30)));
  const attendanceAmount=money((((__oc15 = wallet.attendanceAmount) !== null && __oc15 !== void 0 ? __oc15 : (wallet.kind==='guest'||!account()?100:200))));
  if(reason){const error=node('p','harem-credit-warning',t(reason==='insufficient'?'need':'unavailable',{roomFreeLimit}));error.setAttribute('role','alert');dialog.append(error);}
  const rules=node('div','harem-credit-rules');
  for(const key of ['cost','chargePolicy','roomFree','roomAffinityNote']){
   rules.append(node('p',`harem-credit-copy harem-credit-copy--${key}`,t(key,{move:money(wallet.movePrice||10),roomFree,roomFreeLimit})));
  }
  dialog.append(rules);
  const isGuest=(wallet.kind?wallet.kind==='guest':!account());
  const dailyLimit=Math.max(0,Number(wallet.dailyLimit!=null?wallet.dailyLimit:(isGuest?300:1000)));
  const dailyEarned=Math.max(0,Number(wallet.dailyEarned!=null?wallet.dailyEarned:0));
  const dailyRemaining=Math.max(0,Number(wallet.dailyRemaining!=null?wallet.dailyRemaining:Math.max(0,dailyLimit-dailyEarned)));
  const progress=node('div','harem-credit-progress');
  progress.append(node('p','harem-credit-conversion',t('conversion')));
  progress.append(node('strong','',t('daily',{earned:num(dailyEarned),limit:num(dailyLimit)})));
  const meter=node('progress','harem-credit-meter');meter.max=Math.max(1,dailyLimit);meter.value=Math.max(0,Math.min(dailyLimit,dailyEarned));
  meter.setAttribute('aria-label',t('daily',{earned:num(dailyEarned),limit:num(dailyLimit)}));progress.append(meter);
  progress.append(node('p','',dailyRemaining>0?t('remaining',{remaining:num(dailyRemaining)}):t('limit',{limit:num(dailyLimit)})));
  const resetDate=new Date(wallet.resetAt||Date.now());
  const time=Number.isFinite(resetDate.getTime())
   ?new Intl.DateTimeFormat(lang(),{timeZone:'Asia/Seoul',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(resetDate)
   :'24:00';
  progress.append(node('p','harem-credit-muted',t('reset',{time})));dialog.append(progress);
  const attendance=node('button','harem-credit-action',wallet.attendanceClaimed?t('attended'):t('attendance'));
  attendance.type='button';attendance.dataset=attendance.dataset||{};attendance.dataset.attendance='true';attendance.onclick=requestAttendance;
  const attendanceCard=node('div','harem-credit-attendance');
  attendanceCard.append(attendance,node('p','harem-credit-muted',t('attendanceInfo',{amount:attendanceAmount})));dialog.append(attendanceCard);
  if(isGuest){
   const accountCard=node('div','harem-credit-account');
   accountCard.append(node('p','harem-credit-login-copy',t('loginBenefit')));
   const login=node('a','harem-credit-action',t('login'));login.href='https://account.archerlab.dev/';login.target='_blank';login.rel='noopener noreferrer';accountCard.append(login);
   dialog.append(accountCard);
  }
  const roomUrl=lang()==='ko'?'https://harem.archerlab.dev/?character=mixed_5':`https://harem.archerlab.dev/index-${lang()}.html?character=mixed_5`;
  const room=node('a','harem-credit-action harem-credit-action--primary',t('room'));
  room.href=roomUrl;room.target='_blank';room.rel='noopener noreferrer';dialog.append(room);
  document.body.append(dialog);dialog.showModal();dismiss.focus();
 }
 async function beforeSend(){try{const value=await refresh();if(value.balance>=value.price)return true;show('insufficient');}catch (_err) {show('unavailable');}return false;}
 function mount(host){
  const button=node('button','cupid-gallery-balance',t('loading'));button.type='button';button.onclick=()=>show();host.append(button);render();void refresh().catch(()=>{});
 }
 async function chatFetch(url,init,expectedEpoch=epoch){ var __oc7, __oc8, __oc10;
  if(expectedEpoch!==epoch)throw new DOMException('Account changed','AbortError');
  const auth=await credentials();
  if(expectedEpoch!==epoch)throw new DOMException('Account changed','AbortError');
  const version=epoch,body=JSON.parse(init.body||'{}'),controller=new AbortController();
  if(!body.turnId)throw new Error('MISSING_TURN_ID');
  const abort=()=>controller.abort();(((__oc7 = init.signal) === null || __oc7 === void 0 ? void 0 : __oc7.addEventListener('abort', abort, { once: true })));if((((__oc8 = init.signal) === null || __oc8 === void 0 ? void 0 : __oc8.aborted)))abort();
  active.add(controller);let finished=false,cancelSent=false;
  const cancel=()=>{if(finished||cancelSent)return;cancelSent=true;void authorized('/api/credits/cancel',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({turnId:body.turnId})},auth).catch(()=>{});};
  controller.signal.addEventListener('abort',cancel,{once:true});
  const cleanup=()=>{ var __oc9;finished=true;active.delete(controller);(((__oc9 = init.signal) === null || __oc9 === void 0 ? void 0 : __oc9.removeEventListener('abort', abort)));controller.signal.removeEventListener('abort',cancel);if(epoch===version)void refresh().catch(()=>{});};
  try{
   if(controller.signal.aborted)throw new DOMException('Aborted','AbortError');
   let response;const until=Date.now()+105000;
   for(;;){
    response=await authorized('/api/credits/chat',{...init,signal:controller.signal},auth);
    if(response.status!==409||Date.now()>=until)break;
    const data=await response.clone().json().catch(()=>({}));if(data.error!=='CREDIT_PENDING')break;
    await new Promise((resolve,reject)=>{const stop=()=>{clearTimeout(timer);reject(new DOMException('Aborted','AbortError'));};const timer=setTimeout(()=>{controller.signal.removeEventListener('abort',stop);resolve();},750);if(controller.signal.aborted)stop();else controller.signal.addEventListener('abort',stop,{once:true});});
   }
   if(epoch!==version)throw new DOMException('Account changed','AbortError');
   if(response.status===402){const data=await response.clone().json().catch(()=>({}));if((((__oc10 = data.wallet) === null || __oc10 === void 0 ? void 0 : __oc10.owner))===auth.user_id){wallet=data.wallet;render();}show('insufficient');}
   if(!response.body){cleanup();return response;}
   const reader=response.body.getReader();
   return new Response(new ReadableStream({async pull(out){try{const part=await reader.read();if(part.done){reader.releaseLock();cleanup();out.close();}else out.enqueue(part.value);}catch(error){cleanup();out.error(error);}},async cancel(reason){cancel();try{await reader.cancel(reason);}finally{cleanup();}}}),response);
  }catch(error){if(controller.signal.aborted)cancel();cleanup();throw error;}
 }
 root.addEventListener('archerlab:session',()=>{const next=account();if(next===accountId)return;accountId=next;epoch++;for(const controller of active)controller.abort();wallet=null;session=null;pending=null;refreshPending=null;close();const att=typeof document.querySelector==='function'?document.querySelector('.harem-attendance-dialog'):null;if(att){if(typeof att.close==='function')att.close();if(typeof att.remove==='function')att.remove();}render();if(document.querySelector('.cupid-gallery-balance'))void refresh().catch(()=>{});});
 root.addEventListener('focus',()=>{if(document.querySelector('.cupid-gallery-balance'))void refresh().catch(()=>{});});
 const style=node('style');style.textContent=`
.cupid-gallery-balance{position:absolute;right:max(12px,env(safe-area-inset-right));top:max(12px,env(safe-area-inset-top));z-index:6;max-width:calc(100% - 24px);min-height:44px;padding:9px 14px;border:1px solid #d7ae6388;border-radius:18px;background:#30212ee8;color:#ffe9b5;font-family:inherit;font-size:13px;font-weight:700;line-height:1.4;cursor:pointer;white-space:normal}
.cupid-gallery-credit-dialog{box-sizing:border-box;margin:auto;inset:0;width:min(500px,calc(100vw - 24px));max-width:calc(100vw - 24px);max-height:calc(100dvh - 24px);padding:20px;border:1px solid #92704c;border-radius:16px;background:#1b1017;color:#f7edf4;box-shadow:inset 0 0 0 4px #1b1017,inset 0 0 0 5px #6f503440,0 24px 80px #000a;overflow:auto;font:14px/1.6 sans-serif}
.cupid-gallery-credit-dialog::backdrop{background:#09050ccc}
.cupid-gallery-credit-dialog .harem-credit-heading{display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid #b48b5040}
.cupid-gallery-credit-dialog:not(.harem-attendance-dialog):not(.harem-attendance-notice) .harem-credit-heading::before{content:"";flex:0 0 44px;width:44px;height:44px;border-radius:24%;background:url("https://harem.archerlab.dev/assets/images/ui/brand-mark.webp") center / contain no-repeat}
.cupid-gallery-credit-dialog .harem-credit-heading h2{flex:1;margin:0;color:#ffe6ba;font-size:19px;line-height:1.3;word-break:keep-all}
.cupid-gallery-credit-dialog .harem-credit-close{flex:0 0 auto;min-width:40px;min-height:40px;margin:0;padding:0;border:1px solid #705443;border-radius:10px;background:#2a1720;color:#ffe6ba;font-size:20px;line-height:1;cursor:pointer}
.cupid-gallery-credit-dialog .harem-credit-summary{padding:18px 24px;margin-bottom:14px;border:1px solid #b48b5066;border-image:url("https://harem.archerlab.dev/assets/images/ui/rose-velvet-button.webp") 9% 14% fill / 7px 30px / 0 stretch;border-radius:10px;background:#321016;text-align:center;box-shadow:0 5px 16px #0004}
.cupid-gallery-credit-dialog .harem-credit-caption{display:block;color:#e4c9a4;font-size:12px;letter-spacing:.04em}
.cupid-gallery-credit-dialog .harem-credit-total{margin:4px 0;color:#ffebc3;font-size:28px;font-weight:800;line-height:1.2}
.cupid-gallery-credit-dialog .harem-credit-muted{margin:4px 0;color:#d8c2ce;font-size:12.5px}
.cupid-gallery-credit-dialog .harem-credit-summary .harem-credit-muted{color:#e0c7b8}
.cupid-gallery-credit-dialog .harem-credit-warning{margin:12px 0;padding:10px 12px;border:1px solid #ff7d9788;border-radius:10px;background:#441423;color:#ffd8e2;font-weight:600;overflow-wrap:anywhere}
.cupid-gallery-credit-dialog .harem-credit-rules{padding:0 4px}
.cupid-gallery-credit-dialog .harem-credit-copy{margin:8px 0;color:#efe2ec;overflow-wrap:anywhere}
.cupid-gallery-credit-dialog .harem-credit-progress{margin:14px 0 12px;padding:14px 4px;border-top:1px solid #b48b5040;border-bottom:1px solid #b48b5040}
.cupid-gallery-credit-dialog .harem-credit-progress p{margin:6px 0;overflow-wrap:anywhere}
.cupid-gallery-credit-dialog .harem-credit-progress strong{display:block;margin:6px 0;color:#eed4a8}
.cupid-gallery-credit-dialog .harem-credit-conversion{padding-bottom:6px}
.cupid-gallery-credit-dialog .harem-credit-meter{display:block;width:100%;height:10px;margin:6px 0;accent-color:#e0a44b}
.cupid-gallery-credit-dialog .harem-credit-attendance,.cupid-gallery-credit-dialog .harem-credit-account{margin:12px 0;padding:12px;border:1px solid #70544366;border-radius:12px;background:#24141d}
.cupid-gallery-credit-dialog .harem-credit-login-copy{margin:0 0 10px;color:#eed8bb;overflow-wrap:anywhere}
.cupid-gallery-credit-dialog .harem-credit-action{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;min-height:44px;margin-top:8px;padding:10px 18px;border:1px solid #705443;border-radius:8px;background:#24151d;color:#eed8bb;font-family:inherit;font-size:14px;font-weight:700;text-decoration:none;cursor:pointer;text-align:center}
.cupid-gallery-credit-dialog .harem-credit-action--primary{border-color:#b48b5088;background:#591928;color:#fff1d6}
.cupid-gallery-credit-dialog:is(.harem-attendance-dialog,.harem-attendance-notice)>h2{margin:0 0 10px;text-align:center;color:#ffe6ba;font-size:19px}
.cupid-gallery-credit-dialog:is(.harem-attendance-dialog,.harem-attendance-notice)>h2::before{content:"";display:block;width:56px;height:56px;margin:0 auto 10px;border-radius:24%;background:url("https://harem.archerlab.dev/assets/images/ui/brand-mark.webp") center / contain no-repeat}
.cupid-gallery-credit-dialog:is(.harem-attendance-dialog,.harem-attendance-notice)>p{text-align:center;margin:8px 0}
.cupid-gallery-credit-toast{position:fixed;left:50%;bottom:max(24px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:16000;padding:14px 24px;border:1px solid #b48b5088;border-radius:10px;background:#321016;color:#fff1d6;font-size:14px;font-weight:700;box-shadow:0 12px 32px #000a}
.cupid-gallery-credit-dialog :focus-visible,.cupid-gallery-balance:focus-visible{outline:2px solid #ffe4ed;outline-offset:3px}
@media(max-width:480px){.cupid-gallery-credit-dialog{padding:16px}.cupid-gallery-credit-dialog .harem-credit-summary{padding:14px 16px}.cupid-gallery-credit-dialog .harem-credit-total{font-size:24px}}
`;document.head.append(style);
 root.HaremLogIdentity=Object.freeze({capture:subject,proofFor,resolveProofFor:proofFor,prepare:()=>{void proofFor().catch(()=>{});}});
 root.CupidGalleryCredits=Object.freeze({mount,beforeSend,chatFetch,refresh,open:show,close,capture:()=>epoch,captureSubject:subject,proofFor,get wallet(){return wallet;}});
})(window);
