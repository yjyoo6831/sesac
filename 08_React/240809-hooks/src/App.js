
import './App.css';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';
import UseReducerEx from './UseReducerEx';

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx></UseMemoEx> */}
      {/* <UseCallbackEx></UseCallbackEx>
      <UseCallbackEx2 postId={7}></UseCallbackEx2> */}
      <UseReducerEx></UseReducerEx>
    </div>
  );
}

export default App;
