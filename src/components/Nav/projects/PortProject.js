import * as React from 'react';
import "./portproject.css"

const Projects = () => {
  return (
    <div>
      <div>
        <h1>Proyectos</h1>
      </div>
      <div className="container">
        <a  className="container-anchor" 
          href="https://matiasdbrites.github.io/proyecto_final_html_css/" 
          rel="noreferrer " 
          target="_blank">
          <img className='container-anchor__img' src='https://i.postimg.cc/wvFtGXwQ/Final-Htmly-Css.png' alt='Html/css'/>
        </a>
        <a  className="container-anchor" 
          href="https://matiasdbrites.github.io/api_weather_js/" 
          rel="noreferrer " 
          target="_blank">
          <img className='container-anchor__img' src='https://i.postimg.cc/0y3h7hxp/App-Del-Clima-JS.png' alt=''/>
        </a>
        <a  className="container-anchor" 
          href="https://matiasdbrites.github.io/api_cripto_js/" 
          rel="noreferrer " 
          target="_blank">
          <img className='container-anchor__img' src='https://i.postimg.cc/9Mcb9B4d/Cotizador-De-Cripto-JS.png' alt=''/>
        </a>
        <a  className="container-anchor" 
            href="https://react-introduccion-silk.vercel.app/" 
            rel="noreferrer " 
            target="_blank">
          <img className='container-anchor__img' src='https://i.postimg.cc/hjxz1XwK/Cards-Larnu-Con-React.png' alt=''/>
        </a>
      </div>
    </div>
  )
}

export default Projects;













