// Player 모델 정의
const playerModel = (sequelize, DataTypes) =>{
    // sequelize 매개변수 :  models/index.js 에서의 sequelize (db 연결 정보를 입력하여)
    // DataTypes 매개변수 : models/index.js 에서의 Sequelize(sequelize 패키지 자체 )
    const Player = sequelize.define(
        'Player',  //param1 : 모델 이름 설정 
        
        { // param2 : 모델 컬럼 정의
        player_id:{
            // player_id int not null primary key auto_increment
            type:DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement :true,

        },
        name :{
            // name varchar(63) not null
            type:DataTypes.STRING(63),
            allowNull:false,
        },
        age:{
            // age int not null
            type:DataTypes.INTEGER,
            allowNull : false,
        }
    },
    { // param3 : 모델 옵션 정의
        freezeTableName : true , // 테이블 명을 그대로 사용한다. (복수형으로 바까주지 X)
        // timestamps : false, // 데이터의 추가/수정 시간을 자동으로 기록(컬럼)

    });
    return Player;
}
module.exports=playerModel;