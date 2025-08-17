import express from "express"
import path from "path"
import { fileUrlToPath } from "url"

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.listen(port, () => {
  console.log(`berhasil terhubung ke port: ${port}`)
})