"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const User_1 = require("../models/User");
function getAll() {
    return User_1.User.findAll();
}
function findById(userId) {
    return User_1.User.findByPk(userId);
}
function create(name, carColorId) {
    return User_1.User.create({
        name,
        carColorId,
    });
}
exports.usersService = {
    getAll,
    findById,
    create,
};
