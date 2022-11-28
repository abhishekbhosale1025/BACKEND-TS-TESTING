import { Request,Response } from "express";
const express = require('express') ;
const userRouter = require('./Routes/userRoutes')
require('dotenv').config() ;

const myApp = () =>{
    const app = express();
    app.use(express.urlencoded({extended:true}));
    app.use(express.json()) ;
    app.use('/users',userRouter);
    app.use((req:Request,res:Response)=>{
        res.status(404).send('PAGE NOT FOUND')
    })
    return app;
}

module.exports = myApp ;