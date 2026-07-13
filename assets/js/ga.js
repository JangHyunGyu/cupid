window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-05YM7K3VX9', {
	linker: {
		domains: ['latindance.kr', 'archerlab.dev', 'itstory.archerlab.dev', 'chatbot.archerlab.dev', 'walkwithme.archerlab.dev', 'golf.archerlab.dev', 'cupid.archerlab.dev', 'harem.archerlab.dev']
	}
});

const CUPID_GA_MILESTONE_KEY = 'cupid_ga_milestones';
let cupidGAGameEntrySent = false;

function getCupidGALanguage() {
	return document.documentElement.lang || 'ko';
}

function readCupidGAMilestones() {
	try {
		return new Set(JSON.parse(localStorage.getItem(CUPID_GA_MILESTONE_KEY) || '[]'));
	} catch (_) {
		return new Set();
	}
}

function markCupidGAMilestone(name) {
	const milestones = readCupidGAMilestones();
	if (milestones.has(name)) return false;
	milestones.add(name);
	try {
		localStorage.setItem(CUPID_GA_MILESTONE_KEY, JSON.stringify(Array.from(milestones)));
	} catch (_) {}
	return true;
}

window.sendGAEvent = function(eventName, params) {
	gtag('event', eventName, Object.assign({
		page_language: getCupidGALanguage()
	}, params || {}));
};

window.sendGAGameStart = function(mode) {
	if (cupidGAGameEntrySent) return;
	cupidGAGameEntrySent = true;
	const normalizedMode = mode === 'continue' ? 'continue' : (mode || 'new');
	if (normalizedMode !== 'continue') {
		try { localStorage.removeItem(CUPID_GA_MILESTONE_KEY); } catch (_) {}
	}
	window.sendGAEvent(normalizedMode === 'continue' ? 'game_continue' : 'game_start', {
		game_mode: normalizedMode
	});
};

window.sendGAGameMilestone = function(sceneId) {
	if (sceneId === 'morning2_start' && markCupidGAMilestone('day_2_reached')) {
		window.sendGAEvent('day_2_reached', { scene_id: sceneId });
	}
	if (sceneId === 'day5_credits' && markCupidGAMilestone('ending_reached')) {
		window.sendGAEvent('ending_reached', { ending_scene_id: sceneId });
	}
};

// SPA virtual page view tracking
window.sendGAPageView = function(sceneName) {
	gtag('event', 'page_view', {
		page_title: 'Cupid - ' + sceneName,
		page_location: window.location.href + '#' + sceneName
	});
};
