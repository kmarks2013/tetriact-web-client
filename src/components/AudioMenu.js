import React from 'react'
import { faPlay, faPause, faVolumeUp, faVolumeMute, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAudioMenu } from './styles/StyledAudioMenu'
import {StyledIcon} from './styles/StyledIcon'
import { useAudio } from '../hooks/useAudio';

const AudioMenu = ({song}) => {
    const { pauseAudio, restartAudio, muteAudio, increaseVolume, decreaseVolume } = useAudio()

    return (
        <StyledAudioMenu>
            <StyledIcon onClick={ () => restartAudio(song)} >
            <FontAwesomeIcon icon={faPlay} />
            </StyledIcon>
            <StyledIcon  onClick={() => pauseAudio(song)} >
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
