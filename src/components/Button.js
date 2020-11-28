import React from 'react'
import { StyledButton } from './styles/StyledButton'


export const Button = ({text, callback, width, margin}) => {
    return (
        <StyledButton width={width} margin={margin} onClick={callback} >
            {text}
        </StyledButton>
    )
}

export const PauseButton =({text, callback}) =>{
    return (
        <StyledUnpauseButton onClick={callback}>
            {text}
        </StyledUnpauseButton>
    )
}