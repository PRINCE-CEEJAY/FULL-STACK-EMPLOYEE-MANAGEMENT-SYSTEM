import express from "express";
import cors from "cors";
import {
  createUser,
  readUser,
  updateUser,
  removeUser,
  createAdmin,
} from "./Crud/handleCRUD.js";
import { connectDB } from "./Crud/handleDB.js";

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(router);
app.use(express.json()); // To parse JSON bodies

//Database
connectDB();

//Home route
router.get("/", readUser);

//CRUD ROUTES
//admin Login
router.post("/auth/adminlogin", createAdmin);

//Creating Users
router.post("/auth/adminlogin", createUser);
router.get("/users", readUser);
router.put("/users/:id", updateUser);
router.delete("/user/:id", removeUser);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
