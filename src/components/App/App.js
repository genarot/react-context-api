import React, { Component } from 'react';
import './App.css';
import Equipos from '../Equipos/Equipos';

class App extends Component {
  state= {
    equipos: [
      {
        nombre: 'Real Madrid',
        titulos: 35
      },
      {
        nombre: 'Barcelona',
        titulos: 25
      },
      {
        nombre: 'Atletico de Madrid',
        titulos: 10
      }
    ]
  }
  render() {
    return (
      <div className="container">
        Hola
        <Equipos 
          equipos={this.state.equipos}/>
      </div>
    );
  }
}

export default App;
