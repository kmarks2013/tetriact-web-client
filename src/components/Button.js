import React from 'react'
import { StyledButton } from './styles/StyledButton'


const Button = ({text, callback}) => {
    return (
        <StyledButton onClick={callback} >
                {text}
        </StyledButton>
    )
}

export default Button
