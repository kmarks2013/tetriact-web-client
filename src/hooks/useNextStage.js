import { useState, useEffect } from 'react'
import { createNext } from '../gameHelpers'

export const useNextStage = ( nextTetro, resetTetro, player) => {
    const [nextStage, setNextStage] = useState(createNext())

    useEffect( () => {

        const updateNextStage = prevNextStage =>{
            const newNextStage = prevNextStage.map(row =>
                row.map( cell => (cell[1] === 'clear' ?  [0,'clear']: cell ) )
                )
            // console.log (newNextStage)
            nextTetro.tetromino.forEach((row, y) => {
                // console.log(row, y)
                row.forEach((value, x) =>{
                    console.log(nextTetro)
                    if (value !== 0) {
                        newNextStage[y + nextTetro.pos.y][x + nextTetro.pos.x] = [value, `${player.collided ? 'merged': 'clear' }`]
                    }
                })
            })
            return newNextStage
        }


        setNextStage( prev =>  updateNextStage(prev))

    }, [nextTetro, resetTetro])

    return [nextStage]
}