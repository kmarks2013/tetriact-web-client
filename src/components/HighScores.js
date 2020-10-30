import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


const HighScores = () => {
    const {scores, topTen} = useScores()

    // i will need to lsit out the top ten socres... may make sense to get the top ten from useScores instead...
    let i = 1

    return (
        <StyledPopUpWrapper>
        {console.log(scores, topTen)}
            <StyledHighScores>
                <h2>
                    High Scores:
                </h2>
                    <table>
                        <tbody>
                            { scores.length ?
                                topTen.map( top => {
                                    return  (<tr key={top.id}>
                                                <td> {i++}. </td>
                                                <td>{top.gamertag}</td>
                                                <td>{top.score}</td>
                                            </tr>
                                    )
                                }) : <h3> Loading Scores...</h3>
                            }
                        </tbody>
                    </table>
            </StyledHighScores>
        </StyledPopUpWrapper>

    )
}

export default HighScores
