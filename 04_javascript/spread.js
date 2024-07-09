//spread 연산자 ( ... ) 값 전체를 불러오는 것 
const a = [1,2,3] 
const b = [4,5]

const spread = [...a, ...b]
console.log(spread);
const c = '[...hello()]'
// console.log(c);

//1. 기존방식
const d = 'HELLO'.split('');
// console.log(d);
//2. spread 이용하여 object 출력 
const chip={
    base:'chip',
    company:'lotte'
}
console.log(chip);

// ------------
//rest 파라미터
// 함수에서 사용시 
const values = [10,20,30,40,50];
function get(a,b, ...rest) { // 순서대로 읽고 나머지는 rest에 넣는다. 
    console.log(a,b);
    console.log(rest);
}
get(...values)
 
//---- 

const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};
const {flavor, ...re} = icecream;
// console.log(flavor);
// console.log(re);

// -- 배열에서  rest 사용하기 
const num=[1,2,3,4,5]
const [one1,two1,...rest2] = num;
console.log(one1,two1,rest2);

