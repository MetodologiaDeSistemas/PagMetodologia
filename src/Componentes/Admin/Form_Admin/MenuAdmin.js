import React from "react";
import FDepilacer from "../Form_Depilacer/FromDepilacer";
import Form_horas from "../Form_Horas/Form_horas";
import SubirImg from "../Form_Img/Frm_Imagen";
import Precio_Serv from "../Form_precio_serv/Precio_Serv";

import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Titulo";


function App() {
  return (
    <>
      <div className="contenpag">
        <Header/>
        <Nav/>
        <br/>
        <Form_horas/>
        <FDepilacer/>
        <br/>
        <br/>
        <Precio_Serv/>
        <br/>
        <br/>
        <br/>
        <SubirImg/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    </>
  );
}
export default App;    