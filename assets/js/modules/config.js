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
  var code =
    load(base + 'config.part1.js?v=2.9.261') +
    load(base + 'config.part2.js?v=2.9.261');
  (0, eval)(code);
})();
