import { useState, useEffect } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = (player, resetPlayer) =>{
    const [stage, setStage] = useState(createStage())

    useEffect( () => {
        const updateStage = prevStage => {
            //Frst flush the stage
            //later refacotr for a for loop since it will be faster than a map.
            const newStage = prevStage.map(row =>
                row.map( cell => ( cell[1] === 'clear' ? [0,'clear']: cell) )
                )
        }

        setStage(prev => updateStage(prev))

    }, [])

    return [stage, setStage]
}