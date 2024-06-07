const http=require('http');
http.createServer(function (req,res) {
    //send http
    // http status 200은 정상적인 응답
    // Content-Type : text/plain
    // res.writeHead(200,{'Content-Type':'text/plain'})
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`<h2> 안녕 세상아</h2>`)
}).listen(8080,()=>{
    console.log('8080포트에서 실행중!');
})