// GET / user:      To fetch and show (userid, username, email) of all users.

const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
const port = 8080;

// Set views for view folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_web",
});

// Home page route

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Error in DB");
  }
});

// Show Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //console.log(result);
      //res.send(result);

      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error in DB");
  }
});

app.listen(port, (req, res) => {
  console.log(`Listening on Port ${port}`);
});
