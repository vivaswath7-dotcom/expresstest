require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
    res.send('Vivaswath07')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login to the website</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>INDIAs BIGGEST SUPERSTAR PRABHAS</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
