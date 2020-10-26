import {useState, useEffect} from 'react'

export const useAudio = () => {
    const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg'));
    const [playing, setPlaying] = useState(false);

    // this file will set the audio to start playing when a game starts and then restarts teh music when the game starts
    // console.log(audio.loop)
    const toggleSound = ()=> {
        audio.currentTime=0
        setPlaying(true)
        audio.volume = 0.5
        audio.play()
        console.log('playing')
    }

    const pauseAudio = () => {
        audio.pause()
    }

    const restartAudio = () =>{
        audio.play()
    }

    const muteAudio = () => {
        console.log(audio, playing)
        if(audio.volume === 0.0){
            audio.volume = 0.5
        } else {
            audio.volume = 0.0
        }
    }

    return [ audio, toggleSound, pauseAudio, restartAudio, muteAudio ];
};
