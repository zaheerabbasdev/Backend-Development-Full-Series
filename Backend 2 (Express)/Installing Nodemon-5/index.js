// Nodemon: To automatically restart server with code changes


const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})


app.post("/", (req, res) => {
    res.send("Hello i am root");
})

app.get("/abbas", (req, res) => {
    res.send("Hi Zaheer Abbas");
})

