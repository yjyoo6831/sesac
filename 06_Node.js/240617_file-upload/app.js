const express=require('express');
const multer=require('multer');
const upload = multer({dest:'uploads/'})
const app = express();
const POST=8080;

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extende : true}))
app.use(express.json())

//multer 미들웨어 등록
app.use('/uploads',express.static(__dirname + '/uploads'));

// const upload = multer({
//     dest : 'uploads/'
// })

app.get('/',(req,res)=>{
    res.render('index',{title : '파일 업로드 배워보기'})
})

app.listen(POST,()=>{
    console.log(POST+"포트 실행중");
})