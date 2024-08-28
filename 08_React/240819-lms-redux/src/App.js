import {useDispatch,useSelector} from 'react-redux';
import {deposit, withdraw} from './store/counterSlice';



function App() {
  // const money = useSelector((state) => state.counter.money);
  const balance = useSelector((state) => state.counter.balance);
  // const {money} = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  
  let money='';
  const changeMoney = (e) => {
    console.log("click >> ", e.target.value);
    money=e.target.value;
  }
  return (
    <div className="App">
      <h1>신한은행</h1>
      <h2>잔액 : {balance}원</h2>
      <input type="number" onChange={changeMoney}></input>

      <button onClick={() => {
        dispatch(deposit(money));
        // initValue;
      }}>deposit</button>
      <button onClick={() => dispatch(withdraw(money))}>withdraw</button> 
    </div>
  );
}

export default App;
