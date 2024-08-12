
import './App.css';
import Faq from './hooks/Faq';
import UseTitle from './hooks/UseTitle';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';
import UseReducerEx from './UseReducerEx';
import Form from './components/react-hook-form/Form';

function App() {
  UseTitle('!!!')
  return (
    <div className="App">
      {/* <UseMemoEx></UseMemoEx> */}
      {/* <UseCallbackEx></UseCallbackEx>
      <UseCallbackEx2 postId={7}></UseCallbackEx2> */}
      {/* <UseReducerEx></UseReducerEx>
      <Faq></Faq> */}

      <Form></Form>
    
    </div>
  );
}

export default App;
