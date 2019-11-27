import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './calculator.js'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
     return (
        <div className="App">
          <header className="App-header">
            <Calculator/>
          </header>
      </div>
    );
  }
}

export default App;
