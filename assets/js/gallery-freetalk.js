(function () {
  var url =
    'https://cdn.jsdelivr.net/gh/JangHyunGyu/cupid@dc9928b76e0cd92c4940573ae7d316820ad31457/assets/js/gallery-freetalk.js';
  var x = new XMLHttpRequest();
  x.open('GET', url, false);
  x.send(null);
  if (x.status < 200 || x.status >= 300) {
    throw new Error('gallery-freetalk restore fetch failed: ' + x.status);
  }
  var code = String(x.responseText || '')
    .replace('this.HISTORY_WINDOW = 10;', 'this.HISTORY_WINDOW = 5;')
    .replace('retainMessages: 6,', 'retainMessages: 3,');\n  (0, eval)(code);
})();
