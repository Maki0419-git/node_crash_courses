//stream
//當一個檔案過大，variable會塞不下
//ref:https://ithelp.ithome.com.tw/articles/10275524?sc=iThelpR
// create big file
// const { writeFileSync } = require('fs');
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./content/big-1.txt', `hello world ${i}\n`, { flag: 'a' })
// }


// const { createReadStream } = require('fs');
//https://nodejs.org/docs/v14.16.0/api/fs.html#fs_fs_createreadstream_path_options
//它並不是一次讀入全部的檔案內容，而是將檔案拆成好幾個 chunk，然後放入 buffer 中。等到部份的 chunk 讀寫完後
//，再從 buffer 中抓一些 chunk 出來讀寫。有點少量多餐的概念。
//will see three buffer，default of buffer is 64KB，but total is 165KB
// const stream = createReadStream('./content/big.txt');

//will see two buffer，one buffer is 90000bytes，other is remain
// const stream = createReadStream('./content/big1.txt',
//     {
//         highWaterMark: 90000,
//         encoding: 'utf-8'
//     });
// stream.on('data', (res,) => {
//     console.log(res)

// })

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // with readFileSync
    // const text = fs.readFileSync('./content/big-1.txt', 'utf-8')
    // res.end(text)
    // Request URL: http://localhost:3000/
    // Request Method: GET
    // Status Code: 200 OK
    // Remote Address: [::1]:3000
    // Referrer Policy: strict-origin-when-cross-origin
    // Connection: keep-alive
    // Content-Length: 2298170
    // Date: Sun, 30 Jan 2022 09:07:01 GMT
    // Keep-Alive: timeout=5
    const stream = fs.createReadStream('./content/big-1.txt', 'utf-8')
    stream.pipe(res);
    // Request URL: http://localhost:5000/
    // Request Method: GET
    // Status Code: 200 OK
    // Remote Address: [::1]:5000
    // Referrer Policy: strict-origin-when-cross-origin
    // Connection: keep-alive
    // Date: Sun, 30 Jan 2022 09:45:50 GMT
    // Keep-Alive: timeout=5
    // Transfer-Encoding: chunked



}).listen(5000)
