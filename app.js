import express from "express";
import dotenv from "dotenv";
import db from "./db/connection.js";
import path from "path";

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  const query = "SELECT * FROM employees";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.render("index", { employees: results });
  });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
