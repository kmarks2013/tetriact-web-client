import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


// const HighScores = ({player, scores, topTen}) => {
const HighScores = ({player}) => {
    const {scores, topTen, topScores, gameScores} = useScores(player)

    // i will need to lsit out the top ten socres... may make sense to get the top ten from useScores instead...
    let i = 1


    const playerIndex = scores.findIndex(score => score.id === player.id) + 1
    // const renderScores = () => {
        //     let newScores = []
    //     topTen
    //     if (topTen.includes(player)){
    //         console.log('hi')
    //     } else{
        //         console.log('bye')
        //     }
        // }
        

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

                <h2>
                    High Scores:
                </h2>
                { scores.length && player ?
                    <div>
                        {gameScores().length ?
                        // mapthorugh game scores to render out the top 10
                            <>
                                {gameScores().map( score => {
                                    return (
                                        <>
                                        {score.id === player.id?
                                            <p style={{color: 'red'}}>{player.gamertag}</p>
                                        :
                                            <p style={{color: 'white'}}> {score.score} </p>
                                        }
                                        </>
                                    )
                                })}
                           {/* <p>hi</p> */}
                            </>
                        :
                            <>
                                {topScores().map( top => {
                                    return (
                                    <>
                                    {top.id === player.id ?
                                            <p style={{color: 'red'}}>{playerIndex} {player.gamertag} {player.score}</p>
                                        :
                                            <p style={{color: 'white'}}> {i++} {top.gamertag} {top.score}</p>
                                        }
                                        {console.log(top.id, player.id, 'ternary')}
                                        {/* return <p>{top.gamerTag}</p> */}
                                    </>
                                    )
                                })}
                            <p>no</p>
                            </>
                        }
                    </div>
                :
                <h3> Loading Scores...</h3>
                }
            </StyledHighScores>
    )
}

export default HighScores
