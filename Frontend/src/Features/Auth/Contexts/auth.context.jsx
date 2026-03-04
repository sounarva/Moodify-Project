import { createContext, useEffect, useState } from "react";
import { getMeAPI } from "../Services/auth.api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const getMe = async () => {
        try {
            setLoading(true)
            const response = await getMeAPI()
            setUser(response.user)
        } catch (error) {
            console.log(error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMe()
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider