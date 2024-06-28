const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const {sequelize} = require('./models');


app.set('view engine','ejs');
app.set('views','./views')
app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use('/',router);

sequelize
    //force :true ; 서버실행할때마다 테이블 재생성
    //force :flase ; 서버실행 시, 테이블 없으면 생성

    .sync({force:true})
    .then(()=>{
        app.listen(PORT , () =>{
            console.log('con succeeded!');
            console.log('running');
        })
    })
    .catch((err)=>{
        console.error(err);
    })

