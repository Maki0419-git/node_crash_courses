require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//router
const mainRouter = require('./routes/main')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')


//DB
const connectDB = require('./db/connect');
//authenticateUser
const authenticateUser = require('./middleware/auth');

//middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/err');

//middleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async (req, res) => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start();