import React, {useRef,useState} from 'react'
import PropTypes from 'prop-types'

export default function RefSample2() {
    const id=useRef(7); //초기값을 7로 설정
    console.log(id);

    const [num,setNum] = useState(10);

    // - useRef() 훅이 반환하는 'ref' 객체의 속성
    // - 임시 값 저장 : current에 저장된 값이 바뀌어도 컴포넌트는 rerendering 되지 않는다.

    const plusIdRef = () => {
        id.current +=1; //current의 값을 직접 수정
        console.log(id.current); //값 증가 확인
    };

    const plusNumState = () => {
        setNum(num+1);
    }
  return (
    <div>
        <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가</p>
        <h2>Ref: {id.current}</h2>
        <button onClick={plusIdRef}>Plus</button>

        <p>비교) State 는 ref와 다르게, 값이 변경되면 re렌더링 되는 것을 확인</p>
        <h2>State : {num}</h2>
        <button onClick={plusNumState}>state</button>

    </div>
  )
}







