import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected! Host: ${connectionInstance.connection.host}\n`
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
