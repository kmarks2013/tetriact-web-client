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
        

return (
    <StyledHighScores>

                <h2>
                    High Scores:
                </h2>
                { scores.length && player ?
                    <div>
                        {gameScores().length ?
                            <>
                                <table>
                                    <tbody>
                                        {gameScores().map( score => {
                                            return(
                                                <>
                                                    {score.id === player.id?
                                                        <tr style={{color: 'red'}} key={player.id}>
                                                            <td>{i++}</td>
                                                            <td>{player.gamertag}</td>
                                                            <td>{player.score}</td>
                                                        {/* <p style={{color: 'red'}}>{player.gamertag}</p> */}
                                                        </tr>
                                                    :
                                                        <tr style={{color: 'white'}} key={player.id}>
                                                            <td>{i++}</td>
                                                            <td>{score.gamertag}</td>
                                                            <td>{score.score}</td>
                                                        {/* <p style={{color: 'white'}}> {score.score} </p> */}
                                                        </tr>
                                                    }
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                        :
                            <>
                                    <table>
                                        <tbody>
                                           {topScores().map( top => {
                                              return( <>
                                                   {top.id === player.id ?
                                                        <tr style={{color: 'red'}}>
                                                            <td>{playerIndex}</td>
                                                            <td>{player.gamertag}</td>
                                                            <td>{player.score}</td>
                                                        </tr>
                                                        :
                                                        <tr style={{color: 'white'}}>
                                                            <td>{i++}</td>
                                                            <td>{top.gamertag}</td>
                                                            <td>{top.score}</td>
                                                        </tr>
                                                   }
                                               </>
                                               )
                                            })}
                                        </tbody>
                                    </table>
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
