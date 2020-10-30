import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


const HighScores = () => {
    return (
        <StyledPopUpWrapper>
            <StyledHighScores>
                <h2>
                    Adds a basic render for the high scores
                </h2>
            </StyledHighScores>
        </StyledPopUpWrapper>

    )
}

export default HighScores
