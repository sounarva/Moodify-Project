import { useContext, useEffect } from "react";
import { AuthContext } from '../Contexts/auth.context'
import { getMeAPI, loginAPI, registerAPI } from "../Services/auth.api";

const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const register = async ({ username, email, password }) => {
        try {
            setLoading(true)
            const response = await registerAPI({ username, email, password })
            setUser(response.user)
            setLoading(false)
            return response;
        } catch (error) {
            console.log(error)
            setLoading(false)
            return error.response?.data || { success: false, message: "Registration failed" };
        }
    }

    const login = async ({ username, email, password }) => {
        try {
            setLoading(true)
            const response = await loginAPI({ username, email, password })
            setUser(response.user)
            setLoading(false)
            return response;
        } catch (error) {
            console.log(error)
            setLoading(false)
            return error.response?.data || { success: false, message: "Login failed" };
        }
    }

    const getMe = async () => {
        try {
            setLoading(true)
            const response = await getMeAPI()
            setUser(response.user)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getMe()
    }, [])

    return {
        user,
        loading,
        register,
        login,
        getMe
    }
}

export default useAuth