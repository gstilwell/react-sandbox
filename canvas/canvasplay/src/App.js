import React, { Component } from 'react';
import './App.css';
import CanvasComponent from './CanvasComponent.js';

class App extends Component {
  render() {
    return (
        <CanvasComponent 
            id = "manchego"
        />
    );
  }
}

export default App;