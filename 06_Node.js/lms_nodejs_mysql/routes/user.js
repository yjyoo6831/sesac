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
router.get('/signup',controller.getSignup);

// 새로운 회원 생성하기 
router.post('/signup',controller.postCreateUser);


// 로그인 페이지 보여주기
router.get('/signin',controller.getSignin);

// 로그인 회원 조회
router.post('/signin',controller.postCheckUser);

// 로그인 성공시 회원 정보 수정 페이지 접속
router.post('/profile',controller.postUserInfo);

// 회원정보 수정한 뒤 수정된 화면 접속
// router.patch('/profile',controller.patchUserInfo)

// 회원정보 삭제
// router.delete('/profile/delete',controller.patchUserInfo)


module.exports=router;