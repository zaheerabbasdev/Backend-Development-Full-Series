// Views Directory

// const path = require("path");
// app.set("views", path.join(__dirname, "/views"));



const express = require("express");
const app = express();
const Path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})