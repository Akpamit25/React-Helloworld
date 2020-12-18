import './App.css';
import React from 'react';
import logo from '../src/assets/bl1.png';

class App extends React.Component{
  url='http://bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName:'',
      nameError:''
    }
  }

  //onclick function
  onClick=($event)=>{
    console.log("save button is clicked !",$event);
    window.open(this.url,"_blank");
  }
  onNameChange =(event) => {
    console.log("Value is ",event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    //set the title using setState Method
    this.setState({userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    }
    else{
      this.setState({nameError: 'Incorrect Name Format !!'})
    }
  }
  render(){
    return(
      <div>
        <div>
        <h1>Hello {this.state.userName} !!</h1>
        <img src= {logo} onClick={this.onClick}
        alt="Logo : A Bridge to employment through lab works"/>
        </div>
      <div className="text-box">
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </div>
    );
  }
}

export default App;
