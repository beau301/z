var http = require("http")
var fs = require("fs")
var route = require("./static/route")
http.createServer((req,res) => {
    switch (req.url) {
        case "/": route.home(req,res);
            break;
        case "/bou": route.bou(req, res)
            break;
        case "/ss": route.ss(req, res)
            break;
    }
}).listen(3000)