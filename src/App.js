import React from "react";
import Inicion from "./Componentes/Inicio/Inicio";
import Error404 from "./Componentes/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galeria from "./Componentes/Galeria/Galeria";
import Servicios from "./Componentes/Servicios/Servicios";
import HorariosFront from "./Componentes/Horarios/Cliente_Horas/Cliente_horas";
import Login from "./Componentes/Admin/Form_Val/FrmVal";
import MenuAdmin from "./Componentes/Admin/Form_Admin/MenuAdmin";
import FechaDep from "./Componentes/Form_DepiC/FechaDep";



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
        <Route path = "/MenuAdmin" element = {<MenuAdmin/>}/>
        <Route path="/Depilacer" element= {<FechaDep/>}/>
        <Route path = "*" element = {<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;    