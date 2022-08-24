import React from 'react'
import '../style/counter.css'

function Counter({text}){
    return(
        <p className='counter'>{text}</p>
    );
}

export default Counter