import React from 'react';
import Navber from '../../Componants/Nav/Navber';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='bg-base-200 h-screen'>
            <div className='max-w-9/12 mx-auto py-4 '>
            <header>
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
     
        </div>
        </div>
    );
};

export default Layout;