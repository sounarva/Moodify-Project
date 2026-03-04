import axios from "axios";
const songAPI = axios.create({
    baseURL: "http://localhost:3000"
})

export const getSongAPI = async ({ mood }) => {
    const response = await songAPI.get(`/api/v1/song/get-song?mood=${mood}`)
    return response.data
}