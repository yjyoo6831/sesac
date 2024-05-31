// 배열에서 반복문 사용하기
// -for
// -for of
// -forEach()

let nums=[1,2,3,4,5,6.6];
for (let n of nums){
    console.log(n);
}

nums.forEach(function(number,idx,arr){
    //number : currentValue , 반복하고 있는 현재 요소 
    // idx :  currentValue 의 index
    // arr :forEach를 호출한 배열
    console.log(number,idx,arr);
})

/* map, filter, find 메소드
 - 조건에 따라 요소를 변형하거나 선택. 
 - 1. map()
 - 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과로 새로운 배열을 생성
// 참고 (설명용) 
// function은 콜백 함수를 정의하는 부분입니다
// 여기서 콜백 함수란, map() 메서드가 호출될 때 배열의 각 요소에 대해 실행되는 함수를 말합니다
// map() 메서드는 배열의 각 요소를 순회하면서 콜백 함수를 호출하고, 그 결과를 새로운 배열로 반환합니다.


// 구체적으로 콜백 함수는 map() 메서드에 인수로 전달되며, 
// 각 요소를 처리하는 함수로서 배열의 각 요소를 순회할 때마다 호출됩니다. 
// 이 콜백 함수는 배열의 각 요소를 인자로 받아서 원하는 작업을 수행하고 그 결과를 반환합니다.

// num은 콜백 함수의 매개변수입니다
// 이는 현재 처리 중인 배열의 요소를 나타냅니다
// 이 매개변수를 활용하여 각 요소에 대해 원하는 작업을 수행할 수 있습니다.

   2. filter()
   - 배열의 각 요소에 대해 지정된 함수를 호출하고, 
   그 결과가 'true'인 요소들로 이루어진 새로운 배열을 생성 ( 전부 )
   // 참고 (설명용) 
// 익명함수로 정의
// Q) 익명함수 란?
// A) 이름이 없는 함수.
// - 보통 함수를 정의할 때 일반적으로 함수명을 지정하여 사용하는데 함수 이름을 생략하고 직접 함수를 작성한 것.
// - 함수를 변수에 할당하여 사용.

// + 옵션)
// for in 반복문
// 객체의 key를 반복 할 수 있는 구문

   3. find()
   - 조건을 만족하는 첫 번째 요소 찾기.
   - 조건 만족 : 해당 요소 반환
   - 조건 불만족 : undefined 반환
  */
 console.log("============");
const doubleNumbers= nums.map(function(num){
    return num*2;
})
console.log(doubleNumbers);

const pracNum=nums.filter(function(num){
    return num%2 === 0 ;
})
console.log(pracNum);

const findNum=nums.find(function(num){
    return num%2 === 0;    
})
console.log(findNum);

// +) for (key in arr) 객체의 key 를 반복 할 수 있는 구문.
// object를 key로 접근함. key,dog[key]
// -참고 ) 
// 변수 = key = 각 속성의 키를 저장하는 변수
// 객체 = dog = 속성을 반복할 객체
const dog={
    name : "멍멍",
    gender : 'M',
    info :'cute'

}; //key,value
nums.unshift('tom')
console.log("here ---------- ",nums,Math.round(nums[6]));
for (let key in dog){
    console.log(key,dog[key])
}
