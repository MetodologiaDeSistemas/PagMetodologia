import style from "./style.css";
import React from "react";
import LogoNas from "../../Componentes/img/LogoNas.png";

const Cabeza = ({logo}) => {
    return(
        <div>
            
            <div className={style.logo}> {logo}
                <img src={LogoNas}></img>
            </div>
            
        </div>
    )
}

export default Cabeza;