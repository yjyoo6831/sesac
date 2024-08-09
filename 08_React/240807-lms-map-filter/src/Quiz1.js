import React , { useState } from 'react'

export default function Quiz1() {
    const [input, setInput] = useState('','');

    const [infoOb,setInfo]=useState([
        {
        name:'코디',
        email:'codi@gmail.com'},
        {
            name:'거북이',
            email:'turtle@gmail.com'},
        ]);
    const stateHandler = (e) => {
        console.log(">> ",e);
        
    	setInfo({
            ...infoOb,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value
        })
    }

    const addInfo = () => {
        // Q. input 이 빈 값이라면 Infobet 상태가 변경되지 않도록 하기
        console.log('>>> ', setInput);

        // if ((infoOb.name.trim().length === 0 ) || (input.email.trim().length === 0 )) {
        //     alert('빈 칸입니다 입력값을 넣어주세요');
        //     return;
        // }

        // * concat
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.

        // ex)
        // let arr1=[1,2,3];
        // let arr2=[5,6,7];
        // let arr3=arr1.concat(arr2);  // 리액트는 불변성 유지를 위함.

        //console.log(arr3); // [1,2,3,5,6,7];

        const newInfo = infoOb({
            name: input.name,
            email: input.email
        });
        setInfo(input); 
        setInput(''); // 입력 칸 초기화
    };

  return (
    <>
        <h1>Quiz1</h1>
        <input type="text" name="name" id="" placeholder='이름' value={input.name} onChange={stateHandler}/>
        <input type="email" name="email" id="" placeholder='이메일' value={input.email} onChange={stateHandler}/>
        <button type="button" onClick={addInfo}>등록</button>
        <br></br>
            {
                infoOb.map( (n) => (
                <div> {n.name} : {n.email} </div>
            ))
            }
        
    </>
  )
}
