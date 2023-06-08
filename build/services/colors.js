"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorsService = void 0;
const Color_1 = require("../models/Color");
function getAll() {
    return Color_1.Color.findAll();
}
function findById(colorId) {
    return Color_1.Color.findByPk(colorId);
}
exports.colorsService = {
    getAll,
    findById,
};
