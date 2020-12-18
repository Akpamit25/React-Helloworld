import './home.css';
import React from 'react';
import logo from '../../assets/bl.jpg';

class Home extends React.Component{
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
    if(nameRegex.test(event.target.value)){
      this.setState({userName: event.target.value})
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
      <div>
        <p>At BridgeLabz, we're a techie community of : </p>
        <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
        </ul>
        <p>Working together to keep the Tech Employability of Engineers alive and accessible,
           so Tech Companies worldwide can get contributers and creators for Technology Solutions.
           We believe this act of human collaboration across and employability platform is essential
           to individual growth and our collective future.</p>
        <p>To know about us, visit <a href = "https://www.bridgelabz.com/" target="_blank"><strong>BridgeLabz&nbsp;</strong></a>
            to learn even more about our mission i.e. <strong>Employability to all</strong>.</p>
      </div>
      </div>
    );
  }
}

export default Home;
