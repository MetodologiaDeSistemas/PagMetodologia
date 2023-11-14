import React from "react";
import Inicion from "./Componentes/Inicio/Inicio";
import Horarios from "./Componentes/Horarios/Horarios";
import Recursos from "./Componentes/Recursos/Recursos";
import Servicios from "./Componentes/Servicios/Servicios";
/*import Error404 from "./Componentes/Error404/Error404";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Componentes/Inicio/Inicio";


function App() {
  return (
    <div >

      <Servicios/>
      
    </div>
  );
}

export default App;
/*<Routes>

        <Route path = "/ " element = {<Inicion></Inicion>}/>
        <Route path = "/Servicios " element = {<Servicios></Servicios>}/>
        <Route path = "/Horarios " element = {<Horarios></Horarios>}/>
        <Route path = "/Recursos " element = {<Recursos></Recursos>}/>
        /*<Route path = " * " element = {<Error404></Error404>}/>
        <Route path = "/error404 " element = {<Error404></Error404>}/>*/
      