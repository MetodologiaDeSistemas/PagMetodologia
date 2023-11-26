import presi from "./presi.css";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
const Servicios = () => {
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
            <td>Manicura Tradicional</td>
            <td>$ <label className="manicuratrad">3000</label></td>
          </tr>
          <tr>
            <td>Esmaltado Semi Permanente</td>
            <td>$ <label className="esmaltadosemi"></label> </td>
          </tr>
          <tr>
            <td>Retiro de Esmalte</td>
            <td>$ <label className="retiroesmalte"></label> </td>
          </tr>
          <tr>
            <td>Cejas Perfilado</td>
            <td>$ <label className="cejasperfil"></label> </td>
          </tr>
          <tr>
            <td>Depilación Definitiva Promo</td>
            <td>$ <label className="definitivapromo"></label> </td>
          </tr>
        </tbody>
      </table>
    </div> 
    )
}

export default Servicios

