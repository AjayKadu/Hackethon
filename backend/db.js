const mysql = require("mysql2");

// Create the connection pool.
const conn = mysql.createConnection({
  host: "localhost",
  user: "W3_87373_Ajay",
  password: "manager",
  database: "hybrid",
});

module.exports = conn;
