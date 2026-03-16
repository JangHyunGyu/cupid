const fs = require('fs');
const path = require('path');

function addEntries(filePath, entries) {
    let data = {};
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    Object.assign(data, entries);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

function addScenarioEntries(filePath, entries) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Find the last }); and insert before it
    const lastClose = content.lastIndexOf('});');
    if (lastClose === -1) {
        console.error('Cannot find }); in ' + filePath);
        return;
    }
    // Build the entries string
    let lines = '';
    for (const [key, value] of Object.entries(entries)) {
        lines += `    "${key}": ${JSON.stringify(value, null, 8).replace(/\n/g, '\n    ')},\n`;
    }
    content = content.substring(0, lastClose) + lines + content.substring(lastClose);
    fs.writeFileSync(filePath, content);
}

// =====================================================================
// HELPER: Creates entries for all languages for a given file
// =====================================================================
function addAllLangs(filename, langData) {
    for (const [lang, entries] of Object.entries(langData)) {
        const filePath = path.join('assets/js/i18n', lang, filename);
        addEntries(filePath, entries);
    }
    console.log(`  i18n ${filename} done for ${Object.keys(langData).length} langs`);
}

// =====================================================================
// ES/JA/FR/DE for day1_3_afterschool.json
// (KO and EN already done)
// =====================================================================
console.log('--- Day 1 Afterschool i18n (ES/JA/FR/DE) ---');

const day1_3_es = {
    "after_hidden_homeroom_1": { "name": "Yo", "text": "*Estoy por irme a casa cuando \u2014 una voz detr\u00e1s de m\u00ed.*" },
    "after_hidden_homeroom_2": { "name": "Profesor", "text": "{name}. Espera un momento." },
    "after_hidden_homeroom_3": { "name": "Yo", "text": "*Es el profesor. Su corbata est\u00e1 m\u00e1s torcida que antes. Parece que el d\u00eda le pas\u00f3 factura.*" },
    "after_hidden_homeroom_4": { "name": "Profesor", "text": "No est\u00e1s en problemas. \u2014 Como eres nuevo, quiero saber. \u00bfC\u00f3mo te est\u00e1s adaptando?" },
    "after_hidden_homeroom_choice": { "name": "Yo", "text": "*Parece una pregunta de rutina, pero sus ojos me observan con genuina atenci\u00f3n.*", "choices": ["Estoy bien. Es una buena escuela.", "Sinceramente, ha sido un d\u00eda intenso."] },
    "after_homeroom_ok": { "name": "Profesor", "text": "Me alegro. \u2014 Si necesitas algo, pasa por la sala de profesores. Para eso estoy." },
    "after_homeroom_ok_2": { "name": "Yo", "text": "*Pens\u00e9 que era del tipo distante, pero resulta que se preocupa. \u2014 O quiz\u00e1s solo es parte del trabajo.*" },
    "after_homeroom_honest_1": { "name": "Profesor", "text": "Sentirse abrumado es normal. Ser\u00eda raro que estuvieras tranquilo en tu primer d\u00eda en una escuela nueva." },
    "after_homeroom_honest_2": { "name": "Yo", "text": "\u00bfUsted tambi\u00e9n se ha cambiado de escuela alguna vez, profe?" },
    "after_homeroom_honest_3": { "name": "Profesor", "text": "...Algo parecido. Me han lanzado a un lugar nuevo de la nada." },
    "after_homeroom_honest_4": { "name": "Yo", "text": "\u00bfUn profesor invit\u00e1ndole algo a un estudiante?" },
    "after_homeroom_honest_5": { "name": "Profesor", "text": "Inter\u00e9s profesional. \u2014 No deber\u00eda hacer esto, pero bueno." },
    "after_homeroom_honest_6": { "name": "Profesor", "text": "Si se pone dif\u00edcil, ven a la sala de profesores. Te puedo ofrecer un caf\u00e9 \u2014 ah, eres estudiante. Un jugo, entonces." },
    "after_homeroom_honest_7": { "name": "Profesor", "text": "Ah, {name}." },
    "after_homeroom_honest_8": { "name": "Yo", "text": "\u00bfS\u00ed?" },
    "after_homeroom_honest_9": { "name": "Profesor", "text": "Buen nombre. \u2014 Lo recordar\u00e9." },
    "after_homeroom_honest_10": { "name": "Yo", "text": "*Desaparece por el pasillo. Su corbata se balancea. \u2014 \"No deber\u00eda hacer esto\" parece ser su frase favorita.*" },
    "after_homeroom_freetalk": { "name": "Profesor", "text": "*Conversando con el profesor en el pasillo.*", "context": "D\u00eda 1 despu\u00e9s de clases. El profesor detuvo al estudiante nuevo para ver c\u00f3mo se adaptaba.", "personality": "El profesor esconde calidez detr\u00e1s de humor seco. Treinta y pocos. Su frase es \"No deber\u00eda hacer esto\". Fue aspirante a novelista." },
    "after_hidden_nurse_intro": { "name": "Yo", "text": "*Caminando por el pasillo cuando \u2014 me mareo un poco. Ser\u00e1n los nervios del primer d\u00eda.*" },
    "after_hidden_nurse_intro_2": { "name": "Yo", "text": "*Veo un letrero de \"Enfermer\u00eda\" en la pared. \u2014 \u00bfEntro o no?*" },
    "after_hidden_nurse_choice": { "name": "Yo", "text": "*Llevo desde la ma\u00f1ana sin parar de conocer gente.*", "choices": ["Entrar a la enfermer\u00eda", "Ir directamente a casa"] },
    "after_nurse_skip": { "name": "Yo", "text": "*Mejor me voy a casa. No ser\u00e1 nada.*" },
    "after_nurse_enter_1": { "name": "Yo", "text": "*Abro la puerta de la enfermer\u00eda. Un suave olor a desinfectante. Cortinas blancas, una cama, un peque\u00f1o escritorio.*" },
    "after_nurse_enter_2": { "name": "Enfermera", "text": "Oh, un paciente." },
    "after_nurse_enter_3": { "name": "Yo", "text": "Estoy un poco mareado." },
    "after_nurse_enter_4": { "name": "Enfermera", "text": "\u00bfEres el nuevo, verdad? Ya en la enfermer\u00eda el primer d\u00eda. Debes estar estresado~" },
    "after_nurse_enter_5": { "name": "Yo", "text": "*La enfermera se acerca. Su mano toca mi frente.*" },
    "after_nurse_enter_6": { "name": "Enfermera", "text": "No tienes fiebre~... Puede que tengas la presi\u00f3n baja." },
    "after_nurse_enter_7": { "name": "Enfermera", "text": "...No, solo quer\u00eda tocarte. \u2014 Es broma, es broma~ Ven, acu\u00e9state. Solo diez minutos." },
    "after_nurse_enter_8": { "name": "Enfermera", "text": "No hace falta que me hables de usted. Aqu\u00ed rel\u00e1jate. \u2014 Pi\u00e9nsalo como si fuera una enfermera, no una profesora." },
    "after_nurse_enter_9": { "name": "Yo", "text": "*Bebo agua y miro alrededor. Una peque\u00f1a maceta en la esquina.*" },
    "after_nurse_enter_10": { "name": "Enfermera", "text": "Romero. \u2014 Lo tengo desde que trabajaba en el hospital. Historia antigua~ Me gusta este lugar. Aqu\u00ed solo vienen con rasgu\u00f1os." },
    "after_nurse_enter_11": { "name": "Enfermera", "text": "Vuelve cuando quieras~ La puerta siempre est\u00e1 abierta. Pero no vengas tanto. Me preocupar\u00e9." },
    "after_nurse_enter_12": { "name": "Enfermera", "text": "{name}... Buen nombre. Lo recordar\u00e9." },
    "after_nurse_freetalk": { "name": "Enfermera", "text": "*Conversando con la enfermera en la enfermer\u00eda.*", "context": "D\u00eda 1 despu\u00e9s de clases. El estudiante nuevo se mare\u00f3 y visit\u00f3 la enfermer\u00eda.", "personality": "La enfermera es juguetona y coqueta pero esconde sentimientos reales detr\u00e1s de bromas. Ex enfermera de hospital que sufri\u00f3 burnout." }
};

