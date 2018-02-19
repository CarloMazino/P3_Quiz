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
      case 'add':
        console.log('Añadir un nuevo quiz.');
        break;
      case 'list':
        console.log('Listar todos los quizzes existentes.');
        break;
      case 'show':
        console.log('Mostrar el quiz indicado.');
        break;
      case 'hello':
        console.log("it's me");
        break;
      case 'test':
        console.log('Probar el quiz indicado.');
        break;
      case 'delete':
        console.log('Borrar el quiz indicado.');
        break;
      case 'edit':
          console.log('Editar el quiz indicado.');
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



