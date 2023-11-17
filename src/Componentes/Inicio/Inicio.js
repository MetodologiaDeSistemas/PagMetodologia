import Menu from "./../../Componentes/Menu/Menu";
import Footer from "./../../Componentes/Footer/Footer";
import React, { useState, useEffect } from 'react'
import Style from "./Style.css";
const Inicio = () =>{

 useEffect(() => {document.title = "NAS";});

    return (
        <div>
            

            <div className="eltitulo">
                <h2>N.A.S</h2>
                <h4>Punto de Belleza</h4>
            </div>
            <Footer></Footer>
           
        </div>
        

    )
}

export default Inicio