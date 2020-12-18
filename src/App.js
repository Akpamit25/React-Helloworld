import './App.css';
import React from 'react';
import logo from '../src/assets/bl1.png';

class App extends React.Component{
  url='http://bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title : 'Hello, Amit Here From Capgemini !!'
    }
  }

  //onclick function
  onClick=($event)=>{
    console.log("save button is clicked !",$event);
    window.open(this.url,"_blank");
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src= {logo} onClick={this.onClick}
        alt="Logo : A Bridge to employment through lab works"/>
      </div>
    );
  }
}

export default App;
