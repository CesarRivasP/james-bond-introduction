import React from 'react';
import './App.css';

const circleCount = Math.ceil(window.innerWidth / 200);
const circles = Array.from(Array(circleCount).keys());

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          circles.map((i) => {
            return <div className="circle"/>
          })
        }
      </div>
    </div>
  );
}

export default App;
