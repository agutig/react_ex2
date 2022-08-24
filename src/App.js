import './App.css';
import Boton from './componentes/boton'
import Counter from './componentes/counter'
import {useState} from 'react'


function App() {

  const [counter , set_counter] = useState(0)

  const click_counted = () =>{
    set_counter(counter +1)
  }

  const reset_counter = () =>{
    set_counter(0)
}

  return (
    <div className="App">
      <div className='mainContainer'>
        <h1>Click Counter!</h1>
          <Counter text={counter}/>
          <Boton text='Click' tipo_boton='click_button' manejarClick={ click_counted }/>
          <br></br>
          <Boton text='Reset' tipo_boton='reset_button' manejarClick={ reset_counter }/>
      </div>
    </div>
  );
}

export default App;
