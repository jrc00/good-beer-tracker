var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require('./models/beer');
var app = express();
var port = process.env.PORT || 3000;
var router = require("./config/routes");

// connect to beerDB
mongoose.connect('mongodb://localhost:27017/beerDB');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', router);

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(port);
console.log('Server started on ' + port);

