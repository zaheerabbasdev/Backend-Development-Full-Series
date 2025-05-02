const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})


// Ports are the logical endpoints of a network connection that is used to exchange information between a web sever and a web client.
