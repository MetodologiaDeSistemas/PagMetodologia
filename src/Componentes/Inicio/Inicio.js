import Menu from "./../../Componentes/Menu/Menu";
import Tutorial from "./../../Componentes/Tutorial/Tutorial";
import Footer from "./../../Componentes/Footer/Footer";
import Header from "./../../Componentes/Header/Titulo";
import React, { useState, useEffect } from 'react'
import Style from "./Style.css";
import Servicios from "./../../Componentes/Servicios/Servicios";
import Nav from "./../../Componentes/Nav/Nav";
const Inicio = () =>{

 useEffect(() => {document.title = "NAS";});

    return (
        
        <div className="contenpag">
            

            <div className={Style.Header}><Header></Header></div>
            <div className={Style.Nav}><Nav></Nav></div>
            <div className={Style.Servi}><Servicios></Servicios></div>

            <div className={Style.Tutorial}> <Tutorial></Tutorial></div>
            <div className={Style.Footer}> <Footer></Footer></div>
           
           
        </div>
    )
}

export default Inicio