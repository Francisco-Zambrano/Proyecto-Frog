import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import example from './assets/example.jpg';

const CarouselExample = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={example} className="d-block w-100 img-fluid" alt="First slide" />
        <Carousel.Caption className="text-center">
          <h1>First slide</h1>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={example} className="d-block w-100 img-fluid" alt="Second slide" />
        <Carousel.Caption className="text-center">
          <h1>Second slide</h1>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={example} className="d-block w-100 img-fluid" alt="Third slide" />
        <Carousel.Caption className="text-center">
          <h1>Third slide</h1>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;
