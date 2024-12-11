const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Connect to SQLite Database
const db = new sqlite3.Database(path.resolve(__dirname, "../database.sqlite"), (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

module.exports = db;