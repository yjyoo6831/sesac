const Sequelize = require('sequelize'); //sequelize 패키지를 불러왔다.
// config.json 파일을 불러온다. development 객체를 불러옴 
const config = require(__dirname + '/../config/config.json')["development"]; //db 연결 정보
const db = {}; // 빈 객체 생성 

// sequelize 객체를 선언해서 넣어줌. config.database : codingon , user, "1234" ,
const sequelize = new Sequelize(
  config.database, config.username, 
  config.password, config
); // sequelize 객체 만들었다. 



const PlayerModel = require('./Player')(sequelize, Sequelize);
const TeamModel= require('./Team')(sequelize,Sequelize);
const ProfileModel= require('./Profile')(sequelize,Sequelize);

/* 모델간 관계 연결
1) Player : Profile = 1:1
하나의 선수당 하나의 프로필을 가짐
*/
PlayerModel.hasOne(ProfileModel, { 
  // on update cascade on delete cascade
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE',
  // ProfileModel에 'player_id' 이름의 fk 생성
  foreignKey : 'player_id',
  // PlayerModel 'player_id' 컬럼 참조
  sourceKey:'player_id'
});
ProfileModel.belongsTo(PlayerModel,{
  // Profile의 'player_id' fk 생성
  foreignKey:'player_id',
  //참조하게 될 Plater 의 키 'player_id'
  targetKey:'player_id'
})

/*
  2) Team : Player = 1:N
  한 팀에는 여러명의 선수가 존재 
*/
TeamModel.hasMany(PlayerModel,{
  //Player 'team_id' fk 생성
  foreignKey:'team_id',
  //Team 에서 참조키 team_id' 
  sourceKey:'team_id'
});
PlayerModel.belongsTo(TeamModel,{
  // Player 의 'team_id' fk 생성
  foreignKey:'team_id',
  // 참조하게 될 Team 키는 'team_id'
  targetKey:'team_id'
})


db.sequelize = sequelize;// 불러온 모듈을 넣어주었다. 
db.Sequelize = Sequelize;
//  db = { sequelize : sequelize , Sequelize : Sequelize }

db.Player=PlayerModel;
db.Team=TeamModel;
db.Profile=ProfileModel;
//  db = { sequelize : sequelize , Sequelize : Sequelize , Player:PlayerModel,
//          Team: TeamModel , Profile : ProfileModel}

module.exports = db; // db 객체를 모듈로 내보낸다. = 다른 파일에서 db 모듈을 사용할 예정이다.
