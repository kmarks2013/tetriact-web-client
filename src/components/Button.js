import React from 'react'
import { StyledStartButton } from './styles/StyledStartButton'


const Button = ({text, callback}) => {
    return (
        <StyledStartButton onClick={callback} >
                {text}
        </StyledStartButton>
    )
}

export default Button
