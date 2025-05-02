// Interpolation refers to embedding expressions into marked up text.
// To make HTML dynamic EJS use interpolation syntax.




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