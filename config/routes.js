var express = require('express');
var mongoose = require('mongoose');
var Beer = require('../models/beer');
var app = express();
var port = process.env.PORT || 3000;
var router  = express.Router();

// Testing the RESTful routes:

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/new', function(req, res) {
  res.render('new');
});

router.get('/:id', function(req, res) {
  Beer.findById( { _id: req.params.id }, function(beer) {
    res.send(beer);
  })
});

router.post('/', function(req, res) {
  console.log("create");
  res.send("CREATE");
});

router.get('/:id/edit', function(req, res) {
  console.log("edit");
  res.send("EDIT");
});

router.put('/:id', function(req, res) {
  console.log("update");
  res.send("UPDATE");
});

router.delete('/:id', function(req, res) {
  console.log("delete");
  res.send("DELETE");
});

module.exports = router;
