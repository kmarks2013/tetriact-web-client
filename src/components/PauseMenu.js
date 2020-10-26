import React from 'react'
import Button from './Button'
import { StyledPauseMenuWrapper, StyledPauseMenu } from './styles/StyledPauseMenu'

const PauseMenu = ({callback}) => {
    return (
        <StyledPauseMenuWrapper>
            <StyledPauseMenu>
                Game Paused
                <Button text='Resume Game' callback={callback} />
            </StyledPauseMenu>
        </StyledPauseMenuWrapper>
    )
}

export default PauseMenu