const day1_3_ja = {
    "after_hidden_homeroom_1": { "name": "\u50d5", "text": "*\u5e30\u308d\u3046\u3068\u3057\u305f\u3089\u2014\u2014\u5f8c\u308d\u304b\u3089\u58f0\u304c\u3057\u305f\u3002*" },
    "after_hidden_homeroom_2": { "name": "\u62c5\u4efb\u5148\u751f", "text": "{name}\u3002\u3061\u3087\u3063\u3068\u6b8b\u3063\u3066\u3002" },
    "after_hidden_homeroom_3": { "name": "\u50d5", "text": "*\u62c5\u4efb\u5148\u751f\u3060\u3002\u30cd\u30af\u30bf\u30a4\u306f\u3055\u3063\u304d\u3088\u308a\u66f2\u304c\u3063\u3066\u3044\u308b\u3002\u4e00\u65e5\u6226\u3063\u305f\u5f8c\u307f\u305f\u3044\u3060\u3002*" },
    "after_hidden_homeroom_4": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u60aa\u3044\u3053\u3068\u306f\u3057\u3066\u306a\u3044\u3088\u3002\u2014\u2014\u8ee2\u6821\u751f\u3060\u304b\u3089\u3055\u3002\u6163\u308c\u305f\uff1f" },
    "after_hidden_homeroom_choice": { "name": "\u50d5", "text": "*\u7fa9\u52d9\u7684\u306a\u8cea\u554f\u306b\u898b\u3048\u308b\u306e\u306b\u3001\u76ee\u306f\u672c\u6c17\u3067\u3053\u3061\u3089\u3092\u898b\u3066\u3044\u308b\u3002*", "choices": ["\u5927\u4e08\u592b\u3067\u3059\u3002\u3044\u3044\u5b66\u6821\u3067\u3059\u306d\u3002", "\u6b63\u76f4\u3001\u3061\u3087\u3063\u3068\u5927\u5909\u3067\u3059\u3002"] },
    "after_homeroom_ok": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u305d\u3046\u304b\u3002\u826f\u304b\u3063\u305f\u3002\u2014\u2014\u4f55\u304b\u3042\u3063\u305f\u3089\u8077\u54e1\u5ba4\u306b\u6765\u3044\u3002\u5148\u751f\u306e\u4ed5\u4e8b\u3060\u304b\u3089\u3002" },
    "after_homeroom_ok_2": { "name": "\u50d5", "text": "*\u7121\u611f\u5fc3\u306a\u4eba\u304b\u3068\u601d\u3063\u305f\u3051\u3069\u3001\u610f\u5916\u3068\u6c17\u306b\u304b\u3051\u308b\u30bf\u30a4\u30d7\u306a\u306e\u304b\u3002\u2014\u2014\u307e\u3042\u3001\u62c5\u4efb\u3060\u304b\u3089\u304b\u3002*" },
    "after_homeroom_honest_1": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u5927\u5909\u306a\u306e\u304c\u666e\u901a\u3060\u3088\u3002\u65b0\u3057\u3044\u5b66\u6821\u306e\u521d\u65e5\u306b\u4f59\u88d5\u304c\u3042\u308b\u65b9\u304c\u304a\u304b\u3057\u3044\u3002" },
    "after_homeroom_honest_2": { "name": "\u50d5", "text": "\u5148\u751f\u3082\u8ee2\u6821\u306e\u7d4c\u9a13\u3042\u308a\u307e\u3059\u304b\uff1f" },
    "after_homeroom_honest_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "...\u4f3c\u305f\u3088\u3046\u306a\u3082\u306e\u304b\u306a\u3002\u3044\u304d\u306a\u308a\u65b0\u3057\u3044\u5834\u6240\u306b\u653e\u308a\u8fbc\u307e\u308c\u305f\u3053\u3068\u306f\u3042\u308b\u3002" },
    "after_homeroom_honest_4": { "name": "\u50d5", "text": "\u5148\u751f\u304c\u751f\u5f92\u306b\u98f2\u307f\u7269\u304a\u3054\u3063\u3066\u304f\u308c\u308b\u3093\u3067\u3059\u304b\uff1f" },
    "after_homeroom_honest_5": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u6559\u80b2\u7684\u914d\u616e\u3060\u3088\u3002\u2014\u2014\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u306a\u3002" },
    "after_homeroom_honest_6": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u3064\u3089\u304b\u3063\u305f\u3089\u8077\u54e1\u5ba4\u306b\u6765\u3044\u3002\u30b3\u30fc\u30d2\u30fc\u304f\u3089\u3044\u306f\u2014\u2014\u3042\u3001\u751f\u5f92\u3060\u304b\u3089\u30b8\u30e5\u30fc\u30b9\u304f\u3089\u3044\u306f\u51fa\u305b\u308b\u3002" },
    "after_homeroom_honest_7": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u3042\u3001{name}\u3002" },
    "after_homeroom_honest_8": { "name": "\u50d5", "text": "\u306f\u3044\uff1f" },
    "after_homeroom_honest_9": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u3044\u3044\u540d\u524d\u3060\u306d\u3002\u2014\u2014\u899a\u3048\u3066\u304a\u304f\u3088\u3002" },
    "after_homeroom_honest_10": { "name": "\u50d5", "text": "*\u62c5\u4efb\u304c\u5eca\u4e0b\u306e\u5148\u306b\u6d88\u3048\u308b\u3002\u30cd\u30af\u30bf\u30a4\u304c\u63fa\u308c\u3066\u3044\u308b\u3002\u2014\u2014\u300c\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u300d\u304c\u53e3\u7656\u3089\u3057\u3044\u3002*" },
    "after_homeroom_freetalk": { "name": "\u62c5\u4efb\u5148\u751f", "text": "*\u62c5\u4efb\u5148\u751f\u3068\u5eca\u4e0b\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 1\u653e\u8ab2\u5f8c\u3002\u62c5\u4efb\u304c\u8ee2\u6821\u751f\u306e\u9069\u5fdc\u3092\u78ba\u8a8d\u3002", "personality": "\u62c5\u4efb\u5148\u751f\u306f\u30c9\u30e9\u30a4\u306a\u30e6\u30fc\u30e2\u30a2\u306e\u88cf\u306b\u512a\u3057\u3055\u3092\u96a0\u3059\u300230\u4ee3\u524d\u534a\u3002\u53e3\u7656\u306f\u300c\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u300d\u3002\u5143\u5c0f\u8aac\u5bb6\u5fd7\u671b\u3002" },
    "after_hidden_nurse_intro": { "name": "\u50d5", "text": "*\u5eca\u4e0b\u3092\u6b69\u3044\u3066\u3044\u308b\u3068\u2014\u2014\u5c11\u3057\u30af\u30e9\u30c3\u3068\u3059\u308b\u3002\u521d\u65e5\u306e\u7dca\u5f35\u306e\u305b\u3044\u304b\u306a\u3002*" },
    "after_hidden_nurse_intro_2": { "name": "\u50d5", "text": "*\u5eca\u4e0b\u306b\u300c\u4fdd\u5065\u5ba4\u300d\u306e\u770b\u677f\u304c\u898b\u3048\u308b\u3002\u2014\u2014\u5165\u308d\u3046\u304b\u3001\u3069\u3046\u3057\u3088\u3046\u3002*" },
    "after_hidden_nurse_choice": { "name": "\u50d5", "text": "*\u671d\u304b\u3089\u4f11\u307f\u306a\u304f\u4eba\u306b\u4f1a\u3044\u7d9a\u3051\u305f\u304b\u3089\u306a\u3002*", "choices": ["\u4fdd\u5065\u5ba4\u306b\u5165\u308b", "\u305d\u306e\u307e\u307e\u5e30\u308b"] },
    "after_nurse_skip": { "name": "\u50d5", "text": "*\u305d\u306e\u307e\u307e\u5e30\u308b\u3053\u3068\u306b\u3057\u305f\u3002\u5927\u3057\u305f\u3053\u3068\u306a\u3044\u3060\u308d\u3046\u3002*" },
    "after_nurse_enter_1": { "name": "\u50d5", "text": "*\u4fdd\u5065\u5ba4\u306e\u30c9\u30a2\u3092\u958b\u3051\u308b\u3002\u6d88\u6bd2\u6db2\u306e\u5316\u3044\u304c\u307b\u306e\u304b\u306b\u9999\u308b\u3002\u767d\u3044\u30ab\u30fc\u30c6\u30f3\u3001\u767d\u3044\u30d9\u30c3\u30c9\u3001\u5c0f\u3055\u306a\u673a\u3002*" },
    "after_nurse_enter_2": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3042\u3089\u3001\u60a3\u8005\u3055\u3093\u3060\u3002" },
    "after_nurse_enter_3": { "name": "\u50d5", "text": "\u5c11\u3057\u3081\u307e\u3044\u304c\u3057\u3066\u2026\u2026" },
    "after_nurse_enter_4": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u8ee2\u6821\u751f\u3060\u3088\u306d\uff1f\u521d\u65e5\u304b\u3089\u4fdd\u5065\u5ba4\u306a\u3093\u3066\u3002\u30b9\u30c8\u30ec\u30b9\u305f\u307e\u3063\u3066\u308b\u306d\uff5e" },
    "after_nurse_enter_5": { "name": "\u50d5", "text": "*\u4fdd\u5065\u5148\u751f\u304c\u8fd1\u3065\u3044\u3066\u304f\u308b\u3002\u624b\u304c\u984d\u306b\u89e6\u308c\u308b\u3002*" },
    "after_nurse_enter_6": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u71b1\u306f\u306a\u3044\u306d\uff5e\u2026\u8840\u5727\u304c\u3061\u3087\u3063\u3068\u4f4e\u3044\u304b\u3082\u3002" },
    "after_nurse_enter_7": { "name": "\u4fdd\u5065\u5148\u751f", "text": "...\u3046\u305d\u3001\u305f\u3060\u89e6\u308a\u305f\u304b\u3063\u305f\u3060\u3051\u3002\u2014\u2014\u5197\u8ac7\u3060\u3088\u5197\u8ac7\uff5e\u3055\u3001\u6a2a\u306b\u306a\u3063\u3066\u300210\u5206\u3060\u3051\u4f11\u3082\u3046\u3002" },
    "after_nurse_enter_8": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u656c\u8a9e\u306f\u3044\u3089\u306a\u3044\u3088\u3002\u4fdd\u5065\u5ba4\u3067\u306f\u30ea\u30e9\u30c3\u30af\u30b9\u3057\u3066\u306d\u3002\u2014\u2014\u5148\u751f\u3058\u3083\u306a\u304f\u3066\u3001\u770b\u8b77\u5e2b\u306e\u304a\u59c9\u3055\u3093\u3060\u3068\u601d\u3063\u3066\u3002" },
    "after_nurse_enter_9": { "name": "\u50d5", "text": "*\u6c34\u3092\u98f2\u307f\u306a\u304c\u3089\u4fdd\u5065\u5ba4\u3092\u898b\u56de\u3059\u3002\u96a0\u306e\u5c0f\u3055\u306a\u690d\u6728\u9262\u3002*" },
    "after_nurse_enter_10": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u30ed\u30fc\u30ba\u30de\u30ea\u30fc\u3002\u2014\u2014\u75c5\u9662\u3067\u50cd\u3044\u3066\u305f\u9803\u304b\u3089\u80b2\u3066\u3066\u308b\u306e\u3002\u6614\u306e\u8a71\uff5e\u3053\u3053\u304c\u597d\u304d\u3002\u307f\u3093\u306a\u8efd\u3044\u50b7\u3060\u3051\u6301\u3063\u3066\u304f\u308b\u304b\u3089\u3002" },
    "after_nurse_enter_11": { "name": "\u4fdd\u5065\u5148\u751f", "text": "\u3044\u3064\u3067\u3082\u304a\u3044\u3067\uff5e\u30c9\u30a2\u306f\u3044\u3064\u3082\u958b\u3044\u3066\u308b\u304b\u3089\u3002\u3067\u3082\u3042\u307e\u308a\u983b\u7e41\u306b\u6765\u306a\u3044\u3067\u306d\u3002\u5148\u751f\u304c\u5fc3\u914d\u3057\u3061\u3083\u3046\u304b\u3089\u3002" },
    "after_nurse_enter_12": { "name": "\u4fdd\u5065\u5148\u751f", "text": "{name}...\u3044\u3044\u540d\u524d\u3060\u306d\u3002\u899a\u3048\u3066\u304a\u304f\u3088\u3002" },
    "after_nurse_freetalk": { "name": "\u4fdd\u5065\u5148\u751f", "text": "*\u4fdd\u5065\u5148\u751f\u3068\u4fdd\u5065\u5ba4\u3067\u4f1a\u8a71\u4e2d\u3002*", "context": "Day 1\u653e\u8ab2\u5f8c\u3002\u8ee2\u6821\u751f\u304c\u3081\u307e\u3044\u3067\u4fdd\u5065\u5ba4\u3092\u8a2a\u308c\u305f\u3002", "personality": "\u4fdd\u5065\u5148\u751f\u306f\u3044\u305f\u305a\u3089\u597d\u304d\u3060\u304c\u672c\u97f3\u3092\u5197\u8ac7\u306e\u88cf\u306b\u96a0\u3059\u5973\u6027\u3002\u5143\u75c5\u9662\u770b\u8b77\u5e2b\u3067\u30d0\u30fc\u30f3\u30a2\u30a6\u30c8\u7d4c\u9a13\u8005\u3002" }
};

