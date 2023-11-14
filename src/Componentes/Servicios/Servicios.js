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

                    lista

                </div>

                <div className="ListaPrecio">
                    lista
                </div>
                
            </div>

        </div>
    )
}

export default Servicios