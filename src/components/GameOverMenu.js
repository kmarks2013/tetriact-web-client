import React from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledGameOverMenu } from './styles/StyledPopUps'

const GameOverMenu = ({callback, score}) => {
    return (
        <StyledPopUpWrapper>
            <StyledGameOverMenu>

                <p>
                To save your score enter a name below:
                </p>
                <p>
                To see if you scored in the top 10 enter a name below:
                </p>
                <p>
                This will then be a form.
                </p>
                <p>
                the form once complete will then take you to the high scores screen.
                </p>
                <p>

                This screen will also allow a player to restart from scratch, or close their window so they can look at their game.
                </p>

                <Button text='Play Again?' callback={() =>console.log('restart the game')}/>
                <p>X</p>

            </StyledGameOverMenu>
        </StyledPopUpWrapper>

    )
}

export default GameOverMenu
