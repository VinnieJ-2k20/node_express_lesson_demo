import { User } from "./models/User";
import { Color } from "./models/Color";
import { dbInit } from "./utils/dbInit";

const seedInitialData = async () => {
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
}

const sync = async () => {
  dbInit();
  
  await Color.sync({ alter: true });
  await User.sync({ alter: true });

  // await seedInitialData();
}

sync();
