import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <img src={logo} alt="" />
            <p className='text-primary text-[20px]'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),('EEEE, MMMM d, yyyy'))}</p>
        </div>
    );
};

export default Header;