import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav_logo"></div>
            <div className="nav_items">
                <a href="#">INICIO</a>
                <a href="">MOTOS</a>
                <a href="">SOBRE NOSOTROS</a>
                <a href="">CONTACTO</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )

}

export default Navbar