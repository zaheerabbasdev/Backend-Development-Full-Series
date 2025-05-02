// Create a basic template for instagram page based on following route.
// example: /ig/username

const express = require("express");
const app = express();
const Path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// This code for instagram

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", {username});

});

// instagram code end

app.get("/home", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  //res.render("rolldice.ejs", {num: diceVal});
  // we can pass also like this
  res.render("home.ejs", { diceVal });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
