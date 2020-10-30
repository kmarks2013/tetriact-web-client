import React, { useState } from 'react'
import Button from './Button'
import { StyledPopUpWrapper } from './styles/StyledPopUps'

import { useScores } from '../hooks/useScores'
import { PlayerForm } from './PlayerForm'
import HighScores from './HighScores'


const GameOverMenu = ({newGame, closeMenu, clearBoard, score }) => {
    const [gamerTag, setGamerTag] = useState('')
    const [form, setForm] = useState(true)
    const {scores} = useScores()

    const handleSubmit = ( e ) => {
        e.preventDefault()
        console.log('submitted', gamerTag)
        setForm(false)
        // clearBoard()
    }

    return (
        <StyledPopUpWrapper>
            {console.log(form)}
            {form ? <PlayerForm score={score} newGame={newGame} handleSubmit={handleSubmit} setGamerTag={setGamerTag} gamerTag={gamerTag}/>: <HighScores/>}
            <p onClick={closeMenu}>X</p>
            {/* <HighScores /> */}
        </StyledPopUpWrapper>

    )
}

export default GameOverMenu
