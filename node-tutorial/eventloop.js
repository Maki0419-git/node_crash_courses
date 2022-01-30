//ref:https://nodejs.dev/learn/the-nodejs-event-loop
//video:https://www.youtube.com/watch?v=8aGhZQkoFbQ
//course.api.com

//ex1:
// const { readFile } = require('fs');
// console.log('started a first task')

// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log('completed first task')
// })
// console.log('starting next task')

// ex2:
// console.log('first')
// setTimeout(() => console.log('second'), 0) async
// console.log('third')

//ex3:
// setInterval(() => console.log('hello world'), 2000) async
// console.log('I will run first');


//ex4:
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home Page');
//         console.log('Home')
//         return;
//     }
//     if (req.url === '/about') {
//         //Blocking Code (also block other sock)
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 100; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('About page');
//         return;
//     }
//     res.end('Error');
//     return;
// })

// server.listen(3000, () => {
//     console.log('listening on 3000...')
// })

