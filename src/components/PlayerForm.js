import React, {useState} from 'react'
import Button from './Button'
import { StyledGameOverMenu } from './styles/StyledPopUps'

export const PlayerForm = ({score, newGame}) => {
    const [gamerTag, setGamerTag] = useState('')

    return (
        <StyledGameOverMenu>
            {console.log(gamerTag)}
            <h2> Game Over... </h2>
            <h3> Your Score Was: {score} </h3>
            <h4> To save your score enter a name below:</h4>
            <form>
                <input type='text' />
                <input type='submit' />
            </form>
            <Button text='Play Again?' callback={newGame} />
        </StyledGameOverMenu>
    )
}
