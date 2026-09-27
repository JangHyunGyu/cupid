/* Keep this entry guard parseable before any modern runtime is loaded. */
(function () {
    'use strict';
    var supported = typeof Object.hasOwn === 'function' && typeof Array.prototype.at === 'function';
    window.CupidRuntimeSupport = { supported: supported };
    if (supported) return;

    var copies = {
        ko: ['브라우저 업데이트가 필요합니다', '이 브라우저에서는 게임을 실행할 수 없습니다. 브라우저와 기기 운영체제를 최신 버전으로 업데이트해 주세요. 업데이트할 수 없다면 다른 기기에서 접속해 주세요.'],
        en: ['Browser update required', 'This browser cannot run the game. Update your browser and device operating system. If updates are unavailable, open the game on another device.'],
        ja: ['ブラウザの更新が必要です', 'このブラウザではゲームを実行できません。ブラウザと端末のOSを最新バージョンに更新してください。更新できない場合は、別の端末からアクセスしてください。'],
        es: ['Actualiza tu navegador', 'Este navegador no puede ejecutar el juego. Actualiza el navegador y el sistema operativo de tu dispositivo. Si no puedes actualizarlos, abre el juego en otro dispositivo.'],
        fr: ['Mise à jour du navigateur nécessaire', 'Ce navigateur ne peut pas lancer le jeu. Mettez à jour votre navigateur et le système de votre appareil. Si aucune mise à jour n’est disponible, ouvrez le jeu sur un autre appareil.'],
        de: ['Browser-Update erforderlich', 'Dieser Browser kann das Spiel nicht ausführen. Aktualisiere deinen Browser und das Betriebssystem deines Geräts. Wenn keine Updates verfügbar sind, öffne das Spiel auf einem anderen Gerät.'],
        pt: ['Atualize seu navegador', 'Este navegador não consegue executar o jogo. Atualize o navegador e o sistema operacional do dispositivo. Se não houver atualizações disponíveis, abra o jogo em outro dispositivo.']
    };

    function showNotice() {
        if (!document.body || document.getElementById('cupid-browser-update')) return;
        var lang = (document.documentElement.lang || 'ko').toLowerCase().split('-')[0];
        var copy = copies[lang] || copies.en;
        // Hidden controls must not remain in the keyboard order behind the notice.
        for (var i = 0; i < document.body.children.length; i++) {
            document.body.children[i].style.display = 'none';
        }
        var notice = document.createElement('main');
        notice.id = 'cupid-browser-update';
        notice.setAttribute('role', 'alert');
        notice.setAttribute('tabindex', '-1');
        notice.setAttribute('aria-labelledby', 'cupid-browser-update-title');
        notice.style.cssText = 'position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483647;overflow:auto;box-sizing:border-box;display:flex;background:#09070d;color:#fff;padding:24px;padding:max(24px,env(safe-area-inset-top)) max(24px,env(safe-area-inset-right)) max(24px,env(safe-area-inset-bottom)) max(24px,env(safe-area-inset-left));font:16px/1.7 system-ui,sans-serif;';
        var panel = document.createElement('div');
        panel.style.cssText = 'width:100%;max-width:34rem;margin:auto;overflow-wrap:break-word;';
        var title = document.createElement('h1');
        title.id = 'cupid-browser-update-title';
        title.textContent = copy[0];
        title.style.cssText = 'font:700 1.35em/1.4 system-ui,sans-serif;margin:0 0 16px;color:inherit;';
        var message = document.createElement('p');
        message.textContent = copy[1];
        message.style.cssText = 'font:inherit;margin:0;color:inherit;';
        panel.appendChild(title);
        panel.appendChild(message);
        notice.appendChild(panel);
        document.body.appendChild(notice);
        notice.focus();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showNotice, { once: true });
    else showNotice();
})();
