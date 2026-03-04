import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {
    const [playlist, setPlaylist] = useState([])
    const [currentSong, setCurrentSong] = useState(null)
    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{
            playlist,
            setPlaylist,
            currentSong,
            setCurrentSong,
            loading,
            setLoading
        }}>
            {children}
        </SongContext.Provider>
    )
}