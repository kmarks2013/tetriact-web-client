import React from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledPauseMenu } from './styles/StyledPopUps'

const PauseMenu = ({callback}) => {
    return (
        <StyledPopUpWrapper>
            <StyledPauseMenu >
                <h1>Game Paused</h1>
                <Button text='Resume Game' callback={callback} />
            </StyledPauseMenu>
        </StyledPopUpWrapper>
    )
}

export default PauseMenu
