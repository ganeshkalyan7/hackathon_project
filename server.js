const express=require('express');
const mongoose = require('mongoose');
const router=require("./routes/show-routes")
const app= express()


    //middleware
    app.use(express.json());
    app.use("/movies",router)

mongoose.connect('mongodb+srv://ganeshkalyan:ganeshcristiano@cluster0.9ib1a.mongodb.net/bookMyshow?retryWrites=true&w=majority')
.then(()=> console.log("MongoDB Connected"))
.catch(err=>console.log(err))


  
       









app.listen(5000,()=>console.log('server is running.......'))