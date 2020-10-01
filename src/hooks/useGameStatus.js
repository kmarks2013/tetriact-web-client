import {useState, useEffect, useCallback} from 'react'

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)
}