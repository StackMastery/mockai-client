import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authInfo, setAuthInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthInfo(user);
            } else {
                setAuthInfo(null);
            }
            setIsLoading(false);
        });

        // Cleanup subscription on component unmount
        return () => unSubscribe();
    }, []); // Empty dependency array ensures this runs once on mount

    console.log(authInfo);

    return (
        <AuthContext.Provider
            value={{
                authInfo,
                setAuthInfo,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
