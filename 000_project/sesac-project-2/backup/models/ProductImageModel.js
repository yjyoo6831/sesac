// ProductImage 모델 정의
const ProductImageModel = (sequelize, DataTypes) =>{
    const ProductImage = sequelize.define(
        'ProductImage', 
        { 
        // 새상품 최저가 인덱스
        NewProductId:{
            type:DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement :true,
            allowNull : false,
        },
        // 가격
        Price :{
            type:DataTypes.BIGINT,
            allowNull:false,
        },
    },
    {
        freezeTableName : true, 
        timestamps : true, 
    }
);
    return NewProduct;
}

module.exports=NewProductModel;

