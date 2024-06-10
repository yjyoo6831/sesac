var http=require('http')
var url=require('url')
var fs=require('fs')


http.createServer(function(req,res){
    //req에 사용자가 원하는 파일을 넣어주기 
    var q = url.parse(req.url,true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, function (err,data) {
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('404 not found')
        }
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data)
        return res.end();
    })
}).listen(3000, () =>{
    console.log('3000포트에서 서버 실행중');
})