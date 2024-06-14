/*Promise(프로미스) 객체 
- 비동기 처리하기 위한 두번쨰 방법
es6(ECMAScript6) 부터 등장한 문법이다(2015년)
- 미래에 실패/성공에 대한 결과값을 "약속"한다는 의미 
어떤 작업에 대해 성공, 실패 분리해서 반환
성공은 then , 실패는 catch 메서드로 이어서 받음.

=> 성공이든 실패든 무언가의 "최종 결과"
resolved : 성공
rejected : 실패 
*/


// 1. promise 를 생성하는 코드 "제작코드(Producing code)"
// let flag;
/*
function promise1(flag){
    // 프로미스 객체를 반환
    // - new 연산자를 이욯해서 프로미스 객체를 만들고 반환
    return new Promise(function (resolve,reject) {
        if (flag) {
            resolve(`프로미스 이행(fulfilled)  성공 ! ${flag} `)
        } else {
            reject(`프로미스 거절(rejected)  실패.. ${flag} `)
        }
    }

    )
}

promise1(5<3)
    .then(function (result) {
        
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })

*/
/* 이 코드를  promise 를 이용하여 바까보자 !
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
*/ 
let product;
let price;
function goMart() {
    console.log('무엇을 살지 고민중...')
    
}
function pickDrink(pick) {
    return new Promise(function (resolve, reject) {
    setTimeout(() => {
       console.log('결정 완료'); 
       product='제콜';
       price=5000;
    //    resolve();
       if(price <=3000){
        resolve();
       }else{
        reject();
       }
    }, 3000);
});
}
function pay() {
    console.log(`상품명 : ${product} 가격:${price}`);
}
function nopay() {
    console.log(`결제실패`);
}

// 실행 명령
// goMart();
// pickDrink().then(pay).catch(nopay);


// 같은 말이다.
// pickDrink().then(function () {
//     pay();
// })

/* 프로미스  체이닝 (Promise Chaining)
목표 : 함수를 이용해 (4+3)*2-1 연산 ㄱㄱ
=> sub(mul(add(4,3)) ,-1) 
add->mul->sub
*/
/* 1. callback 사용
function add(a,b,cb) {
    setTimeout(() => {
        let res = a+b;
        cb(res)
    }, 1000);
}
function sub(a,b,cb) {
    setTimeout(() => {
        let res = a-b;
        cb(res)
    }, 700);
}
function mul(a,cb) {
    setTimeout(() => {
        let res = a*a;
        cb(res)
    }, 500);
}

add(4,3,function() {
    
})
*/
function add(a,b) {
    return new Promise(function (resolve,reject) {
    setTimeout(() => {
        let res = a+b;
        resolve(res);
    }, 1000);
})
}
function sub(a,b) {
    return new Promise(function (resolve,reject) {
    setTimeout(() => {
        let res = a-b;
        resolve(res)      
    }, 700);
})
}
function mul(a) {
    return new Promise(function (resolve,reject) {
        
    
    setTimeout(() => {
        let res = a*2;
        resolve(res)      
    }, 500);
})
}

add(4,3)
    .then(function (res) {
        console.log(res);
        return mul(res);
    })
    .then(function (res) {
        console.log(res);
        return sub(res,1)
    })
    .then((res) => console.log(res) )
    .catch(function (error) {
        console.log(error);
    })



// 2. promise 를 소비하는 코드 "소비코드(Consuming code)"