const { argv } = require('./config/yargs');
const { createTask, listTask, updateTask, deleteTask } = require('./utils/todos');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'create':
       
        let task = createTask(argv.description)
        console.log(task)

        break;

    case 'list':

        let tasklist = listTask()

        console.log(' ')
        console.log('==============================='.brightGreen)
        console.log('===        Tasks List       ==='.brightGreen)
        console.log('==============================='.brightGreen)

        if (tasklist.length === 0) console.log('Empty Task List'.bgBrightRed)

        tasklist.forEach((task => {
            console.log(' ')
            console.log(task.description.brightBlue)
            console.log('State: ', (task.complete == 'false' || task.complete == false) ? 'To do'.yellow : 'Complete'.green)
        }))

        break;

    case 'update':

        if (!updateTask(argv.description, argv.complete)) console.log('Task Not Exist')
        break;

    case 'delete':

        deleteTask(argv.description)
        break;

    default:
        console.log('Comando Incorrecto')
}
