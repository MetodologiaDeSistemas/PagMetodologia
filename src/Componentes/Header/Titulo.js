import Titulo from "./Titulo.css";
import React from "react";
import LogoNas from "../../Componentes/img/LogoNas.png";
const Cabeza = ({logo}) => {

    return(
        <div>
            <div className="responsive"> 
                <div className="logo">
                  <img src={LogoNas}></img>
                </div>
            </div>
        </div>
    )
}

export default Cabeza;
