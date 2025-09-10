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
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  staffId: { type: String, required: true },
  dateEmployed: { type: String, required: true },
  salary: { type: String, required: true },
  payDay: { type: String, required: true },
});
export const staff = mongoose.model("staff", ceesund);
