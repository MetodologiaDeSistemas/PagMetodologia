import React from "react";
import Inicion from "./Componentes/Inicio/Inicio";
import Horarios from "./Componentes/Horarios/Horarios";
import Error404 from "./Componentes/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galeria from "./Componentes/Galeria/Galeria";
import Descripcion from "./Componentes/Descripcion/Descripcion";
import Login from "./Componentes/Login/Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Inicion/>}/>
        <Route path = "/Horarios" element = {<Horarios/>}/>
        <Route path = "/Descripcion " element = {<Descripcion/>}/>
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