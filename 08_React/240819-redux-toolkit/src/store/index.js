import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; //CounterReducer를 임포트한다. 변수이름은 마음대로
import isVisibleReducer from "./isVisibleSlice";

// [Toolkit 사용]
// #2. Store 생성
// -configureStore 를 사용하여 스토어 생성
// *configureStore*
// -Redux Toolkit 에서 제공하는 함수로, 스토어를 더 쉽게 설정 할 수 있게 해줌. 

const store = configureStore({
    reducer :{
        counter : counterReducer, 
        isVisible : isVisibleReducer
    }
});

export default store;

