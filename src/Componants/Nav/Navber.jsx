import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navber = () => {
    return (
        <nav className='flex justify-between items-center mt-8'>
            <div><p className='invisible'> Lorem, ipsum.</p></div>
            <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-3 items-center'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8 rounded-[0px]'>Login</button>
            </div>
        </nav>
    );
};

export default Navber;