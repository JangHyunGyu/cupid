window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-05YM7K3VX9', {
	linker: {
		domains: ['latindance.kr', 'archerlab.dev', 'itstory.archerlab.dev', 'chatbot.archerlab.dev', 'walkwithme.archerlab.dev', 'golf.archerlab.dev', 'cupid.archerlab.dev', 'harem.archerlab.dev']
	}
});

// SPA virtual page view tracking
window.sendGAPageView = function(sceneName) {
	gtag('event', 'page_view', {
		page_title: 'Cupid - ' + sceneName,
		page_location: window.location.href + '#' + sceneName
	});
};
