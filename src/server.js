require('dotenv').config()
require('./mongodb')

const routes = require('./routes')
const express = require('express')
const app = express()
const signale = require('signale')

app.use(express.json())

const port = process.env.port || 3023;

app.use('/api', routes)

app.listen(port, ()=>{
    signale.success(`server started port: ${port}`)
})