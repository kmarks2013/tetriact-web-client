import React, {useState} from 'react'
import Button from './Button'
import { StyledGameOverMenu, StyledCloseButton } from './styles/StyledPopUps'

export const PlayerForm = ({score, newGame, handleSubmit, setGamerTag, gamerTag, closeMenu}) => {

    const handleChange = (e) => {
        setGamerTag(e.target.value)
    }

    return (
        <StyledGameOverMenu>
            <h2> Game Over... </h2>
            <h3> Your Score Was: {score} </h3>
            <h4> To save your score enter a name below:</h4>
            <form onSubmit={handleSubmit}>
                <label>Gamertag:
                    <input onChange={handleChange} type='text' vlaue={gamerTag} />
                </label>
                {/* <label>Submit:</label> */}
                <input type='submit' />
            </form>
            <Button text='Play Again?' callback={newGame} />
        </StyledGameOverMenu>
    )
}
