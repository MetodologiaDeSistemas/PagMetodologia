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
                    <li>Elemento ssssaaaaaas1</li>
                    <li>Elemento 2</li>
                    <li>Elemento 3</li>
                    <li>Elemento 4</li>
                    <li>Elemento 5</li>
                </ul>
            </div>
            
        </div>
    )
}
export default Tutotial