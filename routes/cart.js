var express = require('express');
var router = express.Router();
var book=require('../model/book');

/* GET home page. */
router.get('/cart', function(req, res) {
	
res.render('cart')

 
});

module.exports = router;