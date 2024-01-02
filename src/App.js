import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CarouselExample from './components/CarouselExample/CarouselExample';
import GroupExample from './components/Cards/Cards';


function App() {
  return (

    <div>
      <NavBar />
      <CarouselExample />
      <GroupExample />
    </div>
   
  );
}

export default App;
