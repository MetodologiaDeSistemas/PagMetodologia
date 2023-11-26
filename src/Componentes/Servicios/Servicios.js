import "./servi.css"
import React, { useState, useEffect } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Titulo";
import Nav from "../Nav/Nav";
import Style from "./../../Componentes/Inicio/Style.css";
import fondoservi from '../../Componentes/img/fondoservi.png';

function Servicios ()  {
    return (
        <div className="contenpag">
            <div className={Style.Header}><Header></Header></div>
            <div className={Style.Nav}><Nav></Nav></div>
            <div class="descconten">
                <h1>Listado de Servicios Disponibles</h1>

                <div class="cajext1">
                    <div className="cajint1"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>

                    <div class="cajint2"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>

                    <div class="cajint3"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>

                    <div class="cajint4"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>

                    <div class="cajint5"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div>
                </div>

            </div>
            <div className={Style.Footer}> <Footer></Footer></div>
        </div>
    )
}
export default Servicios;