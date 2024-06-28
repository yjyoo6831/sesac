// 선수와 관련된 라우터를 정의하는 파일

//기본 요청 경로 
// localhost:PORT/players
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cplayer')

// 이미 기본주소가 /players 이기 때문에 /만 적어준다. 
// get 한 뒤에 controller 에서 정의해주기 
router.get('/',controller.getPlayers);

// /players/1  1만 나오는 것 
router.get('/:player_id',controller.getPlayer);

// 선수 추가 
router.post('/',controller.postPlayer);

//팀 변경
router.patch('/:player_id/team',controller.patchPlayer);

//선수 삭제 
router.delete('/:player_id',controller.deletePlayer)

module.exports=router;