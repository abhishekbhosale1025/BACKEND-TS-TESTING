import { Request,Response } from "express";
const knex = require('../../server/db/connection')


class userQueries {
    async getUsers() {
        return await knex('users').select('*')
    }

    async postUsers(newUser:any) {
            return await knex('users')
            .insert(newUser)
            .returning('*')
    }

    async updateUsers(id:number,updatedData:any){
        return await knex('users')
        .update(updatedData)
        .where({id})
        .returning('*') ;
    }

    async deleteUsers(id:number){
        return await knex('users')
        .del()
        .where({id})
        .returning('*')
    }
}

module.exports = new userQueries() ;