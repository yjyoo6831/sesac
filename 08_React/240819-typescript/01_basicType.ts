let a: number = 2;
a=2;
console.log("a >> ",a);
let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

console.log(a,b,c,d,e);


let aa = 1;
let bb = 'hi';
let cc = false;
let dd;
let ee = null;
console.log(aa,bb,cc,dd,ee);


// * 배열 
let numArr: number[] = [1,2,3,4,5];
// numArr = ['a','b'] ; type error

// 배열 원소가 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1, true, 'string'];

// '|' 연산자 - 유니온 타입 (Unoin Type) 을 정의할 때 사용
// -> '유니언 타입' : 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능

// [boolean, null, number array가 원소가 될 수 있는 arr2]
let arr2: Array<boolean | null | number[]> = [true,false,null , [1,2,3]];

// [어떤 자료형이든 상관 없는 배열]
let arr3: any[] = [1,2,3,'wow', true, false];

// ============= 
// * 객체
let obj1: object = {
    name : 'hey',
    age : 20,
}