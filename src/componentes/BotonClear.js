import React from "react";
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
  <div onClick={props.manejarClear} className='boton-clear'>
    {props.children}
  </div>
);

export default BotonClear;