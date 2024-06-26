const express=require('express');
const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.get('/',(req,res) =>{
    res.render('dynamic',{'title':'동적 폼 전송을 사용해보자 !'})
})

//ajax
app.get('/ajax',(req,res)=>{
    //get 방식이므로 브라우저에서 URL 쿼리까지 직접 입력하고도 값을 확인 가능
    // http://localhost:8000/ajax?name="예진"&gender="여자"
    console.log(req.query);
    res.send(req.query);
})
app.post('/ajax',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})


//axios
app.get('/axios',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
app.post('/axios',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})
//fetch
app.get('/fetch',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
app.post('/fetch',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.listen(8000,()=>{
    console.log('8000 사용중');
})