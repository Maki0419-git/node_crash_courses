const amount = 12
if (amount < 10) {
    console.log("small")
} else {
    console.log("large")
}

// console.log(" my first node app !")

// console.log(__dirname)
// setInterval(() => console.log("hello"), 1000)

//Globals - No window
//__dirname :path to current directory
//__filename : file name
// require : function to use modules (CommonJS)
// modules :info about current module
// process info about env where the program is being executed

//modules : encapsulated code (only share what we want)
//every file in node is module!!!
// const names = require('./first_modules');
// const sayHi = require('./second_modules');
// const data = require('./alternative');
// require("./third_modules"); //會執行module裡的function
// console.log(names);
// console.log(data);
// sayHi(names.yoshino);
// sayHi(john);
// sayHi(yoshino);

//os modules

// const os = require('os');//default module

// //info about current user
// const user = os.userInfo();
// console.log(user);
// //method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`);
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

//path module
// const path = require('path');
// console.log(path.sep);
// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);


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


