// write npm init -y  to ignor all questions bu npm 
// npm i express jsonwebtoken dotenv .. here we r installing 3 modules

// to make a local server on own system 
// link: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

// const { createServer } = require('node:http');  // importing moduls with the help of requird

// we have make the package.json type to module so we can use all the modules asyncly
// app crashed 
// but now we cannot use requise syntax to import 
// insted we have to do 
// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {  // added http.
//   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// // for HTML do this 
//   res.setHeader('Content-Type', 'text/html');
// //   res.end('Hello World');
//   //   or we can write html formate 
//   res.end('<h1>hello world it is sekhar edited</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// to automate the server restert we need to install npm install --global nodemon
// --global for all projects
// now handover the file to nodemon to watch for changes like nodemon appendFile.js
// or go for npx nodemon appendFile.js


//*** in es module *** nyModule.js
// named import 
// import {a,b,c,d,e} from "./muModules.js"
// console.log(a,b,c,d,e)

// default import 
import obj from "./muModules.js"  // we dont ned to name the same
console.log(obj)

// **** in common module *** nyModule2.js
// const a = require("./myModules2.js")  // require is old syntax
// console.log(a)