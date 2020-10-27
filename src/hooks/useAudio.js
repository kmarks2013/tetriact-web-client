import { useState } from 'react'

export const useAudio = () => {
    const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg'));
    const [vol, setVol] = useState(0.5)

    // this file will set the audio to start playing when a game starts and then restarts teh music when the game starts
    // console.log(audio.loop)

    const toggleSound = ()=> {
        audio.currentTime=0
        audio.volume = vol
        audio.play()
    }

    const pauseAudio = (song) => {
        song.pause()
    }

    const restartAudio = (song) =>{
        song.play()
    }

    const increaseVolume = (song) => {
        if (song.volume < 1.0){
            song.volume = Math.round((song.volume + .1) * 10) / 10
            setVol(song.volume)
        } else {
            return
        }
    }

    const decreaseVolume = (song) => {
        // console.log(song.volume)
        if (song.volume > 0.0){
            song.volume = Math.round((song.volume -.1)* 10)/10
            setVol(song.volume)
        } else{
            return
        }
    }

    const muteAudio = (song) => {
        //need to update this function to keep track of the volume. will need to add volume to state
        if(song.volume === 0.0){
            song.volume = vol
        } else {
            song.volume = 0.0
        }
    }

    return [ audio, toggleSound, pauseAudio, restartAudio, muteAudio, increaseVoulme, decreaseVolume ];
};
