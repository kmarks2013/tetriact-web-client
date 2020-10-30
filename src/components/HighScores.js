import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


const HighScores = () => {
    const {scores, topTen} = useScores()

    // i will need to lsit out the top ten socres... may make sense to get the top ten from useScores instead...

    return (
        <StyledPopUpWrapper>
        {console.log(scores, topTen)}
            <StyledHighScores>
                <h2>
                    High Scores:
                </h2>
                    <table>
                        { scores.length ?
                            topTen.map( top => {
                                return  (<tr>
                                            <td>{top.gamertag}</td>
                                            <td>{top.score}</td>
                                        </tr>
                                )
                            }) : null
                        }
                    </table>
            </StyledHighScores>
        </StyledPopUpWrapper>

    )
}

export default HighScores
