const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()
app.use(express.json())

const port = 3000;



app.listen({port} , () => console.log(`herd you on ${port}`))