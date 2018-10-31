import React from 'react';
import styles from './Equipos.css';
import Equipo from '../Equipo/Equipo';

const Equipos = (props) => {

  return (
    <React.Fragment>
      {
        props.equipos.map(equipo => {
          return <Equipo key={equipo.nombre} info={equipo}/>
        })
      }
    </React.Fragment>
  )
}

Equipos.propTypes = {

};

export default Equipos;
