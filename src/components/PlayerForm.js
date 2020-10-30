import React from 'react'
import { StyledGameOverMenu } from './styles/StyledPopUps'


export const PlayerForm = ({score, newGame}) => {
    return (
        <div>
            {console.log(score, newGame)}
            <h2> Game Over... </h2>
            <h3> Your Score Was: a score </h3>
            <h4> To save your score enter a name below:</h4>
            <form>
                <input type='text' />
                <input type='submit' />
            </form>
        </div>
    )
}
