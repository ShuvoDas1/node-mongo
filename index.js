const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users = ['sakib','rakib','opu','hridoy','montasir','piku','keramot']

const app = express()
app.use(cors());
app.use(bodyParser.json())

//Get
app.get('/',(req,res) =>{
    res.send('i can open node js again  ....YAY41');
})

app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id,name})
})

//Post

app.post('/adduser',(req,res) => {
   const user = req.body;
   user.id  =  25;
   res.send(user)
    
})

app.listen(3001,()=> console.log('Start with port 3001'))