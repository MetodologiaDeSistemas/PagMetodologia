import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Tuto from "./Tuto.css";
import React, { useState, useEffect } from 'react';
import Inicio from "../Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Tutotial = () => {

    return (
        <div>
            
            <h1 className="TTuto">Como pedir un turno</h1>
            <div  className="grid-tutorial">
                <div className="caja CT">
                    <ul>
                        <li>Primero</li>
                        <li>despues</li>
                        <li>llamar</li>
                        <li>etc</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Tutotial