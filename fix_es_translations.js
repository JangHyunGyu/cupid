const fs = require('fs');
const path = require('path');

const basePath = 'd:/workspace/cupid/assets/js/i18n/es';

function applyFixes(filename, fixes) {
    const filePath = path.join(basePath, filename);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let count = 0;

    for (const [key, fix] of Object.entries(fixes)) {
        if (!data[key]) {
            console.log(`  WARNING: Key "${key}" not found in ${filename}`);
            continue;
        }
        if (fix.text !== undefined) {
            data[key].text = fix.text;
            count++;
        }
        if (fix.choices !== undefined) {
            data[key].choices = fix.choices;
            count++;
        }
        if (fix.name !== undefined) {
            data[key].name = fix.name;
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
    console.log(`[OK] ${filename}: ${count} entries fixed`);
}

// ============================================================
// DAY 1-1 MORNING
// ============================================================
applyFixes('day1_1_morning.json', {
    seoyeon_meet_8: {
        text: "*Esboza una sonrisa. Sin darme cuenta, yo también estaba sonriendo. Seoyeon camina hacia el portón haciéndome señas.*"
    },
    seoyeon_choice: {
        choices: [
            "¿No será que viniste antes porque te intereso?",
            "¿Cuánto cobra la guía?",
            "Tranquila, ya me apañaré echando un vistazo por ahí."
        ]
    },
    choice_dismiss_2: {
        text: "¿Ah, sí? Entonces al menos apréndete el número de aula. 3.° 2.ª, al final a la derecha."
    },
    choice_flirt_4: {
        text: "Será porque eres nuevo, pero no sabes leer el ambiente. Qué divertido."
    },
    hallway_6_b: {
        text: "*Se detiene un instante* ...Eres observador."
    },
    hallway_8: {
        text: "*De repente tengo planes para comer. — Ni siquiera dije que sí. Llegamos frente al aula.*"
    },
    classroom_3: {
        text: "Bien, a partir de hoy tenemos un estudiante transferido en clase. ¿Te presentas?"
    },
    classroom_dain_4: {
        text: "Ay, profe, es que esto es lo más cómodo. ¡En fin, bienvenido, chico nuevo!"
    },
    classroom_dain_talk_7: {
        text: "¡Jajaja, tu tiempo de reacción seguro que es mejor que el de una máquina! ¡Probablemente!"
    },
    classroom_dain_talk_8: {
        text: "*Dijo 'probablemente'. O sea que puede que sea mejor que una máquina. Mi posición es precaria.*"
    }
});

// ============================================================
// DAY 1-2 LUNCH
// ============================================================
applyFixes('day1_2_lunch.json', {
    lunch_seo_6_b: {
        text: "*Sonriendo* Qué desconfiado. Cuando pasas todo el tiempo tratando con gente allá abajo, a veces necesitas estar sola."
    },
    lunch_seo_14: {
        text: "Si la presidenta del consejo ni siquiera sabe preparar una fiambrera, eso no tiene sentido."
    },
    lunch_seo_21: {
        text: "*sonríe* Pregunté por la escuela y me contestas sobre la comida."
    },
    lunch_dain_19: {
        text: "Eso ha sonado a PR."
    },
    lunch_dain_20: {
        text: "¡¿Qué?! ¡¿PR?!"
    },
    lunch_dain_21: {
        text: "Personal Record. Es un término deportivo."
    },
    lunch_dain_23: {
        text: "¡Oh, ¿sabes eso?! ¡¿Entonces sí entiendes de deporte?!"
    },
    lunch_dain_c1_1: {
        text: "¡Jaja, genial!! ¡Desde hoy, entrenamiento especial! ¡Calentamiento en el gimnasio después de clases, ¿hecho?!"
    },
    lunch_yuna_2: {
        text: "*Yuna se sienta en un rincón de la sala de lectura. Abre un libro. No sé si sabe que la seguí. Me siento con cuidado frente a ella.*"
    },
    lunch_yuna_10_b: {
        text: "*Hay algo metido en el escritorio de Yuna. Un marcapáginas viejo. Tiene algo escrito, pero no alcanzo a leerlo. Yuna pone inconscientemente la mano encima. Quizá sea algo valioso para ella. Saco un libro cualquiera de la estantería y lo abro.*"
    }
});

// ============================================================
// DAY 1-3 AFTERSCHOOL
// ============================================================
applyFixes('day1_3_afterschool.json', {
    after_miss_dain_6_b: {
        text: "*Se despide con la mano y sale corriendo. — Al frenar, se sujetó brevemente la rodilla derecha. 0,5 segundos. Enseguida apartó la mano, pero lo vi.*"
    },
    after1_jealousy_seo_yuna: {
        text: "*Al rozar el bolsillo lateral de mi mochila, la punta de mis dedos engancha la esquina de un papel. Es una nota doblada. No sé cuándo la metieron ahí. La letra es de Yuna. 'Te vi en la azotea a la hora del almuerzo. ...Parecías llevarte bien con la presidenta.' — Tres puntos al final. Señal de que se tragó lo que quería decir.*"
    },
    after_hidden_nurse_intro: {
        text: "*Caminando por el pasillo cuando — me mareo un poco. Serán los nervios del primer día. A un lado del pasillo veo el cartel de 'Enfermería'. Estoy un poco demasiado mareado para ignorarlo.*"
    },
    after_homeroom_ok: {
        text: "¿Sí? — Si tienes algún problema, pásate por la sala de profesores. Aunque sea con la excusa del papeleo."
    },
    after_homeroom_ok_b: {
        text: "*La profesora aparta los papeles del escritorio y vuelve a mirarme. Lo que pensaba que sería una frase breve parece que va para más. Al parecer no era solo un saludo de cortesía. Apoya la mano en el respaldo de la silla y busca las palabras un momento.*"
    },
    after_homeroom_honest_choice2b_b: {
        text: "*Se rio. — Primera vez que la veo reírse con una broma. Cierra el registro y se pone de pie. Llega hasta el umbral y entonces vuelve a llamarme, como si se hubiera acordado tarde de algo.*"
    },
    after_nurse_enter_11: {
        text: "Si te vuelve a dar un mareo, ven a verme. La enfermería siempre está abierta. Pero no aguantes hasta que sea demasiado tarde. Me preocupa."
    }
});

// ============================================================
// DAY 1-4 NIGHT
// ============================================================
applyFixes('day1_4_night.json', {
    night_late_transition: {
        text: "*Estaba a punto de dormirme cuando — el teléfono suena una vez más. Las 11 de la noche. ¿Quién será?*"
    },
    night_msg_dain_3: {
        text: "*Todavía me duele lo del pan de hoy, ay en serio jajaja*"
    }
});

// ============================================================
// DAY 2-1 MORNING
// ============================================================
applyFixes('day2_1_morning.json', {
    morning2_seo_1: {
        name: "Seoyeon",
        text: "*Pasando por el pasillo, echa un vistazo al aula.* ¿Dormiste bien ayer?"
    },
    morning2_greet_seo_2: {
        text: "*Seoyeon vino a mí primero. Su tono relajado de siempre, pero con un matiz de querer confirmación. Dain echa un vistazo desde el fondo del aula. Desvía la mirada. Yuna se hunde más en su libro. Pasa las páginas más rápido.*"
    },
    hidden_homeroom_d2_choice1_a: {
        text: "...Novelas de misterio. No las de quién lo hizo, sino las que rastrean el motivo."
    },
    hidden_homeroom_d2_10: {
        text: "Entra dentro de las tareas de gestión del aula asignada. Es trabajo."
    },
    hidden_homeroom_d2_8: {
        text: "Dain es ruidosa, ¿verdad? — Siempre es así. Pero una que arma alboroto y una a la que le sobra energía no son lo mismo."
    },
    hidden_homeroom_d2_2_b: {
        text: "*Seguí a la profesora hasta la sala de profesores.* *Su escritorio está en la esquina. Papeles y una taza de café sobre la mesa, y — un cajón ligeramente entreabierto. En la esquina de la sala. Sobre el escritorio, una pila de papeles y — lo que parecen hojas de manuscrito.*"
    }
});

// ============================================================
// DAY 2-2 LUNCH
// ============================================================
applyFixes('day2_2_lunch.json', {
    lunch2_seo_5b_yuna: {
        text: "Tenía curiosidad por la combinación de esta brisa con la fiambrera de la presidenta."
    },
    lunch2_seo_13: {
        text: "¡Lo conocí ayer! Es un chico muy alegre, ¡presi!"
    },
    lunch2_dain_10: {
        text: "*Seoyeon mira hacia acá. Me observa de pie junto a Dain, comiendo pan — y sigue de largo. Sentí una punzada.*"
    },
    lunch2_dain_c1_1: {
        text: "*La expresión de Dain se endurece. Muerde su soboro y gira la cabeza. — ¿Le he hecho daño?*"
    },
    lunch2_dain_end: {
        text: "*El crujido del pan de soboro de Dain es inusualmente fuerte. — La hora del almuerzo se complica cada vez más.*"
    },
    lunch2_dain_end_ins5_first: {
        text: "*Levantando la vista.* Es tu primera vez aquí, ¿verdad? Eres el alumno nuevo."
    },
    lunch2_dain_end_ins7_first: {
        text: "¿Es tu primera vez? Vamos a desinfectar eso."
    },
    lunch2_dain_end_ins8_first: {
        text: "*Su tono juguetón de siempre. Pero sus ojos ya están examinando la herida.*"
    },
    lunch2_yuna_choice: {
        text: "*Nada sigue después de 'había'. Pasado. — En los silencios de Yuna siempre hay una historia. Me vuelvo cauteloso.*"
    }
});

// ============================================================
// DAY 2-3 AFTERSCHOOL
// ============================================================
applyFixes('day2_3_afterschool.json', {
    hidden_nurse_d2_2: {
        text: "Dos días seguidos — ¿tendré que darte una tarjeta de socio de la enfermería?"
    },
    after2_yuna_choice_pre3_b: {
        text: "*Yuna no aparta la mirada. Esa sola frase se queda conmigo mucho tiempo.*"
    },
    after2_yuna_everyday_react: {
        text: "...Pero todos los días no puede ser. Solo de vez en cuando."
    }
});

// ============================================================
// DAY 2-4 NIGHT
// ============================================================
applyFixes('day2_4_night.json', {
    night2_msg_generic: {
        text: "¡¡Oye!! ¡¿Mañana vamos a la tienda?!"
    },
    night2_msg_generic_3: {
        text: "...¿Ya terminaste ese libro?"
    },
    night2_hidden_nurse_1: {
        text: "'Registro enfermería: {name} — Rasguño en el codo (leve). Nota: Te cambio la tirita mañana por la mañana. Cambiar tiritas es un acto médico así que no puedes negarte ^^'"
    },
    night2_flashback_10: {
        text: "Cualquiera diría que soy un indeciso de mierda."
    }
});

// ============================================================
// DAY 3-1 MORNING
// ============================================================
applyFixes('day3_1_morning.json', {
    hidden_homeroom_d3_reveal_6_d: {
        text: "*Sonriendo ligeramente* ...Me alegro de que estés aquí. De verdad."
    },
    hidden_homeroom_d3_reveal_2_e: {
        text: "*Suspirando* ...Ojalá pudiera ver solo lo que quiero ver."
    },
    morning3_date_yuna_choice: {
        choices: undefined // need to read first to only change choice 2
    },
    morning3_date_dain_decline_narr: {
        text: "*Observo la reacción de Dain. Suena el timbre y vuelve ese breve paréntesis justo antes de la comida. Se fue con una sonrisa. — En ese momento no lo sabía. Que Dain había dejado de tamborillear con los dedos y había metido las manos en los bolsillos. Que le había costado valor preguntármelo.*"
    },
    morning3_yuna_gate_6_b: {
        text: "*La nota: Supuse que no habrías desayunado. Una persona que escribe en notas lo que podría decir con la boca. — Eso es Yuna.*"
    },
    hidden_homeroom_d3_4_b: {
        text: "*La mano de la profesora se detiene sobre el papel pautado. Entre los papeles boca abajo se ven letras apretadas. Ha dicho que era papeleo del trabajo — pero los documentos del profesorado se imprimen en A4. No se escriben a mano en papel pautado.*"
    },
    hidden_homeroom_d3_4_c: {
        // need to fix gender - read first
    },
    hidden_homeroom_d3_3_b: {
        text: "*Me quedo helado. — Es una expresión que nunca había visto en la profesora. La cara de alguien que ha sido descubierto. La profesora le da la vuelta al manuscrito a toda prisa.*"
    },
    hidden_nurse_d3_2_e: {
        text: "*No sé por qué me da las gracias. ¿Por no haber mirado? ¿O — por haber llegado hasta aquí? Justo antes de la hora del almuerzo. — El corazón no se me ha calmado en toda la mañana. Supongo que he visto demasiadas caras, escuchado demasiadas palabras. No sé por qué todo me afecta tan deprisa.*"
    },
    hidden_homeroom_d3_reveal_6_g: {
        text: "*La razón por la que eligió un aula vacía es práctica, pero también significa — que es alguien que necesita un espacio propio. Siento que he abierto un cajón oculto detrás del título de 'profesora'. Debería cerrarlo — pero no puedo soltar la mano.*"
    },
    hidden_nurse_d3_8_e: {
        text: "*'Con heridas o sin ellas.' — ¿Empezará a verme como algo más que un paciente? Salgo de la enfermería — y desde atrás, en voz baja.*"
    },
    hidden_nurse_d3_5_l: {
        text: "*Dio en el blanco.*"
    },
    hidden_nurse_d3_5_e: {
        text: "...Son cosas que no sé bien a quién contarle."
    },
    morning3_yuna_gate_warm_3: {
        text: "*Sacó una nota. 'Te esperaba.'*"
    }
});

// ============================================================
// DAY 3-3 AFTERSCHOOL
// ============================================================
applyFixes('day3_3_afterschool.json', {
    after3_dain_choice: {
        text: "*Dain se sienta en el banco. Se frota la rodilla. — Esto no es de habérsela torcido hoy. Es algo antiguo.*",
        choices: [
            "...¿Estás bien? No te fuerces. ¿Por qué no descansas hoy?",
            "Oye, déjame recibir un saque más. Si no lo paro, ganas tú."
        ]
    },
    after3_confront_5_c: {
        text: "*Dain baja la cabeza. La voz sin signos de exclamación. — Le estoy haciendo daño.*"
    },
    haeun_warn_7_d: {
        text: "*Haeun se da la vuelta y se va. La situación en casa de Seoyeon es complicada. Sus padres. — ¿Será por eso que Seoyeon sentía que 'tenía que ser perfecta'?*"
    },
    after3_confront_6: {
        text: "El desastre de la comida... ¿En qué estabas pensando cuando quedaste con las tres?"
    },
    after3_dain_choice1_react: {
        text: "*Dain se detiene. — Y luego sonríe, apenas. Quiero proteger esa sonrisa.*"
    }
});

// ============================================================
// DAY 4-1 MORNING
// ============================================================
applyFixes('day4_1_morning.json', {
    hidden_homeroom_d4_1: {
        text: "*La puerta principal del colegio está entreabierta. Hay alguien dentro. — Sale alguien por la entrada. Es la profesora titular. Se acerca. — Se la ve de lejos. Anda tan normal que no parece la misma persona que se enfadó.*"
    },
    hidden_homeroom_d4_1_b: {
        text: "*Debía estar enfadada — pero aun así ha venido. No puedo salir huyendo delante de esta persona.*"
    },
    hidden_homeroom_d4_choice: {
        choices: [
            "Dale. ¿Hay algún café cerca?",
            "Profe, ¿eso no es algo que no debería hacer?"
        ]
    },
    hidden_nurse_d4_morning_1: {
        text: "*Mañana de fin de semana. Por costumbre, voy hacia la enfermería. — ¿Cuándo se convirtió esto en costumbre? Abrí la puerta. La enfermera está en su silla. Bata blanca. — Pero está distinta a lo habitual. Sin picardía.*"
    },
    hidden_nurse_d4_morning_10: {
        text: "*La enfermera se toca las gafas. Los ojos que se ven tras ellas son más grandes de lo que esperaba. Los ojos que se escondían detrás de su picardía.*"
    },
    hidden_nurse_d4_meal_3_b: {
        text: "*La picardía ha desaparecido. — Cuando veo esta expresión, se me encoge el pecho.*"
    }
});

// ============================================================
// DAY 4-2 LUNCH
// ============================================================
applyFixes('day4_2_lunch.json', {
    date_seo_1: {
        text: "*Frente a la fuente. Seoyeon está ahí. Ha llegado antes que yo. Parece otra persona. No — es la misma persona, pero otra faceta.*"
    },
    date_seo_duck_4: {
        text: "*Suena casual — pero la experiencia de Seoyeon se filtra en esas palabras. Pasamos por delante de una floristería.*"
    },
    date_seo_flower_2: {
        text: "*Seoyeon empuja la puerta de la floristería. Suena una campanilla. Seoyeon elige una maceta pequeña. Una suculenta.*"
    },
    date_yuna_1: {
        text: "*Frente al café. Yuna está apoyada contra la pared. Vestido negro y un bolso pequeño cruzado. ¿Yuna siempre se veía así? — Es la primera vez que veo a Yuna fuera del uniforme.*"
    },
    date_yuna_pretty_high_5: {
        text: "*¿Otra vez? — Yuna me pide un 'otra vez'.*"
    },
    date_dain_knee_2: {
        text: "*Salimos de la sala de juegos a la calle. Pasamos por una tienda de deporte. Dain se detiene frente al escaparate. Hay zapatillas de voleibol expuestas.*"
    },
    date_seo_pretty_high_4: {
        text: "*Ha dicho \"no te hagas ilusiones\", pero la mano con la que se aparta el pelo va demasiado deprisa.*"
    }
});

// ============================================================
// DAY 4-3 AFTERSCHOOL
// ============================================================
applyFixes('day4_3_afterschool.json', {
    confess_seo_choice: {
        text: "*Estoy nervioso. Aun así, esta vez quiero decirlo bien.*"
    },
    confess_seo_yes_10: {
        text: "...Cuando dijiste \"qué honor\" en la puerta de la escuela. Desde entonces, me quedé un poco pensativa."
    },
    confess_dain_yes_4: {
        text: "*No es una confesión de broma. Pero para mí lo es todo.*"
    }
});

// ============================================================
// DAY 4-4 NIGHT
// ============================================================
applyFixes('day4_4_night.json', {
    wall_seo_skin70_1: {
        text: "*Seoyeon extiende su meñique primero. No se detiene ahí. Me toma la mano. Me besa en la frente.*"
    },
    wall_seo_skin70_3: {
        text: "...Esto es la primera vez. De verdad."
    },
    wall_seo_after_line_4: {
        text: "*Seoyeon sonríe. Las comisuras de sus labios van a su aire. — El maquillaje está corrido, los ojos hinchados. Pero no puedo apartar la mirada.*"
    },
    wall_dain_newdream_1: {
        text: "*Me quedé sentado a su lado. Sin decir nada. Dain tampoco habla. — Un tiempo extraño. Es la primera vez que hay más de un minuto de silencio junto a Dain.*"
    },
    wall_yuna_skin70_3: {
        text: "*La mano de Yuna es más cálida de lo que esperaba. — Solo eso.*"
    },
    wall_yuna_reject_3: {
        text: "*Yuna se da la vuelta. Sus pasos son rápidos. — No corre exactamente, pero camina como alguien que quiere correr. Fue la peor elección. — Se oye cómo el muro de Yuna vuelve a cerrarse.*"
    },
    day4_night_regret_msg: {
        text: "*Se enciende la pantalla del móvil. Es una frase corta, y por eso duele más.*"
    },
    night_nurse_msg_4: {
        text: "...Duerme."
    },
    wall_dain_choice: {
        choices: [
            "...No voy a decir nada. Simplemente estaré aquí.",
            "Puedes llorar. No tienes que fingir estar alegre. No conmigo.",
            "...¿Nos levantamos juntos? Solo una vez más."
        ]
    }
});

// ============================================================
// DAY 5-1 MORNING
// ============================================================
applyFixes('day5_1_morning.json', {
    morning5_start_b: {
        text: "*Nada más entrar al aula — llegan señales de tres direcciones. El último evento. Todo el tiempo acumulado hasta ahora converge en hoy.*"
    },
    hidden_homeroom_d5_check: {
        text: "*Hora de preparar el evento. Camino por el pasillo — y paso frente a un aula vacía. La puerta está abierta.*"
    },
    hidden_nurse_d5_6_c: {
        text: "*'Cuando te gradúes, quedemos en una cafetería en vez de la enfermería — ♡' El corazón esta vez — no parece interés médico.*"
    },
    hidden_nurse_d5_1_f: {
        text: "*De 'ven después de graduarte' a 'ven si te duele algo' — retrocedió. Estuvo a punto de cruzar la línea y volvió atrás. La puerta se abre. La enfermera está ahí. Con dos vasos de papel en las manos.*"
    },
    hidden_homeroom_d5_praise_trap_10: {
        text: "...Pensé que lo leerías y me dirías. — Te lo enseñé porque pensaba que, como eres estudiante, sentirías menos presión."
    },
    hidden_homeroom_d5_correct_9: {
        text: "¿Quiere que miremos esa línea juntos?"
    },
    hidden_homeroom_d5_correct_11: {
        text: "Es solo una línea. Los estudiantes también escribimos una línea."
    }
});

// ============================================================
// DAY 5-3 AFTERSCHOOL
// ============================================================
applyFixes('day5_3_afterschool.json', {
    after5_harem_walk_1: {
        text: "*Sin que nadie se atreviera a hablar primero, dejamos atrás la parte trasera de la escuela.*"
    },
    after5_harem_walk_2: {
        text: "*Cargando la grieta que habíamos tapado a la fuerza, nuestros pasos se dirigieron al parque.*"
    },
    after5_confess_fail_walk_1: {
        text: "*No se me ocurrieron más palabras. Mientras el sol seguía cayendo, solo caminamos un rato en la misma dirección.*"
    },
    after5_confess_fail_walk_2: {
        text: "*Con un sentimiento aún sin resolver entre nosotros, nuestros pasos nos llevaron al parque.*"
    }
});

// ============================================================
// DAY 5-4 NIGHT
// ============================================================
applyFixes('day5_4_night.json', {
    perfect_seo_1: {
        text: "*La azotea de Seoyeon. De pie entre las macetas que ella misma cultivó.*"
    },
    perfect_seo_1_b: {
        text: "*Está llorando otra vez. No en el baño — sino delante de mí esta vez.*"
    },
    perfect_epilogue_1_dain: {
        text: "*La rodilla de Dain se dobla al aterrizar del salto. Sé que le duele. Pero — está sonriendo.*"
    },
    good_epilogue_1: {
        text: "*Llega un mensaje de Seoyeon. 'He copiado la llave de la azotea para mañana. — Es un permiso, un permiso.' Podría simplemente haberlo llamado una invitación.*"
    },
    good_epilogue_2: {
        text: "*Esta persona finge estar relajada hasta el final — y entrega sus sentimientos dándote una llave.*"
    },
    good_epilogue_3: {
        text: "*Guardé la llave en el bolsillo. Mañana en la azotea — esta vez me toca a mí preparar el almuerzo.*"
    },
    good_epilogue_1_yuna: {
        text: "*Encuentro una nota doblada en la mochila. No sé cuándo la metió. 'Si terminaste el primer tomo, te presto el segundo. — Yuna'*"
    },
    good_epilogue_2_yuna: {
        text: "*Yuna, en vez de hablar, prepara lo que sigue. Después del primer tomo viene el segundo. Después de hoy viene mañana. Esta es su manera de decir 'sigamos viéndonos'.*"
    },
    good_epilogue_3_yuna: {
        text: "*En el dorso de la nota, en letra pequeña: '...Leamos el final juntos.' La tinta lila pálido está corrida.*"
    },
    good_epilogue_1_dain: {
        text: "*Un mensaje de Dain. '¿Alguien para hacer ejercicio mañana por la mañana?' Con signo de interrogación al final. Normalmente habría sido un signo de exclamación.*"
    },
    good_epilogue_2_dain: {
        text: "*Es la primera vez que le importa que puedan rechazarla. Que Dain use un signo de interrogación — eso es valentía.*"
    },
    good_epilogue_3_dain: {
        text: "*Respondí. 'Hecho.' Sin signo de exclamación. Porque mañana iré corriendo en persona.*"
    },
    hidden_perfect_nurse_ep4: {
        text: "*El cuaderno verde lima se guardó en lo más profundo del cajón. Lo que estaba escrito en la última página no era una carta, sino una sola línea. 'Yujin, ya estoy bien.' — Un punto final después de tres años.*"
    },
    hidden_true_nurse_8_b: {
        text: "*Girando la taza de café* ...No pensé que extrañaría el olor de la enfermería después de graduarme."
    },
    hidden_true_nurse_8_e: {
        text: "Oye. Estaba pensando en dimitir en ese entonces."
    },
    hidden_true_nurse_8_f: {
        text: "¿Porque se sentía perdida?"
    },
    hidden_true_nurse_8_g: {
        text: "Pero cuando viniste — tuve un motivo para quedarme. *Sonriendo suavemente* Gracias."
    },
    harem_4: {
        text: "*Los lunes Seoyeon. Los miércoles Yuna. Los viernes Dain. El calendario del móvil es un campo de minas. Si digo el nombre del miércoles en lunes, se acabó.*"
    },
    harem_7: {
        text: "*Tres alarmas, tres personas, tres mentiras. — Para llamar a esto felicidad, los retortijones son demasiado frecuentes.*"
    },
    hidden_true_homeroom_5: {
        text: "*Mirando por la ventana* ...Así que. Ya que lo terminé, estaba pensando en enviarlo a una editorial. — ¿Qué opinas?"
    },
    day5_ending_confess_fail: {
        text: "*Reuní valor. Lo dije. — Pero lo que volvió fue un silencio con la cabeza gacha.*"
    },
    alone_2_b: {
        text: "*La habitación está extrañamente silenciosa. Las voces que hasta hace poco resonaban en mis oídos también se alejan con el sonido de la puerta al cerrarse. Los cerezos caen tras la ventana. Los mismos que me rozaron la nariz hace cinco días ahora se dispersan con el viento.*"
    },
    confess_fail_5: {
        text: "─── FRIEND END ───"
    },
    mayhem_7: {
        text: "*Con Sojeong, guardé silencio y perdí a una persona. Esta vez le dije a todas y las perdí a todas. — Al final es lo mismo. No supe decirlo como debía.*"
    }
});

// ============================================================
// Handle special case: day3_1_morning choice fix
// ============================================================
(function fixDay3MorningChoice() {
    const filePath = path.join(basePath, 'day3_1_morning.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (data.morning3_date_yuna_choice && data.morning3_date_yuna_choice.choices) {
        const choices = data.morning3_date_yuna_choice.choices;
        if (choices.length >= 2) {
            choices[1] = "Niego ligeramente con la cabeza";
        }
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
        console.log('[OK] day3_1_morning.json: fixed morning3_date_yuna_choice choice 2');
    }
})();

// ============================================================
// Handle special case: day3_1_morning gender fix for d3_4_c
// ============================================================
(function fixDay3Gender() {
    const filePath = path.join(basePath, 'day3_1_morning.json');
    const raw = fs.readFileSync(filePath, 'utf8');
    const fixed = raw.replace(/del profesor/g, 'de la profesora');
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('[OK] day3_1_morning.json: fixed gender references (del profesor → de la profesora)');
})();

console.log('\n=== All fixes applied ===');
