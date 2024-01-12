import { Parallax } from 'react-parallax';
import './styles.css'
import mainLogo2 from './assets/mainLogo2.png'
import background from './assets/clouds-back.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <section>
            <Parallax bgImage={background} strength={300}>
                <div style={{ height: '500px' }}>

                    <div className='main-logo-container'>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <img className='main-logo' src={mainLogo2} alt='Anura Logo' data-aos="zoom-out" />
                            <h1 className='main-title'>ANURA</h1>
                            <h2>Central telefónonica en la Nube</h2>
                            <h3>Sevicio de Telefonía para empresas</h3>
                        </div>
                    </div>
                </div>
            </Parallax>

            <Container className='portabilidad-container' >
                <Row className="align-items-center">
                    <Col xs={12} className="portabilidad-phrase">
                        <h2>Con la central telefónica en la nube de Anura, podes reemplazar a las centrales telefónicas tradicionales. Nuestra solución permite: integrar, simplificar y organizar las comunicaciones de tu empresa utilizando Internet. La implementación es inmediata.</h2>
                    </Col> 
                </Row>
            </Container>

        </section>

    )
}

export default Banner