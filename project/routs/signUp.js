const express = require ("express")
const path =  require ("path")
const students  = require("../models/students") // importing db schema
const router= express.Router()

router.get('/',async (req, res) => {
    res.sendFile(path.join(__dirname,"../", 'src', 'signUp.html')); // Send index.html when accessing root
  });
  router.post('/', async (req, res) => {    
    const {name, email, password}= req.body
    try {
      const student = new students ({
        "name":name,
        "email":email,
        "password":password
      })
      await student.save()
      res.sendFile(path.join(__dirname,"../", 'src', 'main.html'))
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal server ERROR")
    }
  });

  module.exports=router;