import React from 'react'
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledInstructions, StyledInstructionsText } from './styles/StyledInstructions';


export const Instructions = () => {
    return (
        <StyledInstructions>
            <h2>How To Play:</h2>
            <StyledInstructionsText>Rotate: Up Arrow</StyledInstructionsText>
            {/* <p>Rotate: Up Arrow</p> */}
            <StyledInstructionsText>Move Left: Left</StyledInstructionsText>
            {/* <p>Move Left: Left </p> */}
            <StyledInstructionsText>Move Right: Right</StyledInstructionsText>
            {/* <p>Move Right: Right </p> */}
            <StyledInstructionsText>Drop: Down Arrow</StyledInstructionsText>
            {/* <p>Drop: Down Arrow</p> */}
        </StyledInstructions>
    )
}
