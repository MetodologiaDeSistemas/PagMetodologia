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
                <h1>Pasos para Pedir Turno</h1>
                <ul class="responsive-list">
                <div className="cajimgtelefmano"><Card.Img id='img' variant='top' src={manostelef} /></div>
                    <li> Nuestro local se encuentra en:""  </li>
                    <li>Horarios de atencio al cliente de Lunea a Lunes de </li>
                    <li>Para ajendar un turno mande un mensaje al número "" (solo se aceptan mensajes)</li>
                    <li>IMPORTANTE: Tenga en cuenta que al agendar un turno tendra que pagar una comision por adelanto de $0000 </li>
                    <li>Antes de pedir un turno recuerde comprobar en la seccion "Horarios" si se encuentra disponible el día y el horario que desea </li>
                    <li>Enterese de que tratan todos los servicios de los que disponemos en nuestra seccion de "Servicios" o ver los resultados en nuestra seccion de "Trabajos Realizados" </li>
                    <li> </li>
                    <li> </li>
                    <li> Tip de ubucacion: El local se encuentra en la esquina de la cuadra frente a una plaza. El frente del local es rustico y gris tiene una puerta con berjas negras </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Tutotial