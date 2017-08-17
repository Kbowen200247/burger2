var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req,res){
	res.redirect("/burgers");
})

router.get("/burgers", function(req, res){
	db.burgers.findAll({}).then(function(data){
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/burgers", function(req, res){
	db.burgers.create({
		burger_name: req.body.burger_name
	}).then(function(){
		res.redirect("/burgers");
	});
});

router.post("/burgers/:id", function(req, res){
	db.burgers.update({
		devoured: 1,
	}, {where: {id: req.params.id}})
	.then(function(data){
		res.redirect("/burgers");
	}).error(function(err){
		console.log("Failed");
	});
});

// router.delete("/burgers/:id", function(req, res){
// 		db.burger.destory({where: {id: req.params.id}})
//		.then(function(data){
// 		res.redirect("/burgers");
// 	});
// });

// Export routers for server.js to use
module.exports = router;