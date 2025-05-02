// Setting Up Express App:
// GET/       Fetch and show total number of users on our app
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();


const port = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_web",
});

// return the data in the form of array instead of object
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "SHOW TABLES"
// Inserting New Data
// and this is query to insert multiple users at a time
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];

// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); // 100 fake users data
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
// // console.log(getRandomUser());

app.get("/", (req, res) => {
    let q = `SELECT count (*) FROM user`;
    try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result[0]["count(*)"]);
    res.send(result);
    
  });
} catch (err) {
  console.log(err);
  res.send("Some error in database");
}

    // res.send("Welcome to Home page");
})

app.listen(port, () => {
    console.log("Server is listening to port 8080");
})