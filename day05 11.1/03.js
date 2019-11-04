// views
var express=require("express-session")
var app=express()
// 在express设置模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    var list=["ss","dd","aa"]
    res.render("index.ejs",{list:list})
})
app.listen(3000)