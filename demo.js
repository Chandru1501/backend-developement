
const http = require("http");

const requestHandeler = require("./router")


let server = http.createServer(requestHandeler)


server.listen(4000);