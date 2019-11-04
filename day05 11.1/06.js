var express = require("express")
var app = express()
var router = express.Router()
app.use(router)
router.get("/", (req, res) => {
    res.send("router")
})

router.get("/code", (req, res) => {
    var randomUnm = function (min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }
    var str = 'dddddVVBBBll123457'
    var result = ""
    for (var i = 0; i < 4; i++) {
        result += str[randomUnm(0, str.length - 1)]

    }
    res.send({ "success": "请求成功", "data": result })
})
app.listen(3000)