const day1_3_fr = {
    "after_hidden_homeroom_1": { "name": "Moi", "text": "*Je m'appr\u00eate \u00e0 rentrer quand \u2014 une voix derri\u00e8re moi.*" },
    "after_hidden_homeroom_2": { "name": "Professeur Principal", "text": "{name}. Reste une seconde." },
    "after_hidden_homeroom_3": { "name": "Moi", "text": "*C'est le prof principal. Sa cravate est encore plus de travers qu'avant. On dirait qu'il a eu une rude journ\u00e9e.*" },
    "after_hidden_homeroom_4": { "name": "Professeur Principal", "text": "T'as rien fait de mal. \u2014 Comme t'es nouveau, je voulais savoir. Tu t'adaptes ?" },
    "after_hidden_homeroom_choice": { "name": "Moi", "text": "*\u00c7a ressemble \u00e0 une question de routine, mais ses yeux m'observent vraiment.*", "choices": ["\u00c7a va. C'est une bonne \u00e9cole.", "Franchement, c'est un peu intense."] },
    "after_homeroom_ok": { "name": "Professeur Principal", "text": "Tant mieux. \u2014 Si t'as besoin, passe \u00e0 la salle des profs. C'est mon boulot." },
    "after_homeroom_ok_2": { "name": "Moi", "text": "*Je le croyais distant, mais il fait attention en fait. \u2014 Ou c'est juste son travail.*" },
    "after_homeroom_honest_1": { "name": "Professeur Principal", "text": "Se sentir d\u00e9bord\u00e9, c'est normal. Ce serait bizarre d'\u00eatre zen le premier jour dans une nouvelle \u00e9cole." },
    "after_homeroom_honest_2": { "name": "Moi", "text": "Vous avez d\u00e9j\u00e0 chang\u00e9 d'\u00e9cole, monsieur ?" },
    "after_homeroom_honest_3": { "name": "Professeur Principal", "text": "...Quelque chose comme \u00e7a. J'ai \u00e9t\u00e9 parachut\u00e9 dans un nouveau lieu du jour au lendemain." },
    "after_homeroom_honest_4": { "name": "Moi", "text": "Un prof qui offre \u00e0 boire \u00e0 un \u00e9l\u00e8ve ?" },
    "after_homeroom_honest_5": { "name": "Professeur Principal", "text": "Int\u00e9r\u00eat p\u00e9dagogique. \u2014 Je devrais pas faire \u00e7a, mais bon." },
    "after_homeroom_honest_6": { "name": "Professeur Principal", "text": "Si \u00e7a devient dur, viens \u00e0 la salle des profs. Je peux t'offrir un caf\u00e9 \u2014 ah, t'es \u00e9l\u00e8ve. Un jus, alors." },
    "after_homeroom_honest_7": { "name": "Professeur Principal", "text": "Ah, {name}." },
    "after_homeroom_honest_8": { "name": "Moi", "text": "Oui ?" },
    "after_homeroom_honest_9": { "name": "Professeur Principal", "text": "Joli pr\u00e9nom. \u2014 Je m'en souviendrai." },
    "after_homeroom_honest_10": { "name": "Moi", "text": "*Il dispara\u00eet au bout du couloir. Sa cravate se balance. \u2014 \"Je devrais pas faire \u00e7a\" semble \u00eatre sa phrase f\u00e9tiche.*" },
    "after_homeroom_freetalk": { "name": "Professeur Principal", "text": "*En train de discuter avec le prof principal dans le couloir.*", "context": "Jour 1 apr\u00e8s les cours. Le prof principal a arr\u00eat\u00e9 le nouvel \u00e9l\u00e8ve pour prendre de ses nouvelles.", "personality": "Le prof principal cache sa gentillesse derri\u00e8re un humour pince-sans-rire. D\u00e9but de trentaine. Sa phrase f\u00e9tiche : \"Je devrais pas faire \u00e7a\". Ancien aspirant romancier." },
    "after_hidden_nurse_intro": { "name": "Moi", "text": "*En marchant dans le couloir \u2014 un l\u00e9ger vertige. Le stress du premier jour, s\u00fbrement.*" },
    "after_hidden_nurse_intro_2": { "name": "Moi", "text": "*Un panneau \"Infirmerie\" sur le mur. \u2014 J'y vais ou pas ?*" },
    "after_hidden_nurse_choice": { "name": "Moi", "text": "*Depuis ce matin, j'ai pas arr\u00eat\u00e9 de rencontrer des gens.*", "choices": ["Aller \u00e0 l'infirmerie", "Rentrer directement"] },
    "after_nurse_skip": { "name": "Moi", "text": "*Autant rentrer. C'est s\u00fbrement rien.*" },
    "after_nurse_enter_1": { "name": "Moi", "text": "*J'ouvre la porte de l'infirmerie. Une l\u00e9g\u00e8re odeur de d\u00e9sinfectant. Des rideaux blancs, un lit, un petit bureau.*" },
    "after_nurse_enter_2": { "name": "Infirmi\u00e8re", "text": "Oh, un patient." },
    "after_nurse_enter_3": { "name": "Moi", "text": "J'ai un peu le vertige." },
    "after_nurse_enter_4": { "name": "Infirmi\u00e8re", "text": "T'es le nouveau, non ? D\u00e9j\u00e0 \u00e0 l'infirmerie le premier jour. Tu dois \u00eatre stress\u00e9~" },
    "after_nurse_enter_5": { "name": "Moi", "text": "*L'infirmi\u00e8re s'approche. Sa main se pose sur mon front.*" },
    "after_nurse_enter_6": { "name": "Infirmi\u00e8re", "text": "Pas de fi\u00e8vre~... Peut-\u00eatre une tension un peu basse." },
    "after_nurse_enter_7": { "name": "Infirmi\u00e8re", "text": "...Non, j'avais juste envie de te toucher. \u2014 Je plaisante, je plaisante~ Allez, allonge-toi. Juste dix minutes." },
    "after_nurse_enter_8": { "name": "Infirmi\u00e8re", "text": "Pas besoin de me vouvoyer. Ici on est tranquille. \u2014 Pense \u00e0 moi comme une infirmi\u00e8re, pas une prof." },
    "after_nurse_enter_9": { "name": "Moi", "text": "*Je bois de l'eau en regardant autour. Un petit pot de fleurs dans le coin.*" },
    "after_nurse_enter_10": { "name": "Infirmi\u00e8re", "text": "Du romarin. \u2014 Je le cultive depuis mes ann\u00e9es \u00e0 l'h\u00f4pital. C'est du pass\u00e9~ J'aime bien ici. On ne vient qu'avec des petits bobos." },
    "after_nurse_enter_11": { "name": "Infirmi\u00e8re", "text": "Reviens quand tu veux~ La porte est toujours ouverte. Mais viens pas trop souvent. Tu vas me faire m'inqui\u00e9ter." },
    "after_nurse_enter_12": { "name": "Infirmi\u00e8re", "text": "{name}... Joli pr\u00e9nom. Je m'en souviendrai." },
    "after_nurse_freetalk": { "name": "Infirmi\u00e8re", "text": "*En train de discuter avec l'infirmi\u00e8re dans l'infirmerie.*", "context": "Jour 1 apr\u00e8s les cours. Le nouvel \u00e9l\u00e8ve a eu un vertige et a visit\u00e9 l'infirmerie.", "personality": "L'infirmi\u00e8re est joueuse et charmeuse mais cache ses vrais sentiments derri\u00e8re l'humour. Ancienne infirmi\u00e8re hospitali\u00e8re ayant fait un burnout." }
};

