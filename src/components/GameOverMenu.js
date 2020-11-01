import React, { useState } from 'react'
import Button from './Button'
import { StyledPopUpWrapper } from './styles/StyledPopUps'

import { useScores } from '../hooks/useScores'
import { PlayerForm } from './PlayerForm'
import HighScores from './HighScores'


const GameOverMenu = ({newGame, closeMenu, clearBoard, score }) => {
    const [gamerTag, setGamerTag] = useState('')
    const [form, setForm] = useState(true)
    const [highScores, setHighScores] = useState(false)
    const {saveScore, player} = useScores()

    const handleSubmit = ( e ) => {
        e.preventDefault()
        setForm(false)
        setHighScores(true)
        saveScore(gamerTag, score)
        // clearBoard()
    }

    return (
        <StyledPopUpWrapper>
            {console.log(scores)}
            {console.log(player)}
            {console.log(form)}
            {form ? <PlayerForm score={score} newGame={newGame} handleSubmit={handleSubmit} setGamerTag={setGamerTag} gamerTag={gamerTag}/>:  null }

            { highScores ? <HighScores  scores={scores} topTen={topTen}  player={player} />  : null}
            <p onClick={closeMenu}>X</p>
            {/* <HighScores /> */}
        </StyledPopUpWrapper>

    )
}

export default GameOverMenu
