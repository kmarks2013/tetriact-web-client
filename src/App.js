import React from 'react';
import './App.css';
import Tetris from './components/Tetris';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  postion: positions.middle,
  offset: '30px',
  transitions: transitions.scale
}



function App() {
  return (
    // <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
          <Tetris/>
      </div>
    // </AlertProvider>
  );
}

export default App;
