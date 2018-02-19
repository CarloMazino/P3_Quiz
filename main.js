const readline = require('readline');



console.log("CORE Quiz");


const rl = readline.createInterface({
                                    input: process.stdin,
                                    output: process.stdout,
                                    prompt: 'quiz> '
                                    });

rl.prompt();

rl.on('line', (line) => {
      switch (line.trim()) {
      case '':
      break;
      default:
            console.log(`\n¿'${line.trim()}'?\nCreo que te he entendido mal.\nPor favor introduce un comando válido.\nEjecutando comando help...\n`);
      case 'h':
      case 'help':
            helpCmd();
        break;
      case 'q':
      case'quit':
            rl.close();
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
            showCmd();
        break;
      case 'hello':
            console.log("it's me");
        break;
      case 'test':
            testCmd();
        break;
      case 'delete':
            deleteCmd();
        break;
      case 'edit':
            editCmd();
        break;
      case 'credits':
            console.log('Autores de la práctica:\n Marta Hernández Muela\n&\n Carlos Caro Álvarez');
        break;
      /*default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;*/
      }
      rl.prompt();
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
};
/**
 * Lista todos los quizzes existentes en el modelo.
 */
const listCmd = () => {
    console.log('Listar todos los quizzes existentes.');
};
/**
 * Muestra el quiz indicado en el parámetro: la pregunta y la respuesta.
 * @param id clave del quiz a mostrar.
 */
const showCmd = id => {
    console.log('Mostrar el quiz indicado.');
};
/**
 * Añade un nuevo quiz al modelo.
 * @param id Clave del quiz a mostrar.
 */
const addCmd = () => {
    console.log('Añadir un nuevo quiz.');
};
/**
 * Prueba el quizz, es decir, hace una pregunta del modelo a la que debemos contestar.
 * @param id clave del quiz a probar.
 */
const testCmd = id => {
    console.log('Probar el quiz indicado.');
};
/**
 * Borra un quizz del modelo.
 * @param id Clave del quiz a borrar en el modelo.
 */
const deleteCmd = id => {
    console.log('Borrar el quiz indicado.');
};
/**
 * Edita un quiz del modelo.
 * @param id Clave del quiz a editar en el modelo.
 */
const editCmd = id => {
    console.log('Editar el quiz indicado.');
};

/**
 * Pregunta todos los quizzes existentes en el modleo en orden alfabético.
 * Se gana si contesta a todos satisfactoriamente.
 */
const playCmd = () => {
    console.log('Jugar.');
};


