
import { Parallax } from 'react-parallax';
import imgBack1 from "./assets/Parallax-backgroud-1.png"

const Banner3 = () => {
   
  return (
    <Parallax bgImage={imgBack1} strength={300}>
      <div style={{ height: '800px' }}>
        
      </div>

      <div style={{  
          background: "#fff",
          padding: 20,
          position: "absolute",
          top: "50%",
          left: "40%",
          transfrom: "traslate(-50%, -50%)"
        }}>prueba de parallax</div>

    </Parallax>
  )
}

export default Banner3