import React, { useState } from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledGameOverMenu } from './styles/StyledPopUps'

import { useScores } from '../hooks/useScores'
import { PlayerForm } from './PlayerForm'


const GameOverMenu = ({newGame, closeMenu, clearBoard, score }) => {
    const [gamerTag, setGamerTag] = useState('')
    const {scores} = useScores()

    const handleChange = (e) => {
        setGamerTag(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted', gamerTag)
        setGamerTag('')
        clearBoard()

    }

    return (
        <StyledPopUpWrapper>
            {/* <StyledGameOverMenu>
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
                <p onClick={closeMenu}>X</p>

            </StyledGameOverMenu> */}
            <PlayerForm />
        </StyledPopUpWrapper>

    )
}

export default GameOverMenu
