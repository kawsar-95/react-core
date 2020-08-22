import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Heroes = ['Henry Cavill', 'Ben Affleck', 'Arnold', 'stalone']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name={Heroes[0]} age="1000" address="London"></Person>
        <Person name={Heroes[1]} age="100" address="Metropolis"></Person>
        <p>I am a React Person...</p>
      </header> </div >
  );
}
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px ',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h1 >My Name:{props.name}</h1>
      <h3>My Age:{props.age}</h3>
      <h3>My Address:{props.address}</h3>
    </div>)
}

export default App;