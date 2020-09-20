import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <div className="w3-row">
            <NavLink
                exact
                activeClassName="w3-border-red"
                className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding navbar__link"
                to="/"
            >
                Tv
            </NavLink>
            <NavLink
                activeClassName="w3-border-red"
                className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding navbar__link"
                to="/on_air"
            >
                On Air
            </NavLink>
            <NavLink
                activeClassName="w3-border-red"
                className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding navbar__link"
                to="/rated"
            >
                Rated
            </NavLink>
        </div>
    );
};

export default NavBar;
