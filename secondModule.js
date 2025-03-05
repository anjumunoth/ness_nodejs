var obj = require("./firstModule");// user defined module -- path to that module
var p1 = 100, p2 = 200;
var result = obj.addNums(p1, p2);
console.log(`Sum of ${p1} and ${p2} is ${result}`);
var result = obj.subNums(p1, p2);
console.log(`Diff of ${p1} and ${p2} is ${result}`);
var result = obj.mulNums(p1, p2);// No; because mulNums is local to firstModule
function delNums(p1, p2) {
    // local to this module
    return p1 / p2;
}
export function sqNums(p1) {
    return p1 * p1
}