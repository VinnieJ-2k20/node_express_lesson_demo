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
exports.usersController = void 0;
const users_1 = require("../services/users");
const colors_1 = require("../services/colors");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.usersService.getAll();
    res.send(users);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const foundUser = yield users_1.usersService.findById(+userId);
    if (!foundUser) {
        res.sendStatus(404);
        return;
    }
    res.send(foundUser);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, carColorId } = req.body;
    const nameIsValid = Boolean(name) && typeof name === 'string';
    const carColorIdIsValid = ((yield colors_1.colorsService.findById(carColorId))
        && typeof carColorId === 'number');
    if (!nameIsValid || !carColorIdIsValid) {
        res.sendStatus(422);
        return;
    }
    const newUser = yield users_1.usersService.create(name, carColorId);
    res.status(201);
    res.send(newUser);
});
exports.usersController = {
    getAll,
    getById,
    create
};
