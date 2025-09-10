import mongoose from "mongoose";
const URL = process.env.URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Unable to connect to Database", error);
  }
};
