const db = require('../data/db-config.js')

module.exports = {
    getProject,
    getProjectById,
    getActions,
    addProject,
    addActionById
}

function getProject() {
    return db('projects')
}

function getProjectById(id) {
    return db("projects")
        .where({ id })
        .first()
        .then(project => {
            return project
        })
}

function getActions(id){
    return db("actions as a")
        .where({ project_id: id})
        .select( "a.description as Description", "a.notes as Notes", "a.completed as Completed")
}

function addProject(project){
    return db("projects")
        .insert(project)
}

function addActionById(id, action){
    return db("actions")
        .where({ project_id: id })
        .insert(action)
}