const express = require("express");
const router = express.Router();
const controller = require("../controller/user/ClogInOut");
const kakaoController = require("../controller/user/Ckakao");
const { authenticate, adminOrUser } = require("../middleware/auth");

// 기본 요청 경로 localhost:PORT/

// 로그인
router.post(`/login`, controller.userLogin);

// 로그아웃
router.delete(`/logout`, authenticate(adminOrUser), controller.userLogout);

// 카카오 사용자 정보 가져오기
router.post(`/api/auth/kakao/login`, kakaoController.kakaoGetUserInfo);

module.exports = router;