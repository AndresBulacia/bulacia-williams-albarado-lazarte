import Header from "./components/Header"
import Card from "./components/Card";

function App() {
  let tituloPagina = "Trabajo Practico N°1"
  return (
    <div className="App">
      <div className="container">
        <div className="item c1"><Header titulo = {tituloPagina}/></div>
        <div className="item c2">Menú</div>
        <div className="item c3">Contenido</div>
        <div className="item c4"> <Card /></div>
        <div className="item c5">Footer</div>
      </div>

    </div>
  );
}

export default App;