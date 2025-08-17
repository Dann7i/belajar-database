import mysql from "mysql2"

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wildan123",
  database: "wildandb"
})

connection.connect(function(err){
  if(err) {
    console.error("koneksi gagal:" + err.stack)
    return;
  }
  console.log("koneksi berhasil sebagai id:" + connection.threadId)
})

export default connection;
