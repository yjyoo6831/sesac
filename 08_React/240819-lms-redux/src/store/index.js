import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; //CounterReducer를 임포트한다. 변수이름은 마음대로

const store = configureStore({
    reducer :{
        counter : counterReducer
    } 
});

export default store;

