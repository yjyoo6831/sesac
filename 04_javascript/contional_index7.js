// 조건문

// if문
// if (5 > 3) {
//     console.log("집가고 싶다");
// }

// let number = Number(prompt('숫자를 입력해주세요'));
// 1. prompt()로 사용자로부터 값을 입력 받고(문자열)
// 2. Number() 문자열 -> 숫자형 형변환.

// 아래와 동일한 코드
// let number2 = prompt("숫자를 입력해주세요!");
// number2 = Number(number);

// if (number > 10) {
//     console.log('입력한 수는 10 보다 크다');
// } else {
//     console.log("입력한 수는 10 보다 작거나 같다.");
// }

// if (number > 10) {
//     console.log('입력한 수는 10 보다 크다');
// } else if (number === 10) {
//     console.log('입력한 수는 10이다!');
// } else {
//     console.log("입력한 수는 10 보다 작다.");
// }

// if (number > 100 || number < 0) {
//     console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//     console.log('A');
// } else if (number >= 80) {
//     console.log('B');
// } else if (number >= 70) {
//     console.log("C");
// } else if (number >= 60) {
//     console.log("D");
// } else {
//     console.log('F');
// }

// 중첩 if문
let userId = 'user01'
let userPw = '1234'

// id, pw 검사하는 함수
function loginUser() {
    let inputId = prompt('아이디 입력');
    let inputPw = prompt('비밀번호 입력')

    // Q) userId와 inputId가 같다면?
    // -- userPw와 inputPw를 비교
    // Q) inputId에 빈값이 입력이 됐다면?
    // -- '아이디 입력 안함' 이라는 문구를 반환.
    // Q) 두 경우가 아니라면? (inputId가 틀렸을 때)
    // -- '아이디 틀림' 문구를 반환.

    if(userId === inputId) {
        if(userPw === inputPw) {
            return '로그인 성공';
        } else {
            return '비번 오류! 로그인 실패';
        }
    } else if (inputId === '') {
        return "아이디 입력 안함!";
    } else {
        return "아이디 틀림! 로그인 실패";
    }
}
// const result = loginUser();
// -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);


//----------------------
// switch 
// - 하나 이상의 case 문으로 구성
// - default가 필수는 아니지만, 사용권장 
//   ㄴ switch문 내의 모든 case 가 매칭 되지 않을 때 실행
//   - 여러개의 case 문을 묶을 수도 있다. 
//   -break; : 조건을 빠ㅕ나갈 때 사용하는 키워드 

let a = 1;
// switch (a) {
//     case 1:
//     case 2:    
//     case 3:
//         console.log("a== 1~3");
//         break;
//     case 4:
//         console.log("a=4");
//         break;
//     case 5:
//         console.log("a=5");
//         break;
//     default:
//         console.log("a가 무슨 값인가요? : ",a);
//         break;
// }
// 실습
// 학점 계산기 
// - 0~100 외 숫자는 들어오지 않는다고 가정
// number / parseInt(), 10진수

let score=prompt("Your score ? Enter Number : 0~100");
score=parseInt(score);
if(score>=95 ){ grade="A+"}
else if(score>=90){ grade="A0"}
else if(score>=85){ grade="B+"}
else if(score>=80){ grade="B0"}
else if(score>=75){ grade="C+"}
else if(score>=70){ grade="C0"}
else if(score>=65){ grade="D+"}
else{ grade="FAIL!!!!!"}


switch (true) {
    case score>=95:
        grade="A+"; break;
    case score>=85:
        grade="B+"; break;
    case score>=75:
        grade="C+"; break;
    case score>=65:
        grade="D+"; break;
    default:
        grade="FAIL! "
        break;
}
console.log(`Your Score: ${score} \nGrade : ${grade}`)
//----------
// 삼항 연산자
num % 2 === 1 ? console.log("홀수") : console.log("짝수");

// 실습 - new date
// 내장 함수 - 현재 날짜와 시간을 나타내는 JS Date 객체를 반환.
// Q) 내장 함수?
// A) JS 엔진이 기본적으로 제공하는 함수.
// A2) 개발자가 별도로 정의하지 않아도 사용할 수 있는 함수.
// 전역 객체에 속해 있어 어디서든 접근 가능하고 바로 사용 가능!
