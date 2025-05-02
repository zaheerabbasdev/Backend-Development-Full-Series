// When we sending an api request to an URL, the HTTP requests it is basically text based but express convert the request into the object os basically it is a parsing process  


const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})


app.use((req, res) => {
    //console.log(req);
    console.log("request received");
    //res.send("This is a basic response");


    // Send an object
    // res.send({
    //     name: "Apple",
    //     color: "red",
    // });

    // Send HTML response
    let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>";
    res.send(code);
})