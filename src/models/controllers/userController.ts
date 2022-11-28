import { Request,Response } from "express";
const userServices = require('../services/userServices');

class userController {
    async getUsers(req:Request,res:Response) {
        const data = await userServices.getUsers();
        try{

            res.status(200).send({code:200,message:'Get Request Successful',data})
        }
        catch(e){
            res.status(401).send(e)
        }
    }

    async postUsers(req:Request,res:Response) {
        const data = await userServices.postUsers(req);
        try{
            res.status(200).send({code:200,message:'Post Request Successful',data})
        }
        catch(e){
            res.status(401).send(e)
        }
    }

    async updateUsers(req:Request,res:Response) {
        let data = await userServices.updateUsers(req);

        try{
            res.status(200).send({code:200,message:'Update Request Successful',data})
        }
        catch(e){
            res.status(401).send(e)
        }
    }

    async deleteUsers(req:Request,res:Response) {
        await userServices.deleteUsers(req);
        try{
            res.status(200).send({message:'Delete Request Successful'})
        }
        catch(e){
            res.status(401).send(e)
        }
    }
}

module.exports = new userController;