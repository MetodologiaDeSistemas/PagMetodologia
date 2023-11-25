import Depila from "./Depila.css";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Depilacer() {
  const [ElegDia, setElegDia] = useState ("Día");
  const [ElegMes, setElegMes] = useState ("Mes");


  const handleChange = (event) => {
    setElegDia(event.target.value)

  }

    return (
      <div>
        <div className="margendepi">
        <div className="DipiPispo">
          <div className="aviso">
            <h4>Proxima fecha disponible para la Depilacion Definitiva</h4>
            <form>
            <label>
                EL Día:
              </label>
              <select value={ElegDia} onChange={handleChange}>
                <option value="Día">Día</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>   
              </select>
              <br />
              <br />

              <label>
                Del Mes:
                <select value={ElegDia} onChange={handleChange}>
                <option value="Mes">Mes</option>
                <option value="enero">1</option>
                <option value="febrero">2</option>
                <option value="marzo">3</option>
                <option value="abril">4</option>
                <option value="mayo">5</option>
                <option value="junio">6</option>
                <option value="julio">7</option>
                <option value="agosto">8</option>
                <option value="septiempre">9</option>
                <option value="octubre">10</option>
                <option value="noviembre">11</option>
                <option value="diciembre">12</option>
                </select>
              </label>
              
            </form>
          </div>
        </div>
      </div>
      </div>
    );
    }
  
  export default Depilacer;
  