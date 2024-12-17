// **** CREATING DB ******
use('crudDB') // this will create a db named crudDB and switch tp it as warking db
// console.log(db) // will print the current warking db

// **** CREATING COLLECTION ******
db.createCollection("courses") // will make the collection named courses


// **** INSERTING DATA ******
db.courses.insertOne({ // to insert one document
    name: "web development",
    price: 0,
    assignment: 15,
    project: 74
})

db.courses.insertMany([ // to insert many datas
    {name: "web development",
    price: 0,
    assignment: 15,
    project: 74},

    {name: "app development",
    price: 12000,
    assignment: 98,
    project: 210},
])

// **** FINDING DATA ******
let a = db.courses.find({price:0}) // to find all data with given condition
let b = db.courses.findOne({price:0})  // to find first data with given condition
// console.log(a) // a is a object
console.log(a.count()) // total number of data
console.log(a.toArray()) // will return an array of total data

// **** UPDATE DATA ******
db.courses.updateOne({price:12000}, {$set:{price:5000}})   // this will find first data with given condition andmupdate it
db.courses.updateMany({price:12000}, {$set:{price:5000}})   // this will find first data with given condition andmupdate it
// set is a atomic operater

// **** DELETE DATA ******
db.courses.deleteOne({price:0})
db.courses.deleteMany({price:0})