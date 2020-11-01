import React, {useState} from 'react'
import Button from './Button'
import { StyledGameOverMenu } from './styles/StyledPopUps'

export const PlayerForm = ({score, newGame, handleSubmit, setGamerTag, gamerTag}) => {
    // const [gamerTag, setGamerTag] = useState('')

    const handleChange = (e) => {
        setGamerTag(e.target.value)
    }

    return (
        <StyledGameOverMenu>
            <h2> Game Over... </h2>
            <h3> Your Score Was: {score} </h3>
            <h4> To save your score enter a name below:</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' vlaue={gamerTag} />
                <input type='submit' />
            </form>
            <Button text='Play Again?' callback={newGame} />
        </StyledGameOverMenu>
    )
}
