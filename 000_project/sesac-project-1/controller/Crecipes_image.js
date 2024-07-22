const Recipe_Img_Model = require('../models/Mrecipe_img');
const {Recipes,Recipe_Img,Users }= require('../models/Mindex');

exports.uploadImage = async(req,res)=>{
    try {
        res.json({message:'이미지가 성공적으로 업로드 되었습니다.'});
    } catch (error) {
        console.error("이미지 업로드 에러", error);
        res.status(500).json({ message: '이미지 업로드 중 오류가 발생했습니다.' });
    }
}