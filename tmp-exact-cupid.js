const fs=require("fs");
const s=fs.readFileSync("assets/js/modules/FreeTalkSystem.js","utf8");
const i=s.indexOf("source: 'cupid-group-freetalk'");
const logStart=s.lastIndexOf("window.logCupidError", i);
console.log(JSON.stringify(s.slice(logStart-180, logStart+700)));
console.log("CRLF", s.includes("\r\n"));
