import React, {useState} from 'react'
import { PlayerFormButton } from './Button'
import { StyledPlayerForm } from './styles/StyledPlayerForm'
import { StyledCloseButton } from './styles/StyledPopUps'

export const PlayerForm = ({score, newGame, handleSubmit, setGamerTag, gamerTag, closeMenu}) => {
    const [disabled, setDisabled] = useState(false)

    const handleChange = (e) => {
        setGamerTag(e.target.value)
    }

    const submitForm = () => {
        handleSubmit()
        setDisabled(true)
    }

    return (
        <StyledPlayerForm>
            <StyledCloseButton onClick={closeMenu}>X</StyledCloseButton>
            <h2> Game Over... </h2>
            <h3> Your Score Was: {score} </h3>
            <h4> To save your score enter a name below:</h4>
            <form onSubmit={submitForm}>
                <label>Gamertag:
                    <input onChange={handleChange} type='text' vlaue={gamerTag} />
                </label>
                <PlayerFormButton text="Save Your Score!">
                <input type='submit' disabled={disabled} />
                </PlayerFormButton>
            </form>
            <PlayerFormButton text='Play Again?' callback={newGame} />
        </StyledPlayerForm>
    )
}
