import React from "react";
import "./HS.css";
import Footer from "./../../Componentes/Footer/Footer";
import Header from "./../../Componentes/Header/Titulo";
import Nav from "./../../Componentes/Nav/Nav";
import Depilacer from "../Depilacer/Depilacer";
import Style from "./../../Componentes/Inicio/Style.css";

function HorariosFront() {
  return (
    <div className="contenpag">
      <div className={Style.Header}>
        <Header></Header>
      </div>
      <div className={Style.Nav}>
        <Nav></Nav>
      </div>

      <div className="horarios">
        <h1>Horarios de la Semana</h1>
        <table id="tablahoras">
          <thead>
            <tr>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miercoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                lun <label className="lunes"></label>
              </td>
              <td>
                mar <label className="martes"></label>
              </td>
              <td>
                {" "}
                mie <label className="miercoles"></label>
              </td>
              <td>
                jue <label className="jueves"></label>
              </td>
              <td>
                vie <label className="viernes"></label>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>

      <div className={Style.Depilacer}>
        <Depilacer></Depilacer>
      </div>
      <div className={Style.Footer}>
        {" "}
        <Footer></Footer>
      </div>
    </div>
  );
}
export default HorariosFront;
