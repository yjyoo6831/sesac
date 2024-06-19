const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended : true}))
app.use(express.json());


app.get('/',(req,res) =>{
    res.render('dynamic',{'title':'동적 폼 전송을 사용해보자 !'})
})

// axios
app.get('/axios',(req,res)=>{
    console.log(req.query);

    res.send(req.query);
})


app.listen(8000,() =>{
    console.log('8000 실행중');
})
