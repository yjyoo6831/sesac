// [Toolkit 사용]

import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {balance:100};

// #1. 슬라이스 객체 정의 
const counterSlice = createSlice({
    name : 'counter', //즉, plus 액션은 'counter/plus' 라는 타입이다. 
    initialState: {balance:100},
    reducers:{
        deposit : (state, action) => {
            state.balance += Number(action.payload);
            
            console.log("state >> ",state.balance);
            console.log("action >> ",action.payload);
        },
        withdraw:(state, action) => {
            state.balance -= Number(action.payload);
            console.log("state >> ",state.balance);
            console.log("action >> ",action.payload);
        },
        

    }
});


// Redux Toolkit은 immer 라이브러리를 사용하여 상태를 직접 변경하는 것처럼 보이지만, 
// 실제로는 불변성을 유지하면서 상태를 업데이트 한다. 

export const {deposit,withdraw} = counterSlice.actions;
// createSlice가 자동으로 생성한 액션 생성자를 추출하여 내보냄.

export default counterSlice.reducer;
