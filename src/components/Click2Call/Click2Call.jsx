import "./styles.css";
import Phone from './assets/phone.svg'

const Click2Call = () => {
  return (
    <div className="tooltip-container">
        <button className="click2callBtn"><img src={Phone} alt="phone"/> ¡LLAMA YÁ!</button>
        <span className="tooltip">Activa el micrófono y los altavoces</span>
    </div>
  )
}

export default Click2Call