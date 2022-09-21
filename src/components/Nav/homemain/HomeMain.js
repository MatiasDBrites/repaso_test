import React from "react";
import imagen from "./img/imgMDB2.png";
import video from "./video/video6.mp4";
import icon1 from "./img/linkedinIco.ico"
import icon2 from "./img/gmailIco.ico"
import icon3 from "./img/githubIco.ico"
import "./homemain.css"

const HomeMain = () => {
  return (
    <div className="container-home">
      <h1>Sobre mi...</h1>
      <video autoPlay="on"  muted>
        <source type="video/webm" src={video}></source>
      </video>
      <img className="container-img" src={imagen} alt="" />
      <div className="container-i">
        <a className="container-i__co" href="https://www.linkedin.com/in/matias-d-brites-9b0251a3/" rel="noreferrer " target="_blank">
          <img className="img-contact"  src={icon1} alt=""  />
        </a>
        <a className="container-i__co" href="mailto:matias.brites@gmail.com" rel="noreferrer " target="_blank">
          <img className="img-contact" src={icon2} alt=""  />
        </a>
        <a className="container-i__co" href="https://github.com/MatiasDBrites/" rel="noreferrer " target="_blank">
          <img className="img-contact" src={icon3} alt=""  />
        </a>
      </div>
      <p className="container-p">Hola!!! Mi nombre es Matias D Brites, 
        soy estudiante en el bootcamp de Full-stack de LarnU y vivo en Cancun Mexico.
        Tengo conocimiento en Diseño UX,  actualmente estoy adquiriendo habilidades de
        desarrollador Front-End enfocado en JavaScript.
      </p>
    </div>
  )
}

export default HomeMain;