const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ("mongoose")
const cors = require('cors');

// all routs require
const login =require ("./routs/login")
const signUp =require ("./routs/signUp")
const delet = require ("./routs/delete")

const app = express();
const PORT = 3000;


// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded data from pages
app.use(bodyParser.json()); // To parse JSON data from pages
app.use(express.static("src"))   // to make the src fille public.. this make css visible

// all routs divertion
app.use("/signUp",signUp)
app.use("/login",login)
app.use("/delete",delet)

mongoose.connect("mongodb://localhost:27017/student")  // connecting mongoose. db name student

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
