const express=require('express')

const app = express();
// console.log(app);
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(8000,()=>{
    console.log('8000 포트 실행중');
})