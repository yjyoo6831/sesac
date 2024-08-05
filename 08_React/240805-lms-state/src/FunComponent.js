import React , {useState} from 'react'
// import PropTypes from 'prop-types'

const FunComponent = (props) => {
    const [number,setNumber] = useState(0);
    const onClickincrease = () => {
        setNumber(number+1);
    }
    function onClickdecrease() {
        setNumber(number-2);
    }
    
    const {value} = props;

  return (
    <div>
        <h1>FunComponent</h1>
        <h1>{number}</h1>
        <button onClick={onClickincrease}>+1</button>
        <button onClick={onClickdecrease}>-2</button>
    </div>

  )
}

// FunComponent.propTypes = {}

export default FunComponent
