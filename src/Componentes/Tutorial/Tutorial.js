import Footer from "../Footer/Footer";
import Tuto from "./Tuto.css";
import React, { useState, useEffect } from 'react';
import manostelef from '../../Componentes/img/manostelef.png';
import { Card } from "react-bootstrap";
import Gale from "./../../Componentes/Galeria//Gale.css";
const Tutotial = () => {

    return (
        <div>
           
            <div class="containerlist">
                <h1>Pedi tu Turno aquí</h1>
                <ul class="responsive-list">
                <div className="cajimgtelefmano"><Card.Img id='img' variant='top' src={manostelef} /></div>
                    <li>Días y horarios de atencio de Lunea a Viernes de 15-20 hs, Sabados de 9-13 hs </li>
                    <li>Para agendar turnos mensajes al  <button className="what"><a href="https://wa.me/5493816385124?text=Hola quisiera pedir un turno" target='_blank'>"3816385124"</a></button> (solo se aceptan mensajes)</li>
                    <li>IMPORTANTE: Tenga en cuenta que al solicitar un turno debera abonar una seña de $1000 NO REEMBONSABLE </li>
                    <li> Nuestro local se encuentra en:"Lucio Victtorio Mansilla 277"  </li>
                    <li> </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Tutotial