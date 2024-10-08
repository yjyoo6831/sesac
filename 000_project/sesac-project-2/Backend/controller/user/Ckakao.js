const db = require('../../models/Index');
const { User, Location, Active } = require('../../models/Index');
const encUtil = require("../../utils/encrypt");
const auth = require('../../middleware/auth');

const dotenv = require('dotenv');
dotenv.config();

const REST_API = process.env.REST_API
const CLIENT_SECRET=process.env.CLIENT_SECRET
const REDIRECT_URI=process.env.REDIRECT_URI

// 카카오 로그인창 
exports.kakaoLogin = async(req, res) => {
    try {
       

            res.render(kakaoAuthURL);
    } catch (error) {
        res.status(500).json({message: '카카오 로그인 에러', error : error.message})
    }
}