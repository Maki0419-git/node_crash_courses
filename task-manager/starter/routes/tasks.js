const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask, updateTaskWithPUT } = require('../controllers/tasks');


//put=>update entire object
//patch=>update partial object
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask).put(updateTaskWithPUT);


module.exports = router;