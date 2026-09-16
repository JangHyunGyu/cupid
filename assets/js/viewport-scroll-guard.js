/* Prevent visualViewport scroll handlers from fighting streaming auto-scroll (화면 떨림). */
(function () {
  var vv = window.visualViewport;
  if (!vv || vv.__archerScrollGuard) return;
  vv.__archerScrollGuard = true;
  var orig = vv.addEventListener.bind(vv);
  vv.addEventListener = function (type, listener, options) {
    if (type === 'scroll') return;
    return orig(type, listener, options);
  };
})();
