import React, { useEffect, useState } from 'react'
import './toaster.scss'
import { X } from 'lucide-react';

const Toaster = ({ message, type, onClose }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true);
        }, 1700); // Start fadeout before 2s ends

        const closeTimer = setTimeout(() => {
            onClose();
        }, 2000);

        return () => {
            clearTimeout(timer);
            clearTimeout(closeTimer);
        };
    }, [onClose]);

    return (
        <div className={`toaster ${type} ${isFadingOut ? 'fadeOut' : ''}`}>
            <div className="toaster-content">{message}</div>
            <button className="close-btn" onClick={onClose}>
                <X />
            </button>
        </div>
    )
}

export default Toaster