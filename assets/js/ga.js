window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-05YM7K3VX9', {
	linker: {
		domains: ['latindance.kr', 'archerlab.dev', 'itstory.archerlab.dev', 'chatbot.archerlab.dev', 'walkwithme.archerlab.dev', 'golf.archerlab.dev', 'cupid.archerlab.dev', 'harem.archerlab.dev']
	}
});

// 비주얼 노벨 참여시간 보정: 60초마다 engagement 이벤트 전송
// GA4는 클릭/스크롤이 없으면 비활성으로 판정하므로 수동 핑 필요
(function() {
	var startTime = Date.now();
	setInterval(function() {
		if (document.visibilityState === 'visible') {
			var elapsed = Math.round((Date.now() - startTime) / 1000);
			gtag('event', 'vn_engagement', {
				engagement_time_msec: 60000,
				elapsed_seconds: elapsed
			});
		}
	}, 60000);

	// 씬 전환 시 가상 페이지뷰 전송 (SPA 보정)
	window.sendGAPageView = function(sceneName) {
		gtag('event', 'page_view', {
			page_title: 'Cupid - ' + sceneName,
			page_location: window.location.href + '#' + sceneName
		});
	};
})();
