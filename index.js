require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req ,res) => {
    res.send('twitter.com')
})

app.get('/login' , (req,res) => {
    res.send(`This is Login Server`)
})

app.get('/video' , (req , res) => {
    res.send(`Sending response`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})