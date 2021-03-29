import React from 'react';
import { Link } from "react-router-dom";



import './../../css/Navbar.css';

const Navbar = () =>{

    const navItems = [
        {name: "Strona Główna", link:"/"},
        {name: "O mnie", link:"/about"},
        {name: "Portfolio", link:"/portfolio"},
        {name: "Kontakt", link:"/contact"}
    ]

    const nav = navItems.map(item => (
        <li key={item.name}>
            <Link to={item.link}>
                {item.name}
            </Link>
        </li>
    ))

    return (
            <div className="header">
                <p>test</p>
                <nav>
                    <ul>
                        {nav}
                    </ul>
                </nav>
            </div>

    )
}

export default Navbar;