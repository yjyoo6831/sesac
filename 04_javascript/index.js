//구조분해 할당
const arr1=[1,2,3,4,5];
const arr2=['a', 'b', 'c']

const a = arr1;
const [two, three, four, five,one] = arr1;
// console.log(one,two,three,four,five);

const [x,y,z, alpha] = arr2;
// console.log(x,y,z,alpha);

let num1=1;
let num2=2;
// 변수값의 교환 
// 예전에는 변수값을 바꿀때 변수가 3개가 필요했지만, 현재는 다른 방법이 생겼다.  [] = []
// console.log(num1,num2);
// [num2, num1] = [num1, num2]
// console.log(num1,num2);

const lists= ['apple','grape'];
[f1, f2, f3='orange'] =lists;

console.log(f1,f2,f3);

//객체 , object  : key 와 value 의 모임, {} 로 사용
// const obj = 10;
// const obj= [10,20];
const obj = {
    title : "엘리먼트",
    content : 'fun',
    num : 5

}
//두 개 다 사용가능하다. 
// console.log(obj.num);
// console.log(obj.content);
// console.log(obj['title']);

//객체 구조 분해  , default 값을 줄 수 도 있다. 
const {title,content, star=1000 } = obj;
// console.log(title,content, star)

const {num,b1,c1} = obj; //key 값을 동일하게 사용해야한다. 
// console.log(num,b1,c1); // 결과는 undefined

// undefined : 변수는 할당되었지만(초기화) , 값이 할당되지 않음.

const lectureInfo = {
     name : 'Coding on',
     part : 'web',
     leader : 'Kim',
}

// console.log(lectureInfo);
function getInfo(lecture){
    const {name,part,leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 리더는 ${leader}`
    return output;
}

const res = getInfo(lectureInfo);
console.log(res);