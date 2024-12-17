 // to install express we have to command npm i express@4 .. 4 is the version we are going with

// creating a server 
const express = require('express')
const app = express()
const port = 3000

//link: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public')) // this is making public folder accesable to all through same name end point

// app.get / app.post / app.put / app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!22')
})
// // if we make some example of pages / defirent endpoints
//     app.get('/blog', (req, res) => {
//     res.send('bloges herre')
//     })
//     app.get('/blog/js', (req, res) => {
//         //here will be the logic to fatch data from db
//     res.send('blog on js')
//     })
//     // if we have too much blogs it will be to many end points to write by my own so we will use


    app.get('/blog/:slug', (req, res) => { // here slug  are the peramiters passing on
        //here will be the logic to fatch {slug} from db
        //http://127.0.0.1:3000/blog/py?mode=dark .. for this url 
        // console.log(req.params)//{ slug: 'py' } 
        // console.log(req.query) //{ mode: 'dark' }
    res.send(`blog on ${req.params.slug}`)
    })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})