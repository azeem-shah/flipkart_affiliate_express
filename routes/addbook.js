var express = require('express');
var router = express.Router();
var book= require('../model/book')

router.get('/addbook', function(req, res) {
  res.render('addbook');
});



router.post('/book', function(req,res){
	// console.log(req.body.id);
	// console.log(req.body.category);
	// console.log(req.body.type);
	// console.log(req.body.name);
	// console.log(req.body.pic);
	// console.log(req.body.seller);
	// console.log(req.body.feature);
	// console.log(req.body.flipkartlink);
	// console.log(req.body.price);

	 	var db={
		
		id: req.body.id,
        category: req.body.category,
        type: req.body.type,
        name: req.body.name,
        pic: req.body.pic,
        seller: req.body.seller,
        feature: req.body.feature,
        flipkartlink: req.body.flipkartlink,
        price: req.body.price,

		};
		console.log(db);
		var input=new book(db);
		  input.save();
		  console.log("book entered");

	res.redirect('/addbook');


})

module.exports = router;