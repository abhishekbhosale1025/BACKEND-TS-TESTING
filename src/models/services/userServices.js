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
const userQueries = require('../queries/userQueries');
class userServices {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userQueries.getUsers();
        });
    }
    postUsers(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = req.body;
            return yield userQueries.postUsers(newUser);
        });
    }
    updateUsers(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const updatedData = req.body;
            return yield userQueries.updateUsers(id, updatedData);
        });
    }
    deleteUsers(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            return yield userQueries.deleteUsers(id);
        });
    }
}
module.exports = new userServices();
