
// method-router ver1.0
// const express = require('express');
// const app = express();
// let { people } = require('./data');

// //static assetes
// app.use(express.static('./method'))
// //why body parser:https://jimmyswebnote.com/why-use-express-bodyparser/
// //This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// //parse form data
// app.use(express.urlencoded({ extended: false }))
// //parse json data
// app.use(express.json())


// app.post('/login', (req, res) => {
//     console.log(req.body)
//     const { name } = req.body;
//     if (name) {
//         return res.status(200).send(`welcome ${name}`)
//     }
//     res.status(401).send('please provide your name')
// })

// router.get('/api/people', (req, res) => {
//     res.status(200).json({ success: true, data: people });
// })

// router.post('/api/people', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({ success: false, msg: 'please provide name value' })
//     }
//     res.status(201).json({ success: true, person: name })
// })

// router.put('/api/people/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;

//     const person = people.find(person => person.id === Number(id));

//     if (!person) {
//         return res.status(404).json({ success: false, msg: `no person with id ${id}` })

//     }

//     const newPeople = people.map(person => {
//         if (person.id === Number(id)) person.name = name;
//         return person;
//     })
//     res.status(200).json({ success: true, people: newPeople })

// })

// router.delete('/api/people/:id', (req, res) => {
//     const { id } = req.params;
//     const person = people.find(person => person.id === Number(id));

//     if (!person) return res.status(404).json({ success: false, msg: `no person with id ${id}` })

//     const newPeople = people.filter(person => person.id !== Number(id));
//     res.status(200).json({ success: true, people: newPeople })

// })



// app.listen(3000, () => {
//     console.log('listening on 3000...')
// })

// method-router ver2.0

const express = require('express');
const app = express();
const people = require('./routers/people')
const auth = require('./routers/auth')

//static assetes
app.use(express.static('./method'))
//why body parser:https://jimmyswebnote.com/why-use-express-bodyparser/
//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json data
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)


app.listen(3000, () => {
    console.log('listening on 3000...')
})