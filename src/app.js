"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const userRouter = require('./Routes/userRoutes');
require('dotenv').config();
const myApp = () => {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/users', userRouter);
    app.use((req, res) => {
        res.status(404).send('PAGE NOT FOUND');
    });
    return app;
};
module.exports = myApp;
