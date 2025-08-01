import express from "express";
import db from "./config/db.js";
import response from "./response.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  db.query("SELECT * FROM legenda", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    response(200, results, "GET ALL PEMAIN BOLA", res);
  });
});
app.post("/", (req, res) => {
  const { nama, negara, posisi, klub_terakhir } = req.body;
  console.log(req.body);
  const sql = "INSERT INTO legenda (nama, negara, posisi, klub_terakhir) VALUES (?, ?, ?, ?)";
  const values = [nama, negara, posisi, klub_terakhir];
  db.query(sql, values, (err, results) => {
    console.log(results);
    if (err) throw err;
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
