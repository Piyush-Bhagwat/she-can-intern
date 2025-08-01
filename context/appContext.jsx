'use client'
import { getIntern } from '@/DB/firebase.firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'
const appContext = createContext({
  user: null,
  setUser: () => {},
});

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function fetchUser(localUser) {

        const fbUser = await getIntern(localUser);
        setUser(fbUser);
        console.log(fbUser);

    }

    useEffect(() => {
        if (typeof window === "undefined") return; 
        
        const localUser = localStorage.getItem('user');

        console.log(localUser);

        if (localUser) {
            fetchUser(JSON.parse(localUser));
        }

    }, []);

    const val = { user, setUser }
    return (
        <appContext.Provider value={val}>{children}</appContext.Provider>
    )
}

export default AppContextProvider

export function useAppContext() {
    return useContext(appContext);
}