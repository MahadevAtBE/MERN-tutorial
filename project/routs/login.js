const express = require("express")
const path = require("path")
const students = require("../models/students")
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../", 'src', 'login.html'));
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundEmail = await students.findOne({ email: email })  // finding the value avilable in db or not
    let foundPassword = await students.findOne({ password: password })  // finding the value avilable in db or not
    if (foundEmail!==null && foundPassword!=null) {
      res.sendFile(path.join(__dirname, "../", 'src', 'main.html'))
    }
    else{
      res.sendFile(path.join(__dirname, "../", 'src', 'signUp.html'))  // TODO: send data woth html to show that you dont have an account
    }
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal server ERROR")
  }
}
)

module.exports = router;