const express = require ("express")
const path =  require ("path")
const students = require("../models/students")
const router= express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"../", 'src', 'delete.html')); // Send index.html when accessing root
  });

router.post('/', async (req, res) => {
    const { email, password} = req.body;
    try {
      let foundEmail = await students.findOne({ email: email })  // finding the value avilable in db or not
      let foundPassword = await students.findOne({ password: password })  // finding the value avilable in db or not

      if (foundEmail!==null && foundPassword!=null) {
       await students.deleteOne(foundEmail)
       res.send("Account deleted") // TODO: send data woth html to show that you dont have an account
       res.sendFile(path.join(__dirname,"../", 'src', 'main.html'))
      }
      else{
        res.send("Account Not Found") // TODO: send data woth html to show that you dont have an account
      }
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal server ERROR")
    }
});

  module.exports=router;