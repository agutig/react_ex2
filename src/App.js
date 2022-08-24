import './App.css';
import Boton from './componentes/boton'
import Counter from './componentes/counter'

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <h1>Click Counter!</h1>
        <div className='counter'>
          <Counter text='Counter'/>
        </div>
          <Boton text='click' tipo_boton='click_button'/>
          <Boton text='reset' tipo_boton='reset_button'/>
      </div>
    </div>
  );
}

export default App;
