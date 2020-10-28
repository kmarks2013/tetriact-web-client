import React from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledPauseMenu } from './styles/StyledPopUps'

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
