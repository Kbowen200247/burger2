var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Sequelize = require("sequelize");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static(__dirname + "/public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require('./controllers/burgers_controller.js');

app.use('/', routes);


db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("App listening on PORT " + PORT);
	});
});