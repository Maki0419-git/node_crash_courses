const Task = require('../models/tasks');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-errors');

const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({});
    // res.status(200).json({ tasks ,amount:tasks.length})
    res.status(200).json({ data: { tasks, nbHits: tasks.length }, success: true })

})

const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(200).json({ task });

})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    // res.send(`getSingleTask ${req.params.id}`);

    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
        //right syntax
        return next(createCustomError(`Task not found ${req.params.id}`, 404))
    }
    res.status(200).json({ task });

})


const deleteTask = asyncWrapper(async (req, res) => {
    // res.send(`deleteTask ${req.params.id}`)
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`Task not found ${taskID}`, 404))
    }
    res.status(200).json({ task });

})



const updateTask = asyncWrapper(async (req, res) => {
    // res.send(`updateTask ${req.params.id}`)
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true, //return new value
        runValidators: true
    });
    if (!task) {
        return next(createCustomError(`Task not found ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

const updateTaskWithPUT = async (req, res) => {
    // res.send(`updateTask ${req.params.id}`)
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true, //return new value
            runValidators: true,
            overWrite: true
        });
        if (!task) {
            return res.status(404).json({ msg: `no task found ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (e) {
        //error syntax
        return res.status(500).json({ msg: e });
    }
}






module.exports = { getAllTasks, createTask, getSingleTask, updateTask, deleteTask, updateTaskWithPUT }