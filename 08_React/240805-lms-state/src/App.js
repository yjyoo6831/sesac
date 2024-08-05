import ClassBind from '../../240805-event/src/ClassBind';
import './App.css';
import ClassComponent from './ClassComponent';


import FunComponent from './FunComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <hr></hr>
      <FunComponent />
      <ClassBind />
    </div>
  );
}

export default App;
