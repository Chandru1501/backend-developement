
const http = require("http");

let server = http.createServer((req,res)=>{
    let value = ""
     if(req.url=="/home"){
          value = "Welcome home"
    }
    else if(req.url=="/about"){
        value = " Welcome to About Us page"
    }
    else if(req.url=="/node"){
        value = " Welcome to my Node Js project"
    }
    res.write('<html>')
    res.write('<head><title>this is my response</title></head>')
    res.write(`<body><h1>${value}</h1></body>`)
    res.write("</html>")
    res.end()
    process.exit()
})

server.listen(4000);