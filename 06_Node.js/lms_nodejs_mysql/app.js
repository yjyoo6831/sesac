const express=require('express');
const app=express();

app.set('view engine','ejs');
app.use('/views',express.static(__dirname+'/views'));
app.use('/static',express.static(__dirname + '/static'));
app.use(express.urlencoded({extended : true}));
app.use(express.json())


//라우터 분리 
const indexRouter = require('./routes/user')
app.use('/user',indexRouter);

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen('8000',()=>{
    console.log('localhost:8000/user');
})