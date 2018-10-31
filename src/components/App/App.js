import React, { Component } from 'react';
import './App.css';
import Equipos from '../Equipos/Equipos';
import LaLigaProvider from '../LaLiga';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <LaLigaProvider>
          <Equipos />
          
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
