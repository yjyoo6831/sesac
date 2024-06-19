const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const POST = 8080;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extende: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', { title: '파일 업로드 배워보기' })
})

//multer 미들웨어 등록
// app.use('/uploads', express.static(__dirname + '/uploads'));
//  use 의 첫번째 인자 : 이 경로로 가겠다. 
//첫번째 인자를 두번째와 다르게 설정해주는 것이 좋다. 보안상에 노출될 위험이 있기 때문에 . 
app.use('/image', express.static(__dirname + '/uploads'));
// const upload = multer({
//     dest : 'uploads/'
// })
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
//multer객체 의 single() : 하나의 파일 업로드 
// single 미들웨어는 라우터 미들워어 앞에 넣으면 된다. 
//  ejs 의 name 속성 값을 써줘야함.

//  multer 객체 생성시 작성한 옵션에 따라 파입 업로드 후 req.file 객체 생성
app.post("/upload", uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body); // { title: 'HTML 파일' }
    console.log(req.file); // 첨부파일은 body에 저장되지 않는다.
    // res.send('Success upload!')
    res.render('uploaded',{title : req.body.title, src : req.file.path})

    // 파일 탐색기 > uploads 폴더 생성됨.
    // 확장자 없이 파일명이 자동으로 저장됨 (multer 객체를 생성할 때 dest 옵션 외에 설정을 한 게 없어서)
    // 파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일임이 확인 됨!
})

//multer객체 .array() : 여러파일을 하나의 인풋에 업로드
app.post('/upload/array', uploadDetail.array('userfiles'),(req,res)=>{
    console.log(req.body); //{ title: '파일2개테스트' }
    console.log(req.files); // [{},{}] 배열로 각 파일정보 저장
    res.send('Success upload multiple files')
})

//multer객체 .fields() : 여러 파일을 각가의 인풋에 업로드
app.post('/upload/fields', uploadDetail.fields([{name:'kiwi'},{name:'orange'}]),(req,res)=>{
    console.log(req.body); //{ title1: '01.ot', title2: '13.파일업로드' }
    console.log(req.files); // [kiwi : {}, ..., orange : {}, ... ] 배열로 각 파일정보 저장
    res.send('Success upload multiple files')
})

app.listen(POST, () => {
    console.log(POST + "포트 실행중");
})