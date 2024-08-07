import React, { Component } from 'react'

export default class RefSample4 extends Component {
    // 컴포넌트 내부에서 변수에 React.createRef() 담기
    inputRef = React.createRef();

    handleFocus = () => {
        console.log("4 >> ",this); 
        // ref 설정 후, DOM 접근 위해서는 this.inputRef.current 까지 접근
        console.log("4-1 >> ", this.inputRef);
        console.log("4-2 >> ", this.inputRef.current);
        
        this.inputRef.current.focus();
        
    }
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭 시 input focusing</p>
        {/* ref 속성
            2. 내장함수 createRef
            ref prop 사용해서 ref 설정
        */}
        <input type="text" name="" id="" ref={this.inputRef}/>

        <button onClick={this.handleFocus}>Focus</button>
      </div>
    )
  }
}
