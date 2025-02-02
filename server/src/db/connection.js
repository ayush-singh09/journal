import mongoose from "mongoose";
import { CONNECTION_STRING, DB_NAME } from "../utils/constants.js";

export const connectDB = () => {
  try {
    mongoose.connect(CONNECTION_STRING + DB_NAME);
    console.log(`Successfully Connected the DB`);
  } catch (err) {
    console.log("Following error occured while connecting to DB", err);
  }
};
