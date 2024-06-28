const {Team, Player} = require('../models/index');
const {Op} = require('sequelize');

exports.getTeams = async(req,res) => {
    try {
        const {sort, search} = req.query;
        console.log(req.query);

        let teams;
        if(sort === 'name_asc'){
            // 이름 기준 오름차순
            //SELECT `team_id`, `name` FROM `Team` AS `Team` ORDER BY `Team`.`name` ASC;
            
            teams= await Team.findAll({
                attributes: ['team_id','name'],
                order: [['name','ASC']]
            })
        
        
    }else if (search){
        //SELECT `team_id`, `name` FROM `Team` AS `Team` WHERE `Team`.`name` LIKE '%KT%';
        teams=await Team.findAll({
            attributes: ['team_id','name'],
            where:{
                name:{[Op.like]:`%${search}%`}
            }
        });
    }else{
        // 전체 조회 
        //SELECT `team_id`, `name` FROM `Team` AS `Team`;
        teams=await Team.findAll({
            attributes : ['team_id','name'],
        });
    }
        res.json(teams);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}

exports.getTeam = async(req,res)=>{
    try {
        console.log(req.params.team_id);
        const {team_id} = req.params;
        // 특정 팀 조회 
        // SELECT `team_id`, `name`, `createdAt`, `updatedAt` FROM `Team` AS `Team` WHERE `Team`.`team_id` = '1';
        const team=await Team.findOne({

            where:{team_id},
            // include:[
            //     {
            //         model:Team,
            //         attributes : ['team_id','name']
            //     }
            // ]
        });
        console.log(">>>>>>>>>>", team);
        res.json(team);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}
exports.getTeamPlayers = async(req,res)=>{
    try {
        const {team_id} =req.params;
        const team= await Team.findOne({
            where : {team_id},
            include : [{model:Player}]
        });
        res.json(team)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
}