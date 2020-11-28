import React from 'react'
import { PauseButton } from './Button'
import { StyledPopUpWrapper, StyledCloseButton } from './styles/StyledPopUps'
import { StyledPauseMenu} from './styles/StyledPauseMenu'
const PauseMenu = ({callback}) => {
    return (
        <StyledPopUpWrapper>
            <StyledPauseMenu >
            <StyledCloseButton onClick={callback}>X</StyledCloseButton>
                <h2> Game Paused </h2>
                <PauseButton text='Resume Game' callback={callback}/>
            </StyledPauseMenu>
        </StyledPopUpWrapper>
    )
}

export default PauseMenu
