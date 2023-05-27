import Header from "./components/Header"
import Grupos from "./components/Grupos";
import React from "react";
function App() {
  let tituloPagina = "Trabajo Practico N°1"
  return (
    <div className="App">
      <div className="container">
        <div className="item c1"><Header titulo = {tituloPagina}/></div>
        <div className="item c2">Menú</div>
        <div className="item c3"><p><Grupos/></p></div>
        <div className="item c4">Barra lateral</div>
        <div className="item c5">Footer</div>
      </div>
    </div>
  );
}

export default App;