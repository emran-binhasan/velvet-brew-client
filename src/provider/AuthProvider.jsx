import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../configs/firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }
    

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>
    {
        signOut(auth).then(() => {
            console.log('signed out')

          }).catch((error) => {
            console.log(error)
          });
    }
    const userInfo = {createUser,loginUser,user,loading,setUser,setLoading,logOut};

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false)
        });
        return () => unSubscribe();
       
    },[])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;