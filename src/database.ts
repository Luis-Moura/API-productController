import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config()


const DATABASE_NAME: string | undefined = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DABATASE_PASSWORD = process.env.DABATASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;

if (!DATABASE_NAME || !DATABASE_USER || !DABATASE_PASSWORD || !DATABASE_HOST) {
    throw new Error(
        "One or more required environment variables are not defined",
    );
}

export const connection: Sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USER,
    DABATASE_PASSWORD,
    {
        host: DATABASE_HOST,
        dialect: "mysql",

        logging: false,
    },
);
