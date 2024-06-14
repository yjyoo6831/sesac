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

console.log('f1() >> ',f1()); // Promise { 1 }
console.log('f2() >> ',f2()); // Promise { <pending> }
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
            
        }, 100);
    });
}

