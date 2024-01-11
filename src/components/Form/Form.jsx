import './styles.css'

const Form = () => {
  return (
    <>
    <form className="form">
        <p className="form-name">Contáctanos </p>
        <p className="message">
          Completá el siguiente formulario con tus datos y a la brevedad un representante se pondrá en contacto.
        </p>
        <div className="flex">
            <label>
                <input required="" placeholder="" type="text" className="input"/>
                <span>Nombre</span>
            </label>

             <label>
                <input required="" placeholder="" type="text" className="input"/>
                <span>Apellido</span>
            </label>
        </div>  
            
        <label>
            <input required="" placeholder="" type="email" className="input"/>
            <span>Email</span>
        </label> 
        
        <label>
            <input required="" placeholder="" type="tel" className="input"/>
            <span>Teléfono</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Empresa</span>
        </label> 

        <label>
            <select className="input">
              <option hidden="">Localidad</option>
              <option>Buenos Aires</option>
              <option>Bahía Blanca</option>
              <option>Bariloche</option>
              <option>Comodoro Rivadavia</option>
              <option>Córdoba</option>
              <option>Mendoza</option>
              <option>Neuquén</option>
              <option>Paraná</option>
              <option>Rosario</option>
              <option>Santa Fe</option>
              <option>Salta</option>
              <option>Otra</option>
            </select>
          </label>

          <label>
            <select className="input">
              <option hidden="">Cantidad de Internos</option>
              <option>1-4</option>
              <option>5-20</option>
              <option>24-100</option>
              <option>Más de 100</option>
            </select>
          </label>

          <label htmlFor="textarea" >Comentarios</label>
          <textarea  required="" rows="5" id="textarea" name="textarea"></textarea>
                      
        <div className='signin'>
            <input className='form-check' type="checkbox"/>
            <label htmlFor="numbers">
              Certifico que soy empresa (Anura no brinda servicios a personas individuales u hogares) 
            </label>
        </div>

        <button className="form-btn">Enviar</button>

    </form>
    </>
  )
}

export default Form