// 자료형 (data types)
// 데이터 (변수)의 종류가 무엇인가 ?
// - Primitive(원시타입):String,number,boolean, undefined, null...

// 1. string(문자열)
// - 텍스트 정보, 따옴표 감싸야함.
// - 숫자, 특수문자도 따옴표 안에 포함 되어있다면?->문자열이다. 

let text="안녕하세요";
let text2="하이!";
let gender = "남성";

// console.log(text);
// console.log(text2);
// console.log(text + text2);

// console.log(text + "My name is Joyce. Gender : "+ gender)

// template literal (=문자를 표현하는 새로운 문법)
// ES6 backtick(`) : 문자열 내에서 변수와 상수를 간결히 표현
// console.log(`${text}\ngender : ${gender} `);
// console.log(text,text2,'야호');

let num=100;
let num2=0.12;

// console.log(100,0.12);
// console.log(num+1,num-1,num/2,num%2);

// 3.boolean(불린)
// -true ,false (참, 거짓) 두가지 값만 가지는 데이터. 
let isWater=true;
let haveMoney=false;
// console.log(isWater,haveMoney)//true,false

// 4. null(빈값) - "값이 없음"을  의도적으로 명시 
let temp=null;
// console.log(temp);

// 5. undefined  - 값도 없고, 타입도 지정되지 않은 상태 
let x;
// console.log(x);

// 상수는 값을 더하기나 뺄 수 없다. 재선언이 안되기 때문에.
const q=3;
// q=q+1
// console.log(q);

//6. 배열(Array)
//배열의 이름 : fruits
//배열의 요소(item) : 배열 안에 있는 개별적인 데이터
// 위치 (index) : 0부터 시작 - zero based numbering
// 길이 (legnth) : 요소의 개수와 동일 
// js에서는 배열 요소의 자료형이 달라도 됨. - js 의 동적 타입 특성으로 인한 유연성 - 느슨한 언어 . 

const fruits=['orange','pineapple','grape','apple']
// console.log(fruits);
// fruits 배열안에서 위치가 0 인 요소 출력 
// console.log(fruits[0]) ; //orange 

const mixedArr=[1,'YEJIN',true,{name:'Joyce'},null]; //name :Joyce -> 객체(Object) 
// console.log(mixedArr);

// Array 안에 Array 가 들어갈 수 있음 (중첩 가능) => 2차원 배열 
const korean=[
    ['ㄱ','ㄴ','ㄷ'],
    ['ㄹ','ㅁ','ㅂ'],
    ['ㅅ','ㅇ','ㅈ'],
    ['ㅋ','ㅌ','ㅍ']
];
// console.log(korean[0][0],korean[2][2]); 
// console.log(korean[2][0],korean[0][2]); 

const nums=[
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
];
// console.log(nums);
// console.log(nums[1][0][1]); //8


//7. 객체 (object) (key:value) - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조
// - 속성과 메서드로 구성
// - *속성
// key , value 의 쌍으로 이루어져 있다. - 상태나 특징
// *메서드 
// - 함수(function)를 값으로 가진다. - 동작이나 행위.

const cat={
    name : '장화', // key : name , value : 장화
    age : 10,
    isCute : true,
    mew: function() {  //method
        return 'mewwww~';
    },
}
// console.log(cat);
//객체(object)의 속성(key)에 접근하는 방법
// 1.점 표기법(.)
// console.log(cat.name); // 장화
// console.log(cat.age); // 10
// console.log(cat.mew()); // 함수가져오기

// 2.대괄호 표기법
// console.log(cat['name']);

//3. key가 변수에 저장되어 있을때 사용법
const temVal='name';
// console.log(cat[temVal]); // = cat['name']


// 8. typeof : 자료형을 확인 할 수 있는 키워드  ex) typeof x 
// console.log(typeof '문자형');
// console.log(typeof(null)); //object -> js의 초기 구현 에러중 하나로서 , null 값을 object 로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류
// console.log(typeof(undefined)); 
// console.log(typeof(cat)); //배열은 object 로 나온다.

//9. 형변환 
let mathScore=prompt('수학점수 입력');
let engScore=prompt('영어점수 입력');
let avg=(Number(mathScore)+Number(engScore))/2;


console.log(typeof(avg)); // 값이 제대로 안나옴 : 자동 형변환 때문에 !!  => 명시적 형변환을 해주어야 한다. 
console.log(`mathScore > ${mathScore} \nengScore > ${engScore} \navg : ${avg}`);

//1. String() : 문자로 형변환
let str1=true;
let str2=123;
let str3=undefined;
// console.log(String(str1),typeof String(str1)); 
// console.log(String(str2),typeof String(str2)); 
// console.log(String(str3),typeof String(str3)); 
// console.log(str1.toString(),typeof str1.toString()); // true 

//값을 문자열로 변환
// 2. Number() : 숫자로 형변환 
let n1=true;
let n2=false;
let n3=123.9;
// console.log(Number(n1),typeof Number(n1));
// console.log(Number(n2),typeof Number(n2));
// console.log(Number(n3),typeof Number(n3));
// console.log(parseInt(n3,10)); //n3의 값을 10진수의 정수(int)로 바꾸겠다. //123
// console.log(parseFloat(n3)); //n3의 값을 실수로 바꾸겠다. //123.9
// null,undefined 를 숫자로 바꾼다면 ?
// console.log(Number(undefined),typeof Number(undefined)); //Nan = Not A  Number(숫자가 아님)
// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문
// console.log(Number(null), typeof Number(null)); // 0 'number'




