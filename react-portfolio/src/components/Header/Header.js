import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <div className="nav">
            <ul className="navbar-nav">
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="projects" className={location.pathname === "/" ? "navitem active" : "navitem"}>Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;