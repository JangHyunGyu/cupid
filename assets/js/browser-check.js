(function() {
    const userAgent = navigator.userAgent || "";
    const isKakao = /KAKAOTALK/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isWindows = /Windows/i.test(userAgent) || /Win32|Win64/i.test(navigator.platform);
    const isMac = /Macintosh/i.test(userAgent) || /MacIntel/i.test(navigator.platform);

    if (isKakao && !isWindows && !isMac) {
        if (isAndroid) {
            // Android Chrome 독립 브라우저가 아닌 웹뷰(인앱) 환경인지 확인
            const isWebView = /; wv/i.test(userAgent) || /Version\/[.0-9]*/i.test(userAgent);
            
            if (isWebView) {
                location.href = 'intent://' + location.href.replace(/https?:\/\//i, '') + '#Intent;scheme=https;package=com.android.chrome;end';
                
                setTimeout(function() {
                    document.body.style.backgroundColor = '#000';
                    document.body.innerHTML = '';
                    
                    var container = document.createElement('div');
                    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;padding:20px;box-sizing:border-box;font-family:sans-serif;';
                    
                    var icon = document.createElement('div');
                    icon.innerHTML = '🚀';
                    icon.style.fontSize = '48px';
                    icon.style.marginBottom = '20px';
                    
                    var text = document.createElement('p');
                    text.innerHTML = '<b>Chrome 브라우저</b>로 이동했습니다.<br>새로 열린 창에서 계속 이용해주세요.<br><br><span style="font-size:14px;color:#aaa;">이 창은 닫으셔도 됩니다.</span>';
                    text.style.lineHeight = '1.6';
                    
                    container.appendChild(icon);
                    container.appendChild(text);
                    document.body.appendChild(container);
                }, 100);
            }
        } else if (isIOS) {
            document.addEventListener('DOMContentLoaded', function() {
                var overlay = document.createElement('div');
                overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;text-align:center;font-size:18px;font-family:sans-serif;';
                
                var message = document.createElement('p');
                message.innerHTML = '이 게임은 Safari 브라우저에서<br>정상적으로 작동합니다.<br><br>우측 하단의 <b>[ 공유 ]</b> 버튼을 누르고<br><b>[Safari로 열기]</b>를 선택해주세요.';
                message.style.marginBottom = '20px';
                message.style.lineHeight = '1.5';
                
                var arrow = document.createElement('div');
                arrow.innerHTML = '↘';
                arrow.style.cssText = 'font-size:50px;position:absolute;bottom:20px;right:20px;animation:bounce 1s infinite;';
                
                var style = document.createElement('style');
                style.innerHTML = '@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }';
                document.head.appendChild(style);
                
                overlay.appendChild(message);
                overlay.appendChild(arrow);
                document.body.appendChild(overlay);
            });
        }
    }
})();
