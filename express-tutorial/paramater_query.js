const express = require('express');
const app = express();
const { products } = require('./data');

//docu:https://expressjs.com/zh-tw/4x/api.html

app.get('/', (req, res) => {
    //Sends a JSON response. This method sends a response
    // (with the correct content-type) that is the parameter converted to 
    //a JSON string using JSON.stringify().
    //res.json(products)
    res.send('<h1>Homepage</h1><a href="/api/products">products</a>')
})

app.get('/api/products/', (req, res) => {
    //minimal response
    res.json(products.map(i => i.desc));
})

//with parameter-1
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find(product => product.id === 1)
    res.json(singleProduct);
})

//with parameter-2
app.get('/api/products/:id', (req, res) => {
    console.log(req.params); //{ id: '2' }
    const singleProduct = products.find(product => product.id === Number(req.params.id))
    if (!singleProduct) {
        //error handle
        res.status(404).send('no product found');
    } else {
        res.json(singleProduct);
    }
}
)
//complex
app.get('/api/products/:id/reviews/:reviewID', (req, res) => {
    console.log(req.params); //{ id: '3', reviewID: 'abc' }
    res.send('hello')
})

//with query
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    console.log(req.query);//{ search: 'melody', limit: '6' }
    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search)
        })
    }

    if (sortedProducts.length < 1) return res.status(200).json({ success: true, data: [] })

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts);


})

app.listen(3000, () => {
    console.log('listening on 3000...')
})