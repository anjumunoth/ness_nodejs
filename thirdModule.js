//var obj=require("./firstModule");
// destructuring in js
var { addNums: addNumbers } = require("./firstModule");
var obj = require("./secondModule");

var res = addNumbers(45, 34);
console.log(res);
var res = obj.sqNums(10);
console.log(res);





