import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name: "The Godfather",
  //   job: "Mafia"
  // }
  // var person2 = {
  //   name: "the Terminator",
  //   job: "Robot"
  // }
  // var style = {
  //   color: 'red',
  //   backgroundColor: 'yellow'

  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code > src / App.js </code> and save to reload.</p>
        {/* <h1 style={style}>Heading:{person.name + " " + person.job}</h1>
        <h3 style={{ backgroundColor: 'cyan', color: 'yellow' }}> heading:{person2.name + " " + person2.job}</h3> */}



        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React </a> </header> </div>
  );
}

export default App;