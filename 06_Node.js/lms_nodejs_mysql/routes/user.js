const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> read one -> update

// app.js : const indexRouter = require('./routes/user')  
// 해줬기때문에 '/' 만 해야된다. /user 가 생략되어있음.
// GET / => localhost:PORT/
router.get('/', controller.main);

// 회원가입페이지 보여주기
router.get('/user/signup',controller.getSignup)

//새로운 회원 생성하기 
router.post('/signup',controller.postCreateUser)


//로그인 페이지 보여주기
router.get('/signin',controller.signin)


module.exports=router;