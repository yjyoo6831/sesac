import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';
import { minus1,plus, change, plus1 , changeVisibility1} from './store/counterSlice';
// import { changeVisibility } from './store/isVisibleReducer';

function App() {
    const number = useSelector((state) => state.number);
    console.log('number > ',number);

    return (
        <div className="App">
            <h1>React Redux Ex3</h1>
            <h2>Redux 사용!</h2>
            <h2>number: {number}</h2>
            <Box1 />
        </div>
    );
}

// Box1 컴포넌트
const Box1 = () => {
    return (
        <div className="Box">
            <h2>Box1</h2>
            <Box2 />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = () => {
    return (
        <div className="Box2">
            <h2>Box2 : </h2>
            <Box3 />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = () => {
    return (
        <div className="Box3">
            <h2>Box3 : </h2>
            <Box4 />
        </div>
    );
};

// Box4 컴포넌트
const Box4 = () => {
    // #4. useSelector, useDispatch 사용  
  const number = useSelector((state) => state.counter.number);
    const isVisible = useSelector((state)=>state.counter.isVisible);
    const dispatch = useDispatch();
    return (
        <div className="Box4">
            <h2>Box4 : {number}</h2>
            <h2>isVisible 값은 " {isVisible ? 'true' : 'false'} "이다.</h2>
            <button onClick={() => dispatch(plus1())}>
                PLUS
            </button>
            <button onClick={() => dispatch(minus1())}>
                MINUS
            </button>

            {/* Q) change 버튼 클릭하면 '참' '거짓' 글자 토글  */}
            <button onClick={()=>dispatch(changeVisibility1())}>CHANGE</button>
        </div>
    );
};

export default App;