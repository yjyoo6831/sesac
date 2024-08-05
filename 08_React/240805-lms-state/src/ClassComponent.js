import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        count : 0,
    }

  render() {
    // 방법 #2
    const {count} = this.state;
    return (
      <div>
        <h1>Class Component State</h1>
        {/* 방법 #1 */}
        {/* <h1>{this.state.count}</h1> */}
        {/* 방법 #2 */}
        <h1>{count}</h1>

        {/* 값 변경하기 */}
        <button onClick={() => {
            this.setState({count : count + 2});
        }}>+2</button>
        <button onClick={() => {
            this.setState({count : count - 1});
        }}>-1</button>
      </div>
    )
  }
}


