import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Tuto from "./Tuto.css";
import React, { useState, useEffect } from 'react';
import Inicio from "../Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Tutotial = () => {

    return (
        <div>
           
            <div class="containerlist">
                <h1>Pasos para Pedir un Turno</h1>
                <ul class="responsive-list">
                    <li>Elemento sssssssssssss1</li>
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

/* <div  className="grid-tutorial">
                <div className="CT">
                    <h1 className="Tuto">Como pedir un turno</h1>
                    <ul className="responsive-list">
                        <li>Primeraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao</li>
                        <li>despues</li>
                        <li>llamar</li>
                        <li>etc</li>
                        <li></li>
                    </ul>
                </div>
            </div> */