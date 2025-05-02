// To insert into user : We using placeholders.

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_web",
});

// let q = "SHOW TABLES"
// Inserting New Data
// and this is query to insert multiple users at a time
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["123b", "123_newuserb", "abc@gamil.comb", "abcb"],
  ["123c", "123_newuserc", "abc@gamil.comc", "abcc"],
];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result);

    connection.end();
  });
} catch (err) {
  console.log(err);
}

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());
