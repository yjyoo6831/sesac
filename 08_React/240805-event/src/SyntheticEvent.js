import React from 'react'

export default function SyntheticEvent(){
    function systheticEvent(e) {
        console.log("SyntheticEvent 버튼 클릭");
        console.log(e);
        // 콘솔에 찍히는 e객체는 합성 이벤트 
        // -> React가 만들어낸 이벤트 객체 

        //브라우저마다 이벤트 이름과 종류 등 이벤트를 처리하는 방식이 다르기 떄문에 
        // 이를 동일하게 처리하기 위해 React 에서 사용하는 이벤트 객체 
        // e.preventDefault(); 
        // 합성 이벤트는 React 가 모든 브라우저에서 일관된 방식으로 이벤트를 처리할 수 있게 해주는 도구이다.
    }
    function printInputValue(evt) { // evt가 react에서 사용하는 합성 이벤트 객체이다.
        console.log(evt.target.value);
        
    }
    return (
        <div>
            <h1>SyntheticEvent</h1>
            <button onClick={systheticEvent}>SyntheticEvent</button>
            <br />
            <input type="text" placeholder='입력하세요' onChange={printInputValue}></input>
        </div>
    )
}