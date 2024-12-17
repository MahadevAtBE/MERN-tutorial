// here we will make a schema(the formate of data) and export it to use it from main.js
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({ // making new schema model
    title:String,  // key:datatype
    // title:{type:String, required:true,default:"my todo"}, // we also can
    desc:String,
    isDone:Boolean
})

export const Todo = mongoose.model(`todo`, TodoSchema);
