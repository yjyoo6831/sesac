
import './App.css';

function App() {
  const name='두부';
  const animal='이구아나';
  const kk = '3+5 ===8';
  const a = 9;
  const b = 8;
  const title='안녕 세상아!'
  const styles={
    backgroundColor:'yellow',
    fontSize: '50px',
    
  }

  return (
    <>
      <h3>실습 1.</h3>
      <h2>반려동물 이름 : {name} </h2>
      <h2> {name} 는 {animal}입니다. </h2>
      <hr></hr>
      <h3>실습 2.</h3>
      <div>
         {kk} ?  {kk ? <span>'정답입니당'</span> : <span>'틀렸습니당'</span>}
      </div>
      <hr></hr>

      <h3>실습 3.</h3>      
      <h4>
        a={a} ,b={b} >>> {a > b && <span>a는 b보다 크다</span> }
      </h4>
      <hr></hr>
      <h3>실습 4.</h3>      
      <div style={styles}>{title}</div>
      ID : <input type='text'></input><br>
      </br>
      PW : <input type='password'></input>

    </>
  );
}

export default App;
