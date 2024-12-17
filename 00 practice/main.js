 // to install express we have to commanp npm i express@4 .. 4 is the version we are going with

// creating a server 
const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})