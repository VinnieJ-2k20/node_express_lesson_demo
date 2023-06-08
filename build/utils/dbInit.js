"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const URI = 'postgres://VinnieJ-2k20:7tDaN3kfVipR@ep-square-butterfly-738775.eu-central-1.aws.neon.tech/neondb';
const dbInit = () => {
    try {
        const db = new sequelize_typescript_1.Sequelize(URI, {
            models: models_1.models,
            dialectOptions: {
                ssl: true,
            }
        });
        console.log('DB successfully initialized');
        return db;
    }
    catch (error) {
        console.log('DB failed to connect', error);
    }
};
exports.dbInit = dbInit;
