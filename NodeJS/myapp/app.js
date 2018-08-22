var express = require('express')
var app = express()

app.get('/', function (req, res) {
   res.send('Hello World!')
})

app.listen(3000, function () {
   console.log('Example app listenning on port 3000!')
})

var dns = require('dns');

dns.resolve4('www.google.com', function (err, addresses) {
     if (err) throw err;
     console.log ('addresses: ' + JSON.stringify(addresses));
});
fs