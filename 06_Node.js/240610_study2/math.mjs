// ex6 module 형식으로 확장자는 mjs,  사용할떄는 import 를 사용한다. 
// 실행시 확장자를 적어야 한다. 
// 프로젝트로 es6를 작성할 떄는, 
// package.json 에 "type":"module" 형태로 적어야 한다. 
const add=(a,b) => {
    return a+b
}
export default add;

