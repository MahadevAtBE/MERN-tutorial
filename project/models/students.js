const mongoose = require ("mongoose")  // impotting mongoosedb
const studentSchema = new mongoose.Schema({  // making a new schema
    name:{ // name fild of data
        type:String,  //data type
        required: true  // importent must be fild
    },
    email:{
        type:String,
        required: true ,
        unique:true
    },
    password:{
        type:String,
        required: true 
    }
})

const Students = mongoose.model(`students`,studentSchema)  //  this students is the name of schema
module.exports = Students