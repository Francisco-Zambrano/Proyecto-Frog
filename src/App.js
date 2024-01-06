import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CarouselExample from './components/CarouselExample/CarouselExample';
import GroupExample from './components/Cards/Cards';
// import Banner2 from './components/Banner2/Banner2';
import LogosDeIntegraciones from './components/Integraciones/LogosDeIntegraciones';
import Banner3 from './components/Banner3/Banner3';



function App() {
  return (

    <div>
      <NavBar />
      <Banner3 />
      <CarouselExample />
      <GroupExample />
      <LogosDeIntegraciones />
    </div>
   
  );
}

export default App;
