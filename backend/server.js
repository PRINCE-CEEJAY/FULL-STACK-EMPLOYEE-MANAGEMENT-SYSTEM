import express from "express";
import cors from "cors";
import {
  createUser,
  readUser,
  readAllUsers,
  updateUser,
  removeUser,
} from "./Crud/handleCRUD.js";
import { connectDB } from "./Crud/handleDB.js";

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);
app.use(express.json()); // To parse JSON bodies

//Database
connectDB();

//Home route
router.get("/", readUser);

//CRUD ROUTES

//Creating Users
router.post("/register", createUser);
router.get("/users/:id", readUser);
router.get("/users", readAllUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", removeUser);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
