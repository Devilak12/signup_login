import React from 'react';
import {Component} from 'react';
import './App.css';
import './Person/Signup';
import './Person/Signin'
import Signup from './Person/Signup';
import Signin from './Person/Signin';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ isSignupOpen:false,isSigninOpen:true};
  }
  showsignin = () => {
    this.setState({
      isSigninOpen:true, isSignupOpen:false
     });
  }
  showsignup = () => {
   this.setState({
    isSignupOpen:true, isSigninOpen:false
   });
  }
  render(){
    return (
      <div className="App">
        <div className="controller ">
          <div className='signin ' onClick={this.showsignin} >Sign in</div>
          <div className='signup ' onClick={this.showsignup} >Sign up</div>
        </div> 
        <br></br>
        <div className='main-box'>
          {this.state.isSigninOpen && <Signin/>}
          {this.state.isSignupOpen && <Signup/>}  
        </div>
      </div>
    );
  }
}


export default App;
