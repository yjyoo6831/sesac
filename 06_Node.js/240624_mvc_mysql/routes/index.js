const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 작업 순서
// read all -> create -> delete -> read one -> update

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

/*
요청 방식은 두가지로 나뉜다. 
1) GET /visitor/:id
    ex) GET /visitor/13

2) GET /visitor?id=13

*/

// GET /visitor/:id
router.get('/visitor/:id',controller.getVisitor) // 하나 행 조회

// POST /visitor 
router.post('/visitor', controller.postVisitor); // 한 열 추가

// DELETE /visitor
router.delete('/visitor', controller.deleteVisitor); // 한 열 삭제

// PATCH /visitor
router.patch('/visitor', controller.patchVisitor) ; //한 열 수정하기


module.exports = router;