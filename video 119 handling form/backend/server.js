// this is express the backend of our app to get the data from frontend 
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(cors()) // due to our react frontend, and express backend is running on two diferent port we ned this cors
app.use(bodyParser.json()) // this is to parse json data comming from frontend

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})