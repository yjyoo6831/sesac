/*표준 내장 객체
 - 기본적으로 미리 정의된 객체 
 - 모든 JS 환경에서 사용할 수 있는 내장 객체들을 말한다. 
 - 자주 사용되는 기능을 미리 구현해 놓은 것.
*/

// 1. Date 객체 : 시간, 날짜 
// 날짜 생성하여 저장. 
let now=new Date();
console.log(now);

//new Date (timestamp)
 ////////////
let jan_01_1970 = new Date(0);
console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

let jan_02_1970 = new Date(24*3600*1000);
console.log(jan_02_1970); // Thu Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)

//new Date (date_string)
let date=new Date('2024-05-03');
console.log("date>",date);

let date2=new Date('2024','06','03'); 
console.log("date2 > ",date2);

//관련 메소드
//객체 점 접근법
//getDate() : 월의 몇번째 날인지 반환해준다.
//getDay() : 주의 몇번째 날인지 반환해준다. (0부터 시작)
//getMonth() : 몇번째 달인지 반환해준다. (0부터 시작)
//getHours() : 시간 반환 0~23
// getMinutes : 분 0~59
// getSeconds() : 초 0~59
// getMilliseconds() : 밀리초반환 0~999
// getTime() : 1970년부터 현재까지의 밀리초 단위의 시간 반환

console.log(now.getFullYear()); //2024
console.log(now.getMonth()+1); //5 + 1 = 6
console.log(now.getDate());
console.log(now.getHours(),now.getSeconds(),now.getMilliseconds());
console.log(now.getDay()); //0(일)~ 6(토)

console.log("==============");
console.log(Math.E); // 자연로그

//PI , 2의 제곱근 (속성 : : 소괄호가 없고, 매개변수가 없다.)
console.log(Math.PI,Math.SQRT2);

//메소드 : 소괄호가 있고, 매개변수를 받는다.
console.log(Math.min(100,-2,-4)); //최소값
console.log(Math.max(100,-2,-4)); //최대값
console.log(Math.round(5.3313)); //5 - > 반올림
console.log(Math.ceil(5.3313)); // 6 ->올림
console.log(Math.floor(5.3313)); // 5 ->내림
console.log(Math.random()); // 0<=x<1 범위의 난수 

console.log("========== random 응용 ============");
//0~9  Math.floor(Math.random()*(end-start+1) + start )
console.log(Math.floor(Math.random()*10));


//0~10
console.log(Math.floor(Math.random()*11)); //0<= x < 11

//1~100
console.log(Math.floor(Math.random()*100)+1); //1<= x < 100
//20~22
console.log(Math.floor(Math.random()*3)+20); //20<= x < 22

