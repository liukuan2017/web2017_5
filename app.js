var http = require('http');

http.createServer(function (req, res) {
    var content = "";
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin":"*"

    });
    req.on('data', function (chunk) {
        content += chunk;
    });
    req.on('end', function () {
        res.write("You've sent: " + content);
        console.log("You've sent: " + content);
        res.end();
    });

}).listen(8080);