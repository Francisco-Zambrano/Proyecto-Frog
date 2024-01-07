import './styles.css'
import estadisticasFrog from './assets/estadisticas.png'
import colaDeEspera from './assets/cola de espera.png'
import click2CallImg from './assets/anura-click2call.png'

const GroupExample = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-4">

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={estadisticasFrog} alt='estadisticas'/>
              <p className="title">Estadísticas</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Estadísticas</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={colaDeEspera} alt='estadisticas'/>
              <p className="title">Cola de Espera</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Cola de Espera</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={click2CallImg} alt='click 2 call'/>
              <p className="title">Click To Call</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Click To Call</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>blablabla words words</p>
              <p className="title">FLIP CARD</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>blablabla words words</p>
              <p className="title">FLIP CARD</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>blablabla words words</p>
              <p className="title">FLIP CARD</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>blablabla words words</p>
              <p className="title">FLIP CARD</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>blablabla words words</p>
              <p className="title">FLIP CARD</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        

        

      </div>
    </div>
  );
};

export default GroupExample;
