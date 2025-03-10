const fs = require("fs");

var reader = fs.createReadStream("NodeJSTOC.pdf", { highWaterMark: 10000 });

var chunks = 0;
var completeData = "";
reader.on("data", (chunk) => {
    chunks++;
    completeData += chunk;
});
reader.on("error", (err) => {
    console.log("Error reading file", err)
});
reader.on("end", () => {
    console.log("Number of chunks", chunks);

});

var writer = fs.createWriteStream("text2.txt");
writer.write("hello");
writer.write("nodejs is a server side open source multi platform compliant, usefule for network intensive tasks, not suitable for cpu intensive tasks");
var obj = { empId: 101, empName: "sara" };
writer.write(JSON.stringify(obj));
writer.end();
writer.on("close", () => {
    console.log("Successfully written into the file")
})
writer.on("error", (err) => {
    console.log("Error writing the file ");
})


// read from a huge file and write into another file
// Way1. 
// 
// Way2.


var reader = fs.createReadStream("text1.txt");
var writer = fs.createWriteStream("output.txt");
reader.pipe(writer);// read chunk by chunk and write the chunk into the write stream


