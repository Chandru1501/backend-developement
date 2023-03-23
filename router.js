    
    const fs = require('fs');

    let value="enter a value";

    const requestHandeler = (req,res)=> {
    
        let url = req.url;
        let method =req.method
    
        if(url==="/message" &&  method==="POST"){
            const body = []
            req.on("data",(chunk)=>{
               body.push(chunk);
               console.log(chunk);
            })
            req.on("end",()=>{
                let parsedbody = Buffer.concat(body).toString();
                console.log(parsedbody);
                let message = parsedbody.split("=")
                console.log(message)
                fs.writeFileSync('message.txt',message[1])
                value=message[1];
            })
            res.setHeader('Location','/')
            res.statusCode=302;  // for redirecting
            return res.end();
        }
    
    
        res.setHeader("Content-type","text/html")
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write(`<body><h3>${value}</h3><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></body>`)
        res.write("</html>")
        res.end()

    };   


    module.exports = requestHandeler;
