// import logo from './logo.svg';
import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className='App'>
      <ClassComponent />
      <ClassComponent name='SeSAC 6기'>
      </ClassComponent>
      <hr></hr>
      {/* <FunctionComponent name={3}></FunctionComponent> 3으로 지정하면 나오긴 하지만, 자료형 정확하게 입력하라는 에러가 난다. */} 
      <FunctionComponent name={'SeSAC 6기'}></FunctionComponent>
      <FunctionComponent name='SeSAC 6기'></FunctionComponent>
      <hr></hr>

      <Button link='https://www.google.com'>Google바로가기</Button>
    </div>
  )
}

export default App;
