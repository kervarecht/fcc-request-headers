// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var useragent = require('useragent');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  var osBrowser = useragent.parse(req.headers['user-agent']);
  console.log(osBrowser.os);
  console.log(req.ip);
  console.log(req.headers['accept-language']);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