const day1_3_de = {
    "after_hidden_homeroom_1": { "name": "Ich", "text": "*Ich will gerade nach Hause gehen, als \u2014 eine Stimme von hinten.*" },
    "after_hidden_homeroom_2": { "name": "Klassenlehrer", "text": "{name}. Warte kurz." },
    "after_hidden_homeroom_3": { "name": "Ich", "text": "*Der Klassenlehrer. Seine Krawatte sitzt noch schiefer als vorhin. Sieht aus, als h\u00e4tte der Tag ihn geschafft.*" },
    "after_hidden_homeroom_4": { "name": "Klassenlehrer", "text": "Du hast nichts angestellt. \u2014 Du bist der Neue, deshalb frage ich. Wie l\u00e4uft's?" },
    "after_hidden_homeroom_choice": { "name": "Ich", "text": "*Klingt nach Routine, aber seine Augen schauen aufmerksam.*", "choices": ["Ganz gut. Nette Schule.", "Ehrlich gesagt, ziemlich \u00fcberw\u00e4ltigend."] },
    "after_homeroom_ok": { "name": "Klassenlehrer", "text": "Gut zu h\u00f6ren. \u2014 Wenn was ist, komm ins Lehrerzimmer. Daf\u00fcr bin ich da." },
    "after_homeroom_ok_2": { "name": "Ich", "text": "*Dachte, er w\u00e4re der distanzierte Typ, aber er k\u00fcmmert sich tats\u00e4chlich. \u2014 Oder es ist einfach sein Job.*" },
    "after_homeroom_honest_1": { "name": "Klassenlehrer", "text": "Sich \u00fcberfordert zu f\u00fchlen ist normal. Es w\u00e4re seltsam, wenn du am ersten Tag in einer neuen Schule tiefenentspannt w\u00e4rst." },
    "after_homeroom_honest_2": { "name": "Ich", "text": "Haben Sie auch mal die Schule gewechselt?" },
    "after_homeroom_honest_3": { "name": "Klassenlehrer", "text": "...So \u00e4hnlich. Ich wurde schon mal von heute auf morgen woanders hingeworfen." },
    "after_homeroom_honest_4": { "name": "Ich", "text": "Ein Lehrer, der einem Sch\u00fcler was ausgibt?" },
    "after_homeroom_honest_5": { "name": "Klassenlehrer", "text": "P\u00e4dagogisches Interesse. \u2014 Ich sollte das eigentlich nicht tun, aber naja." },
    "after_homeroom_honest_6": { "name": "Klassenlehrer", "text": "Wenn's hart wird, komm ins Lehrerzimmer. Ich kann dir einen Kaffee \u2014 ach, du bist Sch\u00fcler. Saft, dann." },
    "after_homeroom_honest_7": { "name": "Klassenlehrer", "text": "Ach, {name}." },
    "after_homeroom_honest_8": { "name": "Ich", "text": "Ja?" },
    "after_homeroom_honest_9": { "name": "Klassenlehrer", "text": "Sch\u00f6ner Name. \u2014 Den merke ich mir." },
    "after_homeroom_honest_10": { "name": "Ich", "text": "*Er verschwindet am Ende des Flurs. Seine Krawatte schwingt. \u2014 \"Ich sollte das eigentlich nicht tun\" scheint sein Lieblingssatz zu sein.*" },
    "after_homeroom_freetalk": { "name": "Klassenlehrer", "text": "*Im Gespr\u00e4ch mit dem Klassenlehrer auf dem Flur.*", "context": "Tag 1 nach der Schule. Der Klassenlehrer hat den neuen Sch\u00fcler angehalten, um nach ihm zu sehen.", "personality": "Der Klassenlehrer versteckt W\u00e4rme hinter trockenem Humor. Anfang drei\u00dfig. Sein Spruch: \"Ich sollte das eigentlich nicht tun.\" Ehemaliger angehender Romanautor." },
    "after_hidden_nurse_intro": { "name": "Ich", "text": "*Im Flur wird mir kurz schwindelig. Wohl die Anspannung vom ersten Tag.*" },
    "after_hidden_nurse_intro_2": { "name": "Ich", "text": "*An der Wand ein Schild: \"Krankenzimmer\". \u2014 Soll ich reingehen?*" },
    "after_hidden_nurse_choice": { "name": "Ich", "text": "*Seit heute Morgen habe ich ohne Pause Leute getroffen.*", "choices": ["Ins Krankenzimmer gehen", "Einfach nach Hause gehen"] },
    "after_nurse_skip": { "name": "Ich", "text": "*Ich gehe einfach nach Hause. Wird schon nichts sein.*" },
    "after_nurse_enter_1": { "name": "Ich", "text": "*Ich \u00f6ffne die T\u00fcr zum Krankenzimmer. Ein leichter Desinfektionsgeruch. Wei\u00dfe Vorh\u00e4nge, ein wei\u00dfes Bett, ein kleiner Schreibtisch.*" },
    "after_nurse_enter_2": { "name": "Schulkrankenschwester", "text": "Oh, ein Patient." },
    "after_nurse_enter_3": { "name": "Ich", "text": "Mir ist ein bisschen schwindelig." },
    "after_nurse_enter_4": { "name": "Schulkrankenschwester", "text": "Du bist der Neue, oder? Am ersten Tag schon im Krankenzimmer. Musst gestresst sein~" },
    "after_nurse_enter_5": { "name": "Ich", "text": "*Die Krankenschwester kommt n\u00e4her. Ihre Hand legt sich auf meine Stirn.*" },
    "after_nurse_enter_6": { "name": "Schulkrankenschwester", "text": "Kein Fieber~... Vielleicht ein bisschen niedriger Blutdruck." },
    "after_nurse_enter_7": { "name": "Schulkrankenschwester", "text": "...Nee, ich wollte dich einfach anfassen. \u2014 Spa\u00df, Spa\u00df~ Hier, leg dich hin. Nur zehn Minuten." },
    "after_nurse_enter_8": { "name": "Schulkrankenschwester", "text": "Du musst mich nicht siezen. Hier kannst du dich entspannen. \u2014 Denk an mich als Krankenschwester, nicht als Lehrerin." },
    "after_nurse_enter_9": { "name": "Ich", "text": "*Ich trinke Wasser und schaue mich um. Ein kleiner Blumentopf in der Ecke.*" },
    "after_nurse_enter_10": { "name": "Schulkrankenschwester", "text": "Rosmarin. \u2014 Den z\u00fcchte ich seit meiner Zeit im Krankenhaus. Alte Geschichte~ Ich mag es hier. Alle kommen nur mit kleinen Kratzern." },
    "after_nurse_enter_11": { "name": "Schulkrankenschwester", "text": "Komm jederzeit vorbei~ Die T\u00fcr ist immer offen. Aber komm nicht zu oft. Sonst mache ich mir Sorgen." },
    "after_nurse_enter_12": { "name": "Schulkrankenschwester", "text": "{name}... Sch\u00f6ner Name. Den merke ich mir." },
    "after_nurse_freetalk": { "name": "Schulkrankenschwester", "text": "*Im Gespr\u00e4ch mit der Schulkrankenschwester im Krankenzimmer.*", "context": "Tag 1 nach der Schule. Dem neuen Sch\u00fcler war schwindelig und er besuchte das Krankenzimmer.", "personality": "Die Schulkrankenschwester ist verspielt und charmant, versteckt aber echte Gef\u00fchle hinter Witzen. Ehemalige Krankenhausschwester mit Burnout-Erfahrung." }
};

