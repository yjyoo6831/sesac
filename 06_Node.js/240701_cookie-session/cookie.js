/*
ver1. 평문 쿠키

: myValueTestver2. 서명된 쿠키

s%3AmyValueTest.hJ%2B5zrjA0i%2BCMvWo8bV5ldOFBkahM3DUIlM99CDAM88서명된 쿠키?

s%3A쿠키값.임의의문자열s%3A? 접두사 (해당 쿠키값 자체가 서명됨을 알려주는 접두사)

- > 서명된 쿠키/평문 쿠키를 구별
- > 클라이언트가 임의로 서명된 쿠키를 만들거나 조작할 수 없도록
- ----

1. 서버가 "서명된 쿠키"를 받으면, "s%3A"를 보고 서명된 쿠키임을 인식

2. 서버의 비밀키(process.env.COOKIE_SECRET)를 사용해 다시 서명하고 받은 서명이랑 비교

3. 두 값이 일치하면 쿠키가 변조되지 않았음을 신뢰하고 사용
*/

const express=require('express');

const app=express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const path=require('path');


app.set('view engine','ejs');
app.set ('views','./views');

dotenv.config({
	path : path.resolve(__dirname,'.env'),

});

//cookieParser middleware
app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
	httpOnly : true, // 웹 서버를 통해서만 쿠키에 접근 가능
	// front js 에서 document.cookie(접근) 해서 나오는 것을 차차단
	maxAge : 7 * 1000,  // 쿠키 수명 (단위 : ms) <- 1min(60*1000)
	//expires : 만료날짜 및 시간 지정 가능 
	signed: true, //쿠키의 암호화 (req.signedCookies)
	// secure : 웹 브라우저와 웹 서버가 https
	// 통신하는 경우만 쿠키를 서버에 전송
}



const port = process.env.PORT;

app.get('/',(req,res)=>{
	res.render('cookie')
});

app.get('/setCookie',(req,res)=>{
	// res.cookie(키,값,옵션) : 쿠키를 설정하는 메서드 = 서버가 클라이언트한테 응답 
	// -> 쿠키를 만드는 것은 서버 이기 때문에 
	res.cookie('myKeyTest','myValueTest',cookieConfig);

	//클라이언트한테 응답 하기
	res.send('Set signed cookie!');
});

app.get('/getCookie',(req,res)=>{
	//req.signedCookies
	// : cookie-parser 가 만든 요청의 서명된 쿠키 해석
	res.send(req.signedCookies);
})

app.get('/clearCookie',(req,res)=>{
	// res.clearCookie(키, 값, 옵션)
	// : 쿠키를 삭제하는 메서드 =/= 서버가 클라이언트 응답
	// : 쿠키를 생성할 떄의 키,값,옵션이 일치해야한다.
	// (단, maxAge / expires 키는 일치할 필요 없음)
	res.clearCookie('myKeyTest','myValueTest',cookieConfig);
	res.send('Deleted signed cookie! ')
})

app.listen(port,() => {
	console.log(`Server running ${port}`);
	console.log('쿠키 비밀키  : ',process.env.COOKIE_SECRET)
})

// cookie-parser
// 요청에 실려온 쿠키를 해석해서 req.cookies 객체로 만듦.
//
//

// cookieParser(secretKey, optionObj)
// - secretKey : 비밀키
//           ㄴ 비밀키의 값을 통해 해당 쿠키가 이 서버가 만든 
//           쿠키임을 검증
//           ㄴ 쿠키는 클라이언트에 저장되는 정보이니, 위조가 쉬워서 비밀키를 통해 만든 서명을 쿠키 뒤에 붙임
// - optionObj : 쿠키에 사용되는 옵션
