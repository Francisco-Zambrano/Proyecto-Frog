import { Carousel } from 'react-bootstrap';
import './styles.css'
import Quote from './assets/Quote.svg'

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      imageSrc: require('./assets/logoItca.jpeg'),
      name: 'Maximiliano Leonelli',
      occupation: 'Gerente de Marketing',
      description: 'La gran ventaja fue el hecho de recuperar esas líneas alternativas que no teníamos disponibles por no tener acceso a la red telefónica que teníamos y poder concentrar todas las líneas telefónicas en un solo proveedor nos simplificó bastante el trabajo. Además otra gran ventaja fue bajar costos porque a pesar de que no se usaba demasiado el mantenimiento era alto y el traspaso significó un ahorro importante de dinero.',
    },
    {
      id: 2,
      imageSrc: require('./assets/autoEspecial.jpeg'),
      name: 'Leonardo Moroni',
      occupation: 'Gerente de IT',
      description: 'Viendo la accesibilidad que teníamos con Anura de que si teníamos un problema lo solucionaban de forma rápida o si necesitábamos un nuevo interno lo hacían en 30 minutos a través del panel de control y además que pagábamos la mitad de lo que veníamos pagando, decidimos hacer el cambio. Además pudimos unificar todo nuestro sistema de comunicación bajo un mismo proveedor al tratarse de varias sucursales en distintos lugares.',
    },
    {
      id: 3,
      imageSrc: require('./assets/sab5.jpg'),
      name: 'Ricardo Castro Lloret',
      occupation: 'Gerente de IT',
      description: 'Conocimos a Anura cuando el gerente comercial estaba buscando alguna solución de Telefonía IP para solucionar el tema de los llamados salientes y nos quedamos porque Anura siempre cumplió con las expectativas, es muy fácil de implementar y estaba al alcance de la mano en ese momento. Todo estaba resuelto de una manera muy fácil',
    }

  ];




  return (
    <Carousel data-bs-theme="dark" className="testimonials-container">
      
      {testimonials.map((testimonial) => (

        <Carousel.Item key={testimonial.id} className='text-center'>
          <div class="testimonial-card" >
            <div className="testimonial-img-container">
              <img className="testimonial-img" src={testimonial.imageSrc} alt="client brand" />
            </div>
            <p class="description">
              {testimonial.description}
            </p>
            <div><img className='quotation-img' src={Quote} alt='quotation'/></div>
            
            <div class="author">
              {testimonial.name}
            </div>
            <div class="author-info">
              {testimonial.occupation}
            </div>
          </div>
        </Carousel.Item>

      ))}
    </Carousel>
  )
}

export default Testimonials


