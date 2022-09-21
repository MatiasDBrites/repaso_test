import React from "react";
import { Switch , Link, Route, Router } from "wouter";
import Proyectos from "../pages/Projects";
import Habilidades from "../pages/Skills";
import Inicio from "../pages/Home";
import Contacto from "../pages/Contact";
import "./navbar.css";


function NavBar() {
  return (
    <Router>
      <div className="container-navbar">
        <div className="container-group">
          <Link to="/" className="btn">
            <button>Home</button>
          </Link>
          <Link to="/contacto" className="btn">
          <button>Contact</button>
          </Link>
          <Link to="/proyectos" className="btn">
          <button>Projects</button>
          </Link>
          <Link to="/habilidades" className="btn">
          <button>Skills</button>
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/proyectos">
            <Proyectos />
          </Route>
          <Route path="/habilidades">
            <Habilidades />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;