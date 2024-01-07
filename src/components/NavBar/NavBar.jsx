import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styles.css";
import Click2Call from '../Click2Call/Click2Call';
import LogoAnura from './assets/logo-anura.png'

const NavBar = () => {

  return (
    <Navbar expand="lg" className="navbar">
    <Container fluid>

      <Navbar.Brand className='nav-brand' href="#">
      
      <img
          src={LogoAnura}
          height="50"
          alt="logo"
      />
      
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="mx-auto my-2 my-lg-2"
          style={{ maxHeight: '600px' }}
          navbarScroll
        >

          <Nav.Link href="#" className='nav-links'>Nosotros</Nav.Link>
          <Nav.Link href="#" className='nav-links'>Funcionalidades</Nav.Link>
          <Nav.Link href="#" className='nav-links'>Blog</Nav.Link>
          <Nav.Link href="#" className='nav-links'>Contacto</Nav.Link>

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