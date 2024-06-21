const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index',{title:"회원가입"})
})

app.listen(8000,() =>{
    console.log('8000 실행중');
})

const uploadDetail = multer({
    storage: multer.diskStorage({ // 저장할 공간에 대한 모든 기술을 나열하는것 
        destination(req, file, done) {
            done(null, 'uploads/') // 파일을 저장할 경로 
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, //업로드 크기 제한
})

app.post('/single', uploadDetail.single('ufile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    console.log(`id : ${req.body.id}, pw : ${req.body.pw},
        name : ${req.body.name}, age : ${req.body.age}
        src : ${req.file.path}`);
    res.render('uploaded',{id : req.body.id, pw : req.body.pw,
        name : req.body.name, age : req.body.age, src : req.file.path})
})

app.post('/dynamic', uploadDetail.single('dfile'), (req, res) => {
    const file = req.file;
    const body = req.body;
    console.log("req.body : ",req.body);


    res.send({file,body})
})