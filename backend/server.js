var express = require('express');
var routes = require('./app/routes');
var mongoose = require('mongoose');
var config = require("./config");
var app = express();

mongoose.connect(config.database);

app.use("/api", routes);
app.use(express.static('uploads'));

var port = 5040;
app.listen(port, function() {
    console.log("Server listening on port: " + port);
});
