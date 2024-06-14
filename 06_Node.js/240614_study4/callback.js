// setTimeout(code,delay(ms)) : delay 시간동안 기다리다가 code 를 실행한다. 
// 기다리지 않고 다음 구문을 실행하는 것 => js의 특성이다.  (비동기 처리)

// console.log(1);
// setTimeout(function(){
//     console.log(2);
// },2000);
// console.log(3);
/* 
let product;
let price;
function goMart() {
    console.log('무엇을 살지 고민중...')
}
function pickDrink() {
    setTimeout(() => {
       console.log('결정 완료'); 
       product='제콜';
       price=2000;
    }, 3000);
}
function pay(product,price) {
    console.log(`상품명 : ${product} 가격:${price}`);
}

goMart();
pickDrink();
pay(product,price);
*/

// 왜 undefiend가 뜰까? 컴퓨터 입장에서 해석해보자
// 1. product, price 전역 변수 확인
// 2. goMart(), pickDrink(), pay() 함수 정의부
// 3. goMart() 함수 실행: 콘솔 로그 찍음
// 4. pickDrink() 함수 실행
// 4-1. setTimeout 함수에 의해 3초 대기
//      그런데!! JS는 비동기 -> 이 코드가 끝날 때까지 기다리지 않고, 다음 코드 바로 실행
// 5. pay() 함수 실행 => !!! undefined 출력(문제발생)
// 5-1. 3초가 지나서
// 5-2. setTimeout의 첫번째 인자인 함수를 실행 
// 5-2-1. 고민 끝 문장이 출력
// 5-2-2. product, price 변수에 값이 할당


// 비동기처리를 막기 위한 해결 방법 1. 콜백함수
// 보통 콜백함수를 선언할때는, 함수 타입 인자를 맨 마지막에 선언한다. 
// => 콜백지옥에 빠질 수 있기 때문에 잘 사용하지 않는다. 
let product;
let price;
function goMart() {
    console.log('무엇을 살지 고민중...')
    
}
function pickDrink(pick) {
    setTimeout(() => {
       console.log('결정 완료'); 
       product='제콜';
       price=2000;
       pick(product,price);
    }, 3000);
}
function pay(product,price) {
    console.log(`상품명 : ${product} 가격:${price}`);
}

goMart();
pickDrink(pay);

