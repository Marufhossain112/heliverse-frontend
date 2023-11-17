import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;