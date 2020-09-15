const { request } = require('express');
var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.post('/', function (req, res, next) {
  console.log(req, request.body)
  fs.writeFileSync("../server/public/" + req.query.filename, req.body.content);
  res.end()
  // res.render('index', { title: 'Express' });
});

module.exports = router;
