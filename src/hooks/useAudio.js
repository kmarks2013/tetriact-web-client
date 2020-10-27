import { useState } from 'react'

export const useAudio = () => {
    const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg'));

    // this file will set the audio to start playing when a game starts and then restarts teh music when the game starts
    // console.log(audio.loop)

    const toggleSound = ()=> {
        audio.currentTime=0
        audio.volume = 0.5
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

    const increaseVoulme = (song) => {
        if (song.volume < 1.0){
            // console.log(song.volume + .1)
            song.volume = song.volume +.1
        }
    }

    const muteAudio = (song) => {
        if(song.volume === 0.0){
            song.volume = 0.5
            console.log(song.volume)
        } else {
            song.volume = 0.0
            console.log(song.volume)
        }
    }

    return [ audio, toggleSound, pauseAudio, restartAudio, muteAudio, increaseVoulme ];
};
