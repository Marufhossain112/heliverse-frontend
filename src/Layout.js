import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>This is Navbar</header>
            <Outlet></Outlet>
            <footer>This is Footer</footer>
        </div>
    );
};

export default Layout;