import Gale from "./Gale.css";
import imagen1 from '../../Componentes/img/imagen1.png';
import imagen2 from '../../Componentes/img/imagen2.png';
import imagen3 from '../../Componentes/img/imagen3.png';
import imagen4 from '../../Componentes/img/imagen4.png';
import imagen11 from '../../Componentes/img/imagen11.png';
import imagen22 from '../../Componentes/img/imagen22.png';
import imagen33 from '../../Componentes/img/imagen33.png';
import imagen44 from '../../Componentes/img/imagen44.png';
import { Card } from "react-bootstrap";
import Footer from "./../../Componentes/Footer/Footer";
import Header from "./../../Componentes/Header/Titulo";
import Nav from "./../../Componentes/Nav/Nav";
import Style from "./../../Componentes/Inicio/Style.css";


const Galeria = () => {
    return (
      <div className="contenpag">
        <div className={Style.Header}><Header></Header></div>
        <div className={Style.Nav}><Nav></Nav></div>


        <div className='imagecontenedor'>
          <Card className='card1'>
            <h2 className='titulo'>Manicura</h2>
            <Card.Img id='img' variant='top' src={imagen1} />
            <Card.Img id='img' variant='top' src={imagen11} />
          </Card>
          <Card className='card2'>
            <h2 className='titulo'>Depilacion</h2>
            <Card.Img id='img' variant='top' src={imagen2} />
            <Card.Img id='img' variant='top' src={imagen22} />
          </Card>
          <Card className='card3'>
            <h2 className='titulo'>Masajes</h2>
            <Card.Img id='img' variant='top' src={imagen3} />
            <Card.Img id='img' variant='top' src={imagen33} />
          </Card>
          <Card className='card4'>
            <h2 className='titulo'>Pedicura</h2>
            <Card.Img id='img' variant='top' src={imagen4} />
            <Card.Img id='img' variant='top' src={imagen44} />
          </Card>
        </div>
        <div className={Style.Footer}> <Footer></Footer></div>
        </div>
    );
  }

  export default Galeria;
