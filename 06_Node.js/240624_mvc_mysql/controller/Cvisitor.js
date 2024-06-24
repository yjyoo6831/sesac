const Visitor= require('../model/Visitor');

// 1. GET / => localhost:PORT/
exports.main = (req,res) =>{
    res.render('index');
};

// 2. GET /visitors => localhost:PORT/visitors
exports.getVisitors = (req,res) =>{
    // console.log("here" , Visitor.getVisitors());
    // [before]
    // res.render('visitor',{data: Visitor.getVisitors()});

    // [after]
    Visitor.getVisitors((result) => {
        // result 매개변수
        // : model/Visitor.js getVisitors함수의 callback(rows)의 "rows" 변수에 대응
      
        console.log('controller/CVisitor.js >> ', result);
        
        res.render('visitor',{data:result});
      })
}
exports.postVisitor = (req,res) => {
    console.log(req.body);
    //result 는 Visitor.js 의 rows.insetId 값 ( cb )
    Visitor.postVisitor(req.body, (result) =>{
    res.send({
        id:result, 
        name:req.body.name, 
        comment:req.body.comment
    })
    })
    
}