import { Sequelize } from "sequelize";
import dotnev from "dotenv";
dotnev.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        logging: false,
    },
);

const connectDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log("Connected tp PostgreSQL!");
        await sequelize.sync({
            alter: process.env.NODE_ENV === "development",
        });
        console.log("Table Synchronizes!");
    }   catch (error) {
        console.error("Connection failed", error);
        process.ecit(1);
    }
};
export { sequelize, connectDB};
