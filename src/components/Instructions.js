import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledInstructions } from './styles/StyledInstructions';


export const Instructions = () => {
    return (
        <StyledInstructions>
            <h3>How To Play:</h3>
            <p>Rotate Tetromino: Up Arrow</p>
            <p>Move Tetromino Left: Left Arrow</p>
            <p>Move Tetromino Right: Right Arrow</p>
            <p>Drop Tetromino: Down Arrow</p>
        </StyledInstructions>
    )
}
