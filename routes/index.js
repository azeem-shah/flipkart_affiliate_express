var express = require('express');
var router = express.Router();
var http=require('http');
var fs = require('fs');
var request=require('request');
var affiliate = require('flipkart-affiliate-client');



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');

  //http://graph.facebook.com/517267866/?fields=picture

//   var url = 'https://affiliate-api.flipkart.net/affiliate/1.0/booksApi/abhijeeta6.json';

// http.get(url, function(res){
//     var body = '';

//     res.on('data', function(chunk){
//         body += chunk;
//     });

//     res.on('end', function(){
//         var fbResponse = JSON.parse(body);
//         console.log("Got a response: ", fbResponse.title);
//         // console.log("Got a response data: ", fbResponse.picture.data.url);
//         // console.log("Got a response id: ", fbResponse.picture.data.is_silhouette);
//     });
// }).on('error', function(e){
//       console.log("Got an error: ", e);
// });



// fs.readFile('./flipkart.json', 'utf8', function (err, data) {
//     if (err) throw err; // we'll not consider error handling for now
//     var obj = JSON.parse(data);
    
//     console.log("obj"+obj.title)
//     console.log("obj"+obj.booksCategory.name)
//     console.log("obj"+obj.booksCategory.url)


//});





 // "http://api.grosskart.com/flipkart-api/?query=samsung&count=1"

// client.keywordSearch({
//     query: "iphone",
//     resultCount: "1"
//   }, function(err, results){
//     if(err){
//       console.log(err);
//     } else{
//     	var info = JSON.parse(results);
//        res.send(info.productInfoList.productBaseInfo);
//        //console.log(info.productInfoList.productBaseInfo.productIdentifier.productId);
//     }
// });
 




});




module.exports = router;
