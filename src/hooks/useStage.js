import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) =>{
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0)

    useEffect( () => {
        setRowsCleared(0)

        const updateStage = prevStage => {
            //Frst flush the stage
            //later refacotr for a for loop since it will be faster than a map.
            const newStage = prevStage.map(row =>
                row.map( cell => ( cell[1] === 'clear' ? [0,'clear']: cell) )
                )

            //renders the tetromino on re-render of stage
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) =>{
                    if (value !== 0) {
                        newStage[y + player.pos.y][x+ player.pos.x] = [
                            value,
                            `${player.collided ? 'merged': 'clear'}`,

                        ]
                    }
                })
            })

            //Then check if we collided 
            if (player.collided) {
                resetPlayer()
            }

            return newStage
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage]
}