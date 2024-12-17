// creating a server 
const express = require('express')
const app = express()
const port = 3000

// using routs 
const blog = require('./routs/blog')  // geting local module from routs/blog file
app.use('/blog', blog)  // this will redirect all the end point of blog to routs 


app.use(express.static("public")) // to make the file public to accesable from script of mypage.html

// app.get / app.post / app.put / app.delete(path,handler)
app.get('/', (req, res) => {
    console.log("its a get request")
  res.send('Hello World!')
}).post('/', (req, res) => {  //this is chaining of rewuests
    console.log("its a post request")
  res.send('Hello World! posetd')
})
app.put('/', (req, res) => {
    console.log("its a put request")
  res.send('Hello World! put')
})

// to send a file (html/text/etc)
app.get('/index', (req, res) => { 
    console.log("its a index")
  res.sendFile('templet/index.html',{root:__dirname}) // have to give root or absulute path
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})