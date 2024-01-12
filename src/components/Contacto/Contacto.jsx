import { Container, Row, Col } from "react-bootstrap";
import Click2Call from "../Click2Call/Click2Call";
import Form from "../Form/Form";

const Contacto = () => {
  return (
    <Container className='webphone-container'>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={5} >
                    
                    <h2>Completá el siguiente formulario con tus datos o haz click en el botón de abajo y a la brevedad un representante se pondrá en contacto.</h2>
                    <br></br>
                    <Click2Call/>
                    
                </Col>

                <Col xs={12} md={6} xl={7} className='d-flex align-items-center' >

                    <Form />
                    
                </Col>
            </Row>
        </Container>
  )
}

export default Contacto