(function () {
  var url =
    'https://cdn.jsdelivr.net/gh/JangHyunGyu/cupid@dc9928b76e0cd92c4940573ae7d316820ad31457/assets/js/modules/config.js';
  var x = new XMLHttpRequest();
  x.open('GET', url, false);
  x.send(null);
  if (x.status < 200 || x.status >= 300) {
    throw new Error('cupid config restore fetch failed: ' + x.status);
  }
  var code = String(x.responseText || '')
    .replace('const ASSET_VERSION = "2.9.260"', 'const ASSET_VERSION = "2.9.261"')
    .replace('Number(options.maxMessages) || 10)', 'Number(options.maxMessages) || 5)')
    .replace('Number(options.retainMessages) || 6)', 'Number(options.retainMessages) || 3)');
  (0, eval)(code);
})();
