import './App.css';
import Encabezado from './components/compartido/Encabezado';
import Pie from './components/compartido/Pie';
import Cuerpo from './components/compartido/Cuerpo';
import Meta from './components/lista/Metas';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Cuerpo> 
        <Meta />
      </Cuerpo>
      <Pie />
    </div>
  );
}

export default App;
