const http = require('http');
const { readFileSync } = require('fs');

//get all files
//before user hit server，html is ready
const homepage = readFileSync('./myWeb/index.html');
const homestyle = readFileSync('./myWeb/web.css');
const lisa1 = readFileSync('./myWeb/lisa-1.jpg')
const lisa2 = readFileSync('./myWeb/lisa-2.jpg')
const lisa3 = readFileSync('./myWeb/lisa-3.jpg')
// const server = http.createServer((req, res) => {
//     console.log('user hit the server')
//     res.end('Home')//didnt provide any info
// })

const server = http.createServer((req, res) => {
    console.log('user hit the server')
    //console.log(req)
    //req object
    // url: '/',
    // method: 'GET',
    const url = req.url;
    //Home page
    if (url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' })//create header
        //res.writeHead(200, { 'content-type': 'text/plain' }) //respond with text
        //statusCode:
        // 資訊回應 (Informational responses, 100–199),
        // 成功回應 (Successful responses, 200–299),
        // 重定向 (Redirects, 300–399),
        // 用戶端錯誤 (Client errors, 400–499),
        // 伺服器端錯誤 (Server errors, 500–599).
        //content-type: describe what you sending back
        res.write(homepage) //up to you，if you use write()，end() is neccessary
        res.end()//always need
    }
    //Hone style
    else if (url === '/web.css') {
        res.writeHead(200, { 'content-type': 'text/css' })//create header
        res.write(homestyle) //up to you，if you use write()，end() is neccessary
        res.end()//always need
    }
    else if (url === '/lisa-1.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })//create header
        res.write(lisa1) //up to you，if you use write()，end() is neccessary
        res.end()//always need
    }
    else if (url === '/lisa-2.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })//create header
        res.write(lisa2) //up to you，if you use write()，end() is neccessary
        res.end()//always need
    }
    else if (url === '/lisa-3.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })//create header
        res.write(lisa3) //up to you，if you use write()，end() is neccessary
        res.end()//always need
    }
    //About Page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })//create header
        res.write('<h1>Welcome About!</h1>') //up to you，if you use write()，end() is neccessary
        res.end()//always need
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })//create header
        res.write('<h1>Not Found</h1>') //up to you，if you use write()，end() is neccessary
        res.end()//always need
    }

})

//http service have sepcific ports
//80=>http
//443=>Https
server.listen(3000)