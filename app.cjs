const http = require('http');
const fs = require('fs');
const ReqFile = ["Var 2.0/index.html","Var 2.0/style.css","Var 2.0/tictactoe.js"];

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);
    if(url==='/'){
        fs.readFile(ReqFile[0],'utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                res.end();
            }
        });
    }
    if(url==="/style.css"){
        fs.readFile(ReqFile[1],'utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,{"Content-Type":"text/css"});
                res.write(data);
                res.end();
            }
        });
    }
    if(url==='/tictactoe.js'){
        fs.readFile(ReqFile[2],'utf-8',(err,data)=>{
            if(err) throw err;
            else{
                res.writeHead(200,{"Content-Type":"text/javascript"});
                res.write(data);
                res.end();
            }
        });
    }
    
});
server.listen((8080),()=>{
    console.log("Server Listen to  http://localhost:8080/");
});