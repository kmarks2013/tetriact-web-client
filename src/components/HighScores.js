import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


const HighScores = () => {
    const {scores, topTen} = useScores()

    return (
        <StyledPopUpWrapper>
        {console.log(scores, topTen)}
            <StyledHighScores>
                <h2>
                    High Scores:
                </h2>
            </StyledHighScores>
        </StyledPopUpWrapper>

    )
}

export default HighScores
