// if we want to make a async program to write the file and red inside and go on it will make a callback hell 
// to get reid of callback hell we have promises

// const fs = require("fs/promises")  // not wark due to we are using async programming
import fs from "fs/promises" // changed "type":"module" now we can use async function

let a = await fs.readFile("sekhar.txt")
console.log(a.toString())
let b = await fs.writeFile("sekhar.txt","this is edited")
console.log(b)
let c = await fs.appendFile("sekhar.txt","\nappended file")
console.log(c)