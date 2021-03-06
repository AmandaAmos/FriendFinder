//html routes will live here
//information that user views

var path = require("path");
var express = require("express");
var app = express.Router();

//the route we're taking

module.exports = function(app) {
    //this is where the GET requests live. 
    //it's what happens when someone visits a page

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.use("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};