import React from 'react';
import {Component} from 'react';
import './App.css';
import './Person/Signup';
import Signup from './Person/Signup';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Signup></Signup>
      </div>
    );
  }
}

export default App;
