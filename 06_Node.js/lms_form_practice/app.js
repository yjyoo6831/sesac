const express=require('express');
const app=express();


app.set('view engine','ejs');
app.set('views','./views');

// const async = require('./views/asynchronous')
// app.use('/async',async);
// const router = express.Router();

app.get('/',(req,res)=>{
    res.render('index',{title:"Home"});
})
app.get('/getForm',(req,res)=>{
    res.render('submit_result',{title:"Form",uInfo:req.query});
    console.log(req.query);
})
app.post('/getForm',(req,res)=>{
    res.render(req.body)
    console.log(req.body);
})
// router.get('/async',(req,res,next)=>{
//     res.render('asynchronous',{title:'asynchronous'})
// });
// module.exports = router;


// app.get('/async',(req,res)=>{
//     res.render('asynchronous',{title:"비동기",uinfo:req.query})
// })


app.listen(8000,() =>{
    console.log('8000 실행중');
})