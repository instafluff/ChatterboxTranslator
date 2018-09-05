var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: "ChatterboxTranslator!", username: process.env.TWITCHUSER, oauth: process.env.OAUTH, yandex: process.env.YANDEX_KEY });
});

module.exports = router;
