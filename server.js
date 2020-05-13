//server initialization and set up
//Dependencies
//added bodyParser after researching on Stackoverflow about gathering back data in Express

var express = require("express");
var path = require("path");


//sets up Express APP

var app = express();
var PORT = process.env.PORT || 3000;

//express to handle data 
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.text());
//app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//where the require api routes live
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//app.get("/", function(req, res) {
 //   res.sendFile(path.join(__dirname, ".app\public\home.html"));
 // });
  


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});