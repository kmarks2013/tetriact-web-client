import { useState, useCallback } from 'react'
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { NEXT_WIDTH } from '../gameHelpers'

export const useNextTetro = () => {
    const [nextTetro, setNextTetro] =useState({
        pos: {x:0, y:0},
        tetromino: TETROMINOS[0].shape
    })

    const resetTetro = useCallback(() => {
        setNextTetro({
            pos: {x: NEXT_WIDTH - 4, y: 0},
            tetromino: randomTetromino().shape
        })
    }, [])

    return [nextTetro, resetTetro]
}
