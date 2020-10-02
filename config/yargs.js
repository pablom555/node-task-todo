const description = {
    alias: 'd',
    demand: true,
    desc: 'Task description',
    default: 'Empty Task'
}

const complete = {
    alias: 'c',
    default: true,
    desc: 'Update the task as complete or pending'
}


const { argv } = require('yargs')
    .command('create', 'Create a Task item', {description})
    .command('list', 'Tasks list')
    .command('delete', 'Delete Task', {description})
    .command('update', 'Update a Task item', {
        description,
        complete
    })
    .help();

module.exports = {
    argv
}    