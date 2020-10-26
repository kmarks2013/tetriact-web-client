import {useState, useEffect} from 'react'

export const useAudio = () => {
    const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg'));
    const [playing, setPlaying] = useState(false);

    // this file will set the audio to start playing when a game starts and then restarts teh music when the game starts
    // console.log(audio.loop)
    const toggleSound = ()=> {
        audio.currentTime=0
        setPlaying(true) ;
    }

    const pauseAudio = () => {
        audio.pause()
    }

    const restartAudio = () =>{
        audio.play()
    }

    useEffect(() => {
            if (playing){
                audio.loop = true
                audio.play()
            }
        },
        [playing, audio]
    );

    return [ audio, toggleSound, pauseAudio, restartAudio ];
};
