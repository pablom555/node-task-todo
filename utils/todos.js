const fs = require('fs');

const DBPATH = 'db/data.json';
let listTaskDB = [];

const saveTasks = (taskDB) => {

    return new Promise((resolve, reject) => {
        
        let data = JSON.stringify(taskDB)

        fs.writeFile(DBPATH, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`Task Success`)
        });

    })
}

const loadDB = () => {
    try {
        listTaskDB = require('../db/data.json')
    } catch (error) {
        listTaskDB = []
    }
}

const createTask = (description) => {

    loadDB()

    let task = {
        description,
        complete: false
    }

    listTaskDB.push(task)

    saveTasks(listTaskDB)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    return (task)
}

const listTask = () => {

    loadDB()
    return listTaskDB
}

const updateTask = (description, state = true) => {

    loadDB()
    
    let index = listTaskDB.findIndex(task => task.description === description)

    if (index >= 0) {

        listTaskDB[index].complete = state
        
        saveTasks(listTaskDB)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        
        return true
        
    } else {
        
        return false
    }
    
}

const deleteTask = (description) => {
    
    loadDB()
    let listTaskDBNew = listTaskDB.filter(task => task.description != description)

    saveTasks(listTaskDBNew)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    return true
}

module.exports = {
    createTask,
    listTask,
    updateTask,
    deleteTask
}