import React from 'react'
import { faPlay, faPause, faVolumeUp, faVolumeMute, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAudioMenu } from './styles/StyledAudioMenu'
import {StyledIcon} from './styles/StyledIcon'
import { useAudio } from '../hooks/useAudio';

const AudioMenu = ({song}) => {
    const [audio, toggleSound, pauseAudio, restartAudio, muteAudio] = useAudio()

    return (
        <StyledAudioMenu>
            <StyledIcon onClick={ () => restartAudio(song)} >
            <FontAwesomeIcon icon={faPlay} />
            </StyledIcon>
            <StyledIcon>
                <FontAwesomeIcon icon={faPause} />
            </StyledIcon>
            <StyledIcon>
                <FontAwesomeIcon icon={faVolumeUp} />
            </StyledIcon>
            <StyledIcon>
                <FontAwesomeIcon icon={faVolumeDown} />
            </StyledIcon>
            <StyledIcon>
                <FontAwesomeIcon icon={faVolumeMute} />
            </StyledIcon>
        </StyledAudioMenu>
    )
}

export default AudioMenu
