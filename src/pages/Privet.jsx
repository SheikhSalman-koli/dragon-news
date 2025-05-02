import React, { use } from 'react';
import { AuthContext } from '../Componants/auth/Authconext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Componants/Loader';

const Privet = ({children}) => {

    const {user, loading} =use(AuthContext)

    const location = useLocation()
    // console.log(location);

  //  console.log(loading);

    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default Privet;