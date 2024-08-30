require('dotenv').config();

const express = require('express')
const app = express();
const port = 3000;

app.get('/home',(req, res)=>{
    res.send("hwlloe");
});
app.get('/start',(req, res)=>{
    res.send('<h1>header tag</h1>')
})
app.get('/null',(req, res)=>{
    res.send("null response");
})
app.listen(process.env.PORT, ()=>{
    console.log(`port is starting at ${port}`);
})