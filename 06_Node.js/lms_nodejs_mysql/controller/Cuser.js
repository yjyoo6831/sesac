// console.log('Cuser.js');
//백엔드 함수선언부분
const mUser= require('../model/User.js')

// 1. GET / => localhost:PORT/
// exports 를 통해 main 변수((함수)) 지정해서 내보낸다
exports.main = (req,res) =>{
    // index.ejs 파일로 향한다
    res.render('index');
};

// 회원가입 조회
exports.getSignup = (req,res) =>{
    res.render('signup');
};

// 회원가입 버튼 클릭시 
exports.postCreateUser = (req,res) =>{
    // views/signup.ejs 
    console.log("req.body > ",req.body);
    // req.body > { userid: '12', pw: '1', name: '1' }
   
    mUser.postCreateUser(req.body,(result)=>{
        console.log("controller/Cuser.js postCreateUser >> ", result);

        res.send({
            userid:req.body.userid,
            pw:req.body.pw,
            name:req.body.name
        })
    })
};

//로그인 화면 불러오기
exports.getSignin = (req,res) =>{
    res.render('signin');
}
//로그인 화면 조회 (로그인 일치 조회)
exports.postCheckUser = (req,res) =>{
    console.log("controller/Cuser.js req.body  > ",req.body);
    // req.body > { userid: '12', pw: '1', name: '1' }
    
    mUser.postCheckUser(req.body.userid,req.body.pw,(result)=>{
        console.log("controller/Cuser.js postCheckUser >> ", req.body.userid);
        // res.send('test');
        if (!req.body.userid) {
            res.redirect('/user/signin')
        } else {
            res.send({
                userid:req.body.userid,
                pw:req.body.pw,
            })
        }
    })
}
exports.postUserInfo = (req,res) => {
    res.render('prof');
}

// 회원 정보 수정 페이지 
// exports.patchUserInfo = (req,res)=>{
//     console.log("Cuser patchUserInfo >>  \n",req.body);
//     res.render('profile');
    // mUser.patchUserInfo(req.body,(res)=>{
    //     console.log("Cuser.js patchUserInfo res  > ",res);
    //     // res.send({
    //     //     userid:req.body.userid,
    //     //     pw:req.body.pw,
    //     //     name:req.body.name
    //     // })
    // })
// }