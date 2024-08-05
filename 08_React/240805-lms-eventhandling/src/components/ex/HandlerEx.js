import React, { useState } from 'react'

export default class HandlerEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count : 'Hello World!',
            text :'내마음은 검정', 
            color : 'black',
            btnText: 'byebye-',
            h1:'나타났다'
        };
    }

    btnClick = (props) => {
        console.log("btn Click");
        this.setState({count :'Goodbye World! '});
    }

 
    render() {
        return (
            <>
                <article>실습 1.</article>
                <h1>{this.state.count}</h1>
                <button onClick={this.btnClick}>Click!</button>
                <hr></hr>
                
                <section>실습 2.</section>
                <h1 style={{color:this.state.color}}>{this.state.text}</h1>
                <button onClick={() => {this.setState({color : 'red' , text:'내일 주식은 빨간불'}) ;  console.log('>' , this.state.color)}} >RED</button>
                <button onClick={() => this.setState({color : 'blue' , text:'내일 주식은 파란불'})}>BLUE</button>
                <hr></hr>
                <section>실습 3.</section>

                <button onClick= {(e) => {
                    console.log("실습3 버튼 클릭",e.target);
                    
                    if (this.state.btnText === "byebye-") {
                        this.setState({h1:''});
                        this.setState({btnText:'보여라'})
                    }else{
                        this.setState({btnText:'byebye-'})
                        this.setState({h1:'나타났다'});
                    }
                } }>{this.state.btnText}</button>
                <h1>{this.state.h1}</h1>
            </>
        )
    }
}