var express = require('express');
var app = express();

app.get('/api/whoami', function (req, res) {
    console.log(req.headers['accept-language'][0]);
    console.log(req.trailers);
    
    res.send({"ipaddress": req.headers['x-forwarded-for'], "language": req.headers['accept-language'], "software": req.headers['user-agent']});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});