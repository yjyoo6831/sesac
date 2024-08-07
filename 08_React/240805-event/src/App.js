
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import EventStudy from './EventStudy';
function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr></hr>
      <ClassBind />
      <hr></hr>
      <Counter />
      <hr></hr>
      <EventStudy></EventStudy>
    </div>
  );
}

export default App;
