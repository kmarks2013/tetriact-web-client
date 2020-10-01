import {useState, useEffect, useCallback} from 'react'

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)

    const linePoints = [40, 100, 300, 1200]

    const calcScore = useCallback(() => {
        // if we have a score:
        if (rowsCleared > 0 ){
            // this is based on how the og tetris calculates its score//
            setScore( prev => prev + linePoints[rowsCleared-1] * (level + 1))
            setRows(prev => prev + rowsCleared)

        }
    }, [level, linePoints, rowsCleared])
}