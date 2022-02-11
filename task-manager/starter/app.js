const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = 3000;

const start = (async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.use(express.json());
        app.use('/api/v1/tasks', tasks);
        app.listen(port, console.log(`server is listening on ${port}`));
    } catch (e) {
        console.log(e)
    }
})

start();

