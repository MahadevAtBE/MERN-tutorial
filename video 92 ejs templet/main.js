// creating a server 
const express = require('express')
const app = express()
const port = 3000


//ejs is a templet engine thet give you the power to pass variables from our server to html file
// to install ejs mpn install ejs
//folder name views
//have to save .html to .ejs

app.set('view engine','ejs') // setting ejs moddeleware //https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// app.get / app.post / app.put / app.delete(path,handler)
app.get('/', (req, res) => {
  let siteName ="MY WEBSITE"
  let searchText ="SEARCH NOW"  // variables
  let arr = ["pokemon-1",1,45,65,78,21,8] // passing array
  // res.sendFile('templates/index.html', {root: __dirname})  // using sendFile to access index.html
  res.render('index', {siteName:siteName,searchText:searchText,arr})  //only file name index is enough // to render a view templet
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})