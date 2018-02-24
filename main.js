
const readline = require('readline');

const figlet = require('figlet');
const chalk = require('chalk');


/**
 * Da color a un string
 *
 * @param msg           El String al que hay que dar color.
 * @param color         Color con el que pintar msg.
 * @returns {string}    Devuelve el string msg con el color indicado.
 */
const colorize = (msg, color) => {
    if (typeof color !== "undefined"){
        msg = chalk[color].bold(msg);
    }
    return msg;
};

/**
 * Escribe un mensaje de log.
 *
 * @param msg           El String a escribir
 * @param color         Color del texto.
 */
const log = (msg, color) => {
    console.log(colorize(msg,color));
};

/**
 * Escribe un mensaje de log grande.
 *
 * @param msg           Texto a escribir
 * @param color         Color del texto.
 */
const biglog = (msg, color) => {
    log(figlet.textSync(msg, { horizontalLayout: 'full' }), color);
};

/**
 * Escribe un mensaje de error emsg.
 *
 * @param emsg          Texto del mensaje de error.
 */
const errorlog = (emsg) => {
    console.log(`${colorize("Error", "red")}: &{colorize(colorize(emsg, "red"), "bgYellowBright")}`);
};




//Mensaje inicial
biglog('CORE Quiz','green');



const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout,
                                    prompt: 'quiz> ',
                                    completer:(line) => {
                                    const completions = 'h help add delete edit list test p play credits q quit'.split(' ');
                                    const hits = completions.filter((c) => { return c.indexOf(line) === 0 });
                                    // show all completions if none found
                                    return [hits.length ? hits : completions, line];
                                    }
                                    });

rl.prompt();

rl
.on('line', (line) => {
    "use strict";
    let args = line.split(" ");
    let cmd = args[0].toLowerCase().trim();
    
      switch (cmd) {
      case '':
        rl.prompt();
        break;
      default:
            defaultCmd();
      case 'h':
      case 'help':
            helpCmd();
        break;
      case 'q':
      case'quit':
            quitCmd();
        break;
      case 'p':
      case 'play':
      playCmd();
        break;
      case 'add':
            addCmd();
        break;
      case 'list':
            listCmd();
        break;
      case 'show':
            showCmd(args[1]);
        break;
      case 'hello':
            console.log("it's me");
        break;
      case 'test':
            testCmd(args[1]);
        break;
      case 'delete':
            deleteCmd(args[1]);
        break;
      case 'edit':
            editCmd(args[1]);
        break;
      case 'credits':
            creditsCmd();
        break;
      /*default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;*/
      }
      })
.on('close', () => {
            console.log('¡Adiós!');
            process.exit(0);
            });

/**
 * Muestra la ayuda.
 */
const helpCmd = () => {
    console.log("Comandos:");
    console.log(" h|help - Muestra esta ayuda.");
    console.log(" list - Listear los quizzes existentes.");
    console.log(" show <id> - muestra la pregunta y la respuesta.");
    console.log(" add - Añadir un nuevo quizz.");
    console.log(" delete <id> - Borrar el quizz indicado.");
    console.log(" edit <id> - Editar el quizz indicado.");
    console.log(" test <id> - Probar el quizz indicado.");
    console.log(" p|play - Jugar a preguntar aleatoriamente todos los quizzes.");
    console.log(" credits - Créditos.");
    console.log(" q|quit - Salir del programa.");
    rl.prompt();
};
/**
 * Lista todos los quizzes existentes en el modelo.
 */
const listCmd = () => {
    console.log('Listar todos los quizzes existentes.');
    rl.prompt();
};
/**
 * Muestra el quiz indicado en el parámetro: la pregunta y la respuesta.
 * @param id clave del quiz a mostrar.
 */
const showCmd = id => {
    console.log('Mostrar el quiz indicado.');
    rl.prompt();
};
/**
 * Añade un nuevo quiz al modelo.
 * @param id Clave del quiz a mostrar.
 */
const addCmd = () => {
    console.log('Añadir un nuevo quiz.');
    rl.prompt();
};
/**
 * Prueba el quizz, es decir, hace una pregunta del modelo a la que debemos contestar.
 * @param id clave del quiz a probar.
 */
const testCmd = id => {
    console.log('Probar el quiz indicado.');
    rl.prompt();
};
/**
 * Borra un quizz del modelo.
 * @param id Clave del quiz a borrar en el modelo.
 */
const deleteCmd = id => {
    console.log('Borrar el quiz indicado.');
    rl.prompt();
};
/**
 * Edita un quiz del modelo.
 * @param id Clave del quiz a editar en el modelo.
 */
const editCmd = id => {
    console.log('Editar el quiz indicado.');
    rl.prompt();
};

/**
 * Pregunta todos los quizzes existentes en el modleo en orden alfabético.
 * Se gana si contesta a todos satisfactoriamente.
 */
const playCmd = () => {
    console.log('Jugar.');
    rl.prompt();
};
/**
 * Muestra los nombres de los autores de la práctica.
 *
 */
const creditsCmd = () => {
    console.log('Autores de la práctica:\n Marta Hernández Muela\n&\n Carlos Caro Álvarez');
    rl.prompt();
};
/**
 * Termina el programa.
 *
 */
const quitCmd = () => {
    rl.close();
    rl.prompt();
};
/**
 * Mensaje por defecto cuando se da una orden desconocida.
 *
 */
const defaultCmd = () => {
    console.log(`\n¿'${cmd}'?\nCreo que te he entendido mal.\nPor favor introduce un comando válido.\nEjecutando comando help...\n`);
    //rl.prompt();
};



