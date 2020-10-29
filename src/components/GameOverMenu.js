import React, { useState } from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledGameOverMenu } from './styles/StyledPopUps'

import { useGameStatus } from '../hooks/useGameStatus'


const GameOverMenu = ({newGame, closeMenu, clearBoard }) => {
    const [gamerTag, setGamerTag] = useState('')
    const {score} = useGameStatus()

    const handleChange = (e) => {
        setGamerTag(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted', gamerTag)
        setGamerTag('')
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
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='text' value={gamerTag}/>
                    <input type="submit"/>
                </form>

                <Button text='Play Again?' callback={newGame}/>
                <p>X</p>

            </StyledGameOverMenu>
        </StyledPopUpWrapper>

    )
}

export default GameOverMenu
