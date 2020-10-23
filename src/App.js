import React from 'react';
import './App.css';
import Tetris from './components/Tetris';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <h1 id='title'>TETRIACT</h1>
        <Tetris/>
    </div>
  );
}

export default App;
