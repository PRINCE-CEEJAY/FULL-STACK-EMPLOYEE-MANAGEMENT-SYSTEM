import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

const port = process.env.PORT;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.get("/", (req, res) => {
  res.send("<h1>This is the Home Route</h1>");
});

app.post("/auth/adminlogin", (req, res) => {
  const admin = req.body;
  db.query(
    "INSERT INTO admin  (username, password) VALUES (?, ? );",
    [admin.username, admin.password],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("Values inserted");
        console.log("Values inserted");
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM admin", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
