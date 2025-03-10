var events = require("events");
var eventEmitter = new events.EventEmitter();
var qty = 0;
// event handler
function calcQuantity(p1, p2) {
    qty += p1 + p2;
}

function incQuantity() {
    qty += 1;
}
function decQuantity() {
    qty += 1;
}
function setQuantity(p1) {
    qty = p1;
}
// associate an event with event handler
eventEmitter.on("reset", (p1) => {
    qty = p1;
});
eventEmitter.on("increment", incQuantity);
eventEmitter.on("decrement", decQuantity);
eventEmitter.on("setup", setQuantity);
eventEmitter.on("calcQuantity", calcQuantity);


// trigger the event
eventEmitter.emit("increment");
eventEmitter.emit("increment");
eventEmitter.emit("decrement");
eventEmitter.emit("increment");
eventEmitter.emit("decrement");
eventEmitter.emit("reset");
eventEmitter.emit("setup", 200);
eventEmitter.emit("calcQuantity", 100, 5);


console.log("Quantity", qty);//305
// remove the association of an event with its event handler

eventEmitter.removeListener("setup", setQuantity);
eventEmitter.emit("setup", 99);// no action
console.log("Quantity", qty);//305


