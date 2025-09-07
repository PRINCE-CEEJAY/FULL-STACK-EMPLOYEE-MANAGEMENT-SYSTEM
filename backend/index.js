import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.get("/auth/adminlogin", (req, res) => {
  res.send("Fronted submitted data page");
});

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
