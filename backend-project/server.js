import http from 'http'
import os, { platform } from 'os'

let body =undefined;
const data =[];
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url=='/' && req.method=='GET') res.end("<h1> This is Home Page</h1>");
    else if(url=='/contact' && req.method=='GET') res.end("<h1> This is Contact Page</h1>"); 
    else if(url=='/about' && req.method=='GET') res.end("<h1> This is About Page</h1>"); 
    else if(url=='/system' && req.method=='GET'){
        const sysData={
            platform: os.platform(),
            arch: os.arch(),
            cpu: os.cpus().length,
            totalMemory: (os.totalmem()/1024**3).toFixed(2)+" GB",
            freeMemory: (os.freemem()/1024**3).toFixed(2)+" GB"
        }
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(sysData))
    } 
    else if(url=='/viewdata' && req.method=='GET') res.end(body); 
    else if(url=='/sendata' && req.method=='POST') {
        req.on("data",(chunk)=>{
            body=body+chunk;
        })
        req.on("end",()=>{
            console.log(body,"send data")
            data.push(body)
            res.statusCode=201
            res.end(JSON.stringify(data)); 
        })
    }
    else{
        res.statusCode=404;
        res.end("<h1>Error Page</h1>")
    }
})

const port = 4001
server.listen(port,(req,res)=>{
    console.log(`Server is listening on port no. ${port}`)
})