// sql 문 작성해주기

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