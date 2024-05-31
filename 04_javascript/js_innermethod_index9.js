let str="haPpy "
let str2='2';
console.log(str.length);
console.log(str2.length);

console.log(str.split('')[(str.length)-1].toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim().length); //양끝 공백 제거된 상태의 길이


/* indexOf() 글자위치 찾기
위치(index) : 0부터 시작
같은 문자열이 있으면 처음에 나오는 위치
*/
console.log(str.indexOf('y'));
console.log(str.indexOf(' '));
console.log(str.indexOf('v')); //존재하지 않은 문자열은 -1 반환
console.log(str.indexOf()); // 아무값이 아니더라도 -1반환

//slice() 문자열 자르기 
//음수값이 들어간다면 뒤에서부터 순서를 센다

console.log(str.slice(1,5)); // start index ~ end index(end-1)
console.log(str.slice(-4)); //hday - 뒤에서 4개 추출
console.log("=====================");

/*
replace() : 문자열 바꾸기 
split() : 문자열 쪼개기(배열로 변환)
repeat() : 문자열 반복
*/
console.log(str.replace('p','W'));
let str3="dinner";
console.log(str3.split('i')); //['d', 'nner']
console.log(str3.split('n')); //['di', '', 'er']
console.log(str3.repeat(4));

/* 배열 관련 method*/

let arr=[1,2,3,4,5];
let arr2=['quokka','dog','pandas','method'];

console.log(arr);

arr[5] = 6;
// arr[8]=100
console.log(arr); // 인덱스를 건너뛰면 빈 값이 들어가게됨.

// push() : 맨 끝에 요소 추가 pop() : 맨 끝 요소 제거
arr.push(10);
arr.pop();
console.log(arr);

/* shift() :  맨 앞 요소 제거
   unshift() : 맨 뒤 요소 제거 
   length : 배열 길이 
   includes(요소) : 요소가 있는지 검사 (true/false)
   reverse()

*/
console.log(arr2.reverse());

