//반복문

//for 문
for(let i=0;i<10;i++){
    // console.log('hi',i);
}
for(let i=1;i<=5;i++){
    // console.log(i);
}
// for(let i=5;i>=1;i--){console.log(i);}

let n=10;
let sum=0;

for(let i=1;i<=n;i++){
    sum+=i;
}
// console.log(sum);
sum=0;
// for(i=1;i<=20;i++){
//     if(i%2==0){
//         sum+=i;
//         // console.log(i);
//     }
// }
// console.log("TOTAL = ",sum);


// for, if 중첩 
let idx=0;
while (idx<10){
    console.log('안녕',idx)
    idx+=1;
}

let idx2=0;
while (idx2<10){
    console.log('안녕2',idx2)
    idx2+=1;
    if(idx2===10){
        break;
    }   
}
console.log("---------------");
let i=2,j=1;
while(i<10){
    while(j<10){
        console.log(`${i} x ${j} = ${i*j}`);
        j++;
    }
    i++;
    j=1;
}

///
///do~whlie 문
/*
    JavaScript 에서 사용되는 반복문 중 하나로,
    조건이 참인지 여부에 상관없이 코드 블록을 최소 한번 실행 후 조건 감시함.
    즉) 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복함.
*/
let g=1;
do {
    console.log(g);
    g++;
} while (g<=5);

///break; 만나는 순간 반복문 종료 
// continue : 만나면 다음 증감식으로 이동한다. 

for(let i=1;i<=5;i++){
    if(i===3){
        continue;
    }
    console.log(i);
}