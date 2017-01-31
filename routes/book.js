var express = require('express');
var router = express.Router();
var book=require('../model/book');

/* GET home page. */
router.get('/book', function(req, res) {


	book.find({category:"book"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('book', {"items":docs});
              }     
        });

 
});

router.post('/sortbook',function(req,res){
	  console.log("in sort post")
  console.log(req.body.category)
  var sortby=req.body.category;


  if(sortby=="drama"){

console.log("in darama if")
book.find({type:"drama"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('book', {"items":docs});
              }     
        });
  }else if(sortby=="thriller"){
   console.log("in thriller if")
   book.find({type:"thriller"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('book', {"items":docs});
              }     
        });
  }else{
 console.log("in autobiography if")
 book.find({type:"autobiography"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('book', {"items":docs});
              }     
        });
  }



})

module.exports = router;