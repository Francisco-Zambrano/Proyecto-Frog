import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styles.css";
import Click2Call from '../Click2Call/Click2Call';

const NavBar = () => {

  return (
    <Navbar expand="lg" className="navbar">
    <Container fluid>

      <Navbar.Brand className='nav-brand' href="#">Test Frog
      
      {/* <img
          src=""
          width="30"
          height="30"
          alt="logo"
      /> */}
      
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="me-auto my-2 my-lg-2"
          style={{ maxHeight: '600px' }}
          navbarScroll
        >

          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#action2">Funcionalidades</Nav.Link>

          <NavDropdown title="Blog" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Casos de Éxito</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Integraciones</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Portabilidad</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Home Office</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Sector Clientes" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Softphone</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Panel de Control</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Documentación</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Soporte Técnico</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#action1">Contacto</Nav.Link>
          
        </Nav>
        <Form className="d-flex">

          <Click2Call />
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;