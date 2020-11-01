import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


// const HighScores = ({player, scores, topTen}) => {
const HighScores = ({player}) => {
    const {scores, topTen} = useScores()

    // i will need to lsit out the top ten socres... may make sense to get the top ten from useScores instead...
    let i = 1


    {/* <table>
        <tbody> */}
    {/* return  (<tr key={top.id}>
            <td> {i++}. </td>
            <td>{top.gamertag}</td>
            <td>{top.score}</td>
        </tr>
    ) */}
    {/* </tbody> */}
{/* </table> */}

return (
    <StyledHighScores>
    {console.log(topTen)}
                {/* {renderScores()} */}
                { console.log(scores, topTen, player)}
                <h2>
                    High Scores:
                </h2>
                {/* { scores.length && player ?
                    <div>
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
