var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.writeHead(200, {
        "Content-Type":"text/event-stream", 
        "Cache-Control":"no-cache", 
        "Connection":"keep-alive"
    });

    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + (new Date()) + "\n\n");
    res.write("data: " + (new Date()) + "\n\n");

    interval = setInterval(function() {
        res.write("data: " + (new Date()) + "\n\n");
    }, 1000);

    req.connection.addListener("close", function () {
        clearInterval(interval);
    }, false);
});

module.exports = router;
