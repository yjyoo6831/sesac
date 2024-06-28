const ProfileModel = (sequelize, DataTypes) => { 
    const Profie = sequelize.define('Profile',{
        profile_id : {
            type:DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        position:{
            type : DataTypes.STRING(63),
            allowNull : false,
        },
        salary : { 
            type : DataTypes.INTEGER,
            allowNull : false,
        },
    },{
        freezeTableName : true
    
    });
    return ProfileModel;
}

module.exports = ProfileModel;