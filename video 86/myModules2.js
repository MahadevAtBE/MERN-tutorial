// if we remove   "type": "module", from package.json now our app.js is a comon js project and we cant use import syntax 
// and its not async now 

module.exports={
    a:1,
    b:5
}

let c=45;  // the last one get expotr by default
module.exports = c;