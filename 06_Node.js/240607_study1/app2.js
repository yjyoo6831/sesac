const http=require('http');

// http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     res.end('<h2>Hello 예진yejin</h2>');
// }).listen(3000,()=>{
//     console.log('3000포트에서 실행중!');
// })

http.createServer(function(req,res){
    var _url =req.url;
    res.writeHead(200);
    res.write('<h2>hello</h2>')
    res.end(`<p> ${_url} </p>`)
}).listen(8000,()=>{
    console.log('서버실행');
})