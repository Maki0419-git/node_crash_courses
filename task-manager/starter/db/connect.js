const mongoose = require('mongoose');

const connectionString = "mongodb+srv://yoshino90530:yoshino90530@nodeexpressproject.wclst.mongodb.net/task-manager?retryWrites=true&w=majority"


const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true

        })
}


module.exports = connectDB;

