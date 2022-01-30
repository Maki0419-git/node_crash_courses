//http modules
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('requset event');
    if (req.url === "/") {
        res.end("welcome to our homepage")
        return; //respond 完要return ! 不然會有錯:code: 'ERR_STREAM_WRITE_AFTER_END'
    }
    if (req.url === "/about") {
        res.end("Welcome to about page")
        return;
    }
    res.end(`<h1>Oops!</h1>
    <p>we can't fimd the page</p>
    <a href="/">go to homepage</a>
    `)
    return;
    // console.log(req);
    // res.write('welcome to our homepage');
    // res.end();
})


//keep listening for those incoming requests
server.listen(3000, () => console.log('server listing port :3000...'));

//another solution
// const http = require('http');
// const server = http.createServer();
// server.on('request', (req, res) => {
//     res.end('welcome');
//     return
// })

// //keep listening for those incoming requests
// server.listen(3000, () => console.log('server listing port :3000...'));