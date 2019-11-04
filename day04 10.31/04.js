// 接受post传输的数据
// 中间件
var express = require("express")
var bodyParser = require("body-parser")
var app = express()

// 接收json数据
app.use(bodyParser.json())
// 接收字符串
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("shouye")
})
app.post("/dopost", (req, res) => {
    console.log(req.body)
    res.send({ "data": "接收的数据是" + req.body.username })

})
app.listen(3000)