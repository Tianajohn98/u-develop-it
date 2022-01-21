const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "tiajohn",
  // Your MySQL password
  password: "birdgymmy",
  database: "election",
});

module.exports = db;
