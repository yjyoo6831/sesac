const express=require('express');
const app=express();
const PORT = 8000;
// console.log(app);
app.set('view engine','ejs'); //view engine 에는 여러개가 있지만, ejs 를 사용한다고 세팅해주는것. 
app.set('views','./views') //(MVC)의 views 폴더 안에는 ejs 문법으로 만들어진 파일들로 구성된다.


app.get('/',(req,res) =>{
    res.render('index',{title:'홈'})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'소개'});
})
app.get('/create',(req,res) => res.render('create',{title:'작성'}));

// app.get('/',function (req,res) {
//     res.send('Hello Express');

// })
app.listen(PORT,()=>{
    console.log('8000 서버 실행');
})
/*
    rendering : 화면에 뿌려주는 모든 것을 렌데링이라고 한다. 
    * 1. app.get(path,callback) : HTTP GET 요청에 대한 라우터를 등록 
    * 2. app.post(path,callback) : HTTP POST 요청에 대한 라우터를 등록 
    * 3. app.use([path,] callback [, callback...]): 미들웨어 함수를 등록
    * 4. app.set(name, value): Express 애플리케이션의 설정 값을 지정. 일반적으로, view engine과 views 설정을 지정하는 데 사용한다.
    * 5. app.listen(port, [host], [backlog], [callback]): HTTP 서버를 시작 이 메서드는 포트 번호, 호스트 이름, 백로그 크기, 콜백 함수를 전달한다.
    * 6. res.send([body]): HTTP 응답으로 데이터를 전송하는 메서드. 이 메서드는 문자열, 버퍼, 객체, 배열 등 다양한 유형의 데이터를 전송할 수 있음
    * 7. res.redirect([status,] path): HTTP 리다이렉트를 수행 이 메서드는 경로와 상태 코드를 전달
    * 8. req.params: 라우트 매개변수를 가져옴. 이 메서드는 콜론(:)으로 시작되는 동적 라우트 매개변수를 포함하는 객체를 반환함
    * 9. req.query: URL 쿼리 매개변수를 가져옴 이 메서드는 URL의 ? 뒤에 나오는 쿼리 문자열을 객체로 반환
    * 10. res.render(view [, locals] [, callback]): 뷰 템플릿을 렌더링 이 메서드는 뷰 이름과 뷰에 전달될 데이터를 전달
*/ 