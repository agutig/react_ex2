
import React from 'react'

function Boton({text ,tipo_boton , manejarClick}){
    return(
        <button className= {tipo_boton} onClick={manejarClick} >{text}</button>
    );
}

export default Boton