"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
// const app = express() ;
// require('dotenv').config();
// const userRoutes = require('./Routes/userRoutes')
const PORT = process.env.PORT || 5555;
// app.use(express.json()) ;
// app.use(express.urlencoded({extended:true})) ;
// app.use('/users',userRoutes) ;
// app.get('/',(req:Request,res:Response)=>{
//     res.status(200).send('Hey AB is here...')
// })
const myAppli = require('./app');
const server = myAppli();
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
