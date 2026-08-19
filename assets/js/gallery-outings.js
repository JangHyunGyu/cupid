/**
 * Gallery outings — PERFECT-ending reward only.
 * Place picks and birthday beats stay after the cache boundary.
 */
(function exposeCupidGalleryOutings(global) {
    'use strict';

    const BIRTHDAYS = Object.freeze({
        seyoun: { month: 3, day: 14 },
        yuna: { month: 7, day: 22 },
        dain: { month: 12, day: 25 },
        teacher: { month: 5, day: 5 },
        nurse: { month: 9, day: 12 }
    });

    const LOCALES = ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt'];

    function t(map, lang) {
        return map[lang] || map.en || map.ko || '';
    }

    const PLACES = Object.freeze({
        seyoun: [
            {
                id: 'home',
                background: 'assets/images/background/seyoun_room.png',
                names: { ko: '서연의 방', en: "Seoyeon's room", es: 'Habitación de Seoyeon', ja: 'ソヨンの部屋', fr: 'Chambre de Seoyeon', de: 'Seoyeons Zimmer', pt: 'Quarto da Seoyeon' },
                hints: { ko: '화분과 일정표가 있는 방.', en: 'Her room, with plants and a schedule.', es: 'Su habitación, con plantas y un horario.', ja: '鉢植えと予定表のある部屋。', fr: 'Sa chambre, plantes et planning.', de: 'Ihr Zimmer mit Pflanzen und Plan.', pt: 'O quarto dela, com vasos e agenda.' }
            },
            {
                id: 'rooftop',
                background: 'assets/images/background/top_school.png',
                names: { ko: '옥상', en: 'Rooftop', es: 'Azotea', ja: '屋上', fr: 'Toit', de: 'Dach', pt: 'Terraço' },
                hints: { ko: '예전에 같이 물 주던 화분.', en: 'The pots you used to water together.', es: 'Las macetas que regaban juntos.', ja: '一緒に水をやっていた鉢。', fr: 'Les pots que vous arrosiez ensemble.', de: 'Die Töpfe, die ihr zusammen gegossen habt.', pt: 'Os vasos que vocês regavam juntos.' }
            },
            {
                id: 'cafe',
                background: 'assets/images/background/cafe.png',
                names: { ko: '카페', en: 'Cafe', es: 'Cafetería', ja: 'カフェ', fr: 'Café', de: 'Café', pt: 'Café' },
                hints: { ko: '창가 자리. 컵받침을 맞추는 버릇.', en: 'A window seat. She still squares the coaster.', es: 'Mesa junto a la ventana.', ja: '窓際。コースターを揃える癖。', fr: 'Une table près de la fenêtre.', de: 'Ein Platz am Fenster.', pt: 'Mesa na janela.' }
            },
            {
                id: 'park',
                background: 'assets/images/background/park.png',
                names: { ko: '공원', en: 'Park', es: 'Parque', ja: '公園', fr: 'Parc', de: 'Park', pt: 'Parque' },
                hints: { ko: '걸음만 맞추면 되는 저녁.', en: 'An evening where matching pace is enough.', es: 'Una tarde en la que basta ir al mismo paso.', ja: '歩幅を合わせるだけの夕方。', fr: 'Un soir où marcher au même pas suffit.', de: 'Ein Abend, an dem gleicher Schritt reicht.', pt: 'Uma tarde em que basta acompanhar o passo.' }
            }
        ],
        yuna: [
            {
                id: 'hideout',
                background: 'assets/images/background/yuna_hideout.png',
                names: { ko: '별관 다락', en: 'Annex loft', es: 'Altillo del anexo', ja: '別館の屋根裏', fr: 'Grenier de l’annexe', de: 'Dachboden im Anbau', pt: 'Sótão do anexo' },
                hints: { ko: '아직 그 자리.', en: 'The same seat as always.', es: 'El mismo asiento de siempre.', ja: 'いつもの場所。', fr: 'La même place qu’avant.', de: 'Derselbe Platz wie immer.', pt: 'O mesmo lugar de sempre.' }
            },
            {
                id: 'bookstore',
                background: 'assets/images/background/bookstore.png',
                names: { ko: '헌책방', en: 'Used bookstore', es: 'Librería de viejo', ja: '古本屋', fr: 'Librairie d’occasion', de: 'Antiquariat', pt: 'Sebo' },
                hints: { ko: '서가 사이에 이마를 대던 곳.', en: 'The aisle where she once leaned her forehead.', es: 'El pasillo donde apoyó la frente.', ja: '書架の間で額を寄せた場所。', fr: 'L’allée où elle avait posé son front.', de: 'Der Gang, in dem sie die Stirn angelehnt hat.', pt: 'O corredor em que ela encostou a testa.' }
            },
            {
                id: 'library',
                background: 'assets/images/background/library_old.png',
                names: { ko: '도서관', en: 'Library', es: 'Biblioteca', ja: '図書館', fr: 'Bibliothèque', de: 'Bibliothek', pt: 'Biblioteca' },
                hints: { ko: '쪽지 대신 책이 오가는 자리.', en: 'A desk where books replace notes.', es: 'Un pupitre donde los libros sustituyen las notas.', ja: 'メモの代わりに本が渡る席。', fr: 'Une table où les livres remplacent les mots.', de: 'Ein Platz, an dem Bücher die Zettel ersetzen.', pt: 'Uma mesa em que os livros substituem os bilhetes.' }
            },
            {
                id: 'secret_roof',
                background: 'assets/images/background/yuna_secret_rooftop.png',
                names: { ko: '비밀 옥상', en: 'Secret rooftop', es: 'Azotea secreta', ja: '秘密の屋上', fr: 'Toit secret', de: 'Geheimes Dach', pt: 'Terraço secreto' },
                hints: { ko: '세 번째 곡을 듣던 난간.', en: 'The rail where you listened to the third track.', es: 'La baranda donde oyeron la tercera canción.', ja: '三曲目を聴いた手すり。', fr: 'La rambarde de la troisième piste.', de: 'Das Geländer vom dritten Stück.', pt: 'O parapeito da terceira faixa.' }
            }
        ],
        dain: [
            {
                id: 'cafe',
                background: 'assets/images/background/cafe.png',
                names: { ko: '카페', en: 'Cafe', es: 'Cafetería', ja: 'カフェ', fr: 'Café', de: 'Café', pt: 'Café' },
                hints: { ko: '무릎을 테이블 아래로 숨기는 버릇.', en: 'She still tucks the bad knee under the table.', es: 'Sigue escondiendo la rodilla bajo la mesa.', ja: '膝をテーブルの下に隠す癖。', fr: 'Elle cache encore le genou sous la table.', de: 'Sie schiebt das Knie noch unter den Tisch.', pt: 'Ela ainda esconde o joelho debaixo da mesa.' }
            },
            {
                id: 'gym',
                background: 'assets/images/background/gym.png',
                names: { ko: '체육관', en: 'Gymnasium', es: 'Gimnasio', ja: '体育館', fr: 'Gymnase', de: 'Turnhalle', pt: 'Ginásio' },
                hints: { ko: '공은 잡되 점프는 참는 날.', en: 'She holds a ball and skips the jump.', es: 'Sostiene el balón y se salta el salto.', ja: 'ボールは持つが跳ばない日。', fr: 'Elle tient le ballon et saute le saut.', de: 'Sie hält den Ball und lässt den Sprung.', pt: 'Ela segura a bola e dispensa o salto.' }
            },
            {
                id: 'booth',
                background: 'assets/images/background/dain_broadcast_booth.png',
                names: { ko: '중계석', en: 'Broadcast booth', es: 'Cabina de retransmisión', ja: '実況席', fr: 'Cabine de commentaire', de: 'Kommentarplatz', pt: 'Cabine de transmissão' },
                hints: { ko: '선수 대신 말로 경기를 따라가는 자리.', en: 'She follows the match with words, not spikes.', es: 'Sigue el partido con palabras, no con remates.', ja: 'スパイクの代わりに言葉で試合を追う。', fr: 'Elle suit le match avec des mots, pas des smashes.', de: 'Sie verfolgt das Spiel mit Worten, nicht mit Schmetterbällen.', pt: 'Ela acompanha o jogo com palavras, não com cortadas.' }
            },
            {
                id: 'park',
                background: 'assets/images/background/park.png',
                names: { ko: '공원 벤치', en: 'Park bench', es: 'Banco del parque', ja: '公園のベンチ', fr: 'Banc du parc', de: 'Parkbank', pt: 'Banco do parque' },
                hints: { ko: '5분만, 체력 충전.', en: 'Five minutes. Just a charge-up.', es: 'Cinco minutos. Solo recargar.', ja: '5分だけ、充電。', fr: 'Cinq minutes. Juste recharger.', de: 'Fünf Minuten. Nur auftanken.', pt: 'Cinco minutos. Só recarregar.' }
            }
        ],
        teacher: [
            {
                id: 'study',
                background: 'assets/images/background/teacher_room.png',
                names: { ko: '서재', en: 'Study', es: 'Estudio', ja: '書斎', fr: 'Bureau', de: 'Arbeitszimmer', pt: 'Escritório' },
                hints: { ko: '원고 옆자리. 교탁은 없다.', en: 'A chair beside the manuscript. No teacher’s desk.', es: 'Una silla junto al manuscrito. Sin pupitre.', ja: '原稿の隣。教卓はない。', fr: 'Une chaise à côté du manuscrit. Pas de bureau.', de: 'Ein Stuhl neben dem Manuskript. Kein Lehrerpult.', pt: 'Uma cadeira ao lado do original. Sem mesa de professora.' }
            },
            {
                id: 'cafe',
                background: 'assets/images/background/cafe.png',
                names: { ko: '카페', en: 'Cafe', es: 'Cafetería', ja: 'カフェ', fr: 'Café', de: 'Café', pt: 'Café' },
                hints: { ko: '다음 주도 볼지 묻는 테이블.', en: 'The table where she asked about next week.', es: 'La mesa donde preguntó por la semana que viene.', ja: '来週も会うか聞いたテーブル。', fr: 'La table où elle a parlé de la semaine prochaine.', de: 'Der Tisch, an dem sie nach nächster Woche fragte.', pt: 'A mesa em que ela perguntou sobre a semana que vem.' }
            },
            {
                id: 'museum',
                background: 'assets/images/background/museum.png',
                names: { ko: '전시', en: 'Exhibition', es: 'Exposición', ja: '展示', fr: 'Exposition', de: 'Ausstellung', pt: 'Exposição' },
                hints: { ko: '설명 대신 옆에 서는 사람.', en: 'She stands beside you instead of explaining.', es: 'Se queda a tu lado en vez de explicar.', ja: '説明せず、横に立つ。', fr: 'Elle se tient à tes côtés plutôt que d’expliquer.', de: 'Sie stellt sich daneben, statt zu erklären.', pt: 'Ela fica ao lado em vez de explicar.' }
            },
            {
                id: 'park',
                background: 'assets/images/background/park.png',
                names: { ko: '강변', en: 'Riverside', es: 'Orilla', ja: '川沿い', fr: 'Berges', de: 'Flussufer', pt: 'Beira do rio' },
                hints: { ko: '직함 없이 걷는 길.', en: 'A walk with no job title.', es: 'Un paseo sin cargo.', ja: '肩書きのない散歩。', fr: 'Une promenade sans titre.', de: 'Ein Spaziergang ohne Titel.', pt: 'Um passeio sem cargo.' }
            }
        ],
        nurse: [
            {
                id: 'home',
                background: 'assets/images/background/nurse_house.png',
                names: { ko: '둘의 집', en: 'Their home', es: 'Su casa', ja: '二人の家', fr: 'Chez eux', de: 'Ihr Zuhause', pt: 'A casa dos dois' },
                hints: { ko: '주말에 남는 오전.', en: 'A leftover weekend morning.', es: 'Una mañana de fin de semana que sobra.', ja: '予定のない週末の朝。', fr: 'Un matin de week-end qui reste.', de: 'Ein übriger Wochenendmorgen.', pt: 'Uma manhã de fim de semana que sobrou.' }
            },
            {
                id: 'cafe',
                background: 'assets/images/background/cafe.png',
                names: { ko: '카페', en: 'Cafe', es: 'Cafetería', ja: 'カフェ', fr: 'Café', de: 'Café', pt: 'Café' },
                hints: { ko: '농담을 거두기 전의 테이블.', en: 'A table before she drops the joke.', es: 'Una mesa antes de dejar la broma.', ja: '冗談をやめる前、向かい合って座ったテーブル。', fr: 'Une table avant qu’elle range la blague.', de: 'Ein Tisch, bevor sie den Witz wegsteckt.', pt: 'Uma mesa antes de ela guardar a brincadeira.' }
            },
            {
                id: 'park',
                background: 'assets/images/background/park.png',
                names: { ko: '공원', en: 'Park', es: 'Parque', ja: '公園', fr: 'Parc', de: 'Park', pt: 'Parque' },
                hints: { ko: '기록 없는 산책.', en: 'A walk with no chart.', es: 'Un paseo sin ficha.', ja: '記録のない散歩。', fr: 'Une promenade sans dossier.', de: 'Ein Spaziergang ohne Akte.', pt: 'Um passeio sem ficha.' }
            },
            {
                id: 'street',
                background: 'assets/images/background/street.png',
                names: { ko: '골목', en: 'Side street', es: 'Callejón', ja: '路地', fr: 'Ruelle', de: 'Seitengasse', pt: 'Beco' },
                hints: { ko: '병원 앞을 지나지 않는 길.', en: 'A route that skips the hospital.', es: 'Un camino que no pasa por el hospital.', ja: '病院の前を通らない道。', fr: 'Un chemin qui évite l’hôpital.', de: 'Ein Weg, der am Krankenhaus vorbeiführt.', pt: 'Um caminho que não passa no hospital.' }
            }
        ]
    });

    function getPlaces(charId) {
        return PLACES[charId] || [];
    }

    function getPlace(charId, placeId) {
        return getPlaces(charId).find(place => place.id === placeId) || getPlaces(charId)[0] || null;
    }

    function isBirthday(charId, now = new Date()) {
        const stamp = BIRTHDAYS[charId];
        if (!stamp) return false;
        return (now.getMonth() + 1) === stamp.month && now.getDate() === stamp.day;
    }

    function buildOutingRuntimeBlock({ lang = 'ko', characterName = '', place = null, birthday = false } = {}) {
        if (!place) return '';
        const name = t(place.names, lang);
        const hint = t(place.hints, lang);
        if (String(lang || 'ko').toLowerCase().startsWith('ko')) {
            return `\n\n[오늘 외출]\n장소: ${name}\n${hint}\n- 이 장소의 물건·소리·동선만 쓰고, 다른 장소로 갑자기 옮기지 마세요.\n- ${characterName || '상대'}의 말투와 거리를 유지하세요.${birthday ? `\n- 오늘은 ${characterName || '상대'}의 생일입니다. 파티나 큰 이벤트로 키우지 말고, 그 사람이 받을 법한 작은 표시만 하세요.` : ''}`;
        }
        return `\n\n[Today's outing]\nPlace: ${name}\n${hint}\n- Keep the scene in this place; do not jump elsewhere.\n- Stay in ${characterName || 'the character'}'s voice and distance.${birthday ? `\n- Today is ${characterName || 'their'} birthday. Keep it small and in character; no party set-piece.` : ''}`;
    }

    const pickerCopy = {
        title: { ko: '오늘 어디 갈래', en: 'Where to today', es: '¿Adónde vamos hoy?', ja: '今日はどこにする？', fr: 'Où on va aujourd’hui', de: 'Wohin heute', pt: 'Aonde a gente vai hoje' },
        birthday: { ko: '오늘 생일이다', en: 'Today is their birthday', es: 'Hoy es su cumpleaños', ja: '今日は誕生日', fr: 'C’est son anniversaire', de: 'Heute ist Geburtstag', pt: 'Hoje é aniversário' },
        start: { ko: '여기서 보자', en: 'Meet there', es: 'Allí', ja: 'ここで会おう', fr: 'On s’y retrouve', de: 'Dort treffen', pt: 'A gente se encontra lá' }
    };

    global.CupidGalleryOutings = Object.freeze({
        BIRTHDAYS,
        LOCALES,
        getPlaces,
        getPlace,
        isBirthday,
        buildOutingRuntimeBlock,
        pickerCopy,
        t
    });
})(typeof window !== 'undefined' ? window : globalThis);
