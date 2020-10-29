import React from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledPauseMenu } from './styles/StyledPopUps'

const PauseMenu = ({callback}) => {
    return (
        <StyledPopUpWrapper>
            <StyledPauseMenu >
                <h2>Game Paused</h2>
                <Button text='Resume Game' callback={callback} />
            </StyledPauseMenu>
        </StyledPopUpWrapper>
    )
}

export default PauseMenu
