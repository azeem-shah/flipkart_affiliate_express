var express = require('express');
var router = express.Router();
var book=require('../model/book');

/* GET home page. */
router.get('/clothes', function(req, res) {
	
  book.find({category:"clothes"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('clothes', {"items":docs});
              }     
        });


 
});

router.post('/sortclothes',function(req,res){
	  console.log("in sort post")
  console.log(req.body.category)
  var sortby=req.body.category;

  if(sortby=="men"){

console.log("in men if")
book.find({type:"men",category:"clothes"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('clothes', {"items":docs});
              }     
        });
  }
  else{
 console.log("in women if")
 book.find({type:"women",category:"clothes"}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('clothes', {"items":docs});
              }     
        });
  }

})

module.exports = router;