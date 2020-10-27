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
            song.volume = Math.round((song.volume + .1) * 10) / 10
            setVol(song.volume)
            console.log((song.volume * 10)/10, song.volume)
        } else {
            return
        }
    }

    const decreaseVolume = (song) => {
        // console.log(song.volume)
        if (song.volume > 0.0){
            song.volume = Math.round((song.volume -.1)* 10)/10
            console.log(song.volume)
        } else{
            return
        }
    }

    const muteAudio = (song) => {
        //need to update this function to keep track of the volume. will need to add volume to state
        if(song.volume === 0.0){
            song.volume = 0.5
        } else {
            song.volume = 0.0
            console.log(song.volume)
        }
    }

    return [ audio, toggleSound, pauseAudio, restartAudio, muteAudio, increaseVoulme, decreaseVolume ];
};
