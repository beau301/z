var queryString=require("querystring")
var obj=queryString.parse("name=ww&pass=11")
var obj=queryString.stringify({name:'ww',pass:'11'})
var obj=queryString.escape("name=ww")
var obj=queryString.unescape('')
console.log(queryString);