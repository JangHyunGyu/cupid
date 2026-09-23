(function () {
  function load(url) {
    var x = new XMLHttpRequest();
    x.open('GET', url, false);
    x.send(null);
    if (x.status < 200 || x.status >= 300) {
      throw new Error('cupid config part load failed: ' + url + ' status ' + x.status);
    }
    return x.responseText;
  }
  var scriptSrc = (document.currentScript && document.currentScript.src) || '';
  var base = scriptSrc ? scriptSrc.replace(/[^/]+(?:\?.*)?$/, '') : 'assets/js/modules/';
  var v = '2.9.261';
  var code =
    load(base + 'config.part0.js?v=' + v) +
    load(base + 'config.part1.js?v=' + v) +
    load(base + 'config.part2.js?v=' + v) +
    load(base + 'config.part3.js?v=' + v);
  (0, eval)(code);
})();
