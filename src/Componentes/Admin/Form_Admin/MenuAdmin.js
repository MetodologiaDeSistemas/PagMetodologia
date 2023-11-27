import React from "react";
import FDepilacer from "../Form_Depilacer/FromDepilacer";
import Form_horas from "../Form_Horas/Form_horas";
import SubirImg from "../Form_Img/Frm_Imagen";
import Precio_Serv from "../Form_precio_serv/Precio_Serv";

import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Titulo";
import { useNavigate } from 'react-router-dom'


function MenuAdmin() {
  const navigate = useNavigate();
  const handleCerrar = () => {
    // Redirige a la página principal
    navigate('/');
  };
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
        <button className='btn_cerrar' type="button" onClick={handleCerrar}>
          Cerrar Seción
        </button>
        <br/>
        <Footer/>
      </div>
    </>
  );
}
export default MenuAdmin;    