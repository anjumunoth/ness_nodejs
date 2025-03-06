const fs = require("fs");//name of the module -- inbuilt module -- core module
const path = require("path");//core module 
// files -- read, write, append, delete, create, rename
// directory -- create, remove, list, rename
// permission change
// linking and unlinking
// sync and async version

// try {
//     var fileName = path.join(__dirname, "..", "text2.txt");
//     var data = fs.readFileSync(fileName);
//     console.log("Data read from the file", data.toString());
// }
// catch (ex) {
//     console.log("Error reading the file", ex);
// }

// fs.readFile("text1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else
//         console.log("Data read from the file", data.toString());
// })

// fs.writeFile("text3.txt", "welcome to edforce", { flag: "a" }, (err) => {
//     if (err) {
//         console.log("Error writing in the file");

//     }
//     else
//         console.log("Write operation successful");
// });

// header to file -- prepend ; write some contents at pos 0;
// Way1 : read contents -- store in a var; open the file in write mode and pass the new data (header content + variable content)
// Way 2: open the file, write at pos 0, close the file

fs.open("text3.txt", "a", (err, fd) => {
    if (err) {
        console.log("Error opening the file");
    }
    else {
        var str = "header";
        // fs.write()
        fs.write(fd, str, (err) => {
            if (err) {
                console.log("Error appending");
            }
            else {
                console.log("Write successful");
            }
        })
        fs.close(fd, (err) => {
            if (err) {
                console.log("Error closing the file");
            }
        })
    }
})









fs.readFile("text1.txt", (err, data1) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Data read from the file", data1.toString());
        fs.readFile("text2.txt", (err, data2) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Data read from the file", data2.toString());
                fs.readFile("text3.txt", (err, data3) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Data read from the file", data3.toString());
                        fs.writeFile("text4.txt", data1+data2+data3, { flag: "a" }, (err) => {
                            if (err) {
                                console.log("Error writing in the file");

                            }
                            else
                                console.log("Write operation successful");
                        });


                    }
                })


            }
        })

    }
})
