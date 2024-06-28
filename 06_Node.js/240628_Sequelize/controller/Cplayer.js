//controller /Cplayer.js -> 선수와 관련된 컨트롤러 모음 

// index 에서 갖고온 값 Player 구조분해할당해주기 
const playerModel = require('../models/Player');
const {Player, Profile} =  require('../models/index')

// select * from table
exports.getPlayers =  async (req,res) =>{
    //모델에서 쓸수 있는 메서드는 정해져 있다. 
    // 댓글 수정에서는 select 문으로 사용했지만, 이번에서는 sequelize 의 함수를 사용
    try {
        // sequelize 는 promise 기반이기때문에 async/await 사용가능
        const players = await Player.findAll(); //findAll : select * from 
        res.json(players);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// select from where
exports.getPlayer =  async (req,res) =>{
    try {
        console.log(req.params.player_id);
        const { player_id} = req.params;

        //findOne : select * from  [TABLE] where [player_id]
        const player = await Player.findOne({
            where : {player_id} , // {player_id : player_id}
            //Join
            include : [
                {
                    model:Profile,
                    attributes:['position','salary']
                }
            ]
        }); 
        res.json(player);
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
// 1명선수 추가 //insert
exports.postPlayer = async(req,res) =>{
    try {
        //post 니까 req.body 로 들어옴 .=> 이거는 객체로 보여질테니
        console.log(req.body);
        // 객체를 구조분해 할당 해준다. 
        const {name,age,team_id} = req.body;
        const newPlayer = await Player.create({
            name, age, team_id
        });
        res.json(newPlayer)
        
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
}

// UPDATE `Player` SET `team_id`=?,`updatedAt`=? WHERE `player_id` = ?
//### 특정 선수의 소속 팀 변경
exports.patchPlayer=async(req,res)=>{
    try {
        //각자 들어있는 데이터 타입이 다르다. 
        const {player_id} = req.params;
        const {team_id} = req.body;


        
        const updatedPlayer = await Player.update(
            {team_id}, // 무엇을 바꾸나요 
            {where:{player_id}} // where
        );
        res.json(updatedPlayer);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');

    }
}
// DELETE FROM `Player` WHERE `player_id` = '1'
exports.deletePlayer= async(req,res)=>{
    try {
        const {player_id} = req.params;
        const isDeleted = await Player.destroy({
            where : {player_id}
        });
        console.log(isDeleted); // 삭제되면 1 , 삭제실패시 0 

        if(isDeleted){
            return res.send(true);
        }else{
            return res.send(false);
        }
    } catch (error) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}