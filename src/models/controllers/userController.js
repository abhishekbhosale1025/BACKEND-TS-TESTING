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
const userServices = require('../services/userServices');
class userController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield userServices.getUsers();
            try {
                res.status(200).send({ code: 200, message: 'Get Request Successful', data });
            }
            catch (e) {
                res.status(401).send(e);
            }
        });
    }
    postUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield userServices.postUsers(req);
            try {
                res.status(200).send({ code: 200, message: 'Post Request Successful', data });
            }
            catch (e) {
                res.status(401).send(e);
            }
        });
    }
    updateUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield userServices.updateUsers(req);
            try {
                res.status(200).send({ code: 200, message: 'Update Request Successful', data });
            }
            catch (e) {
                res.status(401).send(e);
            }
        });
    }
    deleteUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield userServices.deleteUsers(req);
            try {
                res.status(200).send({ message: 'Delete Request Successful' });
            }
            catch (e) {
                res.status(401).send(e);
            }
        });
    }
}
module.exports = new userController;
