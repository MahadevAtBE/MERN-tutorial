// to use the mongoDV via mongoos we have to install mongoose
// npm i mongoose

import mongoose from "mongoose";  // importing mongoose
let con = await mongoose.connect("mongodb://localhost:27017/todo")  // connecting mongoose to local db
import { Todo } from "./models/Todo.js"; // importing todo 

import express from "express";  // making exoress server
const app = express()
const port = 3000

app.get('/', (req, res) => { // bottom data will be save after hitting on thos end point
    const todo = new Todo ({ // making a data on the custom schema of Todo.js
        title:"first todo",
        desc:"description of todo",  // if we fill another formet of data then predefine schema we will get velidation error
        isDone:false
    })
    todo.save() // saving the data
  res.send('Hello World!22')
})

app.get('/find', async (req, res) => { 
    let todo = await Todo.findOne({}) // finding the specific data
  res.json({totle:todo.title, desc:todo.desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })