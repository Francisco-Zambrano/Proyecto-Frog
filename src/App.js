import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import GroupExample from './components/Cards/Cards';
// import Banner2 from './components/Banner2/Banner2';
import LogosDeIntegraciones from './components/Integraciones/LogosDeIntegraciones';
import Banner3 from './components/Banner3/Banner3';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';



function App() {
  return (

    <div>
      <NavBar />
      <Banner3 />
      <GroupExample />
      <LogosDeIntegraciones />
      <Form />
      <Footer />
    </div>
   
  );
}

export default App;
