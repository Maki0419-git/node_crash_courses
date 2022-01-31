const express = require('express');
const path = require('path');
const app = express();//create server instance


//save static resource
//setup static and middleware
//static asset is an asset that server dont need to change it ex:css/image/js
//express will set up its mimetype/status code
app.use(express.static('./public'))


app.get('/', (req, res) => {
    // res.status(200).send('Home page')
    res.sendFile(path.resolve(__dirname, './myWeb/index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).send('About page')
})

//handle all http calls
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})


app.listen(3000, () => console.log('listening on 3000...'))
//app.get
//app.post
