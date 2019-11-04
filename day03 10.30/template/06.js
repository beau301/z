var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
http.createServer((req, res) => {
    fs.readFile("./view/index.ejs", (err, data) => {
        var templace = data.toString()
        // var list = ["vue", "react", "node"]
        var list ="q"
        var result = ejs.render(templace, { list: list })
        // 第一个参数 代表模板  第二个参数代表数据(以对象的形式)
        // 响应前端请求
        res.end(result)
    })

}).listen(3000)