import React from 'react'
import { StyledPopUpWrapper, StyledHighScores } from './styles/StyledPopUps'
import { useScores } from '../hooks/useScores'


// const HighScores = ({player, scores, topTen}) => {
const HighScores = ({player}) => {
    const {scores, topTen, topScores} = useScores(player)

    // i will need to lsit out the top ten socres... may make sense to get the top ten from useScores instead...
    let i = 1

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
    {topScores()}
    {console.log(topTen)}
                {/* {renderScores()} */}
                {/* { console.log(scores, topTen, playddfer)} */}
                <h2>
                    High Scores:
                </h2>
                { scores.length && player ?
                    <div>
                            {topTen.map( top => {
                            return ( <div>
                               {top.id === player.id ?
                                    <p style={{color: 'white'}}>{player.gamertag} -player</p>
                                :
                                    <p style={{color: 'white'}}>{top.gamertag} -top</p>
                                }
                                {console.log(top.id, player.id, 'ternary')}
                                return <p>{top.gamerTag}</p>
                             </div>
                            )
                            })}
                    </div>
                :
                <h3> Loading Scores...</h3>
                }
            </StyledHighScores>
    )
}

export default HighScores
