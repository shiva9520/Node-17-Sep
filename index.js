const express=require('express')
const connectToMongoDB = require('./connection')
const studentRoute = require('./routes/student')
const app=express()
const PORT=3000
app.use(express.json())

app.use('/',studentRoute)

connectToMongoDB()

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);        
    }else{
        console.log(`Server is running on ${3000}`);        
    }
})