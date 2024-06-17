const express = require('express')
const app = express();
const PORT = '8888';

app.set('view engine', 'ejs')
app.set('views', './views')

/* 미들웨어 연결
:요청(request)과 응답(response)의 중간에서 작업함
express 에서는 app.use 로 등록해야함. 
*/
// ex. body-parse 모듈
app.use(express.urlencoded({extended : true})) // urlencoded 로 파싱된 body 를 요청 
// -> post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()) ; //요청의 body 객체에 json 형태 (js object )


//back 에서 주소 설정해주는 것을 라우팅(Routing) 이라고 한다. 
app.get('/',(req,res)=>{
    res.render('index',{title : '폼 실습하기'});
})
app.get('/getForm',(req,res) =>{
    console.log(req.query); // { id: 'banana', pw: 'df' }
    // res.send('get 요청 성공') 
    res.render('result_get',{title:'GET 요청 결과',userInfo : req.query})
    //userInfo : req,query => { id: 'banana', pw: 'df' }
})
app.post('/postForm',(req,res) =>{
    console.log(req.body);
    // res.send('post 요청 성공')
    res.render('result_post',{title:'POST 요청 결과',userInfo : req.body})
})
/* res.send() :  문자열, json, 파일 등을 클라이언트에게 응답 (json을 가장 많이 응답)
    => 서버가 데이터를 응답할 때 send()사용
    res.render() : 템플릿 엔진을 사용해서 서버 측에서 "동적"으로 HTML 을 생성하고 클라이언트에게 응답
    => 서버 측에서 동적으로 페이지를 렌더링할 때 render()사용
*/
// listen(port number,cb function) 서버를 시작하는 메서드
app.listen(PORT, () => {
    console.log(PORT, "사용중");
})