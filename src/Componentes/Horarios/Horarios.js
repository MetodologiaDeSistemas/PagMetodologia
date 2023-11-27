import React, { useState } from 'react';
import './Horarios.css';
import { Button } from 'react-bootstrap';
import HorarioCliente from '../Horarios/HorarioCliente.js';


const Horarios = () => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const horariosDisponibles = ['15:00 - 20:00', 'Cerrado'];

  const [selectedHorarios, setSelectedHorarios] = useState({});

  const handleHorarioChange = (day, value) => {
    const updatedHorarios = { ...selectedHorarios, [day]: value };
    setSelectedHorarios(updatedHorarios);
  };

  const handleGuardarCambios = () => {
    console.log('Cambios guardados:', selectedHorarios);
  };

  return (
    <div>
      <div className="horarios-administrador">
        <table className="horarios-table">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={index}>
                  {day}
                  <br />
                  <select onChange={(e) => handleHorarioChange(day, e.target.value)}>
                    {horariosDisponibles.map((horario, optionIndex) => (
                      <option key={optionIndex}>{horario}</option>
                    ))}
                  </select>
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <br />
        <br />
        <Button variant="secondary" onClick={handleGuardarCambios}>
          Guardar
        </Button>
      </div>
      <HorarioCliente horariosSeleccionados={selectedHorarios} />
    </div>
  );
};

export default Horarios;
