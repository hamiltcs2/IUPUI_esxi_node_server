var express = require('express');
var router = express.Router();

var Vsphere = require('vsphere');
var host = '192.168.56.103';
var user = 'root';
var password = 'f=B+4h$';
var sslVerify = false;
var vc = new Vsphere.Client(host, user, password, sslVerify);
vc.once('ready', function() {
  console.log("ready");
});
vc.once('error', function(err) {
  console.log("error");
});
/* GET home page. */
router.get('/', function(req, res, next) {  
    res.render('index', { title: 'Express' });
});

module.exports = router;
