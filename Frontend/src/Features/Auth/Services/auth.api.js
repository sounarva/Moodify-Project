import axios from 'axios'
const baseAPI = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const registerAPI = async ({ username, email, password }) => {
    const response = await baseAPI.post("/api/v1/auth/register", {
        username,
        email,
        password
    })
    return response.data
}

export const loginAPI = async ({ username, email, password }) => {
    const response = await baseAPI.post("/api/v1/auth/login", {
        username,
        email,
        password
    })
    return response.data
}

export const getMeAPI = async () => {
    const response = await baseAPI.get("/api/v1/auth/get-me")
    return response.data
}

export const logoutAPI = async () => {
    const response = await baseAPI.get("/api/v1/auth/logout")
    return response.data
}