var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;
var router  = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/new', function(req, res) {
  res.render('new');
});

router.get('/:id', function(req, res) {
  console.log("show");
  res.send("SHOW");
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
