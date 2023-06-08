"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorsRouter = void 0;
const express_1 = require("express");
const colors_1 = require("../controllers/colors");
exports.colorsRouter = (0, express_1.Router)();
exports.colorsRouter.get('/', colors_1.colorsController.getAll);
