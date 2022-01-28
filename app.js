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





