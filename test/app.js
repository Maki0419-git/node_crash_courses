const http = require('http');


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
        res.write('<h1>Welcome Home!</h1>') //up to you，if you use write()，end() is neccessary
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
