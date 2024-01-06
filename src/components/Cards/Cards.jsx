import './styles.css'
import estadisticasFrog from './assets/estadisticas.png'
import colaDeEspera from './assets/cola de espera.png'

const GroupExample = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-4">

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={estadisticasFrog} alt='estadisticas'/>
              <p class="title">Estadísticas</p>
            </div>
            <div class="flip-card-back">
              <p class="title">Estadísticas</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={colaDeEspera} alt='estadisticas'/>
              <p class="title">Cola de Espera</p>
            </div>
            <div class="flip-card-back">
              <p class="title">Cola de Espera</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>blablabla words words</p>
              <p class="title">FLIP CARD</p>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>blablabla words words</p>
              <p class="title">FLIP CARD</p>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>blablabla words words</p>
              <p class="title">FLIP CARD</p>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>blablabla words words</p>
              <p class="title">FLIP CARD</p>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>blablabla words words</p>
              <p class="title">FLIP CARD</p>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>blablabla words words</p>
              <p class="title">FLIP CARD</p>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        

        

      </div>
    </div>
  );
};

export default GroupExample;
