import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import SoftphoneAndPanel from './components/SoftphoneAndPanel/SoftphoneAndPanel';
import Portabilidad from './components/Portabilidad/Portabilidad';
import FunctionalityCards from './components/FunctionalityCards/FunctionalityCards';
import LogosDeIntegraciones from './components/Integraciones/LogosDeIntegraciones';
import Testimonials from './components/Testimonials/Testimonials';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';




function App() {
  return (

    <div>
      <NavBar />
      <Banner />
      <SoftphoneAndPanel />
      <Portabilidad />
      <div className="func-container">
        <div className="container d-flex justify-content-center">
          <h2>Funcionalidades</h2>
        </div>

        <div>
          <FunctionalityCards />
        </div>

        <br></br>
        <br></br>

        <div className="int-container container text-center">
          <h2>Central Telefónica integrada con CRMs/ERPs</h2>
          <h3>Ahorrá tiempo y automatizá procesos en tu empresa integrando la central telefónica con los sistemas de gestión y manejo de clientes</h3>
        </div>

        <div>
          <LogosDeIntegraciones />
        </div>
      </div>

      <div className="int-container container text-center">
        <h2>Testimonios</h2>
      </div>

      <Testimonials />
      <Contacto />
      <Footer />

    </div>

  );
}

export default App;
