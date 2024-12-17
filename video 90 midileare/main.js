// creating a server 
const express = require('express')
const app = express()
const port = 3000

// using routs 
// const blog = require('./routs/blog')  // geting local module from routs/blog file
// app.use('/blog', blog)  // this will redirect all the end point of blog to routs 

// ***** MIDILWARE ******
// midilware are the functions that can interect woth the request and responce 
// they are besecaly function with the purmision to act first on any interection
// const myMware = function(req,res,next){ // making the midilware
//   console.log("midilware warking fine")
//   next()
// }
// app.use(myMware) // calling frome app.use
// or we can short it like
app.use((req,res,next)=>{ // making the midilware
  // res.send("this is a middelware") // cant use res.send because this will block the header
  console.log(`date = ${Date.now()} Methid = ${req.method}\n`)
  req.var="custom var" // we can make custom variables
  next() // next redirect it to next midillware
})

// handaling routs are also middelware
const blog=require("./routs/blog.js")
app.use("/blog",blog)


app.use(express.static("public")) // to make the file public to accesable from script of mypage.html

// app.get / app.post / app.put / app.delete(path,handler)
app.get('/', (req, res) => {
    console.log("its a get request")
  res.send('Hello World! '+req.var) // access custom var from anyware
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})