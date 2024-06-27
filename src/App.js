import logo from './logo.svg';
import './App.css';
import InputHandler from './components/input';

function App() {

  function ClickAlert(){
    alert ("Ejercicio de React")
  }

  return (
    <div className="App">
      <button onClick={ClickAlert}>
        Presiona click
        </button>
        <InputHandler/>

    </div>
  );
}

export default App;
