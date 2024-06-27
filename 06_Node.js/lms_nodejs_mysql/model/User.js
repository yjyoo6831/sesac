// sql 문 작성해주기

const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'lms',
    password : '1234',
    database : 'lmsdb'
}) // db 연결 객체 


exports.postCreateUser = (data,callback) =>{
    conn.query(`insert into user(userid,pw,name) values('${data.userid}','${data.pw}','${data.name}');`, (err,rows)=>{
        if(err){
            throw err;
        }
        console.log('model/User.js postCreateUser >> ', rows);
        callback(rows)
        // model/postCreateUser >>  OkPacket {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 3,  -> pk
        //     serverStatus: 2,
        //     warningCount: 0,
        //     message: '',
        //     protocol41: true,
        //     changedRows: 0
        //   }
    });
};
exports.postCheckUser = (userid,pw,callback) => {
    conn.query(`select * from user where userid='${userid}' and pw=${pw} ;`,(err,rows)=>{
        if(err){
            throw err;
        }
        console.log('model/User.js postCheckUser >> ', rows);
        callback(rows[0])
    })
}