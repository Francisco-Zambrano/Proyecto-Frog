import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './styles.css'
import WebphoneImg from './assets/webphoneImg.png'
import PanelImg from './assets/PanelImg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const SoftphoneAndPanel = () => {

    useEffect(() => {
        AOS.init();
      }, []);


  return (

    <main>
        
        <Container className='webphone-container'>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={5} data-aos="fade-up-right">
                    <h2>Sofphone / Webphone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptatibus cupiditate enim ea eius incidunt itaque in veniam? Vero magni perspiciatis molestias dignissimos, dolores ex fugiat voluptatum quibusdam praesentium.</p>
                </Col>

                <Col xs={12} md={6} xl={7} className='d-flex align-items-center' data-aos="fade-up-left">
                    <img className='webphone-img' src={WebphoneImg} alt='webphone' ></img>
                </Col>
            </Row>
        </Container>

        <Container className='webphone-container'>
            <Row className="align-items-center">

                <Col xs={12} md={6} xl={7} className='d-flex align-items-center' data-aos="fade-up-right">
                    <img className='webphone-img' src={PanelImg} alt='Panel de control'></img>
                </Col>

                <Col xs={12} md={6} xl={5} data-aos="fade-up-left">
                    <h2>Panel de Control</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptatibus cupiditate enim ea eius incidunt itaque in veniam? Vero magni perspiciatis molestias dignissimos, dolores ex fugiat voluptatum quibusdam praesentium.</p>
                </Col>

            </Row>
        </Container>

    </main>

  )
}

export default SoftphoneAndPanel