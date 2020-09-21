import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewBar.css';

const NavBar = () => {
    return (
        <header className="site-header">
            <div className="contenedor">
                <div className="barra">
                    <a href="/">
                        <h1 className="no-margin">
                            Skydrop
                            <span>X</span>
                        </h1>
                    </a>
                    <nav className="navegacion">
                        <NavLink
                            exact
                            activeClassName="navbar__link--active"
                            to="/"
                        >
                            Popular
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__link--active"
                            to="/on_air"
                        >
                            On Air
                        </NavLink>
                        <NavLink
                            activeClassName="navbar__link--active"
                            to="/rated"
                        >
                            Rated
                        </NavLink>
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default NavBar;
