var http=require("http")
var fs=require("fs")
var art=require("art-template")

http.createServer((req,res)=>{
if (req.url=="/favicon.ico") {
    return
}
fs.readFile("./static/index.art",(err,data)=>{
    // 获取art-template模板
   var template=data.toString()
   var link=["ss","dd","aa"]
   var datahtml=art.render(template,{a:link})
   res.end(datahtml)
})




}).listen(3000)