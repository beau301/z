// 探究数据流转的过程
var fs = require("fs")
var length = 0

// chunks  数据分批次的流入
var readerstream = fs.createReadStream("./static/1.txt")
readerstream.on("data", (chunks) => {
    length++
    console.log(chunks)
})
readerstream.on("end", () => {
    console.log(length)
})
