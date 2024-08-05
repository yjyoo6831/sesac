import React, { Component } from 'react'

export default class Counter extends Component {   
    // React 16.3 버전 이전 형태
    constructor ( prps){
        // 주로 초기상태를 결정한다. 
        // 'props'를 부모 컴포넌트에서 받아와 사용하기 위함. 
        // js 에서 'super'는 부모 클래스 생성자의 참조(호출)
        // super() 호출 시 현재 클래스가 상속 받고 있는 리액트의  Component 기반
        super(props);
        // this.props를 사용하고 있도록 설정.
        //  호출하지 않으면, this 사용 불가 d
    }
}
