var app = require("http");
var path = require("path");
var fs = require("fs");
const PORT = 3000;
var empData = [{ empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
{ empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
{ empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
{ empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
{ empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
{ empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
{ empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }];

var server = app.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/") {
        res.write("Welcome to ness");
        res.end();
    }
    if (req.method == "GET" && req.url == "/home") {
        // send index.html as response
        // res --write stream
        /*fs.readFile -- time consuming to send the response
        fs.readFileSync -- avoid
        fs.open, fs.read, fs.close
        fs.createReadStream
        */
        var filename = path.join(__dirname, "public", "index.html");
        fs.readFile(filename, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "plain/text" });
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        })


    }
    if (req.method == "GET" && req.url == "/login") {
        var filename = path.join(__dirname, "public", "login.html");
        var reader = fs.createReadStream(filename);
        reader.on("data", (chunk) => {
            res.write(chunk);
        })
        reader.on("end", () => {
            res.end();
        })
        reader.on("error", () => {
            res.writeHead(404, { "Content-Type": "plain/text" });
            res.end();
        })

    }
    if (req.method == "GET" && req.url == "/register") {
        var filename = path.join(__dirname, "public", "register.html");
        var reader = fs.createReadStream(filename);
        reader.pipe(res);

    }
    if (req.method == "GET" && req.url == "/photos") {
        // send an image as response
        var filename = path.join(__dirname, "public", "thanks.jpg");
        var reader = fs.createReadStream(filename);
        reader.pipe(res);
    }
    if (req.method == "GET" && req.url == "/employees") {
        // send json as response
        res.write(JSON.stringify(empData));
        res.end();

    }
    if (req.method == "POST" && req.url == "/employees") {
        // data -- payload ; body
        // req.body -- not work
        // response -- write stream 
        // request -- read stream
        // work with events data, end
        let data = '';
        req.on("data", (chunk) => {
            data += chunk.toString();

        })
        req.on("end", () => {
            // console.log(data);
            data = JSON.parse(data);
            empData.push(data);
            res.write("Data inserted successfully ");
            res.end();
        })

    }


});

server.listen(PORT, (err) => {
    if (!err)
        console.log(`Server is running at PORT ${PORT}`);
})
