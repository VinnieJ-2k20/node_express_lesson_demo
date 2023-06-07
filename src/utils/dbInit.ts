import { Sequelize } from "sequelize-typescript";
import { models } from "../models";

const URI = 'postgres://VinnieJ-2k20:IdobfNsAB3D6@ep-morning-mode-462620.eu-central-1.aws.neon.tech/neondb';

export const dbInit = () => {
  try {
    const db = new Sequelize(
      URI,
      {
        models,
        dialectOptions: {
          ssl: true,
        }
      }
    );

    console.log('DB successfully initialized');

    return db;
  } catch (error) {
    console.log('DB failed to connect', error);
  }
}
