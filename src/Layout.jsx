import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import packageJson from '../package.json';

const Layout = () => {
    return (
        <>
            <header>
                <h1>Marvel App - demo </h1>
                <nav>
                    <NavLink to="/">Home</NavLink> - <NavLink to="/about">About</NavLink> - <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Marvel App - 2023 - {packageJson.version} </p>
            </footer>
        </>
    );
};

export default Layout;