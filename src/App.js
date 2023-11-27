import React from "react";
import Inicion from "./Componentes/Inicio/Inicio";
import Error404 from "./Componentes/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Galeria from "./Componentes/Galeria/Galeria";
import Servicios from "./Componentes/Servicios/Servicios";
import Login from "./Componentes/Admin/Form_Val/FrmVal";
import Cliente_horas from "./Componentes/Horarios/Cliente_Horas/Cliente_horas";
import MenuAdm from "./Componentes/Admin/Form_Admin/MenuAdmin";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Inicion/>}/>
        <Route path = "/HorariosFront" element = {<Cliente_horas/>}/>
        <Route path="/Servicios" element = {<Servicios/>}/>
        <Route path = "/Galeria" element = {<Galeria/>}/>
        <Route path = "/Login" element = {<MenuAdm/>}/>
        <Route path = "*" element = {<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;    