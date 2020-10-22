import { useState, useCallback } from 'react'
import { TETROMINOS, randomTetromino } from '../tetrominos'
import { checkCollisson, NEXT_WIDTH } from '../gameHelpers'

export const useNextTetro = () => {
    const [nextTetro, setNextTetro] =useState(TETROMINOS[0].shape)

    const resetTetro = useCallback(() => {
        setNextTetro(randomTetromino().shape)
    }, [])

    console.log(nextTetro)
    return [nextTetro]
}
