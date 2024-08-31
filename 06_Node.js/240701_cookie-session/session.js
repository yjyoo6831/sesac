const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
const path = require('path');
const session = require('express-session');


app.set('view engine', 'ejs');
app.set('views', './views');

dotenv.config({
	path: path.resolve(__dirname, '.env'),
});
const port = process.env.PORT;

// express-session 미들웨어
app.use(session({  // 인자로 세션에 대한 설정 객체를 넣음 

	secret: process.env.COOKIE_SECRET, // 필수 옵션, 세션 암호화하는데 쓰는 키
	resave: false, // 세션 변경되지 않더라도 매번 다시 저장할 건지를 설정
	saveUninitialized: false, // 세션 초기값이 지정되지 않은 상태에서도 
	//처음부터 세션을 생성할 건지에 대한 옵션 . 보통 false

	//세션 쿠키 설정(세션관리할 때 클라이언트로 보내는 쿠키)
	cookie:{ 
		httpOnly : true, // 클라이언트에서 쿠키 확인 못하게 하는 것
		secure : false, // http 에서 사용가능 하도록 하는것 (true일 시 https에서만 가능)
		maxAge : 60 * 1000, //만료단위(ms)
		//expires : 만료기간 설정
	}
}))  


app.get('/', (req, res) => {
	res.render('session');
})

app.get('/set', (req, res) => {
	//세션 설정 
	// req.session.키=값;
	// cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
	
	console.log(req.query); // * js 에서는 빈객체({}) 를 true 로 인식한다. 
	if (req.query.name) {
		req.session.name = req.query.name;
		req.session.age = req.query.age;
	} else {
		req.session.name = '바나나';
		req.session.age = 10;

	}
	// { [sid] : {name:바나나, age :10 }, [sid2] : {name:바나나, age :10 },... } 
	//형식으로 저장된다. (브라우저마다 개인 클라이언트라고 생각한다.)
	res.send('세션 설정 완료 ');
})

app.get('/name', (req, res) => {
	// 세션 사용(조회)
	// req.session.키  로 접근하기. req.sesion이 객체이기때문에 

	console.log(`req.session >> `, req.session);
	// Session {
	// cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
	// name: '바나나',age: 10 }

	res.send({ id: req.sessionID, name: req.session.name,age:req.session.age })
})

app.get('/destroy',(req,res)=>{
	// 세션 삭제 
	// req.session.destroy(세션 삭제시 호출할 콜백함수)

	req.session.destroy((err)=>{
		if(err){
			throw err;
		}
		// res.send('세션 삭제 완료!');
		res.redirect('/name') // 경로를 변경한다 (redirect) 한다.
	})
})


app.listen(port, () => {
	console.log(`Server running ${port}`);
});

/* express-session 모듈
	: 세션관리 
	ex)로그인 등 
*/

/*
	1. 세션 사용 : req.session.키
	2. 세션 설정 : req.session.키 = 값
	3. 세션 삭제 : req.destroy(콜백)
*/
