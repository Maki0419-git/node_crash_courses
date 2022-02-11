const Task = require('../models/tasks');

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
}

const getSingleTask = (req, res) => {
    res.send(`getSingleTask ${req.params.id}`);
}

const updateTask = (req, res) => {
    res.send(`updateTask ${req.params.id}`)
}

const deleteTask = (req, res) => {
    res.send(`deleteTask ${req.params.id}`)
}






module.exports = { getAllTasks, createTask, getSingleTask, updateTask, deleteTask }