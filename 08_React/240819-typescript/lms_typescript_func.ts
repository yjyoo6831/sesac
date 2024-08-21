// #1. 

function sum1(a: number, b:number) : number{
    return a+b;
}
console.log(sum1(5,11));

// #2. 
function sum2(...a:number[]) : number{   
    return a.reduce((a,v) => a+v,0);
}
console.log(sum2(1,2,3,4,10));
