import Menu from "./../../Componentes/Menu/Menu";
import servicios from "./servicios.css";
import Footer from "./../../Componentes/Footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const Servicios = () => {

    return (
        <div>

           <h1>Servicios Disponibles</h1>
           <div className="grid-Servicios">

                <div className="Descripciones">

                    <ul className="listdesc">
                        
                        <li><h3>Titulo:</h3> <div className="descrip">descripcion</div> </li>
                        <li><h3>Titulo:</h3> <div className="descrip">descripcion</div> </li>
                        <li><h3>Titulo:</h3>  <div className="descrip">descripcion</div> </li>
                        <li><h3>Titulo:</h3>  <div className="descrip">descripcion</div> </li>

                    </ul>

                </div>

                <div className="ListaPrecio">
                    
                    <ul className="listpres">

                        <li> <h3>Titulo:</h3> descripcion </li>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ul>


                </div>
                
            </div>

        </div>
    )
}

export default Servicios