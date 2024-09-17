import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='Navbar'>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
            <NavLink exact to="/Sardines">Sardines</NavLink>
        </nav>
    );
};

export default NavBar;