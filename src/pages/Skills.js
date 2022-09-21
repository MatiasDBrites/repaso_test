import React from "react";
import SkillMain from "../components/Nav/skillsmain/SkillMain";
import video from "../components/Nav/homemain/video/video6.mp4"

const Habilidades = () => {
  return (
    <div className="about__container">
      <h1>Habilidades</h1>
      <video autoPlay="on"  muted>
        <source type="video/webm" src={video}></source>
      </video>
      <SkillMain></SkillMain>
    </div>
  )
  
}

export default Habilidades