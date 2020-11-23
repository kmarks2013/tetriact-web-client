import { useState } from 'react'

export const useAudio = () => {
    const [audio] = useState(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e5/Tetris_theme.ogg'));
    const [vol, setVol] = useState(0.20)

    // this file will set the audio to start playing when a game starts and then restarts teh music when the game starts

    const toggleSound = ()=> {
        audio.currentTime=0
        audio.volume = vol
        console.log(audio.volume)
        audio.loop = true
        audio.play()
    }

    const pauseAudio = (song) => {
        song.pause()
    }

    const restartAudio = (song) =>{
        song.play()
    }

    const increaseVolume = (song) => {
        if (song.volume < 0.5){
            song.volume = Math.round((song.volume + .05) * 100) / 100
            console.log(song.volume)
            setVol(song.volume)
        } else {
            return
        }
    }

    const decreaseVolume = (song) => {
        if (song.volume > 0.0){
            song.volume = Math.round((song.volume -.05)* 100)/100
            console.log(song.volume)
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

    return { audio, toggleSound, pauseAudio, restartAudio, muteAudio, increaseVolume, decreaseVolume };
};
