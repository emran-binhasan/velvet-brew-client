import React, { createContext } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const userInfo = {price:100}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;