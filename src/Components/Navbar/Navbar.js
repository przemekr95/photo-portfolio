import React, { useState } from 'react';
import { Link } from "react-router-dom";



import './../../css/Navbar.css';

const Navbar = () =>{

    const [navbar, setNavbar] = useState(false);

    const toggleMobileMenu = () => {
        setNavbar(!navbar);
    }
    const closeMobileMenu = () => {
        setNavbar(false);
    }

    const navItems = [
        {name: "Strona Główna", link:"/"},
        {name: "O mnie", link:"/about"},
        {name: "Portfolio", link:"/portfolio"},
        {name: "Kontakt", link:"/contact"}
    ]

    const nav = navItems.map(item => (
        <li key={item.name}>
            <Link className="navbar__link" to={item.link} onClick={closeMobileMenu}>
                {item.name}
            </Link>
        </li>
    ))

    return (
        <>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to="/" className="navbar__logo"></Link>
                </div>
                <div className="navbar__right">
                    <nav>
                        <ul className="navbar__links" id={navbar ? "hidden" : ""}>
                            {nav}
                        </ul>
                    </nav>
                    <i onClick={toggleMobileMenu} className="fas fa-camera navbar__icon"></i>
                </div>
            </div>
        </>

    )
}

export default Navbar;