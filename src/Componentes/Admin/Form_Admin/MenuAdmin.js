import React from "react";
import Depilacer from "../../Depilacer/Depilacer";
import Form_horas from "../Form_Horas/Form_horas";
import SubirImg from "../Form_Img/Frm_Imagen";
import Precio_Serv from "../Form_precio_serv/Precio_Serv";
import Login from "../Form_Val/FrmVal";



function App() {
  return (
    <>
        <Depilacer/>
        <Form_horas/>
        <SubirImg/>
        <Precio_Serv/>
        <Login/>
    </>
  );
}
export default App;    