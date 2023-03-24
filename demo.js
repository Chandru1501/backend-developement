

const express = require('express');
const bodyParser = require("body-parser");
//const requestHandeler = require("./router")

const app = express();

console.log("server running");
console.log("this server is made by chandraprakash");

app.use(bodyParser.urlencoded());


app.use("/add-product",(req,res,next)=>{
    res.send(`<html><head><title>add products</title></head><form action="/storeproduct" method="POST"><h3>Enter product</h3><input type="text" name="product"><h3>Enter size</h3><input type="text" name="size"><button type="submit">Add product</button></html>`)
})

app.use("/storeproduct",(req,res,next)=>{
    console.log("product ",req.body.product)
    console.log("size ",req.body.size)
    console.log("product stored");
    res.send(`<h1>product stored</h1>`)
})

app.use("/",(req,res,next)=>{
    res.send(`<h1>hello</h1>`)
})

app.listen(4000);


