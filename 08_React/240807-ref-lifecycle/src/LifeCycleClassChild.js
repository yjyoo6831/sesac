// rcc
import React, { Component } from 'react'

export default class LifeCycleClassChild extends Component {
    componentDidMount() {
        console.log('컴포넌트 마운트! ✨');
    }
    componentDidUpdate(){
        console.log('컴포넌트 업데이트 😛')    
    }
    componentWillUnmount (){
        console.log('컴포넌트 언마운트 🚫')    
    }
  render() {
    return (
      <div>자식 컴포넌트
            <p>현재 number값은 {this.props.number}입니다. </p>
            {/* props는 Component 에서 불러온 값. */}
      </div>
    )
  }
}
