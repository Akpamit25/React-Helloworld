import './App.css';
import React from 'react';
import logo from '../src/assets/bl1.png';

class App extends React.Component{
  url='http://bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName:''
    }
  }

  //onclick function
  onClick=($event)=>{
    console.log("save button is clicked !",$event);
    window.open(this.url,"_blank");
  }
  onNameChange =(event) => {
    console.log("Value is ",event.target.value);
    this.setState({userName: event.target.value})
  }
  render(){
    return(
      <div>
        <h1>Hello {this.state.userName} !!</h1>
        <img src= {logo} onClick={this.onClick}
        alt="Logo : A Bridge to employment through lab works"/>
      <div className="text-box">
        <input onChange={this.onNameChange}/>
      </div>
      </div>
    );
  }
}

export default App;
