import { Container, Row, Col } from "react-bootstrap";
import PortabilidadGif from './assets/portabilidadGif.gif'
import './styles.css'

const Portabilidad = () => {
    return (
        <Container className='portabilidad-container' >
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={5} className="portabilidad-phrase">
                    <h2>Traete tus numeraciones a Anura con la Portabilidad Numérica</h2>
                    <p>La portabilidad numérica de telefonía fija permite que el usuario pueda cambiar de operador manteniendo su número de teléfono.</p>
                </Col>

                <Col xs={12} md={6} xl={7} className='d-flex align-items-center'>
                    <div>
                        <img className='gif.portabilidad img-fluid' src={PortabilidadGif} alt="Portabilidad Anura" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Portabilidad