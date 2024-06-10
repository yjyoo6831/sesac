const http = require('http');
const url = require('url');
const fs = require('fs');
/*
    url : 웹 주소 읽어오기, 읽어온 내용을 구문분석하여 주소의 각 부분으로 나누고 
    객체로 변환한다. 
*/
// var addr='http://localhost:8000/example.htm?year=2024&month=feb';
// // 
// var q = url.parse(addr,true);
// console.log(q.pathname); // 
// console.log(q.search); // ?year=2024&month=feb
// var qdata=q.query;
// console.log(qdata);
// console.log(qdata.month); //기존 쿼리에서 month 에 해당하는것만을 출력 


http.createServer(function (req,res) {
 var q = url.parse(req.url,true);
 var filename="." + q.pathname;
 console.log(filename);
 fs.readFile(filename,function(err,data){
    if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        return res.end('404 not found')
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
 })

}).listen(8000, () =>{
    console.log('8000 서버실행');
})