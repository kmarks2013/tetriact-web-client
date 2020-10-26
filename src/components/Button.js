import React from 'react'
import { StyledButton } from './styles/StyledButton'


const Button = ({text, callback}) => {
    return (
        <StyledStartButton onClick={callback} >
                {text}
        </StyledStartButton>
    )
}

export default Button
