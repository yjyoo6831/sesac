import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0); //상태 초기값 0으로 지정해준다
  
  const increase = () => {
    setNumber(number+1);
  }

  //인자 1개
  const alertMsg=(msg)=>{
    alert(`${msg} ~ 현재 숫자는 ${number}`);
}

//인자 2개 
const consoleMsg = (e,msg) => {
    console.log(e.target); //요소 출력 
    console.log(`${msg} ~ 현재 숫자는 ${number}`);
  }

const handleEvent = (e) => {
    console.log("evt.target >>> ",e.target); //부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소 
    console.log("evt.currentTarget >>> ",e.currentTarget); // 이벤트 핸들러가 있는 요소 
}

  return (
    <div>
      <div>Counter</div>
      <h1>{number}</h1>

      {/* 함수에 인자가 없는 경우 : 함수 이름만 전달! */}
      <button onClick={increase}>+</button>

      {/* 함수에 인자 보내기 - 인자를 보내줄때는 화살표 함수 꼴로 선언을 해줘야 한다.*/}
        <button onClick=
            { () => {
            alertMsg('hello!') } 
            }
        >alert 출력</button>

        <button onClick={ (e) => {consoleMsg(e,"Hi")} }>console 출력</button>

        {/* e.target vs e.currentTarget */}
        <button onClick={handleEvent}>
            <span>handle Event</span>
        </button>
    </div>
  );
};

export default Counter;
