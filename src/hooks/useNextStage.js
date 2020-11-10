import { useState, useEffect } from 'react'
import { createNext } from '../gameHelpers'

export const useNextStage = ( nextTetro, resetTetro, player) => {
    const [nextStage, setNextStage] = useState(createNext())
    useEffect( () => {

        const updateNextStage = prevNextStage =>{
            const newNextStage = prevNextStage.map(row =>
                row.map( cell => (cell[1] === 'clear' ?  [0,'clear']: cell ) )
                )
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
                setNextStage(createNext())
                resetTetro()
            }
            return newNextStage
        }

        setNextStage( prev =>  updateNextStage(prev))

    }, [nextTetro, resetTetro, player])

    return [nextStage, setNextStage]
}