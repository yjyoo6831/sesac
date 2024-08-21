// # generic
// - 선언 할 때 타입을 지정하기 어려운 케이스가 존재
// - 데이터 타입을 외부에서 지정 
// - 생성 시점에서 타입을 명시한다. 
// -> "재사용성, 유연성 증가"
// -> 타입을 변수처럼 사용한다. 
// <T> 형태로 주로 사용

// ex1)
function numArrLen(arr: number[]):number {
    return arr.length;
}
console.log(numArrLen([1,2,3])); //3

// ex2)
function strArrLen(arr: string[]) : number{
    return arr.length;
}
console.log(strArrLen(['1','2','3','4'])); //4

// - 리턴되는 값이 string, number, boolean, ... 모든 값이 들어 올 수 있는 함수라면 ?
// #1. 제너릭 기본 사용법
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦. 
// -> type만 올 수 있다. 

function arrLen<T>(arr : T[]) {
    return arr.length;
}

// T[] : T에 대응되는 자료형의 배열.
console.log(arrLen<string>(['1','2','3','4']));
console.log(arrLen<number>([1,2,3,4]));
console.log(arrLen<number|string >(['1',2,'삼',4]));

function printSome<T>(x :T, y:T): void{
    console.log(x, y);
};

printSome<string>('h1','hello');
printSome<number>(100,200);
printSome<boolean[]>([true,false],[false,false]);

// #2. 두 개의 서로 다른 타입 매개변수 제너릭
// * 관례일 뿐 
// T: type U:usually 

function printSome2<T,U>(x:T, y:U) : void {
    console.log(x,y);
};
printSome2<string,number>('1',1);


// ########################
// Interface와 generic
// ex1)
// Phone 인터페이스의 옵션이 여러 타입으로 정의 될 수 있다면 ? 제너릭 

interface Phone<T>{
    company: string;
    createdAt: Date;
    option: T;
}

// 사용자 정의 
type iPhoneOption = {
    color : string;
    storage : number;
};
const iPhone50 : Phone <iPhoneOption> = {
    company:'apple',
    createdAt: new Date('2024-08-21'),
    option:{
        // 제너릭을 통해 'option'의 속성 타입을 유연하게 지정
        color:"pink",
        storage:128,
    }
}

console.log(iPhone50);

// ex2)
type galaxyOption={
    color: string,
    isBuz: boolean,
};

const galaxy50: Phone<galaxyOption> = {
    company : 'samsung',
    createdAt : new Date('2024-09-21'),
    option : {
        color : 'blue',
        isBuz: true
    }
}

console.log(galaxy50);
