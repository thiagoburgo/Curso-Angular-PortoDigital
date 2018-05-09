var fs = require("file-system");

console.log("Hello World!");

fs.mkdir("./teste/huhu");

fs.recurseSync('./', function(file) {
    console.log("*****************");
    console.log("Path: ", file);
    console.log("*****************");
});