// app.use: The app.use is used to send any type of request like Get, Post etc.

// For example:
const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})


app.use((req, res) => {
    console.log("request received");
})