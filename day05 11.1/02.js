var express = require("express")
var cookieParser = require("cookie-parser")
var path = require("path")
var app = express()
// 让express和cookie 建立联系
app.use(cookieParser())
var static = path.resolve(__dirname, "public")
app.use (express.static(static))
app.get("/", (req, res) => {
    res.send({ "data": "login中的cookies为：" + req.cookies })
})
// 设置setcookie
app.get("/login", (req, res) => {
    var obj = req.query.username
    res.cookie("username", obj, { maxAge: 9000, httpOnly: true })
    res.send({ "data": obj })
})
app.get("/list", (req, res) => {
    // 获取cookies
    console.log("获取" + req.cookies.username)
    res.end()
})
app.listen(3000)