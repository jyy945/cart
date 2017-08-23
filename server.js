var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
require('./models/cart_model.js');
var app = express();
app.use(bodyParser());
var conn = mongoose.connect('mongodb://localhost/cart1');
app.set('views','./views');
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
app.use('/public',express.static('./public'));
app.use('/images',express.static('./public/images'));
app.use('/views',express.static('./views'));
require('./route.js')(app);
app.listen(8000);