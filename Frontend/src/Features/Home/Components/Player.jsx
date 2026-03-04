import React, { useState, useRef, useEffect } from 'react';
import { useSong } from '../Hooks/useSong';
import { Play, Pause, RotateCcw, FastForward, Music } from 'lucide-react';
import './player.scss';

const Player = () => {
    const { playlist, currentSong, setCurrentSong, loading } = useSong();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);

    const audioRef = useRef(null);

    // Reset playback when currentSong changes
    useEffect(() => {
        if (currentSong) {
            setIsPlaying(true); // Auto-play when a song is selected
            setProgress(0);
            setPlaybackRate(1);
            if (audioRef.current) {
                audioRef.current.playbackRate = 1;
                audioRef.current.currentTime = 0;
                // Use a small timeout to ensure source is updated before playing
                setTimeout(() => {
                    audioRef.current?.play().catch(e => console.log("Play failed:", e));
                }, 100);
            }
        } else {
            setIsPlaying(false);
        }
    }, [currentSong]);

    if (loading) return <div className="player-loading">Loading songs...</div>;
    if (!playlist || playlist.length === 0) return null;

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration;
        if (total > 0) {
            setProgress((current / total) * 100);
        }
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleProgressChange = (e) => {
        const newProgress = e.target.value;
        if (audioRef.current && audioRef.current.duration) {
            const newTime = (newProgress / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(newProgress);
        }
    };

    const handleFastForward = () => {
        let newRate = 1;
        if (playbackRate === 1) newRate = 1.5;
        else if (playbackRate === 1.5) newRate = 2;
        else newRate = 1;

        setPlaybackRate(newRate);
        if (audioRef.current) {
            audioRef.current.playbackRate = newRate;
        }
    };

    const handlePlayAgain = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time) || time === Infinity) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="playlist-sidebar">
            <div className="playlist-header">
                <h3>Playlist ({playlist[0]?.mood})</h3>
            </div>

            <div className="song-list">
                {playlist.map((song, index) => (
                    <div
                        key={song._id || index}
                        className={`song-item ${currentSong?._id === song._id ? 'active' : ''}`}
                        onClick={() => setCurrentSong(song)}
                    >
                        <div className="song-item-art">
                            <img src={song.posterUrl} alt={song.title} />
                            {currentSong?._id === song._id && isPlaying && (
                                <div className="playing-overlay">
                                    <Music size={16} className="animate-pulse" />
                                </div>
                            )}
                        </div>
                        <div className="song-item-info">
                            <p className="song-item-title">{song.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {currentSong && (
                <div className="active-player-section">
                    <div className="mini-info">
                        <img src={currentSong.posterUrl} alt={currentSong.title} />
                        <div className="text text-ellipsis">
                            <h4>{currentSong.title}</h4>
                        </div>
                    </div>

                    <div className="player-controls-container">
                        <div className="progress-wrapper">
                            <input
                                type="range"
                                className="progress-bar"
                                min="0"
                                max="100"
                                step="0.1"
                                value={progress}
                                onChange={handleProgressChange}
                                style={{
                                    background: `linear-gradient(to right, #fff ${progress}%, rgba(255, 255, 255, 0.1) ${progress}%)`
                                }}
                            />
                            <div className="time-info">
                                <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </div>

                        <div className="btn-group">
                            <button className="icon-btn" onClick={handlePlayAgain} title="Play Again">
                                <RotateCcw size={18} />
                            </button>

                            <button className="play-btn" onClick={togglePlay}>
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                            </button>

                            <button className="speed-badge" onClick={handleFastForward} title={`Speed: ${playbackRate}x`}>
                                <span>{playbackRate}x</span>
                                <FastForward size={18} />
                            </button>
                        </div>
                    </div>

                    <audio
                        ref={audioRef}
                        key={currentSong.songUrl} // Force re-render on song change to update source
                        src={currentSong.songUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={() => setIsPlaying(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default Player;
