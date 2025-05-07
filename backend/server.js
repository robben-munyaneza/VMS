const express = require ('express');
const app = express();
const port =5000;
const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('successfuly connected');
})
.catch(err => console.error('error' , err));

app.get('/', (req,res)=>{
    res.send('hello');
});

app.listen(port,()=>
    console.log('server running on port ${port}'));