import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import AnuraLogo from './assets/logo-anura.png'

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col lg={3} md={6} xs={12}>
            <br></br>
            <br></br>
            <br></br>
            <img className='footer-logo' src={AnuraLogo} alt=''/>
            <h2>0800 220 0000</h2>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <h3>Teléfonos</h3>
            <p>Buenos Aires 11 5263 0000</p>
            <p>La Plata 221 648 0000</p>
            <p>Mar del Plata 223 630 0000</p>
            <p>Córdoba 351 700 0000</p>
            <p>Rosario 341 208 0000</p>
            <p>Paraná 343 482 0000</p>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <p>Santa Fe 342 564 0000</p>
            <p>Mendoza 261 352 0000</p>
            <p>San Miguel de Tucumán 381 596 0000</p>
            <p>Neuquén 299 5137 000</p>
            <p>Comodoro Rivadavia 297 4665 000</p>
            <p>Bahía Blanca 291 4875 000</p>
            <p>Bariloche 294 4724 000.</p>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <h3>Sector Clientes</h3>
            <p>Softphone</p>
            <p>Panel de Control</p>
            <p>Documentación</p>
            <p>Soporte Técnico</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;