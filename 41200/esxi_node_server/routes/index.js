var express = require('express');
var router = express.Router();

var Vsphere = require('vsphere');
var host = 'ip address';
var user = 'root';
var password = 'password';
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
