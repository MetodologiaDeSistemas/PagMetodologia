import Menu from "./../../Componentes/Menu/Menu";
import servicios from "./servicios.css";
import Footer from "./../../Componentes/Footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const Servicios = () => {
/*<h1>Servicios Disponibles</h1>
           <div className="grid-Servicios">

                <div className="Descripciones">

                    <ul className="listdesc">
                        
                        <li><h3>Titulo:</h3> <div className="descrip">descripcion</div> </li>
                        <li><h3>Titulo:</h3> <div className="descrip">descripcion</div> </li>
                        <li><h3>Titulo:</h3>  <div className="descrip">descripcion</div> </li>
                        <li><h3>Titulo:</h3>  <div className="descrip">descripcion</div> </li>

                    </ul>

                </div>

                <div className="ListaPrecio">
                    
                    <ul className="listpres">

                        <li> <h3>Titulo:</h3> descripcion </li>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ul>


                </div>
                
            </div>

        </div> */
    return (
        
             <div className="tableconten">
      <h1>Servicios Disponibles</h1>

      <table id="customers">
        <thead>
          <tr>
            <th>Servicios</th>
            <th>Precios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manicura</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Pericura</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Manicura y Pericura</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Esmaltado: </td>
            <td>$</td>
          </tr>
          <tr>
            <td>Quitar Esmalte:</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Cortes de Uñas</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Depilacion Fefinitiva</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Masajes</td>
            <td>$</td>
          </tr>
          <tr>
            <td>North/South Marie Bertrandaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa</td>
            <td>Simon Crowther</td>
          </tr>
          <tr>
            <td>Paris spécialités</td>
            <td>$</td>
          </tr>
        </tbody>
      </table>
    </div>

        
    )
}

export default Servicios

