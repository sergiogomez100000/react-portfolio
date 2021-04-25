import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
    //     <div className="nav">
    //         <ul className="navbar-nav">
    //             <li>
    //                 <Link to="/">About</Link>
    //             </li>
    //             <li>
    //                 <Link to="projects" className={location.pathname === "/" ? "navitem active" : "navitem"}>Projects</Link>
    //             </li>
    //         </ul>
    //     </div>

    <div class="px-4 py-5 my-5 text-center">
  <h1 class="display-5 fw-bold">Sergio Gomez's Portfolio</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    </div>
  </div>
</div>
   ) 
}

export default Header;