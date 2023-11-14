import React from 'react'
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer"
import MensajeError from "../Error404/MensajeError"
import TituloError from './TituloError';
import Style from "./Style.css"

const Error404 = () => {
    return (
        <div className="error404">
            <div className="naverror404">
            <Menu></Menu>
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