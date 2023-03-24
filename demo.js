

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopPage = require("./routes/shop.js")

app.use(adminRouter);
app.use(shopPage);

app.use((req,res,next)=>{
    res.status(404).send("<h1>OOPS! 404 the page that you requsted was not found on this server</h1>")
})


app.listen(4000);


