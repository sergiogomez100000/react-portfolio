import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="card text-center"style={{background: "#659DBD"}}>
      <h1 className="display-5 fw-bold">Sergio Gomez's Portfolio</h1>
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs nav-fill">
          <li className="nav-item">
          <Link to="/" style={{color: "black"}}className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" style={{color:"black"}}className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link>
          </li>
          <li className="nav-item">
          <Link to="contact" style={{color:"black"}}className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
