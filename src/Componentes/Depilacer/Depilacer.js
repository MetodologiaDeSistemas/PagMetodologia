import Depila from "./Depila.css";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const Depilacer = () => {
    return (
      <div>
        <div className="DipiPispo">
          <div className="aviso">
            <h4>Proxima fecha disponible para la Depilacion Definitiva</h4>
            <form>
              <label>
                EL Día: <input type="text" />
              </label>
              <br />
              <br />

              <label>
                Del Mes: <input type="text" />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Depilacer;
  