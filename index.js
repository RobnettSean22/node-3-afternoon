const express = require('express')
const app = express()
const massive = require('massive')
const {getAll, getOne, update, create, deleteProduct} = require('./controller/product_controller')
require('dotenv').config()
app.use(express.json())
const {CONNECTION_STRING} = process.env;

let db;
massive(CONNECTION_STRING).then(dbInstance => {
    console.log('database connected')
    app.set('db', dbInstance)
})
const port = 3000;

app.get('/api/products', getAll)

app.get('/api/products/:id', getOne)

app.put('/api/products/:id', update)

app.post('/api/products', create)

app.delete('/api/:id', deleteProduct)



app.listen({port} , () => console.log(`herd you on ${port}`))