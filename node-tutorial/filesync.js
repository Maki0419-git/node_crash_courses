const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf-8') //等他做完才會繼續
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second);


// //overwrite 之前的內容
// writeFileSync('./content/async-result.txt.txt', `Here is the result:${first},${second}`)
// //append
// writeFileSync('./content/async-result.txt.txt', ` append test Here is the result:${first},${second}`, { flag: 'a' })


writeFileSync('./content/sync-result.txt',
    ` Here is the result with sync:${first},${second}`, { flag: 'a' })
console.log("done with this task");
console.log("start the next one");

//with async await
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) {
//                 //console.log(err);
//                 reject(err);
//                 return;
//             } else {
//                 // console.log(result);
//                 resolve(result);
//             }
//         })

//     })
// }

//getText('./content/first.txt').then(res => console.log(res)).catch(err => console.log(err));

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first);
//         console.log(second);
//     } catch (err) {
//         console.log(err);
//     }
// }

// start();

//with util promise
// const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);



// const startPromise = async () => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf-8');
//         const second = await readFilePromise('./content/second.txt', 'utf-8');
//         await writeFilePromise('./content/result-promisify.txt', `This is awesome: ${first} ${second}`);
//         console.log(first);
//         console.log(second);
//     } catch (err) {
//         console.log(err);
//     }
// }

// startPromise();



//.promises
// const { readFile, writeFile } = require('fs').promises;

// const startPromise = async () => {
//     try {
//         const first = await readFile('./content/first.txt', 'utf-8');
//         const second = await readFile('./content/second.txt', 'utf-8');
//         await writeFile('./content/result-promisify.txt', `This is awesome: ${first} ${second}`, { flag: 'a' });
//         console.log(first);
//         console.log(second);
//     } catch (err) {
//         console.log(err);
//     }
// }

// startPromise();
