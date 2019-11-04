// 监控日志  readline

var fs = require("fs")
var readline = require("readline")
var  readStream=fs.createReadStream("./static/1.txt")


// data end     line监听日志时间
// data 监听输入数据
// end 完成数据读取

var rl = readline.createInterface({

    // 监听输入数据
    input: readStream
})

// line  日志执行时间
rl.on("line", (lineData) => {
    console.log(lineData)
    console.log(new Date()+"linenum执行")
})

// 日志读取完成关闭
rl.on("close", () => {
console.log("监听数据完成")
})