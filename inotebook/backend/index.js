const connectToMongo=require('./db');

connectToMongo();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/v1/signup',(req,res)=>{
  res.send("hello signup!")
})
app.get('/api/v1/login',(req,res)=>{
  res.send("hello login!")
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})