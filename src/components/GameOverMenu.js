import React, { useState } from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledGameOverMenu } from './styles/StyledPopUps'

const GameOverMenu = ({callback, score}) => {
    const [gamerTag, setGamerTag] = useState('')

    const handleChange = (e) => {
        setGamerTag(e.target.value)
    }

    const handleSubmit = () => {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <StyledPopUpWrapper>
            {console.log(gamerTag)}
            <StyledGameOverMenu>
                <h2>
                Game Over...
                </h2>
                <h3>
                Your Score was: {score}!
                </h3>
                <h4>
                To save your score enter a name below:
                </h4>
                <form>
                    <input onChange={handleChange} type='text' value={gamerTag}/>
                    <input type="submit"/>
                </form>
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
