require('express-async-errors');
require('dotenv').config();
//async errors
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const productsRoutes = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/err');

//middleware
app.use(express.json());
//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="api/v1/products">products route</a>');
})

//products route
app.use('/api/v1/products', productsRoutes);
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}`));
    } catch (err) {

    }
}
start()
