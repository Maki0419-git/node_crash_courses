//http modules
const http = require('http');
const server = http.createServer((req, res) => {
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

server.listen(3000);