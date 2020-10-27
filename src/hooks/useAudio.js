import { useState } from 'react'

export const useAudio = () => {
    const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg'));

    // this file will set the audio to start playing when a game starts and then restarts teh music when the game starts
    // console.log(audio.loop)
    audio.volume = 0.5

    const toggleSound = ()=> {
        audio.currentTime=0
        audio.play()
        console.log('playing')
        console.log(audio.volume)
    }

    const pauseAudio = (song) => {
        song.pause()
    }

    const restartAudio = (song) =>{
        song.play()
    }

    const muteAudio = (song) => {
        console.log(audio.volume)

        if(song.volume === 0.0){
            song.volume = 0.5
        } else {
            song.volume = 0.0
        }
    }

    return [ audio, toggleSound, pauseAudio, restartAudio, muteAudio ];
};
