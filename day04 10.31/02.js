
// engine 引擎
var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send({"success":"请求成功","data":[{"name":"dd","sex":"women"}]})
})
app.post("/",(req,res)=>{
    res.send({"success":"请求成功","data":[{"name":"dd","sex":"women"},{"name":"ff","sex":"man"},{"name":"ff","sex":"man"}]})
})
// 什么情况下会使用app.all   有控制全局的功能时需要使用all
app.all("/",(req,res)=>{
    res.send({"success":"请求成功","data":[{"name":"dd","sex":"women"},{"name":"ff","sex":"man"}]})
})
app.listen(3000)