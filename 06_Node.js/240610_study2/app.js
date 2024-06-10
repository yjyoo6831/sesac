// console.log(__dirname);
// console.log(__filename);
// require('./add');
// add(1,2)
// console.log('From index.js');

//scope(범위) 모듈은 각각의 범위를 가지고 있다. 
// require('./batman');
// require('./superman');

// 모듈의 기초형태 
// ()() 함수의 자동실행형태.
(function(){
    const superHero = 'Superman';
    // console.log(superHero);
})()

// 모듈의 형태 
//(function(exports,require,module,__filename,__dirname) {
//    
//})()

/* os 모듈
const os=require('os')
// console.log(os.totalmem());

let ttMem=os.totalmem();
let freeMem=os.freemem();

// console.log(`total memory: ${ttMem}`);
// console.log(`free memory : ${freeMem}`);

/* PATH 모듈
 - path.join() : 여러 인자를 하나의 문자열로 합침. /  상대경로를 출력 
 - path.resolve() :  // 파일의 절대경로를 출력
 - path.parse(): 파일 경로를 root, dir, base, ext, name 으로 구분
 - path.format() : path.parse()와 한 객체를 파일 경로로 합친다.
*/ 
const path=require('path')
// console.log(path.basename(__dirname)); // path 의 가장 마지막 부분 출력
// console.log(__dirname); // 파일의 현재폴더까지의 path를 출력
// console.log("-----------");
// console.log(__filename); // 파일의 full path를 출력 (현재 파일 명 포함)

//join 과 resolve 의 차이 
// console.log(path.join('a','b','/index.html'));
// console.log(path.resolve('a','b','index.html'));

let pathname = path.parse('C:\Users\sba\Documents\sesac_class\sesac\06_Node.js\240610_study2\app.js');
// console.log(pathname);
// console.log(path.extname('/home/user/dir/file.txt')); //확장자만 출력
// console.log(path.basename('/home/user/dir/file.txt')); //파일 명 출력 

// console.log(path.join('a','b','index.html'));

// console.log(path.join('/a','b','index.html'));
// console.log(path.join('a','b','../index.html'));
// console.log(path.join(__dirname,'data.json'));

// * Filesystem 모듈
const fs= require('fs');
// 만약 에러가 날 시 , err로그를 찍어라.  (콜백 함수 쓰는 이유)
// rmdir 이라는 명령어도 있다. 
// fs.rmdir(path.join(__dirname,'test'), (err)=>{
// fs.mkdir(path.join(__dirname,'test'), (err)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('디렉토리 생성완료');
// })

//디렉토리 읽기
// fs.readdir('./', function(err,files){
//     if(err) console.log("에러",err);
//     else console.log("result : ",files);
// })
// fs.writeFile('new.txt','Hello World', function (err) {
//     if(err) throw err;
//         console.log("파일 생성완료");
// })

// open() ,w 를 이용한 파일 생성
// fs.open('new1.txt','w',function (err,file) {
//     if(err) throw err;
//     console.log("open ,w 이용한 파일 생성 완료 ");
// })

// apeendFile() : 파일이 없으면 새파일생성하여 내용 작성, 이미 있으면 내용만 추가함.
//  fs.appendFile('appendfile.txt','www',function (err) {
//     if(err) throw err;
//     console.log("appendfile 이용한 파일 생성 완료 ");
// })

// 파일삭제 
// fs.unlink('new.txt',function (){
//     console.log('파일 삭제 완료');
// })
// 파일 이름 변경
// fs.rename('batman.js','rebatman.js',function (err){
//     if(err) throw err;
//     console.log('파일 이름 변경 완료');
// })
// 파일 읽기
// fs.readFile('./input.txt',function(err,data){
//     console.log(data);
// });

const data = fs.readFileSync('./input.txt','utf-8')
console.log(data);
console.log("파일 읽기 완료");
