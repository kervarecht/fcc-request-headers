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
  var languagePref = req.headers['accept-language'].split(",");
  
  res.send({
    "OS": "OS: " + osBrowser.os.family +"."+osBrowser.os.major + "." + osBrowser.os.minor +"."+ osBrowser.os.patch,
    "IP": req.ip.replace("::ffff:", ""),
    "main lang": languagePref[0]
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
