
const http = require("http");

const requestHandeler = require("./router")


let server = http.createServer(requestHandeler)

console.log("server running");
console.log("this server is made by chandraprakash")

server.listen(4000);