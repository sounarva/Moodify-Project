import { useContext } from "react";
import { SongContext } from "../Contexts/song.context";
import { getSongAPI } from "../Services/song.api";

export const useSong = () => {
    const {
        playlist,
        setPlaylist,
        currentSong,
        setCurrentSong,
        loading,
        setLoading
    } = useContext(SongContext)

    const getSong = async ({ mood }) => {
        setLoading(true)
        const response = await getSongAPI({ mood })
        setPlaylist(response.songs)
        setCurrentSong(null) // Reset current song when new mood is detected
        setLoading(false)
    }

    return {
        playlist,
        currentSong,
        setCurrentSong,
        loading,
        getSong
    }
}