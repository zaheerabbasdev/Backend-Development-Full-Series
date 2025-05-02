// Using EJS

// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// });
// Here in the code view means templates and we use the res.render instead of res.send.




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



