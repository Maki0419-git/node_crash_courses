const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({ task });
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: e });
    }
}

const getSingleTask = async (req, res) => {
    // res.send(`getSingleTask ${req.params.id}`);
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) {
            //right syntax
            return res.status(404).json({ msg: 'Task not found' });
        }
        res.status(200).json({ task });
    } catch (e) {
        console.log(e);
        //error syntax
        res.status(404).json({ msg: e });
    }
}

const updateTask = (req, res) => {
    res.send(`updateTask ${req.params.id}`)
}

const deleteTask = (req, res) => {
    res.send(`deleteTask ${req.params.id}`)
}






module.exports = { getAllTasks, createTask, getSingleTask, updateTask, deleteTask }