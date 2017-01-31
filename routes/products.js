var express = require('express');
var router = express.Router();
var http=require('http');
var fs = require('fs');
var request=require('request');
var affiliate = require('flipkart-affiliate-client');

var client = affiliate.createClient({
  FkAffId: 'abhijeeta6',
  FkAffToken: '6238edf1e9114b4c97a3ec1061dfb0ef',
  responseType: 'json'
});

 var prodname;
  var prodimg=["one","two","three"];


// client.getCategoryFeed({
//   trackingId: 'abhijeeta6'
// }, function(err, result){
//     if(!err){
//     	 var parseResult = JSON.parse(result);
//       res.send(parseResult);
//     }else {
//       console.log(err);
//     }
// });



/* GET home page. */
router.get('/products', function(req, res) {

	client.getProductsFeed({
  url: 'https://affiliate-api.flipkart.net/affiliate/1.0/feeds/abhijeeta6/category/7jv.json?expiresAt=1485881110611&sig=fce648bb99f2c994d58fcd5a9af9b3aa'
}, function(err, result){
    if(!err){
      var parseResult = JSON.parse(result);
      var allProducts = parseResult.productInfoList;
     
      for (var i =0; i<20;i++) {

      	prodname=allProducts[i].productBaseInfoV1;

    //  	console.log(allProducts[i].productBaseInfoV1.title);
      		prodimg[i]=allProducts[i].productBaseInfoV1.imageUrls.unknown;
      	//console.log(allProducts[i].productBaseInfoV1.imageUrls.unknown);
      	//console.log(allProducts[i].productBaseInfoV1.maximumRetailPrice.amount);
      	//console.log(allProducts[i].productBaseInfoV1.productUrl);
      }
    //  console.log(info.productInfoList.categorySpecificInfoV1.productBaseInfoV1);
     // console.log(info.productInfoList.categorySpecificInfoV1.productBaseInfoV1.PSLECHP97HRUQEQ5);

//  console.log(prodname);
  //console.log(prodimg);

   console.log(prodname);

  res.render('products',{"items":prodimg})

    }else {
      console.log(err);
    }
});

	




 
});



module.exports = router;