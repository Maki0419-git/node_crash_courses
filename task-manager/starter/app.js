const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/err');
const connectDB = require('./db/connect');
require('dotenv').config();

//port
//at cmd:
// set PORT=7777
// node server.js
const port = process.env.PORT || 3000;

const start = (async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        //middleware
        app.use(express.json());
        app.use(express.static('./public'));
        app.use('/api/v1/tasks', tasks);
        app.use(notFound)
        app.use(errorHandlerMiddleWare);
        app.listen(port, console.log(`server is listen on ${port}`));
    } catch (e) {
        console.log(e)
    }
})

start();


