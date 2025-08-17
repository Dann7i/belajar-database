import express from "express"
import path from "path"
import { fileURLToPath } from "url";

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.query(sql, [username, password], (err, results) => {
    if(err) {
      console.error("error saat kueri database: ", err);
      res.status(500).json({ success: false, message: "terjadi kesalahan server"});
      return;
    }
    if(results.lenght > 0 ) {
      res.json({ success: true, message: `halo,  ${username}! login berhasil..`})
    } else {
      res.json({ success: false, message: "Username atau password salah." });
    }
  })
})

app.listen(port, () => {
  console.log(`berhasil terhubung ke port: ${port}`)
})