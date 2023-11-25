import React from 'react'
import Footer from "../Footer/Footer"
import MensajeError from "../Error404/MensajeError"
import TituloError from './TituloError';
import Style from "./Style.css"
import Nav from '../Nav/Nav';

const Error404 = () => {
    return (
        <div className="error404">
            <div className="naverror404">
            <Nav></Nav>
            </div>

            <div className="tituloerror404">
            <TituloError titulo='Oops!'  ></TituloError>
            </div>

            <div className="mainerror404">
            <MensajeError></MensajeError>
            </div>

            <div className="footererror404">
            <Footer></Footer>
            </div>
            
        </div>
    )
}

export default Error404;