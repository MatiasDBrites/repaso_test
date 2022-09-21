import React from "react";
import "./skillmain.css";
import html from "./img/html.ico";
import css from "./img/css3.ico";
import js from "./img/js.ico";
import react from "./img/react.ico";
import git from "./img/git.ico";
import github from "./img/githubIco.ico";
import figma from "./img/figma.ico";
import sass from "./img/sass.ico";
import testingLibrary from "./img/reactTestingLibrary.ico";
import jestTesting from "./img/jest.ico";

const SkillMain = () => {
  return (
    <section>
      <div className="skillmain-container">
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/HTML" rel="noreferrer " target="_blank">
          <img className="img-skills" src={html}  alt="Html"  />
        </a>
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/CSS" rel="noreferrer " target="_blank">
          <img className="img-skills" src={css}  alt="Css"  />
        </a>
        <a className="container-skills" href="https://developer.mozilla.org/es/docs/Web/JavaScript" rel="noreferrer " target="_blank">
          <img className="img-skills" src={js}  alt="Javascript"  />
        </a>
        <a className="container-skills" href="https://reactjs.org/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={react}  alt="React"  />
        </a>
        <a className="container-skills" href="https://git-scm.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={git}  alt="Git"  />
        </a>
        <a className="container-skills" href="https://github.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={github}  alt="GitHub"  />
        </a>
        <a className="container-skills" href="https://www.figma.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={figma}  alt="Figma"  />
        </a>
        <a className="container-skills" href="https://sass-lang.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={sass}  alt="Sass"  />
        </a>
        <a className="container-skills" href="https://testing-library.com/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={testingLibrary}  alt="React-Testing-Library"  />
        </a>
        <a className="container-skills" href="https://jestjs.io/es-ES/" rel="noreferrer " target="_blank">
          <img className="img-skills" src={jestTesting}  alt="Jest"  />
        </a>

      </div>
      <div className="skillp-container">
        <p className="skillp-parrafo">Estas son algunas de las habilidades con las que cuento actualmente...</p>
      </div>
    </section>
  )
  
}

export default SkillMain