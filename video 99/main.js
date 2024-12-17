const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Emplayee = require('./models/Employee')
const port = 3000
mongoose.connect('mongodb://localhost:27017/company')

app.set("view engine","ejs")

app.get('/', (req, res) => {
  res.render("index",{foo:"FOO"})
})

app.get('/generate', (req, res) => {
  res.render("index",{foo:"FOO"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})