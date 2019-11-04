var http = require("http")
var path = require("path")
var form = require("formidable")
var fs = require("fs")
var sd = require("silly-datetime")
http.createServer((req, res) => {
    if (req.url == "/dopost") {
        var fm = form.IncomingForm()

        fm.uploaddir = "./uploads"
        fm.parse(req, function (err, fields, files) {
            // fields 文本域  files 文件域
            // console.log(fields)
            // console.log(files)

            // var extname=path.extname(files.pic.name)  
            // // 获取后缀

            // var pt=path.resolve(__dirname,"./uploads")
            // // 拼接   uploads的当前目录

            // var picurl=files.pic.path+extname
            // // 拼接   图片的原完整路径

            // var base=path.basename(picurl)   
            // // 当前目录
            // console.log(pt+base)
            var low = files.pic.path
            var extname = path.extname(files.pic.name)
            var time = sd.format(new Date(), "YYYYMMDDHHmmss")
            var fanishon = "./uploads/" + time + extname
                        // console.log(fanishon)
            fs.rename = (low, fanishon, (err) => {
                if (err) throw err
            })

        })
        res.end("success")
    }
}).listen(3000)