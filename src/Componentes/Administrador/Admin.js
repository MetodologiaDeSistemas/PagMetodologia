import Footer from "./../../Componentes/Footer/Footer";
import Header from "./../../Componentes/Header/Titulo";
import React, { useState, useEffect } from 'react'
import Nav from "./../../Componentes/Nav/Nav";
import Style from "./../../Componentes/Inicio/Style.css";

function Admin () {

    return (
        
        <div className="contenpag">
            <div className={Style.Header}><Header></Header></div>
            <div className={Style.Nav}><Nav></Nav></div>
            



            <div className={Style.Footer}> <Footer></Footer></div>
        </div>
    )
}

export default Admin