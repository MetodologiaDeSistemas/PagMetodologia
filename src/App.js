import React from "react";
import Inicion from "./Componentes/Inicio/Inicio";
import Error404 from "./Componentes/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galeria from "./Componentes/Galeria/Galeria";
import Servicios from "./Componentes/Servicios/Servicios";
import Login from "./Componentes/Login/Login";
import HorariosFront from "./Componentes/Horarios/HorariosFront";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Inicion/>}/>
        <Route path = "/HorariosFront" element = {<HorariosFront/>}/>
        <Route path="/Servicios" element = {<Servicios/>}/>
        <Route path = "/Galeria" element = {<Galeria/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "*" element = {<Error404/>}/>
        <Route path = "/error404" element = {<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;    