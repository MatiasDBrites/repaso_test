import React from "react";
import Formulario from "../components/Nav/contactmain/FormContact";
import video from "../components/Nav/homemain/video/video6.mp4"

const Contacto = () => {
  return (
    <div className="about__container">
      <h1>Contacto</h1>
      <video autoPlay="on"  muted>
        <source type="video/webm" src={video}></source>
      </video>
      <Formulario></Formulario>
    </div>
  )
}

export default Contacto