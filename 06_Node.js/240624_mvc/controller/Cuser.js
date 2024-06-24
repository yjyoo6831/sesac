const {getDbUser} = require('../model/User');

exports.getUser = (req,res) =>{
    res.render('user',{user : getDbUser()})
    //model.User.js 의 return 값, 즉 value 가 'user'에 들어간다.

}
