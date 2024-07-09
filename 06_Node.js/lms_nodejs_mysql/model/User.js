// sql 문 작성해주기

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "lms",
  password: "1234",
  database: "lmsdb",
}); // db 연결 객체

const qq = 1;

exports.postCreateUser = (data, callback) => {
  conn.query(
    `insert into user(userid,pw,name,joindate) values('${data.userid}','${data.pw}','${data.name}',now());`,
    (err, rows) => {
      if (err) {
        console.log("!!! postCreateUser Error >>> ", err);
      }
      console.log("model/User.js postCreateUser >> ", rows);
      runsql("select * from user where id>15");
      callback(rows);
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
    }
  );
};
exports.postCheckUser = (userid, pw, callback) => {
  conn.query(
    `select * from user where userid='${userid}' and pw='${pw}' ;`,
    (err, rows) => {
      if (err) {
        console.log("!!! model/User.js postCheckUser Error >>> ", err);
      } else { 
        console.log("model/User.js postCheckUser >> \n", rows[0]);
        //rows 만 찍고, 틀린 값 입력 시, [] 빈 배열 객체 출력
        //rows
        // [
        //     RowDataPacket {
        //       id: 18,
        //       userid: '0709test',
        //       name: '0709test',
        //       pw: '0709test',
        //       joindate: 2024-07-09T09:56:14.000Z
        //     }
        //   ]
        // rows[0] 
        // RowDataPacket {
        //     id: 18,
        //     userid: '0709test',
        //     name: '0709test',
        //     pw: '0709test',
        //     joindate: 2024-07-09T09:56:14.000Z
        //   }
        if (rows[0]) { // 아이디와 비밀번호 일치 할 경우
          console.log("로그인 성공!");
          callback(rows[0]);
        }
      }

    }
  );
};

exports.patchUserInfo=(updateInfo,callback) => {
    const{userid,pw,name} = updateInfo;
    // conn.query (`update set userid='${userid}'` ,(err,rows)=>{
    //     console.log('회원정보 수정 model/User.js >> ',rows);
    //     callback(true) // 수정
    // })
}

function runsql(query) {
  conn.query(`${query}`, (err, rows) => {
    if (err) {
      console.log("!!! Error >>> ", err);
      // throw err;
    } else {
      console.log(rows);
    }
  });
}
