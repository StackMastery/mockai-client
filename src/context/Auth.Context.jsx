import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [authInfo, setauthInfo] = useState();
    const [isLoading, setisLoading] = useState(true);


    useEffect(() => {
        const unSubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                if(user){
                    setauthInfo(user)
                    setisLoading(false)
                }else{
                    setauthInfo(null)
                    setisLoading(false)
                }
            })
        }
        return () => unSubscribe()
    }, [ 
        auth,
        isLoading, 
        setisLoading, 
        authInfo, 
        setauthInfo
    ])

    console.log(authInfo)
    return (
        <AuthContext.Provider
            value={{
                authInfo, setauthInfo,
                isLoading, setisLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}