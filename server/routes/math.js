var express = require('express');
var router = express.Router();
var path = require('path');


router.post('/add', function(req, res){
  console.log();
  var answer = parseInt(req.body.x) + parseInt(req.body.y);
  res.send('' + answer);
});

router.post('/subtract', function(req, res){
  var answer = req.body.x - req.body.y;
  res.send('' + answer);
});

router.post('/multiply', function(req, res){
  //console.log(Object);
  var answer = req.body.x * req.body.y;
  res.send('' + answer);
});

router.post('/divide', function(req, res){
  var answer = req.body.x / req.body.y;
  res.send('' + answer);
});

module.exports = router;
