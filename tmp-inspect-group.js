const fs=require("fs");
const p="assets/js/modules/FreeTalkSystem.js";
let s=fs.readFileSync(p,"utf8");
const old=`            window.logCupidError?.(error, {
                source: 'cupid-group-freetalk',
                errorType: error?.retryExhausted ? 'freetalk_upstream_retries_exhausted' : /^HTTP\\s+\\d+/.test(error?.message || '') ? 'group_freetalk_http_error' : 'group_freetalk_request_failed',`;
// find the group catch logging block more reliably
const marker="source: 'cupid-group-freetalk'";
const idx=s.indexOf(marker);
if(idx<0){ console.error("marker not found"); process.exit(1); }
const start=s.lastIndexOf("window.logCupidError", idx);
const before=s.slice(Math.max(0,start-250), start);
console.log("---BEFORE---\n"+before);
console.log("---AT---\n"+s.slice(start, start+550));
