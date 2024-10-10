const db = require('../../models/Index');
const { User, Location, Active } = require('../../models/Index');
const encUtil = require("../../utils/encrypt");
const jwt = require("jsonwebtoken");
const auth = require('../../middleware/auth');

const dotenv = require('dotenv');
dotenv.config();

const REST_API = process.env.REST_API
const CLIENT_SECRET=process.env.CLIENT_SECRET
const REDIRECT_URI=process.env.REDIRECT_URI

// 카카오 사용자 정보 가져오기
exports.kakaoGetUserInfo = async(req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[0];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("token > ", token);
        
        const data = req.body ;
        console.log("data >> ", req.body );

        res.status(200).json({ message: '로그인 성공', user: userData });
       
    } catch (error) {
        res.status(500).json({message: '카카오 사용자 정보 가져오기 에러', error : error.message})
    }
}

exports.createToken = async(req, res)=>{
    return jwt.sign(
        {},
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
}