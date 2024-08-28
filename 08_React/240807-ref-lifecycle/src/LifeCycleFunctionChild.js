//rfc
import React, { useEffect, useState } from 'react'


// 자식 컴포넌트 
export default function LifeCycleFunctionChild({number}) { // props 로 받아서 props.number 로 출력해도 된다. 
// export default function LifeCycleFunctionChild(props) { // props 로 받아서 props.number 로 출력해도 된다. 
    const [input,setInput] = useState('');

    // 1. Mount 시점에 실행 (return 생략 버전)
    useEffect(() => {
        console.log("컴포넌트 마운트!2 ✨");
    } , []) 
    
    // 2. Mount 시점에 실행 (return O)
    useEffect(() => {
        console.log("컴포넌트 마운트!2 ✨");
        return () => {
            //Unmount 시점에 실행
            console.log("컴포넌트 언마운트!2 🚫");
        }
    } , []) ;
    
    // 3. 2번째 인자 생략 버전 (Mount or Update 시점에 실행 (의존성 배열 생략) )
    useEffect(()=>{
        console.log("컴포넌트 마운트 or 업데이트!2 🆕");
    });
    // 의존성 배열이 [] 빈 배열이므로, 1, 2는 렌더링 시 한 번 만 실행된다. 
    // 의존성 배열을 생략하는 의미는 "매 렌더링 마다 실행"하겠다 라는 의미 이다. (상태변경마다 실행된다.)

    // 4. input 상태가 업데이트 될 때 실행 
    useEffect ( ()=>{
        console.log("마운트 or input 상태가 변경됨에 따라 컴포넌트 업데이트 🔸");
        
    },[input])
    // input 이 문자열, 숫자, 배열이 아니더라도 의존성 배열에 추가 가능하다. 
    // -> 값이 변경될 때 마다 useEffect 가 실행된다. 
    return (
    <div style={{backgroundColor :'pink'}}>
        LifeCycleFunctionChild
        <div>현재 number 값은 {number}입니다.</div>
        <input type="text"  value={input} onChange={(e) => {setInput(e.target.value) } }/>
    </div>
    );
}
