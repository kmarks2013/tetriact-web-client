import React from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledPauseMenu } from './styles/StyledPopUps'

const PauseMenu = ({callback}) => {
    return (
        <StyledPopUpWrapper>
            <StyledPauseMenu>
                Game Paused
                <Button text='Resume Game' callback={callback} />
            </StyledPauseMenu>
        </StyledPopUpWrapper>
    )
}

export default PauseMenu
