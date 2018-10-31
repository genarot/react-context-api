import React from 'react';
import styles from './LaLiga.css';

//Crear el context
const LaLigaContext = React.createContext();
export {LaLigaContext};

class LaLigaProvider extends React.Component {
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
      },
      {
        nombre: 'Atletic',
        titulos: 2
      }
    ]
  }
  render = () => (
    <LaLigaContext.Provider value={{
      state: this.state,
      esCampeon: (index) => {
        console.log('Aumentando');
        
        let equipos = this.state.equipos;
        console.log(equipos[index]);
        
        equipos[index].titulos++;
        this.setState({
          equipos: equipos
        })
      }
    }}>
    {this.props.children}
    </LaLigaContext.Provider>
  )
}

export default LaLigaProvider;
