import React from 'react';
import Student from './components/Student';
import Card from './components/Card';

function App() {
  // #1. 
  const handleClick = (name : string, grade:number): void  => {
    console.log(`안녕 난 ${name}이다 \n {grade}학년이다. `);
    
  };
  return (
    <div className="App">
      <Student name="새싹" grade={3} handleClick={handleClick} ></Student>
      <hr></hr>
      <Card title='오늘 배울 것은? '></Card>
    </div>
  );
}

export default App;
