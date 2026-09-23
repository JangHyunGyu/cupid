(function () {
  function load(url) {
    var x = new XMLHttpRequest();
    x.open('GET', url, false);
    x.send(null);
    if (x.status < 200 || x.status >= 300) throw new Error('gallery part ' + url + ' ' + x.status);
    return x.responseText;
  }
  var src = (document.currentScript && document.currentScript.src) || '';
  var base = src ? src.replace(/[^/]+(?:\?.*)?$/, '') : 'assets/js/';
  var v = '2.9.261';
  var code = '';
  for (var i = 0; i < 16; i++) {
    var id = (i < 10 ? '0' : '') + i;
    code += load(base + 'gallery-freetalk.p' + id + '.js?v=' + v);
  }
  (0, eval)(code);
})();
