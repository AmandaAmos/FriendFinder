//server initialization and set up
//Dependencies

var express = require("express");
var path = require("path");

//sets up Express APP

var app = express();
var PORT = process.env.PORT || 3000;

//express to handle data 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

