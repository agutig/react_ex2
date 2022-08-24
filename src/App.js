import './App.css';
import Boton from './componentes/boton'
import Counter from './componentes/counter'

function App() {

  const click_counted = () =>{
      console.log('counter +1')
  }

  const reset_counter = () =>{
    console.log('counter = 0')
}

  return (
    <div className="App">
      <div className='mainContainer'>
        <h1>Click Counter!</h1>
        <div className='counter'>
          <Counter text='Counter'/>
        </div>
          <Boton text='click' tipo_boton='click_button' manejarClick={ click_counted }/>
          <Boton text='reset' tipo_boton='reset_button' manejarClick={ reset_counter }/>
      </div>
    </div>
  );
}

export default App;