addEntries('assets/js/i18n/es/day1_3_afterschool.json', day1_3_es);
addEntries('assets/js/i18n/ja/day1_3_afterschool.json', day1_3_ja);
addEntries('assets/js/i18n/fr/day1_3_afterschool.json', day1_3_fr);
addEntries('assets/js/i18n/de/day1_3_afterschool.json', day1_3_de);

console.log('Day 1 Afterschool i18n complete for ES/JA/FR/DE');

// =====================================================================
// Day 1 Night - hidden route night messages
// =====================================================================
console.log('\n--- Day 1 Night ---');

// Scenario: Insert hidden night messages BEFORE night_late_transition
// We need to modify the flow: night_start_3 branches should also check homeroom/nurse flags
// The hidden night messages appear between the main messages and the late messages

const day1_night_scenario = {
    "night_hidden_homeroom_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "condition": "homeroom_day1",
        "next": "night_hidden_homeroom_2"
    },
    "night_hidden_homeroom_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "condition": "homeroom_day1",
        "next": "night_hidden_nurse_check"
    },
    "night_hidden_nurse_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "nurse_day1", "next": "night_hidden_nurse_1" },
            { "next": "night_late_transition" }
        ]
    },
    "night_hidden_nurse_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "condition": "nurse_day1",
        "next": "night_hidden_nurse_2"
    },
    "night_hidden_nurse_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "condition": "nurse_day1",
        "next": "night_late_transition"
    }
};

// Modify the night_late_transition to branch to hidden messages first
// We need to insert a check node before night_late_transition
// Actually, let's modify the flow: after the main character messages, check for hidden route flags

// Read and modify day1_4_night.js
let night1Content = fs.readFileSync('assets/js/scenario/day1_4_night.js', 'utf8');

// Change night_late_transition to point to hidden route check first
// We'll add a node that checks for homeroom_day1 before night_late_transition
// Modify: after the heroine messages end (night_msg_seo_5, night_msg_yuna_3, night_msg_dain_4 all go to night_late_transition)
// We want them to go to night_hidden_check instead

night1Content = night1Content.replace(
    '"night_msg_seo_5": {\n        "background": "assets/images/background/room_my.png",\n        "character": null,\n        "night": true,\n        "next": "night_late_transition"\n    }',
    '"night_msg_seo_5": {\n        "background": "assets/images/background/room_my.png",\n        "character": null,\n        "night": true,\n        "next": "night_hidden_check"\n    }'
);
night1Content = night1Content.replace(
    '"night_msg_yuna_3": {\n        "background": "assets/images/background/room_my.png",\n        "character": null,\n        "night": true,\n        "next": "night_late_transition"\n    }',
    '"night_msg_yuna_3": {\n        "background": "assets/images/background/room_my.png",\n        "character": null,\n        "night": true,\n        "next": "night_hidden_check"\n    }'
);
night1Content = night1Content.replace(
    '"night_msg_dain_4": {\n        "background": "assets/images/background/room_my.png",\n        "character": null,\n        "night": true,\n        "next": "night_late_transition"\n    }',
    '"night_msg_dain_4": {\n        "background": "assets/images/background/room_my.png",\n        "character": null,\n        "night": true,\n        "next": "night_hidden_check"\n    }'
);

// Also the fallback in night_start_3 goes to night_late_transition, change to night_hidden_check
night1Content = night1Content.replace(
    '{\n                "next": "night_late_transition"\n            }\n        ]\n    },\n    "night_msg_seo_1"',
    '{\n                "next": "night_hidden_check"\n            }\n        ]\n    },\n    "night_msg_seo_1"'
);

// Add the hidden route nodes before the closing });
const hiddenNightNodes = `,
    // =========================================================================
    // HIDDEN ROUTE - Night messages
    // =========================================================================
    "night_hidden_check": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "homeroom_day1", "next": "night_hidden_homeroom_1" },
            { "condition": "nurse_day1", "next": "night_hidden_nurse_1" },
            { "next": "night_late_transition" }
        ]
    },
    "night_hidden_homeroom_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night_hidden_homeroom_2"
    },
    "night_hidden_homeroom_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "branches": [
            { "condition": "nurse_day1", "next": "night_hidden_nurse_1" },
            { "next": "night_late_transition" }
        ]
    },
    "night_hidden_nurse_1": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night_hidden_nurse_2"
    },
    "night_hidden_nurse_2": {
        "background": "assets/images/background/room_my.png",
        "character": null,
        "night": true,
        "next": "night_late_transition"
    }`;

night1Content = night1Content.replace(
    '    "night_yuna_freetalk": {',
    hiddenNightNodes + '\n,\n    "night_yuna_freetalk": {'
);

fs.writeFileSync('assets/js/scenario/day1_4_night.js', night1Content);
console.log('  day1_4_night.js scenario updated');

