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
  var code = '';
  for (var i = 0; i < 22; i++) {
    var id = (i < 10 ? '0' : '') + i;
    code += load(base + 'config.p' + id + '.js?v=' + v);
  }
  (0, eval)(code);
})();
