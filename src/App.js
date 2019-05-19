import React from 'react';
import logo from './logo.svg';
import './App.css';
import MidiListener from './components/MidiListener'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MidiListener></MidiListener>
      </header>
    </div>
  );
}

export default App;
