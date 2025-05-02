import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usericon from '../../assets/user.png'
import { AuthContext } from '../auth/Authconext';

const Navber = () => {

    const {user, logOut} = use(AuthContext)

    // console.log(user);
    const handleLogout =()=>{
        logOut()
        .then(() => {
            alert('user logged out successfully')
          }).catch((error) => {
           console.log(error);
          });
    }
    return (
        <nav className='flex justify-between items-center mt-8'>
            <div><p>{user && user.email}</p></div>
            <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-3 items-center'>
                <img src={usericon} alt="" />
                {
                    user ?
                     <button onClick={handleLogout} className='btn btn-primary px-8 rounded-[0px]'>LogOut</button>
                     :
                     <Link to='/auth/login'> <button className='btn btn-primary px-8 rounded-[0px]'>Login</button></Link>
                }
               
            </div>
        </nav>
    );
};

export default Navber;