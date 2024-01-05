import "./styles.css";
import Plx from "react-plx";
import imgBack1 from "./assets/Parallax-backgroud-1.png"
import imgBack2 from "./assets/Parallax-backgroud-2.png"

const Banner2 = () => {
  return (
    <div>
        <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src={imgBack1} alt="foreground" />
      </Plx>
      
        <div className="calltoaction">Prueba Parallax</div>
      
    </div>
  )
}

export default Banner2