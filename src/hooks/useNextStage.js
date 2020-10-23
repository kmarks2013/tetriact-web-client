import { useState, useEffect } from 'react'
import { createNext } from '../gameHelpers'

export const useNextStage = ( nextTetro, resetTetro, player) => {
    const [nextStage, setNextStage] = useState(createNext())
    // console.log(player)
    useEffect( () => {

        const updateNextStage = prevNextStage =>{
            const newNextStage = prevNextStage.map(row =>
                row.map( cell => (cell[1] === 'clear' ?  [0,'clear']: cell ) )
                )
            // console.log (newNextStage)
            nextTetro.tetromino.forEach((row, y) => {
                // console.log(row, y)
                row.forEach((value, x) =>{
                    // console.log(nextTetro)
                    if (value !== 0) {
                        newNextStage[y + nextTetro.pos.y][x + nextTetro.pos.x] = [value, `${player.collided ? 'merged': 'clear' }`]
                    }
                })
            })

            if (player.collided) {
                console.log('collided', player.collided )
                setNextStage(createNext())
                resetTetro()
                console.log(nextTetro)
            }
            return newNextStage
        }

        setNextStage( prev =>  updateNextStage(prev))

    }, [nextTetro, resetTetro, player])

    return [nextStage, setNextStage]
}