// console.log('Cuser.js');
//백엔드 함수선언부분
const mUser= require('../model/User.js')

// 1. GET / => localhost:PORT/
// exports 를 통해 main 변수((함수)) 지정해서 내보낸다
exports.main = (req,res) =>{
    // index.ejs 파일로 향한다
    res.render('index');
};

// 회원가입 조회
exports.getSignup = (req,res) =>{
    res.render('signup');
};

// 회원가입 버튼 클릭시 
exports.postCreateUser = (req,res) =>{
    // views/signup.ejs 
    console.log("req.body",req.body);
    // res.render('signup');
};


// // 로그인 버튼 클릭시 
// exports.createUser = (req,res) =>{
//     res.render('signin');
// };
