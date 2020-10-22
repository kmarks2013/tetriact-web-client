import { useState, useEffect } from 'react'
import { createNext } from '../gameHelpers'

export const useNextStage = ( nextTetro, resetTetro, player) => {
    const [nextStage, setNextStage] = useState(createNext())

    useEffect( () => {

        const updateNextStage = prevNextStage =>{
            const newNextStage = prevNextStage.map(row =>
                row.map( cell => (cell[1] === 'clear' ?  [0,'clear']: cell ) )
                )
        }

    },[])

    return [nextStage]
}