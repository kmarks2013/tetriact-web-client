import React from 'react'
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledInstructions, StyledInstructionsText } from './styles/StyledInstructions';


export const Instructions = () => {
    return (
        <StyledInstructions>
            <h2>How To Play:</h2>
            <StyledInstructionsText>Rotate: <FontAwesomeIcon icon={faArrowUp} /> key</StyledInstructionsText>
            <StyledInstructionsText>Move Left: <FontAwesomeIcon icon={faArrowLeft} /> key</StyledInstructionsText>
            <StyledInstructionsText>Move Right: <FontAwesomeIcon icon={faArrowRight} /> key</StyledInstructionsText>
            <StyledInstructionsText>Drop: <FontAwesomeIcon icon={faArrowDown}  /> key</StyledInstructionsText>
            <StyledInstructionsText>Pause: Enter (Return) key</StyledInstructionsText>
        </StyledInstructions>
    )
}
