import { Sequelize } from "sequelize-typescript";
import { models } from "../models";

const URI = 'postgres://VinnieJ-2k20:7tDaN3kfVipR@ep-square-butterfly-738775.eu-central-1.aws.neon.tech/neondb';

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
