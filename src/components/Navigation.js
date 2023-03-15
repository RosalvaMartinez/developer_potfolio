import React from "react";
import {
  Link
} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul className="flex flex-row justify-between w-80 p-6">
                <li><Link to="/" className={`underline`}>About Me</Link></li>
                <li><Link to="/portfolio" className={`underline`}>Portfolio</Link></li>
                <li><Link to="/contact" className={`underline`}>Contact</Link></li>
                <li><Link to="/resume" className={`underline`}>Resume</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
