import React from 'react';
import styles from './Equipo.css';
import {LaLigaContext} from '../LaLiga/LaLiga';

class Equipo extends React.Component {

  render(){
    // const {nombre, titulos}= this.props.info;
    return (
      <LaLigaContext.Consumer>
        {(value) => {
          return value.state.equipos.map( (equipo,index) => (
            <li key={equipo.nombre} className="list-group-item d-flex justify-content-between align-items-center">
              <p className="m-0">
                {equipo.nombre}
              </p>
              <span className='badge badge-danger'>
                {equipo.titulos}
              </span>
              <button className="btn btn-success" type="button" onClick={
                () => {
                    console.log('Diste Click ', index);
                    value.esCampeon(index);
                }
              }>
                Es Campeon
              </button>
            </li>
          ))
        }}
      </LaLigaContext.Consumer>
      
    )
  }
}
 

Equipo.propTypes = {

};

export default Equipo;
