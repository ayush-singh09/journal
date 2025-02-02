import { configDotenv } from "dotenv";
configDotenv();

const PORT = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DB_NAME = process.env.DB_NAME;

export { PORT, CONNECTION_STRING, DB_NAME };
