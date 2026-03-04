import { useEffect, useRef, useState } from "react";
import { detect, init } from "../Utils/utils.js";
import './faceExpression.scss'
import { HatGlasses } from "lucide-react";
import { useSong } from "../../Home/Hooks/useSong.js";


export default function FaceExpression({ onClick = () => { } }) {
    const { setPlaylist, setCurrentSong } = useSong()
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detect Expression 🔽");

    useEffect(() => {
        init({ landmarkerRef, videoRef, streamRef });

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }

            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
            }

            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
            setPlaylist([])
            setCurrentSong(null)
        };
    }, []);

    async function handleClick() {
        setExpression("Detecting...")
        setTimeout(() => {
            const expression = detect({ landmarkerRef, videoRef, setExpression })
            console.log(expression)
            onClick(expression)
        }, 1000);
    }


    return (
        <div className="faceExpression-container">
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
            />
            <h2>{expression}</h2>
            <button onClick={handleClick} ><HatGlasses /> Detect expression</button>
        </div>
    );
}