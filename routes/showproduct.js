var express = require('express');
var router = express.Router();
var book=require('../model/book');

/* GET home page. */
router.get('/showproduct/:id', function(req, res) {

	console.log("id is- "+req.params.id);

     var productid=req.params.id;
     var img;
	  book.find({id:productid}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
              	console.log(docs.pic)
              	//hello 
              	book.findOne({id:productid}, function (err, doc) {
			              if (err) {
			                  return console.error(err);
			              } else {
			              	
			              	img="http://localhost:3000/"+doc.pic;
			              	console.log("images is-"+img);
			              	res.render('showproduct', {"items":docs ,"image":img});
			               
			              }     
			        });

              	//hello
                // res.render('showproduct', {"items":docs,"image":img});
              }     
        });
 

 
});

module.exports = router;