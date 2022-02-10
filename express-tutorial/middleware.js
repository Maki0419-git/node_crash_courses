const express = require('express');
const app = express();
const { logger, authorize } = require('./middlefunc');
const morgan = require('morgan'); //third party middleware https://www.npmjs.com/package/morgan
//req => middleware => res

//ver1.0
// app.get('/', logger, (req, res) => {
//     // const method = req.method;
//     // const url = req.url;
//     // const time = new Date().getFullYear();
//     // console.log(method, url, time);
//     res.send('home')
// })


// app.get('/about', logger, (req, res) => {
//     res.send('about page')
// })

//ver2.0 match all route

// app.use(logger); // must be before the router or it will not be applied

// app.get('/', (req, res) => {
//     res.send('home')
// })

// app.get('/about', (req, res) => {
//     res.send('about page')
// })

// app.listen(3000, () => {
//     console.log('listening on 3000...')
// })


//ver3.0   match specific route

// app.use('/api', logger); // will match all the route starts with api/

// app.get('/', (req, res) => {
//     res.send('home')
// })

// app.get('/about', (req, res) => {
//     res.send('about page')
// })

// app.get('/api/products', (req, res) => {
//     res.send('about page')
// })

// app.get('/api/users', (req, res) => {
//     res.send('about page')
// })

// app.listen(3000, () => {
//     console.log('listening on 3000...')
// })


//ver4.0   multiple middleware in order

// app.use([logger, authorize]); // will match all the route starts with api/

// app.get('/', (req, res) => {
//     res.send('home')
// })

// app.get('/about', (req, res) => {
//     res.send('about page')
// })

// app.get('/api/products', (req, res) => {
//     res.send('about page')
// })

// app.get('/api/users', (req, res) => {
//     res.send('about page')
// })



//ver 5.0   add info to req 

// app.use('/api', [logger, authorize]); // will match all the route starts with api/

// app.get('/', (req, res) => {
//     res.send('home')
// })

// app.get('/about', (req, res) => {
//     res.send('about page')
// })

// app.get('/api/products', (req, res) => {
//     console.log(req.user)
//     res.send(req.user)
// })

// app.get('/api/users', (req, res) => {
//     console.log(req.user)
//     res.send(req.user)
// })
// app.listen(3000, () => {
//     console.log('listening on 3000...')
// })


//ver 6.0 third party middleware
app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.send('home')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.listen(3000, () => {
    console.log('listening on 3000...')
})

