import React from 'react'
import { faPlay, faPause, faVolumeUp, faVolumeMute, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAudioMenu } from './styles/StyledAudioMenu'
import {StyledIcon} from './styles/StyledIcon'
import { useAudio } from '../hooks/useAudio';

const AudioMenu = ({song, setPlaying}) => {
    const { pauseAudio, restartAudio, muteAudio, increaseVolume, decreaseVolume } = useAudio()

    const play = () => {
        setPlaying(true)
        restartAudio(song)
    }

    const pause = () => {
        setPlaying(false)
        pauseAudio(song)
    }

    return (
        <StyledAudioMenu>
            <StyledIcon onClick={ () => play()} >
            <FontAwesomeIcon icon={faPlay} />
            </StyledIcon>
            <StyledIcon  onClick={() => pause()} >
                <FontAwesomeIcon icon={faPause} />
            </StyledIcon>
            <StyledIcon onClick={() => increaseVolume(song)}>
                <FontAwesomeIcon icon={faVolumeUp} />
            </StyledIcon>
            <StyledIcon onClick={() => decreaseVolume(song)}>
                <FontAwesomeIcon icon={faVolumeDown} />
            </StyledIcon>
            <StyledIcon onClick={() => muteAudio(song)}>
                <FontAwesomeIcon icon={faVolumeMute} />
            </StyledIcon>
        </StyledAudioMenu>
    )
}

export default AudioMenu
