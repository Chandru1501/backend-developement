const express = require('express');
const router = express.Router();

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded());

router.get("/add-product",(req,res,next)=>{
    res.send(`<html><head><title>add products</title></head><form action="/storeproduct" method="POST"><h3>Enter product</h3><input type="text" name="product"><h3>Enter size</h3><input type="text" name="size"><button type="submit">Add product</button></html>`)
})

router.post("/storeproduct",(req,res,next)=>{
    console.log("product ",req.body.product)
    console.log("size ",req.body.size)
    console.log("product stored");
    res.send(`<h1>product stored</h1>`)
})


module.exports = router;