import logo from './logo.svg';
import './App.css';
import Saludo from'./components/Saludo.js';
import Metodos from './components/Metodos';

function App() {
  return (
    <div className ="App">
      <Metodos/>
      <Saludo nombre="alumno" edad="23"/>
    </div>
    );
}

export default App;
