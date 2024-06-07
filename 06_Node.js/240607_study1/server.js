const http=require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text.html','charset=utf-8');
    fs.readFile('index.html', (err,data) => { 
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
});
server.listen(8000,()=>{
    console.log('8000서버 실행');
})