// Day 1 Night i18n (all 6 languages)
const night1_i18n = {
    ko: {
        "night_hidden_check": { "name": "{name}", "text": "*메신저 알림 사이에 \u2014 다른 알림이 보인다.*" },
        "night_hidden_homeroom_1": { "name": "{name}", "text": "*학교 공지 앱에 담임선생님이 올린 글이 보인다. '1학년 2반 공지: 내일 1교시 수학 준비물 챙기기. \u2014 그리고 {name}, 적응 잘하고 있으면 됐다.'*" },
        "night_hidden_homeroom_2": { "name": "{name}", "text": "*공지사항에 개인 메시지를? \u2014 이 사람, 공사 구분이 안 되는 건가. 아니면 일부러 이런 건가.*" },
        "night_hidden_nurse_1": { "name": "{name}", "text": "*학교 건강 관리 앱에 알림이 와 있다. '보건실 기록: {name} \u2014 어지러움 (경미). 메모: 내일도 증상 있으면 다시 와. 물 많이 마시고. \u2014 \u2665은 의료적 관심입니다 ^^'*" },
        "night_hidden_nurse_2": { "name": "{name}", "text": "*의료적 관심에 하트를 붙이는 보건선생님이라니. 건강 기록에 이모티콘 쓰는 사람은 처음 본다.*" }
    },
    en: {
        "night_hidden_check": { "name": "Me", "text": "*Between the messenger notifications \u2014 I notice something else.*" },
        "night_hidden_homeroom_1": { "name": "Me", "text": "*There's a post from the homeroom teacher on the school app. 'Class 1-2 Notice: Bring math supplies for 1st period tomorrow. \u2014 And {name}, as long as you're settling in okay, that's enough.'*" },
        "night_hidden_homeroom_2": { "name": "Me", "text": "*A personal message in a class announcement? \u2014 Does this guy not know the difference between work and personal, or is he doing it on purpose?*" },
        "night_hidden_nurse_1": { "name": "Me", "text": "*There's an alert on the school health app. 'Nurse's Office Record: {name} \u2014 Dizziness (mild). Note: Come back if symptoms persist tomorrow. Drink lots of water. \u2014 the \u2665 is strictly medical concern ^^'*" },
        "night_hidden_nurse_2": { "name": "Me", "text": "*A school nurse who puts hearts in medical records. Never seen anyone use emojis in health files before.*" }
    },
    es: {
        "night_hidden_check": { "name": "Yo", "text": "*Entre las notificaciones \u2014 veo algo m\u00e1s.*" },
        "night_hidden_homeroom_1": { "name": "Yo", "text": "*Hay un aviso del profesor en la app del colegio. 'Aviso clase 1-2: Traigan materiales de matem\u00e1ticas para la primera hora. \u2014 Y {name}, mientras te est\u00e9s adaptando bien, con eso basta.'*" },
        "night_hidden_homeroom_2": { "name": "Yo", "text": "*\u00bfUn mensaje personal en un aviso de clase? \u2014 Este hombre no distingue lo profesional de lo personal, o lo hace a prop\u00f3sito.*" },
        "night_hidden_nurse_1": { "name": "Yo", "text": "*Hay una alerta en la app de salud del colegio. 'Registro enfermer\u00eda: {name} \u2014 Mareo (leve). Nota: Vuelve si contin\u00faan los s\u00edntomas. Bebe mucha agua. \u2014 el \u2665 es inter\u00e9s m\u00e9dico ^^'*" },
        "night_hidden_nurse_2": { "name": "Yo", "text": "*Una enfermera que pone corazones en los registros m\u00e9dicos. Nunca hab\u00eda visto a alguien usar emojis en fichas de salud.*" }
    },
    ja: {
        "night_hidden_check": { "name": "\u50d5", "text": "*\u30e1\u30c3\u30bb\u30f3\u30b8\u30e3\u30fc\u306e\u901a\u77e5\u306e\u9593\u306b\u2014\u2014\u5225\u306e\u901a\u77e5\u304c\u898b\u3048\u308b\u3002*" },
        "night_hidden_homeroom_1": { "name": "\u50d5", "text": "*\u5b66\u6821\u30a2\u30d7\u30ea\u306b\u62c5\u4efb\u5148\u751f\u306e\u6295\u7a3f\u304c\u3042\u308b\u3002\u300e1\u5e742\u7d44\u9023\u7d61\uff1a\u660e\u65e51\u6642\u9650\u306e\u6570\u5b66\u306e\u6e96\u5099\u7269\u3092\u5fd8\u308c\u305a\u306b\u3002\u2014\u2014\u305d\u308c\u3068{name}\u3001\u3046\u307e\u304f\u3084\u3063\u3066\u308b\u306a\u3089\u305d\u308c\u3067\u3044\u3044\u3002\u300f*" },
        "night_hidden_homeroom_2": { "name": "\u50d5", "text": "*\u30af\u30e9\u30b9\u306e\u9023\u7d61\u306b\u500b\u4eba\u30e1\u30c3\u30bb\u30fc\u30b8\uff1f\u2014\u2014\u3053\u306e\u4eba\u3001\u516c\u79c1\u306e\u533a\u5225\u304c\u3064\u304b\u306a\u3044\u306e\u304b\u3001\u308f\u3056\u3068\u306a\u306e\u304b\u3002*" },
        "night_hidden_nurse_1": { "name": "\u50d5", "text": "*\u5b66\u6821\u306e\u5065\u5eb7\u7ba1\u7406\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u304c\u6765\u3066\u3044\u308b\u3002\u300e\u4fdd\u5065\u5ba4\u8a18\u9332: {name} \u2014 \u3081\u307e\u3044\uff08\u8efd\u5ea6\uff09\u3002\u30e1\u30e2: \u660e\u65e5\u3082\u75c7\u72b6\u304c\u3042\u308c\u3070\u307e\u305f\u6765\u3066\u3002\u6c34\u3092\u305f\u304f\u3055\u3093\u98f2\u3093\u3067\u306d\u3002\u2014\u2014\u2665\u306f\u533b\u7642\u7684\u95a2\u5fc3\u3067\u3059 ^^\u300f*" },
        "night_hidden_nurse_2": { "name": "\u50d5", "text": "*\u533b\u7642\u7684\u95a2\u5fc3\u306b\u30cf\u30fc\u30c8\u3092\u3064\u3051\u308b\u4fdd\u5065\u5148\u751f\u3068\u306f\u3002\u5065\u5eb7\u8a18\u9332\u306b\u7d75\u6587\u5b57\u3092\u4f7f\u3046\u4eba\u306f\u521d\u3081\u3066\u898b\u305f\u3002*" }
    },
    fr: {
        "night_hidden_check": { "name": "Moi", "text": "*Entre les notifications \u2014 j'en remarque d'autres.*" },
        "night_hidden_homeroom_1": { "name": "Moi", "text": "*Il y a un message du prof principal sur l'appli de l'\u00e9cole. 'Classe 1-2 : Apportez vos affaires de maths pour la 1re heure demain. \u2014 Et {name}, si tu t'adaptes bien, c'est l'essentiel.'*" },
        "night_hidden_homeroom_2": { "name": "Moi", "text": "*Un message personnel dans une annonce de classe ? \u2014 Ce type ne fait pas la diff\u00e9rence entre pro et perso, ou il le fait expr\u00e8s ?*" },
        "night_hidden_nurse_1": { "name": "Moi", "text": "*Une alerte sur l'appli sant\u00e9 de l'\u00e9cole. 'Dossier infirmerie : {name} \u2014 Vertiges (l\u00e9gers). Note : Reviens si les sympt\u00f4mes persistent. Bois beaucoup d'eau. \u2014 le \u2665 est un int\u00e9r\u00eat purement m\u00e9dical ^^'*" },
        "night_hidden_nurse_2": { "name": "Moi", "text": "*Une infirmi\u00e8re qui met des c\u0153urs dans les dossiers m\u00e9dicaux. C'est la premi\u00e8re fois que je vois des \u00e9mojis dans un dossier de sant\u00e9.*" }
    },
    de: {
        "night_hidden_check": { "name": "Ich", "text": "*Zwischen den Messenger-Benachrichtigungen \u2014 f\u00e4llt mir noch etwas auf.*" },
        "night_hidden_homeroom_1": { "name": "Ich", "text": "*In der Schul-App gibt es einen Post vom Klassenlehrer. 'Klasse 1-2: Mathematerialien f\u00fcr die 1. Stunde morgen mitbringen. \u2014 Und {name}, solange du dich gut einlebst, reicht das.'*" },
        "night_hidden_homeroom_2": { "name": "Ich", "text": "*Eine pers\u00f6nliche Nachricht in einer Klassenank\u00fcndigung? \u2014 Kann der Mann nicht zwischen Beruf und Privat unterscheiden, oder macht er das absichtlich?*" },
        "night_hidden_nurse_1": { "name": "Ich", "text": "*Eine Benachrichtigung in der Schul-Gesundheits-App. 'Krankenakte: {name} \u2014 Schwindel (leicht). Notiz: Komm morgen wieder, falls die Symptome anhalten. Trink viel Wasser. \u2014 das \u2665 ist rein medizinisches Interesse ^^'*" },
        "night_hidden_nurse_2": { "name": "Ich", "text": "*Eine Schulkrankenschwester, die Herzchen in Krankenakten setzt. Noch nie jemanden gesehen, der Emojis in Gesundheitsakten benutzt.*" }
    }
};

