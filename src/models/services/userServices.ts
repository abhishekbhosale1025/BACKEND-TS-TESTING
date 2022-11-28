import { Express } from "express";
import {Request,Response} from 'express' ;

const userQueries = require('../queries/userQueries')

class userServices {
    async getUsers(){
        return await userQueries.getUsers() ;
    }

    async postUsers(req:Request){
        const newUser = req.body ;
        return await userQueries.postUsers(newUser) ;
    }

    async updateUsers(req:Request){
        const id = Number(req.params.id);
        const updatedData = req.body ;
        return await userQueries.updateUsers(id,updatedData) ;
    }

    async deleteUsers(req:Request){
        const id = Number(req.params.id);
        return await userQueries.deleteUsers(id) ;
    }
}

module.exports = new userServices() ;