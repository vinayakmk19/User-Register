import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Error Connecting to Database!"));

    db.once("open", function () {
      console.log("Successfully Connected to Database :: MongoDB");
    });

  } catch (error) {
    console.error("MONGO DB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
