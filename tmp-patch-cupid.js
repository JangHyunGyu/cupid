const fs = require("fs");
const file = "assets/js/modules/FreeTalkSystem.js";
let s = fs.readFileSync(file, "utf8");
const find = `            if (!ownsCurrentContext || error?.isStaleTurn || error?.reason === 'STALE_TURN') return;
            window.logCupidError?.(error, {
                source: 'cupid-group-freetalk',
                errorType: error?.retryExhausted ? 'freetalk_upstream_retries_exhausted' : /^HTTP\\s+\\d+/.test(error?.message || '') ? 'group_freetalk_http_error' : 'group_freetalk_request_failed',`;
const repl = `            if (!ownsCurrentContext || error?.isStaleTurn || error?.reason === 'STALE_TURN') return;
            const isOfflineTransportFailure = navigator.onLine === false;
            const isTransientTransportFailure = error instanceof TypeError
                || /^(?:Failed to fetch|Load failed|NetworkError)$/i.test(error?.message || '');
            if (typeof window.logCupidError === 'function' && !isOfflineTransportFailure && (!isTransientTransportFailure || error?.retryExhausted)) {
            window.logCupidError(error, {
                source: 'cupid-group-freetalk',
                errorType: error?.retryExhausted ? 'freetalk_upstream_retries_exhausted' : /^HTTP\\s+\\d+/.test(error?.message || '') ? 'group_freetalk_http_error' : 'group_freetalk_request_failed',`;
if (!s.includes(find)) {
  // try without exact whitespace - locate marker
  const marker = "source: 'cupid-group-freetalk'";
  const idx = s.indexOf(marker);
  if (idx < 0) throw new Error("group marker missing");
  const logStart = s.lastIndexOf("window.logCupidError", idx);
  const before = s.slice(logStart - 200, logStart);
  console.log("BEFORE BLOCK:\n", before);
  throw new Error("exact find failed");
}
s = s.replace(find, repl);
// close the new if — find the end of the logCupidError call after this source
const afterMarker = s.indexOf("source: 'cupid-group-freetalk'");
const callEnd = s.indexOf("});", afterMarker);
if (callEnd < 0) throw new Error("call end missing");
// The original was window.logCupidError?.(...);  we changed to if (...) { window.logCupidError(...);
// Need to close the if after the call's });
const insertAt = callEnd + 3;
if (!s.slice(insertAt, insertAt + 20).includes("\n")) {
  // ok
}
s = s.slice(0, insertAt) + "\n            }" + s.slice(insertAt);
fs.writeFileSync(file, s, "utf8");
console.log("cupid group offline guard patched");
