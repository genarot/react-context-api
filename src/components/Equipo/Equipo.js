import React from 'react';
import styles from './Equipo.css';

class Equipo extends React.Component {

  render(){
    const {nombre, titulos}= this.props.info;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <p className="m-0">
          {nombre}
        </p>
        <span className='badge badge-danger'>
          {titulos}
        </span>
      </li>
    )
  }
}
 

Equipo.propTypes = {

};

export default Equipo;
