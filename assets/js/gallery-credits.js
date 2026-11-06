(function(root){
 'use strict';
 const base='https://avatar.archerlab.dev';
 const copy={
  ko:['잔액 {amount}원 · 답변 1회 10원','갤러리 프리토킹 이용 안내','메시지를 보내 AI 답변을 받으면 하렘과 공유하는 잔액에서 10원이 차감돼요. 첫인사와 자동요약은 무료예요.','잔액이 부족해요. 답변을 받으려면 10원이 필요해요.','잔액을 확인하지 못했어요. 잠시 후 다시 시도해 주세요.','닫기','하렘에서 잔액·보상 확인','잔액 확인 중…','답변이 도착하기 전에 요청이 취소되거나 실패하면 차감하지 않아요. 답변의 일부라도 도착한 뒤에는 환불되지 않아요.'],
  en:['Balance ₩{amount} · ₩10/reply','Gallery chat balance','Each AI reply to your message costs ₩10 from the same balance you use in Harem. Greetings and automatic summaries are free.','Not enough balance. An AI reply requires ₩10.','Unable to check your balance. Please try again shortly.','Close','View balance and rewards in Harem','Checking balance…','Cancelled or failed requests are free until a reply begins arriving. Once any part of the reply arrives, the charge is not refunded.'],
  ja:['残高 {amount}ウォン · 返信10ウォン','ギャラリーチャットの残高','メッセージにAIが返信すると、ハーレムと共通の残高から10ウォン引かれます。最初の挨拶と自動要約は無料です。','残高が足りません。返信には10ウォン必要です。','残高を確認できませんでした。少し待ってから再試行してください。','閉じる','ハーレムで残高と報酬を確認','残高を確認中…','返信が届く前にキャンセルまたは失敗した場合は無料です。一部でも返信が届いた後は返金されません。'],
  es:['Saldo ₩{amount} · ₩10/respuesta','Saldo del chat de galería','Cada respuesta de la IA a tu mensaje cuesta ₩10 del mismo saldo que usas en Harem. Los saludos y resúmenes automáticos son gratis.','Saldo insuficiente. Necesitas ₩10 para recibir una respuesta.','No se pudo consultar el saldo. Inténtalo de nuevo en un momento.','Cerrar','Ver saldo y recompensas en Harem','Consultando saldo…','Si la solicitud falla o se cancela antes de empezar a recibir la respuesta, no se cobra. Después de recibir cualquier parte, no hay reembolso.'],
  fr:['Solde ₩{amount} · ₩10/réponse','Solde du chat de galerie','Chaque réponse de l’IA à votre message coûte ₩10, prélevés sur le même solde que dans Harem. Les salutations et résumés automáticos sont gratuits.','Solde insuffisant. Il faut ₩10 pour recevoir une réponse.','Impossible de consulter le solde. Réessayez dans un instant.','Fermer','Voir le solde et les récompenses dans Harem','Vérification du solde…','Une demande annulée ou échouée avant le début de la réponse est gratuite. Dès qu’une partie arrive, le montant n’est plus remboursable.'],
  de:['Guthaben ₩{amount} · ₩10/Antwort','Guthaben für den Galeriechat','Jede KI-Antwort auf deine Nachricht kostet ₩10 aus deinem gemeinsamen Harem-Guthaben. Begrüßungen und automatische Zusammenfassungen sind kostenlos.','Nicht genug Guthaben. Eine Antwort kostet ₩10.','Das Guthaben konnte nicht abgerufen werden. Bitte versuche es gleich erneut.','Schließen','Guthaben und Belohnungen in Harem ansehen','Guthaben wird geprüft…','Abgebrochene oder fehlgeschlagene Anfragen sind kostenlos, solange noch keine Antwort eintrifft. Sobald ein Teil ankommt, gibt es keine Erstattung.'],
  pt:['Saldo ₩{amount} · ₩10/resposta','Saldo do chat da galeria','Cada resposta da IA à sua mensagem custa ₩10 do mesmo saldo usado em Harem. Saudações e resumos automáticos são gratuitos.','Saldo insuficiente. São necessários ₩10 para receber uma resposta.','Não foi possível consultar o saldo. Tente novamente em instantes.','Fechar','Ver saldo e recompensas em Harem','Consultando saldo…','Pedidos cancelados ou que falhem antes de a resposta começar a chegar são gratuitos. Depois de qualquer parte chegar, não há reembolso.'],
  zh:['余额 ₩{amount} · 每次回复₩10','画廊聊天余额','发送消息并收到AI回复后，将从与Harem共用的余额中扣除₩10。首次问候和自动摘要免费。','余额不足。收到回复需要₩10。','无法查询余额，请稍后重试。','关闭','在Harem查看余额与奖励','正在查询余额…','在回复开始到达前取消或失败的请求不收费。收到任何部分的回复后均不退款。']
 };
 const lang=()=>String(root.GAME_LANG||document.documentElement.lang||'ko').slice(0,2);
 const t=(i)=> (copy[lang()]||copy.en)[i];
 let wallet=null,session=null,pending=null,refreshPending=null,epoch=0,dialog=null;
 const active=new Set();
 const account=()=>String(root.archerlabAccount?.user?.id||'').replace(/^al:/,'');
 const subject=()=>account()?'al:'+account():'guest';
 let accountId=account();
 const node=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
 async function post(url,body){
  const fp=await root.AiBrowserProof?.fingerprint?.();
  const headers={'Content-Type':'application/json'};if(fp&&url.startsWith(base))headers['X-Device-Fp']=fp;
  const response=await fetch(url,{method:'POST',credentials:'include',cache:'no-store',headers,body:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw new Error('IDENTITY_UNAVAILABLE');return response.json();
 }
 async function credentials(){
  await root.archerlabAccount?.ready;
  const who=account(),version=epoch;
  if(session?.account===who&&session.expires_at>Date.now()+60000)return session;
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
 async function authorized(path,init={},auth){
  auth=auth||await credentials();const headers=new Headers(init.headers||{});headers.set('Authorization','Bearer '+auth.token);
  const fp=await root.AiBrowserProof?.fingerprint?.();if(fp&&!headers.has('X-Device-Fp'))headers.set('X-Device-Fp',fp);
  const response=await fetch(base+path,{...init,headers,credentials:'include',cache:'no-store'});
  if(response.status===401&&session?.token===auth.token)session=null;return response;
 }
 async function proofFor(expectedSubject=''){
  const target=String(expectedSubject||subject());
  if(target!==subject())return '';
  try{
   const auth=await credentials();
   if(target!==subject())return '';
   if(target==='guest'&&!String(auth?.user_id||'').startsWith('gu:'))return '';
   if(target.startsWith('al:')&&auth?.user_id!==target)return '';
   return String(auth?.token||'');
  }catch{return '';}
 }
 function render(){
  const text=wallet?t(0).replace('{amount}',new Intl.NumberFormat(lang()).format(wallet.balance)):t(7);
  document.querySelectorAll('.cupid-gallery-balance').forEach(el=>{el.textContent=text;el.title=t(2);});
 }
 async function refresh(){
  if(refreshPending)return refreshPending;const version=epoch;
  refreshPending=(async()=>{
   const auth=await credentials();const response=await authorized('/api/credits',{signal:AbortSignal.timeout(15000)},auth);
   if(!response.ok)throw new Error('CREDITS_UNAVAILABLE');const value=await response.json();
   if(version!==epoch||value.owner!==auth.user_id)throw new Error('IDENTITY_CHANGED');wallet=value;render();return wallet;
  })().finally(()=>{if(version===epoch)refreshPending=null;});return refreshPending;
 }
 function show(reason=''){
  dialog?.remove();dialog=node('dialog');dialog.className='cupid-gallery-credit-dialog';
  const title=node('h2',t(1));title.id='cupid-gallery-credit-title';dialog.setAttribute('aria-labelledby',title.id);
  dialog.append(title,node('p',t(2)),node('p',t(8)));
  if(reason){const error=node('p',t(reason==='insufficient'?3:4));error.setAttribute('role','alert');dialog.append(error);}
  const link=node('a',t(6));link.href='https://harem.archerlab.dev/';link.target='_blank';link.rel='noopener';
  const close=node('button',t(5));close.onclick=()=>{dialog.close();dialog.remove();};dialog.append(link,close);document.body.append(dialog);dialog.showModal();close.focus();
 }
 async function beforeSend(){try{const value=await refresh();if(value.balance>=value.price)return true;show('insufficient');}catch{show('unavailable');}return false;}
 function mount(host){
  const button=node('button',t(7));button.className='cupid-gallery-balance';button.type='button';button.onclick=()=>show();host.append(button);render();void refresh().catch(()=>{});
 }
 async function chatFetch(url,init,expectedEpoch=epoch){
  if(expectedEpoch!==epoch)throw new DOMException('Account changed','AbortError');
  const auth=await credentials();
  if(expectedEpoch!==epoch)throw new DOMException('Account changed','AbortError');
  const version=epoch,body=JSON.parse(init.body||'{}'),controller=new AbortController();
  if(!body.turnId)throw new Error('MISSING_TURN_ID');
  const abort=()=>controller.abort();init.signal?.addEventListener('abort',abort,{once:true});if(init.signal?.aborted)abort();
  active.add(controller);let finished=false,cancelSent=false;
  const cancel=()=>{if(finished||cancelSent)return;cancelSent=true;void authorized('/api/credits/cancel',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({turnId:body.turnId})},auth).catch(()=>{});};
  controller.signal.addEventListener('abort',cancel,{once:true});
  const cleanup=()=>{finished=true;active.delete(controller);init.signal?.removeEventListener('abort',abort);controller.signal.removeEventListener('abort',cancel);if(epoch===version)void refresh().catch(()=>{});};
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
   if(response.status===402){const data=await response.clone().json().catch(()=>({}));if(data.wallet?.owner===auth.user_id){wallet=data.wallet;render();}show('insufficient');}
   if(!response.body){cleanup();return response;}
   const reader=response.body.getReader();
   return new Response(new ReadableStream({async pull(out){try{const part=await reader.read();if(part.done){reader.releaseLock();cleanup();out.close();}else out.enqueue(part.value);}catch(error){cleanup();out.error(error);}},async cancel(reason){cancel();try{await reader.cancel(reason);}finally{cleanup();}}}),response);
  }catch(error){if(controller.signal.aborted)cancel();cleanup();throw error;}
 }
 root.addEventListener('archerlab:session',()=>{const next=account();if(next===accountId)return;accountId=next;epoch++;for(const controller of active)controller.abort();wallet=null;session=null;pending=null;refreshPending=null;dialog?.remove();render();if(document.querySelector('.cupid-gallery-balance'))void refresh().catch(()=>{});});
 root.addEventListener('focus',()=>{if(document.querySelector('.cupid-gallery-balance'))void refresh().catch(()=>{});});
 const style=node('style');style.textContent=`.cupid-gallery-balance{position:absolute;right:max(12px,env(safe-area-inset-right));top:max(12px,env(safe-area-inset-top));z-index:6;max-width:calc(100% - 24px);min-height:44px;padding:9px 14px;border:1px solid #ba859a;border-radius:18px;background:#30212ee8;color:#ffe4ed;font-family:inherit;font-size:13px;font-weight:600;line-height:1.4;cursor:pointer;white-space:normal}.cupid-gallery-credit-dialog{box-sizing:border-box;margin:auto;inset:0;width:min(440px,calc(100vw - 32px));max-height:calc(100dvh - 32px);padding:24px;border:1px solid #b68099;border-radius:20px;background:#271d2a;color:#fce9f0;box-shadow:0 16px 70px #0008;overflow:auto;font:15px/1.6 sans-serif}.cupid-gallery-credit-dialog::backdrop{background:#100a17b8}.cupid-gallery-credit-dialog h2{word-break:keep-all;font-size:20px;margin:0 0 16px}.cupid-gallery-credit-dialog p{margin:12px 0;overflow-wrap:anywhere}.cupid-gallery-credit-dialog a{display:block;color:#ffc7db;padding:10px 0}.cupid-gallery-credit-dialog button{display:block;margin:12px 0 0 auto;min-height:44px;padding:8px 24px;background:#78445f;color:white;border:1px solid #c78aa9;border-radius:12px;cursor:pointer}.cupid-gallery-credit-dialog :focus-visible,.cupid-gallery-balance:focus-visible{outline:2px solid #ffe4ed;outline-offset:3px}`;document.head.append(style);
 root.HaremLogIdentity=Object.freeze({capture:subject,proofFor,prepare:()=>{void proofFor().catch(()=>{});}});
 root.CupidGalleryCredits=Object.freeze({mount,beforeSend,chatFetch,refresh,capture:()=>epoch,captureSubject:subject,proofFor,get wallet(){return wallet;}});
})(window);
