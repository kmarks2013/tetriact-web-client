import React from 'react'
import { StyledButton } from './styles/StyledButton'
import { StyledUnpauseButton } from './styles/StyledPauseMenu'
import { StyledPlayerFormButton } from './styles/StyledPlayerForm'


export const Button = ({text, callback, width, margin}) => {
    return (
        <StyledButton width={width} margin={margin} onClick={callback} >
            {text}
        </StyledButton>
    )
}

export const UnpauseButton =({text, callback}) =>{
    return (
        <StyledUnpauseButton onClick={callback}>
            {text}
        </StyledUnpauseButton>
    )
}

export const PlayerFormButton = ({text, callback}) => {
    return (
        <StyledPlayerFormButton onClick={callback}>
            {text}
        </StyledPlayerFormButton>
    )
}