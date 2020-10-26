import React from 'react'
import { faPlay, faPause, faVolumeUp, faVolumeMute, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAudioMenu } from './styles/StyledAudioMenu'
import {StyledIcon} from './styles/StyledIcon'

const AudioMenu = () => {
    return (
        <StyledAudioMenu>
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faPause} />
            <FontAwesomeIcon icon={faVolumeUp} />
            <FontAwesomeIcon icon={faVolumeDown} />
            <FontAwesomeIcon icon={faVolumeMute} />
        </StyledAudioMenu>
    )
}

export default AudioMenu
