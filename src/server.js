
var express = require("express")
var app = express()

var route = require('./route.js');


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PORT=8200


app.listen(PORT, () => {
    console.log("Server running on port "+PORT)
});

app.use('/api', route);

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.use(function(req, res){
    res.status(404);
});