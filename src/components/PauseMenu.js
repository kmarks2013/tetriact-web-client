import React from 'react'
import { UnpauseButton } from './Button'
import { StyledPopUpWrapper, StyledCloseButton } from './styles/StyledPopUps'
import { StyledPauseMenu} from './styles/StyledPauseMenu'

const PauseMenu = ({callback}) => {
    return (
        <StyledPopUpWrapper>
            <StyledPauseMenu>
            <StyledCloseButton onClick={callback}>X</StyledCloseButton>
                <h2> Game Paused </h2>
                <UnpauseButton text='Resume Game' callback={callback}/>
                <p> (Or press ESC to Resume )</p>
            </StyledPauseMenu>
        </StyledPopUpWrapper>
    )
}

export default PauseMenu
