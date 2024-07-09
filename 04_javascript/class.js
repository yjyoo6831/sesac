//class
class House{
    constructor(year,name,window){
        this.year = year;
        this.name = name;
        this.window = window;
    }
    getAge(){
        console.log(`${this.name} 건축 한지 ${this.year} 년 되었다.`);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

//클래스를 이용해서 인스턴트 생성시 constructor 에 선언된 매개변수대로 값을 지정해야한다. 
const house1 = new House(2023,'예진',1); 
// console.log(typeof house1);
// console.log(house1.year);
house1.getAge();
house1.getWindow();


//클래스 상속
class Apt extends House{
    constructor(year,name,window, floor,windowMaker){
        super(year,name,window) //부모의 속성을 그대로 가져올떄 super 를 사용함. 매개변수는 명시해줘야한다. 
        this.floor=floor;
        this.windowMaker = windowMaker
    }
    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name} 아파트의 
        총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
        }

    //자식이 같은 이름의 메서드를 가지고 있으면 부모의 것은 덮어쓰기가 된다. (역할을 못함)  = override 오버라이드
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다. 자식 클래스에서 생성함.`);
    }
}

const apt1=new Apt(2022,'힐스테이트',3,20,'KCC');
// console.log(apt1);
// console.log(apt1.getAptInfo());
// console.log(apt1.getWindow());

//&& (and) || (or)
const x = 5;
const y=7;

var result = x || 100; // 5
var result = x && 100; //100

//falsy : undefined, null, 0, false , '' , Nan 를 제외한 값은 모두 true 로 인식한다. 
var result = x < y && 'yyyy'; 
console.log(result);

// let usercol='red';
let usercol=undefined;
let defaultcol='blue';
let currentcol= usercol || defaultcol ;
console.log(currentcol);



