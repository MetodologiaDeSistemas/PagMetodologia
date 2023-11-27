import React from 'react';
import './Horarios.css';
import Footer from "./../../Componentes/Footer/Footer";
import Header from "./../../Componentes/Header/Titulo";
import Nav from "./../../Componentes/Nav/Nav";
import Depilacer from '../Depilacer/Depilacer';
import Style from "./../../Componentes/Inicio/Style.css";

const HorarioCliente = ({ horariosSeleccionados }) => {
  if (!horariosSeleccionados) {
    // Manejar el caso en que horariosSeleccionados no está definido
    return (
      
        <p>No se han seleccionado horarios.</p>
        
    );
  }
 
  return (
   
      <div className="horarios-cliente">
        <table className="horarios-table">
          <thead>
            <tr>
              {Object.keys(horariosSeleccionados).map((day, index) => (
                <th key={index}>
                  {day}
                  <br />
                  {horariosSeleccionados[day]}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

  );
};

export default HorarioCliente;
