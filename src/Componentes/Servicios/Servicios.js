import Footer from "./../../Componentes/Footer/Footer";
import Nav from "./../../Componentes/Nav/Nav";
import Header from "./../../Componentes/Header/Titulo";
import Style from "./../../Componentes/Inicio/Style.css";
import "./servi.css"
import caru1 from "./../img/CARU1.png";
import caru2 from "./../img/CARU12.png";
import caru3 from "./../img/CARU123.png";
import { Carousel } from 'react-bootstrap';

import Horarios from "../Horarios/Horarios";
import HorarioCliente from "../Horarios/HorarioCliente";

function ServiciosLista () {

    return (
        
        <div className="contenpag">
            <div className={Style.Header}><Header></Header></div>
            <div className={Style.Nav}><Nav></Nav></div>
             
             <div className="servicioslista">
             <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caru1}
              alt="First slide"
              style={{ maxHeight: '50vh', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caru2}
              alt="Second slide"
              style={{ maxHeight: '50vh', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caru3}
              alt="Third slide"
              style={{ maxHeight: '50vh', objectFit: 'cover' }}
            />
          </Carousel.Item>
        </Carousel>
                <h1>Listado de Serivicios Disponibles</h1>
                <div className="servilist">
                    <div className="servimanicura">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className="serviesmaltado">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className="serviretiroesmal">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className="servicejperfi">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <div className="servidefini">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>

                </div>
             </div>
            <div className={Style.Footer}> <Footer></Footer></div>
        </div>
    )
}

export default ServiciosLista