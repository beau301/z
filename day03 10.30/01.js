var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    // 普通方式获取数据
// fs.readFile("./static/1.txt",(err,data)=>{
//     res.end(data)
// })
// 创建文件读取流

// 通过流的方式获取数据


// 写入流
var readstream=fs.createReadStream("./static/1.txt")
readstream.pipe(res)

}).listen(3000)