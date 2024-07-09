// 실습 1 . spread 
const word1 = "abc";
const word2 = "xyz";

const words = [...word1 , ...word2];
console.log(words);

// 실습 2. shape 클래스 만들기 
class Shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea() {
        
        return this.width * this.height;
        
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());

// - 직사각형 클래스 만들기
class Rectangle extends Shape{
    constructor(width,height){
        super(width,height);
    }
    getArea(){
        return this.width * this.height;
    }
    getDiagonal(){
        
        return  Math.sqrt(this.width**2 + this.height**2);
        
    }
}

const rec = new Rectangle(3,4);
console.log("대각선 길이는 ", rec.getDiagonal());

// - 삼각형 클래스 만들기 
class Triangle {
    constructor(w,h){
        this.w=w;
        this.h=h;
    }
    getArea(){
        return this.w * this.h/2;
    }
}
const tri = new Triangle(5,6)
console.log("삼각형 넓이 : ",tri.getArea());

// - 원 클래스 만들기 
class Circle extends Shape{
    constructor(width,height,radius){
        super(width,height);
        this.radius=radius;
    }
    getArea(){

        return parseFloat(Math.PI * this.radius * this.radius);
    }
}
const circle = new Circle(1,3,2);
console.log("원의 넓이 : ", circle.getArea());


