/* os 모듈
const os=require('os')
console.log(os.totalmem());



console.log(`total memory: ${ttMem}`);
console.log(`free memory : ${freeMem}`);
*/
const os=require('os')
let ttMem=os.totalmem();
let freeMem=os.freemem();
console.log(`total memory: ${ttMem}`);
console.log(`free memory : ${freeMem}`);


/* PATH 모듈
 - path.join() : 여러 인자를 하나의 문자열로 합침. /  상대경로를 출력 
 - path.resolve() :  // 파일의 절대경로를 출력
 - path.parse(): 파일 경로를 root, dir, base, ext, name 으로 구분
 - path.format() : path.parse()와 한 객체를 파일 경로로 합친다.
*/ 
const path=require('path')
console.log(path.basename(__dirname)); // path 의 가장 마지막 부분 출력
console.log(__dirname); // 파일의 현재폴더까지의 path를 출력
console.log("-----------");
console.log(__filename); // 파일의 full path를 출력 (현재 파일 명 포함)

// join 과 resolve 의 차이 
console.log(path.join('a','b','/index.html'));
console.log(path.resolve('a','b','index.html'));

let pathname = path.parse('C:\Users\sba\Documents\sesac_class\sesac\06_Node.js\240610_study2\app.js');
console.log(pathname);
console.log(path.extname('/home/user/dir/file.txt')); //확장자만 출력
console.log(path.basename('/home/user/dir/file.txt')); //파일 명 출
console.log(path.join('a','b','index.html'));
console.log(path.join('/a','b','index.html'));
console.log(path.join('a','b','../index.html'));
console.log(path.join(__dirname,'data.json'));
