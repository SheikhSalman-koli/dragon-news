import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authconext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Sign/Fire/fireBase';



const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // console.log(user);

    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    
    const allFunc = {

        createUser,
        setUser,
        user,
        logOut,
        loginUser,
        loading,
        setLoading
    }

    return (
       <AuthContext value={allFunc}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;