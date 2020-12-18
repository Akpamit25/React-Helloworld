import './App.css';
import React from 'react';
import logo from '../src/assets/bl1.png';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      title : 'Hello, Amit Here From Capgemini !!'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src= {logo}
        alt="Logo : A Bridge to employment through lab works"/>
      </div>
    );
  }
}

export default App;
