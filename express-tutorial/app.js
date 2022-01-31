const express = require('express');
const app = express();//create server instance


app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(3000, () => console.log('listening on 3000...'))
//app.get
//app.post
