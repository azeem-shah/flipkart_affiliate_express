var express = require('express');
var router = express.Router();
var book=require('../model/book');

router.post('/search',function(req,res){
	console.log("in search and product name is"+req.body.search);
var img="";
	var search=req.body.search;
	book.find({name:search}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
              	
              	//hello
              	book.findOne({name:search}, function (err, doc) {
              if (err) {
                  return console.error(err);
              } else {
              	
              	if(doc){
              		img="http://localhost:3000/"+doc.pic;
              			console.log(img)
              	console.log(docs)
                 res.render('showproduct', {"items":docs,"image":img});
              		
              	} else{
              		img="http://localhost:3000/images/tripkart.jpg";
              		 res.render('showproduct', {"items":docs,"image":img});
              	}
              	
              
              }     
        });

              	//hello
                 
              }     
        });

})

module.exports = router;