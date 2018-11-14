var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var mysql_setting = {
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'keystroke_collection'
}

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Keystroke Collection' });
});

module.exports = router;
