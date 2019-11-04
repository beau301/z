
var http = require("http");
var fs = require("fs")
http.createServer((req, res) => {
    // 读文件 异步读取
    // fs.readFile("./static/1.txt", (err, data) => {
    //     res.end(data)
    // })
    // 同步读取
    // fs.readFileSync("./static/1.txt",(err,data)=>{
    //     res.end(data)
    // })
    // 写入文件/创建文件  1.会将之前的覆盖
    // fs.writeFile("./static/1.txt", "sss", 'utf8', (err) => {
    //     if (err) {
    //         throw err
    //     }

    // })
    // res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    // res.end("写入成功")
    //    2.不会覆盖  追加内容
    // fs.appendFile("./static/1.txt", "ff", (err) => {
    //     if (err) throw err
    // })
    // res.end("写入成功")

    // 删除文件
    //     fs.unlink('./static/1.txt',(err)=>{
    //     if (err) throw err
    //    })
    //    res.end("success")

    // 创建目录
    // fs.mkdir("./aa", (err) => {
    //     if (err) throw err
    // })
    // res.end("success")
    // 删除目录
    // fs.rmdir("./aa", (err) => {
    //     if (err) throw err
    // })
    // res.end("success")
    // 判断文件状态
    fs.stat("./static/1.txt",(err,stats)=>{

    })
}).listen(3000)