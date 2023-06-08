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
const User_1 = require("./models/User");
const Color_1 = require("./models/Color");
const dbInit_1 = require("./utils/dbInit");
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    // await Color.bulkCreate([
    //   { name: 'Black' },
    //   { name: 'DeepPink' },
    //   { name: 'Red' },
    //   { name: 'Aquamarine' },
    //   { name: 'Gold' },
    //   { name: 'YellowGreen' },
    //   { name: 'Yellow' },
    // ]);
    // await User.bulkCreate([
    //   { name: 'Paul Mccartney', carColorId: 5 },
    //   { name: 'John Lennon', carColorId: 4 },
    //   { name: 'George Harrison', carColorId: 2 },
    //   { name: 'Ringo Starr', carColorId: 2 },
    // ]);
});
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbInit_1.dbInit)();
    yield Color_1.Color.sync({ alter: true });
    yield User_1.User.sync({ alter: true });
    // await seedInitialData();
});
sync();
