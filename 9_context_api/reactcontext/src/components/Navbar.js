import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/clients">Clientes</NavLink>
        </nav>
    );
}

export default Navbar;