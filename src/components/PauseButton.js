import React from 'react'
import { StyledStartButton } from './styles/StyledStartButton'

const PauseButton = ({callback}) => {
    return (
        <StyledStartButton onClick={callback}>
            Pause Game
        </StyledStartButton>
    )
}

export default PauseButton
