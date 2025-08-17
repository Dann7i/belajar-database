import express from "express"
import path from "path"
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`berhasil terhubung ke port: ${port}`)
})