import { useRef } from 'react';

const useClickSound = (audioSrc, muted) => {
    const audioRef = useRef(new Audio(audioSrc));

    const playSound = () => {
        !muted && audioRef.current.play();
    };

    return playSound;
};

export default useClickSound;