"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const Color_1 = require("./Color");
let User = exports.User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
    })
], User.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], User.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Color_1.Color),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        field: 'car_color_id',
        type: sequelize_1.DataTypes.INTEGER,
    })
], User.prototype, "carColorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Color_1.Color)
], User.prototype, "color", void 0);
exports.User = User = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'users',
        createdAt: false,
        updatedAt: false,
    })
], User);