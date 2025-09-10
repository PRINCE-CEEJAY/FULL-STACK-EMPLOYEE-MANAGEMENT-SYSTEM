import mongoose from "mongoose";
const URL = process.env.URL || 3000;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Unable to connect to Database", error);
  }
};
const ceesund = mongoose.Schema({
  name: String,
  email: String,
  staffId: Number,
  dateEmployed: Number,
  salary: Number,
  payDay: Number,
});
export const staff = mongoose.model("staff", ceesund);
