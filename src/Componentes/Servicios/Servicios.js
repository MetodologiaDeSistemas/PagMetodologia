import Footer from "./../../Componentes/Footer/Footer";
import Nav from "./../../Componentes/Nav/Nav";
import Header from "./../../Componentes/Header/Titulo";
import Style from "./../../Componentes/Inicio/Style.css";
import "./servi.css"


function ServiciosLista () {

    return (
        
        <div className="contenpag">
            <div className={Style.Header}><Header></Header></div>
            <div className={Style.Nav}><Nav></Nav></div>
             
             <div className="servicioslista">

                <h1>Listado de Serivicios Disponibles</h1>
                <div className="servilist">
                    <div className="servimanicura">MAnicura Tradicional: realizamos acepsia, corte, limado, repujamos cuticulas, corte si es necesario de las mismas, exfoliacion, esmaltado e hidratación</div>
                    <div className="serviesmaltado">Esmaltado Semi Permanente: realizamos acepsia, corte, limado, manicuria rusa, preparacion de la uña, esmaltado semi permanente e hidratación</div>
                    <div className="serviretiroesmal">Retiro de Esmalte: quimico, se lo realiza con removedor, tiempo estimado 20 minutos. Mecanico, se lo realiza con torno, tiempo estimado 8 minutos</div>
                    <div className="servicejperfi">Perfilado de cejas: da forma a tus cejas de una manera armoniosa para cada tipo de rostro, incluye limpieza, recorte y medidas. Obcional color</div>
                    <div className="servidefini">Depilación Definitiva: procedimiento laser para la eliminación de vello no deseado, el tratamiento es de 6 a 8 seciones aproximadamente, mas info a nuestro whatsapp</div>

                </div>
             </div>
            <div className={Style.Footer}> <Footer></Footer></div>
        </div>
    )
}

export default ServiciosLista

/*             <Carousel>
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
        </Carousel> */