//requirement libraries or functionality. 
const express=require('express');
const app=express();
require('dotenv').config();
require('./models/index');


// controler
const userRouter=require('./Routes/userRoutes');

// middleware
const body_parser=require('body-parser')
app.use(body_parser.json());   // parse application/json

// routing
app.use("/api/user",userRouter);

const port=process.env.port || 3000;

// server 
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})