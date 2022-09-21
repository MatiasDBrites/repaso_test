import React from "react";
import video from "../components/Nav/homemain/video/video6.mp4"
import Projects from "../components/Nav/projects/PortProject";

const Proyectos = () => {
  return (
    <div className="proyectos__container">
      <video autoPlay="on"  muted>
        <source type="video/webm" src={video}></source>
      </video>
      <Projects/>
    </div>
  )
}

export default Proyectos