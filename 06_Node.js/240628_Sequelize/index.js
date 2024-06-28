const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/teams');
const {sequelize} = require('./models/index');


app.set('view engine','ejs');
app.set('views','./views')
app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use('/',router);
app.use('/players',playerRouter);
//기본 경로가 /teams 가 되게 하므로
app.use('/teams',teamRouter);


sequelize
    //force :true ; 서버실행할때마다 테이블 재생성
    //force :false ; 서버실행 시, 테이블 없으면 생성

    .sync({force:false})
    .then(()=>{
        app.listen(PORT , () =>{
            console.log('con succeeded!');
            console.log('running');
        })
    })
    .catch((err)=>{
        console.error(err);
    })

