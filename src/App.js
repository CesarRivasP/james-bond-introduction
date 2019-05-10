import React, { Component } from 'react';
import './App.css';

const circleCount = Math.ceil(window.innerWidth / 200);
const circles = Array.from(Array(circleCount).keys());


class App extends Component {
  state = {
    animate: false
  }

  componentDidMount(){
      setTimeout(() => {
        this.setState({
          animate: true
        })
      }, 0);
  }

  render(){
    return (
      <div className="App">
        <div
          className="circle mover"
          style={{
            transform: `translateX(${!this.state.animate ? "0px" : circleCount * 200}px) translateY(-50%)`,
            transition: `transform ${circleCount * 0.75}s linear`
          }}
        />
        <div className="container">
          {
            circles.map((i) => {
              return (
                <div
                  className="circle item"
                  key={i}
                  style={{ animationDelay: `${i * 0.75}s`}}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
