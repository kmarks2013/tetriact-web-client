import React, { useState } from 'react'
import { StyledPopUpWrapper, StyledCloseButton } from './styles/StyledPopUps'

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
            {form ? <PlayerForm score={score} newGame={newGame} handleSubmit={handleSubmit} closeMenu={closeMenu} setGamerTag={setGamerTag} gamerTag={gamerTag}/>:  null }
            { highScores ? <HighScores player={player} closeMenu={closeMenu} />  : null}
            {/* <HighScores /> */}
        </StyledPopUpWrapper>

    )
}

export default GameOverMenu