for (const [lang, entries] of Object.entries(night1_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day1_4_night.json`, entries);
}
console.log('  day1_4_night i18n complete for all langs');

// =====================================================================
// Day 2 Morning - 담임 교무실 호출
// =====================================================================
console.log('\n--- Day 2 Morning ---');

// Modify day2_1_morning.js: Insert hidden homeroom scene after morning2_break_1
// The scene goes: morning2_dain_claim_6 -> morning2_break_1 -> morning2_seo_dust_1
// We want to insert: morning2_break_1 -> hidden_homeroom_d2_check -> (if homeroom_day1) hidden scenes -> morning2_seo_dust_1

let morning2Content = fs.readFileSync('assets/js/scenario/day2_1_morning.js', 'utf8');

// Change morning2_break_1's next from morning2_seo_dust_1 to hidden check
morning2Content = morning2Content.replace(
    '"morning2_break_1": {\n        "character": null,\n        "background": "assets/images/background/school_hallway.png",\n        "next": "morning2_seo_dust_1"\n    }',
    '"morning2_break_1": {\n        "character": null,\n        "background": "assets/images/background/school_hallway.png",\n        "branches": [\n            { "condition": "homeroom_day1", "next": "hidden_homeroom_d2_1" },\n            { "next": "morning2_seo_dust_1" }\n        ]\n    }'
);

// Add hidden homeroom day2 nodes before the closing });
const homeroom_d2_nodes = `
    // =========================================================================
    // HIDDEN ROUTE - Day 2 담임 교무실 호출
    // =========================================================================
    "hidden_homeroom_d2_1": {
        "background": "assets/images/background/school_hallway.png",
        "character": "assets/images/characters/teacher_normal.png",
        "condition": "homeroom_day1",
        "next": "hidden_homeroom_d2_2"
    },
    "hidden_homeroom_d2_2": {
        "background": "assets/images/background/school_hallway.png",
        "character": null,
        "next": "hidden_homeroom_d2_3"
    },
    "hidden_homeroom_d2_3": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_4"
    },
    "hidden_homeroom_d2_4": {
        "background": "assets/images/background/teacher_office.png",
        "character": null,
        "next": "hidden_homeroom_d2_5"
    },
    "hidden_homeroom_d2_5": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_6"
    },
    "hidden_homeroom_d2_6": {
        "background": "assets/images/background/teacher_office.png",
        "character": null,
        "next": "hidden_homeroom_d2_7"
    },
    "hidden_homeroom_d2_7": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_8"
    },
    "hidden_homeroom_d2_8": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_9"
    },
    "hidden_homeroom_d2_9": {
        "background": "assets/images/background/teacher_office.png",
        "character": null,
        "next": "hidden_homeroom_d2_10"
    },
    "hidden_homeroom_d2_10": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_11"
    },
    "hidden_homeroom_d2_11": {
        "background": "assets/images/background/teacher_office.png",
        "character": "assets/images/characters/teacher_normal.png",
        "next": "hidden_homeroom_d2_12"
    },
    "hidden_homeroom_d2_12": {
        "background": "assets/images/background/teacher_office.png",
        "character": null,
        "setFlag": "homeroom_day2",
        "next": "morning2_seo_dust_1"
    },`;

morning2Content = morning2Content.replace('});', homeroom_d2_nodes + '\n});');
fs.writeFileSync('assets/js/scenario/day2_1_morning.js', morning2Content);
console.log('  day2_1_morning.js scenario updated');

// Day 2 Morning i18n
const morning2_hidden_i18n = {
    ko: {
        "hidden_homeroom_d2_1": { "name": "담임선생님", "text": "아, {name}. 잠깐 교무실로." },
        "hidden_homeroom_d2_2": { "name": "{name}", "text": "*행정적인 거라고 한다. 이 사람은 자기 관심을 항상 업무로 포장한다.*" },
        "hidden_homeroom_d2_3": { "name": "담임선생님", "text": "전 학교 성적표 봤는데, 국어가 좋았네. 읽는 거 좋아해?" },
        "hidden_homeroom_d2_4": { "name": "{name}", "text": "읽는 건 좋아해요. — 쓰는 건 잘 모르겠어요." },
        "hidden_homeroom_d2_5": { "name": "담임선생님", "text": "...그래. 뭐, 그냥 물어본 거야." },
        "hidden_homeroom_d2_6": { "name": "{name}", "text": "*서랍. 방금 뭔가 의식하지 않았나? — 살짝 열린 서랍 사이로 종이뭉치가 보인다. 원고지 같은 것.*" },
        "hidden_homeroom_d2_7": { "name": "담임선생님", "text": "적응은 어때? 어제보다 나아?" },
        "hidden_homeroom_d2_8": { "name": "담임선생님", "text": "다인이가 시끄럽지? — 원래 저래. 근데 나쁜 애는 아니야. 걱정이 되는 쪽이지." },
        "hidden_homeroom_d2_9": { "name": "{name}", "text": "감사합니다, 선생님." },
        "hidden_homeroom_d2_10": { "name": "담임선생님", "text": "뭐, 선생님이 학생 걱정하는 건 당연한 거니까. 업무야, 업무." },
        "hidden_homeroom_d2_11": { "name": "담임선생님", "text": "...선생님이 이러면 안 되는데. 전학생이라고 특별 대우 하면 다른 애들이 뭐라 하지." },
        "hidden_homeroom_d2_12": { "name": "{name}", "text": "*교무실을 나서는데 — 서랍에서 봤던 종이뭉치가 자꾸 신경 쓰인다.*" }
    },
    en: {
        "hidden_homeroom_d2_1": { "name": "Homeroom Teacher", "text": "Oh, {name}. Come to the faculty office for a sec." },
        "hidden_homeroom_d2_2": { "name": "Me", "text": "*He says it's administrative. This guy always wraps his interest in official business.*" },
        "hidden_homeroom_d2_3": { "name": "Homeroom Teacher", "text": "Looked at your old transcript. Your Korean grades were solid. You like reading?" },
        "hidden_homeroom_d2_4": { "name": "Me", "text": "I like reading. — Writing, not so much." },
        "hidden_homeroom_d2_5": { "name": "Homeroom Teacher", "text": "...Right. Just asking." },
        "hidden_homeroom_d2_6": { "name": "Me", "text": "*The drawer. Did he just glance at it? — Through the crack I can see a stack of papers. Looks like manuscript pages.*" },
        "hidden_homeroom_d2_7": { "name": "Homeroom Teacher", "text": "How's the adjustment? Better than yesterday?" },
        "hidden_homeroom_d2_8": { "name": "Homeroom Teacher", "text": "Dain's loud, right? — She's always like that. Not a bad kid though. More the type you worry about." },
        "hidden_homeroom_d2_9": { "name": "Me", "text": "Thanks, sir." },
        "hidden_homeroom_d2_10": { "name": "Homeroom Teacher", "text": "Well, teachers worrying about students is just part of the job. Strictly professional." },
        "hidden_homeroom_d2_11": { "name": "Homeroom Teacher", "text": "...I really shouldn't be doing this. Giving the transfer student special treatment — the others would talk." },
        "hidden_homeroom_d2_12": { "name": "Me", "text": "*Leaving the faculty office — I can't stop thinking about those papers in the drawer.*" }
    },
    es: {
        "hidden_homeroom_d2_1": { "name": "Profesor", "text": "Ah, {name}. Ven a la sala de profesores un momento." },
        "hidden_homeroom_d2_2": { "name": "Yo", "text": "*Dice que es un tr\u00e1mite. Este hombre siempre disfraza su inter\u00e9s de asuntos oficiales.*" },
        "hidden_homeroom_d2_3": { "name": "Profesor", "text": "Vi tu expediente acad\u00e9mico. Ten\u00edas buenas notas en lengua. \u00bfTe gusta leer?" },
        "hidden_homeroom_d2_4": { "name": "Yo", "text": "Leer s\u00ed. — Escribir, no tanto." },
        "hidden_homeroom_d2_5": { "name": "Profesor", "text": "...Ya. Solo preguntaba." },
        "hidden_homeroom_d2_6": { "name": "Yo", "text": "*El caj\u00f3n. \u00bfAcaba de mirarlo? — Por la rendija se ve un mont\u00f3n de papeles. Parece un manuscrito.*" },
        "hidden_homeroom_d2_7": { "name": "Profesor", "text": "\u00bfC\u00f3mo va la adaptaci\u00f3n? \u00bfMejor que ayer?" },
        "hidden_homeroom_d2_8": { "name": "Profesor", "text": "Dain es ruidosa, \u00bfno? — Siempre es as\u00ed. Pero no es mala chica. M\u00e1s bien del tipo que preocupa." },
        "hidden_homeroom_d2_9": { "name": "Yo", "text": "Gracias, profe." },
        "hidden_homeroom_d2_10": { "name": "Profesor", "text": "Bueno, que un profesor se preocupe por sus alumnos es normal. Es trabajo, trabajo." },
        "hidden_homeroom_d2_11": { "name": "Profesor", "text": "...No deber\u00eda hacer esto. Si le doy trato especial al nuevo, los dem\u00e1s hablar\u00e1n." },
        "hidden_homeroom_d2_12": { "name": "Yo", "text": "*Salgo de la sala de profesores — no puedo dejar de pensar en esos papeles del caj\u00f3n.*" }
    },
    ja: {
        "hidden_homeroom_d2_1": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u3042\u3001{name}\u3002\u3061\u3087\u3063\u3068\u8077\u54e1\u5ba4\u306b\u3002" },
        "hidden_homeroom_d2_2": { "name": "\u50d5", "text": "*\u884c\u653f\u7684\u306a\u3053\u3068\u3060\u3068\u8a00\u3046\u3002\u3053\u306e\u4eba\u306f\u81ea\u5206\u306e\u95a2\u5fc3\u3092\u3044\u3064\u3082\u696d\u52d9\u3067\u5305\u3080\u3002*" },
        "hidden_homeroom_d2_3": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u524d\u306e\u5b66\u6821\u306e\u6210\u7e3e\u898b\u305f\u3093\u3060\u3051\u3069\u3001\u56fd\u8a9e\u304c\u826f\u304b\u3063\u305f\u306d\u3002\u8aad\u3080\u306e\u304c\u597d\u304d\uff1f" },
        "hidden_homeroom_d2_4": { "name": "\u50d5", "text": "\u8aad\u3080\u306e\u306f\u597d\u304d\u3067\u3059\u3002\u2014\u2014\u66f8\u304f\u306e\u306f\u3088\u304f\u308f\u304b\u3089\u306a\u3044\u3067\u3059\u3002" },
        "hidden_homeroom_d2_5": { "name": "\u62c5\u4efb\u5148\u751f", "text": "...\u305d\u3046\u304b\u3002\u307e\u3042\u3001\u305f\u3060\u805e\u3044\u3066\u307f\u305f\u3060\u3051\u3060\u3002" },
        "hidden_homeroom_d2_6": { "name": "\u50d5", "text": "*\u5f15\u304d\u51fa\u3057\u3002\u3055\u3063\u304d\u4f55\u304b\u610f\u8b58\u3057\u306a\u304b\u3063\u305f\u304b\uff1f\u2014\u2014\u5c11\u3057\u958b\u3044\u305f\u5f15\u304d\u51fa\u3057\u306e\u9699\u9593\u304b\u3089\u7d19\u306e\u675f\u304c\u898b\u3048\u308b\u3002\u539f\u7a3f\u7528\u7d19\u306e\u3088\u3046\u306a\u3082\u306e\u3002*" },
        "hidden_homeroom_d2_7": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u9069\u5fdc\u306f\u3069\u3046\uff1f\u6628\u65e5\u3088\u308a\u826f\u304f\u306a\u3063\u305f\uff1f" },
        "hidden_homeroom_d2_8": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u30c0\u30a4\u30f3\u306f\u3046\u308b\u3055\u3044\u3060\u308d\uff1f\u2014\u2014\u3042\u308c\u304c\u666e\u901a\u306a\u3093\u3060\u3002\u3067\u3082\u60aa\u3044\u5b50\u3058\u3083\u306a\u3044\u3002\u3069\u3061\u3089\u304b\u3068\u3044\u3046\u3068\u5fc3\u914d\u306a\u30bf\u30a4\u30d7\u3060\u3002" },
        "hidden_homeroom_d2_9": { "name": "\u50d5", "text": "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3001\u5148\u751f\u3002" },
        "hidden_homeroom_d2_10": { "name": "\u62c5\u4efb\u5148\u751f", "text": "\u307e\u3042\u3001\u5148\u751f\u304c\u751f\u5f92\u3092\u5fc3\u914d\u3059\u308b\u306e\u306f\u5f53\u305f\u308a\u524d\u3060\u304b\u3089\u3002\u696d\u52d9\u3060\u3088\u3001\u696d\u52d9\u3002" },
        "hidden_homeroom_d2_11": { "name": "\u62c5\u4efb\u5148\u751f", "text": "...\u5148\u751f\u304c\u3053\u3093\u306a\u3053\u3068\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u3093\u3060\u3051\u3069\u3002\u8ee2\u6821\u751f\u3060\u304b\u3089\u3063\u3066\u7279\u5225\u6271\u3044\u3057\u305f\u3089\u4ed6\u306e\u5b50\u304c\u306a\u3093\u3066\u8a00\u3046\u304b\u3002" },
        "hidden_homeroom_d2_12": { "name": "\u50d5", "text": "*\u8077\u54e1\u5ba4\u3092\u51fa\u308b\u2014\u2014\u5f15\u304d\u51fa\u3057\u306e\u4e2d\u306e\u7d19\u306e\u675f\u304c\u6c17\u306b\u306a\u3063\u3066\u4ef5\u65b9\u306a\u3044\u3002*" }
    },
    fr: {
        "hidden_homeroom_d2_1": { "name": "Professeur Principal", "text": "Ah, {name}. Viens \u00e0 la salle des profs une minute." },
        "hidden_homeroom_d2_2": { "name": "Moi", "text": "*Il dit que c'est administratif. Ce type emballe toujours son int\u00e9r\u00eat dans du professionnel.*" },
        "hidden_homeroom_d2_3": { "name": "Professeur Principal", "text": "J'ai vu ton ancien bulletin. T'avais de bonnes notes en fran\u00e7ais. T'aimes lire ?" },
        "hidden_homeroom_d2_4": { "name": "Moi", "text": "J'aime lire. \u2014 \u00c9crire, pas trop." },
        "hidden_homeroom_d2_5": { "name": "Professeur Principal", "text": "...D'accord. Je demandais, c'est tout." },
        "hidden_homeroom_d2_6": { "name": "Moi", "text": "*Le tiroir. Il vient de le regarder ? \u2014 Par l'ouverture, j'aper\u00e7ois une liasse de papiers. On dirait des pages de manuscrit.*" },
        "hidden_homeroom_d2_7": { "name": "Professeur Principal", "text": "L'adaptation, \u00e7a va ? Mieux qu'hier ?" },
        "hidden_homeroom_d2_8": { "name": "Professeur Principal", "text": "Dain est bruyante, non ? \u2014 Elle est toujours comme \u00e7a. Mais c'est pas une mauvaise gamine. Plut\u00f4t le genre qu'on s'inqui\u00e8te." },
        "hidden_homeroom_d2_9": { "name": "Moi", "text": "Merci, monsieur." },
        "hidden_homeroom_d2_10": { "name": "Professeur Principal", "text": "Bon, un prof qui s'inqui\u00e8te pour ses \u00e9l\u00e8ves, c'est normal. C'est le boulot." },
        "hidden_homeroom_d2_11": { "name": "Professeur Principal", "text": "...Je devrais pas faire \u00e7a. Si je fais du favoritisme avec le nouveau, les autres vont jaser." },
        "hidden_homeroom_d2_12": { "name": "Moi", "text": "*En quittant la salle des profs \u2014 ces papiers dans le tiroir me trottent dans la t\u00eate.*" }
    },
    de: {
        "hidden_homeroom_d2_1": { "name": "Klassenlehrer", "text": "Ach, {name}. Komm mal kurz ins Lehrerzimmer." },
        "hidden_homeroom_d2_2": { "name": "Ich", "text": "*Er sagt, es sei Verwaltungskram. Der Mann verpackt sein Interesse immer als dienstlich.*" },
        "hidden_homeroom_d2_3": { "name": "Klassenlehrer", "text": "Hab dein altes Zeugnis gesehen. Deine Deutschnoten waren gut. Liest du gerne?" },
        "hidden_homeroom_d2_4": { "name": "Ich", "text": "Lesen ja. \u2014 Schreiben eher nicht." },
        "hidden_homeroom_d2_5": { "name": "Klassenlehrer", "text": "...Okay. War nur eine Frage." },
        "hidden_homeroom_d2_6": { "name": "Ich", "text": "*Die Schublade. Hat er gerade hingeschaut? \u2014 Durch den Spalt sehe ich einen Stapel Papiere. Sieht aus wie Manuskriptseiten.*" },
        "hidden_homeroom_d2_7": { "name": "Klassenlehrer", "text": "Wie l\u00e4uft die Eingew\u00f6hnung? Besser als gestern?" },
        "hidden_homeroom_d2_8": { "name": "Klassenlehrer", "text": "Dain ist laut, oder? \u2014 Die ist immer so. Aber kein schlechtes M\u00e4dchen. Eher der Typ, um den man sich Sorgen macht." },
        "hidden_homeroom_d2_9": { "name": "Ich", "text": "Danke, Herr Lehrer." },
        "hidden_homeroom_d2_10": { "name": "Klassenlehrer", "text": "Naja, dass ein Lehrer sich um Sch\u00fcler sorgt, ist selbstverst\u00e4ndlich. Dienstlich." },
        "hidden_homeroom_d2_11": { "name": "Klassenlehrer", "text": "...Ich sollte das eigentlich nicht tun. Wenn ich den Neuen bevorzuge, reden die anderen." },
        "hidden_homeroom_d2_12": { "name": "Ich", "text": "*Ich verlasse das Lehrerzimmer \u2014 die Papiere in der Schublade lassen mir keine Ruhe.*" }
    }
};

for (const [lang, entries] of Object.entries(morning2_hidden_i18n)) {
    addEntries(`assets/js/i18n/${lang}/day2_1_morning.json`, entries);
}
console.log('  day2_1_morning i18n complete for all langs');

console.log('\n=== Phase 1 complete (Day1 afterschool/night + Day2 morning) ===');
