"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./routers/users");
const colors_1 = require("./routers/colors");
const dbInit_1 = require("./utils/dbInit");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, dbInit_1.dbInit)();
app.use((0, cors_1.default)());
app.use('/users', users_1.usersRouter);
app.use('/colors', colors_1.colorsRouter);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
