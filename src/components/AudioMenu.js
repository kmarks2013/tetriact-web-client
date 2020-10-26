import React from 'react'
import { faPlay, faPause, faVolumeUp, faVolumeMute, faVolumeDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AudioMenu = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faPause} />
            <FontAwesomeIcon icon={faVolumeUp} />
            <FontAwesomeIcon icon={faVolumeDown} />
            <FontAwesomeIcon icon={faVolumeMute} />
        </div>
    )
}

export default AudioMenu
