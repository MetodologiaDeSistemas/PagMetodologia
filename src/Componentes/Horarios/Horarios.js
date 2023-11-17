import React from 'react';
import './Horarios.css';

const Horarios = () => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  // Puedes ajustar esta información según tus necesidades

  return (
    <div className="horarios">
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, index) => (
            <tr key={index}>
              <td>{time}</td>
              {daysOfWeek.map((day, dayIndex) => (
                <td key={dayIndex}>{/* Aquí puedes colocar información específica para cada celda */}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Horarios;