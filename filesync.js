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