
const http = require("http");
const express = require('express');
//const requestHandeler = require("./router")

const app = express();

console.log("server running");
console.log("this server is made by chandraprakash");

app.use((req,res,next)=>{
    console.log("this is middle ware 1");
    next();
})
app.use((req,res,next)=>{
    console.log("this is middle ware 2");
    next();
})
app.use((req,res,next)=>{
    console.log("this is middle ware 3")
    res.send(`<h1>hello from my express js server</h1>`)
})

let server = http.createServer(app);

server.listen(4000);