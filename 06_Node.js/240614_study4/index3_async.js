// 비동기처리의 3번째 방법: async/await
async function f1() {
    return 1;
}
async function f2() {
    return Promise.resolve(1);
}
//화살표 함수에도 async 를 쓸 수 있다. 
const f3 = async () => {
    return 3 ;
}

// console.log('f1() >> ',f1()); // Promise { 1 }
// console.log('f2() >> ',f2()); // Promise { <pending> }
/*
f1().then( (result) => console.log(result))
f2().then( (result) => {
    console.log(result);
})
    */
// =============================
/*
async/await 
await : 기다리다 
- 성공, 실패로 프로미스 객체의 실행이 완료되기를 기다림 
- await 뒤에는 프로미스가 오게 됨. 
- ** async 키워드를 사용한 함수 안에서만 await 를 사용 가능
    ( async / await 는 함께 사용해야한다. )
*/ 
function fetchFruits() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            const fruits=['💕','🎈','😀'];
            resolve(fruits);
            reject(new Error('이상한 일이 발생했습니다. o_O')); 
        }, 100);
    });
}

// 1. promise then()
// fetchFruits()
//     .then(function (f) {
//         console.log(f);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// // 2. async/await
// async function printItems(){
//     try {
//         const fruits = await fetchFruits();
//         // const fruits = fetchFruits();
//         console.log(fruits);
       
//     } catch (error) {
//         console.log(error);    

//     } 
// }
// printItems();

///////////////////////////////////////////
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝');
            product = '제로 콜라';
            price = 6000;
            // resolve();
            if (price <= 3000) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}

function pay() {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay() {
    console.log('금액 부족ㅜㅜ');
  }

async function exec() {
    try {
        // 장점) 함수의 실행 순서가 명확히 보인다!!
        goMart();
        await pickDrink(); // 시간이 걸리는 pickDrink() 함수의 작업을 await 키워드로 인해 기다려줌
        pay();
    } catch (err) {
        nopay();
    }
}

exec();

