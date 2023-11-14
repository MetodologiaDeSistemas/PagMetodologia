import React from "react";
import Inicion from "./Componentes/Inicio/Inicio";
import Footer from "./Componentes/Footer/Footer";
import ComoPedir from "./Componentes/ComoPedir/Tutorail";
import Horarios from "./Componentes/Horarios/Horarios";
import Recursos from "./Componentes/Recursos/Recursos";
import Servicios from "./Componentes/Servicios/Servicios";
import Error404 from "./Componentes/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >

      <Routes>

        <Route path = "/ " element = {<Inicion></Inicion>}></Route>
        <Route path = "/Servicios " element = {<Servicios></Servicios>}></Route>
        <Route path = "/Horarios " element = {<Horarios></Horarios>}></Route>
        <Route path = "/Recursos " element = {<Recursos></Recursos>}></Route>
        <Route path = " * " element = {<Error404></Error404>}></Route>
        <Route path = "/error404 " element = {<Error404></Error404>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
/**/