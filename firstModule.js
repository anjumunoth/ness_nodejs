console.log("hello ness");
function addNums(p1, p2) {
    return p1 + p2;
}
function subNums(p1, p2) {
    return p1 - p2;
}
function mulNums(p1, p2) {
    // local to this module
    return p1 * p2;
}
try {

    var res = addNums(10, 20);
    console.log("Result " + res);
}
catch (ex) {
    console.log("Exception occurred");
}
finally {
    console.log("End of module");
}
// declare a varaiable -- var, let, const
// java script -- line by line 
//module.exports={addNums:addNums};
module.exports = { addNums, subNums };