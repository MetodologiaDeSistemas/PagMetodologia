import React from 'react';
import './Horarios.css';
import Footer from "./../../Componentes/Footer/Footer";
import Header from "./../../Componentes/Header/Titulo";
import Nav from "./../../Componentes/Nav/Nav";
import Depilacer from '../Depilacer/Depilacer';
import Style from "./../../Componentes/Inicio/Style.css";

const Horarios = () => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  // Puedes ajustar esta información según tus necesidades

  return (
    <div className="contenpag">
    <div className={Style.Header}><Header></Header></div>
    <div className={Style.Nav}><Nav></Nav></div>


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

    <div className={Style.Depilacer}><Depilacer></Depilacer></div>



    <div className={Style.Footer}> <Footer></Footer></div>

    </div>
  );
};

export default Horarios;