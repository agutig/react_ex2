
import React from 'react'
import '../style/boton.css'

function Boton({text ,tipo_boton , manejarClick}){
    return(
        <button className= {tipo_boton} onClick={manejarClick} >{text}</button>
    );
}

export default Boton