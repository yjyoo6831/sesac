//[before]
// exports.getVisitors = () =>{
//     return[
//         {id:1,name:'홍길동',comment:'내가 왔다.'},
//         {id:2,name:'이찬혁',comment:'으라차차'},
//     ]
// }


//[after]



const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '1234',
    database : 'codingon'
}) // db 연결 객체 


exports.getVisitors = (callback) =>{
    conn.query(`select * from visitor`, (err,rows)=>{
        if(err){
            throw err;
        }
        // console.log("errrror");
        console.log('model/getVisitors >> ', rows);
        callback(rows)
        // model/Visitor.js >> [ RowDataPacket { id: 10, name: '이찬2', comment: '으라차차' }
    });
};

exports.getVisitor = (targetId,callback)=>{
    conn.query(`select * from visitor where id=${targetId}`,(err,rows)=>{

    
    if(err) throw err;

    console.log('model/getVisitor >> ',rows);
    callback(rows[0])
})
}

exports.postVisitor = (data, callback) =>{
    conn.query(`insert into visitor(name,comment) values('${data.name}','${data.comment}')`,
    (err, rows) => {
        if(err){
            throw err;
        }
        console.log('model/postVisitor >> ',rows);
        // model/Visitor.js >>  OkPacket {
      //   fieldCount: 0,
      //   affectedRows: 1,
      //   insertId: 4, // -> pk
      //   serverStatus: 2,
      //   warningCount: 0,
      //   message: '',
      //   protocol41: true,
      //   changedRows: 0
      // }
        callback(rows.insertId)
    }
)
}

exports.deleteVisitor = (targetId,callback) => {
    //targetId : 삭제해야할 visitor id 
    conn.query(`delete from visitor where id=${targetId}`,(err,rows)=>{
        if(err) throw err;
        console.log('model/deleteVisitor >> ',rows);
        /*
        OkPacket {
            fieldCount: 0,
            affectedRows: 0,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
        }
         */
        // callback(rows);
        callback(true); //삭제

    })
}

exports.patchVisitor = (updateData, callback) =>{
    const {id, name, comment} = updateData;
    conn.query(`update visitor set name='${name}', comment='${comment}' where id=${id}`
        ,(err,rows)=>{
            if(err) throw err;
            console.log('model/Visitor.js >>',rows);
            callback(true); //수정
        });
}