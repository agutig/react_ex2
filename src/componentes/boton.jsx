
import React from 'react'

function Boton({text ,tipo_boton}){
    return(
        <button className= {tipo_boton}>{text}</button>
    );
}

export default Boton