var http = require('http');
var url = require('url');

var server = new http.Server(function (req, res) {
    var urlParsed = url.parse(req.url, true);
    
    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.setHeader('Cache-control', 'no-cache');
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end('Page not found!');
    }
});

server.listen(8000);