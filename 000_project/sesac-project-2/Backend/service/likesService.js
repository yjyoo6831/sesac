const { Product, Likes } = require('../models/Index');
const { isLoginUser, isWriter } = require('../service/isLoginActive');
var sequelize = require('sequelize');

exports.getLikes = async (req) => {
    try {
        const productId = req;
        console.log('productId > ', productId);
        const likes = await Likes.findOne({
            where: {
                productId,
            },
            attributes: [[sequelize.fn('SUM', sequelize.col('likesCount')), 'totalLike']],
            raw: true,
        });

        var likeCnt = likes.totalLike ? likes.totalLike : 0;
        console.log('likeCnt > ', likeCnt);
        return likeCnt;
    } catch (err) {
        return `message: 'getLikes 서버 오류', err: ${err.message} `;
    }
};

exports.postLikes = async (req, res) => {
    console.log('postLikes 에 들어옴');
    const { productId } = req.query;
    try {
        console.log('req.query > ', req.query);
        const userId = req.userId;
        const result = await isLoginUser(req, res);
        // console.log('userId > ', userId); // 로그인 유저
        if (!result) return;

        const writer = await isWriter(req, productId);
        console.log('writer>> ', writer);
        var flag=true;

        if (writer) {
            res.json({ userId: userId , productId: productId , data : "no", message: "본인 글" });
        } else {
            const userLikes = await Likes.findOne({
                where: {
                    productId,
                    userId,
                },
                attributes: ['likesCount'],
                raw: true,
            });
            console.log('b4 likesInfo >> ', userLikes);
            if (userLikes) {
                console.log('product, user 가 likes table 에 존재함.');
                const isAlreadyLike = await Likes.findOne({
                    where: {
                        productId,
                        userId,
                    },
                    attributes: ['likesCount'],
                    raw: true,
                });

                console.log('isAlreadyLike > ', isAlreadyLike);
                if (isAlreadyLike.likesCount === 1) {
                    // 유저 좋아요 1일 경우
                    console.log(`좋아요 1 -> 0`);
                    await Likes.destroy({
                        where: { productId, userId },
                    });
                    flag=false;

                } else {
                    // 유저 좋아요 0일 경우
                    console.log(`좋아요 0 -> 1`);
                    await likesCreate(productId, userId, 1);
                }
            } else {
                console.log(`${userId}의 찜 내역은 없으므로 새로 생성한다.`);
                await likesCreate(productId, userId, 1);
                
            }
            console.log("flag >> ", flag);
            
            res.json({ userId: userId , productId: productId , data : flag });
        }
    } catch (err) {
        res.status(500).json({ message: 'postLikes 서버 오류', err: err.message });
    }
};

exports.checkLikes = async (productId, userId) => {
    try {
        console.log('checkLikes parameter > ', typeof productId, typeof userId);
        const likes = await Likes.findOne({
            where: {
                productId ,
                userId ,
            },
            raw: true,
        });
        console.log('likesInfo >> ', likes);

        var flag = likes ? true : false;
        console.log('do i likes ? ', flag);
        return flag;
    } catch (err) {
        return `message: 'checkLikes 서버 오류', err: ${err.message} `;
    }
};

function likesCreate(productId, userId, likesCount) {
    Likes.create({ productId, userId, likesCount });
}
