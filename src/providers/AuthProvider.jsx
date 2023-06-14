import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            if (currentUser) {
                axios
                  .post("http://localhost:5000/jwt", {
                    email: currentUser.email,
                  })
                  .then((data) => {
                    localStorage.setItem("access_token", data.data);
                  });
              } else {
                localStorage.removeItem("access_token");
                setLoading(false);
              }
              setLoading(false);
            
        });
        return () => {
            return unsubscribe();
        }
    });

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSingIn,
        logOut,
        isDarkMode,
        setIsDarkMode,
  

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;