"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('../../server/db/connection');
class userQueries {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield knex('users').select('*');
        });
    }
    postUsers(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield knex('users')
                .insert(newUser)
                .returning('*');
        });
    }
    updateUsers(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield knex('users')
                .update(updatedData)
                .where({ id })
                .returning('*');
        });
    }
    deleteUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield knex('users')
                .del()
                .where({ id })
                .returning('*');
        });
    }
}
module.exports = new userQueries();
