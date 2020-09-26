const express = require('express')


const app = express()

app.get('/',(req,res) =>{
    res.send('i can open node js   ....YAY');
})

app.listen(3001,()=> console.log('Start with port 3001'))