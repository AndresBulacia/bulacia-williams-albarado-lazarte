import Header from "./components/Header"
import Grupos from "./components/Grupos";
import React from "react";
import Card from "./components/Card";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Piedepagina from "./components/Piedepagina";


function App() {
  let tituloPagina = "Trabajo Practico N°1"
  return (
    <div className="App">
      <div className="container">
        <div className="item c1"><Header titulo = {tituloPagina}/></div>
        <div className="item c2"><Menu/></div>
        <div className="item c3"><p><Grupos/></p></div>
        <div className="item c4"><Card/></div>
        <div className="item c5"><Footer/></div>
        <div className="item c6"><Piedepagina/></div>
      </div>
    </div>
  );
}

export default App;