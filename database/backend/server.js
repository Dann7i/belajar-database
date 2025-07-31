import express from "express";
import db from "./config/db.js";
import response from "./response.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  db.query("SELECT * FROM legenda", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    response(200, results, "get all pemain_bola", res);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
