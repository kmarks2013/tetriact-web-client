import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


const HighScores = () => {
    const {scores, topTen} = useScores()

    // i will need to lsit out the top ten socres... may make sense to get the top ten from useScores instead...
    let i = 1

    return (
            <StyledHighScores>
                {console.log(scores, topTen)}
                <h2>
                    High Scores:
                </h2>
                { scores.length ?
                    <table>
                        <tbody>
                            {topTen.map( top => {
                                return  (<tr key={top.id}>
                                        <td> {i++}. </td>
                                        <td>{top.gamertag}</td>
                                        <td>{top.score}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                :
                <h3> Loading Scores...</h3>
                }
            </StyledHighScores>
    )
}

export default HighScores
