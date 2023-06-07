import { User } from "./models/User";
import { Color } from "./models/Color";
import { dbInit } from "./utils/dbInit";

const sync = async () => {
  dbInit();
  
  await Color.sync({ alter: true });
  await User.sync({ alter: true });
}

sync();
