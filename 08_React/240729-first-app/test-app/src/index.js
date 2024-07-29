import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// <React.StrictMode>  - 개발 모드에서만 작동하는 특수 컴포넌트. 문제 감지나 경고하기 위해 사용. 
// root.render(<h1>Hello, world!</h1>)

setInterval(()=>{
  root.render(
    <React.StrictMode>
      {/* 페이지 전체 reload 가 아닌 변경된 부분만 업데이트 해준다. : React 의 특성 */}
      <Clock />
    </React.StrictMode>
  )
},1000); //1초