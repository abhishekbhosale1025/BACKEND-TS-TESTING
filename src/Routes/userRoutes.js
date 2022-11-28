"use strict";
const { Router } = require('express');
const userController = require('../models/controllers/userController');
const userRouter = Router();
userRouter.get('/get', userController.getUsers);
userRouter.post('/post', userController.postUsers);
userRouter.put('/put/:id', userController.updateUsers);
userRouter.delete('/delete/:id', userController.deleteUsers);
module.exports = userRouter;
