var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var book=require('./routes/book');
var addbook=require('./routes/addbook');
var footwear=require('./routes/footwear');
var clothes=require('./routes/clothes');
var showproduct=require('./routes/showproduct');
var cart=require('./routes/cart');
var search=require('./routes/search')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/book',book);
app.post('/sortbook',book);
app.get('/footwear',footwear);
app.post('/sortfootwear',footwear);
app.get('/addbook',addbook);
app.post('/book',addbook);
app.get('/clothes',clothes);
app.post('/sortclothes',clothes);
app.get('/showproduct/:id',showproduct);
app.get('/cart',cart);

app.post('/search',search);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var printHi=function(){
    console.log("Console is running on port 3000...")
}
printHi();

module.exports = app;
