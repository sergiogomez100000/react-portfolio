import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="px-4 my-5 text-center" style={{background: "#659DBD"}}>
      <h1 className="display-5 fw-bold">Sergio Gomez's Portfolio</h1>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/"className={location.pathname === "/" ? "nav-item active" : "nav-item"}>About</Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects"className={location.pathname === "/projects" ? "nav-item active" : "nav-item"}>Projects</Link>
        </li>
        <li className= "nav-item">
          <Link
            to="contact"className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
