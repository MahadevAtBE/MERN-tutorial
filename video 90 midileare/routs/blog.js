const express = require("express")
const rout=express.Router()

rout.get("/",(req,res)=>{
    res.send("This is my blog page")
})

module.exports=rout;
