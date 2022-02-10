const express = require('express');
const app = express();
let { people } = require('./data');

//static assetes
app.use(express.static('./method'))
//why body parser:https://jimmyswebnote.com/why-use-express-bodyparser/
//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json data
app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide your name')
})


app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.listen(3000, () => {
    console.log('listening on 3000...')
})

