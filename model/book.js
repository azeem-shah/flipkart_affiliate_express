var mongoose = require('mongoose');
mongoose.connect('mongodb://nazeem:indian@ds033126.mlab.com:33126/nazeem');
console.log('db connected');


var Schema = mongoose.Schema;

var book = new Schema({
  
  id: {type: String},
  category: {type: String},
  type: {type: String},
   name: {type: String},
    pic: {type: String},
     seller: {type: String},
      feature: {type: String},
       flipkartlink: {type: String},
        price: {type: String}


  	
  
});

var book = mongoose.model('book', book);

module.exports = book;