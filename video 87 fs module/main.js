// warking with fs(File system) module 
const { error } = require("console")
const fs = require("fs")
// console.log(fs)

// create file 
fs.writeFileSync("sekhar.txt","its a sunc program") // it is syncronyse system it block the thred until it execute complitly
fs.writeFile("sekhar2.txt","its a async program", ()=>{
    console.log("done") // its a async function so it takes a callback function
}) // it warks asyncly at the same time other codes runes

// fs.readFile
fs.readFile("sekhar.txt",(error, data)=>{
    console.log(error,data.toString())// have to convert the data to string
})

// file append 
fs.appendFile("sekhar.txt","somthing to append",(e,d)=>{
    console.log(d)
})