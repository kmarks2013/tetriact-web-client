import React from 'react'
import { StyledButton } from './styles/StyledButton'


const Button = ({text, callback, width, margin}) => {
    return (
        <StyledButton width={width} onClick={callback} >
                {text}
        </StyledButton>
    )
}

export default Button
