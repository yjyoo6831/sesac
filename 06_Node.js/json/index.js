//JSON
const car = `{
"model" : "model3",
"company" : "Tesla",
"price" : 100,
"year" : 2023,
"isEletric" : true,
"options" :["door","auto pilot"],
"color" :["red"]
}`;

console.log(car); //json format

// 역직렬화 (deserialize) : JSON.parse() => 통신하여 받은 데이터를 객체(object)로 변환 하는 것 
// json to js odb
const obj = JSON.parse(car);
console.log(obj); // js obj

// obj 변수는 js object 이므로 ./[] 연산자를 이용해 키 값에 접근 가능 하다.
console.log(obj.model); // js obj
console.log(obj.options); // js obj

// 직렬화 :  JSON.stringify() -> 통신하기 쉬운 포맷(JSON) 으로 변환
// js obj to json
const json = JSON.stringify(obj);
console.log(json,typeof json); //string 타입

// json 변수는 JSON 형태의 "문자열(string)" 이므로
// . / [] 연산자를 이용하여 키 값에 접근 가능
console.log(json.model); //undefined
console.log(json.price); //undefined

// string 타입에 쓸 수 있는 내장 메소드들은 쓸 수 있음.
console.log(json.split(""),"\n",json.toUpperCase());

//키와 값이 같으면 obj 에서는 한개만 써줘도된다. 
const apple= 'apple';
const obj2={
    apple, // apple : apple 로 인식한다. 
}